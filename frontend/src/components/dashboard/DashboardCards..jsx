import { useEffect, useState } from "react";
import { getDashboardStats } from "../../services/dashboardService";
import "../../styles/dashboard.css";

export default function DashboardCards() {

  const [stats, setStats] = useState({
    todaySales: 0,
    revenue: 0,
    pumps: 0,
    fuelRemaining: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const data = await getDashboardStats();

      setStats(data);

    } catch (error) {
      console.error(error);
    }
  }

  return (

    <div className="cards-grid">

      <div className="dashboard-card">
        <h4>Today's Sales</h4>
        <h2>₦{stats.todaySales.toLocaleString()}</h2>
      </div>

      <div className="dashboard-card">
        <h4>Total Revenue</h4>
        <h2>₦{stats.revenue.toLocaleString()}</h2>
      </div>

      <div className="dashboard-card">
        <h4>Active Pumps</h4>
        <h2>{stats.pumps}</h2>
      </div>

      <div className="dashboard-card">
        <h4>Fuel Remaining</h4>
        <h2>{stats.fuelRemaining} L</h2>
      </div>

    </div>

  );

}