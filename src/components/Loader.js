import { ImSpinner8 } from "react-icons/im";

function Loader() {
  return (
    <div className="flex justify-center items-center py-8">

      <ImSpinner8 className="animate-spin text-4xl text-indigo-600"/>

    </div>
  );
}

export default Loader;