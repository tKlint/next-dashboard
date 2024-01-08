'use client'
import { useSelectedLayoutSegment } from "next/navigation"
import { useEffect } from "react"

/**
 * 并行路由
 * 同时匹配自身, a 和 b
 * @param props 
 * @returns 
 */

export default function Layout(props: {
  children: React.ReactNode
  b: React.ReactNode
  a: React.ReactNode
}) {
  const seg =  useSelectedLayoutSegment('b')
  console.log(seg)
  useEffect(() => {
    console.log(props, 'rrr')
  }, [
    
  ])
  return (
    <>
      {props.children}
      <div className="h-1 w-full bg-slate-300"></div>
      {props.a}
      {props.b}
    </>
  )
}
