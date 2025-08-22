const SKILLS = [
  "Java", "Angular", "CSS", "HTML", "JavaScript", "UI", "SQL", "React", "PHP",
  "GIT", "AWS", "Python", "Django", "C", "C++", "C#", "Unity", "R", "AI", "NLP",
  "Photoshop", "Node.js"
];

export default function SkillForm({ skill, onChange }) {
  const update = (field, value) => {
    onChange({ ...skill, [field]: value });
  };

  return (
    <div className="flex gap-2 mb-2">
      <select
        value={skill.skillName}
        onChange={(e) => update("skillName", e.target.value)}
        className="border p-2 rounded flex-1"
      >
        <option value="">Select Skill</option>
        {SKILLS.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <input
        type="number"
        min="1"
        max="5"
        value={skill.skillRating}
        onChange={(e) => update("skillRating", e.target.value)}
        placeholder="Rating"
        className="w-20 border p-2 rounded"
      />
    </div>
  );
}
