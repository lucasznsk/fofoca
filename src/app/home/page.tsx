"use client";
import useSWR from "swr";

export default function Page() {
  const { data } = useSWR("/api/test", () =>
    fetch("https://localhost:3000/api/test").then((r) => r.json())
  );

  return <h1>{data}</h1>;
}
