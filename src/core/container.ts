import 'reflect-metadata'
import { container } from 'tsyringe'
import { ScheduleService } from '../agenda/service/ScheduleService'
import { TYPES } from './types'

container.register(TYPES.ScheduleService, { useClass: ScheduleService })

export { container }
