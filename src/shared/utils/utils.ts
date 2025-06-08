


export const getZero = (num:number) => num < 10 ? `0${num}` : num

export const getRealTime = () => {
    const date = new Date();
    
    const year = date.getFullYear()
    const month = getZero(date.getMonth() + 1)
    const day = getZero(date.getDate())
    const hour = getZero(date.getHours())
    const minutes = getZero(date.getMinutes())

    return {year,month,day,hour,minutes}

}