import React from "react";
import "../styles/CategorySelector.css";

interface CategorySelectorProps {
  selectedCategory: string;
  categories: string[];
  onCategoryChange: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategory,
  categories,
  onCategoryChange,
}) => {
  return (
    <div className="category-selector">
      {categories.map((category) => (
        <div
          key={category}
          className={`category-item ${selectedCategory === category ? "selected" : ""}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;
