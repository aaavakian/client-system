import {Client} from './types';

export function formClientString(client: Client) {
  return `${client.phone} (${client.name}, посещения: ${client.visited})`;
}
