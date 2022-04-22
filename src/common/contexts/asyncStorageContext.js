import { useState, createContext } from 'react'

const AsyncStorageContext = createContext({
    asyncStorageContext: {},
    setAsyncStorageContext(data) { return }
})
export default AsyncStorageContext

export const UseAsyncStorageContext = () => {
    const [asyncStorageContext, setAsyncStorageContext] = useState({})

    return {asyncStorageContext, setAsyncStorageContext}
}