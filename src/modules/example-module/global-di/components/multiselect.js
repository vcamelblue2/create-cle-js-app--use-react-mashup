import { ComponentsRegistry } from "cle.js/lib";
import { RC } from "../../../../mashup/utils/generic-rc-wrapper";
import { Prime } from "../../../primereact.all";

ComponentsRegistry.define({ Multiselect: ({selected, onSelectionChange, options, usedCleProps, useReactArgs, extraDef, ...props}={})=>{

    return RC(Prime.MultiSelect, { 
        usedCleProps,
        f: { ...props, value: selected, options, onChange: onSelectionChange}, 
        useReactArgs: useReactArgs ?? [undefined, undefined, extraDef] // extra def for the le wrapper!
    }
    
    )['nested-react'] 

}}, null)

