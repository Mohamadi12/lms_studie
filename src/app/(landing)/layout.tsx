import React from 'react'

type Props = {
    children: React.ReactNode
}

const LandingPage = ({children}: Props) => {
  return (
    <div className="flex flex-col container relative">{children}</div>
  )
}

export default LandingPage