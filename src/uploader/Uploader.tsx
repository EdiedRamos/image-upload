"use client";

import "react-toastify/dist/ReactToastify.css";

import { type FileRejection, useDropzone } from "react-dropzone";
import React, { useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";

import { Exit } from "@/images";

export const Uploader = () => {
  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      console.log({ acceptedFiles });
      console.log({ fileRejections });
      if (fileRejections.length > 0) {
        toast.error("This file type is not allowed");
      }
    },
    []
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png", ".webp", ".gif"],
    },
  });

  return (
    <>
      <section {...getRootProps()}>
        <input {...getInputProps()} />
        <div
          className={`w-[540px] h-[400px] p-3  rounded-lg shadow-lg ${
            isDragActive
              ? "bg-slate-100 dark:bg-slate-800"
              : "bg-cc-white dark:bg-cc-midnight-blue"
          }`}
        >
          <div className="border-2 dark:border-cc-outer-space-light border-dashed h-full rounded-lg flex justify-center items-center flex-col gap-5">
            <Exit />
            <div className="text-center">
              <p className="dark:text-cc-white">
                Drag & drop file or{" "}
                <span className="text-cc-royal-blue">browse files</span>
              </p>
              <p className="mt-2 dark:text-cc-platinum text-sm">
                JPG, PNG or GIF - Max fle size 2MB
              </p>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer theme="dark" position="bottom-center" />
    </>
  );
};
