import { useState, useEffect } from 'react'

export const UseLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
  const [isStored, setStorage] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key)
      if (storedValue) return JSON.parse(storedValue) as T
    } catch (error) {
      console.warn(`Error reading localStorage key '${key}':`, error)
    }

    return initialValue
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(isStored))
    } catch (error) {
      console.warn(`Error setting localStorage key '${key}':`, error)
    }
  }, [key, isStored])

  const handleStorage = (value: T) => setStorage(value)

  return [isStored, handleStorage]
}