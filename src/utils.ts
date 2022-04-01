import {Client} from './components/clients/types';

const removePhoneLiterals = (phone: string) => phone.replace(/[\s+\-()]/g, '');

const toLowerCase = (clientString: string) => clientString.toLowerCase();

const cleanClientPhone: (client: Client) => Client = (client) => {
  // Replace all literals inside the phone number
  return {...client, phone: removePhoneLiterals(client.phone)};
};

const combineStrings = (client: Client) => {
  return `${client.name} ${client.phone} ${client.visited}`;
};

const includesFilterText = (filterText: string) => {
  return (clientString: string) => clientString.includes(filterText);
};

export function filterClients(clients: Client[], filterText: string) {
  if (!filterText) {
    return clients;
  }

  const cleanFilterText = toLowerCase(removePhoneLiterals(filterText));
  const includesFilter = includesFilterText(cleanFilterText);

  return clients.filter((client) => {
    const clientString = toLowerCase(combineStrings(cleanClientPhone(client)));
    return includesFilter(clientString);
  });
}
