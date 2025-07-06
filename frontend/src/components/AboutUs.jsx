import React from "react";

export default function AboutUs() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-black">About VANGO</h1>

      <p className="text-lg mb-8 text-center text-gray-600">
        <strong>Your Journey, Our Vans.</strong> VANGO is India's trusted van rental app — created
        to bring freedom, comfort, and adventure to your travels.
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-black">🚐 Who We Are</h2>
          <p className="text-gray-700">
            We're a team of travelers and techies passionate about making van travel simple and
            accessible. Whether it's a spontaneous weekend trip or a long-haul journey, our mission
            is to support your adventure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-black">🌍 What We Offer</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Self-drive vans for road trips, getaways, and more</li>
            <li>Quick and easy app-based booking</li>
            <li>Verified, sanitized, and road-ready vehicles</li>
            <li>Clear pricing with zero hidden charges</li>
            <li>24x7 roadside assistance and customer support</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-black">💡 Why Choose VANGO?</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Freedom to explore India on your own terms</li>
            <li>Camper-ready vans to skip hotels and sleep on wheels</li>
            <li>Multiple pickup/drop locations across cities</li>
            <li>Perfect for families, groups, and solo travelers</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-black">🙌 Our Mission</h2>
          <p className="text-gray-700">
            We're here to make van life reliable and enjoyable — for everyone. One van at a time,
            we're reimagining how India travels.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-black">🚧 Still Growing</h2>
          <p className="text-gray-700">
            We're continuously expanding our reach and improving based on your feedback. VANGO is
            built with the community at its heart.
          </p>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-medium text-black mb-2">📍 Join the Ride</h3>
          <p className="text-gray-700">
            Download the app, choose your van, and hit the road.
          </p>
          <p className="mt-2 font-semibold text-lg">Don’t squeeze into a sedan — <span className="text-violet-600">relax in a VANGO</span>.</p>
        </div>
      </div>
    </section>
  );
}
