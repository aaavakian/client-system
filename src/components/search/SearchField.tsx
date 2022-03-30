import {useState} from 'react';

type SearchFieldProps = {
  onSearch?: (searchText: string) => void;
};

const SearchField = ({onSearch}: SearchFieldProps) => {
  const [searchText, setSearchText] = useState('');

  return (
    <form onSubmit={() => onSearch?.(searchText)}>
      <input
        className="
          w-full px-4 py-2 rounded-md
          text-teal-900 border-2 border-gray-200
          focus:outline-0 focus:border-gray-300 focus:shadow-md
        "
        placeholder="Данные клиента..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchField;
