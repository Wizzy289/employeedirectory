import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
    const handleSearch = (e) =>
    {
        onSearch(e.target.value);
    };
    return (
        <div className='search'>
            <input type="text" name="search" id="search"
                placeholder='Search Employee by name...'
                onChange={handleSearch} />
        </div>
    )
    }

export default SearchBar;
