/*
CLI (консольное меню):
    Создать заказ — create
    Оплатить заказ — pay
    Отправить заказ — ship
    Доставить заказ — deliver
    Посмотреть историю заказов — history
    Отменить заказ — cancel
*/
import readlineSync from "readline-sync";
// const readlineSync = require("readline-sync");

const startQuestion = `Введите команду: `;

const helpList = `
create — Создать заказ
pay — Оплатить заказ
ship — Отправить заказ 
deliver — Доставить заказ
cancel — Отменить заказ
return — Возврат товара
refund — возврат средств

show — 
history — Посмотреть историю заказов

help — показать команды
exit — завершить программу
`;

const errorTitle = `Ошибка! Введите название заказа.`;

// function checkTitle() {
// 	if (!title) {
// 		console.log(errorTitle);
// 		return false;
// 	}
// 	return true;
// }

function createCLI(user) {
	return () => {
		while (command != "exit") {
			//exit — завершить программу

			var command = readlineSync.question(startQuestion);
			let splCommand = command.split(" ");
			let title = splCommand[1];
			let order = user.getOrderByTitle(title);

			switch (splCommand[0]) {
				case "create": // create — Создать заказ
					console.log(user.createOrder(title, errorTitle));
					break;
				case "pay": // pay — Оплатить заказ
					order.pay(title, errorTitle);
					break;
				case "ship": // ship — Отправить заказ
					order.ship(title, errorTitle);
					break;
				case "deliver": // deliver — Доставить заказ
					order.deliver(title, errorTitle);
					break;
				case "cancel": // cancel — Отменить заказ
					order.cancel(title, errorTitle);
					break;
				case "return": // return — Возврат товара
					order.return(title, errorTitle);
					break;
				case "refund": // refund — возврат средств
					order.refund(title, errorTitle);
					break;
				case "history": // history — Посмотреть историю заказов
					order.getHistory(title, errorTitle);
					break;
				case "show":
					user.showOrders();
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
	};
}

export { createCLI };
