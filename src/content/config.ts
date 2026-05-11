import { defineCollection, z } from "astro:content";

const daily = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
  }),
});

const weekly = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
  }),
});

const en = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
  }),
});

const topics = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    type: z.string(),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
  }),
});

const tools = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
    last_updated: z.string(),
    auto_updated: z.boolean().default(true),
  }),
});

const models = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
    data_source: z.string(),
    benchmarks: z.array(z.string()).optional(),
    last_updated: z.string(),
    auto_updated: z.boolean().default(true),
  }),
});

export const collections = { daily, weekly, en, topics, tools, models };
