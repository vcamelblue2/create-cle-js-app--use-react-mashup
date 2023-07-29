// import Clean.js
import {LE_InitWebApp, cle} from 'cle.js/lib'
import {InitRouter, Router, RedirectTo} from "cle.js/routing/lite_routing"

// Mashup
import "./app/setup-mashup";

import "./utils/csz.js"

import "./app/global-di-components/**/*.js"
import "./app/global-di-components/**/*.jsx"

// PrimeReact
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

// Pages
import { ReactCompnentsPage } from './app/pages/react-components.page';
import { TestReactCompnentsPage } from './app/pages/test.page';


LE_InitWebApp(async ()=>{

  await InitRouter({

    pages: {
      "/": ReactCompnentsPage,
      "tests": TestReactCompnentsPage,
    },
  
    defaultRoute: "/"
  });

})
