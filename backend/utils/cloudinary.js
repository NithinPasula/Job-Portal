import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

cloudinary.uploader.upload(
  "nyvdhfwcaubxhvyzx8vb",
  {
    resource_type: "auto", // Ensure this is set to raw for non-image files
  },
  (error, result) => {
    if (error) {
      console.error("Error uploading PDF:", error);
    } else {
      console.log("PDF uploaded successfully:", result);
    }
  }
);

cloudinary.uploader.explicit(
  "nyvdhfwcaubxhvyzx8vb",
  {
    type: "upload", // Specify that you're updating an uploaded file
    access_type: "public", // Set access type to private
  },
  (error, result) => {
    if (error) {
      console.error("Error updating access control:", error);
    } else {
      console.log("Access control updated:", result);
    }
  }
);

export default cloudinary;
