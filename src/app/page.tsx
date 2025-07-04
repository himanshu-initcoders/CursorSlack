import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCalendarCheck, 
  faUserClock, 
  faGlobe, 
  faVideoCamera,
  faHandshake,
  faChevronRight,
  faCheck,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import { 
  faGoogle, 
  faMicrosoft
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-indigo-600">Calioly</h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
            </nav>
            <div className="flex items-center">
              <a href="#login" className="text-gray-600 hover:text-indigo-600 px-3 py-2 transition-colors">Login</a>
              <a href="#signup" className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">Sign up free</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Scheduling <span className="text-indigo-600">made simple</span> for busy professionals
              </h2>
              <p className="mt-6 text-lg text-gray-600 max-w-lg">
                Calio helps you schedule meetings without the back-and-forth emails. Share your availability, and let clients book time with you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#signup" className="bg-indigo-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center">
                  Get started for free <FontAwesomeIcon icon={faChevronRight} className="ml-2 w-3 h-3" />
                </a>
                <a href="#demo" className="border border-gray-300 bg-white text-gray-700 px-6 py-3 rounded-md text-base font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                  View demo
                </a>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
                <FontAwesomeIcon icon={faCheck} className="text-green-500 w-4 h-4" />
                <span>No credit card required</span>
              </div>
            </div>
            <div className="lg:ml-auto">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                <div className="aspect-w-16 aspect-h-9 w-full h-80">
                  <div className="flex items-center justify-center h-full bg-gray-100">
                    <span className="text-gray-500 font-medium">Calio Calendar Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Everything you need for seamless scheduling</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Calio simplifies your booking process with powerful features designed for professionals.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faGlobe} className="text-indigo-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Custom Subdomain</h3>
              <p className="mt-2 text-gray-600">Create your personalized booking page with a custom subdomain (username.calio.com).</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faUserClock} className="text-indigo-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Smart Availability</h3>
              <p className="mt-2 text-gray-600">Set your availability once and let Calio manage your booking schedule automatically.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faVideoCamera} className="text-indigo-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Multiple Event Types</h3>
              <p className="mt-2 text-gray-600">Create different event types for in-person meetings, phone calls, or video conferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How Calio Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Get started in minutes with our simple setup process.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-16">
                {/* Step 1 */}
                <div className="relative">
                  <div className="md:flex md:items-center md:justify-between">
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 md:text-right">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-medium text-gray-900">Set up your subdomain</h3>
                        <p className="mt-2 text-gray-600">Choose your custom subdomain for your Calio booking page.</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex md:items-center md:justify-center">
                      <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-8"></div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative">
                  <div className="md:flex md:items-center md:justify-between">
                    <div className="md:w-1/2 md:pr-8"></div>
                    
                    <div className="hidden md:flex md:items-center md:justify-center">
                      <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0 md:text-left">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-medium text-gray-900">Create event types</h3>
                        <p className="mt-2 text-gray-600">Set up your meeting types with durations and details.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative">
                  <div className="md:flex md:items-center md:justify-between">
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 md:text-right">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-medium text-gray-900">Share your booking link</h3>
                        <p className="mt-2 text-gray-600">Send your personalized booking link to clients and colleagues.</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex md:items-center md:justify-center">
                      <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-8"></div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative">
                  <div className="md:flex md:items-center md:justify-between">
                    <div className="md:w-1/2 md:pr-8"></div>
                    
                    <div className="hidden md:flex md:items-center md:justify-center">
                      <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0 md:text-left">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-medium text-gray-900">Manage your bookings</h3>
                        <p className="mt-2 text-gray-600">Reschedule, cancel, or send reminders from your dashboard.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Seamless Integrations</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with your favorite tools to keep everything synchronized.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <FontAwesomeIcon icon={faGoogle} className="text-gray-700 w-12 h-12" />
              </div>
              <p className="mt-2 text-sm text-gray-600">Google Calendar</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <FontAwesomeIcon icon={faMicrosoft} className="text-gray-700 w-12 h-12" />
              </div>
              <p className="mt-2 text-sm text-gray-600">Outlook</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <FontAwesomeIcon icon={faVideo} className="text-gray-700 w-12 h-12" />
              </div>
              <p className="mt-2 text-sm text-gray-600">Zoom</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <FontAwesomeIcon icon={faHandshake} className="text-gray-700 w-12 h-12" />
              </div>
              <p className="mt-2 text-sm text-gray-600">Google Meet</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to simplify your scheduling?</h2>
            <p className="mt-4 text-xl text-indigo-100 max-w-3xl mx-auto">
              Join thousands of professionals who are saving time with Calio.
            </p>
            <div className="mt-8">
              <a href="#signup" className="bg-white text-indigo-600 px-8 py-4 rounded-md text-base font-medium hover:bg-indigo-50 transition-colors inline-block">
                Start for free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold">Calio</h3>
              <p className="mt-2 text-gray-400 text-sm">Scheduling made simple for busy professionals.</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider">Product</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li>
                <li><a href="#integrations" className="text-gray-400 hover:text-white transition-colors text-sm">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider">Resources</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
                <li><a href="#guides" className="text-gray-400 hover:text-white transition-colors text-sm">Guides</a></li>
                <li><a href="#help" className="text-gray-400 hover:text-white transition-colors text-sm">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider">Company</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="#careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 Calio. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
