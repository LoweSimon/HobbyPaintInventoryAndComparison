import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const token = cookies.get("TOKEN");

export default function ProfilePage() {

    
    const [message, setMessage] = useState("");

    useEffect(() => {
        const configuration = {
            method: "get",
            url: "http://localhost:5000/auth-endpoint",
            header: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios(configuration)
            .then((result) => {
                setMessage(result.data.message);
            })
            .catch((error) => {
                error = new Error();
            });
    }, []);

    const logout = () => {
        cookies.remove("TOKEN", { path: "/" });
        window.location.href = "/";
    }

    return (
        <div className="text-center">
            <h1>Your Profile</h1>
            <h3 className="text-danger">{message}</h3>
            <Button type="submit" variant="danger" onClick={() => logout()}>Logout</Button>
        </div>
    )
}