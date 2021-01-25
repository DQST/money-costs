import React from 'react';
import { List, ListInput, Button, Block } from 'framework7-react';
import { ModalSheet } from 'components';
import { StoreContext } from "contexts/store-context";
import { observer } from 'mobx-react-lite';
import moment from "moment";

const defaultState = {
    value: '',
    type: 'расход',
    category: 'Кофе',
    created_at: moment().format('y-MM-DD'),
};

const CreateTransaction = observer(({id}) => {
    const store = React.useContext(StoreContext);
    const [state, setState] = React.useState(defaultState);

    const onInput = e => {
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    const onClick = () => {
        const obj = {
            ...state,
            created_at: moment(state.created_at).unix(),
            updated_at: moment(state.created_at).unix(),
        }
        store.addTransaction(obj);
        setState(defaultState);
    };

    return (
        <ModalSheet id={id} height={'90%'}>
            <List>
                <ListInput
                    value={state.value}
                    label="Сумма"
                    type="number"
                    name="value"
                    inputmode="decimal"
                    placeholder="Введите сумму"
                    onInput={onInput}
                />
                <ListInput
                    value={state.category}
                    type='select'
                    name='category'
                    placeholder='Категория'
                    onInput={onInput}
                >
                    {store.categories.map(({id, name}) =>
                        <option key={id} value={name}>{name}</option>
                    )}
                </ListInput>
                <ListInput
                    value={state.type}
                    type='select'
                    name='type'
                    placeholder='Тип'
                    onInput={onInput}
                >
                    <option value='расход'>Расход</option>
                    <option value='доход'>Доход</option>
                </ListInput>
                <ListInput 
                    label="Дата" 
                    type='date' 
                    name='created_at'
                    value={state.created_at}
                    onInput={onInput}
                >
                </ListInput>
            </List>
            <Block>
                <Button onClick={onClick} fill sheetClose={`.${id}`}>
                    Добавить транзакцию
                </Button>
            </Block>
        </ModalSheet>
    );
});

export default CreateTransaction;
