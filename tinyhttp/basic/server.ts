import { App } from "https://deno.land/x/tinyhttp/app.ts";

const app = new App();

app.get("/:name", (req, res) => {
  res.send(
    `Hello, ${req.params.name} - Deno v${Deno.version.deno} and tinyhttp!`,
  );
});

app.listen(3000, () => console.log(`Started on :3000`));
