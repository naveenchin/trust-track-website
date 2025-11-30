import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Battery, 
  Shield, 
  Database, 
  Lock, 
  Users, 
  Zap, 
  FileCheck, 
  Globe, 
  Settings, 
  DollarSign, 
  Leaf, 
  Recycle, 
  Rocket, 
  AlertTriangle, 
  Link2, 
  FileX, 
  Puzzle, 
  BarChart3,
  Brain,
  Coins,
  Cloud,
  ArrowRight,
  CheckCircle,
  Calendar,
  Factory,
  TrendingUp,
  Eye
} from 'lucide-react';
import { Logo } from './Logo';

export const DBPPage: React.FC = () => {
  const handleGetDBPReady = () => {
    const subject = encodeURIComponent('Get DBP-Ready with TrustTrack');
    const body = encodeURIComponent(`Hello,

I would like to learn more about getting DBP-ready with TrustTrack for the February 2027 mandate.

Our organization: [Please specify - Battery manufacturer, importer, distributor, etc.]
Current data management approach: [ERP system, Excel, other tools]
Timeline for compliance preparation: [When do you need to be ready?]

Please provide information on your DBP solution.

Best regards`);
    
    const mailtoLink = `mailto:naveen@trusttrack.io?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const handleBookDemo = () => {
    const subject = encodeURIComponent('TrustTrack DBP Demo Request');
    const body = encodeURIComponent(`Hello,

I would like to schedule a Digital Battery Passport (DBP) demo to understand how TrustTrack can help our organization prepare for the February 2027 mandate.

Our battery operations: [Please specify - Manufacturing, Import, Distribution, etc.]
Current compliance preparation status: [Just starting, in progress, need verification]
Preferred demo format: [Live demo, technical walkthrough, compliance overview]

Please let me know your availability.

Best regards`);
    
    const mailtoLink = `mailto:naveen@trusttrack.io?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const industryProblems = [
    {
      icon: Puzzle,
      title: 'Data silos across ERPs, CRMs, and MES',
      color: 'text-red-500'
    },
    {
      icon: Lock,
      title: 'Trade-secret and data sovereignty risks',
      color: 'text-orange-500'
    },
    {
      icon: FileX,
      title: 'Manual processes and Excel-based maturity',
      color: 'text-yellow-500'
    },
    {
      icon: Link2,
      title: 'No trusted interoperability layer',
      color: 'text-gray-500'
    },
    {
      icon: Settings,
      title: 'Fragmented responsibilities across actors',
      color: 'text-purple-500'
    },
    {
      icon: AlertTriangle,
      title: 'SMEs struggling to meet regulatory expectations',
      color: 'text-red-500'
    }
  ];

  const opportunityFeatures = [
    {
      icon: Settings,
      title: 'Operational Excellence',
      description: 'Unify fragmented data flows and automate processes',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: DollarSign,
      title: 'Cost Efficiency',
      description: 'Automate compliance and reduce manual workloads',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Leaf,
      title: 'Sustainability Proof',
      description: 'Verify carbon, materials, and ethical sourcing',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Recycle,
      title: 'Circularity Enablement',
      description: 'Power reuse, repair, and recycling with verified digital records',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Rocket,
      title: 'New Value Models',
      description: 'Enable leasing, traceable materials, and secondary trade',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const architecturePillars = [
    {
      icon: Link2,
      title: 'Immutable Ledger',
      description: 'DLT-verified lifecycle data ensuring audit integrity',
      color: 'text-blue-500',
      borderColor: 'border-blue-200'
    },
    {
      icon: Eye,
      title: 'Role-Based Access',
      description: 'Controlled visibility for OEMs, repairers, recyclers, notified bodies, and public stakeholders',
      color: 'text-emerald-500',
      borderColor: 'border-emerald-200'
    },
    {
      icon: Database,
      title: 'API-First Design',
      description: 'Seamlessly integrates with ERP, MES, LCA tools, or spreadsheets',
      color: 'text-blue-500',
      borderColor: 'border-blue-200'
    },
    {
      icon: Cloud,
      title: 'Data Sovereignty Layer',
      description: 'Protects trade secrets while enabling verified regulatory access',
      color: 'text-orange-500',
      borderColor: 'border-orange-200'
    }
  ];

  const coreFeatures = [
    {
      title: 'Compliance-ready DBP management',
      icon: Battery,
      color: 'text-emerald-500'
    },
    {
      title: 'Immutable, audit-ready lifecycle records',
      icon: Shield,
      color: 'text-emerald-500'
    }
  ];

  const automationFeatures = [
    {
      title: 'Smart Digital Contracts for automated verification and data-sharing',
      icon: FileCheck,
      color: 'text-blue-500'
    },
    {
      title: 'One-click ESG & CBAM aligned reporting',
      icon: Globe,
      color: 'text-blue-500'
    },
    {
      title: 'Consolidated analytics for lifecycle, carbon, and supplier data',
      icon: BarChart3,
      color: 'text-blue-500'
    }
  ];

  const circularityFeatures = [
    {
      title: 'Integration with reuse and recycling marketplaces',
      icon: Recycle,
      color: 'text-orange-500'
    },
    {
      title: 'Carbon and material credit forecasting',
      icon: Coins,
      color: 'text-orange-500'
    }
  ];

  const operationalValues = [
    'Lower reporting burden',
    'Faster validation and data consistency',
    'Reduced audit friction via immutable verification'
  ];

  const strategicValues = [
    'New insights for supplier benchmarking and optimization',
    'Verified data as a brand trust asset',
    'Future-ready for circular and green-asset markets'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <Logo className="h-10 w-auto mr-4" size={40} />
                <span className="font-medium text-2xl text-gray-800 tracking-tight">TrustTrack</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-500 hover:text-gray-700 font-medium transition-colors">← Back to Home</Link>
              <button 
                onClick={handleBookDemo}
                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-50 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Digital Battery Passport (DBP) —
              <br />
              <span className="font-medium">Compliance, Integrity, and Circular Value</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              From February 2027, every battery sold in Europe must publish verified lifecycle data 
              through a Digital Battery Passport. TrustTrack delivers a compliant, secure, and future-proof solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetDBPReady}
                className="bg-blue-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-600 transition-colors inline-flex items-center justify-center group"
              >
                Get DBP-Ready
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleBookDemo}
                className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-emerald-600 transition-colors text-center"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Context Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
              A New Regulatory Era Begins
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              The EU Battery Regulation mandates end-to-end lifecycle data collection, verification, 
              and publication. The challenge is not just compliance — it's ensuring trust, data integrity, 
              and operational readiness across the supply chain.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="text-blue-700 font-medium text-lg">
                DBP compliance is mandatory. Data integrity is not — unless you choose TrustTrack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
              Today's Reality:
              <br />
              <span className="font-medium text-red-600">Data Chaos and Fragmentation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {industryProblems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                        <IconComponent className={`h-6 w-6 ${problem.color}`} />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">{problem.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-xl font-medium text-orange-500">
              The challenge isn't compliance — it's trust, traceability, and technological readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
              The DBP Is More Than Compliance —
              <br />
              <span className="font-medium text-blue-600">It's a Strategic Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              The Digital Battery Passport is the blueprint for a smarter, circular, and transparent 
              battery economy. TrustTrack helps operators turn regulatory burden into continuous value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {opportunityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className={`${feature.bgColor} border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}>
                  <div className="w-12 h-12 bg-white mx-auto mb-4 rounded-xl flex items-center justify-center shadow-sm">
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Architecture Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              A Living Data Backbone
              <br />
              <span className="font-medium text-blue-600">for the Battery Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              TrustTrack verifies lifecycle data, protects sovereignty, and generates a living DBP 
              as a single source of truth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {architecturePillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div key={index} className={`bg-white ${pillar.borderColor} border-2 rounded-2xl p-8`}>
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                        <IconComponent className={`h-6 w-6 ${pillar.color}`} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-3">{pillar.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flow Diagram */}
          <div className="bg-white border border-gray-200 rounded-2xl p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-red-50 border-2 border-red-200 border-dashed rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <div className="text-sm font-medium text-red-700">UPSTREAM</div>
                    <div className="text-xs text-red-600">Data Chaos</div>
                  </div>
                </div>
              </div>

              <ArrowRight className="h-8 w-8 text-blue-500" />

              <div className="text-center">
                <div className="w-32 h-32 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Logo className="h-8 w-auto mx-auto mb-2" size={32} />
                    <div className="text-sm font-medium text-white">TrustTrack</div>
                    <div className="text-xs text-blue-200">Verification Engine</div>
                  </div>
                </div>
              </div>

              <ArrowRight className="h-8 w-8 text-emerald-500" />

              <div className="text-center">
                <div className="w-32 h-32 bg-emerald-50 border-2 border-emerald-200 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Battery className="h-8 w-8 text-emerald-500 mx-auto mb-2" />
                    <div className="text-sm font-medium text-emerald-700">LIVING DBP</div>
                    <div className="text-xs text-emerald-600">Single Source of Truth</div>
                  </div>
                </div>
                <div className="flex justify-center space-x-2 mt-4">
                  <div className="px-2 py-1 bg-gray-100 rounded text-xs">Public</div>
                  <div className="px-2 py-1 bg-orange-100 rounded text-xs">Notified Body</div>
                  <div className="px-2 py-1 bg-green-100 rounded text-xs">Recyclers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              From Compliance to Intelligence
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Core Compliance */}
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-100 mx-auto mb-4 rounded-xl flex items-center justify-center">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-medium text-purple-600 mb-2">Core Compliance & Trust</h3>
              </div>
              <div className="space-y-6">
                {coreFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                            <IconComponent className={`h-4 w-4 ${feature.color}`} />
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700 leading-relaxed">{feature.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Automation & Insights */}
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 mx-auto mb-4 rounded-xl flex items-center justify-center">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-medium text-blue-600 mb-2">Automation & Insights</h3>
              </div>
              <div className="space-y-6">
                {automationFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                            <IconComponent className={`h-4 w-4 ${feature.color}`} />
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700 leading-relaxed">{feature.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Circularity & New Value */}
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-100 mx-auto mb-4 rounded-xl flex items-center justify-center">
                  <Recycle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-medium text-orange-600 mb-2">Circularity & New Value</h3>
              </div>
              <div className="space-y-6">
                {circularityFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                            <IconComponent className={`h-4 w-4 ${feature.color}`} />
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700 leading-relaxed">{feature.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              When Trust Becomes Measurable,
              <br />
              <span className="font-medium text-blue-600">It Becomes Valuable</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Operational Value */}
            <div className="bg-white border border-gray-200 rounded-2xl p-10">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-8">
                <Settings className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Operational Value</h3>
              <div className="space-y-4">
                {operationalValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Value */}
            <div className="bg-white border border-gray-200 rounded-2xl p-10">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-8">
                <TrendingUp className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Strategic Value</h3>
              <div className="space-y-4">
                {strategicValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Be Ready for 2027 — and Beyond
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              TrustTrack ensures DBP compliance while unlocking operational and circular value 
              across the battery lifecycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleGetDBPReady}
                className="bg-blue-500 text-white px-12 py-5 text-lg font-medium rounded-xl hover:bg-blue-600 transition-colors inline-flex items-center justify-center group"
              >
                Talk to Us
                <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleBookDemo}
                className="bg-emerald-500 text-white px-12 py-5 text-lg font-medium rounded-xl hover:bg-emerald-600 transition-colors"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};