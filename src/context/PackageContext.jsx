import { useContext, createContext, useState } from "react";
import { packagesData } from "../data/packages";

const PackageContext = createContext(null);

export const usePackageContext = () => {
    const context = useContext(PackageContext);
    if (!context) {
        throw new Error("usePackageContext must be used within a PackageProvider");
    }
    return context;
};

const PackageProvider = ({ children }) => {
    const [packages, setPackages] = useState(packagesData);
    return (
        <PackageContext.Provider value={{ packages, setPackages }}>
            {children}
        </PackageContext.Provider>
    );
}

export default PackageProvider;