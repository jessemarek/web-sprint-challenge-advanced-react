import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    
    const [storedValue, setStoredValue] = useState(() => {
        //If the key exisits in local storage return it to storedValue
        if(window.localStorage.getItem(key)){
            return JSON.parse(window.localStorage.getItem(key))
        }
        //Otherwise set the key to the initial value and return it to storedValue
        window.localStorage.setItem(key, JSON.stringify(initialValue))
        return initialValue
    })
    

    const setValue = value => {
        //Store the value into state
        setStoredValue(value)
        //Store the value into local storage
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue]
}