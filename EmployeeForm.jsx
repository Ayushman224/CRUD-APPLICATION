import SkillForm from "./SkillForm";
import EducationForm from "./EducationForm";

const DESIGNATIONS = ["Developer", "Manager", "System Admin", "Team Lead", "PM"];

export default function EmployeeForm({ employee, onChange }) {
  const update = (field, value) => {
    onChange({ ...employee, [field]: value });
  };

  const addSkill = () => {
    update("skillInfo", [...employee.skillInfo, { skillName: "", skillRating: "" }]);
  };

  const updateSkill = (index, updated) => {
    const newSkills = [...employee.skillInfo];
    newSkills[index] = updated;
    update("skillInfo", newSkills);
  };

  const addEducation = () => {
    update("educationInfo", [
      ...employee.educationInfo,
      { instituteName: "", courseName: "", completedYear: "" },
    ]);
  };

  const updateEducation = (index, updated) => {
    const newEdu = [...employee.educationInfo];
    newEdu[index] = updated;
    update("educationInfo", newEdu);
  };

  return (
    <div className="border rounded-lg p-4 bg-gray-50 space-y-3">
      <input
        type="text"
        value={employee.empName}
        onChange={(e) => update("empName", e.target.value)}
        maxLength={25}
        placeholder="Employee Name *"
        className="w-full border p-2 rounded"
        required
      />
      <select
        value={employee.designation}
        onChange={(e) => update("designation", e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option value="">Select Designation</option>
        {DESIGNATIONS.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
      <input
        type="date"
        value={employee.joinDate}
        onChange={(e) => update("joinDate", e.target.value)}
        max={new Date().toISOString().split("T")[0]}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        value={employee.email}
        onChange={(e) => update("email", e.target.value)}
        maxLength={100}
        placeholder="Email *"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        value={employee.phoneNumber}
        onChange={(e) => update("phoneNumber", e.target.value)}
        maxLength={15}
        placeholder="Phone Number *"
        className="w-full border p-2 rounded"
        required
      />

      {/* Skills */}
      <div>
        <h3 className="font-semibold mb-2">Skills</h3>
        {employee.skillInfo.map((skill, i) => (
          <SkillForm
            key={i}
            skill={skill}
            onChange={(updated) => updateSkill(i, updated)}
          />
        ))}
        <button type="button" onClick={addSkill} className="text-sm text-indigo-600">
          + Add Skill
        </button>
      </div>

      {/* Education */}
      <div>
        <h3 className="font-semibold mb-2">Education</h3>
        {employee.educationInfo.map((edu, i) => (
          <EducationForm
            key={i}
            education={edu}
            onChange={(updated) => updateEducation(i, updated)}
          />
        ))}
        <button type="button" onClick={addEducation} className="text-sm text-indigo-600">
          + Add Education
        </button>
      </div>
    </div>
  );
}
