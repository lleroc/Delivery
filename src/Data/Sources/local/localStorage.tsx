import AsyncStorage from "@react-native-async-storage/async-storage"

export const localStorage =()=>{
    const guardar =async (clave:string, valor : string) => {
        try {
            await AsyncStorage.setItem(clave, valor);
        } catch (error) {
            console.log('error en local sotrage: ' + error)
        }
    }
    const obtener =async (clave:string) => {
        try {
          const item =  await AsyncStorage.getItem(clave);
          return item;
        } catch (error) {
            console.log('error en local sotrage: ' + error)
        }
    }
    return{
        guardar, obtener
    }
}