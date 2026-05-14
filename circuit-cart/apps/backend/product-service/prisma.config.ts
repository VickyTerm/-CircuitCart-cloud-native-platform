// apps/backend/product-service/prisma.config.ts
// Prisma 6.19 — MongoDB
// MongoDB connects directly — NO driver adapter needed.
// "engine: classic" is required when datasource is defined here (not in schema.prisma).

import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  engine: "classic",
  datasource: {
    url: env("MONGODB_URL"),
  },
});