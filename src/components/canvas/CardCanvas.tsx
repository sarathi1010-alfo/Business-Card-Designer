"use client";

import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Rect, Circle, Text as KonvaText, Transformer } from "react-konva";
import Konva from "konva";
import { useEditorStore } from "@/store/editor-store";
import { CanvasElement, CircleElement } from "@/types/editor";
import { CARD_WIDTH, CARD_HEIGHT } from "@/lib/templates/mock-data";

interface ElementRendererProps {
  element: CanvasElement;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onChange: (id: string, newAttrs: Partial<CanvasElement>) => void;
}

const ElementRenderer = ({ element, isSelected, onSelect, onChange }: ElementRendererProps) => {
  const shapeRef = useRef<Konva.Shape | null>(null);
  const trRef = useRef<Konva.Transformer | null>(null);

  useEffect(() => {
    if (isSelected && trRef.current && shapeRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer()?.batchDraw();
    }
  }, [isSelected]);

  const handleDragEnd = (e: Konva.KonvaEventObject<DragEvent>) => {
    onChange(element.id, {
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  const handleTransformEnd = () => {
    const node = shapeRef.current;
    if (!node) return;

    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    node.scaleX(1);
    node.scaleY(1);

    const updates: Partial<CanvasElement> = {
      x: node.x(),
      y: node.y(),
      rotation: node.rotation(),
    };

    if (element.type === 'rect') {
      updates.width = Math.max(5, node.width() * scaleX);
      updates.height = Math.max(5, node.height() * scaleY);
    } else if (element.type === 'circle') {
      // average scale for circle radius
      const avgScale = (scaleX + scaleY) / 2;
      (updates as CircleElement).radius = Math.max(5, (element as CircleElement).radius * avgScale);
    } else if (element.type === 'text') {
      updates.width = Math.max(5, node.width() * scaleX);
      // We don't scale font size here for simplicity, typically text boxes resize their wrap width
    }

    onChange(element.id, updates);
  };

  const commonProps = {
    id: element.id,
    x: element.x,
    y: element.y,
    rotation: element.rotation || 0,
    opacity: element.opacity ?? 1,
    fill: element.fill,
    stroke: element.stroke,
    strokeWidth: element.strokeWidth || 0,
    draggable: true,
    onClick: () => onSelect(element.id),
    onTap: () => onSelect(element.id),
    onDragEnd: handleDragEnd,
    onTransformEnd: handleTransformEnd,
  };

  let ShapeComponent = null;

  switch (element.type) {
    case 'rect':
      ShapeComponent = (
        <Rect
          {...commonProps}
          ref={shapeRef as React.RefObject<Konva.Rect>}
          width={element.width}
          height={element.height}
          cornerRadius={element.cornerRadius || 0}
        />
      );
      break;
    case 'circle':
      ShapeComponent = (
        <Circle
          {...commonProps}
          ref={shapeRef as React.RefObject<Konva.Circle>}
          radius={element.radius}
        />
      );
      break;
    case 'text':
      ShapeComponent = (
        <KonvaText
          {...commonProps}
          ref={shapeRef as React.RefObject<Konva.Text>}
          text={element.text}
          fontSize={element.fontSize}
          fontFamily={element.fontFamily}
          fontStyle={`${element.fontStyle || 'normal'} ${element.fontWeight || 'normal'}`}
          align={element.textAlign || 'left'}
          width={element.width}
        />
      );
      break;
  }

  return (
    <>
      {ShapeComponent}
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export function CardCanvas() {
  const { template, elements, selectedElementId, selectElement, updateElement } = useEditorStore();
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<Konva.Stage>(null);

  // Auto-scale logic
  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        // Calculate scale to fit container with 40px padding
        const padding = 40;
        const scaleX = (clientWidth - padding * 2) / CARD_WIDTH;
        const scaleY = (clientHeight - padding * 2) / CARD_HEIGHT;
        setScale(Math.min(scaleX, scaleY, 1)); // Don't scale up beyond 1
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const checkDeselect = (e: Konva.KonvaEventObject<MouseEvent | TouchEvent>) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage() || e.target.id() === 'background-rect';
    if (clickedOnEmpty) {
      selectElement(null);
    }
  };

  if (!template) return null;

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center overflow-hidden">
      <div
        className="shadow-2xl ring-1 ring-border rounded-sm overflow-hidden"
        style={{
          width: CARD_WIDTH * scale,
          height: CARD_HEIGHT * scale,
        }}
      >
        <Stage
          ref={stageRef}
          width={CARD_WIDTH * scale}
          height={CARD_HEIGHT * scale}
          scaleX={scale}
          scaleY={scale}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
        >
          <Layer>
            {/* Background Rect to catch clicks and provide color */}
            <Rect
              id="background-rect"
              x={0}
              y={0}
              width={CARD_WIDTH}
              height={CARD_HEIGHT}
              fill={template.backgroundColor}
              listening={true}
            />
            {elements.map((element) => (
              <ElementRenderer
                key={element.id}
                element={element}
                isSelected={selectedElementId === element.id}
                onSelect={selectElement}
                onChange={updateElement}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}