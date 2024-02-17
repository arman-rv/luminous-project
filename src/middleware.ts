import { chain, withAuthNMiddleware, withI18NMiddleware } from "@/middlewares";

export default chain([withAuthNMiddleware, withI18NMiddleware]);

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|images|fonts|favicon).*)"],
};
