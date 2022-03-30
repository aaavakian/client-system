import ClientList from './components/clients/ClientList';
import MainContent from './components/layout/MainContent';
import SearchField from './components/search/SearchField';

function App() {
  const handleSearch = (searchText: string) => {
    alert(searchText);
  };

  return (
    <MainContent>
      <SearchField onSearch={handleSearch} />
      <ClientList />
    </MainContent>
  );
}

export default App;
