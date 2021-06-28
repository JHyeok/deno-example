// deno run --allow-net --allow-read example/hello_world.ts
// https://github.com/asos-craigmorten/opine
import { opine } from "https://deno.land/x/opine@1.4.0/mod.ts";

const app = opine();

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.listen(
  3000,
  () => console.log("server has started on http://localhost:3000 🚀"),
);
