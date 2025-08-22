export default function CompanyInfo({
  companyName,
  setCompanyName,
  address,
  setAddress,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
}) {
  return (
    <div className="space-y-3">
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        maxLength={50}
        placeholder="Company Name *"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Company Address"
        className="w-full border p-2 rounded"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        maxLength={100}
        placeholder="Email *"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        maxLength={15}
        placeholder="Phone Number *"
        className="w-full border p-2 rounded"
        required
      />
    </div>
  );
}
