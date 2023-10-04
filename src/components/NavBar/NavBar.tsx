"use client";

import Link from "next/link";
import { Button } from "../Button/Button";

export const NavBar = () => {
  const abas = ["home", "dashboard"];

  return (
    <div className="flex flex-row gap-3">
      <Link className="bg-red-500" href="/dashboard">
        Dashboard
      </Link>

      <Link className="bg-red-500" href="/home">
        Home
      </Link>
    </div>
  );
};
