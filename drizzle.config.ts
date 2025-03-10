import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv"

dotenv.config({ path: ".env" });

export default {
  dialect: "postgresql",
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle", // Adjust this output directory

  dbCredentials: {
    url : process.env.DATABASE_URL!,
  },
} satisfies Config;

// npx drizzle-kit push:pg

