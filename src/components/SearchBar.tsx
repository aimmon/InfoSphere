import React from 'react';
import { Search, Mic } from 'lucide-react';

interface SearchBarProps {
  onSearch: (term: string) => void;
  onVoiceSearch: () => void;
  isListening: boolean;
}

const SearchBar = ({ onSearch, onVoiceSearch, isListening }: SearchBarProps) => {
  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search companies by name, location, or industry..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <button
          onClick={onVoiceSearch}
          className={`p-3 rounded-xl border ${
            isListening 
              ? 'bg-blue-50 border-blue-200 text-blue-600' 
              : 'border-gray-200 text-gray-500 hover:border-gray-300'
          }`}
        >
          <Mic className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;