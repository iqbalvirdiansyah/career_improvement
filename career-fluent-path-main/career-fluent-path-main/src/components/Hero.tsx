import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen relative grain overflow-hidden">
      {/* Marquee banner */}
      <div className="bg-foreground text-background py-3 overflow-hidden">
        <div className="marquee flex gap-8 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center">
              <span className="text-sm font-medium">ENGLISH</span>
              <span className="w-2 h-2 bg-accent rotate-45" />
              <span className="text-sm font-medium">日本語</span>
              <span className="w-2 h-2 bg-accent rotate-45" />
              <span className="text-sm font-medium">ENGLISH</span>
              <span className="w-2 h-2 bg-accent rotate-45" />
              <span className="text-sm font-medium">日本語</span>
              <span className="w-2 h-2 bg-accent rotate-45" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          {/* Main headline */}
          <div className="lg:col-span-8 space-y-8">
            <div className="opacity-0 animate-in stagger-1">
              <span className="inline-block px-4 py-2 border-2 border-foreground text-xs font-bold uppercase tracking-widest mb-8">
                Platform Belajar Bahasa #1
              </span>
            </div>

            <h1 className="text-[clamp(3rem,12vw,10rem)] font-display font-extrabold leading-[0.85] tracking-tighter opacity-0 animate-in stagger-2">
              <span className="block">Kuasai</span>
              <span className="block text-stroke">Bahasa</span>
              <span className="block">
                Baru<span className="text-accent">.</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed opacity-0 animate-in stagger-3">
              Metode immersive yang dirancang untuk profesional. 
              Buka pintu karir internasional dalam 6 bulan.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-in stagger-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/start">
                  Mulai Gratis
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/careers">Lihat Peluang Karir</Link>
              </Button>
            </div>
          </div>

          {/* Stats side */}
          <div className="lg:col-span-4 space-y-8 opacity-0 animate-in stagger-5">
            <div className="border-l-2 border-foreground pl-6 py-4">
              <div className="text-5xl font-display font-bold">50K+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider mt-1">Alumni Sukses</div>
            </div>
            <div className="border-l-2 border-accent pl-6 py-4">
              <div className="text-5xl font-display font-bold">2</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider mt-1">Bahasa Strategis</div>
            </div>
            <div className="border-l-2 border-foreground pl-6 py-4">
              <div className="text-5xl font-display font-bold">95%</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider mt-1">Kepuasan User</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20">
          <a 
            href="#program" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl -z-10" />
    </section>
  );
};

export default Hero;
