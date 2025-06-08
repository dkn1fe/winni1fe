import trash from '@/assets/trash.png'
import {useAppScreenStore} from "@/shared/lib/zustand/use-app-screen-store.tsx";

export const Apps = () => {
    const {openApp} = useAppScreenStore()

    const handleOpenApp = (state:{isOpen:boolean,nameApp:string}) => openApp(state)

    return (
        <div className="relative top-0  right-196">
            <div className='flex flex-col items-center'>
                <button onClick={() => handleOpenApp({isOpen:true,nameApp:'trash'})} className='cursor-pointer'>
                <img className="max-w-52 h-20" src={trash} />
                <p className='text-white text-sm'>Корзина</p>
                </button>
            </div>
        </div>
    )
}