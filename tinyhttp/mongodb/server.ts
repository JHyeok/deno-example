// deno run --unstable --allow-env --allow-read --allow-net server.ts
import { App } from "https://deno.land/x/tinyhttp/app.ts";
import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.25.0/mod.ts";
import { json } from "https://deno.land/x/parsec/mod.ts";

const app = new App();
const port = 3000;

const client = new MongoClient();

await client.connect("mongodb://127.0.0.1:27017");

interface TodoSchema {
  _id: { $oid: string };
  title: string;
  desc: string;
}

const db = client.database("tinyhttp");
const todo = db.collection<TodoSchema>("todo");

/**
 * 투두 리스트에서 할 일 조회
 */
app.get("/todos", async (_, res, next) => {
  try {
    const todos = await todo.find({}).toArray();
    console.log(todos);

    res.json(todos);
    next();
  } catch (err) {
    next(err);
  }
});

/**
 * 투두리스트에서 할 일 생성
 */
app.use(json).post("/todos", async (req, res, next) => {
  try {
    const { title, desc } = req.parsedBody!;
    const insertId = await todo.insertOne({ title, desc });

    res.json({
      id: insertId,
      title,
      desc,
    });
  } catch (err) {
    next(err);
  }
});

/**
 * 투두리스트에서 할 일 삭제
 */
app.delete("/todos/:todoId", async (req, res, next) => {
  try {
    const id = req.params.todoId;
    await todo.deleteOne({ _id: new Bson.ObjectId(id) });

    res.json({
      id,
    });
  } catch (err) {
    next(err);
  }
});

/**
 * 투두리스트에서 할 일 수정
 */
app.use(json).put("/todos/:todoId", async (req, res, next) => {
  try {
    const id = req.params.todoId;
    const { title, desc } = req.parsedBody!;
    await todo.updateOne({ _id: new Bson.ObjectId(id) }, {
      $set: { title, desc },
    });

    res.json({
      id,
      title,
      desc,
    });
  } catch (err) {
    next(err);
  }
});

app.listen(port, () => console.log(`Started on http://localhost:${port}`));
