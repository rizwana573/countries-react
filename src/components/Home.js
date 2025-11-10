import {useState} from "react"
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'


export default function Home() {
      const [query, setQuery] = useState('');
      const [region, setRegion] = useState('');
  return (
    <div>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery}/>
          <SelectMenu setRegion={setRegion} setQuery={setQuery}/>
        </div>
        {query==="unmount" ? "" : <CountriesList query={query} region= {region}/>}

    </div>
  );
}