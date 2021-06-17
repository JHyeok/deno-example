import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import db from '../mongodb.ts';

const articleCollection = db.collection('article');

const getAllArticles = async (ctx: RouterContext) => {
    const articles = await articleCollection.find();
    ctx.response.body = articles;
}

export {
  getAllArticles,
};