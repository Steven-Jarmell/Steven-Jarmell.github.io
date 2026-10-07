import { useVersion, type Version } from "./VersionContext";

const VersionPicker = () => {
  const { version, setVersion } = useVersion();

  const versions: { id: Version; label: string }[] = [
    { id: "v1", label: "V1 · 2022" },
    { id: "v2", label: "V2 · 2023" },
    { id: "v3", label: "V3 · Now" },
  ];

  return (
    <div className="version-picker">
      <span className="version-picker-label">Version</span>
      <div className="version-picker-buttons">
        {versions.map(({ id, label }) => (
          <button
            key={id}
            className={`version-btn ${version === id ? "active" : ""}`}
            onClick={() => setVersion(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VersionPicker;
