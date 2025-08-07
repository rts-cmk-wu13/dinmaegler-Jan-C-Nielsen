 <form onSubmit={handleSearch} className="header__search">
          <div className="header__search-wrapper">
            <input
              type="text"
              placeholder="Search product..."
              className="header__search-input"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <FaSearch className="header__search-icon" />
          </div>
        </form>