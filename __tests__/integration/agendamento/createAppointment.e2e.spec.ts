import { handler } from '../../../src/agendamento/controller/createAppointment'
import { container } from '../../../src/core/container'
import { TYPES } from '../../../src/core/types'
import { IAppointmentService } from '../../../src/agendamento/interface/IAppointmentService'
import { APIGatewayProxyEvent, Context } from 'aws-lambda'

describe('createAppointment.handler - E2E', () => {
  beforeEach(() => {
    container.reset()
  })

  it('should return 200 when appointment is created', async () => {
    const mockService: IAppointmentService = {
      createAppointment: jest.fn().mockReturnValue({
        success: true,
        message: 'Appointment created',
      }),
    }

    container.registerInstance<IAppointmentService>(TYPES.AppointmentService, mockService)

    const event = {
      body: JSON.stringify({
        agendamento: {
          medico: 'Dr. João Silva',
          paciente: 'Carlos Almeida',
          data_horario: '2024-10-05 09:00',
        },
      }),
    } as APIGatewayProxyEvent

    const response = await handler(event, {} as Context)

    expect(response.statusCode).toBe(200)
    const body = JSON.parse(response.body)
    expect(body.mensagem).toBe('Appointment successfully created')
    expect(body.agendamento.medico).toBe('Dr. João Silva')
    expect(body.agendamento.paciente).toBe('Carlos Almeida')
    expect(body.agendamento.data_horario).toBe('2024-10-05 09:00')
  })

  it('should return 400 when request body is missing', async () => {
    const event = { body: null } as APIGatewayProxyEvent
    const response = await handler(event, {} as Context)
    expect(response.statusCode).toBe(400)
  })

  it('should return 400 when validation fails', async () => {
    const event = {
      body: JSON.stringify({
        agendamento: {
          medico: '',
          paciente: '',
          data_horario: 'invalid-format',
        },
      }),
    } as APIGatewayProxyEvent

    const response = await handler(event, {} as Context)
    expect(response.statusCode).toBe(400)
    expect(response.body).toContain('Validation failed')
  })

  it('should return 400 if validation fails', async () => {
    const invalidBody = { agendamento: { medico: '', paciente: '', data_horario: 'bad' } }
    const event = {
      body: JSON.stringify(invalidBody),
    } as APIGatewayProxyEvent

    const context = {} as Context

    const response = await handler(event, context)
    expect(response.statusCode).toBe(400)
  })
})
