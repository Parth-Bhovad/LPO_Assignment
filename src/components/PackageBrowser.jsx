import { useState, useMemo } from "react";
import Filters from "./Filters";
import PackageList from "./PackageList";
import { usePackageContext } from "../context/PackageContext";
function PackageBrowser() {
    const { packages } = usePackageContext();
    const [filters, setFilters] = useState({
        category: "",
        maxDuration: "",
        maxPrice: "",
    });
    const filteredPackages = useMemo(() => {
        return packages.filter((pkg) => {
            if (filters.category && pkg.category !== filters.category)
                return false;
            if (filters.maxDuration && pkg.duration > filters.maxDuration)
                return false;
            if (filters.maxPrice && pkg.price > filters.maxPrice)
                return false;
            return true;
        });
    }, [packages, filters]);

    return (
        <>
            <Filters filters={filters} setFilters={setFilters} />
            <PackageList packages={filteredPackages} />
        </>
    );
}

export default PackageBrowser;