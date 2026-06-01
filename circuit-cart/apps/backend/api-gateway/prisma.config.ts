import "dotenv/config";
import path from "node:path";
import { defineConfig, env } from "@prisma/config";
import { PrismaPg } from "@prisma/adapter-pg";

export default defineConfig({
  schema: path.join(import.meta.dirname, "prisma/schema.prisma"),
  migrations: {
    path: path.join(import.meta.dirname, "prisma/migrations"),
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
  client: {
    adapter: new PrismaPg(env("DATABASE_URL")),
  },
});