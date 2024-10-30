class Game {
    constructor(playerChoice) {
        this.playerChoice = playerChoice;
    }

    choices = ["камінь", "ножиці", "папір"];
    computerChoice;

    getComputerChoice() {
        this.computerChoice =
            this.choices[Math.floor(Math.random() * this.choices.length)];
        return this.computerChoice;
    }

    determineWinner() {
        if (this.playerChoice === this.computerChoice) {
            return "Нічия!";
        }

        if (
            (this.playerChoice === "камінь" &&
                this.computerChoice === "ножиці") ||
            (this.playerChoice === "ножиці" &&
                this.computerChoice === "папір") ||
            (this.playerChoice === "папір" && this.computerChoice === "камінь")
        ) {
            return "Гравець виграв!";
        } else {
            return "Комп'ютер виграв!";
        }
    }
}

// let playerChoice = "камінь";
// let game = new Game(playerChoice);

// console.log("Вибір гравця:", playerChoice);
// console.log("Вибір комп'ютера:", game.getComputerChoice());
// console.log(game.determineWinner());

class BankAccount {
    #balance;
    #accountNumber;

    constructor(accountNumber, initialBalance) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance > 0 ? initialBalance : 0;
    }
    get balance() {
        return this.#balance;
    }
    get accountNumber() {
        return this.#accountNumber;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Поповнено: ${amount}. Новий баланс: ${this.#balance}`);
        } else {
            console.log("Сума для поповнення має бути додатньою.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Знято: ${amount}. Новий баланс: ${this.#balance}`);
        } else {
            console.log("Недостатньо коштів або сума має бути додатньою.");
        }
    }
    displayAccountInfo() {
        console.log(
            `Рахунок: ${this.#accountNumber}, Баланс: ${this.#balance}`
        );
    }
}

const myAccount = new BankAccount("UA123456789", 1000);
myAccount.displayAccountInfo();

myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(2000);

console.log(myAccount.balance);
console.log(myAccount.accountNumber);
