import Hero from "./Hero";
import AddPackageForm from "./AddPackageForm";
import PackageBrowser from "./PackageBrowser";
import Footer from "./Footer";

const App = () => {
    return (
        <div>
            <Hero />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
                <AddPackageForm />

                <PackageBrowser />
            </main>

            <Footer />
        </div>
    );
};

export default App;