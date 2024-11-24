"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tag } from "lucide-react"
import { GlassModal } from "../../global/glass-modal"
import { FormGenerator } from "../../global/form-generator"
import { Loader } from "../../global/loader"
import { useGroupSubscription } from "@/src/hooks/payment"
import { SubscriptionCard } from "@/src/app/group/[groupid]/settings/subscriptions/_components/card"

type GroupSubscriptionFormProps = {
  groupid: string
}

export const GroupSubscriptionForm = ({
  groupid,
}: GroupSubscriptionFormProps) => {
  const { onCreateNewSubscription, register, errors, isPending, variables } =
    useGroupSubscription(groupid)
  return (
    <>
      <GlassModal
        trigger={
          <span>
            <Card className="flex rounded-xl text-themeGray gap-x-2 items-center cursor-pointer justify-center aspect-video border-dashed bg-themeBlack border-themeGray">
              <Tag />
              <p>Add a price</p>
            </Card>
          </span>
        }
        title="Create a subscription"
        description="Create a subscription plan for your grouple group"
      >
        <form
          onSubmit={onCreateNewSubscription}
          className="flex flex-col gap-y-3"
        >
          <FormGenerator
            register={register}
            errors={errors}
            name="price"
            inputType="input"
            type="text"
            placeholder="Add a price..."
          />
          <Button>
            <Loader loading={isPending}>Create</Loader>
          </Button>
        </form>
      </GlassModal>
      {isPending && variables && (
        <SubscriptionCard optimisitc price={`${variables.price}`} members="0" />
      )}
    </>
  )
}