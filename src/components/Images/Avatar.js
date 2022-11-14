import React from 'react'

const Avatar = ({ logo }) => {
  return (
    <img
      src={logo}
      alt="COA Logo"
      className="brand-image img-circle elevation-3"
      style={{ opacity: ".8" }}
    />
  )
}

export default Avatar