import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import './index.css';

const Bookmark = () => {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarkedItems(bookmarks);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedBookmarks = bookmarkedItems.filter((_, index) => index !== indexToDelete);
    setBookmarkedItems(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return (
    <div>
      <h2>Bookmarked Items</h2>
      {bookmarkedItems.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        <div className="card-div">
          {bookmarkedItems.map((item, index) => (
            <div className="card1" key={index}>
              <img src={item.images[0].src} alt={item.title} className="image-size" />
              <h3>{item.title}</h3>
              <p>{item.vendor}</p>
              <p>Rs {item.price.value}</p>
              <button onClick={() => handleDelete(index)} className="delete-button">
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmark;
