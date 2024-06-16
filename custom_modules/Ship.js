class Ship {
    constructor(name, country, tonnage) {
      this.name = name;
      this.country = country;
      this.tonnage = tonnage;
    }
}

let ships_list = new Array();

//Додавання корабля в колекцію
function add_Ship(name, country, tonnage) {
let ship = new Ship(name, country, tonnage);
ships_list.push(ship);
return ship;
}

//Редагування корабля в колекції
function edit_Ship (name, country, tonnage, new_name, new_country, new_tonnage) {
  let ship = find_Ship(name, country, tonnage);
  if (ship === -1) { return -1; }
  ship.name = new_name;
  ship.country = new_country;
  ship.tonnage = new_tonnage;
  return 1;
}

//Видалення корабля з колекції
function remove_Ship (name, country, tonnage) {
  let ship = find_Ship(name, country, tonnage);
  if (ship === -1) { return -1; }
  let id = ships_list.indexOf(ship);
  ships_list.splice(id, 1);
  return 1;
}

//Пошук одного корабля в колекції
function find_Ship (name, country, tonnage) {
  for (let id = 0; id < ships_list.length; id++) {
      let ship = ships_list[id];
      if (name === ship.name && country === ship.country && tonnage === ship.tonnage) 
      { 
        return ship; 
      }
  }
  return -1;
}

exports.add_Ship = add_Ship;
exports.edit_Ship = edit_Ship;
exports.remove_Ship = remove_Ship;
exports.find_Ship = find_Ship;