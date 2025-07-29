import { db } from "@/db";
import { sportsTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const sportInsertSchema = z.object({
  title: z.string().min(5, "Minimal length is 5"),
  image: z.url({ message: "Invalid image URL" }),
  description: z.string().max(255, "Description should be less then 255"),
});

export async function GET() {
  const sports = await db.select().from(sportsTable);
  return NextResponse.json(sports);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, image, description } = sportInsertSchema.parse(body);
    const [sport] = await db
      .insert(sportsTable)
      .values({ title, image, description })
      .returning();
    return NextResponse.json(sport, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error", details: error },
      { status: 500 }
    );
  }
}
