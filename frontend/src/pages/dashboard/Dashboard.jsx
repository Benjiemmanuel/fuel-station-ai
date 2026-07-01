import "../../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back, Administrator</p>
      </div>

      {/* Statistics */}

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Today's Sales</h3>
          <h2>₦0.00</h2>
        </div>

        <div className="stat-card">
          <h3>Total Pumps</h3>
          <h2>0</h2>
        </div>

        <div className="stat-card">
          <h3>Total Tanks</h3>
          <h2>0</h2>
        </div>

        <div className="stat-card">
          <h3>Fuel Remaining</h3>
          <h2>0 Litres</h2>
        </div>

      </div>

      {/* Bottom */}

      <div className="dashboard-content">

        <div className="sales-card">

          <h2>Recent Sales</h2>

          <table>

            <thead>

              <tr>
                <th>Receipt</th>
                <th>Fuel</th>
                <th>Litres</th>
                <th>Amount</th>
              </tr>

            </thead>

            <tbody>

              <tr>

                <td colspan="4">
                  No Sales Yet
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}