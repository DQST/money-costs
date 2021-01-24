import React from 'react';
import { Block } from 'framework7-react';
import { ModalSheet } from 'components';


const CreateWallet = ({id}) => {
    return (
        <ModalSheet id={id} position='top'>
            <Block>
                <h2>Hello!</h2>
            </Block>
        </ModalSheet>
    );
};

export default CreateWallet;
