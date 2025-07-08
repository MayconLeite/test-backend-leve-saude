export interface IScheduleService {
  getAllSchedules(): {
    id: number
    name: string
    specialty: string
    availableSlots: string[]
  }[]
}
