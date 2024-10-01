import myComponent from "./myComponent"
// QUANDO RETORNAMOS OBJETOS, DEVE SER ENTRE PARENTESES
// DEVEMOS TER APENAS 1 COMPONENTE PAI <Div>
const FirstComponent = () => {
    return(
        <div> 
            <h2>Meu primeiro componente</h2> 
            <myComponent/>
        </div>
    )
}


export default FirstComponent