import * as React from "react";
import {
    Outlet,
    createRootRoute,
    Link,
} from "@tanstack/react-router";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
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
            </div>
            <Outlet />
        </React.Fragment>
    );
}
