import React from 'react';
import { List, ListItem, Navbar, Page } from 'framework7-react';
import db from 'db';


const CurrenciesPage = () => {
    const [currencies, setCurrencies] = React.useState(null);
    React.useEffect(() => {
        db.currency.toArray().then(setCurrencies);
    }, []);

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
                {currencies && currencies.map(({id, cc, name, symbol}) => 
                    <ListItem key={id} title={`[${cc}] ${name}`} after={symbol}/>
                )}
            </List>
        </Page>
    );
};

export default CurrenciesPage;
