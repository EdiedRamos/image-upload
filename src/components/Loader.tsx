export const Loader = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-cc-white dark:bg-cc-midnight-blue mx-4 rounded-lg px-20 py-8 w-full md:w-auto shadow-lg">
      <p className="font-medium dark:text-white">
        Uploading, <span className="font-normal">plase wait..</span>
      </p>
      <div className="text-white rounded-2 relative w-full md:w-[320px] h-[6px] bg-gray-200 overflow-hidden rounded-lg">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-blue-500 animate-loading-bar rounded-lg"></div>
      </div>
    </div>
  );
};
