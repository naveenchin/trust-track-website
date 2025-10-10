import React from 'react';
import { 
  Battery, 
  Globe, 
  Factory, 
  Shield, 
  FileCheck, 
  Lock, 
  Users, 
  Zap, 
  Calendar,
  ArrowRight
} from 'lucide-react';

interface ProductsPageProps {
  onContactDemo: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onContactDemo }) => {
  const dbpFeatures = [
    {
      icon: Battery,
      title: 'Passport Creation',
      description: 'Initial record (Unique ID, Carbon Footprint Hash)'
    },
    {
      icon: Zap,
      title: 'Lifecycle Management',
      description: 'Dynamic updates (e.g., State of Health, SoH) recorded as new, timestamped transactions'
    },
    {
      icon: Users,
      title: 'Tiered Access',
      description: 'Securely controls data access: Public (Consumer), Legitimate Interest (Recycler), Authority (EC Audit)'
    }
  ];

  const cbamFeatures = [
    {
      icon: FileCheck,
      title: 'Automated CBAM XML/CSV generation',
      description: 'Generate compliant reports automatically'
    },
    {
      icon: Lock,
      title: 'Immutable audit trail',
      description: 'For all embedded emissions data'
    },
    {
      icon: Shield,
      title: 'Mitigates fine and tax risks',
      description: 'Ensure compliance and avoid penalties'
    }
  ];

  const esgFeatures = [
    {
      icon: Globe,
      title: 'Comprehensive ESG Metrics',
      description: 'Track environmental, social, and governance indicators across your entire supply chain'
    },
    {
      icon: FileCheck,
      title: 'Automated ESG Reporting',
      description: 'Generate standardized reports for investors, regulators, and sustainability frameworks (GRI, SASB, TCFD)'
    },
    {
      icon: Shield,
      title: 'Verified Sustainability Claims',
      description: 'Blockchain-backed proof of ESG performance prevents greenwashing and builds stakeholder trust'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              QR Code Generator for
              <br />
              <span className="font-medium">Digital Product Passports</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Generate unique QR codes for any product that link to comprehensive digital passports. 
              Specialized solutions for Digital Battery Passports (DBP), CBAM compliance, and ESG reporting.
            </p>
            <button 
              onClick={onContactDemo}
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-600 transition-colors inline-flex items-center group"
            >
              Request Product Demo
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* DBP Platform */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Battery className="h-4 w-4 mr-2" />
                  Mandated by Feb 2027
                </div>
                <h2 className="text-4xl font-light text-gray-900 mb-6">
                  Digital Battery Passport
                  <br />
                  <span className="font-medium">QR Generator</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Generate QR codes for battery products mandated by EU Battery Regulation (2023/1542) by Feb 2027. 
                  Each QR links to comprehensive battery passport data with tiered access control.
                </p>
                <div className="space-y-6">
                  {dbpFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-4 w-4 text-emerald-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1">{feature.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8">
                  <button 
                    onClick={onContactDemo}
                    className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-600 transition-colors"
                  >
                    Get DBP Demo
                  </button>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 mx-auto mb-6 rounded-xl flex items-center justify-center">
                    <Battery className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-6">QR Code → Battery Passport</h3>
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=96x96&data=https://trusttrack.io" 
                    alt="QR Code linking to TrustTrack"
                    className="w-24 h-24 mx-auto mb-4 border border-gray-200 rounded-lg"
                  />
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Unique ID:</span>
                      <span className="font-mono text-gray-900">DBP-2024-001</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Carbon Footprint:</span>
                      <span className="text-emerald-600 font-medium">Verified ✓</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">State of Health:</span>
                      <span className="text-gray-900 font-medium">92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CBAM Platform */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 mx-auto mb-6 rounded-xl flex items-center justify-center">
                    <Factory className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-6">CBAM Report</h3>
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=96x96&data=https://trusttrack.io" 
                    alt="QR Code linking to TrustTrack"
                    className="w-24 h-24 mx-auto mb-4 border border-gray-200 rounded-lg"
                  />
                  <div className="space-y-4 text-sm">
                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Steel Import</span>
                        <span className="text-gray-900 font-medium">€15,420</span>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Cement Import</span>
                        <span className="text-gray-900 font-medium">€8,750</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-4">
                      QR-accessible carbon data saves compliance costs
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  High urgency for 2026
                </div>
                <h2 className="text-4xl font-light text-gray-900 mb-6">
                  CBAM Digital Passports
                  <br />
                  <span className="font-medium">QR-Linked Carbon Data</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Generate QR codes for products requiring CBAM compliance (Cement, Steel, Aluminum). 
                  Each QR links to verified carbon data, eliminating manual reporting and reducing compliance costs.
                </p>
                <div className="space-y-6">
                  {cbamFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-4 w-4 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1">{feature.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8">
                  <button 
                    onClick={onContactDemo}
                    className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
                  >
                    Get CBAM Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Platform */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Globe className="h-4 w-4 mr-2" />
                  Growing investor & regulatory demand
                </div>
                <h2 className="text-4xl font-light text-gray-900 mb-6">
                  ESG Digital Passports
                  <br />
                  <span className="font-medium">QR-Linked Sustainability Data</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Generate QR codes linking to comprehensive ESG data for any product. Meet growing investor 
                  and regulatory ESG demands with QR-accessible sustainability metrics and immutable audit trails.
                </p>
                <div className="space-y-6">
                  {esgFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-4 w-4 text-emerald-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1">{feature.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8">
                  <button 
                    onClick={onContactDemo}
                    className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-600 transition-colors"
                  >
                    Get ESG Demo
                  </button>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 mx-auto mb-6 rounded-xl flex items-center justify-center">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-6">ESG Dashboard</h3>
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=96x96&data=https://trusttrack.io" 
                    alt="QR Code linking to TrustTrack"
                    className="w-24 h-24 mx-auto mb-4 border border-gray-200 rounded-lg"
                  />
                  <div className="space-y-4 text-sm">
                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Carbon Footprint</span>
                        <span className="text-emerald-600 font-medium">-15% YoY</span>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Supply Chain Score</span>
                        <span className="text-blue-600 font-medium">A+ Rating</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-4">
                      QR-accessible ESG metrics and reporting
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Ready to Generate QR Codes for
            <br />
            <span className="font-medium">Your Digital Product Passports?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Start creating unique blockchain-secured QR codes for your products today. Each QR links to comprehensive 
            Specialized solutions for Digital Battery Passports (DBP), CBAM compliance, and ESG reporting.
          </p>
          <button 
            onClick={onContactDemo}
            className="bg-blue-500 text-white px-12 py-5 text-lg font-medium rounded-xl hover:bg-blue-600 transition-colors inline-flex items-center group"
          >
            Request Products Demo
            <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};