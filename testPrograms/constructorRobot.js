/*
Композиция
Реализовать конструктор объектов «Робот», которому можно динамически добавлять модули:

* move() — движение,
* shoot() — стрельба,
* repair() — починка.
Собрать разных роботов с разными возможностями.
*/
const mover = {
    move() { console.log("Move!"); }
};

const shooter = {
    shoot() { console.log("Shoot!"); }
};

const repairer = {
    repair() { console.log("Repair!"); }
};

function createTank() {
    return { ...mover, ...shooter };
}

function createHealer() {
    return { ...mover, ...repairer};
}

let tank = createTank();
tank.move();
tank.shoot();

let healer = createHealer();
healer.move();
healer.repair();
