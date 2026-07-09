import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Play, 
  CheckCircle2, 
  Lock, 
  Clock, 
  Award,
  ChevronRight,
  ChevronLeft,
  User,
  ArrowLeft,
  Sparkles
} from "lucide-react";

type Language = "english" | "japanese";

const englishCurriculum = [
  {
    id: 1,
    title: "Foundation English",
    subtitle: "Dasar-Dasar Bahasa Inggris",
    description: "Penguasaan alfabet, fonetik, dan struktur kalimat dasar untuk komunikasi profesional",
    lessons: 8,
    duration: "2 jam",
    status: "completed" as const,
    progress: 100,
  },
  {
    id: 2,
    title: "Professional Communication",
    subtitle: "Komunikasi Profesional",
    description: "Teknik komunikasi efektif untuk lingkungan kerja multinasional",
    lessons: 12,
    duration: "3 jam",
    status: "in-progress" as const,
    progress: 60,
  },
  {
    id: 3,
    title: "Business Grammar & Writing",
    subtitle: "Tata Bahasa & Penulisan Bisnis",
    description: "Penguasaan grammar untuk email, laporan, dan dokumen bisnis",
    lessons: 15,
    duration: "4 jam",
    status: "locked" as const,
    progress: 0,
  },
  {
    id: 4,
    title: "Corporate English",
    subtitle: "Bahasa Inggris Korporat",
    description: "Presentasi, negosiasi, dan meeting dalam konteks bisnis internasional",
    lessons: 10,
    duration: "3 jam",
    status: "locked" as const,
    progress: 0,
  },
  {
    id: 5,
    title: "TOEFL & IELTS Preparation",
    subtitle: "Persiapan Sertifikasi",
    description: "Program intensif persiapan ujian sertifikasi internasional",
    lessons: 20,
    duration: "6 jam",
    status: "locked" as const,
    progress: 0,
  },
];

const japaneseCurriculum = [
  {
    id: 1,
    title: "Japanese Writing Systems",
    subtitle: "Hiragana & Katakana",
    description: "Penguasaan sistem penulisan dasar untuk membaca dokumen Jepang",
    lessons: 10,
    duration: "3 jam",
    status: "completed" as const,
    progress: 100,
  },
  {
    id: 2,
    title: "Business Self-Introduction",
    subtitle: "自己紹介 - Jikoshoukai",
    description: "Teknik memperkenalkan diri dalam konteks bisnis Jepang",
    lessons: 8,
    duration: "2 jam",
    status: "in-progress" as const,
    progress: 40,
  },
  {
    id: 3,
    title: "Essential Kanji (N5-N4)",
    subtitle: "Kanji Profesional",
    description: "200 kanji penting untuk membaca dokumen dan email bisnis",
    lessons: 20,
    duration: "5 jam",
    status: "locked" as const,
    progress: 0,
  },
  {
    id: 4,
    title: "Workplace Communication",
    subtitle: "職場のコミュニケーション",
    description: "Dialog dan etika komunikasi di lingkungan kerja Jepang",
    lessons: 12,
    duration: "3 jam",
    status: "locked" as const,
    progress: 0,
  },
  {
    id: 5,
    title: "Keigo - Business Japanese",
    subtitle: "敬語 - Bahasa Hormat",
    description: "Penguasaan bahasa formal untuk komunikasi dengan klien dan atasan",
    lessons: 15,
    duration: "4 jam",
    status: "locked" as const,
    progress: 0,
  },
];

