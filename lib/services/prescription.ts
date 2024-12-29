import { MedicationDetail } from "@/lib/types/prescription";

export async function analyzePrescription(id: string) {
  try {
    const response = await fetch("https://13.61.27.26/get_patient_data/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Analysis failed");
    }
    return await response.json();
  } catch (error) {
    console.error("Error analyzing prescription:", error);
    throw error;
  }
}

export function transformMedicationData(medicationDetails: MedicationDetail[]) {
  if (!medicationDetails || !Array.isArray(medicationDetails)) {
    return [];
  }

  return medicationDetails.map((med, index) => ({
    id: index + 1,
    name: med.Name,
    dosage: {
      morning: med.Administration.Morning === "Yes",
      afternoon: med.Administration.Afternoon === "Yes",
      night: med.Administration.Dinner === "Yes",
    },
    duration: parseInt(med.Duration) || 7,
    beforeFood: med.Timing === "before food",
    afterFood: med.Timing === "after food",
    quantity: med["Size/Quantity"] !== "NA" ? med["Size/Quantity"] : "As needed",
    type: med["Type of Drug"],
  }));
}

// import { PrescriptionResponse } from "@/lib/types/prescription";

// // Mock data for testing
// const mockPrescriptionData: PrescriptionResponse = {
//   parsed_response: {
//     "Hospital Details": {
//       "Consultation Date": "02 Sep 2021",
//       "Doctor": "Dr. Kaksha Shah",
//       "Hospital Name": "NA"
//     },
//     "Medication Details": [
//       {
//         "Administration": {
//           "Afternoon": "No",
//           "Dinner": "Yes",
//           "Morning": "Yes"
//         },
//         "Dosage Frequency": "5-0-5 daily",
//         "Duration": "3 days",
//         "Name": "Combiflam Suspension",
//         "Size/Quantity": "5 ml",
//         "Timing": "after food",
//         "Type of Drug": "syrup"
//       },
//       {
//         "Administration": {
//           "Afternoon": "Yes",
//           "Dinner": "Yes",
//           "Morning": "Yes"
//         },
//         "Dosage Frequency": "1-1-1 daily",
//         "Duration": "7 days",
//         "Name": "Thrombophob Ointment",
//         "Size/Quantity": "NA",
//         "Timing": "at any time",
//         "Type of Drug": "oint"
//       }
//     ],
//     "Patient Details": {
//       "Age": "NA",
//       "Gender": "Male",
//       "Patient Name": "Nlhlta Korelapara"
//     }
//   },
//   s3_url: "https://medical-prescriptions-files.s3.eu-north-1.amazonaws.com/sample_1.jpeg",
//   status: "success",
//   store_status: {
//     message: "All good",
//     status: "Success"
//   }
// };

// export async function analyzePrescription(): Promise<PrescriptionResponse> {
//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   return mockPrescriptionData;
// }

// export function transformMedicationData(medicationDetails: MedicationDetail[]) {
//   return medicationDetails.map((med, index) => ({
//     id: index + 1,
//     name: med.Name,
//     dosage: {
//       morning: med.Administration.Morning === "Yes",
//       afternoon: med.Administration.Afternoon === "Yes",
//       night: med.Administration.Dinner === "Yes"
//     },
//     duration: parseInt(med.Duration) || 7,
//     beforeFood: med.Timing === "before food",
//     afterFood: med.Timing === "after food",
//     quantity: med["Size/Quantity"] !== "NA" ? med["Size/Quantity"] : "As needed",
//     type: med["Type of Drug"]
//   }));
// }
