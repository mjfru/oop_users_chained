//? Update your previous assignment so that each instance's methods can be chained

class User {
  constructor(userName, email) {
    this.userName = userName;
    this.email = email;
    this.accountBalance = 0;
  }
  makeDeposit(amount) {
    this.accountBalance += amount
    return this
  }
//? Add a makeWithdrawal method to the User class
  makeWithdrawal(amount) {
    this.accountBalance -= amount
    return this
  }
//? Add a displayBalance method to the User class
  displayBalance() {
    console.log(this.accountBalance)
  }
//? Transfer Money method bonus
  transferMoney(amount, recipient) {
    this.accountBalance -= amount;
    recipient.accountBalance += amount;
    return this
  }
}

//? Create 3 instances of the User class
const Matt = new User("Matt", "mjfru@gmail.com")
const Sandy = new User ("Sandy", "fromtexas@aol.com")
const Patrick = new User ("Patrick", "starfishboi@yahoo.com")

//? Have the first user make 3 deposits and 1 withdrawal and then display their balance
Matt.makeDeposit(100).makeDeposit(300).makeDeposit(100).makeWithdrawal(100).displayBalance();

//? Have the second user make 2 deposits and 2 withdrawals and then display their balance
Sandy.makeDeposit(100).makeDeposit(200).makeWithdrawal(50).makeWithdrawal(200).displayBalance();

//? Have the third user make 1 deposit and 3 withdrawals and then display their balance
Patrick.makeDeposit(500).makeWithdrawal(20).makeWithdrawal(25).makeWithdrawal(100).displayBalance();

//! BONUS: Add a transferMoney method; have the first user transfer money to the third user and then print both users' balances
Matt.transferMoney(100, Patrick).displayBalance();
Patrick.displayBalance();