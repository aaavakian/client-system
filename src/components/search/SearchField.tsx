import React, {useState} from 'react';
import {BiSearch} from 'react-icons/bi';

type SearchFieldProps = {
  onSearch?: (searchText: string) => void;
};

const SearchField = ({onSearch}: SearchFieldProps) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(searchText);
  };

  return (
    <form
      className="
        flex flex-row bg-white overflow-hidden
        border-2 border-gray-200 rounded-md
        focus-within:border-gray-300 focus-within:shadow-md
      "
      onSubmit={handleSearch}
    >
      <input
        className="
          grow px-4 py-2 bg-transparent text-teal-900
          focus:outline-0
        "
        placeholder="Данные клиента..."
        value={searchText}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="
        bg-white text-teal-900 px-3
          border-inherit border-l-2 hover:bg-gray-100
        "
      >
        <BiSearch className="text-lg" />
      </button>
    </form>
  );
};

export default SearchField;
