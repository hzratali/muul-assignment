
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BarChartComponent from './components/BarChart';
import PieChartComponent from './components/PieChart';
import LineChartComponent from './components/LineChart';
import Dashboard from './routes/Dashboard';
import './App.css'; // Ensure you import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">My App</Link>
      <ul className="navbar-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/bar-chart">Bar Chart</Link></li>
        <li><Link to="/pie-chart">Pie Chart</Link></li>
        <li><Link to="/line-chart">Line Chart</Link></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/bar-chart" component={BarChartComponent} />
          <Route path="/pie-chart" component={PieChartComponent} />
          <Route path="/line-chart" component={LineChartComponent} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
