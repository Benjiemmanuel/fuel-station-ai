import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

import "../styles/layout.css";

export default function AdminLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Topbar />

        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}