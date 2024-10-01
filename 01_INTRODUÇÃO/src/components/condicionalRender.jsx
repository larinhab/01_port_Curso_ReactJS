import React from 'react'

export default function condicionalRender() {
    const x = 5
    // Se eu mudo pra false ele não mostra, mas no true ele mostra na tela

    const name = "Matheus"

  return (
    <div>
        <h3>Isso será exibido?</h3>
        { x > 2 && <p>Se for true sim</p>}

        { name === "Jão" ? (
            <div>Olá João </div>
        ): (
            <div>Nome não encontrado</div>
        )}
    `</div>
  )
}
