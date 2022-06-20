import { Request, Response, Router } from "express";

const router = Router()

router.get("/", (req: Request, res: Response): void => {
    res.send("success")
})

export default router

