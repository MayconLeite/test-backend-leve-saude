import { injectable } from 'tsyringe'
import { IScheduleService } from '../interface/IScheduleService'
import doctors from '../mocks/doctors.mock'

@injectable()
export class ScheduleService implements IScheduleService {
  getAllSchedules() {
    return doctors || []
  }
}
