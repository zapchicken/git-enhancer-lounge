import { useState } from "react";
import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import StatsCard from "@/components/Dashboard/StatsCard";
import ContactList from "@/components/Contacts/ContactList";
import { Users, MessageSquare, Phone, TrendingUp } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "contacts":
        return <ContactList />;
      case "dashboard":
      default:
        return (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title="Total de Contatos"
                value="1,234"
                description="Contatos ativos no sistema"
                icon={Users}
                trend={{ value: 12, isPositive: true }}
              />
              <StatsCard
                title="Mensagens Hoje"
                value="89"
                description="Mensagens enviadas/recebidas"
                icon={MessageSquare}
                trend={{ value: 8, isPositive: true }}
              />
              <StatsCard
                title="Chamadas WhatsApp"
                value="23"
                description="Chamadas realizadas hoje"
                icon={Phone}
                trend={{ value: 4, isPositive: false }}
              />
              <StatsCard
                title="Taxa de Conversão"
                value="68%"
                description="Leads convertidos este mês"
                icon={TrendingUp}
                trend={{ value: 15, isPositive: true }}
              />
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="col-span-4">
                <ContactList />
              </div>
              <div className="col-span-3">
                {/* Placeholder for additional widgets */}
                <div className="h-96 bg-card border border-border rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Área para widgets adicionais</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header userEmail="user@email.com" userName="Usuário" />
      
      <div className="flex">
        <div className="w-64 min-h-screen">
          <Sidebar
            activeTab={activeTab}
            onTabChange={setActiveTab}
            className="fixed w-64 h-full"
          />
        </div>
        
        <main className="flex-1 ml-64 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground">
                {activeTab === "dashboard" && "Dashboard"}
                {activeTab === "contacts" && "Contatos"}
                {activeTab === "messages" && "Mensagens"}
                {activeTab === "whatsapp" && "WhatsApp"}
                {activeTab === "calendar" && "Calendário"}
                {activeTab === "analytics" && "Relatórios"}
                {activeTab === "upload" && "Importar Contatos"}
                {activeTab === "settings" && "Configurações"}
              </h1>
              <p className="text-muted-foreground">
                Gerencie seus contatos e mensagens do WhatsApp
              </p>
            </div>
            
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
