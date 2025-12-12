import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL!,             // <-- correct
    shadowDatabaseUrl: process.env.SHADOW_DB_URL, // optional
  },
});
