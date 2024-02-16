import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Perform the search using the searchQuery state
    // You can implement your search logic or API call here
    console.log('Searching for:', searchQuery);

    // For now, let's assume we are redirecting to Google search
    window.location.href = `https://www.google.com/search?q=${searchQuery}`;
  };

  const handleChange = (event) => {
    // Update the searchQuery state as the user types
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    // Trigger the search if Enter key is pressed
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search on Google"
        value={searchQuery}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        style={styles.input}
      />
      
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '600px', // Adjust as needed
    margin: '0 auto',
    padding: '10px',
  },
  input: {
    flex: 1,
    padding: '8px',
    marginRight: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    outline: 'none',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#4285f4',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default SearchBar;
