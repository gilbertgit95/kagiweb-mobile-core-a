import { useState, useEffect, createContext } from 'react'
import AsyncStore from '../utilities/ayncStorage'
import config from '../../config'

const defaultValue = {
    authKey: null
}

const AsyncStorageContext = createContext({
    asyncStorageContext: {},
    async updateAsyncStorage(data) { return }
})
export default AsyncStorageContext

export const useAsyncStorageContext = () => {
    const [asyncStorageContext, setAsyncStorageContext] = useState({})

    const updateAsyncStorage = async (obj) => {
        let newVal = {...asyncStorageContext, ...obj}
        setAsyncStorageContext(newVal)
        await AsyncStore.setItem(config.storageName, newVal)
    }

    useEffect(() => {
        let init = async () => {
            let store = await AsyncStore.getItem(config.storageName)

            if (store) {
                setAsyncStorageContext(store)
            } else {
                setAsyncStorageContext(defaultValue)
                await AsyncStore.setItem(config.storageName, defaultValue)
            }
        }

        init()
    }, [])

    return {
        asyncStorageContext,
        updateAsyncStorage
    }
}