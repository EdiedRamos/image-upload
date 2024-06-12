"use client";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import { useCallback, useState } from "react";

import { Exit } from "@/images";
import { Loader } from "@/components";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";

function hasFiles(files: File[]): boolean {
  if (files.length > 0) return true;
  toast.error("This file type is not allowed");
  return false;
}

function hasCorrectSize(file: File): boolean {
  const MAX_SIZE = 1024 * 1024 * 2;
  if (file.size <= MAX_SIZE) return true;
  toast.info("This file size exceeded 2MB");
  return false;
}

export const Uploader = () => {
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false);

  const router = useRouter();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!hasFiles(acceptedFiles)) return;

    const [image] = acceptedFiles;

    if (!hasCorrectSize(image)) return;

    const imageUrl = URL.createObjectURL(image);

    const data = new FormData();

    data.append("image", image);

    setIsLoadingImage(true);

    fetch("/api/image", {
      method: "POST",
      body: data,
    })
      .then((res) => {
        if (!/^2\d{2}$/.test(res.status.toString())) {
          throw new Error("Error while saving the image xd");
        }

        return res.json();
      })
      .then((ans) => {
        if (ans.assetId) {
          router.push(`/preview/${ans.assetId}`);
        }
      })
      .catch((error) => {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      });

    console.log(imageUrl);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png", ".webp", ".gif"],
    },
  });

  if (isLoadingImage) {
    return <Loader />;
  }

  return (
    <>
      <section
        className={`mx-4 w-full bg-cc-white dark:bg-cc-midnight-blue md:w-[540px] h-[400px] p-3 rounded-lg shadow-lg`}
      >
        <div
          className={`border-2 dark:border-cc-outer-space-light border-dashed h-full rounded-lg flex justify-center items-center flex-col gap-5 ${
            isDragActive
              ? "bg-slate-100 dark:bg-slate-800"
              : "bg-cc-white dark:bg-cc-midnight-blue"
          }`}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <Exit />
          <div className="text-center">
            <p className="dark:text-cc-white">
              Drag & drop file or{" "}
              <span className="text-cc-royal-blue">browse files</span>
            </p>
            <p className="mt-2 dark:text-cc-platinum text-sm">
              JPG, PNG or GIF - Max file size 2MB
            </p>
          </div>
        </div>
      </section>
      <ToastContainer theme="dark" position="bottom-center" />
    </>
  );
};
