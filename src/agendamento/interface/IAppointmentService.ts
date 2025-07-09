export interface IAppointmentService {
  createAppointment(data: { doctorId: number; patientName: string; date: string; time: string }): {
    success: boolean
    message: string
  }
}
