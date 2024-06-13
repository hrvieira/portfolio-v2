import React, { useState } from "react";

interface Link {
     titulo: string;
     href: string;
}

interface MenuProps {
     links: Link[];
}

const Menu: React.FC<MenuProps> = ({
     links
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
          <nav className={`flex items-center`}
          >
               <ul className="flex gap-4 sm:gap-8 text-[1.1rem]" role="menu">
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
          </nav>
     );
};

export default Menu;
