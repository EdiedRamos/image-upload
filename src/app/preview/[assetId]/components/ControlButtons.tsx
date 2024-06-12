"use client";

import { Download, Link } from "@/images";

import { toast } from "react-toastify";

export const ControlButtons = () => {
  const handleShare = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => toast.success("Link copied!"));
  };
  const handleDownload = () => toast.success("download");

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
