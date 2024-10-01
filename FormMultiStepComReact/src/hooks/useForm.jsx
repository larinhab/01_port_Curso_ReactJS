import { useState } from 'react'

export function useForm(steps){ 
    const [ currentStep, setCurrentStep ] = useState(0)

    function changeStep(i, e) {
        if(e) e.preventDefault()

        if(i < 0 || i >= steps.lenght) return

        setCurrentStep(i)
    }
    
    return {
        currentStep,
        isLastStep: currentStep + 1 === steps.lenght ? true : false,
        currentComponent: steps[currentStep],
        changeStep,
        //       isFirstStep: currentStep === 0 ? true : false,
    }
}