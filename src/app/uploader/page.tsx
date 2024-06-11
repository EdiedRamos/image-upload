import type { Metadata } from "next";
import { Uploader } from "@/uploader";

export const metadata: Metadata = {
  title: "Upload your image",
  description: "Uploader image",
};

export default function UploaderPage() {
  return (
    <div className="flex flex-grow items-center justify-center p-10">
      <Uploader />
    </div>
  );
}
