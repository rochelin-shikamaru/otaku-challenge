import React from 'react'

const Blob = ({showHome}) => {
  return (
    <>
        <div className={showHome ? "blob-blue" : "blob-blue--small"}></div>
        <div className={showHome ? "blob-yellow" : "blob-yellow--small"}></div>
    </>
  )
}

export default Blob