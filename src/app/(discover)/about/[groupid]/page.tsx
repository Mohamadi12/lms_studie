import { onAuthenticatedUser } from '@/src/actions/auth'
import { onGetGroupInfo } from '@/src/actions/groups'
import { onGetActiveSubscription } from '@/src/actions/payments'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'
import AboutGroup from '../_components/about'

type Props = {
    params: {
        groupid: string
    }
}

const Page = async ({params}: Props) => {
    const query = new QueryClient()

    await query.prefetchQuery({
      queryKey: ["about-group-info"],
      queryFn: () => onGetGroupInfo(params.groupid),
    })
  
    await query.prefetchQuery({
      queryKey: ["active-subscription"],
      queryFn: () => onGetActiveSubscription(params.groupid),
    })
  
    const userid = await onAuthenticatedUser()

  return (
    <HydrationBoundary state={dehydrate(query)}>
    <div className="pt-36 pb-10 container grid grid-cols-1 lg:grid-cols-3 gap-x-10">
      <div className="col-span-1 lg:col-span-2">
        <AboutGroup userid={userid.id!} groupid={params.groupid} />
      </div>
      <div className="col-span-1 relative">
        <GroupSideWidget userid={userid.id} groupid={params.groupid} />
      </div>
    </div>
  </HydrationBoundary>
  )
}

export default Page