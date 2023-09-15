import React, { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

const User = () => {
  // <XXX | YYY>で二つの型のどちらか一方が入るということ
  const [user, setUser] = useState<AuthUser | null>(null)
  // asはよくわからん
  // const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const handleLogin = () => {
    setUser({
      name: 'user-name',
      email: 'user@example.com'
    })
  }
  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* ?. はオプショナルチェーン(nullになる可能性があるから) */}
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  )
}

export default User