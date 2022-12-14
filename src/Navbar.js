export default function Navbar() {
    return <nav className = "nav">
        <div> 
        <img src ={require("./images/popcorn.png")}  alt="Logo" height="80"/>
        </div>
        <input 
				aria-label="sno" 
				name="sno" 
				type="text"
                placeholder="Search"
				data-testid="Searchbar"
			/>
        <ul className="nav-ul">
            <li className="nav-li">
                <a href='/#'>Movies</a>
                </li>
                <li>
                <a href='/#'>Watchlist</a>
                </li>
                <li>
                <a href="/cart">Cart</a>
            </li>
        </ul>
    </nav>
}