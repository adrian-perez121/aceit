import { createFileRoute } from "@tanstack/react-router";
import { hc } from "hono/client";
import type { AppType } from "../../../backend/src";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/")({
    component: RouteComponent,
});

const client = hc<AppType>("/");

function RouteComponent() {
    const { data } = useQuery({
        queryKey: ["test"], // This is used for caching purposes
        // What gets run when the query happens
        queryFn: async () => {
            const resp = await client.api.$get();
            if (!resp.ok) throw new Error("failed to query the root");
            console.log("this runs");
            return resp.text();
        },
    });

    return (
        <>
            <div>This is the homepage</div>
            <div>Hello "/"!</div>
            <div>Response from server: {data}</div>
        </>
    );
}
