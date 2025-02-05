"use server"
import { Storage } from '@google-cloud/storage';
require('dotenv').config()

import fs from "fs";
import { arrayBuffer } from 'stream/consumers';

import path from "path";


export async function uploadToGCP(
  file: File
) 
: Promise<{ file_key: string; file_name: string }> {
  return new Promise( async (resolve, reject) => {
    try {
      const gstorage = new Storage({
        projectId: process.env.NEXT_PUBLIC_GCP_PROJECT_ID, // Your GCP project ID
        keyFilename: process.env.NEXT_PUBLIC_GCP_KEY_FILENAME, // Path to your service account key JSON
      });


      //Function to Check if we successfully intialised GCP
      gstorage.getBuckets().then(x => console.log(x));


      // const bucketName = process.env.NEXT_PUBLIC_GCP_BUCKET_NAME!;
      // const file_key =
      //   "uploads/" + Date.now().toString();
      //   //  + file.name.replace(" ", "-");
        const file_key = `uploads/${Date.now()}-${file.name.replace(/\s+/g, "-")}`;


      // const bucket = gstorage.bucket(bucketName);

      const buffer = await file.arrayBuffer();
      // Upload the file to the GCP bucket
      await gstorage.bucket('chattypdf')
        .file(file_key)
        .save(Buffer.from(buffer));
        
        return resolve({
          file_key,
          file_name: file.name,
        });
        // return true;
    } catch (error) {
      console.log(error)
      return reject(error);
      // return false;

    }
  });
}

export async function getGCPUrl(file_key: string) {
  const url = `https://storage.googleapis.com/${process.env.NEXT_PUBLIC_GCP_BUCKET_NAME}/${file_key}`;
  return url;
}


export async function downloadFromGCP(file_key: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const gstorage = new Storage({
        projectId: process.env.NEXT_PUBLIC_GCP_PROJECT_ID, // GCP Project ID
        keyFilename: process.env.NEXT_PUBLIC_GCP_KEY_FILENAME, // Path to Service Account Key JSON
      });

      const bucketName = process.env.NEXT_PUBLIC_GCP_BUCKET_NAME!;
      const file_name = path.join("uploads/", `${Date.now()}.pdf`);
      // const file_name = path.join("/tmp", `vijeta.pdf`);


      const file = gstorage.bucket(bucketName).file(file_key);
      
      // Download the file to local storage
      await file.download({ destination: file_name });

      console.log(`File downloaded to ${file_name}`);
      resolve(file_name);
    } catch (error) {
      console.error("Error downloading file:", error);
      reject(error);
    }
  });
}


// downloadFromS3("uploads/1693568801787chongzhisheng_resume.pdf");
