import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { auth } from "./lib/auth.js";

const app = new Hono().basePath("/api");

const route = app
    .on(["POST", "GET"], "/auth/*", (c) => auth.handler(c.req.raw))
    .get("", (c) => {
        return c.text("Hello Hono, coming from node.js!");
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
