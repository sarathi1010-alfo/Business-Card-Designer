"use client";

import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Rect, Circle, Text as KonvaText } from "react-konva";
import { Template } from "@/types/editor";
import { CARD_WIDTH, CARD_HEIGHT } from "@/lib/templates/mock-data";

interface TemplatePreviewProps {
  template: Template;
  scale?: number;
}

export function TemplatePreview({ template, scale = 1 }: TemplatePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [actualScale, setActualScale] = useState(scale);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (scale !== 1) {
      const t = setTimeout(() => setActualScale(scale), 0);
      return () => clearTimeout(t);
    }
    const updateScale = () => {
      if (containerRef.current) {
        const { clientWidth } = containerRef.current;
        const newScaleX = clientWidth / CARD_WIDTH;
        setActualScale(newScaleX);
      }
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [scale]);

  if (!isMounted) return null;

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center overflow-hidden">
      <div
        className="shadow-md overflow-hidden relative rounded-xl"
        style={{
          width: CARD_WIDTH * actualScale,
          height: CARD_HEIGHT * actualScale,
        }}
      >
        <Stage
          width={CARD_WIDTH * actualScale}
          height={CARD_HEIGHT * actualScale}
          scaleX={actualScale}
          scaleY={actualScale}
          listening={false} // Disable interactivity for preview
        >
          <Layer>
            <Rect
              x={0}
              y={0}
              width={CARD_WIDTH}
              height={CARD_HEIGHT}
              fill={template.backgroundColor}
            />
            {template.elements.map((element) => {
              const commonProps = {
                id: element.id,
                x: element.x,
                y: element.y,
                rotation: element.rotation || 0,
                opacity: element.opacity ?? 1,
                fill: element.fill,
                stroke: element.stroke,
                strokeWidth: element.strokeWidth || 0,
              };

              switch (element.type) {
                case 'rect':
                  return (
                    <Rect
                      key={element.id}
                      {...commonProps}
                      width={element.width}
                      height={element.height}
                      cornerRadius={element.cornerRadius || 0}
                    />
                  );
                case 'circle':
                  return (
                    <Circle
                      key={element.id}
                      {...commonProps}
                      radius={element.radius}
                    />
                  );
                case 'text':
                  return (
                    <KonvaText
                      key={element.id}
                      {...commonProps}
                      text={element.text}
                      fontSize={element.fontSize}
                      fontFamily={element.fontFamily}
                      fontStyle={`${element.fontStyle || 'normal'} ${element.fontWeight || 'normal'}`}
                      align={element.textAlign || 'left'}
                      width={element.width}
                    />
                  );
                default:
                  return null;
              }
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}
