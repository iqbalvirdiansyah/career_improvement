import { ArrowLeft, ArrowUpRight, Check, Clock, Users, Award, BookOpen, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const curriculum = [
  { level: "Foundation", duration: "2 bulan", topics: ["Grammar essentials", "Vocabulary building", "Basic conversation"] },
  { level: "Intermediate", duration: "2 bulan", topics: ["Business writing", "Presentation skills", "Meeting English"] },
  { level: "Advanced", duration: "2 bulan", topics: ["Negotiation", "Leadership communication", "Industry-specific terms"] },
];

const benefits = [
  { icon: Globe, title: "Native Tutors", desc: "Belajar langsung dari penutur asli" },
  { icon: Users, title: "Small Class", desc: "Maksimal 8 orang per kelas" },
  { icon: Award, title: "Sertifikasi", desc: "Sertifikat diakui internasional" },
  { icon: BookOpen, title: "Materi Eksklusif", desc: "Konten dibuat oleh pakar industri" },
];

const ProgramEnglish = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Kembali</span>
          </Link>
          <Link to="/start" className="text-sm font-bold text-accent hover:underline">
            Daftar Sekarang →
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 grain">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-8xl">🇬🇧</span>
            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold tracking-wider">MOST POPULAR</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8">
            Program<br />
            <span className="text-stroke">Bahasa</span><br />
            Inggris<span className="text-accent">.</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Bahasa bisnis internasional. Kuasai English untuk membuka pintu karir di 
            Singapore, Hong Kong, Dubai, dan seluruh dunia.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/start">
                Mulai Belajar Gratis
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-display font-bold">25K+</div>
              <div className="text-sm text-background/60 uppercase tracking-wider mt-1">Pelajar Aktif</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold">6</div>
              <div className="text-sm text-background/60 uppercase tracking-wider mt-1">Bulan Program</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold">92%</div>
              <div className="text-sm text-background/60 uppercase tracking-wider mt-1">Lulus TOEFL 550+</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-accent">Free</div>
              <div className="text-sm text-background/60 uppercase tracking-wider mt-1">Trial 7 Hari</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">/01 — Keunggulan</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-16">
            Kenapa Memilih Kami<span className="text-accent">?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item) => (
              <div key={item.title} className="group p-8 border-2 border-border hover:border-accent hover:bg-secondary transition-all duration-300">
                <item.icon className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">/02 — Kurikulum</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-16">
            Journey Belajar<span className="text-accent">.</span>
          </h2>

          <div className="space-y-6">
            {curriculum.map((level, idx) => (
              <div key={level.level} className="bg-background p-8 border-2 border-border hover:border-accent transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <span className="text-5xl font-display font-bold text-accent">0{idx + 1}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{level.level}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{level.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {level.topics.map((topic) => (
                      <span key={topic} className="flex items-center gap-1 px-3 py-1 bg-secondary text-sm">
                        <Check className="w-3 h-3 text-accent" />
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-background grain">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Siap Mulai<span className="text-accent">?</span>
          </h2>
          <p className="text-background/60 text-xl max-w-xl mx-auto mb-8">
            Daftar sekarang dan dapatkan akses gratis 7 hari untuk semua materi.
          </p>
          <Button variant="hero" size="xl" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <Link to="/start">
              Mulai Belajar Gratis
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProgramEnglish;
