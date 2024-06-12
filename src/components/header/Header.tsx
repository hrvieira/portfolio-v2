import { Link } from "react-router-dom";

function Header() {
     return (
         <header className="flex w-full item-center justify-around bg-black py-4 px-[2rem] shadow-neutral-900 text-white shadow-xl rounded-b-lg font-[montserratBold] mb-10">
             <div className="max-sm:flex-col flex w-[100%] sm:w-[90%] items-center justify-between">
                 <Link to="/" className="hover:underline text-[1.5rem]">
                     Início
                 </Link>
                 <nav className="flex items-center">
                     <ul className="flex gap-1 sm:gap-6 text-[1.1rem]" role="menu">
                         <li className="max-sm:py-2">
                             <Link
                                 to="/projetos"
                                 className="hover:underline p-1 hover:bg-[]"
                             >
                                 Projetos
                             </Link>
                         </li>
                         <li className="max-sm:py-2">
                             <Link
                                 to="/sobremim"
                                 className="hover:underline p-1 hover:bg-white-90"
                             >
                                 Sobre mim
                             </Link>
                         </li>
                         <li className="max-sm:py-2">
                             <Link
                                 to="/contato"
                                 className="hover:underline p-1 hover:bg-white-90"
                             >
                                 Contato
                             </Link>
                         </li>
                     </ul>
                 </nav>
             </div>
         </header>
     );
}

export default Header;