import { useEffect, useState } from 'react';
import './index.css';

const FilterContainer = () => {
  const [info, setInfo] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [items, setItems] = useState([]); // Assuming you have a list of items to filter
  const url = 'https://api.furrl.in/api/v2/listing/getListingFilters';

  const getData = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ id: "#HomeHunts", entity: "vibe" })
    }
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      const data1 = data.data.getListingFilters.easyFilters;
      setInfo(data1);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const filterItems = (filter) => {
    setSelectedFilter(filter);
    // Implement the actual filtering logic based on your items
    // Assuming you have a list of items in the state 'items'
    let filteredItems;
    if (filter === 'All') {
      filteredItems = items; // Show all items if 'All' is selected
    } else {
      filteredItems = items.filter(item => item.category === filter); // Adjust filtering criteria as per your item structure
    }
    setItems(filteredItems); // Update the items state with the filtered items
  };

  return (
    <div className=''>
      <div className='filter-container'>
        <div className='filter1'>
          <button className={`button link ${selectedFilter === 'All' ? 'active' : ''}`} onClick={() => filterItems('All')}>
            <span className=''>All</span>
          </button>
        </div>
        {info.map(each => (
          <div className='filter' key={each.uniqueId}>
            <div className={`button link ${selectedFilter === each.name ? 'active' : ''}`} onClick={() => filterItems(each.name)}>
              <span className=''>{each.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='items-container'>
        {items.map(item => (
          <div key={item.id} className='item'>
            {/* Render your item here */}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterContainer;
