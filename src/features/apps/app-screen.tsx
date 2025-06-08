import {useAppScreen} from "@/shared/hooks/use-app-screen.tsx"
import {OPERATION_LIST, OPERATION_STYLE_SCREEN_LIST} from '@/shared/constants'

export const AppScreen = () => {
    const {handleOperationScreen,operationByScreen,isOpen} = useAppScreen()

    if(!isOpen) return;

    return (
        <div className="relative z-10 bottom-26 flex justify-center h-screen items-center">
             <div className={`bg-white/95 ${OPERATION_STYLE_SCREEN_LIST[operationByScreen]}`}>
                 <div className="bg-gray-900 border border-black h-[35px] w-full">
                     <div className="flex justify-end items-center gap-8  px-4">
                         {OPERATION_LIST.map((item) => (
                             <button className='text-white text-xl cursor-pointer'
                             onClick={() => handleOperationScreen(item.operation)}
                             key = {item.id}>{item.title}</button>
                         ))}
                     </div>
                 </div>
             </div>
        </div>
    )
}