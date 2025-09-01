"use client"

import { useSearchParams } from "next/navigation"
import MyAccordion from "./SHADCN/MyAccordion"
import MyAlert from "./SHADCN/MyAlert"
import MyAlertDialog from "./SHADCN/MyAlertDialog"
import MyAspectRation from "./SHADCN/MyAspectRation"

export default function Home() {
  const params = useSearchParams()

  const Balance = Number(params.get("balance"))

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-center my-10">My App</h1>

      <MyAccordion />
      <MyAlert balance={Balance} />
      <MyAlertDialog
        trigger="Show Accordion?"
        variant="outline"
        title="Are you sure you want to continue?"
        content={<MyAccordion />}
      />
      <div className="h-10"></div>
      <MyAlertDialog
        trigger="Logout"
        variant="destructive"
        title="Are you sure you want to Log Out?"
        content="This action will log you out of your account!"
      />

      <MyAspectRation />
    </div>
  )
}
