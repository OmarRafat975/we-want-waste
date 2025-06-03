import {
  MapPin,
  Trash2,
  Star,
  FileCheck,
  Calendar,
  CreditCard,
} from "lucide-react";

const ProgressSteps = () => {
  const steps = [
    { icon: MapPin, label: "Postcode", completed: true },
    { icon: Trash2, label: "Waste Type", completed: true },
    { icon: Star, label: "Select Skip", active: true },
    { icon: FileCheck, label: "Permit Check", completed: false },
    { icon: Calendar, label: "Choose Date", completed: false },
    { icon: CreditCard, label: "Payment", completed: false },
  ];

  return (
    <div className="flex items-center justify-center space-x-4 mb-12 px-4 overflow-x-auto">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`flex items-center space-x-2 ${
              step.active
                ? "text-blue-400"
                : step.completed
                ? "text-green-400"
                : "text-gray-500"
            }`}
          >
            <div
              className={`p-2 rounded-full ${
                step.active
                  ? "bg-blue-500/20 border border-blue-400"
                  : step.completed
                  ? "bg-green-500/20 border border-green-400"
                  : "bg-gray-700 border border-gray-600"
              }`}
            >
              <step.icon className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium hidden sm:block">
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-8 h-px mx-2 ${
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
