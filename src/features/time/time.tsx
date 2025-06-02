import { getRealTime } from "@/shared/utils/utils"
import { useEffect, useState } from "react"



export const Time = () => {
    const [realTime, setRealTime] = useState(getRealTime())

    useEffect(() => {
        const interval = setInterval(() => {
            setRealTime(getRealTime())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col items-center text-xs gap-1 text-white">
            <p>{realTime.hour}:{realTime.minutes}</p>
            <p>{realTime.day}.{realTime.month}.{realTime.year}</p>
        </div>
    )
}