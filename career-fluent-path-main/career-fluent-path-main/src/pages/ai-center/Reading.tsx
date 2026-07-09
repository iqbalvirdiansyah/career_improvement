import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  BookOpen,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Volume2,
  Clock,
  BarChart3
} from "lucide-react";

interface Article {
  id: string;
  title: string;
  level: "beginner" | "intermediate" | "advanced";
  readTime: string;
  content: string;
  questions: {
    question: string;
    options: string[];
    correct: number;
  }[];
}

const ReadingMode = () => {
  const [selectedLevel, setSelectedLevel] = useState<"beginner" | "intermediate" | "advanced">("beginner");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const articles: Article[] = [
    {
      id: "1",
      title: "Working From Home: Tips for Success",
      level: "beginner",
      readTime: "3 min",
      content: `Working from home has become common for many professionals. To be successful, you need a dedicated workspace. Choose a quiet area in your home where you can focus.

Set a regular schedule. Start and end work at the same time each day. This helps maintain work-life balance.

Take regular breaks. Stand up, stretch, and rest your eyes. Short breaks help you stay productive throughout the day.

Stay connected with your team. Use video calls and chat applications to communicate with colleagues. Good communication is essential for remote work success.`,
      questions: [
        {
          question: "What is the first tip for working from home successfully?",
          options: ["Take breaks", "Have a dedicated workspace", "Use video calls", "Work long hours"],
          correct: 1,
        },
        {
          question: "Why should you set a regular schedule?",
          options: ["To work more hours", "To maintain work-life balance", "To avoid breaks", "To isolate yourself"],
          correct: 1,
        },
        {
          question: "How can you stay connected with your team?",
          options: ["Work alone", "Avoid communication", "Use video calls and chat apps", "Send letters"],
          correct: 2,
        },
      ],
    },
    {
      id: "2",
      title: "The Global Economy and Digital Transformation",
      level: "intermediate",
      readTime: "5 min",
      content: `The global economy has undergone significant transformation in recent years, largely driven by technological advancements. Digital transformation is no longer optional for businesses—it's a necessity for survival in the modern marketplace.

Companies that embrace digital technologies gain competitive advantages through improved efficiency, better customer experiences, and new revenue streams. However, this transition comes with challenges, including the need for workforce reskilling and cybersecurity concerns.

The COVID-19 pandemic accelerated digital adoption across industries. Remote work, e-commerce, and digital payment systems saw unprecedented growth. Organizations that had already invested in digital infrastructure were better positioned to adapt.

Looking forward, emerging technologies like artificial intelligence, blockchain, and the Internet of Things will continue reshaping industries. Businesses must remain agile and innovative to thrive in this rapidly evolving landscape.`,
      questions: [
        {
          question: "According to the article, digital transformation is:",
          options: ["Optional for businesses", "A necessity for survival", "Only for large companies", "No longer relevant"],
          correct: 1,
        },
        {
          question: "What accelerated digital adoption across industries?",
          options: ["New government policies", "The COVID-19 pandemic", "Lower technology costs", "Customer demands"],
          correct: 1,
        },
        {
          question: "Which technologies are mentioned as reshaping industries in the future?",
          options: ["AI, blockchain, and IoT", "Social media only", "Traditional manufacturing", "Print media"],
          correct: 0,
        },
      ],
    },
  ];

  const filteredArticles = articles.filter(a => a.level === selectedLevel);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    
    if (currentQuestion < (selectedArticle?.questions.length || 0) - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    if (!selectedArticle) return 0;
    let correct = 0;
    answers.forEach((answer, i) => {
      if (answer === selectedArticle.questions[i].correct) correct++;
    });
    return Math.round((correct / selectedArticle.questions.length) * 100);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const backToList = () => {
    setSelectedArticle(null);
    resetQuiz();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                to={selectedArticle ? "#" : "/ai-center"} 
                onClick={selectedArticle ? backToList : undefined}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium hidden sm:block">
                  {selectedArticle ? "Articles" : "AI Center"}
                </span>
              </Link>
              
              <div className="h-4 w-px bg-border" />
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h1 className="text-sm font-semibold">Reading Practice</h1>
                  <p className="text-xs text-muted-foreground hidden sm:block">Comprehension</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {!selectedArticle ? (
          <>
            {/* Level Selector */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {(["beginner", "intermediate", "advanced"] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                    selectedLevel === level
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>

            {/* Articles List */}
            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <button
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="w-full text-left bg-card border border-border/50 rounded-2xl p-6 hover:border-accent/50 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <BarChart3 className="w-4 h-4" />
                          {article.questions.length} questions
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {!showResults ? (
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Article Content */}
                <div className="bg-card border border-border/50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-lg">{selectedArticle.title}</h2>
                    <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="prose prose-sm max-w-none">
                    {selectedArticle.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Questions */}
                <div className="bg-card border border-border/50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold">Comprehension Quiz</h3>
                    <span className="text-sm text-muted-foreground">
                      {currentQuestion + 1} / {selectedArticle.questions.length}
                    </span>
                  </div>

                  <div className="mb-6">
                    <p className="font-medium mb-4">
                      {selectedArticle.questions[currentQuestion].question}
                    </p>
                    <div className="space-y-3">
                      {selectedArticle.questions[currentQuestion].options.map((option, i) => (
                        <button
                          key={i}
                          onClick={() => handleAnswer(i)}
                          className="w-full text-left p-4 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-all"
                        >
                          <span className="text-sm">{option}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="flex gap-1">
                    {selectedArticle.questions.map((_, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 h-1 rounded-full ${
                          i < currentQuestion ? "bg-accent" : 
                          i === currentQuestion ? "bg-accent/50" : "bg-border"
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Results */
              <div className="max-w-md mx-auto">
                <div className="bg-card border border-border/50 rounded-2xl p-8 text-center">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                    calculateScore() >= 70 ? "bg-green-100" : "bg-red-100"
                  }`}>
                    {calculateScore() >= 70 ? (
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    ) : (
                      <XCircle className="w-10 h-10 text-red-600" />
                    )}
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2">{calculateScore()}%</h2>
                  <p className="text-muted-foreground mb-6">
                    You got {answers.filter((a, i) => a === selectedArticle.questions[i].correct).length} out of {selectedArticle.questions.length} questions correct!
                  </p>

                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={resetQuiz}
                      className="px-6 py-3 bg-muted rounded-xl font-medium hover:bg-muted/80 transition-colors"
                    >
                      Try Again
                    </button>
                    <button
                      onClick={backToList}
                      className="px-6 py-3 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-colors"
                    >
                      More Articles
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default ReadingMode;
