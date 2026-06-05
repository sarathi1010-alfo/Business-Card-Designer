"use client";

import { useEditorStore } from "@/store/editor-store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { TextElement, RectElement, CircleElement } from "@/types/editor";

export function EditorControls() {
  const { elements, selectedElementId, updateElement } = useEditorStore();
  const selectedElement = elements.find((el) => el.id === selectedElementId);

  if (!selectedElement) {
    return (
      <div className="text-sm text-muted-foreground border border-dashed border-border rounded-lg p-8 text-center mt-4">
        Select an element on the canvas to edit its properties.
      </div>
    );
  }

  const handleUpdate = (updates: Partial<typeof selectedElement>) => {
    updateElement(selectedElement.id, updates);
  };

  return (
    <div className="flex flex-col gap-6 mt-4">
      {/* Position & Opacity - Common for all */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium border-b pb-2">Common</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>X Position</Label>
            <Input
              type="number"
              value={Math.round(selectedElement.x)}
              onChange={(e) => handleUpdate({ x: Number(e.target.value) })}
            />
          </div>
          <div className="space-y-2">
            <Label>Y Position</Label>
            <Input
              type="number"
              value={Math.round(selectedElement.y)}
              onChange={(e) => handleUpdate({ y: Number(e.target.value) })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Opacity</Label>
            <span className="text-xs text-muted-foreground">
              {Math.round((selectedElement.opacity ?? 1) * 100)}%
            </span>
          </div>
          <Slider
            value={[(selectedElement.opacity ?? 1) * 100]}
            min={0}
            max={100}
            step={1}
            onValueChange={(val) => {
              const opacityVal = Array.isArray(val) ? val[0] : (val as unknown as number);
              handleUpdate({ opacity: opacityVal / 100 });
            }}
          />
        </div>

        <div className="space-y-2">
          <Label>Color (Fill)</Label>
          <div className="flex gap-2">
            <Input
              type="color"
              className="w-12 h-10 p-1 cursor-pointer"
              value={selectedElement.fill || '#000000'}
              onChange={(e) => handleUpdate({ fill: e.target.value })}
            />
            <Input
              type="text"
              value={selectedElement.fill || '#000000'}
              onChange={(e) => handleUpdate({ fill: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Text Properties */}
      {selectedElement.type === 'text' && (
        <div className="space-y-4">
          <h3 className="text-sm font-medium border-b pb-2">Text</h3>
          <div className="space-y-2">
            <Label>Content</Label>
            <Input
              value={(selectedElement as TextElement).text}
              onChange={(e) => handleUpdate({ text: e.target.value } as Partial<TextElement>)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Font Size</Label>
              <Input
                type="number"
                value={(selectedElement as TextElement).fontSize}
                onChange={(e) => handleUpdate({ fontSize: Number(e.target.value) } as Partial<TextElement>)}
              />
            </div>
            <div className="space-y-2">
              <Label>Width</Label>
              <Input
                type="number"
                value={Math.round((selectedElement as TextElement).width)}
                onChange={(e) => handleUpdate({ width: Number(e.target.value) } as Partial<TextElement>)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Rect Properties */}
      {selectedElement.type === 'rect' && (
        <div className="space-y-4">
          <h3 className="text-sm font-medium border-b pb-2">Rectangle</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Width</Label>
              <Input
                type="number"
                value={Math.round((selectedElement as RectElement).width)}
                onChange={(e) => handleUpdate({ width: Number(e.target.value) } as Partial<RectElement>)}
              />
            </div>
            <div className="space-y-2">
              <Label>Height</Label>
              <Input
                type="number"
                value={Math.round((selectedElement as RectElement).height)}
                onChange={(e) => handleUpdate({ height: Number(e.target.value) } as Partial<RectElement>)}
              />
            </div>
            <div className="space-y-2 col-span-2">
              <Label>Corner Radius</Label>
              <Input
                type="number"
                value={(selectedElement as RectElement).cornerRadius || 0}
                onChange={(e) => handleUpdate({ cornerRadius: Number(e.target.value) } as Partial<RectElement>)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Circle Properties */}
      {selectedElement.type === 'circle' && (
        <div className="space-y-4">
          <h3 className="text-sm font-medium border-b pb-2">Circle</h3>
          <div className="space-y-2">
            <Label>Radius</Label>
            <Input
              type="number"
              value={Math.round((selectedElement as CircleElement).radius)}
              onChange={(e) => handleUpdate({ radius: Number(e.target.value) } as Partial<CircleElement>)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
