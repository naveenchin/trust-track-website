import React, { useState } from 'react';
import { 
  Shield, 
  Link2, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X,
  Database,
  FileCheck,
  Lock,
  Zap,
  Battery,
  Factory,
  Globe,
  Users,
  Calendar,
  Mail,
  Phone,
  Circle,
  Hexagon
} from 'lucide-react';
import { Logo } from './components/Logo';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContactDemo = () => {
    const subject = encodeURIComponent('TrustTrack Compliance Demo Request');
    const body = encodeURIComponent(`Hello,

I would like to schedule a compliance demo of TrustTrack for our organization.

Our industry: [Please specify - Batteries, Cement, Steel, Aluminum, etc.]
Compliance needs: [DBP, CBAM, ESG, or combination]
Timeline: [When do you need to be compliant?]

Please let me know your availability.

Best regards`);
    
    const mailtoLink = `mailto:naveen@trusttrack.io?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const problemPoints = [
    {
      title: 'Inconsistent Data',
      description: 'Data across suppliers is siloed, inconsistent (Excel, emails), and unverifiable.'
    },
    {
      title: 'High Risk, High Cost',
      description: 'Reports are expensive, error-prone, and expose your organization to severe non-compliance fines (CBAM tax & penalties by 2026).'
    },
    {
      title: 'Lack of Trust',
      description: 'Auditors require immutable proof; current solutions are not audit-proof (modifiable scripts).'
    }
  ];

  const solutionFeatures = [
    {
      icon: Circle,
      title: 'QR Code Generation',
      description: 'Generate unique QR codes for every product that link to comprehensive digital passports with all compliance data.',
      color: 'text-blue-500'
    },
    {
      icon: Lock,
      title: 'Immutable Ledger',
      description: 'Every transaction and data update is hashed and recorded using distributed ledger technology, guaranteeing data authenticity.',
      color: 'text-emerald-500'
    },
    {
      icon: Database,
      title: 'ERP Integration',
      description: 'Seamlessly connect with existing systems (SAP, Oracle, MES/LIMS) to capture product data at the source.',
      color: 'text-blue-500'
    },
    {
      icon: FileCheck,
      title: 'Compliance Ready',
      description: 'Auto-generate regulator-ready reports for BDP, CBAM, and ESG compliance from QR-linked passport data.',
      color: 'text-emerald-500'
    }
  ];

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Logo className="h-10 w-10 text-gray-700 mr-4" size={40} />
                <span className="font-medium text-2xl text-gray-800 tracking-tight">TrustTrack</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-gray-500 hover:text-gray-700 font-medium transition-colors">Products</a>
              <a href="#technology" className="text-gray-500 hover:text-gray-700 font-medium transition-colors">Technology</a>
              <a href="#contact" className="text-gray-500 hover:text-gray-700 font-medium transition-colors">Contact</a>
              <button 
                onClick={handleContactDemo}
                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
              >
                Request Compliance Demo
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-gray-700"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-3">
              <a href="#products" className="block text-gray-500 hover:text-gray-700 font-medium">Products</a>
              <a href="#technology" className="block text-gray-500 hover:text-gray-700 font-medium">Technology</a>
              <a href="#contact" className="block text-gray-500 hover:text-gray-700 font-medium">Contact</a>
              <button 
                onClick={handleContactDemo}
                className="block w-full text-left bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
              >
                Request Compliance Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-50 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="text-emerald-600 font-medium text-sm mb-6 tracking-wide uppercase">
                The Immutable Layer for Global Supply Chain Compliance
              </div>
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Digital Product Passports,
                <br />
                <span className="font-medium">Simplified.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                TrustTrack generates unique QR codes for Digital Product Passports, with specialized focus on 
                Digital Battery Passports (DBP), CBAM compliance, and ESG reporting. Each QR code links to 
                immutable, blockchain-verified product data that meets the world's most demanding compliance mandates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleContactDemo}
                  className="bg-blue-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-600 transition-colors inline-flex items-center justify-center group"
                >
                  Request a Compliance Demo
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="#technology"
                  className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-emerald-600 transition-colors text-center"
                >
                  Explore Our Technology
                </a>
              </div>
              <div className="mt-12 text-xs text-emerald-600 font-medium tracking-wide uppercase">
                Authenticity • Accountability • Audit-Ready
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Clean tracking visualization */}
                <div className="bg-white border border-gray-200 rounded-2xl p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent"></div>
                  
                  {/* Central tracking circle */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-48 h-48 border-2 border-blue-200 rounded-full relative flex items-center justify-center">
                      {/* Tracking line forming circle */}
                      <div className="w-32 h-32 border-2 border-emerald-200 rounded-full flex items-center justify-center border-dashed animate-spin" style={{animationDuration: '20s'}}>
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                          <Logo className="h-8 w-8 text-white" size={32} />
                        </div>
                      </div>
                      
                      {/* Tracking nodes around the circle */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                      </div>
                      <div className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Status indicators */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl">
                    <span className="text-sm font-medium text-gray-700">DBP Compliance Ready</span>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl">
                    <span className="text-sm font-medium text-gray-700">CBAM Reports Generated</span>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl">
                    <span className="text-sm font-medium text-gray-700">ESG Metrics Tracked</span>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl">
                    <span className="text-sm font-medium text-gray-700">Audit Trail Verified</span>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              The Compliance Gap:
              <br />
              <span className="font-medium">Why Spreadsheets Fail Audits</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemPoints.map((point, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-2xl"></div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              QR-Powered Digital Passports:
              <br />
              <span className="font-medium">Scan, Verify, Comply</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Every product gets a unique QR code that links to its comprehensive digital passport. 
              Scan to access verified compliance data, lifecycle information, and audit trails.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-colors">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                        <IconComponent className={`h-6 w-6 ${feature.color}`} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Suite Section */}
      <section id="products" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Digital Product Passport Solutions:
              <br />
              <span className="font-medium">QR-Powered Compliance for DBP, CBAM & ESG</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Each product receives a unique QR code linking to its digital passport with specialized 
              compliance data for Digital Battery Passports (DBP), carbon reporting, and sustainability metrics.
            </p>
          </div>

          {/* DBP Platform */}
          <div className="mb-16">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Battery className="h-4 w-4 mr-2" />
                    Mandated by Feb 2027
                  </div>
                  <h3 className="text-3xl font-light text-gray-900 mb-6">
                    Digital Battery Passport
                    <br />
                    <span className="font-medium">(DBP) QR Generator</span>
                  </h3>
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
                            <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-500 mx-auto mb-6 rounded-xl flex items-center justify-center">
                      <Battery className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-6">QR Code → Battery Passport</h4>
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=96x96&data=https://trusttrack.io/dbp.html" 
                      alt="QR Code linking to Digital Battery Passport"
                      className="w-full h-full object-contain rounded-lg"
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

          <div className="mb-16">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="bg-white border border-gray-200 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-500 mx-auto mb-6 rounded-xl flex items-center justify-center">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-6">ESG Dashboard</h4>
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=96x96&data=https://trusttrack.io/esg.html" 
                      alt="QR Code linking to ESG Report"
                      className="w-24 h-24 mx-auto mb-4 border border-gray-200 rounded-lg"
                    />
                    <div className="space-y-4 text-sm">
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Carbon Footprint</span>
                          <span className="text-emerald-600 font-medium">-15% YoY</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
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
                <div>
                  <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Globe className="h-4 w-4 mr-2" />
                    Growing investor & regulatory demand
                  </div>
                  <h3 className="text-3xl font-light text-gray-900 mb-6">
                    ESG Digital Passports
                    <br />
                    <span className="font-medium">QR-Linked Sustainability Data</span>
                  </h3>
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
                            <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CBAM Reporter */}
          <div className="mb-16">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="bg-white border border-gray-200 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 mx-auto mb-6 rounded-xl flex items-center justify-center">
                      <Factory className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-6">CBAM Report</h4>
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=96x96&data=https://trusttrack.io" 
                      alt="QR Code linking to TrustTrack"
                      className="w-24 h-24 mx-auto mb-4 border border-gray-200 rounded-lg"
                    />
                    <div className="space-y-4 text-sm">
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Steel Import</span>
                          <span className="text-gray-900 font-medium">€15,420</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
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
                  <h3 className="text-3xl font-light text-gray-900 mb-6">
                    CBAM Digital Passports
                    <br />
                    <span className="font-medium">QR-Linked Carbon Data</span>
                  </h3>
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
                            <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Built on Trust:
              <br />
              <span className="font-medium">The Distributed Ledger Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              TrustTrack is built on enterprise-grade blockchain technology to meet the rigorous data integrity and sovereignty requirements of the Digital Product Passport (DBP) standard.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-10">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-8">
                <Lock className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Data Integrity & Traceability</h3>
              <p className="text-gray-600 leading-relaxed">
                The shared ledger stores only the cryptographic proof (hash) of your data, guaranteeing authenticity 
                and making it impossible to tamper with the history.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-10">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-8">
                <Database className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Privacy by Design (Hybrid Model)</h3>
              <p className="text-gray-600 leading-relaxed">
                Sensitive, proprietary data (trade secrets) is stored securely off-chain in your private databases, 
                ensuring high performance, scalability, and data sovereignty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Cost-Effective Compliance,
              <br />
              <span className="font-medium">Scaled for Industry</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Globe className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">SaaS Subscription</h3>
              <p className="text-gray-600 mb-6">Based on site complexity and volume</p>
              <div className="text-3xl font-light text-gray-900 mb-2">Pricing</div>
              <div className="text-sm text-gray-500">available upon request</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <FileCheck className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Declaration Fee</h3>
              <p className="text-gray-600 mb-6">Per CBAM declaration/shipment</p>
              <div className="text-3xl font-light text-gray-900 mb-2">Custom</div>
              <div className="text-sm text-gray-500">pricing available</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Verified Reports Add-on</h3>
              <p className="text-gray-600 mb-6">Integration fees for official third-party verification stamps</p>
              <div className="text-3xl font-light text-gray-900 mb-2">Custom</div>
              <div className="text-sm text-gray-500">pricing available</div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={handleContactDemo}
              className="bg-blue-500 text-white px-12 py-5 text-lg font-medium rounded-xl hover:bg-blue-600 transition-colors inline-flex items-center group"
            >
              Ready to meet your 2027 mandate? Contact us to schedule a Pilot
              <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Ready to Secure Your
              <br />
              <span className="font-medium">Compliance Future?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Don't let compliance deadlines catch you unprepared. Schedule a demo today and see how TrustTrack 
              can eliminate your audit risk while streamlining your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleContactDemo}
                className="bg-blue-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-600 transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Schedule Compliance Demo
              </button>
              <button 
                onClick={handleContactDemo}
                className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-emerald-600 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="mr-3 h-5 w-5" />
                Contact Sales Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gray-900 border-t border-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <Logo className="h-8 w-8 text-gray-400 mr-3" size={32} />
                <span className="font-medium text-xl text-white">TrustTrack</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                The Immutable Layer for Global Supply Chain Compliance. Blockchain-powered platform 
                for Digital Battery Passports (DBP), CBAM reporting, and ESG compliance.
              </p>
              <div className="text-xs text-gray-500 leading-relaxed">
                TrustTrack is a Distributed DPP System Service enabling economic operators to achieve 
                compliance with EU Battery Regulation (2023/1542) Digital Battery Passport (DBP) mandate and CBAM.
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-6">Products</h3>
              <ul className="space-y-3">
                <li><a href="#products" className="text-gray-400 hover:text-gray-300 transition-colors">DBP Platform</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-gray-300 transition-colors">CBAM Reporter</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-gray-300 transition-colors">ESG Platform</a></li>
                <li><a href="#technology" className="text-gray-400 hover:text-gray-300 transition-colors">Technology</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-6">Company</h3>
              <ul className="space-y-3">
                <li><button onClick={handleContactDemo} className="text-gray-400 hover:text-gray-300 transition-colors text-left">Contact</button></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2025 TrustTrack. All Rights Reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;