"use client";

import { Download, Link } from "@/images";

import { toast } from "react-toastify";

interface Props {
  image: string;
}

function setToHttps(url: string): string {
  if (url.startsWith("https")) return url;
  return url.replace("http", "https");
}

export const ControlButtons = ({ image }: Props) => {
  const handleShare = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => toast.success("Link copied!"));
  };

  const handleDownload = async () => {
    try {
      const data = await fetch(setToHttps(image));
      const blob = await data.blob();
      const url = URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.download = "image";
      anchor.href = url;
      anchor.click();
    } catch (error) {
      toast.error("Download error");
    }
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <button
        onClick={handleShare}
        className="flex items-center gap-1 bg-cc-royal-blue hover:bg-blue-700 text-white px-3 py-2 rounded-lg active:scale-95"
      >
        <Link className="w-4" />
        Share
      </button>
      <button
        onClick={handleDownload}
        className="flex items-center gap-1 bg-cc-royal-blue hover:bg-blue-700 text-white px-3 py-2 rounded-lg active:scale-95"
      >
        <Download className="w-4" />
        Download
      </button>
    </div>
  );
};
