import React from 'react'
import { useLocation , useParams } from 'react-router-dom'
import QueryString from 'query-string'

function Payment() {

    const location = useLocation()

    const { bank , total } = QueryString.parse(location.search)

  return (
    <>
    <h1>
        {bank} {total}

        {/* ยังทำไม่เสร็จครับหน้านี้ */}
    </h1>
    </>
  )
}

export default Payment