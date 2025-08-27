import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Plus, Phone, Mail, MessageSquare } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  phone: string;
  email?: string;
  status: "active" | "inactive" | "blocked";
  lastMessage?: string;
  lastMessageTime?: string;
  avatar?: string;
  tags?: string[];
}

const mockContacts: Contact[] = [
  {
    id: "1",
    name: "João Silva",
    phone: "+55 11 99999-9999",
    email: "joao@email.com",
    status: "active",
    lastMessage: "Olá, tudo bem?",
    lastMessageTime: "10:30",
    tags: ["Cliente", "VIP"]
  },
  {
    id: "2",
    name: "Maria Santos",
    phone: "+55 11 88888-8888",
    email: "maria@email.com",
    status: "active",
    lastMessage: "Obrigada pelo atendimento!",
    lastMessageTime: "09:15",
    tags: ["Lead"]
  },
  {
    id: "3",
    name: "Pedro Oliveira",
    phone: "+55 11 77777-7777",
    status: "inactive",
    lastMessage: "Até mais!",
    lastMessageTime: "Ontem",
    tags: ["Prospect"]
  }
];

const ContactList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts] = useState<Contact[]>(mockContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  const getStatusColor = (status: Contact['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'inactive':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
      case 'blocked':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: Contact['status']) => {
    switch (status) {
      case 'active':
        return 'Ativo';
      case 'inactive':
        return 'Inativo';
      case 'blocked':
        return 'Bloqueado';
      default:
        return status;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Contatos</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Novo Contato
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar contatos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredContacts.map((contact) => (
            <div key={contact.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
              <Avatar>
                <AvatarImage src={contact.avatar} alt={contact.name} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {contact.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium text-foreground truncate">
                    {contact.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className={getStatusColor(contact.status)}
                  >
                    {getStatusLabel(contact.status)}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground">{contact.phone}</p>
                
                {contact.lastMessage && (
                  <p className="text-sm text-muted-foreground truncate">
                    {contact.lastMessage} • {contact.lastMessageTime}
                  </p>
                )}
                
                {contact.tags && (
                  <div className="flex space-x-1 mt-2">
                    {contact.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">
                  <MessageSquare className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
                {contact.email && (
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactList;