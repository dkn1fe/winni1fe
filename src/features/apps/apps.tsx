import trash from '@/assets/trash.png'

export const Apps = () => {
    return (
        <div className="absolute top-0 -left-16">
            <div className='flex flex-col items-center'>
                <img className="max-w-60 h-30" src={trash} />
                <p className='text-white text-sm'>Корзина</p>
            </div>
        </div>
    )
}