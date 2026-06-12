import React from 'react'
import { useParams } from 'react-router-dom'

const NotFound = () => {

    const data = useParams()
    console.log(data)

  return (
    <div>Page_NotFound {data.id} </div>
  )
}

export default NotFound