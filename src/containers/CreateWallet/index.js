import React from 'react';
import { List, ListInput, Button, Block } from 'framework7-react';
import { FaWallet } from 'react-icons/fa';
import { GrCurrency } from 'react-icons/gr';
import { ModalSheet } from 'components';
import { StoreContext } from "contexts/store-context";
import { observer } from 'mobx-react-lite';

const defaultState = {
    name: '',
    balance: 0,
    currency_id: 24,
};

const CreateWallet = observer(({id}) => {
    const [state, setState] = React.useState(defaultState);
    const store = React.useContext(StoreContext);

    const onInput = e => {
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    const onClick = () => {
        state.currency_id = parseInt(state.currency_id);
        store.addWallet(state.name, state.currency_id, state.balance);
        setState(defaultState);
    };

    return (
        <ModalSheet id={id} position='top'>
            <List>
                <ListInput
                    value={state.name}
                    type='text'
                    name='name'
                    placeholder='Название'
                    onInput={onInput}
                >
                    <FaWallet slot='media' size='30px'/>
                </ListInput>
                <ListInput
                    value={state.currency_id}
                    type='select'
                    name='currency_id'
                    placeholder='Валюта'
                    onInput={onInput}
                >
                    <GrCurrency slot='media' size='30px'/>
                    {store.currencies.map(({id, cc}) =>
                        <option key={id} value={id}>{cc}</option>
                    )}
                </ListInput>
                <ListInput
                    value={state.balance}
                    type='text'
                    name='balance'
                    placeholder='Баланс'
                    onInput={onInput}
                />
            </List>
            <Block>
                <Button type='submit' onClick={onClick} fill sheetClose={`.${id}`}>
                    Сохранить кошелёк
                </Button>
            </Block>
        </ModalSheet>
    );
});

export default CreateWallet;
