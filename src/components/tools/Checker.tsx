"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export interface CheckerProps {
  title: string;
  checkFn: (input: string) => { passed: boolean; message: string; details?: string[] };
  inputPlaceholder?: string;
}

export function Checker({ title, checkFn, inputPlaceholder = "Enter value to check" }: CheckerProps) {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<{ passed: boolean; message: string; details?: string[] } | null>(null);

  const handleCheck = () => {
    setResult(checkFn(input));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="checkInput">Input</Label>
          <textarea
            id="checkInput"
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            placeholder={inputPlaceholder}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>

        <Button onClick={handleCheck} className="w-full">Validate</Button>

        {result && (
          <div className={`mt-4 p-4 border rounded ${result.passed ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <div className="flex items-center gap-2">
              <span className={`font-bold ${result.passed ? 'text-green-700' : 'text-red-700'}`}>
                {result.passed ? "✓ Passed" : "✗ Failed"}
              </span>
              <span className="text-sm text-gray-700">- {result.message}</span>
            </div>
            {result.details && result.details.length > 0 && (
               <ul className="mt-2 text-sm text-gray-600 list-disc pl-5">
                 {result.details.map((d, i) => <li key={i}>{d}</li>)}
               </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
