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
  AlertCircle,
  CheckCircle,
  XCircle,
  ArrowRight,
  MoreHorizontal
} from 'lucide-react'

const LeasingIntake = () => {
  const [selectedApplication, setSelectedApplication] = useState(null)
  const [showRFI, setShowRFI] = useState(false)

  const applications = [
    {
      id: 'APP-2024-001',
      company: 'Emirates Tech Solutions LLC',
      project: 'Wasl 1',
      building: 'Tower A',
      units: '1205',
      docsStatus: 'Pending Review',
      submittedOn: '2024-09-20',
      sla: '2 days remaining',
      assignee: 'Sarah Ahmed',
      status: 'Under Review',
      priority: 'High'
    },
    {
      id: 'APP-2024-002',
      company: 'Gulf Business Center',
      project: 'Wasl Gate',
      building: 'Building B',
      units: '805, 806',
      docsStatus: 'Complete',
      submittedOn: '2024-09-19',
      sla: '1 day remaining',
      assignee: 'Ahmed Hassan',
      status: 'Ready for Approval',
      priority: 'Medium'
    },
    {
      id: 'APP-2024-003',
      company: 'Dubai Innovation Hub',
      project: 'One B Tower',
      building: 'Tower B',
      units: '3201',
      docsStatus: 'Missing Documents',
      submittedOn: '2024-09-18',
      sla: 'Overdue',
      assignee: 'Fatima Al-Zahra',
      status: 'RFI Sent',
      priority: 'High'
    },
    {
      id: 'APP-2024-004',
      company: 'Meridian Consulting',
      project: 'Hillside Residences',
      building: 'Villa Complex',
      units: 'V-15',
      docsStatus: 'Under Validation',
      submittedOn: '2024-09-17',
      sla: '3 days remaining',
      assignee: 'Omar Khalil',
      status: 'In Progress',
      priority: 'Low'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Review': return 'bg-blue-100 text-blue-800'
      case 'Ready for Approval': return 'bg-green-100 text-green-800'
      case 'RFI Sent': return 'bg-orange-100 text-orange-800'
      case 'In Progress': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getSLAColor = (sla) => {
    if (sla.includes('Overdue')) return 'text-red-600'
    if (sla.includes('1 day')) return 'text-orange-600'
    return 'text-green-600'
  }

  const handleAssign = (appId) => {
    console.log('Assign application:', appId)
  }

  const handleRequestInfo = (appId) => {
    setSelectedApplication(appId)
    setShowRFI(true)
  }

  const handleForwardToManager = (appId) => {
    console.log('Forward to manager:', appId)
  }

  const handleReject = (appId) => {
    console.log('Reject application:', appId)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* SAP-style Header */}
      <div className="bg-white border-b-2 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Corporate Rental Intake Queue</h1>
              <p className="text-sm text-gray-600">SAP S/4HANA Leasing Management</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-blue-100 text-blue-800">
                <Clock className="w-3 h-3 mr-1" />
                Live Queue
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
        {/* Toolbar */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search applications..." className="pl-10 w-64" />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Columns
                </Button>
              </div>
              <div className="text-sm text-gray-600">
                {applications.length} applications found
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
                    Application ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Building
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Unit(s)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Docs Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted On
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    SLA
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assignee
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map((app) => (
                  <tr 
                    key={app.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedApplication(app)}
                  >
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-blue-600">{app.id}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{app.company}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{app.project}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{app.building}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{app.units}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <Badge className={getStatusColor(app.docsStatus)}>
                        {app.docsStatus}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{app.submittedOn}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className={`text-sm font-medium ${getSLAColor(app.sla)}`}>
                        {app.sla}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-400" />
                        <div className="text-sm text-gray-900">{app.assignee}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleAssign(app.id)
                          }}
                        >
                          Assign
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleRequestInfo(app.id)
                          }}
                        >
                          RFI
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleForwardToManager(app.id)
                          }}
                        >
                          <ArrowRight className="w-4 h-4" />
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
        {selectedApplication && typeof selectedApplication === 'object' && (
          <div className="mt-6 bg-white rounded-lg shadow-sm border">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Application Details - {selectedApplication.id}</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedApplication(null)}
                >
                  Close
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Property Assignment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                        <Input value={selectedApplication.project} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Building Name</label>
                        <Input value={selectedApplication.building} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Unit Number(s)</label>
                      <Input value={selectedApplication.units} />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Document Checklist</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Trade License</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Company Profile</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Passport Copy</span>
                      <AlertCircle className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Emirates ID</span>
                      <XCircle className="w-5 h-5 text-red-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <Button variant="outline" onClick={() => handleReject(selectedApplication.id)}>
                  Reject
                </Button>
                <Button variant="outline" onClick={() => handleRequestInfo(selectedApplication.id)}>
                  Request Info
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleForwardToManager(selectedApplication.id)}
                >
                  Forward to Manager
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* RFI Modal */}
        {showRFI && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Request for Information (RFI)</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <Input placeholder="Enter RFI subject" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea 
                      placeholder="Describe the information or documents required..."
                      rows={4}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <Button variant="outline" onClick={() => setShowRFI(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Send RFI
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

export default LeasingIntake
