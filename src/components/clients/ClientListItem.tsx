import {formClientString} from './helpers';
import type {Client} from './types';

type Props = {
  client: Client;
};

const ClientListItem = ({client}: Props) => {
  const handleNewVisit = () => {
    console.log(`New visit of ${client.name}`);
  };

  return (
    <div className="flex p-4 not-last:border-b-2">
      <div className="grow">
        <p>{formClientString(client)}</p>
      </div>
      <button
        onClick={handleNewVisit}
        className="
          px-2 py-1 rounded-sm
          text-sm text-white bg-cyan-600
          duration-150 hover:bg-cyan-700
        "
      >
        отметить посещение
      </button>
    </div>
  );
};

export default ClientListItem;
