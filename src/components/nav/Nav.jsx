import { useState, useEffect } from "react";
import { GraduationCap, ChevronDown, Search, User, Globe, X } from "lucide-react";
import { FaBars } from "react-icons/fa";

export const Nav = () => {
    const [active, setActive] = useState('Home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navHeaders = [
        { href: '/', name: 'Home' },
        { 
            href: '/asia', 
            name: 'Asia',
            submenu: [
                { href: '/asia/japan', name: 'Japan' },
                { href: '/asia/singapore', name: 'Singapore' },
                { href: '/asia/hong-kong', name: 'Hong Kong' },
            ]
        },
        { 
            href: '/europe', 
            name: 'Europe',
            submenu: [
                { href: '/europe/germany', name: 'Germany' },
                { href: '/europe/france', name: 'France' },
                { href: '/europe/uk', name: 'United Kingdom' },
            ]
        },
        { href: '/universities', name: 'Universities' },
        { href: '/scholarships', name: 'Scholarships' },
    ];

    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 
            ${scrolled ? 'bg-bg shadow-lg py-0' : 'bg-linear-to-r from-bg to-transparent py-2'}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-4 group">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-linear-to-r from-accent to-accent2 rounded-full blur opacity-30 
                                group-hover:opacity-40 transition-opacity"></div>
                            <GraduationCap className="relative size-10 text-accent transform group-hover:scale-150 
                                transition-transform duration-3000" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-bold bg-linear-to-r from-accent to-accent2 bg-clip-text text-transparent">
                                FindMSc
                            </h2>
                            <p className="text-sm text-muted font-medium">Your Path to Master's Excellence</p>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        <ul className="flex space-x-1">
                            {navHeaders.map((header, index) => (
                                <li key={index} className="relative group">
                                    {header.submenu ? (
                                        <div className="relative">
                                            <button
                                                onClick={() => setOpenDropdown(openDropdown === header.name ? null : header.name)}
                                                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200
                                                    ${active === header.name 
                                                        ? 'text-accent bg-accent2/20' 
                                                        : 'text-muted hover:text-accent hover:bg-accent2/20'
                                                    }`}
                                            >
                                                {header.name}
                                                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${openDropdown === header.name ? 'rotate-180' : ''}`} />
                                            </button>
                                            {openDropdown === header.name && (
                                                <div className="absolute top-full left-0 mt-2 w-56 bg-text rounded-xl shadow-lg border border-border py-2 z-50">
                                                    {header.submenu.map((item, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={item.href}
                                                            className="block px-4 py-3 text-bg hover:text-accent hover:bg-accent2/10 transition-colors"
                                                            onClick={() => {
                                                                setActive(header.name);
                                                                setOpenDropdown(null);
                                                            }}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={header.href}
                                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200
                                                ${active === header.name 
                                                    ? 'text-accent bg-accent2/20' 
                                                    : 'text-muted hover:text-accent hover:bg-accent2/5'
                                                }`}
                                            onClick={() => {
                                                setActive(header.name);
                                                setOpenDropdown(null);
                                            }}
                                        >
                                            {header.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Search Bar */}
                        <div className="relative ml-6">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent" />
                            <input
                                type="search"
                                placeholder="Search programs..."
                                className="pl-10 pr-4 py-2.5 w-64 rounded-lg border border-accent 
                                 outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="size-8 text-danger"/>
                            ) : (
                                <FaBars className="size-8" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-1000 ease-in-out 
                    ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="py-6 border-t border-border">
                        <ul className="space-y-1">
                            {navHeaders.map((header, index) => (
                                <li key={index}>
                                    <a
                                        href={header.href}
                                        className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors
                                            ${active === header.name 
                                                ? 'text-accent bg-text/10' 
                                                : 'text-muted hover:text-accent hover:bg-text/3'
                                            }`}
                                        onClick={() => {
                                            setActive(header.name);
                                            setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        {header.name}
                                        {header.submenu && <ChevronDown className="h-4 w-4" />}
                                    </a>
                                    {header.submenu && (
                                        <div className="ml-6 mt-1 space-y-1">
                                            {header.submenu.map((item, idx) => (
                                                <a
                                                    key={idx}
                                                    href={item.href}
                                                    className="block px-4 py-2.5 text-sm text-muted hover:text-accent hover:bg-text/3 
                                                        rounded-lg transition-colors"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                        
                        {/* Mobile CTA Section */}
                        <div className="mt-6 pt-6 border-t border-border space-y-4">
                            <div className="px-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent h-5 w-5" />
                                    <input
                                        type="search"
                                        placeholder="Search programs..."
                                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-accent outline-none"
                                    />
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};