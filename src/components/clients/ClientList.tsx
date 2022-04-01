import ClientListItem from './ClientListItem';
import {Client} from './types';

type ClientListProps = {
  clients?: Client[];
};

const ClientList = ({clients}: ClientListProps) => {
  return (
    <div className="flex flex-col bg-white rounded-md shadow-md">
      {clients?.length ? (
        clients.map((client) => (
          <ClientListItem key={client.phone} client={client} />
        ))
      ) : (
        <p className="p-4">Нет данных</p>
      )}
    </div>
  );
};

export default ClientList;
