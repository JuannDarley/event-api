import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  STRING_CONECTION: z.string().url(),
})

export const env = envSchema.parse(process.env)