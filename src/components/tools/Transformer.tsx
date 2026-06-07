"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export interface TransformerProps {
  title: string;
  transformFn: (input: string) => string;
  inputPlaceholder?: string;
  outputLabel?: string;
}

export function Transformer({
  title,
  transformFn,
  inputPlaceholder = "Enter text to transform",
  outputLabel = "Transformed Output"
}: TransformerProps) {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const handleTransform = () => {
    setOutput(transformFn(input));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md border">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="inputArea">Input</Label>
          <textarea
            id="inputArea"
            className="flex min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            placeholder={inputPlaceholder}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>

        <div className="grid gap-2">
          <div className="flex justify-between items-center">
             <Label htmlFor="outputArea">{outputLabel}</Label>
             {output && <button onClick={handleCopy} className="text-xs text-blue-600 hover:underline">Copy</button>}
          </div>
          <textarea
            id="outputArea"
            className="flex min-h-[200px] w-full rounded-md border border-input bg-gray-50 px-3 py-2 text-sm ring-offset-background"
            readOnly
            value={output}
          />
        </div>
      </div>

      <Button onClick={handleTransform} className="w-full mt-4">Transform</Button>
    </div>
  );
}
