import { Route } from '@/app/models';
import Link from 'next/link';
import React from 'react'

interface Props {
    pathNames: Route[];
}
function Navigator({pathNames}:Props) {
  return (
    <div style ={{display: "flex", gap:"15px",flexDirection:"row"}}>
        {pathNames.map(pathName =><Link href={pathName.path}>{pathName.name}</Link>)}
    </div>
  )
}

export default Navigator