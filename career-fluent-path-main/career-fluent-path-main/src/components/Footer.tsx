import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    Program: ["Bahasa Inggris", "Bahasa Jepang", "Bahasa Mandarin", "Bahasa Korea"],
    Company: ["About", "Careers", "Blog", "Press"],
    Support: ["Help Center", "Contact", "Privacy", "Terms"],
  };

  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-2 group mb-6">
              <div className="w-3 h-3 bg-accent rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
              <span className="text-2xl font-display font-bold">lingua</span>
            </a>
            <p className="text-background/60 max-w-xs">
              Platform belajar bahasa untuk profesional yang serius membangun karir internasional.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="font-bold text-sm uppercase tracking-wider mb-6">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-background/60 hover:text-background transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-background/60 text-sm mb-4">Tips & resources untuk career development.</p>
            <a href="#" className="inline-flex items-center gap-2 text-accent text-sm font-medium group">
              Subscribe
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © {currentYear} Lingua. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-background/40 hover:text-background transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
