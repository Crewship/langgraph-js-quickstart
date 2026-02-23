import "dotenv/config";
import { graph } from "./graph.js";

async function run() {
  const result = await graph.invoke({ topic: "AI agents in production" });
  console.log(result.report);
}

run();
