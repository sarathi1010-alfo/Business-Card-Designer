"use client";

import { useEffect, useState } from "react";
import { AnalyticsEvent, getEvents } from "@/lib/analytics/tracker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Zap, Eye, Link as LinkIcon, QrCode, UserPlus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const formatTimeAgo = (timestamp: number) => {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};

const getEventIcon = (type: string) => {
  switch (type) {
    case 'page_view':
    case 'page_view_long':
      return <Eye className="w-4 h-4 text-blue-500" />;
    case 'case_study_click':
      return <Zap className="w-4 h-4 text-yellow-500" />;
    case 'qr_scan':
      return <QrCode className="w-4 h-4 text-purple-500" />;
    case 'lead_capture':
      return <UserPlus className="w-4 h-4 text-green-500" />;
    case 'link_click':
      return <LinkIcon className="w-4 h-4 text-gray-500" />;
    default:
      return <Activity className="w-4 h-4 text-gray-500" />;
  }
};

export function LiveFeed() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);

  // Set up polling for real-time updates and time-ago updates
  useEffect(() => {
    const updateEvents = () => {
      setEvents(getEvents().sort((a, b) => b.timestamp - a.timestamp));
    };

    updateEvents();

    // Also listen to custom events for immediate updates
    const handleNewEvent = (e: Event) => {
      const customEvent = e as CustomEvent<AnalyticsEvent>;
      setEvents(prev => [customEvent.detail, ...prev].sort((a, b) => b.timestamp - a.timestamp));
    };

    window.addEventListener('analytics_event_tracked', handleNewEvent);

    // Poll every 10 seconds to refresh the list and update "time ago" texts
    const interval = setInterval(updateEvents, 10000);

    return () => {
      window.removeEventListener('analytics_event_tracked', handleNewEvent);
      clearInterval(interval);
    };
  }, []);

  return (
    <Card className="h-[400px] flex flex-col">
      <CardHeader className="pb-3 border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Live Activity Feed
          </CardTitle>
          <Badge variant="secondary" className="text-xs font-normal">
            Real-time
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-0 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex flex-col p-4 space-y-4">
            {events.length === 0 ? (
              <div className="text-center text-muted-foreground py-8 text-sm">
                No activity yet. Waiting for visitors...
              </div>
            ) : (
              events.map((event) => (
                <div key={event.id} className="flex items-start gap-3 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="mt-0.5 p-1.5 bg-muted rounded-full">
                    {getEventIcon(event.type)}
                  </div>
                  <div className="flex flex-col flex-1 gap-0.5">
                    <span className="font-medium">{event.description}</span>
                    <span className="text-xs text-muted-foreground">
                      {formatTimeAgo(event.timestamp)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
