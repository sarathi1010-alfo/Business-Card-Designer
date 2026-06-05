import { useEditorStore } from "@/store/editor-store";
import { Type, Square, Circle as CircleIcon, Undo, Redo, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { nanoid } from "nanoid";

export function EditorToolbar() {
  const { undo, redo, addElement, removeElement, selectedElementId } = useEditorStore();

  const handleAddText = () => {
    addElement({
      id: nanoid(),
      type: 'text',
      x: 100,
      y: 100,
      width: 200,
      text: 'Double click to edit',
      fontSize: 24,
      fontFamily: 'Inter, sans-serif',
      fill: '#000000',
    });
  };

  const handleAddRect = () => {
    addElement({
      id: nanoid(),
      type: 'rect',
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fill: '#e4e4e7',
    });
  };

  const handleAddCircle = () => {
    addElement({
      id: nanoid(),
      type: 'circle',
      x: 150,
      y: 150,
      radius: 50,
      fill: '#e4e4e7',
    });
  };

  const handleDelete = () => {
    if (selectedElementId) {
      removeElement(selectedElementId);
    }
  };

  return (
    <div className="flex items-center gap-2 border-r pr-4 mr-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger render={<div />}>
            <Button variant="ghost" size="icon" onClick={undo}>
              <Undo className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Undo</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger render={<div />}>
            <Button variant="ghost" size="icon" onClick={redo}>
              <Redo className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Redo</TooltipContent>
        </Tooltip>

        <div className="w-px h-6 bg-border mx-2" />

        <Tooltip>
          <TooltipTrigger render={<div />}>
            <Button variant="ghost" size="icon" onClick={handleAddText}>
              <Type className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Add Text</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger render={<div />}>
            <Button variant="ghost" size="icon" onClick={handleAddRect}>
              <Square className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Add Rectangle</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger render={<div />}>
            <Button variant="ghost" size="icon" onClick={handleAddCircle}>
              <CircleIcon className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Add Circle</TooltipContent>
        </Tooltip>

        <div className="w-px h-6 bg-border mx-2" />

        <Tooltip>
          <TooltipTrigger render={<div />}>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDelete}
              disabled={!selectedElementId}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Delete Selected</TooltipContent>
        </Tooltip>

      </TooltipProvider>
    </div>
  );
}
