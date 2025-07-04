import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { telegramId, name } = req.body;

  const user = await prisma.user.upsert({
    where: { telegramId },
    update: { score: { increment: 1 } },
    create: { telegramId, name, score: 1 }
  });

  res.status(200).json({ success: true });
}