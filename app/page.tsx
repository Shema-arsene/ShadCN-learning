"use client"

import { useSearchParams } from "next/navigation"
import MyAccordion from "./SHADCN/MyAccordion"
import MyAlert from "./SHADCN/MyAlert"

export default function Home() {
  const params = useSearchParams()

  // alert(params.get("balance"))

  const Balance = params.get("balance")

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">My App</h1>

      <MyAccordion />
      <MyAlert balance={Balance} />
    </div>
  )
}
