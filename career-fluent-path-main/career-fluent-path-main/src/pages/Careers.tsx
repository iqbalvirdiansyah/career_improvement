import { ArrowUpRight, Briefcase, MapPin, DollarSign, TrendingUp, Building2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobs = [
  {
    title: "Software Engineer",
    company: "Tech Companies",
    location: "Tokyo, Jepang",
    salary: "¥6M - ¥12M/tahun",
    salaryIDR: "Rp 600jt - 1.2M",
    language: "Jepang N2+",
    type: "Full-time",
    hot: true,
    benefits: ["Visa Sponsorship", "Housing Allowance", "Annual Bonus"],
  },
  {
    title: "Business Development",
    company: "Multinational Corp",
    location: "Singapore",
    salary: "S$60K - S$100K/tahun",
    salaryIDR: "Rp 700jt - 1.1M",
    language: "Inggris Fluent",
    type: "Full-time",
    hot: true,
    benefits: ["13th Month", "Health Insurance", "Stock Options"],
  },
  {
    title: "Marketing Manager",
    company: "E-commerce",
    location: "Hong Kong",
    salary: "HK$40K - HK$70K/bulan",
    salaryIDR: "Rp 80jt - 140jt/bln",
    language: "Inggris Fluent",
    type: "Full-time",
    hot: false,
    benefits: ["Performance Bonus", "Flexible Hours", "Training Budget"],
  },
  {
    title: "IT Consultant",
    company: "Consulting Firm",
    location: "Osaka, Jepang",
    salary: "¥5M - ¥9M/tahun",
    salaryIDR: "Rp 500jt - 900jt",
    language: "Jepang N3+",
    type: "Full-time",
    hot: false,
    benefits: ["Visa Sponsorship", "Transport Allowance", "Certification"],
  },
  {
    title: "Product Manager",
    company: "Tech Startup",
    location: "Singapore",
    salary: "S$80K - S$150K/tahun",
    salaryIDR: "Rp 900jt - 1.7M",
    language: "Inggris Fluent",
    type: "Full-time",
    hot: true,
    benefits: ["Equity", "Remote Friendly", "Unlimited PTO"],
  },
  {
    title: "Data Analyst",
    company: "Finance",
    location: "Tokyo, Jepang",
    salary: "¥5M - ¥8M/tahun",
    salaryIDR: "Rp 500jt - 800jt",
    language: "Jepang N2+",
    type: "Full-time",
    hot: false,
    benefits: ["Visa Sponsorship", "Bonus 4x/year", "Training"],
  },
];

const countries = [
  {
    name: "Jepang",
    flag: "🇯🇵",
    avgSalary: "¥6M - ¥10M/tahun",
    demand: "Sangat Tinggi",
    industries: ["Tech", "Manufacturing", "Finance"],
    language: "Jepang N2-N1",
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    avgSalary: "S$50K - S$120K/tahun",
    demand: "Tinggi",
    industries: ["Tech", "Finance", "Consulting"],
    language: "Inggris Fluent",
  },
  {
    name: "Hong Kong",
    flag: "🇭🇰",
    avgSalary: "HK$30K - HK$80K/bulan",
    demand: "Tinggi",
    industries: ["Finance", "Marketing", "Legal"],
    language: "Inggris Fluent",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 grain">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 border-2 border-foreground text-xs font-bold uppercase tracking-widest mb-8">
              Career Opportunities
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[0.9] tracking-tighter mb-8">
              Peluang Karir
              <br />
              <span className="text-stroke">di Asia</span>
              <span className="text-accent">.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Gaji kompetitif, work-life balance lebih baik, dan pengalaman internasional. 
              Kuasai bahasa, buka pintu karir impianmu.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "3-5x", label: "Gaji vs Indonesia" },
              { value: "10K+", label: "Lowongan/bulan" },
              { value: "85%", label: "Visa Sponsorship" },
              { value: "2-4 bln", label: "Avg. Job Search" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-display font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Overview */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">
              /01 — Negara Tujuan
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
              Top Destinations<span className="text-accent">.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-px bg-background/10">
            {countries.map((country) => (
              <div key={country.name} className="bg-foreground p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{country.flag}</span>
                  <div>
                    <h3 className="text-2xl font-display font-bold">{country.name}</h3>
                    <span className="text-accent text-sm">{country.demand} Demand</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-background/10 pb-3">
                    <span className="text-background/60">Rata-rata Gaji</span>
                    <span className="font-medium">{country.avgSalary}</span>
                  </div>
                  <div className="flex justify-between border-b border-background/10 pb-3">
                    <span className="text-background/60">Bahasa Required</span>
                    <span className="font-medium">{country.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-background/60">Top Industries</span>
                    <span className="font-medium">{country.industries.join(", ")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 grain">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <span className="text-muted-foreground text-sm font-bold uppercase tracking-widest">
                /02 — Lowongan
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
                Featured Jobs<span className="text-accent">.</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Posisi-posisi dengan gaji tinggi yang terbuka untuk profesional Indonesia. 
              Syarat: kemampuan bahasa yang memadai.
            </p>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="group bg-card border border-border p-6 lg:p-8 hover:border-accent transition-colors duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl lg:text-2xl font-display font-bold group-hover:text-accent transition-colors">
                        {job.title}
                      </h3>
                      {job.hot && (
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-[10px] font-bold tracking-wider">
                          HOT
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Salary & CTA */}
                  <div className="lg:text-right space-y-3">
                    <div>
                      <div className="text-2xl font-display font-bold">{job.salary}</div>
                      <div className="text-sm text-accent">{job.salaryIDR}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Syarat: {job.language}
                    </div>
                    <Button variant="outline" size="sm" className="group/btn">
                      Detail
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg">
              Lihat Semua Lowongan
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Mulai Persiapan
            <br />
            Karirmu Sekarang.
          </h2>
          <p className="text-lg text-accent-foreground/80 max-w-xl mx-auto mb-8">
            Kuasai bahasa yang dibutuhkan dalam 6-12 bulan. 
            Langkah pertama menuju karir internasional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            >
              Mulai Belajar
              <ArrowUpRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
            >
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
