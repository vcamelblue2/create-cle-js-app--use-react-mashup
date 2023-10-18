import * as ReactDOM from "react-dom";
import * as React from "react";
import * as cle_lib from "cle.js/lib"

// Import cle-react mashup utils
import { ReactInCle } from 'cle.js/mashup/react/lib/react-in-cle.js';
import { CleInReact } from 'cle.js/mashup/react/lib/cle-in-react.js';

// console.log(React, ReactDOM, cle_lib)
ReactInCle.manualSetup(React, ReactDOM, cle_lib)
CleInReact.manualSetup(React, cle_lib)

console.log("cle - react mashup init!");

// disable React Warning as Error
(function suppressReactWarnings(){
    const SUPPRESSED_ERRORS = ['Warning:']; const er = console.error; console.error = function filterWarnings(msg, ...args) {if (!SUPPRESSED_ERRORS.some((entry) => msg.startsWith(entry))) {er(msg, ...args);}};
})();

export {}