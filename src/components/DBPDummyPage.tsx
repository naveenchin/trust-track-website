import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';

export const DBPDummyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to TrustTrack
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-emerald-500 mx-auto mb-4 rounded-xl flex items-center justify-center">
              <Battery className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Digital Battery Passport</h1>
            <p className="text-gray-600">EU Battery Regulation (2023/1542) Compliant</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Battery Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Unique ID:</span>
                    <span className="font-mono text-gray-900">DBP-2024-001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Manufacturer:</span>
                    <span className="text-gray-900">TrustTrack Battery Co.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Model:</span>
                    <span className="text-gray-900">TT-Li-Ion-500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="text-gray-900">500 Wh</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Carbon Footprint</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total CF:</span>
                    <span className="text-emerald-600 font-medium">45.2 kg CO₂e ✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Manufacturing:</span>
                    <span className="text-gray-900">32.1 kg CO₂e</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Raw Materials:</span>
                    <span className="text-gray-900">13.1 kg CO₂e</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Verification:</span>
                    <span className="text-emerald-600 font-medium">TÜV Verified</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Current Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">State of Health:</span>
                    <span className="text-gray-900 font-medium">92%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cycle Count:</span>
                    <span className="text-gray-900">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Updated:</span>
                    <span className="text-gray-900">2024-01-15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="text-emerald-600 font-medium">Active</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Supply Chain</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lithium Source:</span>
                    <span className="text-gray-900">Australia</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cobalt Source:</span>
                    <span className="text-gray-900">DRC (Certified)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Assembly:</span>
                    <span className="text-gray-900">Germany</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Recycling Info:</span>
                    <span className="text-blue-600 font-medium">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-xl">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-blue-700 font-medium">This Digital Battery Passport is DLT-verified and compliant with EU Battery Regulation (2023/1542)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};