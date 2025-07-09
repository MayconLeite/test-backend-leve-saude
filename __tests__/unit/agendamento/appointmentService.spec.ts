import 'reflect-metadata'
import { AppointmentService } from '../../../src/agendamento/service/AppointmentService'

describe('AppointmentService', () => {
  let service: AppointmentService

  beforeEach(() => {
    service = new AppointmentService()
  })

  it('should create an appointment successfully', () => {
    const input = {
      doctorId: 1,
      patientName: 'Carlos Almeida',
      date: '2024-10-05',
      time: '09:00',
    }

    const result = service.createAppointment(input)

    expect(result.success).toBe(true)
    expect(result.message).toContain('Appointment created')
  })
})
