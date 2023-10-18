import { cle } from "cle.js/lib"
import { App, H2, Hr, Div } from "../../../utils/cle-smart-alias"

export const HomePage = async (state, params)=>{

  console.log(state, params)

  return App({
    
    let: {
      time: new Date()
    }

  }, 
    H2({}, "Hello World!"),
    Hr(),
    Div({}, "This is the body"),
  )
}