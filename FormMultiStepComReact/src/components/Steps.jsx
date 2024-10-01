import { AiOutlineUser, AiOutlineStar, AiOutlineCheck } from 'react-icons/ai'
import React from 'react'
import './Step.css'

function Steps( { currentStep } ) {
  return (
    <div className='steps'>
        <div className="step active">
            <AiOutlineUser/>
            <p>Identificação:</p>
        </div>

        <div className={ `step ${currentStep >=1 ? "active" : ""}`}>
            <AiOutlineStar/>
            <p>Avaliação:</p>
        </div>

        <div className={ `step ${currentStep >=2 ? "active" : ""}`}>
            <AiOutlineCheck/>
            <p>Envio</p>
        </div>
    </div>
  )
}

export default Steps