const Learn = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("english");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const curriculum = selectedLanguage === "english" ? englishCurriculum : japaneseCurriculum;
  const completedLessons = curriculum.filter(c => c.status === "completed").length;
  const totalLessons = curriculum.length;
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollPosition, 300);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-5">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Beranda</span>
              </Link>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-4">
                <span className="font-semibold text-sm">Learning Center</span>
                <Link 
                  to="/ai-center" 
                  className="flex items-center gap-1.5 px-3 py-1 text-sm bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  AI Center
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="font-medium">250 XP</span>
              </div>
              <Link 
                to="/profile"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <User className="w-4 h-4 text-muted-foreground" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8 md:py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-display font-bold mb-2">
              Program Pembelajaran
            </h1>
            <p className="text-muted-foreground text-sm">
              Kurikulum terstruktur untuk meningkatkan kemampuan bahasa Anda.
            </p>
          </div>

          {/* Language Tabs - Simple underline style */}
          <div className="border-b border-border mb-8">
            <div className="flex gap-8">
              <button
                onClick={() => setSelectedLanguage("english")}
                className={`relative pb-3 text-sm font-medium transition-colors ${
                  selectedLanguage === "english"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>🇬🇧</span>
                  English
                </span>
                {selectedLanguage === "english" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                )}
              </button>
              
              <button
                onClick={() => setSelectedLanguage("japanese")}
                className={`relative pb-3 text-sm font-medium transition-colors ${
                  selectedLanguage === "japanese"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>🇯🇵</span>
                  Japanese
                </span>
                {selectedLanguage === "japanese" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg mb-8">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Progress</p>
                <p className="font-semibold">{overallProgress}%</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Selesai</p>
                <p className="font-semibold">{completedLessons} dari {totalLessons}</p>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-xs text-muted-foreground mb-0.5">Waktu belajar</p>
                <p className="font-semibold">4.5 jam</p>
              </div>
            </div>
            <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-foreground rounded-full transition-all duration-500"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>

          {/* Curriculum List - Horizontal Scrollable */}
          <div className="relative">
            {/* Scroll Buttons */}
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/90 backdrop-blur border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/90 backdrop-blur border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            <div
              ref={scrollRef}
              onScroll={checkScrollPosition}
              className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {curriculum.map((chapter, index) => {
                const isCompleted = chapter.status === "completed";
                const isInProgress = chapter.status === "in-progress";
                const isLocked = chapter.status === "locked";
                
                return (
                  <div
                    key={chapter.id}
                    className={`group relative flex-shrink-0 w-[300px] rounded-lg border transition-all duration-200 snap-start ${
                      isCompleted 
                        ? "bg-emerald-50/50 border-emerald-200 hover:border-emerald-300" 
                        : isInProgress
                        ? "bg-accent/5 border-accent/30 hover:border-accent/50 shadow-sm"
                        : "bg-card border-border opacity-60"
                    } ${!isLocked ? "cursor-pointer hover:shadow-md" : ""}`}
                  >
                    {/* In Progress Indicator */}
                    {isInProgress && (
                      <div className="absolute -left-px top-4 bottom-4 w-1 bg-accent rounded-full" />
                    )}
                    
                    <div className="p-5">
                      {/* Module Number */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                          isCompleted 
                            ? "bg-emerald-500 text-white"
                            : isInProgress
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            String(index + 1).padStart(2, '0')
                          )}
                        </div>
                        {isInProgress && (
                          <span className="text-[10px] font-medium px-1.5 py-0.5 bg-accent text-accent-foreground rounded">
                            AKTIF
                          </span>
                        )}
                        {isLocked && (
                          <Lock className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                      
                      {/* Content */}
                      <div>
                        <h3 className={`font-semibold mb-1 ${isInProgress ? "text-foreground" : ""}`}>
                          {chapter.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">{chapter.subtitle}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                          {chapter.description}
                        </p>
                        
                        {/* Meta info */}
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3.5 h-3.5" />
                            {chapter.lessons}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {chapter.duration}
                          </span>
                          {isCompleted && (
                            <span className="flex items-center gap-1 text-emerald-600">
                              <Award className="w-3.5 h-3.5" />
                            </span>
                          )}
                        </div>
                        
                        {/* Progress bar for in-progress */}
                        {isInProgress && (
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-1.5 bg-accent/20 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-accent rounded-full"
                                style={{ width: `${chapter.progress}%` }}
                              />
                            </div>
                            <span className="text-xs font-medium text-accent-foreground">{chapter.progress}%</span>
                          </div>
                        )}
                        
                        {isCompleted && (
                          <div className="text-xs text-emerald-600 font-medium">
                            ✓ Completed
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Continue CTA */}
          <div className="mt-10 flex items-center justify-between p-5 bg-foreground text-background rounded-lg">
            <div>
              <p className="text-xs text-background/60 mb-1">Lanjutkan belajar</p>
              <p className="font-semibold">
                {selectedLanguage === "english" ? "Professional Communication" : "Business Self-Introduction"}
              </p>
            </div>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Play className="w-4 h-4 mr-1.5" />
              Mulai
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Learn;
