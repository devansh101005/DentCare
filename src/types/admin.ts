export interface AdminDoctor {
  id: string;
  name: string;
  speciality: string;
  isActive: boolean;
  doctorImageUrl?: string;
  createdAt: string;
}

export interface AdminAppointment {
  id: string;
  doctorId: string;
  userId: string;

  doctorName: string;
  doctorImageUrl: string;

  date: string;
  time: string;  
  reason: string; 

  patientName: string;  
  patientEmail: string;    

  status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELED";
}


export interface AvailableDoctor {
  id: string;
  name: string;
  speciality: string;
  imageUrl?: string;
  appointmentCount: number;  
  phone: string;        
  bio?: string; 
}


