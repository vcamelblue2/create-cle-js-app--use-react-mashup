import { cle } from "cle.js/lib"
import { UseReact, useCleProps } from 'cle.js/mashup/react/lib/react-in-cle.js';

import {Button} from "primereact/button"

export const CleButton = ({usedCleProps, f={}, ...content}, ...childs)=>{
    
    return UseReact(({$})=>{
        if (usedCleProps !== undefined) {
            useCleProps($, ...usedCleProps)
        }

        const computedContent = Object.fromEntries(Object.entries(f).map(([k,v])=>[k,v($)]))

        return <Button {...content} {...computedContent}>{...childs}</Button>
    })

}