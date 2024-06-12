import cloudinary from "cloudinary";

// TODO: This config could be located in other file eg /lib
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

class ImageService {
  private saveImageInCloudinary(buffer: Buffer): Promise<string> {
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader
        .upload_stream({ resource_type: "auto" }, (error, result) => {
          if (error) {
            reject(new Error("The image could not be saved"));
          } else {
            resolve(result?.asset_id);
          }
        })
        .end(buffer);
    });
  }

  public async saveImage(image: File): Promise<string> {
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return this.saveImageInCloudinary(buffer);
  }

  public isValidImage(image: FormDataEntryValue | null): image is File {
    return image instanceof File;
  }
}

const imageService = new ImageService();

export default imageService;
