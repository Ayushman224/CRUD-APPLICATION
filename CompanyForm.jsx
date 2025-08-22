import { useState, useEffect } from "react";
import CompanyInfo from "./CompanyInfo";
import EmployeeForm from "./EmployeeForm";

export default function CompanyForm({ addOrUpdateCompany, editCompany }) {
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (editCompany) {
      setCompanyName(editCompany.companyName);
      setAddress(editCompany.address || "");
      setEmail(editCompany.email);
      setPhoneNumber(editCompany.phoneNumber);
      setEmployees(editCompany.empInfo || []);
    }
  }, [editCompany]);

  const addEmployee = () => {
    setEmployees([
      ...employees,
      {
        empName: "",
        designation: "",
        joinDate: "",
        email: "",
        phoneNumber: "",
        skillInfo: [],
        educationInfo: [],
      },
    ]);
  };

  const updateEmployee = (index, updated) => {
    const newEmployees = [...employees];
    newEmployees[index] = updated;
    setEmployees(newEmployees);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companyName || !email || !phoneNumber) {
      alert("Please fill all required fields");
      return;
    }
    const data = {
      id: editCompany ? editCompany.id : null,
      companyName,
      address,
      email,
      phoneNumber,
      empInfo: employees,
    };
    console.log("Form JSON:", JSON.stringify(data, null, 2));
    addOrUpdateCompany(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">
        {editCompany ? "Edit Company" : "New Company"}
      </h1>

      <CompanyInfo
        companyName={companyName}
        setCompanyName={setCompanyName}
        address={address}
        setAddress={setAddress}
        email={email}
        setEmail={setEmail}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Employees</h2>
        {employees.map((emp, i) => (
          <EmployeeForm
            key={i}
            employee={emp}
            onChange={(updated) => updateEmployee(i, updated)}
          />
        ))}
        <button
          type="button"
          onClick={addEmployee}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          + Add Employee
        </button>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        {editCompany ? "Update Company" : "Save Company"}
      </button>
    </form>
  );
}
