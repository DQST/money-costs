import React from 'react';
import { Page, Navbar, NavLeft, BlockTitle, Fab } from 'framework7-react';
import { Avatar, Wallet, TransactionList } from 'components';
import SVG from 'react-inlinesvg';
import AddIcon from "Icons/Add.svg";
import Me from 'me.jpg';
import './styles.css';



const MainPage = () => (
    <Page>
        <Navbar
            noHairline
            bgColor="white"
            className="navbar-page"
        >
            <NavLeft>
                <Avatar src={Me} href={'/settings/'} width="50" height="50"/>
            </NavLeft>
        </Navbar>
        <Wallet name={'Test'} balance={'44,32 p.'}/>
        <BlockTitle className={'date'}>Сегодня</BlockTitle>
        <TransactionList/>
        <Fab position="right-bottom" slot="fixed" className={'create-transaction'}>
            <SVG src={AddIcon} alt="Create transaction"/>
        </Fab>
    </Page>
);

export default MainPage;
