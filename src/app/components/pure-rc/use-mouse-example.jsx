import React from "react"
import { useMouse } from 'primereact/hooks';


export const UseMouseExample = ()=>{
    const { ref, x, y, reset } = useMouse();

    return (
        <div className="card flex justify-content-center" style={{background: '#ccc', height: '100px'}}>
            <div ref={ref} onMouseLeave={reset} className="border-round surface-ground flex flex-wrap gap-3 justify-content-center align-items-center w-full md:w-20rem h-10rem text-xl" style={{height: '100px'}}>
                <span>
                    X: <strong>{x}</strong>
                </span>
                <span>
                    Y: <strong>{y}</strong>
                </span>
            </div>
        </div>
    )
}