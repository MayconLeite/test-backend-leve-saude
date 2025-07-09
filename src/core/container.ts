import { container } from 'tsyringe'
import { TYPES } from './types'
import { AppointmentService } from '../agendamento/service/AppointmentService'
import { ScheduleService } from '../agenda/service/ScheduleService'
import { IAppointmentService } from '../agendamento/interface/IAppointmentService'
import { IScheduleService } from '../agenda/interface/IScheduleService'

container.register<IAppointmentService>(TYPES.AppointmentService, {
  useClass: AppointmentService,
})

container.register<IScheduleService>(TYPES.ScheduleService, {
  useClass: ScheduleService,
})

export { container }
