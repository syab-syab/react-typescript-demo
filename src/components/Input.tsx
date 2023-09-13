import React from 'react'

type InputProps = {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// const Input = (props: InputProps) => {
const Input = ({ value, handleChange}: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }
  return (
    <>
      {/* <input type="text" value={props.value} onChange={props.handleChange}/> */}
      {/* <input type="text" value={props.value} onChange={handleInputChange}/> */}
      <input type="text" value={value} onChange={handleChange}/>
    </>
  )
}

export default Input