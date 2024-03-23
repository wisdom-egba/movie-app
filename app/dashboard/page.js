"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [fullname, setFullname] = useState("");

  useEffect(() => {
    const user_fullname = localStorage.getItem("fullname");
    setFullname(user_fullname);
  }, []);

  return (
    <main>
      <h1>
        <span className="welcome">Welcome</span> back, {fullname}!
      </h1>
    </main>
  );
}
