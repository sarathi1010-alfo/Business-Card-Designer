"use client";

import { LiveFeed } from "@/components/dashboard/LiveFeed";
import { ContactsList } from "@/components/dashboard/ContactsList";
import { exportContactsCSV, exportAnalyticsPDF } from "@/lib/analytics/exports";
import { Button } from "@/components/ui/button";
import { Download, FileText, LayoutDashboard } from "lucide-react";
import { useEffect, useState } from "react";
import { getContacts, getEvents } from "@/lib/analytics/tracker";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalViews: 0,
    uniqueVisitors: 0,
    totalLeads: 0,
    conversionRate: "0%"
  });

  useEffect(() => {
    // Calculate simple stats
    const updateStats = () => {
      const events = getEvents();
      const contacts = getContacts();

      const views = events.filter(e => e.type === 'page_view' || e.type === 'page_view_long').length;
      const uniqueIds = new Set(events.filter(e => e.contactId).map(e => e.contactId));
      const unique = Math.max(uniqueIds.size, Math.floor(views * 0.7));
      const leads = contacts.length;
      const rate = unique > 0 ? ((leads / unique) * 100).toFixed(1) + "%" : "0%";

      setStats({
        totalViews: views,
        uniqueVisitors: unique,
        totalLeads: leads,
        conversionRate: rate
      });
    };

    updateStats();

    // Listen for custom events to update stats
    const handleNewEvent = () => updateStats();
    window.addEventListener('analytics_event_tracked', handleNewEvent);

    const interval = setInterval(updateStats, 10000);

    return () => {
      window.removeEventListener('analytics_event_tracked', handleNewEvent);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 sm:px-8 max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <LayoutDashboard className="w-8 h-8 text-primary" />
            Conversion Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Real-time analytics and lead intelligence for your digital identity.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={exportContactsCSV} className="gap-2">
            <FileText className="w-4 h-4" />
            Export Contacts
          </Button>
          <Button onClick={() => exportAnalyticsPDF('dashboard-report-container')} className="gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div id="dashboard-report-container" className="space-y-8 bg-background p-1 rounded-xl">
        {/* Top Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 bg-card border rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">Total Views</h3>
            <p className="text-3xl font-bold mt-2">{stats.totalViews}</p>
          </div>
          <div className="p-6 bg-card border rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">Unique Visitors</h3>
            <p className="text-3xl font-bold mt-2">{stats.uniqueVisitors}</p>
          </div>
          <div className="p-6 bg-card border rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">Total Leads</h3>
            <p className="text-3xl font-bold mt-2">{stats.totalLeads}</p>
          </div>
          <div className="p-6 bg-card border rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">Conversion Rate</h3>
            <p className="text-3xl font-bold mt-2 text-green-500">{stats.conversionRate}</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactsList />
          </div>
          <div className="lg:col-span-1">
            <LiveFeed />
          </div>
        </div>
      </div>
    </div>
  );
}
