import { createCLI } from "./cli.js";
import { Order } from "./entities/Order.js";
import { User } from "./entities/User.js";

let cli = createCLI(new User());

cli();

// let user1 = new User("Anna");

// let order1 = user1.createOrder("egg");
// order1.pay();
// user1.showOrders();
