import { useState } from "react";
import Sidebar from "./components/Sidebar";
import CompanyList from "./components/CompanyList";
import CompanyForm from "./components/CompanyForm";

export default function App() {
  const [activePage, setActivePage] = useState("list");
  const [companies, setCompanies] = useState([]);
  const [editCompany, setEditCompany] = useState(null);

  // Create or Update
  const addOrUpdateCompany = (company) => {
    if (company.id) {
      setCompanies(
        companies.map((c) => (c.id === company.id ? { ...c, ...company } : c))
      );
    } else {
      setCompanies([
        ...companies,
        { ...company, id: Date.now(), createdAt: new Date().toISOString() },
      ]);
    }
    setActivePage("list");
    setEditCompany(null);
    alert("Company details saved successfully ✅");
  };

  // Delete
  const deleteCompany = (id) => {
    if (window.confirm("Are you sure you want to delete this company?")) {
      setCompanies(companies.filter((c) => c.id !== id));
    }
  };

  // Edit
  const startEdit = (company) => {
    setEditCompany(company);
    setActivePage("new");
  };

  return (
    <div className="flex h-screen">
      <Sidebar setActivePage={setActivePage} />
      <div className="flex-1 p-6 overflow-y-auto">
        {activePage === "list" ? (
          <CompanyList
            companies={companies}
            deleteCompany={deleteCompany}
            startEdit={startEdit}
          />
        ) : (
          <CompanyForm
            addOrUpdateCompany={addOrUpdateCompany}
            editCompany={editCompany}
          />
        )}
      </div>
    </div>
  );
}




