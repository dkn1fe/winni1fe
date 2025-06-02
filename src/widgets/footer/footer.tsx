import { Time } from '@/features'
import { Search } from 'lucide-react'
import winlogo from '@/assets/win.png'



export const Footer = () => {
    return (
        <div className="fixed z-10 bottom-0 w-full bg-black h-[50px] px-3">
            <div className='flex items-center justify-between'>
                <div className='flex gap-5 items-center relative'>
                    <img src={winlogo} className='w-7 h-6 my-3' />
                    <input className='relative h-full bg-white/20 outline-none text-white placeholder:text-gray-300 py-3 pl-10 border border-gray-500 w-[350px]' placeholder='Чтобы начать поиск, введите запрос' />
                    <Search color='gray' className='absolute top-3 left-14' />
                </div>
                <Time/>
            </div>
        </div>
    )
}