import { Client } from "../deps.ts";

const client = await new Client();

client.connect({
  hostname: "127.0.0.1",
  username: "root",
  password: "",
  db: "test",
});

export default client;