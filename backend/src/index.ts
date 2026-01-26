import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { auth } from "./lib/auth.js";
import { cors } from "hono/cors";
import { db } from "./db/db.js";

const app = new Hono().basePath("/api");

const CLIENT_URL = process.env.CLIENT_URL!;

app.use(
    "*",
    cors({
        origin: CLIENT_URL,
        allowHeaders: [
            "Content-Type",
            "Authorization",
            "X-Custom-Header",
            "Upgrade-Insecure-Requests",
        ],
        allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
        maxAge: 600,
        credentials: true,
    })
);

const route = app
    .on(["POST", "GET"], "/auth/*", (c) => auth.handler(c.req.raw))
    .get("/", (c) => {
        return c.text("Hello Hono, coming from node.js!");
    })
    .get("/users", async (c) => {
        const users = await db.query.user.findMany(); // getting all the users
        return c.json(users);
    });
const server = serve(
    {
        fetch: app.fetch,
        port: 3000,
    },
    (info) => {
        console.log(
            `Server is running on http://localhost:${info.port}`
        );
    }
);

// graceful shutdown
process.on("SIGINT", () => {
    server.close();
    process.exit(0);
});
process.on("SIGTERM", () => {
    server.close((err: any) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        process.exit(0);
    });
});

// For now we are only exporting one type of route
// In the future, when we have multiple routes for and models
// we are going to have to find a way to export multiple routes
export type AppType = typeof route;
export default app;
