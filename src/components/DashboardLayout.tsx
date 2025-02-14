
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  Briefcase,
  FileText,
  Settings,
  Menu,
  X,
  ArrowLeft,
  Bell
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", route: "/dashboard" },
    { icon: GraduationCap, label: "Career Roadmap", route: "/career-roadmap" },
    { icon: Users, label: "Mentorship", route: "/mentorship" },
    { icon: Briefcase, label: "Job Portal", route: "/job-portal" },
    { icon: FileText, label: "Resources", route: "/resources" },
    { icon: Settings, label: "Settings", route: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r transition-transform duration-300 ease-in-out transform",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex items-center gap-2 p-6 border-b">
          <GraduationCap className="h-8 w-8 text-indigo-600" />
          <span className="text-xl font-semibold">CareerPath</span>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.route)}
              className="flex items-center gap-3 w-full p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className={cn(
        "transition-all duration-300 ease-in-out",
        "lg:ml-64 min-h-screen"
      )}>
        {/* Header Bar */}
        <header className="bg-white border-b sticky top-0 z-30">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={() => navigate("/")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <button
                onClick={() => navigate("/settings")}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Settings"
              >
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </header>
        
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
