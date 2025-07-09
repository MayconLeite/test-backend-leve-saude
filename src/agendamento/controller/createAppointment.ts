import 'reflect-metadata'
import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda'
import { container } from '../../core/container'
import { TYPES } from '../../core/types'
import { IAppointmentService } from '../interface/IAppointmentService'
import { badRequest, success } from '../../utils/httpResponse'
import { validateDto } from '../../utils/validation'
import { CreateAppointmentDto } from '../dto/CreateAppointmentDto'

export async function handler(
  event: APIGatewayProxyEvent,
  _context: Context
): Promise<APIGatewayProxyResult> {
  try {
    if (!event.body) {
      return badRequest('Missing request body')
    }

    const input = JSON.parse(event.body)

    const dto = Object.assign(new CreateAppointmentDto(), input.agendamento)

    const validationErrors = await validateDto(dto)
    if (validationErrors.length > 0) {
      return badRequest(`Validation failed: ${validationErrors.join(', ')}`)
    }

    const [date, time] = dto.data_horario.split(' ')

    const appointmentService = container.resolve<IAppointmentService>(TYPES.AppointmentService)

    const savedAppointment = appointmentService.createAppointment({
      doctorId: dto.medico,
      patientName: dto.paciente,
      date,
      time,
    })

    console.log(savedAppointment)

    return success({
      mensagem: 'Appointment successfully created',
      agendamento: dto,
    })
  } catch (error) {
    console.error('Handler error:', error)
    return badRequest('Failed to create appointment')
  }
}
