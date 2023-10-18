import { UseReact, useCleProps } from 'cle.js/mashup/react/lib/react-in-cle.js';

export const RC = 
/**
 * @template {T}
 * 
 * React Component Wrapper
 * @typedef { ($)=>any } F
 * @typedef { { [name: string]: F } } FColl
 * @typedef {( F | string | number | import('react').ReactElement )} Childs
 * @typedef { [props?: {}, changeDetectionVars?: any[], extraDefinitions?: {}, oninit?: ($: any) => void, ondestroy?: ($: any) => void] } UseReactArgs
 * 
 * @--typedef {  } SpreadContetDef - other variables, todo: make linter work @--param { {usedCleProps: string[], f: FColl, useReactArgs: UseReactArgs} & SpreadContetDef} param1 
 * @typedef {React.ReactElement<P>} ipt
 * 
 * @param { ipt<T> } Component
 * @param { {usedCleProps: string[], f: FColl, useReactArgs: UseReactArgs, ...content} & (ipt<T>['props']) } param1 - declare cle evaluable into f, otherwise into ...content
 * @param { Childs[] } childs 
 * @returns 
 */
(Component, {usedCleProps=undefined, f={}, useReactArgs=[], ...content}={}, ...childs)=>{
    
    return UseReact(({$})=>{

        if (usedCleProps !== undefined) {
            useCleProps($, ...usedCleProps)
        }

        childs = childs.map(c=>typeof c === 'function' ? c($) : c)

        const computedContent = Object.fromEntries(Object.entries(f).map(([k,v])=>[k, typeof v === 'function' ? v($) : v]))

        return childs.length === 0 ? 
            <Component $={()=>$} {...content} {...computedContent}></Component>
            :
            <Component $={()=>$} {...content} {...computedContent}>{...childs}</Component>
    }, ...useReactArgs)

};

export const RCF = (reactObj)=>{ return ()=>reactObj}

/**
 * 
 * @param {(_)=>any} fun 
 * @returns 
 * 
 * Utils to declare in a lazy way usage of react component wrapped
 * @example 
 *  _(_ => {
      const usedCleProps = ["theLabel"]

      const label = $ => $.theLabel

      const onClick = $ => (e)=>{
        $.theLabel = "the label changed!"
      }

      const style = {height: "20px"}

      return RC(Primereact.Button, {f: { label, onClick }, style, usedCleProps})
    })
 */
export const _ = (fun)=>fun()

/** 
* @type {{[name: string]: (fun)=>fun()}}
*/
const sentinel = {}
/**
 * @example
RCDef.MyComponent(_=>{
  return ...
})
 */
export const RCDef = new Proxy(sentinel, {get: ()=>_})

