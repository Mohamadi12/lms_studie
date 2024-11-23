"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { DropDown } from "../drop-down"
import { superbaseClient } from "@/src/lib/utils"
import { AppDispatch } from "@/src/redux/store"
import { onOffline } from "@/src/redux/slices/online-member-slice"
import { Logout, Settings } from "@/src/icons"
import { useClerk } from "@clerk/nextjs"

type UserWidgetProps = {
  image: string
  groupid?: string
  userid?: string
}

export const UserAvatar = ({ image, groupid, userid }: UserWidgetProps) => {
  const { signOut } = useClerk()

  const untrackPresence = async () => {
    await superbaseClient.channel("tracking").untrack()
  }

  const dispatch: AppDispatch = useDispatch()

  const onLogout = async () => {
    untrackPresence()
    dispatch(onOffline({ members: [{ id: userid! }] }))
    signOut({ redirectUrl: "/" })
  }

  return (
    <DropDown
      title="Account"
      trigger={
        <Avatar className="cursor-pointer">
          <AvatarImage src={image} alt="user" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      }
    >
      <Link href={`/group/${groupid}/settings`} className="flex gap-x-2 px-2">
        <Settings /> Settings
      </Link>
      <Button
        onClick={onLogout}
        variant="ghost"
        className="flex gap-x-3 px-2 justify-start w-full"
      >
        <Logout />
        Logout
      </Button>
    </DropDown>
  )
}