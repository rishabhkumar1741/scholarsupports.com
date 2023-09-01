"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { any } from "zod";
export default function VerifyToken() {
  const [token, settoken] = useState("");
  const [verfied, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      const res = await axios.post("/api/users/verifyemail", { token });
      console.log(res);

      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    settoken(urlToken|| "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);
  return <div className="">
    <h1>Verify Email</h1>
    <h2>{token?`${token}`:"no token"}</h2>
    {verfied && (<div><h2>Veried</h2> <Link href={`/login`}>Login</Link> </div>)}
    {error && (<div><h2>Erroe</h2> </div>)}
  </div>
}
