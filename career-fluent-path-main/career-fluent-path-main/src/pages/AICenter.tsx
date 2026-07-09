import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft,
  User,
  MessageSquare,
  Mic,
  PenTool,
  BookOpen,
  Headphones,
  Languages,
  ArrowUpRight,
  Zap,
  Target,
  TrendingUp
} from "lucide-react";

type Language = "english" | "japanese";

interface PracticeMode {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  number: string;
  route: string;
  color: string;
}

const practiceModes: PracticeMode[] = [
  {
    id: "conversation",
    title: "Conversation",
    subtitle: "AI Partner Chat",
    description: "Latih percakapan real-time dengan AI tutor interaktif",
    icon: <MessageSquare className="w-6 h-6" />,
    number: "01",
    route: "/ai-center/conversation",
    color: "from-accent/20 to-accent/5",
  },
  {
    id: "speaking",
    title: "Speaking",
    subtitle: "Pronunciation Lab",
    description: "Perbaiki pelafalan dengan feedback audio real-time",
    icon: <Mic className="w-6 h-6" />,
    number: "02",
    route: "/ai-center/speaking",
    color: "from-coral/20 to-coral/5",
  },
  {
    id: "writing",
    title: "Writing",
    subtitle: "Professional Docs",
    description: "Tulis email, laporan, dan dokumen profesional",
    icon: <PenTool className="w-6 h-6" />,
    number: "03",
    route: "/ai-center/writing",
    color: "from-electric/20 to-electric/5",
  },
  {
    id: "reading",
    title: "Reading",
    subtitle: "Comprehension",
    description: "Tingkatkan pemahaman dengan artikel beragam level",
    icon: <BookOpen className="w-6 h-6" />,
    number: "04",
    route: "/ai-center/reading",
    color: "from-accent/20 to-accent/5",
  },
  {
    id: "listening",
    title: "Listening",
    subtitle: "Multi-Accent Training",
    description: "Latih pendengaran dengan berbagai aksen native speaker",
    icon: <Headphones className="w-6 h-6" />,
    number: "05",
    route: "/ai-center/listening",
    color: "from-coral/20 to-coral/5",
  },
  {
    id: "translation",
    title: "Translation",
    subtitle: "ID ↔ Target",
    description: "Latih terjemahan dua arah dengan konteks akurat",
    icon: <Languages className="w-6 h-6" />,
    number: "06",
    route: "/ai-center/translation",
    color: "from-electric/20 to-electric/5",
  },
];

const AICenter = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("english");
  const [hoveredMode, setHoveredMode] = useState<string | null>(null);

  const stats = [
    { icon: <Zap className="w-4 h-4" />, value: "24", label: "Sessions" },
    { icon: <Target className="w-4 h-4" />, value: "85%", label: "Accuracy" },
    { icon: <TrendingUp className="w-4 h-4" />, value: "3.5h", label: "Practice Time" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4 sm:gap-6">
              <Link 
                to="/learn" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium hidden sm:block">Kembali</span>
              </Link>
              
              <div className="h-4 w-px bg-border hidden sm:block" />
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-semibold">AI Center</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Language Toggle */}
              <div className="flex items-center border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setSelectedLanguage("english")}
                  className={`px-3 py-1.5 text-xs font-medium transition-all ${
                    selectedLanguage === "english"
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  🇺🇸 EN
                </button>
                <button
                  onClick={() => setSelectedLanguage("japanese")}
                  className={`px-3 py-1.5 text-xs font-medium transition-all ${
                    selectedLanguage === "japanese"
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  🇯🇵 JP
                </button>
              </div>
              
              <Link 
                to="/profile"
                className="w-9 h-9 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all flex items-center justify-center"
              >
                <User className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="py-10 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">AI-Powered Practice</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
                Latih Bahasa dengan
                <span className="block text-accent mt-1">Kecerdasan Buatan</span>
              </h1>
              
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                6 mode latihan interaktif dengan AI tutor yang memberikan feedback real-time 
                untuk meningkatkan kemampuan bahasa {selectedLanguage === "english" ? "Inggris" : "Jepang"} Anda.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="max-w-md mx-auto mb-16">
              <div className="flex items-center justify-center gap-6 sm:gap-10 px-6 py-4 rounded-2xl bg-muted/50 border border-border/50">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3">
                    <div className="text-accent">{stat.icon}</div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Modes Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {practiceModes.map((mode, index) => (
                <Link
                  key={mode.id}
                  to={mode.route}
                  onMouseEnter={() => setHoveredMode(mode.id)}
                  onMouseLeave={() => setHoveredMode(null)}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-500 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1`}>
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${mode.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          hoveredMode === mode.id 
                            ? "bg-accent text-accent-foreground" 
                            : "bg-muted text-foreground"
                        }`}>
                          {mode.icon}
                        </div>
                        <span className="text-xs font-mono text-muted-foreground/50">{mode.number}</span>
                      </div>
                      
                      {/* Title & Subtitle */}
                      <h3 className="text-xl font-display font-semibold mb-1 group-hover:text-accent transition-colors">
                        {mode.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{mode.subtitle}</p>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4">
                        {mode.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                        <span>Mulai Latihan</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start CTA */}
        <section className="py-10 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-foreground to-foreground/90 p-8 sm:p-10 text-background">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">
                      Siap Mulai Percakapan?
                    </h2>
                    <p className="text-background/70">
                      Langsung latihan dengan AI tutor tanpa perlu setup apapun
                    </p>
                  </div>
                  
                  <Link
                    to="/ai-center/conversation"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Quick Start</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AICenter;
