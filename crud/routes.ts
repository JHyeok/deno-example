import { Router } from "https://deno.land/x/oak/mod.ts";
import { getAllArticles } from './controllers/article.ts'

const router = new Router();

router.get('/articles', getAllArticles)

export default router;