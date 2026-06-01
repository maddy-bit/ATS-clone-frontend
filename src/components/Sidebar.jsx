import {
  LayoutDashboard,
  Briefcase,
  Users,
  FileText,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const items = [
    { icon: <LayoutDashboard size={20} />, name: "Dashboard" },
    { icon: <Briefcase size={20} />, name: "Jobs" },
    { icon: <Users size={20} />, name: "Candidates" },
    { icon: <FileText size={20} />, name: "Reports" },
    { icon: <Settings size={20} />, name: "Settings" },
  ];

  return (
    <div className="w-72 min-h-screen bg-white/10 backdrop-blur-xl border-r border-white/20 p-6">
      <h1 className="text-white text-2xl font-bold mb-10">
        ATS Clone
      </h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 text-gray-200 hover:bg-white/10 p-3 rounded-xl cursor-pointer transition"
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}