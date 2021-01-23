import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "framework7-react";
import SVG from 'react-inlinesvg';
import WalletIcon from 'Icons/Wallet.svg';
import FilterIcon from 'Icons/Filter.svg';
import './styles.css';


const Wallet = ({ name, balance }) => (
    <Card className={'wallet'}>
        <CardHeader>
            <div className={'name'}>
                <SVG src={WalletIcon} className={'icon main'} alt='wallet icon'/>
                {name}
            </div>
        </CardHeader>
        <CardContent>
            {balance}
        </CardContent>
        <CardFooter>
            <SVG src={FilterIcon} className={'icon'} alt='filter icon'/>
        </CardFooter>
    </Card>
);

export default Wallet;
