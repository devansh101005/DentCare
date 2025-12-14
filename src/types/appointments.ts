export interface UserAppointment {
  id: string;
  date: string;      // formatted "YYYY-MM-DD"
  time: string;
  status: string;
  reason: string | null;

  patientName: string;
  patientEmail: string;

  doctorName: string;
  doctorImageUrl: string;
}
