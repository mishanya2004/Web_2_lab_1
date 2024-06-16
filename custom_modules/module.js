const port = require("./Port");
const ship   = require("./Ship");
const dock  = require("./Dock");
const shipondock = require("./ShipOnDock");

// Доступні операції з портом 
exports.find_Port      = port.find_Port;
exports.add_Port       = port.add_Port;
exports.remove_Port    = port.remove_Port;
exports.edit_Port      = port.edit_Port;
exports.show_Port = port.show_Port;

// Доступні операції з пристаннями
exports.addDockToPort = dock.addDockToPort;
exports.removeDockFromPort = dock.removeDockFromPort;
exports.showDock = dock.showDock;

// Доступні операції з кораблями
exports.add_Ship = ship.add_Ship;
exports.edit_Ship = ship.edit_Ship;
exports.remove_Ship = ship.remove_Ship;
exports.find_Ship = ship.find_Ship;

// Доступні операції з кораблями у пристанні
exports.arriveShip = shipondock.arriveShip;
exports.departureShip = shipondock.departureShip;
exports.ShipsOnDock_List = shipondock.ShipsOnDock_List;
