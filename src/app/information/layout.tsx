import React from 'react'
import cardLayoutStyles from "./information-container.module.css"

function CardLayout({children}:{children:React.ReactNode}) {
  return (
    <div className={cardLayoutStyles.informationLayout}>{children}</div>
  )
}

export default CardLayout