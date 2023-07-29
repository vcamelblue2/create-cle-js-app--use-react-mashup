import "./setup-mashup";

import { createRoot } from "react-dom/client";
import { App } from "./App";

export const mountReactApp = (mount_point)=>{
    const container = mount_point ?? document.body;
    const root = createRoot(container)
    root.render(<App />);
}