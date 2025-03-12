import { z } from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  STRING_CONECTION: z.string(),
})

export const env = envSchema.parse(process.env)