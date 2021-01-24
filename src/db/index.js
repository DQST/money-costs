import Dexie from "dexie";
import { DefaultUser, Currencies, CostsCategories } from './consts';

const db = new Dexie('money-costs');
db.version(1).stores({
  user: '++id',
  currency: '++id',
  category: '++id',
  wallet: '++id, user_id, currency_id, created_at, updated_at',
  transaction: '++id, currency_id, wallet_id, timestamp',
  report: '++id, wallet_id, created_at',
  report_data: '++id, report_id, transaction_id',
});

async function initDb() {
  const isUserExists = await db.user.count();
  if (!isUserExists) {
    db.user.add(DefaultUser);
  }

  const costsCategories = await db.category.count();
  if (!costsCategories) {
    await db.category.bulkAdd(CostsCategories);
  }

  const count = await db.currency.count();
  if (!count) {
    await db.currency.bulkAdd(Currencies);
  }
};

initDb().catch(error => {
  console.log(error);
});

export default db;
