class Port {
  constructor(name, country) {
    this.name = name;
    this.country = country;
    this.docks_list = [];
  }
}
  let port_list = new Array();
 
  //Додавання нового порту в колекцію
  function add_Port (name, country) {
    let port = new Port(name, country);
    port_list.push(port);
    return port;
  }

  //Редагування порту в колекції
  function edit_Port (name, country, new_name, new_country) {
    let port = find_Port(name, country);
    if(port === -1) return -1;
    port.name = new_name;
    port.country = new_country;
    return 1;
  }

  //Видалення порту з колекції
  function remove_Port (name, country) {
    let port = find_Port(name, country);
    if(port === -1) return -1;
    let index = port_list.indexOf(port);
    port_list.splice(index, 1); 
    return 1;
  }

  //Пошук одного порту в колекції
  function find_Port (name, country) {
    for (let port of port_list) {
        if (name === port.name &&
            country === port.country) { return port; }
    }
    return -1;
  }

  //
  function show_Port() {
    console.log(port_list);
  }
exports.find_Port      = find_Port;
exports.add_Port       = add_Port;
exports.remove_Port    = remove_Port;
exports.edit_Port      = edit_Port;
exports.show_Port =show_Port;

