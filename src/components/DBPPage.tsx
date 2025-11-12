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
  Calendar
} from 'lucide-react';
import { Logo } from './Logo';

export const DBPPage: React.FC = () => {
  const handleContactDemo = () => {
    const subject = encodeURIComponent('TrustTrack DBP Demo Request');
    const body = encodeURIComponent(`Hello,

I would like to schedule a Digital Battery Passport (DBP) demo for our organization.

Our battery operations: [Please specify - Manufacturing, Import, Distribution, etc.]
Timeline for 2027 compliance: [When do you need to be ready?]
Current data management: [Excel, ERP system, other?]

Please let me know your availability.

Best regards`);
    
    const mailtoLink = `mailto:naveen@trusttrack.io?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const problemPoints = [
    {
      icon: Puzzle,
      title: 'Data Silos',
      description: 'Fragmented data across systems, departments, and suppliers',
      color: 'text-red-500'
    },
    {
      icon: Lock,
      title: 'Trade Secret & Data Sovereignty Risk',
      description: 'Exposing sensitive business data to meet compliance requirements',
      color: 'text-orange-500'
    },
    {
      icon: FileX,
      title: 'Excel-Based Maturity',
      description: 'Manual processes that don\'t scale or provide audit trails',
      color: 'text-yellow-500'
    },
    {
      icon: AlertTriangle,
      title: 'SMEs Left Behind',
      description: 'Small and medium enterprises lack resources for compliance',
      color: 'text-red-500'
    },
    {
      icon: Link2,
      title: 'No Trusted Bridge',
      description: 'No reliable connection between data sources and regulators',
      color: 'text-gray-500'
    },
    {
      icon: Settings,
      title: 'Fragmented Responsibility',
      description: 'Unclear ownership and accountability across the value chain',
      color: 'text-purple-500'
    }
  ];

  const opportunityPillars = [
    {
      icon: Settings,
      title: 'Operational Excellence',
      description: 'Unify fragmented data flows and automate manual processes.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: DollarSign,
      title: 'Reduce Costs',
      description: 'Automate compliance and verify warranty claims with trust.',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Leaf,
      title: 'Prove Sustainability',
      description: 'Verify carbon, materials, and ethical sourcing at the source.',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Recycle,
      title: 'Enable Circularity',
      description: 'Power repair, reuse, and recycling with verified digital records.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Rocket,
      title: 'Unlock New Models',
      description: 'Drive battery leasing, traceable materials, and new secondary markets.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const solutionComponents = [
    {
      icon: Link2,
      title: 'Immutable Ledger',
      description: 'Blockchain ensures tamper-proof lifecycle data, guaranteeing integrity for audits and recyclers.',
      color: 'text-blue-500',
      borderColor: 'border-blue-200'
    },
    {
      icon: Database,
      title: 'API-First Design',
      description: 'Integrates easily with ERP, MES, or even Excel. Scalable for SMEs and large OEMs alike.',
      color: 'text-emerald-500',
      borderColor: 'border-emerald-200'
    },
    {
      icon: Lock,
      title: 'Role-Based Access',
      description: 'Controlled visibility for all stakeholders: public users, notified bodies, recyclers, and repairers.',
      color: 'text-blue-500',
      borderColor: 'border-blue-200'
    },
    {
      icon: Cloud,
      title: 'Data Sovereignty Layer',
      description: 'Protects your trade secrets. Enables verified regulatory access without exposing your raw data.',
      color: 'text-orange-500',
      borderColor: 'border-orange-200'
    }
  ];

  const coreFeatures = [
    {
      title: 'Compliance-ready DBP Management',
      description: 'Automated DBP creation & updates.',
      value: 'Regulatory readiness for Feb 2027',
      icon: Battery,
      color: 'text-emerald-500'
    },
    {
      title: 'Immutable, Audit-Ready Records',
      description: 'Blockchain-verified lifecycle proof.',
      value: 'Simplifies audits & builds trust',
      icon: Shield,
      color: 'text-emerald-500'
    }
  ];

  const automationFeatures = [
    {
      title: 'Smart Digital Contracts',
      description: 'Automates verification, warranties, and data-sharing rules.',
      value: 'Reduces admin load & disputes',
      icon: FileCheck,
      color: 'text-blue-500'
    },
    {
      title: 'ESG & CBAM Reporting Automation',
      description: 'One-click generation of verified reports.',
      value: 'Cuts compliance cost by up to 80%',
      icon: Globe,
      color: 'text-blue-500'
    },
    {
      title: 'Consolidated Data Analytics',
      description: 'Carbon accounting, supplier benchmarking, predictive maintenance.',
      value: 'Enables optimization & insights',
      icon: BarChart3,
      color: 'text-blue-500'
    }
  ];

  const circularityFeatures = [
    {
      title: 'Battery Marketplace Integration',
      description: 'API-ready link to reuse & recycling markets.',
      value: 'Prepares for circular trade models',
      icon: Recycle,
      color: 'text-orange-500'
    },
    {
      title: 'Carbon & Material Credit Forecasting',
      description: 'Tracks emissions + recovered materials for credit potential.',
      value: 'Positions users for new green-asset markets',
      icon: Coins,
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <Logo className="h-10 w-10 text-gray-700 mr-4" size={40} />
                <span className="font-medium text-2xl text-gray-800 tracking-tight">TrustTrack</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-500 hover:text-gray-700 font-medium transition-colors">← Back to Home</Link>
              <button 
                onClick={handleContactDemo}
                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
              >
                Request DBP Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-900 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-emerald-900 text-emerald-300 px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Calendar className="h-4 w-4 mr-2" />
              Mandated by February 2027
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
              Digital Battery Passport:
              <br />
              <span className="font-medium text-blue-400">From Compliance Pain to Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              While many see compliance pain, we see a once-in-a-generation opportunity. 
              The Digital Battery Passport is more than a regulatory checklist — it's the blueprint 
              for a smarter, circular battery economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleContactDemo}
                className="bg-blue-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-600 transition-colors inline-flex items-center justify-center group"
              >
                Schedule DBP Demo
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="#solution"
                className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-emerald-600 transition-colors text-center"
              >
                Explore Our Solution
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Problem Side */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
                The Reality:
                <br />
                <span className="font-medium text-red-600">A System of Fear & Chaos</span>
              </h2>
              <div className="space-y-6">
                {problemPoints.map((point, index) => {
                  const IconComponent = point.icon;
                  return (
                    <div key={index} className="bg-white border border-red-100 rounded-xl p-6 hover:border-red-200 transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                            <IconComponent className={`h-5 w-5 ${point.color}`} />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">{point.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Solution Side */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
                The Mandate:
                <br />
                <span className="font-medium text-blue-600">Absolute Clarity</span>
              </h2>
              <div className="bg-white border border-blue-200 rounded-2xl p-8 mb-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-500 mx-auto mb-6 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">DBP</span>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">
                    Compliance is mandatory.
                    <br />
                    Data integrity is not.
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    By 2027, every operator must collect, manage, and publish verified lifecycle data 
                    through a Digital Battery Passport (DBP).
                  </p>
                </div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <p className="text-blue-700 font-medium">
                  The challenge isn't compliance. It's trust, traceability, and technological readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              <span className="font-medium text-orange-500">While many see compliance pain,</span>
              <br />
              we see a once-in-a-generation opportunity.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Digital Battery Passport is more than a regulatory checklist — it's the blueprint 
              for a smarter, circular battery economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunityPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div key={index} className={`${pillar.bgColor} border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow`}>
                  <div className="w-16 h-16 bg-white mx-auto mb-6 rounded-xl flex items-center justify-center shadow-sm">
                    <IconComponent className={`h-8 w-8 ${pillar.color}`} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-2xl font-medium text-orange-500">
              TrustTrack — turning regulation into intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Architecture Section */}
      <section id="solution" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              The Solution:
              <br />
              <span className="font-medium text-blue-600">A Living Data Backbone</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {solutionComponents.map((component, index) => {
              const IconComponent = component.icon;
              return (
                <div key={index} className={`bg-white ${component.borderColor} border-2 rounded-2xl p-8`}>
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                        <IconComponent className={`h-6 w-6 ${component.color}`} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-3">{component.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{component.description}</p>
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
                    <div className="text-sm font-medium text-red-700">CHAOS</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>Data Silos (ERPs, CRMs, MES)</div>
                  <div>Trade Secret Risk</div>
                </div>
              </div>

              <ArrowRight className="h-8 w-8 text-blue-500" />

              <div className="text-center">
                <div className="w-32 h-32 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Logo className="h-8 w-8 text-white mx-auto mb-2" size={32} />
                    <div className="text-sm font-medium text-white">TrustTrack</div>
                    <div className="text-xs text-blue-200">Verification &</div>
                    <div className="text-xs text-blue-200">Sovereignty Engine</div>
                  </div>
                </div>
              </div>

              <ArrowRight className="h-8 w-8 text-emerald-500" />

              <div className="text-center">
                <div className="w-32 h-32 bg-emerald-50 border-2 border-emerald-200 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Battery className="h-8 w-8 text-emerald-500 mx-auto mb-2" />
                    <div className="text-sm font-medium text-emerald-700">LIVING DBP</div>
                    <div className="text-xs text-emerald-600">(Single Source of Truth)</div>
                  </div>
                </div>
                <div className="flex justify-center space-x-2 mt-4">
                  <div className="px-2 py-1 bg-gray-100 rounded text-xs">Public</div>
                  <div className="px-2 py-1 bg-orange-100 rounded text-xs">Notified Body</div>
                  <div className="px-2 py-1 bg-green-100 rounded text-xs">Recycler</div>
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
              Key Features:
              <br />
              <span className="font-medium text-blue-600">From Compliance to Intelligence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our platform solves today's compliance pain, automates operations, and unlocks new circular value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Core Compliance */}
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-100 mx-auto mb-4 rounded-xl flex items-center justify-center">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-medium text-purple-600 mb-2">CORE COMPLIANCE & TRUST</h3>
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
                          <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{feature.description}</p>
                          <p className="text-emerald-600 text-sm font-medium">VALUE: {feature.value}</p>
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
                <h3 className="text-2xl font-medium text-blue-600 mb-2">AUTOMATION & INSIGHTS</h3>
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
                          <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{feature.description}</p>
                          <p className="text-emerald-600 text-sm font-medium">VALUE: {feature.value}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* New Value & Circularity */}
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-100 mx-auto mb-4 rounded-xl flex items-center justify-center">
                  <Recycle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-medium text-orange-600 mb-2">NEW VALUE & CIRCULARITY</h3>
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
                          <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{feature.description}</p>
                          <p className="text-orange-600 text-sm font-medium">VALUE: {feature.value}</p>
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

      {/* CTA Section */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Ready for 2027?
              <br />
              <span className="font-medium text-blue-400">Start Your DBP Journey Today</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Don't wait until the deadline. Transform your battery compliance from a cost center 
              into a competitive advantage with TrustTrack's Digital Battery Passport platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleContactDemo}
                className="bg-blue-500 text-white px-12 py-5 text-lg font-medium rounded-xl hover:bg-blue-600 transition-colors inline-flex items-center justify-center group"
              >
                Schedule Your DBP Demo
                <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};