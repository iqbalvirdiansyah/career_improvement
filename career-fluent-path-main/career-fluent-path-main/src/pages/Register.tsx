import { ArrowLeft, ArrowUpRight, Check, Mail, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const benefits = [
  "Akses 7 hari gratis semua materi",
  "Pilih bahasa: Inggris atau Jepang",
  "Live class dengan native speaker",
  "Sertifikat setelah menyelesaikan kursus",
  "Komunitas 50K+ learners",
  "Career coaching gratis",
];

const Register = () => {
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
        {/* Left side - Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Free trial 7 hari
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Buat Akun<span className="text-accent">.</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Mulai perjalanan belajar bahasamu hari ini. Gratis untuk 7 hari pertama.
            </p>

            <form className="space-y-4 mb-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="Nama lengkap" 
                  className="pl-12 h-14 text-lg border-2 border-border focus:border-accent"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="pl-12 h-14 text-lg border-2 border-border focus:border-accent"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  type="password" 
                  placeholder="Password" 
                  className="pl-12 h-14 text-lg border-2 border-border focus:border-accent"
                />
              </div>

              <Button variant="hero" size="xl" className="w-full">
                Mulai Belajar Gratis
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </form>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-3 text-muted-foreground">atau daftar dengan</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              size="lg" 
              className="w-full h-14 text-base border-2 hover:bg-muted/50"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Daftar dengan Google
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Dengan mendaftar, kamu menyetujui <a href="#" className="underline hover:text-foreground">Syarat & Ketentuan</a> dan <a href="#" className="underline hover:text-foreground">Kebijakan Privasi</a> kami.
            </p>
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

export default Register;
