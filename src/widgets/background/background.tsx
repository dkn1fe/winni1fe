import bg from '@/assets/bg/bg.jpg'
import { Apps } from '@/features/apps/apps'

// children сюда
export const Background = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='relative z-[-1] w-full h-screen '>
            <Apps/>
        </div>
    )
}