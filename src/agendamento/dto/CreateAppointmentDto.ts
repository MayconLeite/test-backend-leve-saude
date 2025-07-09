import { IsNotEmpty, IsString, Matches } from 'class-validator'

export class CreateAppointmentDto {
  @IsNotEmpty()
  @IsString()
  medico!: string

  @IsNotEmpty()
  @IsString()
  paciente!: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/, {
    message: 'data_horario must be in "YYYY-MM-DD HH:mm" format',
  })
  data_horario!: string
}
