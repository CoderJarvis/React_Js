import React from 'react'

export default function Heading(props) {
  return (
    <>
      <h1 className="text-center my-2" style={{ color: 'green' }}>{props.title}</h1>
    </>
  )
}
