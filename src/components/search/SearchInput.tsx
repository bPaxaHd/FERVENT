
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';

interface SearchInputProps {
  className?: string;
  isMobile?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({ className, isMobile }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => {
    setSearchText('');
  };

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Поиск"
        value={searchText}
        onChange={handleSearchChange}
        className={`px-6 py-3 h-auto text-base bg-white border-transparent focus:border-transparent focus:ring-0 rounded-[5px] ${className}`}
      />
      {isMobile ? (
        searchText && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        )
      ) : (
        <>
          <button 
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
          >
            <Search className="w-5 h-5 text-gray-400" />
          </button>
          {searchText && (
            <button
              onClick={clearSearch}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default SearchInput;
