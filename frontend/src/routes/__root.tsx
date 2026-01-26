import * as React from "react";
import {
    Outlet,
    createRootRoute,
    Link,
} from "@tanstack/react-router";
import { authClient } from "../lib/auth-client.ts";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    const { data: session } = authClient.useSession();

    return (
        <React.Fragment>
            <div className={"text-emerald-900 bg-emerald-200"}>
                <div>
                    This div is in the root so it will show up in
                    every page
                </div>
                <Link className={"underline"} to={"/"}>
                    {" "}
                    Home{" "}
                </Link>
                <Link className={"underline"} to={"/examples"}>
                    {" "}
                    Examples{" "}
                </Link>
                <Link className={"underline"} to={"/auth/sign-up"}>
                    {" "}
                    Sign Up{" "}
                </Link>
                <Link className={"underline"} to={"/all-users"}>
                    {" "}
                    Users (FOR DEV PURPOSES ONLY){" "}
                </Link>

                {session && (
                    <button
                        onClick={() => {
                            authClient.signOut();
                        }}
                    >
                        Sign Out
                    </button>
                )}
            </div>
            <Outlet />
        </React.Fragment>
    );
}
