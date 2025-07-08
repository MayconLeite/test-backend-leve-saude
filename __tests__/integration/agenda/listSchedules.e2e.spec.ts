import { handler } from '../../../src/agenda/controller/listSchedules'
import { container } from '../../../src/core/container'
import { TYPES } from '../../../src/core/types'
import { IScheduleService } from '../../../src/agenda/interface/IScheduleService'
import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda'

describe('listSchedules.handler', () => {
  beforeEach(() => {
    container.reset()
  })

  it('should return 200 with doctors list', async () => {
    const mockService: IScheduleService = {
      getAllSchedules: () => [
        {
          id: 1,
          name: 'Dr. Smith',
          specialty: 'Cardiology',
          availableSlots: ['09:00', '10:00'],
        },
      ],
    }

    container.registerInstance<IScheduleService>(TYPES.ScheduleService, mockService)

    const response = (await handler(
      {} as APIGatewayProxyEvent,
      {} as Context,
      () => {}
    )) as APIGatewayProxyResult

    expect(response.statusCode).toBe(200)
  })

  it('should return 400 if service throws error', async () => {
    const mockService: IScheduleService = {
      getAllSchedules: () => {
        throw new Error('Simulated error')
      },
    }

    container.registerInstance<IScheduleService>(TYPES.ScheduleService, mockService)

    const response = (await handler(
      {} as APIGatewayProxyEvent,
      {} as Context,
      () => {}
    )) as APIGatewayProxyResult

    expect(response.statusCode).toBe(400)
    expect(response.body).toContain('Failed to fetch schedules')
  })

  it('should return 400 when no doctors available', async () => {
    const mockService: IScheduleService = {
      getAllSchedules: () => [],
    }

    container.registerInstance<IScheduleService>(TYPES.ScheduleService, mockService)

    const response = (await handler(
      {} as APIGatewayProxyEvent,
      {} as Context,
      () => {}
    )) as APIGatewayProxyResult

    expect(response.statusCode).toBe(400)
  })
})
