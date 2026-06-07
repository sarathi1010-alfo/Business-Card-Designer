"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export interface CalculatorProps {
  title: string;
  calculateFn: (params: Record<string, number>) => string | number;
  inputSchema: Array<{ key: string, label: string }>;
}

export function Calculator({ title, calculateFn, inputSchema }: CalculatorProps) {
  const [params, setParams] = useState<Record<string, number>>({});
  const [result, setResult] = useState<string | number | null>(null);

  const handleCalculate = () => {
    setResult(calculateFn(params));
  };

  const updateParam = (key: string, value: string) => {
    const num = parseFloat(value);
    setParams(prev => ({ ...prev, [key]: isNaN(num) ? 0 : num }));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="grid gap-4">
        {inputSchema.map((field) => (
          <div key={field.key} className="grid gap-2">
            <Label htmlFor={field.key}>{field.label}</Label>
            <input
              id={field.key}
              type="number"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              onChange={(e) => updateParam(field.key, e.target.value)}
            />
          </div>
        ))}

        <Button onClick={handleCalculate} className="w-full">Calculate</Button>

        {result !== null && (
          <div className="mt-4 p-4 border rounded bg-slate-50 flex flex-col items-center justify-center">
             <span className="text-sm text-gray-500">Result</span>
             <span className="text-2xl font-bold text-slate-800">{result}</span>
          </div>
        )}
      </div>
    </div>
  );
}
