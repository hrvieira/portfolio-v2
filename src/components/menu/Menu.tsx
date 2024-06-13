import React, { useState } from "react";

interface Link {
     titulo: string;
     href: string;
}

interface MenuProps {
     links: Link[];
     isMobileMenuOpen: boolean;
     toggleMobileMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({
     links,
     isMobileMenuOpen,
     toggleMobileMenu,
}) => {
     const [activeLink, setActiveLink] = useState<string | null>(null);

     const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
          event.preventDefault();
          const targetId = event.currentTarget.getAttribute("href")!.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
               targetElement.scrollIntoView({ behavior: "smooth" });
               setActiveLink(event.currentTarget.getAttribute("href")!);
          }
     };

     return (
          <nav
               className={`flex items-center ${isMobileMenuOpen ? "flex-col" : "flex-row"
                    }`}
          >
               <ul className="flex gap-1 sm:gap-6 text-[1.1rem]" role="menu">
                    {links.map((link, index) => (
                         <li key={index}>
                              <a
                                   href={link.href}
                                   className={link.href === activeLink ? "active" : ""}
                                   onClick={handleLinkClick}
                              >
                                   {link.titulo}
                              </a>
                         </li>
                    ))}
               </ul>
               <button
                    className="max-sm:block hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
               >
                    <svg
                         className="w-6 h-6 text-white fill-current"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                         {isMobileMenuOpen ? (
                              <path
                                   fillRule="evenodd"
                                   d="M4.707 3.307a1 1 0 00-1.414 0L0 6.014l4.293 4.293a1 1 0 101.414-1.414L1.414 4.707a1 1 0 000-1.414zM19.293 10.293a1 1 0 001.414-1.414L24 13.986l-4.293 4.293a1 1 0 00-1.414-1.414L22.586 11.707a1 1 0 000-1.414z"
                              />
                         ) : (
                              <path
                                   fillRule="evenodd"
                                   d="M4 6h16v12H4zM4 10v4h16v-4zM4 14v4h16v-4z"
                              />
                         )}
                    </svg>
               </button>
          </nav>
     );
};

export default Menu;
