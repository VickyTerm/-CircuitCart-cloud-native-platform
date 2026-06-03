import { db } from "./lib/db.js";

async function main() {
  await db.$connect();
  console.log("✅ analytics-service connected to circuit_cart_analytics");
}

main()
  .catch((err) => {
    console.error("❌ Failed to connect:", err);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
