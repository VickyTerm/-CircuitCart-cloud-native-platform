import "dotenv/config";
import { PrismaClient } from "../generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.$connect();
  console.log("✅ payment-service connected to circuit_cart_payments");
}

main()
  .catch((err) => {
    console.error("❌ Failed to connect:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
