import ClientListItem from './ClientListItem';
import {Client} from './types';

const dummyClients: Client[] = [
  {
    name: 'Mister Alex',
    phone: '+79999910132',
    visited: 3,
  },
  {
    name: 'Miss Jays',
    phone: '+71231239321',
    visited: 8,
  },
  {
    name: 'Senior Pomidor',
    phone: '+71319231300',
    visited: 10,
  },
];

const ClientList = () => {
  return (
    <div className="flex flex-col bg-white rounded-md shadow-md">
      {dummyClients.map(client => (
        <ClientListItem key={client.phone} client={client} />
      ))}
    </div>
  );
};

export default ClientList;
