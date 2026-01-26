import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import type { AppType } from "../../../backend/src";
import { hc } from "hono/client";

export const Route = createFileRoute("/all-users")({
    component: RouteComponent,
});

const client = hc<AppType>("/");

function RouteComponent() {
    const { data } = useQuery({
        queryKey: ["all-users"],
        queryFn: async () => {
            const resp = await client.api.users.$get();
            if (!resp.ok)
                throw new Error("Was not able to get users");
            return resp.json();
        },
    });
    return (
        <>
            <h1>Users-THIS IS ONLY FOR DEVELOPMENT PURPOSES</h1>
            {data &&
                data.map((user) => {
                    return (
                        <div>
                            <div>Name: {user.name}</div>
                            <div>Email: {user.email}</div>
                        </div>
                    );
                })}
        </>
    );
}
