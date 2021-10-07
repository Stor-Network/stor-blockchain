export const service_wallet = 'stor_wallet';
export const service_full_node = 'stor_full_node';
export const service_farmer = 'stor_farmer';
export const service_harvester = 'stor_harvester';
export const service_simulator = 'stor_full_node_simulator';
export const service_daemon = 'daemon';
export const service_plotter = 'stor plots create';

// Corresponds with outbound_message.py NodeTypes
export const service_connection_types = {
  1: 'Full Node',
  2: 'Harvester',
  3: 'Farmer',
  4: 'Timelord',
  5: 'Introducer',
  6: 'Wallet',
  7: 'Plotter',
};
