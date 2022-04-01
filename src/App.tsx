import {useState} from 'react';

import ClientList from './components/clients/ClientList';
import MainContent from './components/layout/MainContent';
import SearchField from './components/search/SearchField';
import {Client} from './components/clients/types';
import {filterClients} from './utils';

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
