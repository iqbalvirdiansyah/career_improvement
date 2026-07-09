import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  PenTool,
  Send,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  FileText,
  Mail,
  MessageSquare
} from "lucide-react";

type WritingType = "email" | "essay" | "message";

interface Correction {
  original: string;
  corrected: string;
  explanation: string;
  type: "grammar" | "vocabulary" | "style";
}

const WritingMode = () => {
  const [writingType, setWritingType] = useState<WritingType>("email");
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [corrections, setCorrections] = useState<Correction[]>([]);
  const [overallScore, setOverallScore] = useState<number | null>(null);

  const writingTypes = [
    { id: "email" as const, label: "Business Email", icon: <Mail className="w-4 h-4" /> },
    { id: "essay" as const, label: "Essay/Report", icon: <FileText className="w-4 h-4" /> },
    { id: "message" as const, label: "Casual Message", icon: <MessageSquare className="w-4 h-4" /> },
  ];

  const prompts: Record<WritingType, string> = {
    email: "Write a professional email requesting a meeting with your manager to discuss your career development...",
    essay: "Write a short paragraph about the importance of learning new languages in today's global economy...",
    message: "Write a casual message to a friend inviting them to join you for a weekend activity...",
  };

  const handleAnalyze = () => {
    if (!text.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockCorrections: Correction[] = [
        {
          original: "I want to",
          corrected: "I would like to",
          explanation: "More formal and polite for business context",
          type: "style",
        },
        {
          original: "discuss about",
          corrected: "discuss",
          explanation: "'Discuss' doesn't need 'about' after it",
          type: "grammar",
        },
      ];
      
      setCorrections(mockCorrections);
      setOverallScore(Math.floor(Math.random() * 20) + 75);
      setIsAnalyzing(false);
    }, 2000);
  };

  const clearAll = () => {
    setText("");
    setCorrections([]);
    setOverallScore(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                to="/ai-center" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium hidden sm:block">AI Center</span>
              </Link>
              
              <div className="h-4 w-px bg-border" />
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center">
                  <PenTool className="w-4 h-4 text-electric" />
                </div>
                <div>
                  <h1 className="text-sm font-semibold">Writing Practice</h1>
                  <p className="text-xs text-muted-foreground hidden sm:block">Professional Docs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Writing Type Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {writingTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => {
                setWritingType(type.id);
                clearAll();
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                writingType === type.id
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {type.icon}
              <span>{type.label}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Writing Area */}
          <div className="space-y-4">
            <div className="bg-card border border-border/50 rounded-2xl p-6">
              {/* Prompt */}
              <div className="flex items-start gap-3 p-4 bg-accent/10 rounded-xl mb-4">
                <Lightbulb className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{prompts[writingType]}</p>
              </div>

              {/* Text Area */}
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Start writing here..."
                className="w-full h-64 resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
              />

              {/* Word Count */}
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-muted-foreground">
                  {text.split(/\s+/).filter(Boolean).length} words
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={clearAll}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Clear
                  </button>
                  <button
                    onClick={handleAnalyze}
                    disabled={!text.trim() || isAnalyzing}
                    className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isAnalyzing ? "Analyzing..." : "Analyze"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Area */}
          <div className="space-y-4">
            {/* Score Card */}
            {overallScore !== null && (
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold ${
                    overallScore >= 85 ? "bg-green-100 text-green-600" : 
                    overallScore >= 70 ? "bg-yellow-100 text-yellow-600" : 
                    "bg-red-100 text-red-600"
                  }`}>
                    {overallScore}
                  </div>
                  <div>
                    <h3 className="font-semibold">Overall Score</h3>
                    <p className="text-sm text-muted-foreground">
                      {overallScore >= 85 ? "Excellent writing!" : 
                       overallScore >= 70 ? "Good job! Minor improvements needed." : 
                       "Keep practicing!"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Corrections */}
            {corrections.length > 0 && (
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-accent" />
                  Suggestions ({corrections.length})
                </h3>
                <div className="space-y-4">
                  {corrections.map((correction, i) => (
                    <div key={i} className="p-4 bg-muted/50 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                          correction.type === "grammar" ? "bg-red-100 text-red-600" :
                          correction.type === "vocabulary" ? "bg-blue-100 text-blue-600" :
                          "bg-purple-100 text-purple-600"
                        }`}>
                          {correction.type}
                        </span>
                      </div>
                      <div className="space-y-1 mb-2">
                        <p className="text-sm line-through text-muted-foreground">{correction.original}</p>
                        <p className="text-sm font-medium text-green-600 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          {correction.corrected}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground">{correction.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {corrections.length === 0 && overallScore === null && (
              <div className="bg-card border border-border/50 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <PenTool className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Write Something!</h3>
                <p className="text-sm text-muted-foreground">
                  Start writing and click "Analyze" to get AI feedback on your writing.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default WritingMode;
