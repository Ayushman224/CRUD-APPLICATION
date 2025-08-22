export default function CompanyRow({ company, deleteCompany, startEdit }) {
  return (
    <tr>
      <td className="p-2 border">{company.companyName}</td>
      <td className="p-2 border">{company.email}</td>
      <td className="p-2 border">{company.phoneNumber}</td>
      <td className="p-2 border">
        {new Date(company.createdAt).toLocaleDateString()}
      </td>
      <td className="p-2 border space-x-2">
        <button
          onClick={() => startEdit(company)}
          className="text-blue-600 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => deleteCompany(company.id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
