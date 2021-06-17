import { MongoClient } from "https://deno.land/x/mongo@v0.12.1/mod.ts";

const client = new MongoClient();
const uri = "mongodb://localhost:27017,localhost:27018/?readPreference=primary";

client.connectWithUri(uri);

const db = client.database("denoExample"); 

export default db;