import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("black");

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  if (context === undefined) {
    throw new Error(
      "useCustomization must be used within a CustomizationProvider",
    );
  }
  return context;
};
