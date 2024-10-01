import React from 'react'

function Container({ children }) {
  return (
    <div>
        <h1>Conteudo do pai:
            {children}
        </h1>
    </div>
  )
}

export default Container