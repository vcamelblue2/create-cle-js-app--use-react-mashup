import { cle } from "cle.js/lib"
import { UseReact } from 'cle.js/mashup/react/lib/react-in-cle.js';
import { CleButton } from "../components/manual-rc-wraps/button";
import { RC, _ } from "../generic-rc-wrapper";

import {Button as pButton} from "primereact/button"
import { InputText as pInputText} from "primereact/inputtext"


export const TestReactCompnentsPage = async (state, params)=>{

  console.log(state, params)

  return cle.div({

    theLabel: "i'm the label"
    
  },
    { h2: "Showcase components" },

    UseReact(({$})=>{
      return <button>Reset Data</button>
    }),
    

    CleButton({label: "HI Dev"}),
    CleButton({label: "HI Dev"}),
    CleButton({label: "HI Dev"}),


    _(_ => {
      const usedCleProps = ["theLabel"]

      const label = $=>$.theLabel

      const onClick = $=>(e)=>{
        console.log("clickeeddd")
        $.theLabel = "the label changed!"
      }

      const style = {height: "20px"}

      return CleButton({f: { label, onClick }, style, usedCleProps})
    }),


    RC(pButton, {label: "HI Dev"}),
    
    RC(pInputText, {f: {value: $=>$.theLabel, onInput: $=>e=>$.theLabel=e.target.value}, usedCleProps: ["theLabel"]}),
  )
}