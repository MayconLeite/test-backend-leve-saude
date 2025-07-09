import { CreateAppointmentDto } from '../../../src/agendamento/dto/CreateAppointmentDto'
import { validateDto } from '../../../src/utils/validation'

describe('CreateAppointmentDto Validation', () => {
  it('should validate successfully with correct data', async () => {
    const dto = new CreateAppointmentDto()
    dto.medico = 'Dr. João Silva'
    dto.paciente = 'Carlos Almeida'
    dto.data_horario = '2024-10-05 09:00'

    const errors = await validateDto(dto)

    expect(errors.length).toBe(0)
  })

  it('should fail validation with missing or invalid data', async () => {
    const dto = new CreateAppointmentDto()
    dto.medico = ''
    dto.paciente = ''
    dto.data_horario = 'invalid-date-format'

    const errors = await validateDto(dto)

    expect(errors.length).toBeGreaterThan(0)
    expect(errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining('medico should not be empty'),
        expect.stringContaining('paciente should not be empty'),
        expect.stringContaining('data_horario must be in "YYYY-MM-DD HH:mm" format'),
      ])
    )
  })
})
