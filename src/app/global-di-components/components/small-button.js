import { ComponentsRegistry } from "cle.js/lib";
import { RC } from "../../generic-rc-wrapper";
import { Prime } from "../../primereact.all";

ComponentsRegistry.define({ SmallButton: ({label, onClick, usedCleProps, classNames, ...props}={})=>{
    
    // console.log("Small Button called", label, onClick, usedCleProps)
    className = $=>{
        let clss = (typeof classNames === 'function' ? classNames($) : classNames) ?? [];
        return (clss ? ["p-button-sm", ...clss] : ["p-button-sm"]).join(" ")
    }

    return RC(Prime.Button, { usedCleProps,
        f: { ...props, label, onClick, className}, 
    }
    
    // must return definition only! the key (SmallButton) will be used instead of "nested-react" as the tag
    )['nested-react'] 

}}, null)

