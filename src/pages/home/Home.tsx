import { Link } from "react-router-dom";

function Home() {
     return (
          <>
               <h1 className="text-3xl font-bold text-red-500 underline text-center">
                    Hello world!
               </h1>
               <div className="text-center py-2 hover:underline">
                    <Link to="/">Ir para outra rota</Link>

               </div>
          </>
     )
}

export default Home;