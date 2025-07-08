import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import 'reflect-metadata'
import { container } from '../../core/container'
import { TYPES } from '../../core/types'
import { IScheduleService } from '../interface/IScheduleService'
import { success, badRequest } from '../../utils/httpResponse'

export const handler: APIGatewayProxyHandler = async (
  _event,
  _context
): Promise<APIGatewayProxyResult> => {
  try {
    const scheduleService = container.resolve<IScheduleService>(TYPES.ScheduleService)
    const doctors = scheduleService.getAllSchedules()
    if (!doctors || doctors.length === 0) {
      return badRequest('No doctors available')
    }

    return success({ doctors })
  } catch (error) {
    console.error('Handler error:', error)
    return badRequest('Failed to fetch schedules')
  }
}
