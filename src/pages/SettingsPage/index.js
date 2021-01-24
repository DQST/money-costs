import React from 'react';
import { BlockTitle, List, ListItem, Navbar, Page } from 'framework7-react';
import { Avatar } from 'components';
import Me from 'me.jpg';

const SettingsPage = () => (
    <Page>
        <Navbar 
            backLink
            noHairline
            bgColor="white"
            title="Настройки"
            className="navbar-page"
        />
        <BlockTitle>
            <br/>
            <div className="center-content">
                <Avatar src={Me} width="150" height="150"/>
                <h3>Дмитрий Юшко</h3>
            </div>
        </BlockTitle>
        <List noHairlines inset>
            <ListItem title="Кошельки" link="/wallets/"></ListItem>
            <ListItem title="Валюты" link="/currencies/"></ListItem>
            <ListItem title="Категории" link="/categories/"></ListItem>
        </List>
    </Page>
);

export default SettingsPage;
