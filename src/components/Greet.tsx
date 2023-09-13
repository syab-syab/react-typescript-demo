import React from 'react'

type GreetProps = {
  name: string
  // ?を付ければそのプロパティが渡され無くてもエラーが出ない
  messageCount?: number
  isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props
  return (
    <div>
      <h2>
      {
        props.isLoggedIn
        ? `Welcome ${props.name}! You have ${props.messageCount} unread message`
        : "Welcome Guest"
      }
      </h2>
    </div>
  )
}

export default Greet