class ShipOnDock {
  constructor(dock, ship) {
    this.dock = dock;
    this.ship = ship;
    dock.ships_list.push(ship);
    this.ships_list = [];
  }
}

//Прибуття корабля дo пристані
function arriveShip(dock, ship){
  new ShipOnDock(dock, ship);
}

//Відбуття корабля від пристані
function departureShip(dock, ship) {
  let id = dock.ships_list.indexOf(ship);
    if (id===-1) return -1;
    dock.ships_list.splice(id, 1);
    return 1;
}


//Пошук усіх кораблів на пристані
function ShipsOnDock_List (dock) {
  console.log("\n" + `Список усіх кораблів нв пристані: ${dock.name}:`);
  for (let id = 0; id < dock.ships_list.length; id++) {
      let ship = dock.ships_list[id];
      console.log(`\tНазва корабля: ${ship.name}, Країні корабля: ${ship.country}, Кількість тоннажу: ${ship.tonnage}`);
  }
  console.log();
  return dock.ships_list;
}

exports.arriveShip = arriveShip;
exports.departureShip = departureShip;
exports.ShipsOnDock_List = ShipsOnDock_List;