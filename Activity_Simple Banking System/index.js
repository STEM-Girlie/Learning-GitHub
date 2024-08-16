import BankAccount from './bankAccount.js';

const account1 = new BankAccount(456321, 'Masie Moo', 4500);
const account2 = new BankAccount(987456, 'Jonathon Billings', 20,561);
const account3 = new BankAccount(980364, 'Sarah Ahmed AlRazzaq', 85,632);

// this is depositing money 
account1.deposit(500);
account2.deposit(5000);
account3.deposit(10);

// this is withdrawing money
account1.withdraw(12);
account2.withdraw(50);
account3.withdraw(3000);

// and checking balances 
account1.checkBalance();
account2.checkBalance();
account3.checkBalance();