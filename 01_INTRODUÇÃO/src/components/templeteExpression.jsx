

function templeteExpression() {
    const name = "Lara"
    const data = {
        age: 28,
        job: "dev"
    } 

  return (
    <div>templeteExpression
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.age} e você é um {data.job}</p>
        <p> A soma é {2+2} </p>
    </div>
  )
}

export default templeteExpression