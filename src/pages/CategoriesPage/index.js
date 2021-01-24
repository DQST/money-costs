import React from "react";
import { Page, Navbar, Link, List, ListItem } from 'framework7-react';
import SVG from 'react-inlinesvg';
import db from "db";


const CategoriesList = () => {
    const [categories, setCategories] = React.useState(null);
    React.useEffect(() => {
        db.category.toArray(setCategories);
    }, []);

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
                {categories && categories.map(({id, name, icon}) => 
                    <ListItem key={id} title={name}>
                        <SVG slot="media" src={icon} width={40} height={40}></SVG>
                    </ListItem>
                )}
            </List>
        </Page>
    );
};

export default CategoriesList;
