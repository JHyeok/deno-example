import {
  Controller,
  Get,
  HttpRequest,
  Post,
  Put,
  ReqWithBody,
  Status,
  Wares,
} from "../deps.ts";
import client from "../client.ts";
import validator from "./user.validate.ts";

@Controller("/users")
class UserController {
  @Get()
  async findAll() {
    const sql = `select * from user`;
    const { rows } = await client.execute(sql);

    return {
      statusCode: 200,
      data: rows,
    };
  }

  @Get("/:id")
  async findById(req: HttpRequest) {
    const sql = `select * from user where id = ?`;
    const { rows } = await client.execute(sql, [req.params.id]);
    const data = rows && rows.length ? rows[0] : null;

    return {
      statusCode: 200,
      data,
    };
  }

  @Status(201)
  @Wares(validator)
  @Post()
  async create(req: HttpRequest & ReqWithBody) {
    const body = req.parsedBody || {};
    const sql =
      `insert into user(firstName, lastName, isActive) values(?, ?, ?)`;

    await client.execute(sql, [
      body.firstName,
      body.lastName,
      body.isActive,
    ]);

    return {
      statusCode: 201,
      messsage: "유저를 생성하였습니다.",
    };
  }

  @Wares(validator)
  @Put("/:id")
  async update(req: HttpRequest & ReqWithBody) {
    const body = req.parsedBody || {};
    const sql =
      `update user set firstName = ?, lastName = ?, isActive = ? where id = ?`;

    await client.execute(sql, [
      body.firstName,
      body.lastName,
      body.isActive,
      req.params.id,
    ]);

    return {
      statusCode: 200,
      messsage: "유저 정보를 수정하였습니다.",
    };
  }
}

export default UserController;
