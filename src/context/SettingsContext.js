import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [secureMode, setSecureMode] = useState(false);
  const [screenshotCount, setScreenshotCount] = useState(0);
  const [screenshotProtectionEnabled, setScreenshotProtectionEnabled] = useState(true);

  return (
    <SettingsContext.Provider
      value={{
        username,
        setUsername,
        secureMode,
        setSecureMode,
        screenshotCount,
        setScreenshotCount,
        screenshotProtectionEnabled,
        setScreenshotProtectionEnabled,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
