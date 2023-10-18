import { SimpleComponent } from "../html-components/simple-component/simple.component.deps";

export const SimpleHtmlPage = async (state, params)=>{

  console.log(state, params)

  return await SimpleComponent()
}