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
					if (!title) {
						console.log(errorTitle);
						break;
					}
					user.createOrder(title);
					break;
				case "pay": // pay — Оплатить заказ
					if (!title) {
						console.log(errorTitle);
						break;
					}
					order.pay();
					break;
				case "ship": // ship — Отправить заказ
					if (!title) {
						console.log(errorTitle);
						break;
					}
					order.ship();
					break;
				case "deliver": // deliver — Доставить заказ
					if (!title) {
						console.log(errorTitle);
						break;
					}
					order.deliver();
					break;
				case "cancel": // cancel — Отменить заказ
					if (!title) {
						console.log(errorTitle);
						break;
					}
					order.cancel();
					break;
				case "return": // return — Возврат товара
					if (!title) {
						console.log(errorTitle);
						break;
					}
					order.return();
					break;
				case "refund": // refund — возврат средств
					if (!title) {
						console.log(errorTitle);
						break;
					}
					order.refund();
					break;
				case "history": // history — Посмотреть историю заказов
					if (!title) {
						console.log(errorTitle);
						break;
					}
					order.getHistory();
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
