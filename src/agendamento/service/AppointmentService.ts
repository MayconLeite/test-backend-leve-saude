import { injectable } from 'tsyringe'
import { IAppointmentService } from '../interface/IAppointmentService'

@injectable()
export class AppointmentService implements IAppointmentService {
  createAppointment(data: { doctorId: number; patientName: string; date: string; time: string }): {
    success: boolean
    message: string
  } {
    console.log('Appointment created:', data)

    return {
      success: true,
      message: `Appointment created for ${data.patientName} with doctor ID ${data.doctorId} on ${data.date} at ${data.time}`,
    }
  }
}
