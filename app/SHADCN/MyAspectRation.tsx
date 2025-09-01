import React from "react"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const MyAspectRation = () => {
  return (
    <section className="w-3xl mx-auto flex items-center justify-center">
      <div className="h-[300px]">
        <AspectRatio ratio={3 / 2}>
          <Image
            src="https://images.pexels.com/photos/33522451/pexels-photo-33522451.jpeg"
            alt="Image"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </section>
  )
}

export default MyAspectRation
