import { AlertCircleIcon, CheckCircle2Icon, TriangleAlert } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const MyAlert = ({ balance }) => {
  return (
    <section className="w-3xl mx-auto">
      <h1 className="text-3xl font-medium text-center mb-4">My Alert</h1>
      <Alert variant="success">
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>

      <Alert variant="default">
        <TriangleAlert />
        <AlertTitle>
          This Alert has a title and an icon. No description.
        </AlertTitle>
      </Alert>

      <Alert variant={balance <= 50 ? "destructive" : "default"}>
        <TriangleAlert />
        <AlertTitle>
          {balance <= 50 ? "Low on Balance" : "Sufficient Balance"}
          {/* This Alert has a title and an icon. No description. */}
        </AlertTitle>
      </Alert>

      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert>
    </section>
  )
}

export default MyAlert
