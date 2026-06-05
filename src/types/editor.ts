export type ElementType = 'text' | 'rect' | 'circle' | 'image';

export interface CanvasElementBase {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width?: number;
  height?: number;
  rotation?: number;
  opacity?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

export interface TextElement extends CanvasElementBase {
  type: 'text';
  text: string;
  fontSize: number;
  fontFamily: string;
  fontWeight?: string;
  fontStyle?: string;
  textAlign?: 'left' | 'center' | 'right';
  width: number; // Text elements should have a defined width for bounding boxes
}

export interface RectElement extends CanvasElementBase {
  type: 'rect';
  width: number;
  height: number;
  cornerRadius?: number;
}

export interface CircleElement extends CanvasElementBase {
  type: 'circle';
  radius: number;
}

export type CanvasElement = TextElement | RectElement | CircleElement;

export interface Template {
  id: string;
  name: string;
  category: string;
  preview: string;
  width: number;
  height: number;
  backgroundColor: string;
  elements: CanvasElement[];
}
