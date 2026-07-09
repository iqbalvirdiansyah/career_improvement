import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const benefits = [
  "Akses 7 hari gratis semua materi",
  "Pilih bahasa: Inggris atau Jepang",
  "Live class dengan native speaker",
  "Sertifikat setelah menyelesaikan kursus",
  "Komunitas 50K+ learners",
  "Career coaching gratis",
];

const Start = () => {
  const [selectedLang, setSelectedLang] = useState<"english" | "japanese" | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedLang) {
      navigate("/register");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Kembali ke Home</span>
          </Link>
          <span className="text-sm text-muted-foreground">
            Sudah punya akun? <Link to="/login" className="text-accent font-bold hover:underline">Masuk</Link>
          </span>
        </div>
      </header>

      <div className="pt-24 min-h-screen flex">
        {/* Left side - Language Selection */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">Langkah Pertama</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-4">
              Pilih Bahasa<span className="text-accent">.</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Pilih bahasa yang ingin kamu pelajari. Kamu bisa menambah bahasa lain nanti.
            </p>

            <div className="space-y-4 mb-8">
              <button
                onClick={() => setSelectedLang("english")}
                className={`w-full p-6 border-2 text-left flex items-center gap-4 transition-all ${
                  selectedLang === "english" 
                    ? "border-accent bg-accent/5" 
                    : "border-border hover:border-accent/50"
                }`}
              >
                <span className="text-5xl">🇬🇧</span>
                <div className="flex-1">
                  <div className="font-bold text-xl">Bahasa Inggris</div>
                  <div className="text-muted-foreground text-sm">6 bulan program • TOEFL prep</div>
                </div>
                {selectedLang === "english" && (
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                )}
              </button>

              <button
                onClick={() => setSelectedLang("japanese")}
                className={`w-full p-6 border-2 text-left flex items-center gap-4 transition-all ${
                  selectedLang === "japanese" 
                    ? "border-accent bg-accent/5" 
                    : "border-border hover:border-accent/50"
                }`}
              >
                <span className="text-5xl">🇯🇵</span>
                <div className="flex-1">
                  <div className="font-bold text-xl">Bahasa Jepang</div>
                  <div className="text-muted-foreground text-sm">7 bulan program • JLPT prep</div>
                </div>
                {selectedLang === "japanese" && (
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                )}
              </button>
            </div>

            <Button 
              variant="hero" 
              size="xl" 
              className="w-full"
              disabled={!selectedLang}
              onClick={handleContinue}
            >
              Lanjutkan
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right side - Benefits */}
        <div className="hidden lg:flex flex-1 bg-foreground text-background items-center justify-center p-8 grain">
          <div className="max-w-md">
            <h2 className="text-3xl font-display font-bold mb-8">
              Yang kamu dapat<span className="text-accent">:</span>
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-background/20">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {["😊", "🎯", "💼", "🚀"].map((emoji, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-xl border-2 border-foreground">
                      {emoji}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-bold">50,000+ learners</div>
                  <div className="text-sm text-background/60">sudah bergabung</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
