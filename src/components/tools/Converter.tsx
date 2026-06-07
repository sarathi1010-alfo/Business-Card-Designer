"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export interface ConverterProps {
  title: string;
  inputUnit: string;
  outputUnit: string;
  conversionFn: (val: number) => number;
}

export function Converter({ title, inputUnit, outputUnit, conversionFn }: ConverterProps) {
  const [inputVal, setInputVal] = useState<string>('');
  const [outputVal, setOutputVal] = useState<string>('');

  const handleConvert = () => {
    const val = parseFloat(inputVal);
    if (!isNaN(val)) {
      setOutputVal(conversionFn(val).toString());
    } else {
      setOutputVal('Invalid input');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="input">{inputUnit}</Label>
          <Input
            id="input"
            type="number"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder={`Enter ${inputUnit}`}
          />
        </div>

        <Button onClick={handleConvert} className="w-full">Convert</Button>

        <div className="grid gap-2">
          <Label htmlFor="output">{outputUnit}</Label>
          <Input
            id="output"
            type="text"
            readOnly
            value={outputVal}
            placeholder={`Result in ${outputUnit}`}
          />
        </div>
      </div>
    </div>
  );
}
