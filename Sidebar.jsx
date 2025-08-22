export default function Sidebar({ setActivePage }) {
  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">Company CRUD</h2>
      <button
        onClick={() => setActivePage("list")}
        className="py-2 px-3 rounded hover:bg-gray-700 text-left"
      >
        Company List
      </button>
      <button
        onClick={() => setActivePage("new")}
        className="py-2 px-3 rounded hover:bg-gray-700 text-left"
      >
        New Company
      </button>
    </div>
  );
}
