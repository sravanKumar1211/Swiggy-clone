import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {

    let err=useRouteError()

    console.log(err)

  return (
    <div>
      <h1>Error page</h1>
    </div>
  )
}
