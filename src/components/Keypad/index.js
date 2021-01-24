import React from 'react';
import { f7ready, List, ListInput } from 'framework7-react';
import 'framework7-plugin-keypad/dist/framework7-keypad.min.css';


const Keypad = ({type = 'numpad'}) => {
    React.useEffect(() => {
        f7ready(f7 => {
            f7.keypad.create({
                type,
                inputEl: '#keypad',
                dotButton: true
            });
        });
    }, [type]);

    return (
        <List inlineLabels noHairlinesMd>
            <ListInput
                inputId='keypad'
                label="Name"
                type="text"
                placeholder="Your name"
                clearButton
            ></ListInput>
        </List>
    );
};

export default Keypad;
