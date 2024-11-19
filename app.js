class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true; 
    }
  
  borrowBook() {
      if (this.isAvailable) {
          this.isAvailable = false;
          return `"${this.title}" позичено успішно.`;
      } else {
          return `"${this.title}" зараз недоступна.`;
      }
  }
  
  returnBook() {
      if (!this.isAvailable) {
          this.isAvailable = true;
          return `"${this.title}" повернено до бібліотеки.`;
      } else {
          return `"${this.title}" вже була в бібліотеці.`;
      }
  }
  }
  
  class Library {
    constructor() {
        this.books = [];
    }
  
  addBook(book) {
      this.books.push(book);
      return `Додано книгу: "${book.title}" автора ${book.author}.`;
  }
  
  checkAvailability(title) {
      const book = this.books.find(b => b.title === title);
      if (book) {
          return book.isAvailable
              ? `"${title}" доступна для позичання.`
              : `"${title}" зараз позичена.`;
      } else {
          return `"${title}" не знайдено в бібліотеці.`;
      }
  }
  
  borrowBook(title) {
      const book = this.books.find(b => b.title === title);
      return book ? book.borrowBook() : `"${title}" не знайдено в бібліотеці.`;
  }
  
  returnBook(title) {
      const book = this.books.find(b => b.title === title);
      return book ? book.returnBook() : `"${title}" не знайдено в бібліотеці.`;
  }
  }
  
//   const library = new Library();
  
//   console.log(library.addBook(new Book("Гаррі Поттер", "Дж. К. Ролінг")));
//   console.log(library.addBook(new Book("Володар Перснів", "Дж. Р. Р. Толкін")));
  
//   console.log(library.checkAvailability("Гаррі Поттер"));
  
//   console.log(library.borrowBook("Гаррі Поттер"));
//   console.log(library.checkAvailability("Гаррі Поттер"));
  
//   console.log(library.borrowBook("Гаррі Поттер"));
  
//   console.log(library.returnBook("Гаррі Поттер"));
//   console.log(library.checkAvailability("Гаррі Поттер"));
  

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
