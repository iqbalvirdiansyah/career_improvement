import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Languages,
  ArrowRightLeft,
  Send,
  CheckCircle2,
  XCircle,
  Lightbulb,
  RefreshCw
} from "lucide-react";

interface TranslationExercise {
  id: string;
  source: string;
  target: string;
  sourceText: string;
  correctTranslation: string;
  hints: string[];
}

const TranslationMode = () => {
  const [sourceLanguage, setSourceLanguage] = useState<"id" | "en">("id");
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userTranslation, setUserTranslation] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);

  const exercises: Record<string, TranslationExercise[]> = {
    "id-en": [
      {
        id: "1",
        source: "Indonesian",
        target: "English",
        sourceText: "Saya ingin memesan meja untuk makan malam.",
        correctTranslation: "I would like to book a table for dinner.",
        hints: ["book/reserve", "table", "dinner"],
      },
      {
        id: "2",
        source: "Indonesian",
        target: "English",
        sourceText: "Bagaimana cara menuju stasiun kereta?",
        correctTranslation: "How do I get to the train station?",
        hints: ["how", "get to", "train station"],
      },
      {
        id: "3",
        source: "Indonesian",
        target: "English",
        sourceText: "Bisakah Anda membantu saya dengan proyek ini?",
        correctTranslation: "Can you help me with this project?",
        hints: ["can you", "help", "project"],
      },
    ],
    "en-id": [
      {
        id: "4",
        source: "English",
        target: "Indonesian",
        sourceText: "I need to reschedule our meeting.",
        correctTranslation: "Saya perlu menjadwalkan ulang pertemuan kita.",
        hints: ["perlu", "jadwal ulang", "pertemuan"],
      },
      {
        id: "5",
        source: "English",
        target: "Indonesian",
        sourceText: "Could you send me the report by tomorrow?",
        correctTranslation: "Bisakah Anda mengirimkan laporan itu sebelum besok?",
        hints: ["bisakah", "mengirim", "laporan", "besok"],
      },
      {
        id: "6",
        source: "English",
        target: "Indonesian",
        sourceText: "Let's discuss this in the next meeting.",
        correctTranslation: "Mari kita bahas ini di pertemuan berikutnya.",
        hints: ["mari", "bahas", "pertemuan berikutnya"],
      },
    ],
  };

  const currentKey = sourceLanguage === "id" ? "id-en" : "en-id";
  const currentExercises = exercises[currentKey];
  const exercise = currentExercises[currentExercise];

  const toggleDirection = () => {
    setSourceLanguage(sourceLanguage === "id" ? "en" : "id");
    setCurrentExercise(0);
    setUserTranslation("");
    setShowResult(false);
    setScore(null);
    setShowHint(false);
  };

  const handleSubmit = () => {
    if (!userTranslation.trim()) return;

    // Simple similarity check (in real app, use AI comparison)
    const similarity = calculateSimilarity(
      userTranslation.toLowerCase().trim(),
      exercise.correctTranslation.toLowerCase().trim()
    );
    
    setScore(similarity);
    setShowResult(true);
  };

  const calculateSimilarity = (a: string, b: string): number => {
    const wordsA = a.split(/\s+/);
    const wordsB = b.split(/\s+/);
    let matches = 0;
    
    wordsA.forEach(word => {
      if (wordsB.some(w => w.includes(word) || word.includes(w))) {
        matches++;
      }
    });
    
    return Math.min(100, Math.round((matches / Math.max(wordsA.length, wordsB.length)) * 100) + 20);
  };

  const nextExercise = () => {
    setCurrentExercise((prev) => (prev + 1) % currentExercises.length);
    setUserTranslation("");
    setShowResult(false);
    setScore(null);
    setShowHint(false);
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
                  <Languages className="w-4 h-4 text-electric" />
                </div>
                <div>
                  <h1 className="text-sm font-semibold">Translation Practice</h1>
                  <p className="text-xs text-muted-foreground hidden sm:block">ID ↔ EN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8 max-w-3xl">
        {/* Language Direction Switcher */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className={`px-4 py-2 rounded-lg ${sourceLanguage === "id" ? "bg-foreground text-background" : "bg-muted"}`}>
            🇮🇩 Indonesian
          </div>
          <button
            onClick={toggleDirection}
            className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent transition-colors"
          >
            <ArrowRightLeft className="w-5 h-5" />
          </button>
          <div className={`px-4 py-2 rounded-lg ${sourceLanguage === "en" ? "bg-foreground text-background" : "bg-muted"}`}>
            🇺🇸 English
          </div>
        </div>

        {/* Exercise Card */}
        <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 mb-6">
          {/* Progress */}
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
            <span>Exercise {currentExercise + 1} of {currentExercises.length}</span>
            <div className="flex gap-1">
              {currentExercises.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${i === currentExercise ? "bg-accent" : "bg-border"}`} 
                />
              ))}
            </div>
          </div>

          {/* Source Text */}
          <div className="mb-6">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Translate from {exercise.source}
            </p>
            <p className="text-xl sm:text-2xl font-display font-semibold">
              {exercise.sourceText}
            </p>
          </div>

          {/* Hint */}
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-2 text-sm text-accent hover:underline mb-4"
          >
            <Lightbulb className="w-4 h-4" />
            {showHint ? "Hide hint" : "Show hint"}
          </button>
          
          {showHint && (
            <div className="p-4 bg-accent/10 rounded-xl mb-6">
              <p className="text-sm text-muted-foreground">
                Key words: {exercise.hints.join(", ")}
              </p>
            </div>
          )}

          {/* Translation Input */}
          <div className="mb-6">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Your translation ({exercise.target})
            </p>
            <textarea
              value={userTranslation}
              onChange={(e) => setUserTranslation(e.target.value)}
              placeholder="Type your translation here..."
              disabled={showResult}
              className="w-full h-24 resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent disabled:opacity-50"
            />
          </div>

          {/* Result */}
          {showResult && (
            <div className={`p-4 rounded-xl mb-6 ${
              score && score >= 80 ? "bg-green-100" : 
              score && score >= 50 ? "bg-yellow-100" : "bg-red-100"
            }`}>
              <div className="flex items-start gap-3">
                {score && score >= 80 ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-medium mb-1">
                    {score && score >= 80 ? "Great translation!" : "Keep practicing!"}
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-medium">Suggested answer:</span> {exercise.correctTranslation}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Similarity score: {score}%
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            {!showResult ? (
              <button
                onClick={handleSubmit}
                disabled={!userTranslation.trim()}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Check Translation</span>
              </button>
            ) : (
              <button
                onClick={nextExercise}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Next Exercise</span>
              </button>
            )}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-muted/50 rounded-xl p-4">
          <h3 className="font-medium text-sm mb-2">Translation Tips</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Focus on meaning, not word-for-word translation</li>
            <li>• Consider context and formality level</li>
            <li>• Use appropriate grammar for the target language</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default TranslationMode;
