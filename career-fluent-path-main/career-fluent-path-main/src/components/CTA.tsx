import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-32 grain relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[0.9] tracking-tighter mb-8">
            Siap
            <br />
            <span className="text-stroke">Memulai?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-12">
            Daftar sekarang dan akses modul pertama gratis. 
            Tidak perlu kartu kredit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Mulai Gratis
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Jadwalkan Demo
            </Button>
          </div>

          <div className="flex justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <span>✓ Akses Instant</span>
            <span>✓ Tanpa Komitmen</span>
            <span>✓ Cancel Anytime</span>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-5">
        <span className="text-[40vw] font-display font-black">言</span>
      </div>
    </section>
  );
};

export default CTA;
