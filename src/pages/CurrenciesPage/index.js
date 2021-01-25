import React from 'react';
import { List, ListItem, Navbar, Page } from 'framework7-react';
import {StoreContext} from 'contexts/store-context';
import { observer } from 'mobx-react-lite';


const CurrenciesPage = observer(() => {
    const store = React.useContext(StoreContext);

    return (
        <Page>
            <Navbar
                backLink
                noHairline
                bgColor="white"
                title="Валюты"
                className="navbar-page"
            />
            <List>
                {store.currencies.map(({id, cc, name, symbol}) => 
                    <ListItem key={id} title={`[${cc}] ${name}`} after={symbol}/>
                )}
            </List>
        </Page>
    );
});

export default CurrenciesPage;
