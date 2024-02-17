import { type NextMiddlewareResult } from "next/dist/server/web/types";
import {
  type NextFetchEvent,
  type NextRequest,
  type NextResponse,
} from "next/server";

export type CustomMiddleware = (
  req: NextRequest,
  event: NextFetchEvent,
  res: NextResponse
) => NextMiddlewareResult | Promise<NextMiddlewareResult>;

type MiddlewareFactory = (middleware: CustomMiddleware) => CustomMiddleware;

export const chain = (
  functions: MiddlewareFactory[],
  index = 0
): CustomMiddleware => {
  const current = functions[index];

  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }

  return (req: NextRequest, event: NextFetchEvent, res: NextResponse) => {
    return res;
  };
};
