import {useState} from 'react';

import ClientList from './components/clients/ClientList';
import MainContent from './components/layout/MainContent';
import SearchField from './components/search/SearchField';
import {Client} from './components/clients/types';
import {filterClients} from './utils';

const dummyClients: Client[] = [
  {
    name: 'Mister Alex',
    phone: '+7 (926) 991-01-32',
    visited: 3,
  },
  {
    name: 'Miss Jays',
    phone: '+7 (916) 123-93-21',
    visited: 8,
  },
  {
    name: 'Senior Pomidor',
    phone: '+7 (916) 923-13-00',
    visited: 10,
  },
];

function App() {
  const [filter, setFilter] = useState('');

  return (
    <MainContent>
      <SearchField onSearch={setFilter} />
      <ClientList clients={filterClients(dummyClients, filter)} />
    </MainContent>
  );
}

export default App;
