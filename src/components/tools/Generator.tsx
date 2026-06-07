"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export interface GeneratorProps {
  title: string;
  generateFn: (params: Record<string, string | number>) => string;
  configSchema: Array<{ key: string, label: string, type: 'text' | 'number' }>;
}

export function Generator({ title, generateFn, configSchema }: GeneratorProps) {
  const [params, setParams] = useState<Record<string, string | number>>({});
  const [result, setResult] = useState<string>('');

  const handleGenerate = () => {
    setResult(generateFn(params));
  };

  const updateParam = (key: string, value: string | number) => {
    setParams(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="grid gap-4">
        {configSchema.map((field) => (
          <div key={field.key} className="grid gap-2">
            <Label htmlFor={field.key}>{field.label}</Label>
            <input
              id={field.key}
              type={field.type}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              onChange={(e) => updateParam(field.key, e.target.value)}
            />
          </div>
        ))}

        <Button onClick={handleGenerate} className="w-full">Generate</Button>

        {result && (
          <div className="p-4 bg-gray-100 rounded-md mt-4 border text-sm break-all">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
