import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
})

export type Task = z.infer<typeof taskSchema>

export const riskSchema = z.object({
  id: z.string(),
  description: z.string(),
  update: z.string(),
  unit: z.string(),
  objectives: z.array(z.object({
    id: z.string(),
    description: z.string()
  })),
  risks: z.array(z.object({
    okr: z.string(),
    id: z.string(),
    title: z.string(),
    category: z.string(),
    description: z.string(),
    impact: z.number(),
    probability: z.number(),
    control: z.string(),
    after: z.object({
      impact: z.number(),
      probability: z.number()
    }),
    response: z.string(),
  }))
}) 

export type Risk = z.infer<typeof riskSchema>