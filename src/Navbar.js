import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/line-chart">Line Chart</Link>
      <Link to="/bar-chart">Bar Chart</Link>
      <Link to="/pie-chart">Pie Chart</Link>
    </nav>
  );
}

export default Navbar;
