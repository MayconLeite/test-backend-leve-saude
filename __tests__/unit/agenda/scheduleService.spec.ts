import 'reflect-metadata'
import { ScheduleService } from '../../../src/agenda/service/ScheduleService'

describe('ScheduleService Unit Tests', () => {
  let service: ScheduleService

  beforeEach(() => {
    service = new ScheduleService()
  })

  it('should return a list of doctors', () => {
    const doctors = service.getAllSchedules()
    expect(Array.isArray(doctors)).toBe(true)
    expect(doctors.length).toBeGreaterThan(0)
    expect(doctors[0]).toHaveProperty('id')
    expect(doctors[0]).toHaveProperty('name')
    expect(doctors[0]).toHaveProperty('specialty')
    expect(doctors[0]).toHaveProperty('availableSlots')
  })
})
