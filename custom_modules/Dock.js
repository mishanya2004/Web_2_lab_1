class Dock {
    constructor(dock_name, id) {
      this.dock_name = dock_name;
      this.id = id;
      this.ships_list = [];
    }
}

//Додавання пристані до порту
function  addDockToPort(port, dock_name) {
  let dock_arr = port.docks_list;
  let dock = new Dock(dock_name, (dock_arr.length) ? dock_arr[dock_arr.length-1].id + 1 : 1);
  port.docks_list.push(dock);
  return dock;
}

//Видалення пристані із порту
function removeDockFromPort(port, dock) {
  let dock_arr = port.docks_list;
    if(dock.id>dock_arr[dock_arr.length-1].id) return -1;
    dock_arr.splice(dock_arr.indexOf(dock), 1);
    return 1;
}

function showDock(port){
  console.log(port.docks_list);
}

exports.addDockToPort = addDockToPort;
exports.removeDockFromPort = removeDockFromPort;
exports.showDock = showDock;