import { Zap, Users, Award, Clock } from "lucide-react";

const features = [
  {
    num: "01",
    icon: Zap,
    title: "Metode Immersive",
    description: "Belajar seperti anak kecil — tanpa hafalan membosankan. Otak Anda akan menyerap bahasa secara natural.",
  },
  {
    num: "02",
    icon: Users,
    title: "Native Mentors",
    description: "Praktik langsung dengan penutur asli. Koreksi real-time untuk aksen dan nuansa budaya.",
  },
  {
    num: "03",
    icon: Award,
    title: "Career-Focused",
    description: "Kurikulum dirancang untuk interview, presentasi bisnis, dan komunikasi profesional.",
  },
  {
    num: "04",
    icon: Clock,
    title: "Fleksibel 100%",
    description: "Belajar kapan saja, di mana saja. Materi tersedia 24/7 dengan progress tracking.",
  },
];

const Features = () => {
  return (
    <section id="metode" className="py-32 grain">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-muted-foreground text-sm font-bold uppercase tracking-widest">
            /02 — Metode
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 leading-tight">
            Bukan Sekadar
            <br />
            <span className="text-stroke-accent">Kursus Bahasa</span>
            <span className="text-accent">.</span>
          </h2>
        </div>

        {/* Features grid - asymmetric */}
        <div className="grid lg:grid-cols-2 gap-px bg-border">
          {features.map((feature, index) => (
            <div
              key={feature.num}
              className={`bg-background p-10 lg:p-16 group hover:bg-secondary transition-colors duration-500 ${
                index === 1 ? 'lg:translate-y-16' : ''
              } ${index === 3 ? 'lg:-translate-y-16' : ''}`}
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-6xl font-display font-bold text-border group-hover:text-accent transition-colors">
                  {feature.num}
                </span>
                <feature.icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
