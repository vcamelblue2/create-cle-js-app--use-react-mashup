import { Timer } from "cle.js/components"

import { defineHtmlComponent } from "cle.js/lib/caged-le"

import html from "bundle-text:./simple.component.ui.html"

// inject deps, ui from html file (for parceljs compiler/bundler static analysis)
export const SimpleComponent = defineHtmlComponent(html, { isRemote: false, defArgMapper: async (params, state, DepsInj)=>({ params, state, 
    DepsInj: {
      
      Timer: Timer,
      ...DepsInj

    }
  })
})
    
