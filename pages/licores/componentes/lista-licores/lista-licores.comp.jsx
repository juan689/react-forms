import React from 'react';
import LicoresCategoryRow from '../licores-category-row/licores-category-row.comp';
import LicoresTable from '../licores-table/licores-table.comp';
import SearchBar from '../search-bar/search-bar.comp';

import './lista-licores.style.css';

const ListaLicores = (props) => {
    return (
        
        <div className="lista-licores-container">
  
            <SearchBar/>
            <LicoresTable licoresListas={props.licoresListas}/>
          
        </div>

        

    ); 
}

export default ListaLicores;