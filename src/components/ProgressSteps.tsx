import {
  MapPin,
  Trash2,
  FileCheck,
  Calendar,
  CreditCard,
  Truck,
} from "lucide-react";

const ProgressSteps = () => {
  const steps = [
    { icon: MapPin, label: "Postcode", completed: true },
    { icon: Trash2, label: "Waste Type", completed: true },
    { icon: Truck, label: "Select Skip", active: true },
    { icon: FileCheck, label: "Permit Check", completed: false },
    { icon: Calendar, label: "Choose Date", completed: false },
    { icon: CreditCard, label: "Payment", completed: false },
  ];

  return (
    <div className="flex items-center justify-center  mb-12 container mx-auto">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`flex items-center md:space-x-2 ${
              step.active
                ? "text-green-800 border-b border-green-800 py-2"
                : step.completed
                ? "text-green-800"
                : "text-gray-500"
            }`}
          >
            <div
              className={`sm:p-2 rounded-full ${
                step.active
                  ? "bg-green-400/10 md:border border-green-800"
                  : step.completed
                  ? "bg-green-400/10 md:border border-green-800"
                  : "bg-gray-400/20 md:border border-gray-700"
              }`}
            >
              <step.icon className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium hidden md:block">
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-3 sm:w-5 md:w-8 h-px mx-1 sm:mx-2 ${
                step.completed ? "bg-green-400" : "bg-gray-600"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;
