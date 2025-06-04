import { useCallback, useEffect, useState } from "react";
import ProgressSteps from "./components/ProgressSteps";
import SkipCard from "./components/SkipCard";
import Button from "./components/ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type skip from "./types/skipType";
import logo from "/wewantwaste.png";
import Loader from "./components/ui/Loader";

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [selectedSkip, setSelectedSkip] = useState<number | null>(null);
  const [skipOptions, setSkipOptions] = useState<skip[]>([]);
  const [isloading, setIsloading] = useState<boolean>(false);

  const handleSelect = (id: number) => {
    selectedSkip === id ? setSelectedSkip(null) : setSelectedSkip(id);
  };

  const fetchSkipData = useCallback(
    async function fetchSkipData() {
      try {
        setIsloading(true);
        const response = await fetch(
          `${backendUrl}skips/by-location?postcode=NR32&area=Lowestoft`
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `HTTP error! status: ${response.status}, body: ${errorText}`
          );
        }

        const responseData = await response.json();
        setSkipOptions(responseData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsloading(false);
      }
    },
    [backendUrl, setSkipOptions]
  );

  useEffect(() => {
    fetchSkipData();
  }, [fetchSkipData]);

  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-center gap-2 text-green-900 border-b ">
        <img src={logo} alt="We Want Waste logo" className="size-9" />
        <p>We Want Waste</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProgressSteps />
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Choose Your Skip Size
          </h1>
          <p className="text-emerald-700 text-lg">
            Select the skip size that best suits your needs
          </p>
        </div>
        {isloading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skipOptions.map((skip) =>
              skip ? (
                <SkipCard
                  key={skip.id}
                  capacity={skip.size}
                  hirePeriod={skip.hire_period_days}
                  price={skip.price_before_vat}
                  allowedOnRoad={skip.allowed_on_road}
                  allowsHeavyWaste={skip.allows_heavy_waste}
                  isSelected={selectedSkip === skip.id}
                  onSelect={() => handleSelect(skip.id)}
                />
              ) : null
            )}
          </div>
        )}
        <div className="flex justify-between items-center gap-2">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mt-1 mr-2 group-hover:-translate-x-2 duration-300" />
            Back
          </Button>
          {selectedSkip && (
            <Button variant="contain">
              Continue
              <ArrowRight className="w-4 h-4 mt-1 ml-2 group-hover:translate-x-2 duration-300" />
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
