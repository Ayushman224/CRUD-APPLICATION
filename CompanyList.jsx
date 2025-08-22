import CompanyRow from "./CompanyRow";

export default function CompanyList({ companies, deleteCompany, startEdit }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Company List</h1>
      <table className="w-full border border-gray-200 shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Company Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Created At</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {companies.length > 0 ? (
            companies.map((c) => (
              <CompanyRow
                key={c.id}
                company={c}
                deleteCompany={deleteCompany}
                startEdit={startEdit}
              />
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-500">
                No companies added yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
