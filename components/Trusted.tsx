import React from "react";

const Trusted = () => {
  return (
    <section className="py-12 border-y border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-8">
          Trusted by leading logistics companies
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-50">
          {["Maersk", "DHL", "FedEx", "UPS", "Kuehne + Nagel"].map(
            (company) => (
              <div
                key={company}
                className="text-center text-2xl font-bold text-gray-400"
              >
                {company}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
