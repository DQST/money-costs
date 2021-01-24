import React from 'react';
import { Link, Navbar, Page } from 'framework7-react';
import { Wallet } from 'components';
import { CreateWallet } from 'containers';
import db from "db";

const WalletsPage = () => {
    const [wallets, setWallets] = React.useState([]);
    React.useEffect(() => {
        db.wallet.toArray().then(data => {
            console.log(`Loaded ${data.length} wallets`);
            setWallets(data);
        });
    }, []);

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
            {!wallets.length && 
                <h1 className="center-content">
                    Нет кошельков
                </h1>
            }
            {wallets.map(wallet => 
                <Wallet name={wallet.name} balance={wallet.balance}/>
            )}
            <CreateWallet id='create-wallet'/>
        </Page>
    );
};

export default WalletsPage;
