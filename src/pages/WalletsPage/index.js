import React from 'react';
import { Link, Navbar, Page } from 'framework7-react';
import { Wallet } from 'components';
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
                <Link slot="right" style={{fontSize: '30px'}}>+</Link>
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
        </Page>
    );
};

export default WalletsPage;
