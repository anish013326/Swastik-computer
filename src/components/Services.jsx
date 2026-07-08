import React from "react";
import {
  MdLaptopMac,
  MdDesktopWindows,
  MdBuild,
  MdVideocam,
} from "react-icons/md";

const services = [
  {
    id: 1,
    name: "New Laptops",
    desc: "Student & Professional",
    icon: MdLaptopMac,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    id: 2,
    name: "Custom PCs",
    desc: "Gaming & Workstations",
    icon: MdDesktopWindows,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    id: 3,
    name: "Expert Repairs",
    desc: "Screen, Battery & Logic Board",
    icon: MdBuild,
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  {
    id: 4,
    name: "CCTV Systems",
    desc: "Sales & Installation",
    icon: MdVideocam,
    bg: "bg-green-100",
    color: "text-green-600",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="flex items-center gap-5 bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`text-4xl ${service.color}`} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mt-1">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;