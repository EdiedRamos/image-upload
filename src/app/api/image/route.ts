import { CustomResponse } from "@/utils";
import cloudinary from "cloudinary";
import imageService from "./upload.service";

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
  if (!request.formData) {
    return CustomResponse.badRequest({
      message: "FormData is required",
    });
  }

  const formData = await request.formData();
  const image = formData.get("image");

  if (!imageService.isValidImage(image)) {
    return CustomResponse.badRequest({
      message: "The file type is not allowed",
    });
  }

  let responseBody: Record<string, any> = {};

  try {
    const assetId = await imageService.saveImage(image);
    responseBody = {
      message: "Image uploaded",
      assetId,
    };
  } catch (error) {
    return CustomResponse.noResponse({
      message: typeof error === "string" ? error : "Something went wrong",
    });
  }
  return CustomResponse.success(responseBody);
}
