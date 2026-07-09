import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  User, 
  Target, 
  Flame, 
  Award, 
  BookOpen, 
  Clock, 
  TrendingUp,
  Briefcase,
  Globe,
  ChevronRight,
  Settings,
  LogOut,
  Mail,
  Calendar,
  Shield
} from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"progress" | "career" | "account">("progress");

  const handleLogout = () => {
    // TODO: Implement actual logout with Lovable Cloud
    navigate("/login");
  };

  const learningStats = [
    { label: "Total XP", value: "1,250", icon: <TrendingUp className="w-4 h-4" /> },
    { label: "Streak", value: "7 days", icon: <Flame className="w-4 h-4" /> },
    { label: "Lessons Done", value: "24", icon: <BookOpen className="w-4 h-4" /> },
    { label: "Study Time", value: "12.5 hrs", icon: <Clock className="w-4 h-4" /> },
  ];

  const achievements = [
    { title: "First Steps", description: "Complete your first lesson", unlocked: true },
    { title: "Week Warrior", description: "7 day streak", unlocked: true },
    { title: "Polyglot", description: "Study 2 languages", unlocked: true },
    { title: "Master", description: "Complete a curriculum", unlocked: false },
  ];

  const careerGoals = [
    { 
      title: "Software Engineer - Japan", 
      company: "Target: Tech Companies",
      salary: "¥5M - ¥10M / year",
      progress: 40,
      skills: ["N2 Japanese", "Technical English", "Business Communication"]
    },
    { 
      title: "Business Analyst - Singapore", 
      company: "Target: MNCs",
      salary: "$60K - $90K / year",
      progress: 25,
      skills: ["IELTS 7+", "Business Writing", "Presentation Skills"]
    },
  ];

  const accountInfo = {
    email: "user@example.com",
    joinedDate: "January 2024",
    plan: "Free Plan",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-5">
              <Link to="/learn" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Kembali</span>
              </Link>
              <div className="h-4 w-px bg-border" />
              <span className="font-semibold text-sm">Profile</span>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8 md:py-12">
        <div className="container mx-auto px-6 max-w-2xl">
          {/* Profile Info */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
              <User className="w-10 h-10 text-accent-foreground" />
            </div>
            <div className="flex-1">
              <h1 className="font-display font-bold text-2xl">User Name</h1>
              <p className="text-sm text-muted-foreground">Learner since 2024</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full font-medium">
                  1,250 XP
                </span>
                <span className="text-xs px-2 py-0.5 bg-red-100 text-red-700 rounded-full font-medium">
                  🔥 7 days
                </span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-border mb-8">
            <div className="flex gap-6">
              <button
                onClick={() => setActiveTab("progress")}
                className={`relative pb-3 text-sm font-medium transition-colors ${
                  activeTab === "progress" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Learning Progress
                {activeTab === "progress" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("career")}
                className={`relative pb-3 text-sm font-medium transition-colors ${
                  activeTab === "career" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Career Goals
                {activeTab === "career" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("account")}
                className={`relative pb-3 text-sm font-medium transition-colors ${
                  activeTab === "account" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Account
                {activeTab === "account" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                )}
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === "progress" && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Statistics</h4>
                <div className="grid grid-cols-2 gap-3">
                  {learningStats.map((stat, i) => (
                    <div key={i} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        {stat.icon}
                        <span className="text-xs">{stat.label}</span>
                      </div>
                      <p className="font-bold text-lg">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Language Progress */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Languages</h4>
                <div className="space-y-3">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span>🇬🇧</span>
                        <span className="font-medium">English</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "60%" }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">3 of 5 chapters complete</p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span>🇯🇵</span>
                        <span className="font-medium">Japanese</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Beginner</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: "30%" }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">2 of 5 chapters complete</p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Achievements</h4>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement, i) => (
                    <div 
                      key={i} 
                      className={`p-4 rounded-lg border ${
                        achievement.unlocked 
                          ? "border-amber-200 bg-amber-50" 
                          : "border-border bg-muted/30 opacity-50"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Award className={`w-4 h-4 ${achievement.unlocked ? "text-amber-600" : "text-muted-foreground"}`} />
                        <span className="text-sm font-medium">{achievement.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "career" && (
            <div className="space-y-8">
              {/* Career Purpose */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Your Career Purpose</h4>
                <div className="p-5 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-accent" />
                    <span className="font-semibold">Build a career abroad</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Master language skills to unlock high-paying opportunities in Asia
                  </p>
                </div>
              </div>

              {/* Career Goals */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Target Positions</h4>
                <div className="space-y-3">
                  {careerGoals.map((goal, i) => (
                    <div key={i} className="p-5 border border-border rounded-lg hover:border-accent/50 transition-colors cursor-pointer group">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-muted-foreground" />
                            <span className="font-medium">{goal.title}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5">{goal.company}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <Globe className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-medium text-emerald-600">{goal.salary}</span>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Readiness</span>
                          <span className="font-medium">{goal.progress}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-accent rounded-full" 
                            style={{ width: `${goal.progress}%` }} 
                          />
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {goal.skills.map((skill, j) => (
                          <span 
                            key={j}
                            className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Settings className="w-4 h-4 mr-2" />
                Edit Career Goals
              </Button>
            </div>
          )}

          {activeTab === "account" && (
            <div className="space-y-6">
              {/* Account Info */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Account Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="font-medium">{accountInfo.email}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Member Since</p>
                        <p className="font-medium">{accountInfo.joinedDate}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Plan</p>
                        <p className="font-medium">{accountInfo.plan}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Upgrade</Button>
                  </div>
                </div>
              </div>

              {/* Settings */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Settings</h4>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Settings className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">Preferences</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Logout */}
              <div className="pt-4 border-t border-border">
                <Button 
                  variant="destructive" 
                  className="w-full"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;
