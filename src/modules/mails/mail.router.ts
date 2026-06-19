import { Router, Request, Response } from "express";

import MailController from "./mail.controller";
import { MailDTO } from "./mail.interface";

const router = Router();
const controller = new MailController();

router.post("/", async (req: Request, res: Response) => {await controller.sendMail(req, res)});
router.post("/change-status", async (req: Request, res: Response) => {await controller.sendMailChangeStatus(req, res)});

export const mailRouter = router;