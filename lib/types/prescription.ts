export interface PrescriptionResponse {
  parsed_response: {
    "Hospital Details": HospitalDetails;
    "Medication Details": MedicationDetail[];
    "Patient Details": PatientDetails;
  };
  s3_url: string;
  status: string;
  store_status: {
    patient_id: string;
    message: string;
    status: string;
  };
}

export interface HospitalDetails {
  "Consultation Date": string;
  "Doctor": string;
  "Hospital Name": string;
}

export interface PatientDetails {
  "Age": string;
  "Gender": string;
  "Patient Name": string;
}

export interface MedicationDetail {
  Administration: {
    Afternoon: string;
    Dinner: string;
    Morning: string;
  };
  "Dosage Frequency": string;
  Duration: string;
  Name: string;
  "Size/Quantity": string;
  Timing: string;
  "Type of Drug": string;
}


