"use client"

import { Button } from "@/components/ui/button"
import { Loader } from "@/src/components/global/loader"
import { useStripeConnect } from "@/src/hooks/payment"

type StripeConnectProps = {
  connected: boolean
  groupid: string
}

export const StripeConnect = ({ connected, groupid }: StripeConnectProps) => {
  const { onStripeConnect, onStripeAccountPending } = useStripeConnect(groupid)
  return (
    <Button disabled={connected} onClick={onStripeConnect}>
      <Loader loading={onStripeAccountPending}>
        {connected ? "Connected" : "Connect to stripe"}
      </Loader>
    </Button>
  )
}