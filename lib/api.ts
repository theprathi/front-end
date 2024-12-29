// API utility functions
export async function uploadPrescription(file: File) {
  try {
    const formData = new FormData();
    formData.append("prescription", file);

    const response = await fetch("https://13.61.27.26/prescription", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
      mode: "cors",
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Upload failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Error uploading prescription:", error);
    throw error;
  }
}

// export async function analyzePrescription(id: string) {
//   try {
//     const response = await fetch("https://16.171.162.75/get_patient_data/" + id, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => ({}));
//       throw new Error(errorData.message || "Analysis failed");
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error analyzing prescription:", error);
//     throw error;
//   }
// }



export async function analyzePrescription(id: string) {
  try {
    const response = await fetch(`https://13.61.27.26/get_patient_data/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    // First check if the response is ok
    if (!response.ok) {
      // Try to get error message from response
      const errorData = await response.json().catch(() => ({
        message: `HTTP error! status: ${response.status}`
      }));
      throw new Error(errorData.message || `Failed to fetch data: ${response.status}`);
    }

    // Parse the response
    const data = await response.json();

    // Validate the response structure
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid response format');
    }

    // Return the parsed data
    return data;

  } catch (error) {
    console.error("Error analyzing prescription:", error);
    // Rethrow with a more specific message
    throw new Error(`Error analyzing prescription: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// // API utility functions
// export async function uploadPrescription(file: File) {
//   try {
//     const formData = new FormData();
//     formData.append('prescription', file);

//     const response = await fetch('http://13.60.181.15/prescription', {
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Accept': 'application/json',
//       },
//       mode: 'cors',
//     });

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => ({}));
//       throw new Error(errorData.message || 'Upload failed');
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('Error uploading prescription:', error);
//     throw error;
//   }
// }
