import React from "react";
import twemoji from "twemoji";

interface EmojiProps {
  htmlCode: string;
  name: string;
  size?: number;
}

const Emoji: React.FC<EmojiProps> = ({ htmlCode, name, size = 24 }) => {
  const getEmojiImageUrl = (unicode: string): string => {
    const twemojiUrl = twemoji.parse(unicode, {
      folder: "svg",
      ext: ".svg",
    });
    return twemojiUrl;
  };

  return (
    <span
      className="emoji"
      style={{ fontSize: `${size}px` }}
      dangerouslySetInnerHTML={{
        __html: getEmojiImageUrl(htmlCode),
      }}
      aria-label={name}
    />
  );
};

export default Emoji;
