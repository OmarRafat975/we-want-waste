import type SkipCardProps from "../types/skipCardType.ts";
import Button from "./ui/Button.tsx";
import {
  ArrowRight,
  CheckCircle,
  TriangleAlert,
  XCircleIcon,
} from "lucide-react";

const SkipCard = ({
  capacity,
  hirePeriod,
  price,
  allowedOnRoad,
  allowsHeavyWaste,
  isSelected,
  onSelect,
}: SkipCardProps) => {
  const imgLink = `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${capacity}-yarder-skip.jpg`;
  return (
    <div
      className={`relative bg-white rounded-xl overflow-hidden border hover:border-green-500 shadow hover:shadow-xl hover:-translate-y-1 hover:shadow-green-500/20 transition-all duration-300 hover:bg-slate-750 ${
        isSelected
          ? "border-green-500 shadow-xl shadow-green-500/20 -translate-y-1 "
          : "border-transparent"
      }`}
    >
      <div className="relative">
        <div className="h-48 flex items-center justify-center rounded-t-xl">
          <img
            src={imgLink}
            alt={`${capacity} Yard Skip`}
            className={`w-full h-full rounded-t-xl`}
          />
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
            {capacity} Yards
          </span>
        </div>
        {(!allowedOnRoad || !allowsHeavyWaste) && (
          <div className="absolute top-3 left-3 group">
            <span className="bg-yellow-500 text-white p-2 flex items-center justify-center rounded-full text-sm font-medium">
              <TriangleAlert className="text-red-500 size-4" />
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-green-800 text-xl sm:text-2xl font-semibold mb-1">
          {capacity + " Yard Skip"}
        </h3>
        <p className="text-green-700 text-sm mb-2">
          {hirePeriod} day hire period
        </p>
        <div className="mb-2 duration-300 top-7 left-full w-fit text-red-500 text-xs">
          {!allowedOnRoad && (
            <div className="flex items-center gap-2 mb-2">
              <XCircleIcon className="size-4 text-red-600 " />
              {" Not Allowed On The Road"}
            </div>
          )}
          {!allowsHeavyWaste && (
            <div className="flex items-center gap-2">
              <XCircleIcon className="size-4 text-red-600 " />
              {" Heavy Waste Not Allowed"}
            </div>
          )}
        </div>
        <p className="text-green-800 text-3xl font-bold mb-2">£{price}</p>

        <Button
          onClick={onSelect}
          className="w-full"
          variant={isSelected ? "contain" : "outline"}
        >
          {isSelected ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              {"Selected"}
            </>
          ) : (
            <>
              {"Select This Skip"}
              <ArrowRight className="w-4 h-4 mt-1 ml-2 group-hover:translate-x-2 duration-300" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default SkipCard;
