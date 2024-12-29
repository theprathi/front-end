// // "use client";

// // import MainComp from "@/components/review/MainComp";

// // export async function generateStaticParams() {

// //   const posts = await fetch( "https://16.171.162.75"+ "/patients").then((res) => res.json())
// //   console.log({posts})

// //  const patient_ids = posts.patient_ids
// //   return patient_ids
// // }

// // export default function ReviewPage({ params }: { params: { id: string } }) {
// //   return <MainComp
// //     id={params.id}
// //   />
// // }


// "use client";

// import { useEffect, useState } from 'react';
// import MainComp from "@/components/review/MainComp";

// interface Patient {
//   id: string;
//   // Add other patient properties as needed
// }

// export default function ReviewPage({ params }: { params: { id: string } }) {
//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchPatients = async () => {
//       try {
//         const response = await fetch("https://16.171.162.75/patients");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setPatients(data.patient_ids);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Failed to fetch patients');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPatients();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return <MainComp id={params.id} />;
// }


// "use client";

import MainComp from "@/components/review/MainComp";

// This is required for static export
export async function generateStaticParams() {
  try {
    const response = await fetch("https://13.61.27.26/patients");
    const data = await response.json();
    
    // Return an array of objects with id parameter
    return data.patient_ids.map((id: string) => ({
      id: id,
    }));
  } catch (error) {
    console.error('Error fetching patient IDs:', error);
    return []; // Return empty array as fallback
  }
}

export default function ReviewPage({ params }: { params: { id: string } }) {
  return <MainComp id={params.id} />;
}