import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full">
      <p className="text-6xl font-bold text-red-600 dark:text-red-500">
        [ 404 ]
      </p>
      <p className="text-xl dark:text-white">Page not found</p>
    </div>
  );
};

export default NotFound;
