import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Headphones,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Volume2,
  Clock
} from "lucide-react";

interface ListeningExercise {
  id: string;
  title: string;
  accent: string;
  duration: string;
  transcript: string;
  questions: {
    question: string;
    options: string[];
    correct: number;
  }[];
}

const ListeningMode = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<ListeningExercise | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);

  const exercises: ListeningExercise[] = [
    {
      id: "1",
      title: "Business Meeting Discussion",
      accent: "American",
      duration: "2:30",
      transcript: "Good morning everyone. Today we're going to discuss our quarterly sales report. As you can see from the data, we've exceeded our targets by fifteen percent. This is largely due to our new marketing strategy and the expansion into Asian markets. Let me walk you through the key highlights...",
      questions: [
        {
          question: "What is the meeting about?",
          options: ["Budget review", "Quarterly sales report", "New product launch", "Team building"],
          correct: 1,
        },
        {
          question: "By how much did they exceed their targets?",
          options: ["10%", "15%", "20%", "25%"],
          correct: 1,
        },
        {
          question: "What contributed to the success?",
          options: ["Cost cutting", "Marketing strategy and Asian expansion", "New employees", "Price increase"],
          correct: 1,
        },
      ],
    },
    {
      id: "2",
      title: "Job Interview Tips",
      accent: "British",
      duration: "3:15",
      transcript: "Welcome to today's podcast about job interview preparation. First impressions matter tremendously, so dress appropriately for the company culture. Research the company thoroughly before your interview. Prepare examples of your achievements that demonstrate your skills. And remember, it's perfectly acceptable to take a moment to think before answering difficult questions.",
      questions: [
        {
          question: "What should you do before the interview?",
          options: ["Arrive late", "Research the company", "Bring your pet", "Wear casual clothes"],
          correct: 1,
        },
        {
          question: "What should you prepare examples of?",
          options: ["Your failures", "Your achievements", "Your hobbies", "Your vacation"],
          correct: 1,
        },
        {
          question: "Is it okay to pause before answering?",
          options: ["Never", "Only for easy questions", "Yes, it's acceptable", "Only for 1 second"],
          correct: 2,
        },
      ],
    },
  ];

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    
    if (currentQuestion < (selectedExercise?.questions.length || 0) - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    if (!selectedExercise) return 0;
    let correct = 0;
    answers.forEach((answer, i) => {
      if (answer === selectedExercise.questions[i].correct) correct++;
    });
    return Math.round((correct / selectedExercise.questions.length) * 100);
  };

  const resetExercise = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setProgress(0);
    setShowTranscript(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    
    if (!isPlaying) {
      // Simulate audio progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                to={selectedExercise ? "#" : "/ai-center"} 
                onClick={selectedExercise ? () => { setSelectedExercise(null); resetExercise(); } : undefined}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium hidden sm:block">
                  {selectedExercise ? "Exercises" : "AI Center"}
                </span>
              </Link>
              
              <div className="h-4 w-px bg-border" />
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-coral/10 flex items-center justify-center">
                  <Headphones className="w-4 h-4 text-coral" />
                </div>
                <div>
                  <h1 className="text-sm font-semibold">Listening Practice</h1>
                  <p className="text-xs text-muted-foreground hidden sm:block">Multi-Accent Training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {!selectedExercise ? (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-6">Select an Exercise</h2>
            {exercises.map((exercise) => (
              <button
                key={exercise.id}
                onClick={() => setSelectedExercise(exercise)}
                className="w-full text-left bg-card border border-border/50 rounded-2xl p-6 hover:border-accent/50 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-coral" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold group-hover:text-accent transition-colors">
                      {exercise.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Volume2 className="w-4 h-4" />
                        {exercise.accent}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {exercise.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : !showResults ? (
          <div className="space-y-6">
            {/* Audio Player Card */}
            <div className="bg-card border border-border/50 rounded-2xl p-6">
              <h2 className="font-semibold text-lg mb-4">{selectedExercise.title}</h2>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                  {selectedExercise.accent} Accent
                </span>
                <span className="text-sm text-muted-foreground">{selectedExercise.duration}</span>
              </div>

              {/* Player Controls */}
              <div className="bg-muted/50 rounded-xl p-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                  </button>
                  
                  <div className="flex-1">
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setProgress(0)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Transcript Toggle */}
              <button
                onClick={() => setShowTranscript(!showTranscript)}
                className="mt-4 text-sm text-accent hover:underline"
              >
                {showTranscript ? "Hide Transcript" : "Show Transcript"}
              </button>
              
              {showTranscript && (
                <div className="mt-4 p-4 bg-muted/50 rounded-xl">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedExercise.transcript}
                  </p>
                </div>
              )}
            </div>

            {/* Questions */}
            {progress === 100 && (
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold">Comprehension Questions</h3>
                  <span className="text-sm text-muted-foreground">
                    {currentQuestion + 1} / {selectedExercise.questions.length}
                  </span>
                </div>

                <div className="mb-6">
                  <p className="font-medium mb-4">
                    {selectedExercise.questions[currentQuestion].question}
                  </p>
                  <div className="space-y-3">
                    {selectedExercise.questions[currentQuestion].options.map((option, i) => (
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
              </div>
            )}
          </div>
        ) : (
          /* Results */
          <div className="max-w-md mx-auto">
            <div className="bg-card border border-border/50 rounded-2xl p-8 text-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                calculateScore() >= 70 ? "bg-green-100" : "bg-yellow-100"
              }`}>
                <CheckCircle2 className={`w-10 h-10 ${
                  calculateScore() >= 70 ? "text-green-600" : "text-yellow-600"
                }`} />
              </div>
              
              <h2 className="text-2xl font-bold mb-2">{calculateScore()}%</h2>
              <p className="text-muted-foreground mb-6">
                Great listening skills! Keep practicing to improve further.
              </p>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={resetExercise}
                  className="px-6 py-3 bg-muted rounded-xl font-medium hover:bg-muted/80 transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={() => { setSelectedExercise(null); resetExercise(); }}
                  className="px-6 py-3 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-colors"
                >
                  More Exercises
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ListeningMode;
