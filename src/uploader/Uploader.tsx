import { Exit } from "@/images";
import React from "react";

export const Uploader = () => {
  return (
    <div className="w-[540px] h-[400px] p-3 bg-cc-white dark:bg-cc-midnight-blue rounded-lg shadow-lg">
      <div className="border-2 dark:border-cc-outer-space-light border-dashed h-full rounded-lg flex justify-center items-center flex-col gap-5">
        <Exit />
        <div className="text-center">
          <p className="dark:text-cc-white">
            Drag & drop file or{" "}
            <span className="text-cc-royal-blue">browse files</span>
          </p>
          <p className="mt-2 dark:text-cc-outer-space-light text-sm">
            JPG, PNG or GIF - Max fle size 2MB
          </p>
        </div>
      </div>
    </div>
  );
};
