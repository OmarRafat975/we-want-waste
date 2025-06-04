import { Loader as Loading } from "lucide-react";
const Loader = () => {
  return (
    <div className="w-full my-8 flex items-center justify-center mx-auto">
      <Loading className=" text-teal-700 animate-spin" />
    </div>
  );
};

export default Loader;
