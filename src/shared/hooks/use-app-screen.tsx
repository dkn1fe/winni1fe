import {useAppScreenStore} from "@/shared/lib/zustand/use-app-screen-store.tsx";


export const useAppScreen = () => {
    const {setOperationScreen,closeApp,isOpen,operationByScreen,nameApp} = useAppScreenStore()

   const handleOperationScreen= (operation:string) => {
        const operationType = {
          hide:() => setOperationScreen(operation),
          fullScreen:() => setOperationScreen(operation),
          close:() => closeApp()
      }

      return operationType[operation]()

    }

   return {handleOperationScreen,isOpen,operationByScreen,nameApp}
}