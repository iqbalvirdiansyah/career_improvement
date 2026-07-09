import { ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    quote: "Dalam 8 bulan, saya sudah interview dalam Bahasa Jerman dan diterima di Berlin. Game changer.",
    name: "Dian Pratiwi",
    role: "Software Engineer",
    company: "Berlin, DE",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "Metode yang berbeda. Tidak ada hafalan boring, langsung praktik. Sekarang presentasi ke klien global dengan PD.",
    name: "Reza Maulana",
    role: "Business Analyst",
    company: "Singapore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "Satu-satunya platform yang benar-benar paham kebutuhan profesional Indonesia yang mau go international.",
    name: "Maya Sari",
    role: "Marketing Manager",
    company: "Tokyo, JP",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  return (
    <section id="stories" className="py-32 bg-secondary grain">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <span className="text-muted-foreground text-sm font-bold uppercase tracking-widest">
              /03 — Stories
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 leading-tight">
              Mereka Sudah<br />
              Membuktikan<span className="text-accent">.</span>
            </h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-medium link-underline group">
            Lihat Semua Stories
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className={`bg-card p-8 lg:p-10 border border-border hover-lift ${
                index === 1 ? 'lg:-translate-y-8' : ''
              }`}
            >
              <blockquote className="text-xl md:text-2xl font-display leading-snug mb-10">
                "{item.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <div className="font-bold">{item.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.role} — {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
