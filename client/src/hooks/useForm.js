// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage'

export const useForm = (key, initialValue) => {
    //Utilize custom hook to store values into state and local storage
    const [values, setValues] = useLocalStorage(key, initialValue)
    const [showSuccessMessage, setShowSuccessMessage] = useLocalStorage('successMessage', false)
    const [successValues, setSuccessValues] = useLocalStorage('successValues', {})

    //Store values in the form inputs in state and local storage
    const handleChanges = e => {
        const name = e.target.name
        const value = e.target.value

        setValues({ ...values, [name]: value })
    }

    //Set form values into success message state/local storage, display success message and clear form
    const clearForm = e => {
        if(e) e.preventDefault()
        setSuccessValues(values)
        setShowSuccessMessage(true)
        setValues(initialValue)
    }

    return [values, successValues, showSuccessMessage, handleChanges, clearForm]
}