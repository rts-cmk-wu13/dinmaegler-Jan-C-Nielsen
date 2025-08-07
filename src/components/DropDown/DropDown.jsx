 <div 
            className="header__navigation-dropdown" 
            onClick={() => setIsDropdownOpen(prev => !prev)}
          >
            <span className="header__navigation-item">Shop</span>
            {isDropdownOpen && (
              <div className="dropdown__menu">
                <nav className="dropdown">
                  <h2 className="dropdown__title">Browse Categories</h2>
                  <ul className="dropdown__content">
                    {categories.map((item, index) => (
                      <li key={index}>
                        <Link to="/list">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </div>