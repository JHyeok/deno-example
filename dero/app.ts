// deno run --allow-net --allow-write --allow-read --allow-plugin app.ts
import { Dero, json, urlencoded } from "./deps.ts";
import UserController from "./user/user.controller.ts";
import client from "./client.ts";

class App extends Dero {
  constructor() {
    super();
    this.use(json, urlencoded);
    this.use({ prefix: "/api/v1", class: [UserController] });
  }

  public async start(port: number) {
    await this.listen(port, async (err) => {
        if (err) {
          console.log(err);
          await client.close();
        }
        console.log(`server has started on http://localhost:${port} 🚀🚀🚀`);
    })
  }
}

await new App().start(3000);