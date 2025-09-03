import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const MyAvatar = () => {
  return (
    <section className="flex items-center justify-center">
      <Avatar>
        <AvatarImage src="https://images.pexels.com/photos/12666764/pexels-photo-12666764.png" />
        <AvatarFallback>R10</AvatarFallback>
      </Avatar>
    </section>
  )
}

export default MyAvatar
