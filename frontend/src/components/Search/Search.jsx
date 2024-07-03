import React from 'react'
import styles from './SearchStyles.module.css';
import searchIcon from '../../assets/search-icon.svg';

function Search({setCountry}) {

  const onCountryChange = (e) =>{
    console.log(e.target.value);
    setCountry(e.target.value);
  }
  return (
    <>
      <div className={styles.container}>
        <input type="text" className={styles.search} placeholder="Search your desired Country" onChange={onCountryChange} />
        <img src={searchIcon} alt="searchicon" />
      </div>
    </>
  )
}

export default Search
