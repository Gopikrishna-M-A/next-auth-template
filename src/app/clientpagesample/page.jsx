'use client'

import { useAuth } from '@/hooks/useAuth'

export default function Profile() {
  const { user, isLoading, isAuthenticated } = useAuth()

  if (isLoading) return <div>Loading...</div>
  if (!isAuthenticated) return <div>Please sign in</div>

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  )
}