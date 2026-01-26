import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { authClient } from "../../lib/auth-client.ts";
export const Route = createFileRoute("/auth/sign-up")({
    component: RouteComponent,
});

function RouteComponent() {
    const router = useRouter();
    const { data: session } = authClient.useSession();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    if (session) {
        router.navigate({ to: "/" });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // We are handling the sign up ourselves
        setErrMsg(""); //
        if (password !== confirmPassword) {
            setErrMsg("Passwords do not match");
            return;
        }

        if (password.length < 8 || password.length > 128) {
            setErrMsg(
                `Password is expected to be between ${12} and ${128} characters `
            );
        }

        if (!firstName || !lastName) {
            setErrMsg("First Name and Last Name required");
            return;
        }

        let name = firstName + " " + lastName;

        try {
            authClient.signUp.email({
                name,
                email,
                password,
            });

            // When it is successful
            router.navigate({ to: "/" });
        } catch (err) {
            setErrMsg("Unexpected Error has occurred");
        }
    };

    return (
        <>
            <div>Hello "/auth/sign_up"!</div>
            {errMsg && (
                <div className={"text-red-500"} role={"alert"}>
                    {errMsg}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={"first_name"}>First Name:</label>
                    <input
                        type={"text"}
                        name={"first_name"}
                        id={"first_name"}
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="last_name">Last Name:</label>
                    <input
                        type={"text"}
                        name={"last_name"}
                        id={"last_name"}
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email_address">
                        Email Address:
                    </label>
                    <input
                        type="email"
                        name={"email_address"}
                        id={"email_address"}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name={"password"}
                        id={"password"}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        minLength={8}
                        maxLength={128}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password_confirm">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        name={"password_confirm"}
                        id={"password_confirm"}
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                        minLength={8}
                        maxLength={128}
                        required
                    />
                </div>
                <input type="submit" value="Sign Up" />
            </form>
        </>
    );
}
