import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'
import { 
  FileText, 
  Download, 
  Upload, 
  Settings, 
  Clock, 
  User, 
  Building, 
  CheckCircle,
  AlertCircle,
  XCircle,
  ArrowRight,
  DollarSign,
  Calendar,
  MapPin,
  Eye,
  Edit,
  Send,
  Signature,
  Shield,
  Globe,
  Printer
} from 'lucide-react'

const ContractsEjari = () => {
  const [selectedContract, setSelectedContract] = useState(null)
  const [showSignatureModal, setShowSignatureModal] = useState(false)
  const [ejariStatus, setEjariStatus] = useState('pending')

  const contracts = [
    {
      id: 'CNT-2024-001',
      applicationId: 'APP-2024-001',
      company: 'Emirates Tech Solutions LLC',
      project: 'Wasl 1',
      building: 'Tower A',
      units: '1205',
      area: '1,250 sq-ft',
      annualRent: 185000,
      contractType: 'Commercial Lease',
      term: '24 months',
      startDate: '2024-10-15',
      endDate: '2026-10-14',
      status: 'Ready for Signature',
      generatedOn: '2024-09-21',
      approvedBy: 'Manager - Sarah Al-Mansouri',
      ejariStatus: 'Pending',
      signatureStatus: {
        tenant: 'Pending',
        landlord: 'Pending',
        witness: 'Not Required'
      },
      documents: {
        leaseAgreement: 'Generated',
        addendum: 'Generated',
        ejariForm: 'Generated',
        securityDeposit: 'Pending'
      }
    },
    {
      id: 'CNT-2024-002',
      applicationId: 'APP-2024-002',
      company: 'Gulf Business Center',
      project: 'Wasl Gate',
      building: 'Building B',
      units: '805, 806',
      area: '3,700 sq-ft',
      annualRent: 550000,
      contractType: 'Commercial Lease',
      term: '36 months',
      startDate: '2024-11-01',
      endDate: '2027-10-31',
      status: 'Signed - Awaiting Ejari',
      generatedOn: '2024-09-20',
      approvedBy: 'Manager - Ahmed Al-Rashid',
      ejariStatus: 'In Progress',
      signatureStatus: {
        tenant: 'Signed',
        landlord: 'Signed',
        witness: 'Not Required'
      },
      documents: {
        leaseAgreement: 'Signed',
        addendum: 'Signed',
        ejariForm: 'Submitted',
        securityDeposit: 'Received'
      }
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ready for Signature': return 'bg-blue-100 text-blue-800'
      case 'Signed - Awaiting Ejari': return 'bg-orange-100 text-orange-800'
      case 'Completed': return 'bg-green-100 text-green-800'
      case 'Draft': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getEjariStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-gray-100 text-gray-800'
      case 'In Progress': return 'bg-blue-100 text-blue-800'
      case 'Completed': return 'bg-green-100 text-green-800'
      case 'Rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getSignatureStatusColor = (status) => {
    switch (status) {
      case 'Signed': return 'bg-green-100 text-green-800'
      case 'Pending': return 'bg-orange-100 text-orange-800'
      case 'Not Required': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const handleGenerateContract = (contractId) => {
    console.log('Generate contract:', contractId)
  }

  const handleSendForSignature = (contractId) => {
    setShowSignatureModal(true)
  }

  const handleSubmitEjari = (contractId) => {
    setEjariStatus('submitted')
  }

  const handleDownloadContract = (contractId) => {
    console.log('Download contract:', contractId)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* SAP-style Header */}
      <div className="bg-white border-b-2 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Contracts & Ejari Management</h1>
              <p className="text-sm text-gray-600">SAP S/4HANA Leasing Management - Contract Generation & Digital Signature</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-100 text-green-800">
                <FileText className="w-3 h-3 mr-1" />
                {contracts.length} Contracts
              </Badge>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Contracts</p>
                  <p className="text-2xl font-bold text-blue-600">{contracts.length}</p>
                </div>
                <FileText className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Signatures</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {contracts.filter(c => c.status === 'Ready for Signature').length}
                  </p>
                </div>
                <Signature className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Ejari Pending</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {contracts.filter(c => c.ejariStatus === 'Pending' || c.ejariStatus === 'In Progress').length}
                  </p>
                </div>
                <Globe className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Value</p>
                  <p className="text-2xl font-bold text-green-600">
                    AED {contracts.reduce((sum, c) => sum + c.annualRent, 0).toLocaleString()}
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contracts Table */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Contract Management</h3>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Template
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate New
                </Button>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contract ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Property
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contract Details
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ejari Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contracts.map((contract) => (
                  <tr 
                    key={contract.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedContract(contract)}
                  >
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-blue-600">{contract.id}</div>
                        <div className="text-xs text-gray-500">{contract.generatedOn}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900">{contract.company}</div>
                        <div className="text-xs text-gray-500">{contract.contractType}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900">{contract.project}</div>
                        <div className="text-xs text-gray-500">{contract.building} - {contract.units}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          AED {contract.annualRent.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">{contract.term} • {contract.area}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <Badge className={getStatusColor(contract.status)}>
                        {contract.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <Badge className={getEjariStatusColor(contract.ejariStatus)}>
                        {contract.ejariStatus}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedContract(contract)
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDownloadContract(contract.id)
                          }}
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleSendForSignature(contract.id)
                          }}
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contract Detail Panel */}
        {selectedContract && (
          <div className="mt-6 bg-white rounded-lg shadow-sm border">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Contract Details - {selectedContract.id}</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedContract(null)}
                >
                  Close
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Contract Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Contract Type:</span>
                      <p className="text-sm text-gray-900">{selectedContract.contractType}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Term:</span>
                      <p className="text-sm text-gray-900">{selectedContract.term}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Start Date:</span>
                      <p className="text-sm text-gray-900">{selectedContract.startDate}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">End Date:</span>
                      <p className="text-sm text-gray-900">{selectedContract.endDate}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Signature Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(selectedContract.signatureStatus).map(([party, status]) => (
                      <div key={party} className="flex items-center justify-between">
                        <span className="text-sm capitalize">{party}:</span>
                        <Badge className={getSignatureStatusColor(status)}>
                          {status}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Document Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(selectedContract.documents).map(([doc, status]) => (
                      <div key={doc} className="flex items-center justify-between">
                        <span className="text-sm capitalize">{doc.replace(/([A-Z])/g, ' $1')}</span>
                        <Badge className={status === 'Generated' || status === 'Signed' || status === 'Received' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}>
                          {status}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
              
              {/* Ejari Integration */}
              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Ejari Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Ejari Registration Status</p>
                          <p className="text-xs text-gray-500">Dubai Land Department Integration</p>
                        </div>
                        <Badge className={getEjariStatusColor(selectedContract.ejariStatus)}>
                          {selectedContract.ejariStatus}
                        </Badge>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium">Ejari Progress</span>
                          <span className="text-sm text-gray-500">
                            {selectedContract.ejariStatus === 'Pending' ? '0%' : 
                             selectedContract.ejariStatus === 'In Progress' ? '60%' : '100%'}
                          </span>
                        </div>
                        <Progress 
                          value={selectedContract.ejariStatus === 'Pending' ? 0 : 
                                 selectedContract.ejariStatus === 'In Progress' ? 60 : 100} 
                          className="h-2"
                        />
                        <div className="mt-2 text-xs text-gray-600">
                          {selectedContract.ejariStatus === 'Pending' && 'Awaiting contract signature completion'}
                          {selectedContract.ejariStatus === 'In Progress' && 'Submitted to Dubai Land Department'}
                          {selectedContract.ejariStatus === 'Completed' && 'Ejari certificate issued'}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <Button 
                  variant="outline"
                  onClick={() => handleDownloadContract(selectedContract.id)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleGenerateContract(selectedContract.id)}
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Contract
                </Button>
                {selectedContract.status === 'Ready for Signature' && (
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleSendForSignature(selectedContract.id)}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send for Signature
                  </Button>
                )}
                {selectedContract.status === 'Signed - Awaiting Ejari' && (
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => handleSubmitEjari(selectedContract.id)}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Submit to Ejari
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Digital Signature Modal */}
        {showSignatureModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Signature className="w-5 h-5 mr-2" />
                  Digital Signature Workflow
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-blue-800">
                        Secure Digital Signature powered by UAE Pass Integration
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Signature Parties</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">Tenant</p>
                            <p className="text-xs text-gray-500">Emirates Tech Solutions LLC</p>
                          </div>
                          <Badge className="bg-orange-100 text-orange-800">Pending</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">Landlord</p>
                            <p className="text-xs text-gray-500">Wasl Properties</p>
                          </div>
                          <Badge className="bg-orange-100 text-orange-800">Pending</Badge>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Notification Settings</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email Notifications</label>
                          <Input placeholder="tenant@company.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">SMS Notifications</label>
                          <Input placeholder="+971 50 123 4567" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Signature Instructions</label>
                    <Textarea 
                      placeholder="Please review the contract terms and sign using your UAE Pass digital signature..."
                      rows={3}
                    />
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium mb-3">Signature Workflow</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs mr-3">1</div>
                        <span>Send signature request to tenant</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-xs mr-3">2</div>
                        <span>Tenant signs using UAE Pass</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-xs mr-3">3</div>
                        <span>Landlord signs using UAE Pass</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-xs mr-3">4</div>
                        <span>Contract automatically submitted to Ejari</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <Button variant="outline" onClick={() => setShowSignatureModal(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Send Signature Request
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContractsEjari
