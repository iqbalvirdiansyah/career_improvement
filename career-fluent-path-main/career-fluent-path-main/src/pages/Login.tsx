import { ArrowLeft, ArrowUpRight, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Login = () => {
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
            Belum punya akun? <Link to="/register" className="text-accent font-bold hover:underline">Daftar</Link>
          </span>
        </div>
      </header>

      <div className="pt-24 min-h-screen flex">
        {/* Left side - Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Selamat Datang<span className="text-accent">.</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Masuk ke akunmu dan lanjutkan belajar.
            </p>

            <form className="space-y-4 mb-6">
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

              <div className="flex justify-end">
                <a href="#" className="text-sm text-accent hover:underline">Lupa password?</a>
              </div>

              <Button variant="hero" size="xl" className="w-full">
                Masuk
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-4 text-muted-foreground">atau</span>
              </div>
            </div>

            <Button variant="outline" size="xl" className="w-full border-2">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Lanjutkan dengan Google
            </Button>
          </div>
        </div>

        {/* Right side - Visual */}
        <div className="hidden lg:flex flex-1 bg-foreground text-background items-center justify-center p-8 grain">
          <div className="max-w-md text-center">
            <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8">
              <span className="text-5xl">👋</span>
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">
              Kami rindu kamu<span className="text-accent">!</span>
            </h2>
            <p className="text-background/70 text-lg">
              Lanjutkan progress belajarmu dan raih tujuan bahasamu.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-background/10">
                <div className="text-2xl font-bold">12K+</div>
                <div className="text-sm text-background/60">Materi</div>
              </div>
              <div className="p-4 rounded-lg bg-background/10">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-background/60">Learners</div>
              </div>
              <div className="p-4 rounded-lg bg-background/10">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-background/60">Puas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
