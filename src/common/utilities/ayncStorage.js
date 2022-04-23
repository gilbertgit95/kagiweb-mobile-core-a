import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStore = {
    async setItem(storeName, obj) {
        try {
            const jsonValue = JSON.stringify(obj)
            await AsyncStorage.setItem(storeName, jsonValue)
        } catch (e) {
            // saving error
            return
        }
    },

    async getItem(storeName) {
        try {
            const jsonValue = await AsyncStorage.getItem(storeName)
            return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch(e) {
            // error reading value
            return
        }
    }
};

export default AsyncStore;