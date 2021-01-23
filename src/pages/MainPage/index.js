import React from 'react';
import { Page, Navbar, NavLeft } from 'framework7-react';
import { Avatar, Wallet } from 'components';
import Woman from 'woman.jpg';
import './styles.css';


const MainPage = () => (
    <Page>
        <Navbar className={'navbar-main-page'}>
            <NavLeft>
                <Avatar src={Woman} width={'75.53px'}/>
            </NavLeft>
        </Navbar>
        <Wallet name={'Test'} balance={'44,32 p.'}/>
    </Page>
);
export default MainPage;
