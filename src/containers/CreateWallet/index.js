import React from 'react';
import { List, ListInput, Button, Block } from 'framework7-react';
import { FaWallet } from 'react-icons/fa';
import { GrCurrency } from 'react-icons/gr';
import { ModalSheet } from 'components';
import { StoreContext } from "contexts/store-context";
import { observer } from 'mobx-react-lite';

const defaultState = {
    name: '',
    balance: '',
    symbol: '',
};

const CreateWallet = observer(({id}) => {
    const [state, setState] = React.useState(defaultState);
    const store = React.useContext(StoreContext);

    const onInput = e => {
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    const onClick = () => {
        store.addWallet(state);
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
                    value={state.symbol}
                    type='select'
                    name='symbol'
                    placeholder='Валюта'
                    onInput={onInput}
                >
                    <GrCurrency slot='media' size='30px'/>
                    {store.currencies.map(({id, cc, symbol, name}) =>
                        <option key={id} value={symbol}>{cc} {name}</option>
                    )}
                </ListInput>
                <ListInput
                    value={state.balance}
                    type='number'
                    inputmode="decimal"
                    name='balance'
                    placeholder='Баланс'
                    onInput={onInput}
                />
            </List>
            <Block>
                <Button onClick={onClick} fill sheetClose={`.${id}`}>
                    Создать кошелёк
                </Button>
            </Block>
        </ModalSheet>
    );
});

export default CreateWallet;
