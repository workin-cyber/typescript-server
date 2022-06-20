import { Request, Response, Router } from "express";
import { get } from "../BL/postTasks";
import { PostInterface } from "../DL/models/postModel";

const router = Router()

router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const result: PostInterface[] | PostInterface = await get()
        res.send(result)
    } catch (error: any) {
        res.send(error.message || error);
    }
})

router.route("/:id")
    .get((req, res) => { })
    .post((req, res) => { })
    .delete((req, res) => { })
    .put((req, res) => { })

export default router

