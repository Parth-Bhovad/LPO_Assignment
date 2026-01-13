import { useContext, createContext, useState } from "react";
import { packagesData } from "../data/packages";

const PackageContext = createContext(packagesData);

export const usePackageContext = () => {
    return useContext(PackageContext);
}

const PackageProvider = ({ children }) => {
    const [packages, setPackages] = useState(packagesData);
    return (
        <PackageContext.Provider value={{ packages, setPackages }}>
            {children}
        </PackageContext.Provider>
    );
}

export default PackageProvider;