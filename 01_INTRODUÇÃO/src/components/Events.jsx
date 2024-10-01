import React from 'react'

export default function Events() {
    const handleClick = () =>{
        console.log("Executou")
    }

    // FUNÇÃO DE RENDERIZAÇÃO
    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso</h1>
        }else{
            return <h1>Renderizando outra coisa</h1>
        }
    }

  return (
    <div>
        <h1>Events</h1>
        <button onClick={() => console.log("Test")}>Clique aqui</button>
        <button onClick={handleClick}> Clique aqui com função</button>

        {/*Função com render */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}
