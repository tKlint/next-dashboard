import React from 'react'

export default function Template({children}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <input type="text" name="" id="" />
      {children}
    </div>
  )
}
