import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

// TODO: This could be located in a custom file for all responses
const CustomResponse = {
  badRequest: (body: Record<string, any>) =>
    NextResponse.json(body, { status: 400 }),
  notFound: (body: Record<string, any>) =>
    NextResponse.json(body, { status: 404 }),
  success: (body: Record<string, any>) => NextResponse.json(body),
};

// TODO: This config could be located in other file eg /lib
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const assetId = searchParams.get("assetId");

  if (!assetId) {
    return CustomResponse.badRequest({
      message: "The asset id is required as query param",
    });
  }

  let cloudinaryResponse = null;

  try {
    cloudinaryResponse = await cloudinary.v2.api.resources_by_asset_ids(
      assetId
    );
  } catch {
    return CustomResponse.notFound({
      message: "Asset not found",
    });
  }

  return CustomResponse.success({
    message: "Asset found",
    image: cloudinaryResponse.resources.at(0)?.url,
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  return NextResponse.json({
    "your body": body,
  });
}
