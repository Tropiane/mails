import { Router, Request, Response } from "express";

import MailController from "../controllers/mail.controller";
import { Mail } from "../interfaces/mail.interface";

const router = Router();
const controller = new MailController();

router.post("/", async (req: Request, res: Response) => {await controller.sendMail(req, res)});

export const mailRouter = router;