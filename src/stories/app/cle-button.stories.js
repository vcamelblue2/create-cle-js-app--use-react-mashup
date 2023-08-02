// CLE WITH REACT RENDER
import "../../app/setup-mashup";
import { iCleButton } from "./cle-button.rc-interface"

export default {
  title: 'App Components/Cle Button',
  component: iCleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};


export const Standard = {
  args: {
    size: "medium",
    label: "Hello World!"
  }
};

export const Small = {
  args: {
    size: "small",
    label: "Hello World!"
  }
};

export const Large = {
  args: {
    size: "large",
    label: "Hello World!"
  }
};
