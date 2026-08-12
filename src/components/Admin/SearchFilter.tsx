
import React from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface SearchFilterProps {
  searchPlaceholder: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  filterOptions?: {
    value: string;
    label: string;
  }[];
  filterValue?: string;
  onFilterChange?: (value: string) => void;
  showFilter?: boolean;
  filterLabel?: string;
  showPublishedFilter?: boolean;
  publishedValue?: boolean;
  onPublishedChange?: (checked: boolean) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchPlaceholder,
  searchValue,
  onSearchChange,
  filterOptions,
  filterValue,
  onFilterChange,
  showFilter = true,
  filterLabel = "Filter by",
  showPublishedFilter = false,
  publishedValue = false,
  onPublishedChange
}) => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center mb-4">
      <div className="flex-1">
        <Input
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full"
        />
      </div>
      
      {showFilter && filterOptions && filterOptions.length > 0 && (
        <div className="w-full md:w-[200px]">
          <Select 
            value={filterValue} 
            onValueChange={onFilterChange}
          >
            <SelectTrigger>
              <SelectValue placeholder={filterLabel} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All {filterLabel.toLowerCase()}</SelectItem>
              {filterOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      
      {showPublishedFilter && (
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="published" 
            checked={publishedValue}
            onCheckedChange={onPublishedChange}
          />
          <label
            htmlFor="published"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Published (Visible to public)
          </label>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
