import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'

export default function BlogDetails() {
    const { id } = useParams()
  return (
    <div className="blog-deatails">
        <h2>Blog details - { id }</h2>
    </div>
  )
}
