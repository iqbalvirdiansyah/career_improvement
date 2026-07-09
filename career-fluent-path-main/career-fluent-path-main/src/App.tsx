import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Careers from "./pages/Careers";
import ProgramEnglish from "./pages/ProgramEnglish";
import ProgramJapanese from "./pages/ProgramJapanese";
import Start from "./pages/Start";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Learn from "./pages/Learn";
import Profile from "./pages/Profile";
import AICenter from "./pages/AICenter";
import ConversationMode from "./pages/ai-center/Conversation";
import SpeakingMode from "./pages/ai-center/Speaking";
import WritingMode from "./pages/ai-center/Writing";
import ReadingMode from "./pages/ai-center/Reading";
import ListeningMode from "./pages/ai-center/Listening";
import TranslationMode from "./pages/ai-center/Translation";
import NotFound from "./pages/NotFound";
import AIChatButton from "./components/AIChatButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/program/english" element={<ProgramEnglish />} />
          <Route path="/program/japanese" element={<ProgramJapanese />} />
          <Route path="/start" element={<Start />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/ai-center" element={<AICenter />} />
          <Route path="/ai-center/conversation" element={<ConversationMode />} />
          <Route path="/ai-center/speaking" element={<SpeakingMode />} />
          <Route path="/ai-center/writing" element={<WritingMode />} />
          <Route path="/ai-center/reading" element={<ReadingMode />} />
          <Route path="/ai-center/listening" element={<ListeningMode />} />
          <Route path="/ai-center/translation" element={<TranslationMode />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AIChatButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
