import React from "react";

function AboutPage() {
  return (
    <div className="flex justify-center bg-slate-950 items-center h-[85vh]">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
      >
        {/* Card 1 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg flex flex-col justify-center">
          <img
            className="w-full"
            src="suraj.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-white text-xl mb-2">
              Suraj Vishwakarma
            </div>
            <p className="text-white text-base">
              Developer
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg flex flex-col justify-center">
          <img
            className="w-full"
            src="parna.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-white text-xl mb-2">
              Parna Ghosh
            </div>
            <p className="text-white text-base">
              ui/ux
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg flex flex-col justify-center">
          <img className="w-full" src="zap.jpg" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-white text-xl mb-2">
              Shaik Zaheed Ahmed
            </div>
            <p className="text-white text-base">
              Backend
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
