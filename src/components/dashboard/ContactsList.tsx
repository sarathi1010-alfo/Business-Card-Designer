"use client";

import { useEffect, useState } from "react";
import { Contact, getContacts, getLeadTemperature } from "@/lib/analytics/tracker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { User, Building2, Flame } from "lucide-react";

export function ContactsList() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    // Initial load and simple polling to keep synced
    const updateContacts = () => {
      setContacts(getContacts().sort((a, b) => b.score - a.score));
    };

    updateContacts();

    const interval = setInterval(updateContacts, 10000);
    return () => clearInterval(interval);
  }, []);

  const getTemperatureBadge = (score: number) => {
    const temp = getLeadTemperature(score);
    switch (temp) {
      case 'Hot':
        return <Badge className="bg-red-500 hover:bg-red-600 text-white"><Flame className="w-3 h-3 mr-1"/> Hot</Badge>;
      case 'Warm':
        return <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">Warm</Badge>;
      case 'Cold':
        return <Badge className="bg-blue-500 hover:bg-blue-600 text-white">Cold</Badge>;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Engaged Contacts</CardTitle>
            <CardDescription>Smart ranked by engagement score</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {contacts.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            No contacts captured yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Contact</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead className="text-right">Score</TableHead>
                  <TableHead className="w-[100px] text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-muted-foreground" />
                          {contact.name}
                        </span>
                        <span className="text-xs text-muted-foreground ml-5">{contact.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {contact.company ? (
                        <div className="flex items-center gap-1.5 text-sm">
                          <Building2 className="w-3.5 h-3.5 text-muted-foreground" />
                          {contact.company}
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-xs">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {contact.score}
                    </TableCell>
                    <TableCell className="text-center">
                      {getTemperatureBadge(contact.score)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
