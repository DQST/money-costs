import React from 'react';
import { Page, Navbar, NavLeft, BlockTitle, Fab, Swiper, SwiperSlide, f7 } from 'framework7-react';
import { Avatar, Wallet, TransactionList } from 'components';
import { CreateTransaction } from 'containers';
import { StoreContext } from 'contexts/store-context';
import { observer } from 'mobx-react-lite';
import Me from 'me.jpg';
import { AiOutlinePlus } from 'react-icons/ai';
import './styles.css';



const MainPage = observer(() => {
    const store = React.useContext(StoreContext);
    const onSlideChange = ({activeIndex}) => {
        store.activeWallet = activeIndex;
    };

    const showSheet = () => {
        f7.sheet.open('.create-transaction-modal');
    }

    return (
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
            <Swiper onSlideChange={onSlideChange}>
                {store.wallets.reverse().map(({id, name, balance, symbol}) => 
                    <SwiperSlide key={id}>
                        <Wallet name={name} balance={balance} symbol={symbol}/>
                    </SwiperSlide>
                )}
            </Swiper>
            <BlockTitle className={'date'}>Сегодня</BlockTitle>
            <TransactionList/>
            <Fab 
                slot="fixed" 
                position="right-bottom" 
                className={'create-transaction'}
                onClick={showSheet}
            >
                <AiOutlinePlus/>
            </Fab>
            <CreateTransaction id="create-transaction-modal"/>
        </Page>
    );
});

export default MainPage;
