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
  status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELED";
  date: string;
  doctorName: string;
  doctorImageUrl: string;
}
