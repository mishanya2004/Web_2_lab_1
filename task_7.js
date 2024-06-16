const mod = require('./custom_modules/module');
const { show_Port } = require('./custom_modules/Port');

// Додавання портів
let p1 = mod.add_Port("Port_1", "Test country 1");
let p2 = mod.add_Port("Port_2", "Test country 2");
let p3 = mod.add_Port("Port_3", "Test country 3");

mod.show_Port();

// Видалення портів
console.log("Видалення порту: Port_2");
mod.remove_Port("Port_2", "Test country 2");

mod.show_Port();

// Зміна порту 
console.log("Зміна порту: Port_3");
mod.edit_Port("Port_3", "Test country 3", "New port name", "New country");

mod.show_Port();

// Пошук порту
let port1 = mod.find_Port("Port_1", "Test country 1");
console.log(`Пошук порту Port_1: ${port1 !== -1 ? "знайдено" : "не знайдено"}`);
let port2 = mod.find_Port("Port_3", "Test country 3");
console.log(`Пошук порту Port_3: ${port2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Додавання пристані до порту
let dock1 = mod.addDockToPort(port1, "Dock_1");
let dock2 = mod.addDockToPort(port1, "Dock_2");
let dock3 = mod.addDockToPort(port1, "Dock_3");

// Видалення пристані
console.log("Видалення пристані: Dock_2");
mod.removeDockFromPort(port1, dock2);

// Список пристанні
mod.showDock(port1);

////////////////////////////////////////////////////////////////////////////////////

let ship1 = mod.add_Ship("Ship_1", "Test country 1", "Test tonnage 1");
let ship2 = mod.add_Ship("Ship_2", "Test country 2", "Test tonnage 2");
let ship3 = mod.add_Ship("Ship_3", "Test country 3", "Test tonnage 3");

// Видалення портів
console.log("Видалення корабля: Ship_2");
mod.remove_Ship("Ship_2", "Test country 2", "Test tonnage 2");

mod.show_Port();

// Зміна корабля
console.log("Зміна корабля: Ship_3");
mod.edit_Ship("Ship_3", "Test country 3", "Test tonnage 3", "New port name", "New country", "New tonnage");

mod.show_Port();

// Пошук корабля
let s1 = mod.find_Port("Ship_1", "Test country 1", "Test tonnage 1");
console.log(`Пошук корабля Port_1: ${port1 !== -1 ? "знайдено" : "не знайдено"}`);
let s2 = mod.find_Port("Ship_3", "Test country 3", "Test tonnage 3");
console.log(`Пошук корабля Port_3: ${port2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

//
mod.arriveShip(dock1, ship1);
mod.arriveShip(dock1, ship3);
mod.ShipsOnDock_List(dock1);

mod.departureShip(dock1, ship3);
mod.ShipsOnDock_List(dock1);