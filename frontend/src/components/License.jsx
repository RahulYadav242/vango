import React from "react";

export default function License() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-black">
      <h1 className="text-3xl font-bold mb-6">Software License Agreement</h1>

      <p className="mb-6">
        This Software License Agreement ("Agreement") is a legal agreement between you and VANGO, governing your use of the VANGO application and any related services.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Grant of License</h2>
      <p className="mb-6">
        VANGO grants you a limited, non-exclusive, non-transferable, and revocable license to use the VANGO app for personal or commercial use in accordance with this Agreement.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Restrictions</h2>
      <p className="mb-6">
        You may not: (a) modify, reverse engineer, decompile, or disassemble the app; (b) rent, lease, lend, sell, or redistribute it; (c) use the app in any unlawful manner or for any illegal purpose.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
      <p className="mb-6">
        All content, features, and functionality of the VANGO app are owned by or licensed to VANGO and are protected by intellectual property laws. You agree not to reproduce, duplicate, copy, sell, or exploit any portion of the app without express written permission.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Termination</h2>
      <p className="mb-6">
        This license will terminate automatically if you violate any of its terms. Upon termination, you must cease all use of the VANGO app and delete all copies from your devices.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Disclaimer of Warranty</h2>
      <p className="mb-6">
        The VANGO app is provided "as is" without warranty of any kind. VANGO disclaims all warranties, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
      <p className="mb-6">
        In no event shall VANGO be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use the app.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
      <p className="mb-6">
        This Agreement shall be governed by and construed in accordance with the laws of India. Any disputes arising from this Agreement shall be subject to the jurisdiction of courts located in India.
      </p>

      <p className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} VANGO. All rights reserved.
      </p>
    </div>
  );
}


