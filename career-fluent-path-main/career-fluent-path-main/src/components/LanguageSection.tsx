import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const languages = [
  { 
    name: "Inggris", 
    flag: "🇬🇧", 
    students: "25K+", 
    tag: "MOST POPULAR",
    desc: "Bahasa bisnis internasional. Wajib untuk karir global.",
    countries: "Singapore, Hong Kong, Dubai",
    link: "/program/english"
  },
  { 
    name: "Jepang", 
    flag: "🇯🇵", 
    students: "12K+", 
    tag: "HIGH DEMAND",
    desc: "Peluang kerja tinggi di industri tech & manufaktur Jepang.",
    countries: "Tokyo, Osaka, Kyoto",
    link: "/program/japanese"
  },
];

const LanguageSection = () => {
  return (
    <section id="program" className="py-32 bg-foreground text-background grain">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-accent text-sm font-bold uppercase tracking-widest">
              /01 — Program
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mt-4 leading-tight">
              Dua Bahasa<br />Strategis<span className="text-accent">.</span>
            </h2>
          </div>
          <p className="text-background/60 max-w-md text-lg">
            Fokus pada bahasa dengan demand tertinggi di pasar kerja Asia. 
            Kurikulum dirancang untuk profesional.
          </p>
        </div>

        {/* Language cards - larger format */}
        <div className="grid lg:grid-cols-2 gap-px bg-background/10">
          {languages.map((lang) => (
            <Link
              key={lang.name}
              to={lang.link}
              className="group bg-foreground p-10 lg:p-16 flex flex-col justify-between min-h-[400px] hover:bg-background hover:text-foreground transition-colors duration-500 relative overflow-hidden"
            >
              {/* Tag */}
              <span className="absolute top-8 right-8 px-3 py-1 bg-accent text-accent-foreground text-[10px] font-bold tracking-wider">
                {lang.tag}
              </span>

              {/* Content */}
              <div className="flex items-start justify-between">
                <span className="text-8xl">{lang.flag}</span>
                <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">{lang.name}</h3>
                <p className="text-background/60 group-hover:text-muted-foreground text-lg mb-4">
                  {lang.desc}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="text-background/40 group-hover:text-muted-foreground">
                    {lang.students} Pelajar
                  </span>
                  <span className="text-accent">{lang.countries}</span>
                </div>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;
