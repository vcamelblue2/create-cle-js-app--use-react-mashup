// Import Cle Component
import { CleItem } from "./cle-example";

// Import Wrapper utils: mashup, UseCle (in react), Extension for parametrs override, PropTypes for Stories control
import { UseCle } from 'cle.js/mashup/react/lib/cle-in-react.js';
import { Extended } from "cle.js/lib"
import PropTypes from 'prop-types';

// Stories Interface
export const iCleItem = ({color, label="Hello World!"})=>{

    return <UseCle def={
        Extended(CleItem, {color, label})
    } autoDestroy={false} usedProps={{color, label}}></UseCle>
}

iCleItem.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string
}

