import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const value = req.nextUrl.searchParams.get("value") || "";

  const result = await prisma.product.findMany({
    where: {
        name: {
            contains: value,
            mode: 'insensitive',
        },
    },
    take: 5,
  })

  return NextResponse.json(result);
}
