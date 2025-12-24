import "./App.css";
import { useEffect, useState } from "react";
import type { AppType } from "../../backend/src";
import type { InferResponseType } from "hono/client";
import { hc } from "hono/client";

// Now we can use our api using the client interface instead of a fetch
// This method allows the code to know the structure of the data we are using
const client = hc<AppType>("/");

function App() {
    const [welcomeMessage, setWelcomeMessage] =
        useState<InferResponseType<typeof client.api.$get>>();

    useEffect(() => {
        const fetchWelcomeMessage = async () => {
            const resp = await client.api.$get();
            const data = await resp.text();
            setWelcomeMessage(data);
        };

        fetchWelcomeMessage();
    }, []); // "[]" means the function runs once on the page initially being loaded

    return (
        <>
            <div>Hello World!</div>
            <div
                className={"bg-blue-100 p-1.5 rounded-md text-black"}
            >
                Welcome Message From Backend: {welcomeMessage}
            </div>
        </>
    );
}

export default App;
