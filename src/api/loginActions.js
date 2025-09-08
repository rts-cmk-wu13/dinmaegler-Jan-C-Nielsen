import { z } from "zod/v4";
import { redirect } from "react-router";

import { useContext } from "react";

const contactSchema = z.object({
    identifier: z.email(),
    password: z.string().min(6, "Minimum of 6 characters required"),
})

export const handleLogin = async ({ request }) => {

    console.log("handleLogin called");
    console.log("request", request);

    const formData = await request.formData()
    const data = Object.fromEntries(formData.entries())

    const result = contactSchema.safeParse(data)
    if (!result.success) {
        const errors = z.treeifyError(result.error)
        return errors.properties
    }

    console.log("Parsed data:", result.data);
    const response = await fetch("https://dinmaegler.onrender.com/auth/local", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(result.data)
    })

    console.log("Response status:", response.status);

    if (!response.ok) {
        console.error("Login failed:", response.statusText);
        throw new Error("Could not save data")
    }

    const responseData = await response.json();
    console.log("ResponseData:", responseData);

    sessionStorage.setItem("token", responseData.jwt);
    sessionStorage.setItem("userid", responseData.user.id);

    const user = responseData.user.id
    const token = responseData.jwt
    const responseUser = await fetch("https://dinmaegler.onrender.com/users/" + user, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + token,
        },
    })

    const userData = await responseUser.json();
    console.log("UserData:", userData);

    return redirect("/")
}