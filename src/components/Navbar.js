import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      
      <div className="container">
          <div className="grid-container">
            <p className="item1"><Link className="hogwarts" to="/">Hogwarts Finder</Link>
    
    
            </p>
            <p className="item2"><Link className="hogwarts" to="/characters">Characters</Link>
            </p>
            <p className="item3"><Link className="hogwarts" to="/spells">Spells</Link></p>
            <p className="item4"><Link className="hogwarts" to="/potions">Potions</Link></p>
          </div>
      </div>
      
    )
  }

  export default Navbar;