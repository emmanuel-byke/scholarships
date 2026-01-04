import { X } from "lucide-react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";



export const MobileNav = ({navHeaders, active, setActive}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return(
        <div className="">
            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none`}
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <FaBars className="h-6 w-6" />
                    )}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden py-4 border-t border-gray-100 bg-white w-full">
                    <ul className="space-y-2">
                        {navHeaders.map((header, index) => {
                            return (
                                <li key={index}>
                                    <a
                                        to={header.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={({ isActive }) => 
                                            `block px-4 py-2 text-gray-700 font-medium
                                            ${isActive ? 'text-blue-600 bg-blue-50' : 'hover:text-blue-500 hover:bg-gray-50'}`
                                        }
                                    >
                                        {header.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="space-y-2">
                            <a
                                to="/auth"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-md"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
                )}

        </div>
    );
}