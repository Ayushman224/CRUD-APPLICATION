export default function EducationForm({ education, onChange }) {
  const update = (field, value) => {
    onChange({ ...education, [field]: value });
  };

  return (
    <div className="space-y-2 mb-2 border p-2 rounded bg-white">
      <input
        type="text"
        value={education.instituteName}
        onChange={(e) => update("instituteName", e.target.value)}
        maxLength={50}
        placeholder="Institute Name *"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        value={education.courseName}
        onChange={(e) => update("courseName", e.target.value)}
        maxLength={25}
        placeholder="Course Name *"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        value={education.completedYear}
        onChange={(e) => update("completedYear", e.target.value)}
        placeholder="Completed Year (e.g., Mar 2021)"
        className="w-full border p-2 rounded"
        required
      />
    </div>
  );
}
