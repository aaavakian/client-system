import ClientList from './components/clients/ClientList';
import MainContent from './components/layout/MainContent';
import SearchField from './components/search/SearchField';

function App() {
  return (
    <MainContent>
      <SearchField />
      <ClientList />
    </MainContent>
  );
}

export default App;
