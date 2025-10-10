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
    
    const mailtoLink = `mailto:compliance@trusttrack.io?subject=${subject}&body=${body}`;
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
      icon: Database,
      title: 'ERP Integration',
      description: 'Seamlessly connect with existing systems (SAP, Oracle, MES/LIMS) to capture data at the source.'
    },
    {
      icon: Lock,
      title: 'Immutable Ledger',
      description: 'Every transaction and data update is hashed and recorded using distributed ledger technology, guaranteeing data authenticity.'
    },
    {
      icon: FileCheck,
      title: 'Automated Reporting',
      description: 'Auto-generate regulator-ready XML/CSV reports for CBAM and standardized DBP data models.'
    },
    {
      icon: Shield,
      title: 'Verification Layer',
      description: 'Optional integration with third-party certifiers (SGS, TÜV, DNV) provides verifiable proof of compliance on the blockchain.'
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

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Logo className="h-11 w-11 text-slate-800 mr-4" size={44} />
                <span className="font-semibold text-2xl text-slate-800 tracking-tight">TrustTrack</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-10">
              <a href="#products" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Products</a>
              <a href="#technology" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Technology</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Contact</a>
              <button 
                onClick={handleContactDemo}
                className="bg-slate-900 text-white px-7 py-3 font-medium hover:bg-slate-800 transition-colors border border-slate-900"
              >
                Request Demo
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-6 py-4 space-y-3">
              <a href="#products" className="block text-slate-600 hover:text-slate-900 font-medium">Products</a>
              <a href="#technology" className="block text-slate-600 hover:text-slate-900 font-medium">Technology</a>
              <a href="#contact" className="block text-slate-600 hover:text-slate-900 font-medium">Contact</a>
              <button 
                onClick={handleContactDemo}
                className="block w-full text-left bg-slate-900 text-white px-7 py-3 font-medium hover:bg-slate-800 transition-colors"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="text-slate-600 font-medium text-lg mb-6 tracking-wide">
                THE IMMUTABLE LAYER FOR GLOBAL SUPPLY CHAIN COMPLIANCE
              </div>
              <h1 className="text-5xl lg:text-6xl font-light text-slate-900 mb-8 leading-tight tracking-tight">
                EU Compliance,
                <br />
                <span className="font-medium">Simplified.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                TrustTrack powers your Digital Battery Passports & CBAM Reporting. 
                Eliminate audit risk and operational complexity with our blockchain-based platform 
                providing immutable, audit-ready data.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={handleContactDemo}
                  className="bg-slate-900 text-white px-8 py-4 font-medium hover:bg-slate-800 transition-colors inline-flex items-center justify-center group"
                >
                  Request a Compliance Demo
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="#technology"
                  className="border border-slate-300 text-slate-700 px-8 py-4 font-medium hover:border-slate-400 hover:bg-slate-50 transition-colors text-center"
                >
                  Explore Technology
                </a>
              </div>
              <div className="mt-12 text-sm text-slate-500 font-medium tracking-wide">
                AUTHENTICITY • ACCOUNTABILITY • AUDIT-READY
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Geometric visualization */}
                <div className="bg-slate-50 border border-slate-200 p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-transparent"></div>
                  
                  {/* Central tracking circle */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-48 h-48 border-2 border-slate-300 rounded-full relative flex items-center justify-center">
                      {/* Inner elements representing data points */}
                      <div className="w-32 h-32 border border-slate-400 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center">
                          <Lock className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Tracking points around the circle */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                        <div className="w-4 h-4 bg-slate-600 rounded-full"></div>
                      </div>
                      <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                        <div className="w-4 h-4 bg-slate-600 rounded-full"></div>
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                        <div className="w-4 h-4 bg-slate-600 rounded-full"></div>
                      </div>
                      <div className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2">
                        <div className="w-4 h-4 bg-slate-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-slate-400"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-slate-400"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-slate-400"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-slate-400"></div>
                </div>
                
                {/* Status indicators */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white border border-slate-200">
                    <span className="text-sm font-medium text-slate-700">DBP Compliance Ready</span>
                    <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white border border-slate-200">
                    <span className="text-sm font-medium text-slate-700">CBAM Reports Generated</span>
                    <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white border border-slate-200">
                    <span className="text-sm font-medium text-slate-700">Audit Trail Verified</span>
                    <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              The Compliance Gap:
              <br />
              <span className="font-medium">Why Spreadsheets Fail Audits</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemPoints.map((point, index) => (
              <div key={index} className="bg-white border border-slate-200 p-8 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-slate-900"></div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              TrustTrack:
              <br />
              <span className="font-medium">The Immutable, Audit-Ready Solution</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutionFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="border border-slate-200 p-8 hover:border-slate-300 transition-colors">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-slate-100 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-slate-700" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-slate-900 mb-3">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Suite Section */}
      <section id="products" className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Our Products:
              <br />
              <span className="font-medium">Compliance-as-a-Service for Critical Mandates</span>
            </h2>
          </div>

          {/* DBP Platform */}
          <div className="mb-20">
            <div className="bg-white border border-slate-200 p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center border border-slate-300 text-slate-700 px-4 py-2 text-sm font-medium mb-6">
                    <Battery className="h-4 w-4 mr-2" />
                    Mandated by Feb 2027
                  </div>
                  <h3 className="text-3xl font-light text-slate-900 mb-6 tracking-tight">
                    Digital Battery Passport
                    <br />
                    <span className="font-medium">(DBP) Platform</span>
                  </h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Mandated by EU Battery Regulation (2023/1542) by Feb 2027. Enables Data Sovereignty, 
                    Semantic Interoperability, and Tiered Access Control.
                  </p>
                  <div className="space-y-6">
                    {dbpFeatures.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-slate-100 flex items-center justify-center">
                              <IconComponent className="h-4 w-4 text-slate-700" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-900 mb-1">{feature.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-200 mx-auto mb-6 flex items-center justify-center">
                      <Battery className="h-8 w-8 text-slate-700" />
                    </div>
                    <h4 className="text-lg font-medium text-slate-900 mb-6">Battery Passport</h4>
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between items-center py-2 border-b border-slate-200">
                        <span className="text-slate-600">Unique ID:</span>
                        <span className="font-mono text-slate-900">BP-2024-001</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-200">
                        <span className="text-slate-600">Carbon Footprint:</span>
                        <span className="text-slate-900 font-medium">Verified ✓</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-slate-600">State of Health:</span>
                        <span className="text-slate-900 font-medium">92%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CBAM Reporter */}
          <div className="mb-16">
            <div className="bg-white border border-slate-200 p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="bg-slate-50 border border-slate-200 p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-200 mx-auto mb-6 flex items-center justify-center">
                      <Factory className="h-8 w-8 text-slate-700" />
                    </div>
                    <h4 className="text-lg font-medium text-slate-900 mb-6">CBAM Report</h4>
                    <div className="space-y-4 text-sm">
                      <div className="bg-white border border-slate-200 p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Steel Import</span>
                          <span className="text-slate-900 font-medium">€15,420</span>
                        </div>
                      </div>
                      <div className="bg-white border border-slate-200 p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Cement Import</span>
                          <span className="text-slate-900 font-medium">€8,750</span>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 mt-4">
                        Saves €20k–100k/year vs. consultants
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center border border-red-300 text-red-700 px-4 py-2 text-sm font-medium mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    High urgency for 2026
                  </div>
                  <h3 className="text-3xl font-light text-slate-900 mb-6 tracking-tight">
                    Carbon Border Adjustment
                    <br />
                    <span className="font-medium">Mechanism (CBAM) Reporter</span>
                  </h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    High urgency for EU importers of Cement, Lime, Steel, Aluminum. 
                    Saves €20k–100k/year vs. consultants and eliminates manual reporting pain.
                  </p>
                  <div className="space-y-6">
                    {cbamFeatures.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-slate-100 flex items-center justify-center">
                              <IconComponent className="h-4 w-4 text-slate-700" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-900 mb-1">{feature.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ESG Compliance Platform */}
          <div>
            <div className="bg-white border border-slate-200 p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center border border-green-300 text-green-700 px-4 py-2 text-sm font-medium mb-6">
                    <Globe className="h-4 w-4 mr-2" />
                    Growing regulatory focus
                  </div>
                  <h3 className="text-3xl font-light text-slate-900 mb-6 tracking-tight">
                    ESG Compliance
                    <br />
                    <span className="font-medium">& Sustainability Reporting</span>
                  </h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Meet growing ESG disclosure requirements with immutable sustainability data. 
                    Track environmental impact, social responsibility, and governance metrics across your supply chain.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-slate-100 flex items-center justify-center">
                          <Globe className="h-4 w-4 text-slate-700" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1">Environmental Impact Tracking</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">Monitor carbon footprint, water usage, and waste metrics with immutable records</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-slate-100 flex items-center justify-center">
                          <Users className="h-4 w-4 text-slate-700" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1">Social Responsibility Metrics</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">Track labor practices, community impact, and supplier diversity across your network</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-slate-100 flex items-center justify-center">
                          <Shield className="h-4 w-4 text-slate-700" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1">Governance & Compliance</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">Automated ESG reporting for CSRD, TCFD, and other regulatory frameworks</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-200 mx-auto mb-6 flex items-center justify-center">
                      <Globe className="h-8 w-8 text-slate-700" />
                    </div>
                    <h4 className="text-lg font-medium text-slate-900 mb-6">ESG Dashboard</h4>
                    <div className="space-y-4 text-sm">
                      <div className="bg-white border border-slate-200 p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-600">Carbon Intensity</span>
                          <span className="text-green-600 font-medium">-12%</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2">
                          <div className="bg-green-500 h-2 w-3/4"></div>
                        </div>
                      </div>
                      <div className="bg-white border border-slate-200 p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-600">Supplier Compliance</span>
                          <span className="text-slate-900 font-medium">94%</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2">
                          <div className="bg-slate-600 h-2 w-11/12"></div>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 mt-4">
                        Real-time ESG performance tracking
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Built on Trust:
              <br />
              <span className="font-medium">The Distributed Ledger Advantage</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              TrustTrack is built on enterprise-grade blockchain technology to meet the rigorous data integrity and sovereignty requirements of the Digital Product Passport (DBP) standard.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="border border-slate-200 p-10">
              <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-8">
                <Lock className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-2xl font-medium text-slate-900 mb-6">Data Integrity & Traceability</h3>
              <p className="text-slate-600 leading-relaxed">
                The shared ledger stores only the cryptographic proof (hash) of your data, guaranteeing authenticity 
                and making it impossible to tamper with the history.
              </p>
            </div>
            <div className="border border-slate-200 p-10">
              <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-8">
                <Database className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-2xl font-medium text-slate-900 mb-6">Privacy by Design (Hybrid Model)</h3>
              <p className="text-slate-600 leading-relaxed">
                Sensitive, proprietary data (trade secrets) is stored securely off-chain in your private databases, 
                ensuring high performance, scalability, and data sovereignty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Cost-Effective Compliance,
              <br />
              <span className="font-medium">Scaled for Industry</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-slate-200 p-8 text-center">
              <div className="w-12 h-12 bg-slate-100 mx-auto mb-6 flex items-center justify-center">
                <Globe className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">SaaS Subscription</h3>
              <p className="text-slate-600 mb-6">Based on site complexity and volume</p>
              <div className="text-3xl font-light text-slate-900 mb-2">€3k–5k</div>
              <div className="text-sm text-slate-500">per month per site</div>
            </div>
            <div className="bg-white border border-slate-200 p-8 text-center">
              <div className="w-12 h-12 bg-slate-100 mx-auto mb-6 flex items-center justify-center">
                <FileCheck className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">Declaration Fee</h3>
              <p className="text-slate-600 mb-6">Per CBAM declaration/shipment</p>
              <div className="text-3xl font-light text-slate-900 mb-2">€50–100</div>
              <div className="text-sm text-slate-500">per shipment</div>
            </div>
            <div className="bg-white border border-slate-200 p-8 text-center">
              <div className="w-12 h-12 bg-slate-100 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">Verified Reports Add-on</h3>
              <p className="text-slate-600 mb-6">Integration fees for official third-party verification stamps</p>
              <div className="text-3xl font-light text-slate-900 mb-2">Custom</div>
              <div className="text-sm text-slate-500">pricing available</div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={handleContactDemo}
              className="bg-slate-900 text-white px-12 py-5 text-lg font-medium hover:bg-slate-800 transition-colors inline-flex items-center group"
            >
              Ready to meet your 2027 mandate? Contact us to schedule a Pilot
              <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
              Ready to Secure Your
              <br />
              <span className="font-medium">Compliance Future?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Don't let compliance deadlines catch you unprepared. Schedule a demo today and see how TrustTrack 
              can eliminate your audit risk while streamlining your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleContactDemo}
                className="bg-white text-slate-900 px-8 py-4 font-medium hover:bg-slate-100 transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Schedule Compliance Demo
              </button>
              <button 
                onClick={handleContactDemo}
                className="border border-slate-600 text-slate-300 px-8 py-4 font-medium hover:border-slate-500 hover:bg-slate-800 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="mr-3 h-5 w-5" />
                Contact Sales Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <Logo className="h-8 w-8 text-slate-400 mr-3" size={32} />
                <span className="font-semibold text-xl text-white">TrustTrack</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
                The Immutable Layer for Global Supply Chain Compliance. Blockchain-powered platform 
                for Digital Battery Passports, CBAM reporting, and ESG compliance.
              </p>
              <div className="text-xs text-slate-500 leading-relaxed">
                TrustTrack is a Distributed DPP System Service enabling economic operators to achieve 
                compliance with EU Battery Regulation (2023/1542) and CBAM.
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-6">Products</h3>
              <ul className="space-y-3">
                <li><a href="#products" className="text-slate-400 hover:text-slate-300 transition-colors">DBP Platform</a></li>
                <li><a href="#products" className="text-slate-400 hover:text-slate-300 transition-colors">CBAM Reporter</a></li>
                <li><a href="#technology" className="text-slate-400 hover:text-slate-300 transition-colors">Technology</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-6">Company</h3>
              <ul className="space-y-3">
                <li><button onClick={handleContactDemo} className="text-slate-400 hover:text-slate-300 transition-colors text-left">Contact</button></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">Support</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">© 2025 TrustTrack. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;