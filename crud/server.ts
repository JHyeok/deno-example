// deno run --allow-net --allow-write --allow-read --allow-plugin --unstable ./crud/server.ts
import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const app = new Application();
const port = 3000;

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port });
console.log(`server has started on http://localhost:${port} 🚀🚀🚀`);