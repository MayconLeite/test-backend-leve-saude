import { Doctor } from '../interface/Doctor'

export class ScheduleResponseDTO {
  doctors: Doctor[]

  constructor(doctors: Doctor[]) {
    this.doctors = doctors
  }
}
