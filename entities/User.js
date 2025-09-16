import { v4 as uuidv4 } from "uuid"; // npm install uuidv4
import { Order } from "./Order.js";

/*
Пользователь (User)
    id
    name
    balance (сумма на счёте, для эмуляции платежей)
*/

export class User {
	constructor(name) {
		this.id = uuidv4();
		this.name = name;
		// this.balance = balance;
		this.orders = {};
	}

	// Вывод ID пользователя
	getId() {
		return this.id;
	}
	// Вывод данных о пользователе
	getData() {
		return `${this.id}, ${this.name}, ${this.balance}`;
	}

	// Создание заказа
	createOrder(title, error) {
		if (!title) return error;
		let order = new Order(this.id, title);
		this.orders[order.id] = order;
		return order;
	}

	// Вывод данных о заказах построчно в консоль
	getOrders() {
		Object.values(this.orders).forEach((order) => {
			console.log(order);
		});
	}
	// Вывод данных таблицей в консоль
	showOrders() {
		console.table(this.orders);
	}
	// Возвращает название заказа
	getOrderByTitle(title) {
		return Object.values(this.orders).find((order) => order.title == title);
	}
}
