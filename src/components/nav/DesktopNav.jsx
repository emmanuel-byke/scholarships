

export const DesktopNav = ({navHeaders, active, setActive}) => {

    return(
        <ul className="hidden md:flex space-x-8 items-center">
            {navHeaders.map((header, index) => {
                return (
                    <li key={index}>
                        <a
                            href={header.href}
                            className={ 
                                `px-3 py-2 text-gray-700 hover:text-blue-500 font-medium transition-colors
                                ${active===header.name && 'border-b-3 border-blue-500'}`
                            }
                            onClick={()=>setActive(header.name)}
                        >
                            {header.name}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}