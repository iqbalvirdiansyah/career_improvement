import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Mic, 
  MicOff, 
  Volume2, 
  PlayCircle,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Target
} from "lucide-react";

interface PracticePhrase {
  id: string;
  text: string;
  phonetic: string;
  difficulty: "easy" | "medium" | "hard";
}

const SpeakingMode = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<"easy" | "medium" | "hard">("easy");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [attempts, setAttempts] = useState<{score: number; feedback: string}[]>([]);

  const phrases: Record<string, PracticePhrase[]> = {
    easy: [
      { id: "1", text: "Hello, how are you?", phonetic: "/həˈloʊ haʊ ɑːr juː/", difficulty: "easy" },
      { id: "2", text: "Nice to meet you.", phonetic: "/naɪs tuː miːt juː/", difficulty: "easy" },
      { id: "3", text: "Thank you very much.", phonetic: "/θæŋk juː ˈveri mʌtʃ/", difficulty: "easy" },
    ],
    medium: [
      { id: "4", text: "I would like to schedule a meeting.", phonetic: "/aɪ wʊd laɪk tuː ˈskedʒuːl ə ˈmiːtɪŋ/", difficulty: "medium" },
      { id: "5", text: "Could you please repeat that?", phonetic: "/kʊd juː pliːz rɪˈpiːt ðæt/", difficulty: "medium" },
      { id: "6", text: "Let me check my availability.", phonetic: "/let miː tʃek maɪ əˌveɪləˈbɪləti/", difficulty: "medium" },
    ],
    hard: [
      { id: "7", text: "The methodology requires thorough analysis.", phonetic: "/ðə ˌmeθəˈdɒlədʒi rɪˈkwaɪərz ˈθʌrə əˈnæləsɪs/", difficulty: "hard" },
      { id: "8", text: "We should prioritize sustainable development.", phonetic: "/wiː ʃʊd praɪˈɒrɪtaɪz səˈsteɪnəbl dɪˈveləpmənt/", difficulty: "hard" },
      { id: "9", text: "The entrepreneurial ecosystem is evolving.", phonetic: "/ði ˌɒntrəprəˈnɜːriəl ˈiːkəʊˌsɪstəm ɪz ɪˈvɒlvɪŋ/", difficulty: "hard" },
    ],
  };

  const currentPhrases = phrases[selectedDifficulty];
  const phrase = currentPhrases[currentPhrase];

  const handleRecord = () => {
    setIsRecording(!isRecording);
    
    if (isRecording) {
      // Simulate analysis result
      setTimeout(() => {
        const score = Math.floor(Math.random() * 30) + 70;
        const feedbacks = [
          "Good pronunciation! Try to emphasize the stressed syllables more.",
          "Well done! Watch your intonation at the end of sentences.",
          "Great job! Your rhythm is improving.",
          "Nice attempt! Focus on the 'th' sound.",
        ];
        setAttempts([...attempts, {
          score,
          feedback: feedbacks[Math.floor(Math.random() * feedbacks.length)]
        }]);
      }, 500);
    }
  };

  const nextPhrase = () => {
    setCurrentPhrase((prev) => (prev + 1) % currentPhrases.length);
    setAttempts([]);
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
                <div className="w-8 h-8 rounded-lg bg-coral/10 flex items-center justify-center">
                  <Mic className="w-4 h-4 text-coral" />
                </div>
                <div>
                  <h1 className="text-sm font-semibold">Speaking Practice</h1>
                  <p className="text-xs text-muted-foreground hidden sm:block">Pronunciation Lab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8 max-w-3xl">
        {/* Difficulty Selector */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {(["easy", "medium", "hard"] as const).map((diff) => (
            <button
              key={diff}
              onClick={() => {
                setSelectedDifficulty(diff);
                setCurrentPhrase(0);
                setAttempts([]);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                selectedDifficulty === diff
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {diff}
            </button>
          ))}
        </div>

        {/* Practice Card */}
        <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 mb-6">
          {/* Progress */}
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
            <span>Phrase {currentPhrase + 1} of {currentPhrases.length}</span>
            <div className="flex gap-1">
              {currentPhrases.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${i === currentPhrase ? "bg-accent" : "bg-border"}`} 
                />
              ))}
            </div>
          </div>

          {/* Phrase Display */}
          <div className="text-center mb-8">
            <p className="text-2xl sm:text-3xl font-display font-semibold mb-3">{phrase.text}</p>
            <p className="text-muted-foreground font-mono text-sm">{phrase.phonetic}</p>
          </div>

          {/* Audio Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
              <Volume2 className="w-4 h-4" />
              <span className="text-sm">Listen</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
              <PlayCircle className="w-4 h-4" />
              <span className="text-sm">Slow</span>
            </button>
          </div>

          {/* Record Button */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleRecord}
              className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                isRecording
                  ? "bg-destructive text-destructive-foreground animate-pulse scale-110"
                  : "bg-accent text-accent-foreground hover:scale-105"
              }`}
            >
              {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
            </button>
            <p className="text-sm text-muted-foreground mt-3">
              {isRecording ? "Recording... Tap to stop" : "Tap to start recording"}
            </p>
          </div>
        </div>

        {/* Attempts/Results */}
        {attempts.length > 0 && (
          <div className="space-y-3 mb-6">
            <h3 className="text-sm font-medium text-muted-foreground">Your Attempts</h3>
            {attempts.map((attempt, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-xl p-4 flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  attempt.score >= 85 ? "bg-green-100 text-green-600" : 
                  attempt.score >= 70 ? "bg-yellow-100 text-yellow-600" : 
                  "bg-red-100 text-red-600"
                }`}>
                  {attempt.score >= 85 ? <CheckCircle2 className="w-6 h-6" /> : 
                   attempt.score >= 70 ? <Target className="w-6 h-6" /> : 
                   <XCircle className="w-6 h-6" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{attempt.score}%</span>
                    <span className="text-xs text-muted-foreground">Accuracy</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{attempt.feedback}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Next Button */}
        <div className="flex justify-center">
          <button
            onClick={nextPhrase}
            className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Next Phrase</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default SpeakingMode;
