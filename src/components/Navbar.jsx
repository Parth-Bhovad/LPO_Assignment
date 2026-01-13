function Navbar() {
    return (
        <header className="w-full bg-white/80 border-b">
            <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center">
                <div className="flex items-center">
                    <img
                        src="/lpo-logo.webp"
                        alt="Brand Logo"
                        className="h-12 w-auto"
                    />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
