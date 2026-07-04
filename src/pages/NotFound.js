import { Link } from "react-router-dom";

function NotFound(){

return(

<div className="min-h-screen flex flex-col justify-center items-center bg-slate-100">

<h1 className="text-8xl font-black text-indigo-600">

404

</h1>

<p className="text-slate-500 text-xl mt-4">

Oops! Page not found.

</p>

<Link

to="/"

className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-xl"

>

Go Home

</Link>

</div>

)

}

export default NotFound;