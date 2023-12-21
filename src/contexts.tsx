/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext } from "react";

export const store = createContext({
  showPasswordImg:false,
  setShowPasswordImg: (value: boolean) => {},
});

export const storeProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [showPasswordImg, setShowPasswordImg] = React.useState<boolean>(false);

  return (
    <store.Provider
      value={{
        showPasswordImg,
        setShowPasswordImg
      }}
    >
      {props.children}
    </store.Provider>
  );
};
