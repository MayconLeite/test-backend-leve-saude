import { validate } from 'class-validator'

export async function validateDto(dto: object): Promise<string[]> {
  const errors = await validate(dto)
  return errors.flatMap((e) => Object.values(e.constraints ?? {}))
}
