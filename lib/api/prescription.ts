import axios from "axios";
import { API_CONFIG } from "./config";
import { PrescriptionResponse } from "../types/prescription";


export async function uploadPrescription(file: File) {
  try {
    const formData = new FormData();
    formData.append("file", file);
    console.info("API is called...");

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };

    // Send the POST request using axios
    const response = await axios.post(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRESCRIPTION}`, formData, config);

    console.log("Response data:", response.data);
    return response.data as PrescriptionResponse;
  } catch (error) {
    console.error("Error uploading prescription:", error);
    throw error;
  }
}

// import { API_CONFIG } from './config';

// export async function uploadPrescription(file: File) {
//   try {
//     const formData = new FormData();
//     formData.append('file', file);

//     const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRESCRIPTION}`, {
//       body: formData,
//       ...API_CONFIG.REQUEST_OPTIONS

//     });
//     console.log('Response:', await response.text());

//     if (!response.ok) {
//       throw new Error('Upload failed');
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('Error uploading prescription:', error);
//     throw error;
//   }
// }
