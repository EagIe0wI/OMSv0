import { v4 as uuidv4 } from "uuid"; // npm install uuidv4
import { Created } from "./State.js";

/*
Заказ (Order)
    id
    userId (создатель заказа)
    state (объект состояния, например Created, Paid, Shipped)
    history (журнал всех переходов состояний с датой/временем)

Действия заказа:
    pay() — оплата заказа (снимает деньги с баланса пользователя)
    ship() — отправка заказа
    deliver() — доставка заказа
    cancel() — отмена заказа
    return() — возврат товара (опционально)
    refund() — возврат денег клиенту (опционально)

История заказов:
    Каждое действие добавляет запись в history:
    { state: "Paid", action: "pay", timestamp: "2025-09-02 18:30" }

*/

function generateDataTime(date) {
	return date.toISOString().replace("T", " ").substring(0, 16);
}

export class Order {
	constructor(userId, title) {
		this.id = uuidv4();
		this.userId = userId;
		this.title = title;
		this.state = new Created();
		this.history = [
			{ state: "Created", action: "craete", timestamp: generateDataTime(new Date()) },
		];
	}

	setState(state) {
		this.state = state;
	}

	getData() {
		return this.id, this.userId, this.title, this.state, this.history;
	}
	getTitle() {
		return this.title;
	}
	getHistory(title, error) {
		if (!title) return error;
		return this.history;
	}

	check(func, action) {
		let pastState = this.state.constructor.name;
		func(this);
		if (this.state.constructor.name == pastState) return;
		this.history.push({
			state: this.state.constructor.name,
			action: func.name || action,
			timestamp: generateDataTime(new Date()),
		});
	}

	pay(title, error) {
		// — оплата заказа (снимает деньги с баланса пользователя)
		if (!title) return error;
		this.check(this.state.pay, "pay");
	}
	ship(title, error) {
		// — отправка заказа
		if (!title) return error;
		this.check(this.state.ship, "ship");
	}
	deliver(title, error) {
		// — доставка заказа
		if (!title) return error;
		this.check(this.state.deliver, "deliver");
	}
	cancel(title, error) {
		// — отмена заказа
		if (!title) return error;
		this.check(this.state.cancel, "cancel");
	}
	return(title, error) {
		if (!title) return error;
		// — возврат товара (опционально)
		this.check(this.state.return, "return");
	}
	refund(title, error) {
		if (!title) return error;
		// — возврат денег клиенту (опционально)
		this.check(this.state.refund, "refund");
	}
}
