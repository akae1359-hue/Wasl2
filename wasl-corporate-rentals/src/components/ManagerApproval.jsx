import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { 
  Search, 
  Filter, 
  Download, 
  Settings, 
  Clock, 
  User, 
  Building, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  DollarSign,
  Calendar,
  MapPin,
  Eye,
  ThumbsUp,
  ThumbsDown,
  MessageSquare
} from 'lucide-react'

const ManagerApproval = () => {
  const [selectedApplication, setSelectedApplication] = useState(null)
  const [showApprovalModal, setShowApprovalModal] = useState(false)
  const [approvalAction, setApprovalAction] = useState('')

  const pendingApprovals = [
    {
      id: 'APP-2024-001',
      company: 'Emirates Tech Solutions LLC',
      project: 'Wasl 1',
      building: 'Tower A',
      units: '1205',
      area: '1,250 sq-ft',
      annualRent: 185000,
      submittedOn: '2024-09-20',
      reviewedBy: 'Sarah Ahmed',
      priority: 'High',
      riskScore: 'Low',
      creditRating: 'A+',
      businessType: 'Technology',
      employeeCount: 150,
      requestedTerm: '24 months',
      startDate: '2024-10-15',
      specialRequests: 'Parking for 5 vehicles',
      documents: {
        tradeLicense: 'Complete',
        financials: 'Complete',
        bankStatements: 'Complete',
        references: 'Complete'
      }
    },
    {
      id: 'APP-2024-002',
      company: 'Gulf Business Center',
      project: 'Wasl Gate',
      building: 'Building B',
      units: '805, 806',
      area: '3,700 sq-ft',
      annualRent: 550000,
      submittedOn: '2024-09-19',
      reviewedBy: 'Ahmed Hassan',
      priority: 'Medium',
      riskScore: 'Medium',
      creditRating: 'B+',
      businessType: 'Consulting',
      employeeCount: 75,
      requestedTerm: '36 months',
      startDate: '2024-11-01',
      specialRequests: 'Conference room setup',
      documents: {
        tradeLicense: 'Complete',
        financials: 'Under Review',
        bankStatements: 'Complete',
        references: 'Pending'
      }
    },
    {
      id: 'APP-2024-004',
      company: 'Meridian Consulting',
      project: 'Hillside Residences',
      building: 'Villa Complex',
      units: 'V-15',
      area: '2,500 sq-ft',
      annualRent: 425000,
      submittedOn: '2024-09-17',
      reviewedBy: 'Omar Khalil',
      priority: 'Low',
      riskScore: 'Low',
      creditRating: 'A',
      businessType: 'Professional Services',
      employeeCount: 25,
      requestedTerm: '12 months',
      startDate: '2024-10-01',
      specialRequests: 'Garden maintenance included',
      documents: {
        tradeLicense: 'Complete',
        financials: 'Complete',
        bankStatements: 'Complete',
        references: 'Complete'
      }
    }
  ]

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      case 'High': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCreditColor = (rating) => {
    if (rating.startsWith('A')) return 'bg-green-100 text-green-800'
    if (rating.startsWith('B')) return 'bg-yellow-100 text-yellow-800'
    return 'bg-red-100 text-red-800'
  }

  const handleApprove = (appId) => {
    setApprovalAction('approve')
    setShowApprovalModal(true)
  }

  const handleReject = (appId) => {
    setApprovalAction('reject')
    setShowApprovalModal(true)
  }

  const handleRequestRevision = (appId) => {
    setApprovalAction('revision')
    setShowApprovalModal(true)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* SAP-style Header */}
      <div className="bg-white border-b-2 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Manager Approval Dashboard</h1>
              <p className="text-sm text-gray-600">SAP S/4HANA Leasing Management - Approval Workflow</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-orange-100 text-orange-800">
                <AlertTriangle className="w-3 h-3 mr-1" />
                {pendingApprovals.length} Pending
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
                  <p className="text-sm text-gray-600">Pending Approvals</p>
                  <p className="text-2xl font-bold text-orange-600">{pendingApprovals.length}</p>
                </div>
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Value</p>
                  <p className="text-2xl font-bold text-green-600">
                    AED {pendingApprovals.reduce((sum, app) => sum + app.annualRent, 0).toLocaleString()}
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">High Priority</p>
                  <p className="text-2xl font-bold text-red-600">
                    {pendingApprovals.filter(app => app.priority === 'High').length}
                  </p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg. Processing</p>
                  <p className="text-2xl font-bold text-blue-600">2.5 days</p>
                </div>
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Toolbar */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search applications..." className="pl-10 w-64" />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                  <option value="">All Priorities</option>
                  <option value="high">High Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="low">Low Priority</option>
                </select>
              </div>
              <div className="text-sm text-gray-600">
                {pendingApprovals.length} applications pending approval
              </div>
            </div>
          </div>
        </div>

        {/* Applications Table */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Application
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Property
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Annual Rent
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Risk Score
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Credit Rating
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reviewed By
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pendingApprovals.map((app) => (
                  <tr 
                    key={app.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedApplication(app)}
                  >
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-blue-600">{app.id}</div>
                          <div className="text-xs text-gray-500">{app.submittedOn}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900">{app.company}</div>
                        <div className="text-xs text-gray-500">{app.businessType}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900">{app.project}</div>
                        <div className="text-xs text-gray-500">{app.building} - {app.units}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        AED {app.annualRent.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">{app.area}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <Badge className={getRiskColor(app.riskScore)}>
                        {app.riskScore}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <Badge className={getCreditColor(app.creditRating)}>
                        {app.creditRating}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-400" />
                        <div className="text-sm text-gray-900">{app.reviewedBy}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedApplication(app)
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-green-600 hover:text-green-700"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleApprove(app.id)
                          }}
                        >
                          <ThumbsUp className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleReject(app.id)
                          }}
                        >
                          <ThumbsDown className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Application Detail Panel */}
        {selectedApplication && (
          <div className="mt-6 bg-white rounded-lg shadow-sm border">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Approval Review - {selectedApplication.id}</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedApplication(null)}
                >
                  Close
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Company Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Company:</span>
                      <p className="text-sm text-gray-900">{selectedApplication.company}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Business Type:</span>
                      <p className="text-sm text-gray-900">{selectedApplication.businessType}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Employee Count:</span>
                      <p className="text-sm text-gray-900">{selectedApplication.employeeCount}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Credit Rating:</span>
                      <Badge className={getCreditColor(selectedApplication.creditRating)}>
                        {selectedApplication.creditRating}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Property Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Project:</span>
                      <p className="text-sm text-gray-900">{selectedApplication.project}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Building:</span>
                      <p className="text-sm text-gray-900">{selectedApplication.building}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Unit(s):</span>
                      <p className="text-sm text-gray-900">{selectedApplication.units}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Area:</span>
                      <p className="text-sm text-gray-900">{selectedApplication.area}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Lease Terms</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Annual Rent:</span>
                      <p className="text-sm font-bold text-green-600">
                        AED {selectedApplication.annualRent.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Term:</span>
                      <p className="text-sm text-gray-900">{selectedApplication.requestedTerm}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Start Date:</span>
                      <p className="text-sm text-gray-900">{selectedApplication.startDate}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Special Requests:</span>
                      <p className="text-sm text-gray-900">{selectedApplication.specialRequests}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Document Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(selectedApplication.documents).map(([doc, status]) => (
                      <div key={doc} className="flex items-center justify-between">
                        <span className="text-sm capitalize">{doc.replace(/([A-Z])/g, ' $1')}</span>
                        <Badge className={status === 'Complete' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}>
                          {status}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Risk Assessment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Overall Risk Score</span>
                      <Badge className={getRiskColor(selectedApplication.riskScore)}>
                        {selectedApplication.riskScore}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Credit Rating</span>
                      <Badge className={getCreditColor(selectedApplication.creditRating)}>
                        {selectedApplication.creditRating}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Reviewed By</span>
                      <span className="text-sm text-gray-900">{selectedApplication.reviewedBy}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <Button 
                  variant="outline" 
                  onClick={() => handleRequestRevision(selectedApplication.id)}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Request Revision
                </Button>
                <Button 
                  variant="outline" 
                  className="text-red-600 hover:text-red-700"
                  onClick={() => handleReject(selectedApplication.id)}
                >
                  <ThumbsDown className="w-4 h-4 mr-2" />
                  Reject
                </Button>
                <Button 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => handleApprove(selectedApplication.id)}
                >
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Approve
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Approval Modal */}
        {showApprovalModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  {approvalAction === 'approve' ? 'Approve Application' : 
                   approvalAction === 'reject' ? 'Reject Application' : 'Request Revision'}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Comments</label>
                    <Textarea 
                      placeholder={`Enter ${approvalAction} comments...`}
                      rows={4}
                    />
                  </div>
                  {approvalAction === 'approve' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Approval Conditions</label>
                      <Textarea 
                        placeholder="Enter any special conditions or requirements..."
                        rows={3}
                      />
                    </div>
                  )}
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <Button variant="outline" onClick={() => setShowApprovalModal(false)}>
                    Cancel
                  </Button>
                  <Button 
                    className={
                      approvalAction === 'approve' ? 'bg-green-600 hover:bg-green-700' :
                      approvalAction === 'reject' ? 'bg-red-600 hover:bg-red-700' :
                      'bg-blue-600 hover:bg-blue-700'
                    }
                  >
                    {approvalAction === 'approve' ? 'Approve' : 
                     approvalAction === 'reject' ? 'Reject' : 'Send Revision Request'}
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

export default ManagerApproval
