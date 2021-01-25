import React from 'react';
import { Link, Navbar, Page } from 'framework7-react';
import { Wallet } from 'components';
import { CreateWallet } from 'containers';
import { StoreContext } from 'contexts/store-context';
import { observer } from 'mobx-react-lite';

const WalletsPage = observer(() => {
    const store = React.useContext(StoreContext);

    return (
        <Page>
            <Navbar
                backLink
                noHairline
                bgColor="white"
                title="Кошельки"
                className="navbar-page"
            >
                <Link slot="right" style={{fontSize: '30px'}} sheetOpen='.create-wallet'>+</Link>
            </Navbar>
            <br/>
            <div>
                {store.wallets.reverse().map(({id, name, balance, symbol}) => 
                    <Wallet key={id} name={name} balance={balance} symbol={symbol}/>
                )}
            </div>
            <CreateWallet id='create-wallet'/>
        </Page>
    );
});

export default WalletsPage;
