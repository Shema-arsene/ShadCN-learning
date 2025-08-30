import Image from "next/image"
import MyAccordion from "./SHADCN/MyAccordion"
import MyAlert from "./SHADCN/MyAlert"

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">My App</h1>

      <MyAccordion />
      <MyAlert />
    </div>
  )
}
