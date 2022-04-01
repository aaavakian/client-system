import React, {useState} from 'react';
import {BiSearch} from 'react-icons/bi';

type Props = {
  onSearch?: (searchText: string) => void;
};

const SearchField = ({onSearch}: Props) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);

    // Reset when empty
    if (!value) {
      onSearch?.(value);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(searchText);
  };

  return (
    <form
      className="
        flex flex-row w-full bg-white overflow-hidden
        border-2 border-gray-200 rounded-md
        duration-100 focus-within:border-gray-300 focus-within:shadow-md
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
          border-inherit border-l-2
          duration-100 hover:bg-gray-100
        "
      >
        <BiSearch className="text-lg" />
      </button>
    </form>
  );
};

export default SearchField;
