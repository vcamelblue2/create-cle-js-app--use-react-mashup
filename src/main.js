// import Clean.js
import {LE_InitWebApp as InitWebApp} from 'cle.js/lib'
import {InitRouter} from "cle.js/routing/lite_routing"

// Mashup
import "./mashup/setup-mashup";

// PrimeReact
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

// Css in js
import "./utils/csz.js"


// Pages Routes
import { ExampleModuleRoutes } from './modules/example-module/module.routes';
// import { ModuleRoutes } from './modules/create-your-module-here/module.routes';


InitWebApp(async ()=>{

  await InitRouter({

    pages: {
      ...ExampleModuleRoutes,
      // others module here
      // ...ModuleRoutes,
    },
  
    defaultRoute: "/example-module"
    // defaultRoute: "/"
  });

})
