import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import React from 'react'


export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getCurrentUser() {
  const session = await getSession()
  return session?.user
}



const page = async () => {
    const user = await getCurrentUser()
    console.log("user",user);
  return (
    <div>{user?user.name:"please sign in"}</div>
  )
}

export default page