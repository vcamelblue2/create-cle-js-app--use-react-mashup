
// Module Style
import "./module.style.css"

// Module Global Dependency Injection Import - Parcel "*" helper
import "./global-di/**/*.js"

// Module Pages
import { ReactComponentsPage } from './pages/page1.page';
import { TestReactComponentsPage } from './pages/page2.page';
import { SimpleHtmlPage } from './pages/page3.page';

// Module Routes
export const ExampleModuleRoutes = {
  
  "example-module": ReactComponentsPage,
  "example-module/tests": TestReactComponentsPage,
  "example-module/html": SimpleHtmlPage,

}