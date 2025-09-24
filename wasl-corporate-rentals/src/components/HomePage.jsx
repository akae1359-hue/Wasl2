import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Building2, Users, FileText } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Premium Dubai Properties for Sale or Rent with Wasl
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Streamlined corporate rental workflow for enterprise clients
            </p>
            <Link to="/discovery">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3">
                Start Corporate Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              End-to-End Digital Leasing Workflow
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience our seamless corporate rental process from property discovery to contract signing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Property Discovery</h3>
              <p className="text-gray-600">
                Browse our premium portfolio of commercial and residential properties with advanced filtering
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Corporate Application</h3>
              <p className="text-gray-600">
                Streamlined application process with document upload and automated validation
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Contracts</h3>
              <p className="text-gray-600">
                Electronic signature and Ejari integration for seamless contract completion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Demo Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Experience the Workflow
            </h2>
            <p className="text-lg text-gray-600">
              Follow the complete journey from customer application to contract signing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Customer Flow */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Customer Journey</h3>
              <div className="space-y-4">
                <Link to="/discovery" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">1. Property Discovery</h4>
                      <p className="text-sm text-gray-600">Browse and filter available properties</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>
                
                <Link to="/application" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">2. Corporate Application</h4>
                      <p className="text-sm text-gray-600">Submit company details and documents</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>
                
                <div className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">3. Review & Approval</h4>
                      <p className="text-sm text-gray-600">Application processing and approval</p>
                    </div>
                    <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">4. Contract Signing</h4>
                      <p className="text-sm text-gray-600">Digital signature and completion</p>
                    </div>
                    <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Internal Flow */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Internal Workflow</h3>
              <div className="space-y-4">
                <Link to="/intake" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">1. Leasing Intake</h4>
                      <p className="text-sm text-gray-600">SAP-style application processing</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>
                
                <Link to="/approval" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">2. Manager Approval</h4>
                      <p className="text-sm text-gray-600">Approval workspace and pricing</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>
                
                <Link to="/contracts" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">3. Contracts & Ejari</h4>
                      <p className="text-sm text-gray-600">Contract generation and Ejari</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
