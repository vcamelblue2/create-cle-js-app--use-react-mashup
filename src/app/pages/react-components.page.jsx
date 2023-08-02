import { cle } from "cle.js/lib"
import { Prime } from "../primereact.all";
import { UseReact } from 'cle.js/mashup/react/lib/react-in-cle.js';
import { RC, RCF, RCDef } from "../generic-rc-wrapper";
import { Router } from "cle.js/routing/lite_routing"

import { css } from "../../utils/csz";

export const ReactCompnentsPage = async (state, params)=>{

  console.log(state, params)

  return cle.div({

    // CLE variable
    theLabel: "i'm the label",

    selectedCities: ['RM'],
    cities: [     
      {label: 'New York', value: 'NY'},
      {label: 'Rome', value: 'RM'},
    ]
    
  },
    { h2: "Showcase React Mashup components" },

    // A pure CLE component
    { div: ["this is the label: ", $=>$.theLabel] },

    // A Primereact Component
    RC(Prime.InputText, { usedCleProps: ["theLabel"], f: {
        value: $ => $.theLabel, 
        onInput: $=> e=> $.theLabel = e.target.value,
      }, 
    }),
    
    cle.hr(),

    RC(()=>
      <div>
        <a onClick={(e)=>{e.preventDefault(); Router.navigate("/tests")}}  href={"/tests"} >
          Go to Test page
        </a>
      </div>
    ),

    cle.hr(),

    cle.div({ 
      class: [css("display: flex; align-items: center; gap: 10px")]
    },
    
      UseReact(({$})=>
        <Prime.Button label={"Hi dev by a standard button"}/>
      ),

      RC(Prime.Button, { 
        label: "Hi dev by a standard button",
      }),
      
      // A Prime component by Cle DI (zero import use)
      { 'use-SmallButton': {
        label: "I am small (by cle DI)",
      }},
      
      { 'use-SmallButton': {
        label: "I am very small (by cle DI)",
        onClick: $=>e=>console.log("very small btn clicked"),
        className: css('font-size: 10px !important')
      }},
      
      { 'use-SmallButton': { usedCleProps: ['theLabel'],
        label: $ => "I am small (by cle DI) using props: " + $.theLabel,
      }},
    ),

    
    cle.h4("Select City"),

    cle.Row({ class: css("display: flex")},
      
      { 'use-Multiselect': { usedCleProps: ['selectedCities', 'cities'],
        
        options: $ => $.cities,
        
        selected: $ => $.selectedCities,
        onSelectionChange: $ => e => $.selectedCities = e.value,

        display: "chip",

        className: css("width: 100%"),

        extraDef: { style: "flex: 1" } // cle wrapper style
      }},
      
      { 'use-SmallButton': { 
        label: "Clear",
        onClick: $ => e => $.selectedCities = []
      }},
    ),

    cle.hr(),


  )
}