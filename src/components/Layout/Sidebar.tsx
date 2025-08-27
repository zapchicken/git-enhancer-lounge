import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Home,
  Users,
  MessageSquare,
  Calendar,
  BarChart3,
  Upload,
  Settings,
  Phone,
} from "lucide-react";

interface SidebarProps {
  className?: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const sidebarItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
  },
  {
    id: "contacts",
    label: "Contatos",
    icon: Users,
  },
  {
    id: "messages",
    label: "Mensagens",
    icon: MessageSquare,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: Phone,
  },
  {
    id: "calendar",
    label: "Calendário",
    icon: Calendar,
  },
  {
    id: "analytics",
    label: "Relatórios",
    icon: BarChart3,
  },
  {
    id: "upload",
    label: "Importar",
    icon: Upload,
  },
  {
    id: "settings",
    label: "Configurações",
    icon: Settings,
  },
];

const Sidebar = ({ className, activeTab, onTabChange }: SidebarProps) => {
  return (
    <div className={cn("pb-12 bg-card border-r border-border", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    activeTab === item.id && "bg-secondary text-secondary-foreground"
                  )}
                  onClick={() => onTabChange(item.id)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;