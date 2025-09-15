/*
State
Написать модель «Банковский счёт»:

* состояния: Active, Blocked, Closed,
* в Active можно пополнять и снимать, replenish and write off
* в Blocked операции запрещены,
* в Closed любые действия игнорируются.
Проверить переходы между состояниями.
*/

class Active {
	activate() {
		console.log("Счет уже активирован");
	}
	block() {
		console.log("Счет заблокирован");
		bankAccount.setState(new Blocked());
	}
	close() {
		console.log("Счет закрыт");
		bankAccount.setState(new Closed());
	}
	replenish() {
		console.log("Счет пополнен");
	}
	writeOff() {
		console.log("Списание выполнено");
	}
}

class Blocked {
	activate() {
		console.log("Счет активирован");
		bankAccount.setState(new Active());
	}
	block() {
		console.log("Счет уже заблокирован");
	}
	close() {
		console.log("Счерт закрыт");
		bankAccount.setState(new Closed());
	}
	replenish() {
		console.log("Пополнение не может быть выполнено, счет заблокирован");
	}
	writeOff() {
		console.log("Списание не может быть выполнено, счет заблокирован");
	}
}

class Closed {
	activate() {
		console.log("Счет не может быть активирован, счет не найден");
	}
	block() {
		console.log("Счет не может быть заблокирован, счет не найден");
	}
	close() {
		console.log("Счет не может быть закрыт, счет не найден");
	}
	replenish() {
		console.log("Пополнение не может быть выполнено, счет не найден");
	}
	writeOff() {
		console.log("Списание не может быть выполнено, счет не найден");
	}
}

class BankAccount {
	constructor() {
		this.state = new Active();
	}

	setState(state) {
		this.state = state;
	}

	activate() {
		this.state.activate(this);
	}
	block() {
		this.state.block(this);
	}
	close() {
		this.state.close(this);
	}
	replenish() {
		this.state.replenish(this);
	}
	writeOff() {
		this.state.writeOff(this);
	}
}

const bankAccount = new BankAccount();

/* --- Использование ---
bankAccount.activate(); // Счет создан
bankAccount.writeOff(); // Списание выполнено
bankAccount.block();    // Счет заблокирован
bankAccount.replenish();// Пополнение не может быть выполнено, счет заблокирован
bankAccount.close();    // Счет закрыт
bankAccount.writeOff(); // Списание не может быть выполнено, счет не найден
*/

// CLI

const readlineSync = require("readline-sync");

const helpList = `
activate — активировать счет
block — блокировать счет
close — закрыть счет
replenish — пополнить на счет
writeOff — списать со счета

help — показать команды
exit — завершить программу
`;

const startQ = `Введите команду: `;

while (command != "exit") {
	//exit — завершить программу
	var command = readlineSync.question(startQ);

	switch (command) {
		case "activate": // activate — активировать счет
			bankAccount.activate();
			break;
		case "block": // block — блокировать счет
			bankAccount.block();
			break;
		case "close": // close — закрыть счет
			bankAccount.close();
			break;
		case "replenish": // replenish — пополнить на счет
			bankAccount.replenish();
			break;
		case "writeOff": // writeOff — списать со счета
			bankAccount.writeOff();
			break;
		case "help": // help — показать команды
			console.log(helpList);
			break;
		case "exit": // exit — завершить программу
			break;
		default:
			console.log("Неизвесная команда");
	}
}
