import React, { useState } from 'react';
import { 
  Truck, 
  Package, 
  Store, 
  Leaf, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X,
  BarChart3,
  Lock,
  Globe,
  Zap,
  Calendar
} from 'lucide-react';
import { Logo } from './components/Logo';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScheduleDemo = () => {
    const subject = encodeURIComponent('TrustTrack Demo Request');
    const body = encodeURIComponent(`Hello,

I would like to schedule a demo of TrustTrack for my organization.

Please let me know your availability.

Best regards`);
    
    const mailtoLink = `mailto:naveen@trusttrack.io,naveenchintala1228@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const features = [
    {
      icon: Lock,
      title: 'Blockchain Security',
      description: 'Store any information securely with tamper-proof blockchain technology'
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: 'Control who can view what information with customizable access levels'
    },
    {
      icon: Globe,
      title: 'Information Sharing',
      description: 'Share any product or business information to build customer trust'
    },
    {
      icon: Lock,
      title: 'Digital Records',
      description: 'Maintain comprehensive digital records with complete audit trails'
    }
  ];

  const benefits = [
    {
      icon: Lock,
      title: 'Enhanced Security',
      description: 'Blockchain-based immutable records ensure data integrity and prevent tampering of any information you store.'
    },
    {
      icon: Globe,
      title: 'Complete Transparency',
      description: 'Share any information with your customers to build trust and transparency in your business operations.'
    },
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Streamline information sharing with automated updates, real-time access, and reduced manual processes.'
    },
    {
      icon: Users,
      title: 'Multi-Stakeholder Access',
      description: 'Role-based permissions ensure each user has appropriate access to relevant information.'
    },
    {
      icon: CheckCircle,
      title: 'Compliance Ready',
      description: 'Meet regulatory requirements with comprehensive audit trails and tamper-proof documentation.'
    },
    {
      icon: Lock,
      title: 'Data Privacy',
      description: 'Protect sensitive information while maintaining transparency with granular permission controls.'
    }
  ];

  const stats = [
    { number: 'Role-Based', label: 'Access Control' },
    { number: 'Live', label: 'Demo Available' },
    { number: 'API', label: 'Integration Ready' },
    { number: 'Blockchain', label: 'Secured' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Logo className="h-10 w-10 text-blue-600 mr-3" size={40} />
                <span className="font-bold text-xl text-gray-900">TrustTrack</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Features</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Benefits</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">About</a>
              <button 
                onClick={handleScheduleDemo}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-200"
              >
                Request Demo
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Features</a>
              <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Benefits</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <button 
                onClick={handleScheduleDemo}
                className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full text-left"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Revolutionize Your Supply Chain with 
                <span className="text-blue-600"> Blockchain Transparency</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                TrustTrack enables you to store and share any product or business information on blockchain. 
                Build trust with your customers by providing transparent, tamper-proof information with role-based access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScheduleDemo();
                  }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200 text-center"
                >
                  Schedule Demo
                </a>
                <a 
                  href="https://demo.trusttrack.io" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-200 text-center"
                >
                  Try Demo
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8">
                <div className="flex items-center mb-4">
                  <Logo className="h-6 w-6 text-blue-600 mr-2" size={24} />
                  <span className="font-semibold text-gray-900">Supply Chain Dashboard</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded border-l-4 border-green-400">
                    <span className="text-sm font-medium text-green-800">Production Complete</span>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                    <span className="text-sm font-medium text-blue-800">In Transit</span>
                    <Truck className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded border-l-4 border-gray-400">
                    <span className="text-sm font-medium text-gray-800">Awaiting Packaging</span>
                    <Package className="h-4 w-4 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            See TrustTrack in Action
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience our platform with sample data. Test the role-based access system 
            and see how blockchain information storage works in practice. Easy integration with your existing systems through our public APIs.
          </p>
          <a 
            href="https://demo.trusttrack.io" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
          >
            Try Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Blockchain Information Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A blockchain-based platform that lets you store and share any information securely with role-based access 
              for your stakeholders. Easy integration with existing systems through public APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TrustTrack?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for enterprise-grade operations with the security and scalability your business demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
               Blockchain-Based Information Platform
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
               TrustTrack uses blockchain technology to store and share any information you want your customers to see. 
               Build trust by providing transparent, tamper-proof information with role-based access and easy API integration.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Store any information on blockchain</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Control who sees what with role-based access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Share information to build customer trust</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Public API integration with existing systems</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Platform Capabilities</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Role-Based Access</h4>
                  <p className="text-gray-600 text-sm">Configurable access levels for different user types</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Blockchain Security</h4>
                  <p className="text-gray-600 text-sm">Secure and tamper-proof information storage</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900">API Integration</h4>
                  <p className="text-gray-600 text-sm">Public APIs for easy integration with existing systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Build Trust with Blockchain?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
             Ready to see how TrustTrack can help you share information and build customer trust? 
             Try our demo or get in touch to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleScheduleDemo}
                className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-200 inline-flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Demo
              </button>
              <button 
                onClick={handleScheduleDemo}
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition duration-200"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Logo className="h-8 w-8 text-blue-400 mr-2" size={32} />
                <span className="font-bold text-xl text-white">TrustTrack</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
               Blockchain-powered information platform with role-based access control. 
               Built for transparency and security across all industries with easy API integration.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
                <li><a href="https://demo.trusttrack.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Try Demo</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><button onClick={handleScheduleDemo} className="text-gray-400 hover:text-white transition-colors text-left">Contact</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 TrustTrack. All rights reserved. Blockchain information platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;