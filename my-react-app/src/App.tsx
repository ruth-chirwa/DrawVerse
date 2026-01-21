import "./styles/App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
      <nav style={{ margin: 10 , color: 'blue' }}>
        <li><Link to="/">Home</Link> | <Link to="/about">About</Link></li>
      </nav>
      <hr />
      {/* Child routes will render here */}
      <Outlet />
    </div>
    </>
  );
}

export default App;