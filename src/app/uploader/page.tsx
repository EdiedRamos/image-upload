import type { Metadata } from "next";
import { Uploader } from "@/uploader";

export const metadata: Metadata = {
  title: "Upload your image",
  description: "Uploader image",
};

export default function UploaderPage() {
  return (
    <div className="my-20 mx-4">
      <Uploader />
    </div>
  );
}
