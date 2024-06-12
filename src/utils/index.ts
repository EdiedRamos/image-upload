import { NextResponse } from "next/server";

export const CustomResponse = {
  success: (body: Record<string, any>) => NextResponse.json(body),
  badRequest: (body: Record<string, any>) =>
    NextResponse.json(body, { status: 400 }),
  notFound: (body: Record<string, any>) =>
    NextResponse.json(body, { status: 404 }),
  noResponse: (body: Record<string, any>) =>
    NextResponse.json(body, { status: 444 }),
};
