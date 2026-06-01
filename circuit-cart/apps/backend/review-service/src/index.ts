import { db } from "./lib/db.js";

async function main() {
  await db.$connect();
  console.log("✅ review-service connected to circuit_cart_reviews");
}

main()
  .catch((err) => {
    console.error("❌ Failed to connect:", err);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
