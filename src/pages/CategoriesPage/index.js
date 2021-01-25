import React from "react";
import { Page, Navbar, Link, List, ListItem } from 'framework7-react';
import SVG from 'react-inlinesvg';
import { StoreContext } from 'contexts/store-context';
import { observer } from "mobx-react-lite";


const CategoriesList = observer(() => {
    const store = React.useContext(StoreContext);

    return (
        <Page>
            <Navbar 
                backLink
                noHairline
                bgColor="white"
                title="Категории"
                className="navbar-page"
            >
                <Link slot="right" style={{fontSize: '30px'}}>+</Link>
            </Navbar>
            <List mediaList>
                {store.categories.map(({id, name, icon}) => 
                    <ListItem key={id} title={name}>
                        <SVG slot="media" src={icon} width={40} height={40}></SVG>
                    </ListItem>
                )}
            </List>
        </Page>
    );
});

export default CategoriesList;
