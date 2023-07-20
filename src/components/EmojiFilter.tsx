import React from "react";

interface EmojiFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const EmojiFilter: React.FC<EmojiFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="filter">
      <label htmlFor="category-select">Filter by category:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Smileys and People">Smileys and People</option>
        <option value="Animals and Nature">Animals and Nature</option>
        <option value="Food and Drink">Food and Drink</option>
        <option value="Travel and Places">Travel and Places</option>
        <option value="Activities">Activities</option>
        <option value="Objects">Objects</option>
        <option value="Symbols">Symbols</option>
        <option value="Flags">Flags</option>
      </select>
    </div>
  );
};

export default EmojiFilter;
