import React from 'react';
import { Page, Navbar, NavLeft, BlockTitle, List, ListItem, Icon, Fab } from 'framework7-react';
import { Avatar, Wallet } from 'components';
import SVG from 'react-inlinesvg';
import AddIcon from "Icons/Add.svg";
import Me from 'me.jpg';
import './styles.css';


const MainPage = () => (
    <Page bgColor={'white'}>
        <Navbar bgColor={'white'} noHairline className={'navbar-main-page'}>
            <NavLeft>
                <Avatar src={Me}/>
            </NavLeft>
        </Navbar>
        <Wallet name={'Test'} balance={'44,32 p.'}/>
        <BlockTitle className={'date'}>Сегодня</BlockTitle>
        <List mediaList inset>
            <ListItem title="Item 1" subtitle="11:32">
                <Icon slot="media" icon="demo-list-icon"></Icon>
                <span slot="after">-4,3 p.</span>
            </ListItem>
            <ListItem title="Item 2" subtitle="11:32">
                <Icon slot="media" icon="demo-list-icon"></Icon>
                <span slot="after">-5 p.</span>
            </ListItem>
            <ListItem title="Item 3" subtitle="11:32">
                <Icon slot="media" icon="demo-list-icon"></Icon>
                <span slot="after">-24 p.</span>
            </ListItem>
            <ListItem title="Item 4" subtitle="11:32">
                <Icon slot="media" icon="demo-list-icon"></Icon>
                <span slot="after">+8 p.</span>
            </ListItem>
        </List>
        <Fab position="right-bottom" slot="fixed" className={'create-transaction'}>
            <SVG src={AddIcon} alt="Create transaction"/>
        </Fab>
    </Page>
);
export default MainPage;
