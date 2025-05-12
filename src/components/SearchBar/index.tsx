import { useState } from "react";
import { FiSearch } from "react-icons/fi";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full mb-6">
      <input
        type="text"
        placeholder="Cari produk..."
        value={query}
        onChange={handleChange}
        className="w-full p-2 pr-10 border focus:outline-none border-gray-300 rounded-md"
      />
      <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchBar;
