import React, { useEffect, useState } from "react";
import axios from "axios";
import Emoji from "./components/Emoji";
import EmojiFilter from "./components/EmojiFilter";
import CategorySelector from "./components/CategorySelector";
import EmojiPagination from "./components/EmojiPagination";
import "./styles/EmojiBrowser.css";


interface EmojiData {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
}

const EmojiBrowser: React.FC = () => {
  const [emojis, setEmojis] = useState<EmojiData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All"); // Default to show all emojis
  const emojisPerPage = 10;

  useEffect(() => {
    fetchEmojis();
  }, []);

  const fetchEmojis = async () => {
    try {
      const response = await axios.get("https://emojihub.yurace.pro/api/all");
      setEmojis(response.data);
    } catch (error) {
      console.error("Error fetching emojis:", error);
    }
  };

  const totalEmojis = emojis.length;
  const totalPages = Math.ceil(totalEmojis / emojisPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when the category changes
  };

  const filteredEmojis = selectedCategory === "All"
    ? emojis
    : emojis.filter((emoji) => emoji.category.toLowerCase() === selectedCategory.toLowerCase());

    const getUniqueCategories = (): string[] => {
      const categories = emojis.map((emoji) => emoji.category);
      return ["All", ...new Set(categories)];
    };

//   const indexOfLastEmoji = currentPage * emojisPerPage;
//   const indexOfFirstEmoji = indexOfLastEmoji - emojisPerPage;
//   const currentEmojis = filteredEmojis.slice(indexOfFirstEmoji, indexOfLastEmoji);

return (
    <div className="emoji-browser">
      <header className="header">Emoji Browser</header>
      <div className="emoji-container">  
        <div className="emoji-list">
          {filteredEmojis
            .slice((currentPage - 1) * emojisPerPage, currentPage * emojisPerPage)
            .map((emoji, index) => (
              <div key={index} className="emoji-card">
                <Emoji htmlCode={emoji.htmlCode[0]} name={emoji.name} size={50} />
                <div className="emoji-details">
                  <span className="emoji-name">{emoji.name}</span>
                  <div className="emoji-category">Category: {emoji.category}</div>
                  <span className="emoji-group">Group: {emoji.group}</span>
                </div>
              </div>
            ))}
        </div>
        <div className="category-selector-container">
        <CategorySelector
          selectedCategory={selectedCategory}
          categories={getUniqueCategories()}
          onCategoryChange={handleCategoryChange}
        />  
        </div> 
      </div>
      <EmojiPagination
        currentPage={currentPage}
        emojisPerPage={emojisPerPage}
        totalEmojis={filteredEmojis.length}
        onPageChange={handlePageChange}
      />
      <footer className="footer">
        Developed by JR.
      </footer>
    </div>
  );
};

export default EmojiBrowser;
