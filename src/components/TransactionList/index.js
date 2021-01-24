import React from "react";
import { List, ListItem } from 'framework7-react';
import SVG from 'react-inlinesvg';
import db from "db";


const TransactionList = ({transactions}) => {
    const [tr, setTr] = React.useState(null);
    React.useEffect(() => {
        db.category.toArray(setTr);
    }, []);
    return (
        <List mediaList inset>
            {tr && tr.map(({id, name, icon}) => 
                <ListItem key={id} title={name} subtitle="11:32">
                    <SVG slot="media" src={icon} width={40} height={40}></SVG>
                    <span slot="after">-4,3 p.</span>
                </ListItem>
            )}
        </List>
    );
};

export default TransactionList;
