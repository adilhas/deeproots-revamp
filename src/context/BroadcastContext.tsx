'use client';

import { BroadcastMessageType } from '@/types/application';
import React, { createContext, useContext, useState } from 'react';

type BroadcastContextType = {
  broadcasts: BroadcastMessageType[];
  setBroadcasts: React.Dispatch<React.SetStateAction<BroadcastMessageType[]>>;
};

const BroadcastContext = createContext<BroadcastContextType>({
  broadcasts: [],
  setBroadcasts: () => {},
});

export const useBroadcast = () => useContext(BroadcastContext);

export const BroadcastProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [broadcasts, setBroadcasts] = useState<BroadcastMessageType[]>([]);

  return (
    <BroadcastContext.Provider value={{ broadcasts, setBroadcasts }}>
      {children}
    </BroadcastContext.Provider>
  );
};
