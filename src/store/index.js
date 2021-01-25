import { makeAutoObservable, runInAction, toJS } from "mobx";
import db from "db";


export default class Store {
    _user = null
    _wallets = []
    _currencies = []
    _categories = []

    constructor() {
        makeAutoObservable(this);
        this.init();
    }

    async init() {
        const users = await db.user.toArray();
        const currencies = await db.currency.toArray();
        const categories = await db.category.toArray();
        const wallets = await db.wallet.toArray();

        runInAction(() => {
            this._user = users[0];
            this._currencies = currencies;
            this._categories = categories;
            this._wallets = wallets;
        });
    }

    addWallet = async obj  => {
        const now = Date.now();
        const wallet = {
            ...obj,
            created_at: now,
            updated_at: now,
        };
        await db.wallet.add(wallet);
        runInAction(() => {
            this._wallets.push(wallet);
        });
    }

    get wallets() {
        return toJS(this._wallets);
    }

    get currencies() {
        return toJS(this._currencies);
    }

    get categories() {
        return toJS(this._categories);
    }

    get userId() {
        return this._user.id;
    }
}
