import React from 'react';

export default function Search() {
  return (
    <div>
      <h4>Search Word</h4>
      <form>
        <select id="input_language" name="Input Language">
          <option value="nepali">Nepali</option>
          <option value="english">English</option>
          <option value="rai">Rai</option>
          <option value="limbu">Limbu</option>
        </select>


        <select id="Convert_language" name="Convert Language">
          <option value="all">All</option>
          <option value="nepali">Nepali</option>
          <option value="english">English</option>
          <option value="rai">Rai</option>
          <option value="limbu">Limbu</option>
        </select>
        <input type="text" placeholder="Search Word"></input>
        <button id="searchBtn">Search</button>
      </form>
    </div>
  );
}
