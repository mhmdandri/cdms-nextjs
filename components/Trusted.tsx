import React from "react";

const Trusted = () => {
  return (
    <section className="py-12 border-y border-border bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading logistics companies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
          {["Maersk", "DHL", "FedEx", "UPS", "Kuehne + Nagel"].map(
            (company) => (
              <div
                key={company}
                className="text-center text-xl md:text-2xl font-semibold text-muted-foreground tracking-tight"
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
