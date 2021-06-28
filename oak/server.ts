// deno run --allow-net --allow-write --allow-read --allow-plugin server.ts
import { Application } from "./deps.ts";
import router from "./routes.ts";

const app = new Application();
const port = 3000;

app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx) => {
  ctx.response.body = "Hello Deno!";
});

await app.listen({ port });
console.log(`server has started on http://localhost:${port} 🚀🚀🚀`);
