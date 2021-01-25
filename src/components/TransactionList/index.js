import React from "react";
import { List, ListItem } from 'framework7-react';
import { StoreContext } from 'contexts/store-context';
import { observer } from "mobx-react-lite";
import moment from 'moment';
import SVG from 'react-inlinesvg';


const TransactionList = observer(() => {
    const store = React.useContext(StoreContext);
    return (
        <List mediaList inset>
            {store.activeWalletTransactions.map(({category, type, created_at, value}) => {
                const valueText = type === 'расход' ? `-${value}` : value;
                const created = moment(created_at);
                const time = created.format('HH:mm');
                const icon = store.icons[category];

                return (
                    <ListItem title={category} subtitle={time}>
                        <SVG slot="media" src={icon} width={40} height={40}></SVG>
                        <span slot="after">{valueText} p.</span>
                    </ListItem>
                );
            })}
        </List>
    );
});

export default TransactionList;
