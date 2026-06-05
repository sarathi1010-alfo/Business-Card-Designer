import { Template } from '@/types/editor';

// Standard business card dimensions in pixels (assuming 3.5" x 2" at 300 DPI)
// Typically for web rendering, we might use a smaller scale but maintain the aspect ratio.
// 1050x600 for high-res web preview
export const CARD_WIDTH = 1050;
export const CARD_HEIGHT = 600;

export const mockTemplates: Template[] = [
  {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    category: 'Minimal',
    preview: '/templates/modern-minimal.webp',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#ffffff',
    elements: [
      {
        id: 'bg-rect-1',
        type: 'rect',
        x: 0,
        y: 0,
        width: 300,
        height: CARD_HEIGHT,
        fill: '#f4f4f5',
      },
      {
        id: 'name',
        type: 'text',
        x: 350,
        y: 200,
        width: 600,
        text: 'JOHN DOE',
        fontSize: 64,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
        fill: '#09090b',
        textAlign: 'left'
      },
      {
        id: 'title',
        type: 'text',
        x: 350,
        y: 280,
        width: 600,
        text: 'SOFTWARE ENGINEER',
        fontSize: 24,
        fontFamily: 'Inter, sans-serif',
        fill: '#71717a',
        textAlign: 'left',
        opacity: 0.8
      },
      {
        id: 'contact',
        type: 'text',
        x: 350,
        y: 450,
        width: 600,
        text: 'john@example.com\n+1 234 567 8900\nwww.johndoe.com',
        fontSize: 20,
        fontFamily: 'Inter, sans-serif',
        fill: '#09090b',
        textAlign: 'left'
      }
    ]
  },
  {
    id: 'corporate-blue',
    name: 'Corporate Blue',
    category: 'Corporate',
    preview: '/templates/corporate-blue.webp',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#1e3a8a', // blue-900
    elements: [
      {
        id: 'name',
        type: 'text',
        x: 100,
        y: 250,
        width: 850,
        text: 'SARAH JENKINS',
        fontSize: 56,
        fontFamily: 'system-ui, sans-serif',
        fontWeight: 'bold',
        fill: '#ffffff',
        textAlign: 'center'
      },
      {
        id: 'title',
        type: 'text',
        x: 100,
        y: 330,
        width: 850,
        text: 'CHIEF EXECUTIVE OFFICER',
        fontSize: 20,
        fontFamily: 'system-ui, sans-serif',
        fill: '#93c5fd', // blue-300
        textAlign: 'center'
      },
      {
        id: 'divider',
        type: 'rect',
        x: 425,
        y: 380,
        width: 200,
        height: 2,
        fill: '#3b82f6', // blue-500
      },
      {
        id: 'company',
        type: 'text',
        x: 100,
        y: 100,
        width: 850,
        text: 'NEXUS CORP',
        fontSize: 32,
        fontFamily: 'system-ui, sans-serif',
        fontWeight: 'bold',
        fill: '#ffffff',
        textAlign: 'center'
      }
    ]
  },
  {
    id: 'creative-dark',
    name: 'Creative Dark',
    category: 'Creative',
    preview: '/templates/creative-dark.webp',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#000000',
    elements: [
      {
        id: 'accent-circle',
        type: 'circle',
        x: 800,
        y: 100,
        radius: 150,
        fill: '#ec4899', // pink-500
        opacity: 0.8
      },
      {
        id: 'name',
        type: 'text',
        x: 100,
        y: 300,
        width: 600,
        text: 'ALEX RIVERA',
        fontSize: 72,
        fontFamily: 'sans-serif',
        fontWeight: '900',
        fill: '#ffffff',
        textAlign: 'left'
      },
      {
        id: 'title',
        type: 'text',
        x: 100,
        y: 390,
        width: 600,
        text: 'Creative Director',
        fontSize: 32,
        fontFamily: 'sans-serif',
        fontStyle: 'italic',
        fill: '#a1a1aa', // zinc-400
        textAlign: 'left'
      }
    ]
  }
];
