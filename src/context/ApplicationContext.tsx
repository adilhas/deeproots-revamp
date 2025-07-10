'use client';

import { createContext, useContext, useState } from 'react';
import { ApplicationDataType } from '@/types/application';

type ApplicationContextType = {
  application: ApplicationDataType | null;
  setApplication: React.Dispatch<
    React.SetStateAction<ApplicationDataType | null>
  >;
};

const ApplicationContext = createContext<ApplicationContextType>({
  application: null,
  setApplication: () => {},
});

export const useApplication = () => useContext(ApplicationContext);

export const ApplicationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [application, setApplication] = useState<ApplicationDataType | null>(
    null
  );

  return (
    <ApplicationContext.Provider value={{ application, setApplication }}>
      {children}
    </ApplicationContext.Provider>
  );
};
