import { ComponentsRegistry } from "cle.js/lib";
import { RC } from "../../../../mashup/utils/generic-rc-wrapper";
import { Prime } from "../../../primereact.all";

ComponentsRegistry.define({ SmallButton: ({label, onClick, usedCleProps, useReactArgs, extraDef, ...props}={})=>{
    
    // console.log("Small Button called", label, onClick, usedCleProps)

    return RC(Prime.Button, { usedCleProps,
        f: { ...props, label, onClick, size: 'small'}, 
        useReactArgs: useReactArgs ?? [undefined, undefined, extraDef] // extra def for the le wrapper!
    }
    
    // must return definition only! the key (SmallButton) will be used instead of "nested-react" as the tag
    )['nested-react'] 

}}, null)

