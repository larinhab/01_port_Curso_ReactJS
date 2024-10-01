import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import ReviewForm from './components/ReviewForm'
import UserForm from './components/UserForm'
import { useForm } from './hooks/useForm'
import Thanks from './components/Thanks'
import { FiSend } from 'react-icons/fi'
import Steps from './components/Steps'
import { useState } from 'react'
import './App.css'

const formTemplate =  {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {

  const [ data, setData ] = useState(formTemplate)

  const updateFieldHandler = ( key, value ) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data}/>
  ]

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)

  return (
    <>
     <div className='app'>
       <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficarmos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
       </div>

       <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep +1, e) }>
          <div className="inputs-container">{currentComponent}</div>

          <div className="actions">

    	    {!isFirstStep && (
                <button type='button'
                    onClick={() => changeStep(currentStep - 1)}>
                    <GrFormPrevious/>
                    <span>Voltar</span>
                </button>
          )}
            

            {!isLastStep ? (
                  <button type='submit'>
                    <GrFormNext/>
                    <span>Avançar</span>
                  </button>
            ) : (
                  <button type='button'>
                    <FiSend/>
                    <span>Enviar</span>
                  </button>
            )}

          </div>
        </form>
       </div>
     </div>
    </>
  )
}

export default App
