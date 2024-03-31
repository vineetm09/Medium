import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, jwt, sign, verify } from "hono/jwt";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.use(cors());

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk4ZmY3OGM2LWViMWItNDcwYi05YTEzLTBiYWIyMDNkOGQ4MSJ9.5NSW4zLQ-Udd8FcT5-05M_wGZjKKN2yDMUXNKI0SE6Q
