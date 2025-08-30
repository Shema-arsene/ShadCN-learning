import React from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const MyAlertDialog = ({
  variant,
  trigger,
  title,
  content,
}: {
  trigger: string
  variant: any
  title: string
  content: React.ReactNode
}) => {
  return (
    <section className="w-3xl mx-auto">
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-3xl font-medium text-center mb-4">Alert-Dialog</h1>

        <AlertDialog>
          <Button variant={variant} className="cursor-pointer">
            <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
          </Button>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{title}</AlertDialogTitle>
              <AlertDialogDescription>{content}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="cursor-pointer">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction className="cursor-pointer">
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  )
}

export default MyAlertDialog
