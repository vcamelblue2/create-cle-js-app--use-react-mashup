// CLE WITH REACT RENDER
import "../../app/setup-mashup";
import { iCleItem } from "./cle-example.rc-interface"

export default {
  title: 'Cle Example/Cle Item',
  component: iCleItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};


export const Standard = {
  args: {
    color: null,
    label: "Hello World!"
  }
};

export const Red = {
  args: {
    color: 'red',
    label: "Hello World!"
  }
};
