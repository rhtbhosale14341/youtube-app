import React, { useState } from 'react';


const SearchBar = ({ onMyFormSubmit }) => {
  const [term, setTerm] = useState('');



  const onFormSubmit = (event) => {
    event.preventDefault();
    onMyFormSubmit(term);
  }

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Search Video</label>
          <input type="text" value={term} onChange={(event) => setTerm(event.target.value)} />
        </div>
      </form>
    </div>
  )
}

export default SearchBar;
