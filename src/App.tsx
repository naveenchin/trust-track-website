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
  Phone
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
      description: 'Every transaction and data update is hashed and recorded on Hyperledger Fabric, guaranteeing data authenticity.'
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Logo className="h-10 w-10 text-[#0A1931] mr-3" size={40} />
                <span className="font-bold text-2xl text-[#0A1931]">TrustTrack</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-gray-700 hover:text-[#00A8E8] px-3 py-2 text-sm font-medium">Products</a>
              <a href="#technology" className="text-gray-700 hover:text-[#00A8E8] px-3 py-2 text-sm font-medium">Technology</a>
              <a href="#contact" className="text-gray-700 hover:text-[#00A8E8] px-3 py-2 text-sm font-medium">Contact</a>
              <button 
                onClick={handleContactDemo}
                className="bg-[#00C9A7] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#00B396] transition duration-200"
              >
                Request Compliance Demo
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-[#00A8E8]"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-[#00A8E8]">Products</a>
              <a href="#technology" className="block px-3 py-2 text-gray-700 hover:text-[#00A8E8]">Technology</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-[#00A8E8]">Contact</a>
              <button 
                onClick={handleContactDemo}
                className="block px-3 py-2 bg-[#00C9A7] text-white rounded-lg hover:bg-[#00B396] w-full text-left"
              >
                Request Compliance Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1931] to-[#1a2b4a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#00C9A7] font-semibold text-lg mb-4">
                The Immutable Layer for Global Supply Chain Compliance
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                EU Compliance, Simplified. 
                <span className="text-[#00A8E8]"> TrustTrack powers your Digital Battery Passports & CBAM Reporting.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Eliminate audit risk and operational complexity. Our Hyperledger Fabric-based platform provides immutable, 
                audit-ready data for the world's most demanding compliance mandates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleContactDemo}
                  className="bg-[#00C9A7] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#00B396] transition duration-200 text-center inline-flex items-center justify-center"
                >
                  Request a Compliance Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <a 
                  href="#technology"
                  className="border-2 border-[#00A8E8] text-[#00A8E8] px-8 py-4 rounded-lg font-semibold hover:bg-[#00A8E8] hover:text-white transition duration-200 text-center"
                >
                  Explore Our Technology
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <span className="font-semibold text-[#00C9A7]">Authenticity. Accountability. Audit-Ready.</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-[#00C9A7] mr-3" />
                  <span className="font-semibold text-white text-lg">Compliance Dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#00C9A7]/20 rounded-lg border border-[#00C9A7]/30">
                    <span className="text-sm font-medium text-white">DBP Compliance Ready</span>
                    <CheckCircle className="h-5 w-5 text-[#00C9A7]" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#00A8E8]/20 rounded-lg border border-[#00A8E8]/30">
                    <span className="text-sm font-medium text-white">CBAM Reports Generated</span>
                    <FileCheck className="h-5 w-5 text-[#00A8E8]" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg border border-white/20">
                    <span className="text-sm font-medium text-white">Audit Trail Verified</span>
                    <Lock className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1931] mb-4">
              The Compliance Gap: Why Spreadsheets Fail Audits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-[#0A1931] mb-4">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1931] mb-4">
              TrustTrack: The Immutable, Audit-Ready Solution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutionFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200 border border-gray-100">
                  <div className="inline-flex p-4 rounded-xl bg-[#00C9A7]/10 text-[#00C9A7] mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A1931] mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Suite Section */}
      <section id="products" className="bg-[#F9FAFB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1931] mb-4">
              Our Products: Compliance-as-a-Service for Critical Mandates
            </h2>
          </div>

          {/* DBP Platform */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center bg-[#00A8E8]/10 text-[#00A8E8] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Battery className="h-4 w-4 mr-2" />
                    Mandated by Feb 2027
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0A1931] mb-4">
                    Digital Battery Passport (DBP) Platform
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Mandated by EU Battery Regulation (2023/1542) by Feb 2027. Enables Data Sovereignty, 
                    Semantic Interoperability, and Tiered Access Control.
                  </p>
                  <div className="space-y-4">
                    {dbpFeatures.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="inline-flex p-2 rounded-lg bg-[#00C9A7]/10 text-[#00C9A7]">
                              <IconComponent className="h-5 w-5" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0A1931] mb-1">{feature.title}</h4>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#00A8E8]/10 to-[#00C9A7]/10 rounded-2xl p-8">
                  <div className="text-center">
                    <Battery className="h-16 w-16 text-[#00A8E8] mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-[#0A1931] mb-2">Battery Passport</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Unique ID:</span>
                        <span className="font-mono">BP-2024-001</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Carbon Footprint:</span>
                        <span className="text-[#00C9A7] font-semibold">Verified ✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>State of Health:</span>
                        <span className="text-[#00A8E8] font-semibold">92%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CBAM Reporter */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-gradient-to-br from-[#0A1931]/10 to-[#00A8E8]/10 rounded-2xl p-8">
                  <div className="text-center">
                    <Factory className="h-16 w-16 text-[#0A1931] mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-[#0A1931] mb-4">CBAM Report</h4>
                    <div className="space-y-3 text-sm">
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Steel Import</span>
                          <span className="text-[#00C9A7] font-semibold">€15,420</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Cement Import</span>
                          <span className="text-[#00C9A7] font-semibold">€8,750</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        Saves €20k–100k/year vs. consultants
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    High urgency for 2026
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0A1931] mb-4">
                    Carbon Border Adjustment Mechanism (CBAM) Reporter
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    High urgency for EU importers of Cement, Lime, Steel, Aluminum. 
                    Saves €20k–100k/year vs. consultants and eliminates manual reporting pain.
                  </p>
                  <div className="space-y-4">
                    {cbamFeatures.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="inline-flex p-2 rounded-lg bg-[#00A8E8]/10 text-[#00A8E8]">
                              <IconComponent className="h-5 w-5" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0A1931] mb-1">{feature.title}</h4>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
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
      <section id="technology" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1931] mb-4">
              Built on Trust: The Hyperledger Fabric Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TrustTrack uses the industry-standard Hyperledger Fabric (HLF) to meet the Battery Pass Technical Standard Stack requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#00C9A7]/10 to-[#00A8E8]/10 rounded-2xl p-8">
              <div className="inline-flex p-4 rounded-xl bg-[#00C9A7]/20 text-[#00C9A7] mb-6">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1931] mb-4">Data Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                HLF Ledger stores only the cryptographic hash of the data. Transaction signing ensures that 
                if any data is tampered with, the verification fails.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0A1931]/10 to-[#00A8E8]/10 rounded-2xl p-8">
              <div className="inline-flex p-4 rounded-xl bg-[#00A8E8]/20 text-[#00A8E8] mb-6">
                <Database className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1931] mb-4">Scalability & Privacy</h3>
              <p className="text-gray-600 leading-relaxed">
                Uses a Hybrid Ledger Model. Sensitive, proprietary data is stored off-chain in private databases 
                for performance and to protect trade secrets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1931] mb-4">
              Cost-Effective Compliance, Scaled for Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="inline-flex p-4 rounded-xl bg-[#00C9A7]/10 text-[#00C9A7] mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1931] mb-4">SaaS Subscription</h3>
              <p className="text-gray-600 mb-4">Based on site complexity and volume</p>
              <div className="text-2xl font-bold text-[#00A8E8]">€3k–5k</div>
              <div className="text-sm text-gray-500">per month per site</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="inline-flex p-4 rounded-xl bg-[#00A8E8]/10 text-[#00A8E8] mb-6">
                <FileCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1931] mb-4">Declaration Fee</h3>
              <p className="text-gray-600 mb-4">Per CBAM declaration/shipment</p>
              <div className="text-2xl font-bold text-[#00A8E8]">€50–100</div>
              <div className="text-sm text-gray-500">per shipment</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="inline-flex p-4 rounded-xl bg-[#0A1931]/10 text-[#0A1931] mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1931] mb-4">Verified Reports Add-on</h3>
              <p className="text-gray-600 mb-4">Integration fees for official third-party verification stamps</p>
              <div className="text-2xl font-bold text-[#00A8E8]">Custom</div>
              <div className="text-sm text-gray-500">pricing available</div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={handleContactDemo}
              className="bg-[#00C9A7] text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-[#00B396] transition duration-200 inline-flex items-center"
            >
              Ready to meet your 2027 mandate? Contact us to schedule a Pilot
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#0A1931] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Compliance Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't let compliance deadlines catch you unprepared. Schedule a demo today and see how TrustTrack 
              can eliminate your audit risk while streamlining your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleContactDemo}
                className="bg-[#00C9A7] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#00B396] transition duration-200 inline-flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Compliance Demo
              </button>
              <button 
                onClick={handleContactDemo}
                className="border-2 border-[#00A8E8] text-[#00A8E8] px-8 py-4 rounded-lg font-semibold hover:bg-[#00A8E8] hover:text-white transition duration-200 inline-flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Sales Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1931] border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Logo className="h-8 w-8 text-[#00A8E8] mr-2" size={32} />
                <span className="font-bold text-xl text-white">TrustTrack</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                The Immutable Layer for Global Supply Chain Compliance. Blockchain-powered platform 
                for Digital Battery Passports, CBAM reporting, and ESG compliance.
              </p>
              <div className="text-xs text-gray-500">
                TrustTrack is a Distributed DPP System Service enabling economic operators to achieve 
                compliance with EU Battery Regulation (2023/1542) and CBAM.
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#products" className="text-gray-400 hover:text-[#00A8E8] transition-colors">DBP Platform</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-[#00A8E8] transition-colors">CBAM Reporter</a></li>
                <li><a href="#technology" className="text-gray-400 hover:text-[#00A8E8] transition-colors">Technology</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><button onClick={handleContactDemo} className="text-gray-400 hover:text-[#00A8E8] transition-colors text-left">Contact</button></li>
                <li><a href="#" className="text-gray-400 hover:text-[#00A8E8] transition-colors">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#00A8E8] transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 TrustTrack. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;