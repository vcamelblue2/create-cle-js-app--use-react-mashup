// Import Cle Component
import { RC } from '../../mashup/utils/generic-rc-wrapper';
import { CleButton } from '../../modules/example-module/components/react-to-cle/manual-wraps/button';

// Import Wrapper utils: mashup, UseCle (in react), Extension for parametrs override, PropTypes for Stories control
import { UseCle } from 'cle.js/mashup/react/lib/cle-in-react.js';
import { Extended } from "cle.js/lib"
import PropTypes from 'prop-types';

// Stories Interface for cle wrapper of react elements
export const iCleButton = ({size="medium", label="Hello World!"})=>{
    
    return <UseCle def={
        // todo: fix autodestroy or properties must be all evaluable, otherwise cle wont recognize changes!
        CleButton({ f: {size: $=>$.size, label: $=>$.label}, usedCleProps: ['size', 'label']}) 
    } autoDestroy={false} usedProps={{size, label}}></UseCle> 
}
// explanation: react state converted to cle variables (usedProps), but here we are using a react component cle wrapper, so we declare wich cle properties are used (usedCleProps)

iCleButton.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string
}

