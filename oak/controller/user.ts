import { RouterContext, Status } from "../deps.ts";
import client from "../db/mysql.ts";

const getAllUsers = async (ctx: RouterContext) => {
  const users = (await client.execute("SELECT * FROM user")).rows;

  ctx.response.status = Status.OK;
  ctx.response.type = "json";
  ctx.response.body = {
    status: "success",
    message: "유저 조회를 완료하였습니다.",
    data: { users },
  };
};

export { getAllUsers };
