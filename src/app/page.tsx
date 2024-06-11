import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Image Upload",
  description: "Basic image uploader with Next.js",
};

const Main = () => {
  redirect("/uploader");
};

export default Main;
