import React, { useEffect, useState } from 'react'

function UseLocalStorage(key,initVal) {
    const [value, setvalue] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initVal)
    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value))
    }, [value])
    
  return ([value,setvalue])
}

export default UseLocalStorage