import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const topUsers = await prisma.user.findMany({
    orderBy: { score: "desc" },
    take: 10
  });

  res.status(200).json(topUsers);
}