import bg from '@/assets/bg/bg.jpg'
import { Apps } from '@/features/apps/apps'
import {AppScreen} from '@/features/apps/app-screen.tsx'

// children сюда
export const Background = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='relative z-1 w-full overflow-hidden h-screen'>
            <Apps/>
            <AppScreen/>
        </div>
    )
}