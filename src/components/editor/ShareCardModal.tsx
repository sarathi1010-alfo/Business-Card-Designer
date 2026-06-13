"use client";

import { useState } from "react";
import { Copy, QrCode, Share2, Check } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useEditorStore } from "@/store/editor-store";
import { compressTemplateToUrl } from "@/lib/share";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ShareCardModal() {
  const template = useEditorStore((state) => state.template);
  const elements = useEditorStore((state) => state.elements);
  const [copied, setCopied] = useState(false);

  if (!template) return null;

  // Reconstruct template with current elements
  const currentTemplate = { ...template, elements };
  const shareUrl = compressTemplateToUrl(currentTemplate);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQR = () => {
    const svg = document.getElementById("qr-code");
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "brandcard-qr.png";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  const shareText = "Check out my new professional brand card!";

  return (
    <Dialog>
      <DialogTrigger render={<Button size="sm" variant="outline" className="gap-2" />}>
        <div className="flex items-center gap-2">
          <Share2 className="w-4 h-4" /> Share
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share your BrandCard</DialogTitle>
          <DialogDescription>
            Anyone with this link can view and remix your card design.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center py-6 gap-6">
          <div className="p-4 bg-white rounded-xl shadow-sm border">
            <QRCodeSVG
              id="qr-code"
              value={shareUrl}
              size={200}
              level="H"
              includeMargin={true}
            />
          </div>
          <Button variant="secondary" onClick={handleDownloadQR} className="gap-2">
            <QrCode className="w-4 h-4" /> Download QR Code
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <label htmlFor="link" className="sr-only">
              Link
            </label>
            <input
              id="link"
              defaultValue={shareUrl}
              readOnly
              className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground outline-none"
            />
          </div>
          <Button size="icon" onClick={handleCopy}>
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>

        <div className="flex justify-center gap-4 pt-4 border-t mt-2">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:underline text-muted-foreground hover:text-foreground transition-colors"
          >
            Share on Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:underline text-muted-foreground hover:text-foreground transition-colors"
          >
            Share on LinkedIn
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
