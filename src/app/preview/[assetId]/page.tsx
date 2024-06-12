import "react-toastify/dist/ReactToastify.css";

import { ControlButtons } from "./components/ControlButtons";
import { ToastContainer } from "react-toastify";
import { notFound } from "next/navigation";

interface Props {
  params: { assetId: string };
}

interface ImageResponse {
  message: string;
  image: string;
}

async function loadImage(assetId: string): Promise<string | undefined> {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/image?assetId=${assetId}`
  );
  if (!request.ok) return undefined;
  const data = (await request.json()) as ImageResponse;
  return data.image;
}

const ImagePreview = async ({ params }: Props) => {
  const image = await loadImage(params.assetId);

  if (!image) notFound();

  return (
    <div className="flex flex-grow items-center justify-center p-10">
      <div className="flex flex-col gap-5 justify-center items-center">
        <section
          className={`mx-4 w-full md:w-[540px] h-[400px] p-3 rounded-lg shadow-lg bg-cc-white dark:bg-cc-midnight-blue `}
        >
          <div className="h-full rounded-lg flex justify-center items-center flex-col gap-5">
            <img alt="Loaded image" className="rounded-lg" src={image} />
          </div>
        </section>
        <ControlButtons />
      </div>
      <ToastContainer theme="dark" position="bottom-left" />
    </div>
  );
};

export default ImagePreview;
