import { createContext, useContext, useState } from "react";

export type Version = "v1" | "v2" | "v3";

type VersionContextValue = {
  version: Version;
  setVersion: (v: Version) => void;
};

const VersionContext = createContext<VersionContextValue>({
  version: "v3",
  setVersion: () => {},
});

export const VersionProvider = ({ children }: { children: React.ReactNode }) => {
  const [version, setVersion] = useState<Version>("v3");

  return (
    <VersionContext.Provider value={{ version, setVersion }}>
      {children}
    </VersionContext.Provider>
  );
};

export const useVersion = () => useContext(VersionContext);
