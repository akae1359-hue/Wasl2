import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { 
  ChevronLeft, 
  ChevronRight, 
  Upload, 
  FileText, 
  Building, 
  User, 
  CreditCard, 
  CheckCircle,
  Calendar,
  MapPin
} from 'lucide-react'

const CorporateApplication = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Company Details
    companyName: '',
    trn: '',
    tradeLicenseNumber: '',
    tradeLicenseExpiry: '',
    companyProfile: null,
    
    // Authorized Signatory
    ownerName: '',
    passportCopy: null,
    emiratesId: null,
    powerOfAttorney: null,
    requiresPOA: false,
    
    // Contact & Billing
    contactPerson: '',
    email: '',
    phone: '',
    billingAddress: '',
    preferredComm: 'email',
    
    // Unit Selection
    selectedProject: 'Wasl 1',
    selectedBuilding: 'Tower A',
    selectedUnit: '1205',
    rooms: '2 BR',
    termLength: '12',
    startDate: '',
    
    // Consent
    termsAccepted: false,
    privacyAccepted: false
  })

  const steps = [
    { id: 1, title: 'Company Details', icon: Building },
    { id: 2, title: 'Authorized Signatory', icon: User },
    { id: 3, title: 'Contact & Billing', icon: CreditCard },
    { id: 4, title: 'Unit Confirmation', icon: MapPin },
    { id: 5, title: 'Review & Submit', icon: CheckCircle }
  ]

  const progress = (currentStep / steps.length) * 100

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({ ...prev, [field]: file }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const FileUploadComponent = ({ field, label, required = false, accept = "*/*" }) => (
    <div className="space-y-2">
      <Label className="text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-sm text-gray-600 mb-2">
          {formData[field] ? formData[field].name || 'File uploaded' : 'Drag and drop or click to upload'}
        </p>
        <input
          type="file"
          accept={accept}
          onChange={(e) => handleFileUpload(field, e.target.files[0])}
          className="hidden"
          id={field}
        />
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => document.getElementById(field).click()}
        >
          Choose File
        </Button>
        {formData[field] && (
          <Badge className="ml-2 bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Uploaded
          </Badge>
        )}
      </div>
    </div>
  )

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Legal Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Enter legal company name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="trn">TRN (Tax Registration Number)</Label>
                <Input
                  id="trn"
                  value={formData.trn}
                  onChange={(e) => handleInputChange('trn', e.target.value)}
                  placeholder="Enter TRN if applicable"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="tradeLicenseNumber">Trade License Number *</Label>
                <Input
                  id="tradeLicenseNumber"
                  value={formData.tradeLicenseNumber}
                  onChange={(e) => handleInputChange('tradeLicenseNumber', e.target.value)}
                  placeholder="Enter trade license number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tradeLicenseExpiry">Trade License Expiry *</Label>
                <Input
                  id="tradeLicenseExpiry"
                  type="date"
                  value={formData.tradeLicenseExpiry}
                  onChange={(e) => handleInputChange('tradeLicenseExpiry', e.target.value)}
                />
              </div>
            </div>
            
            <FileUploadComponent
              field="companyProfile"
              label="Company Profile"
              required={true}
              accept=".pdf,.doc,.docx"
            />
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="ownerName">Authorized Signatory Name *</Label>
              <Input
                id="ownerName"
                value={formData.ownerName}
                onChange={(e) => handleInputChange('ownerName', e.target.value)}
                placeholder="Enter authorized signatory name"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <FileUploadComponent
                field="passportCopy"
                label="Passport Copy"
                required={true}
                accept=".pdf,.jpg,.jpeg,.png"
              />
              <FileUploadComponent
                field="emiratesId"
                label="Emirates ID"
                required={true}
                accept=".pdf,.jpg,.jpeg,.png"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="requiresPOA"
                checked={formData.requiresPOA}
                onCheckedChange={(checked) => handleInputChange('requiresPOA', checked)}
              />
              <Label htmlFor="requiresPOA">Power of Attorney required</Label>
            </div>
            
            {formData.requiresPOA && (
              <FileUploadComponent
                field="powerOfAttorney"
                label="Power of Attorney"
                required={true}
                accept=".pdf,.doc,.docx"
              />
            )}
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  placeholder="Enter contact person name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter email address"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter phone number"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="billingAddress">Billing Address *</Label>
              <Textarea
                id="billingAddress"
                value={formData.billingAddress}
                onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                placeholder="Enter complete billing address"
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Preferred Communication Method</Label>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="email-comm"
                    name="preferredComm"
                    value="email"
                    checked={formData.preferredComm === 'email'}
                    onChange={(e) => handleInputChange('preferredComm', e.target.value)}
                  />
                  <Label htmlFor="email-comm">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="portal-comm"
                    name="preferredComm"
                    value="portal"
                    checked={formData.preferredComm === 'portal'}
                    onChange={(e) => handleInputChange('preferredComm', e.target.value)}
                  />
                  <Label htmlFor="portal-comm">Website Portal</Label>
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Selected Property</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Project:</span> {formData.selectedProject}
                </div>
                <div>
                  <span className="font-medium">Building:</span> {formData.selectedBuilding}
                </div>
                <div>
                  <span className="font-medium">Unit:</span> {formData.selectedUnit}
                </div>
                <div>
                  <span className="font-medium">Rooms:</span> {formData.rooms}
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="termLength">Lease Term (Months) *</Label>
                <select
                  id="termLength"
                  value={formData.termLength}
                  onChange={(e) => handleInputChange('termLength', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="6">6 Months</option>
                  <option value="12">12 Months</option>
                  <option value="24">24 Months</option>
                  <option value="36">36 Months</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Preferred Start Date *</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                />
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Company Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div><span className="font-medium">Company:</span> {formData.companyName}</div>
                  <div><span className="font-medium">TRN:</span> {formData.trn || 'N/A'}</div>
                  <div><span className="font-medium">Trade License:</span> {formData.tradeLicenseNumber}</div>
                  <div><span className="font-medium">Signatory:</span> {formData.ownerName}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div><span className="font-medium">Contact:</span> {formData.contactPerson}</div>
                  <div><span className="font-medium">Email:</span> {formData.email}</div>
                  <div><span className="font-medium">Phone:</span> {formData.phone}</div>
                  <div><span className="font-medium">Communication:</span> {formData.preferredComm}</div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Property & Lease Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div><span className="font-medium">Project:</span> {formData.selectedProject}</div>
                  <div><span className="font-medium">Building:</span> {formData.selectedBuilding}</div>
                  <div><span className="font-medium">Unit:</span> {formData.selectedUnit}</div>
                  <div><span className="font-medium">Term:</span> {formData.termLength} months</div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="termsAccepted"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange('termsAccepted', checked)}
                />
                <Label htmlFor="termsAccepted" className="text-sm">
                  I agree to the <a href="#" className="text-green-600 hover:underline">Terms and Conditions</a>
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onCheckedChange={(checked) => handleInputChange('privacyAccepted', checked)}
                />
                <Label htmlFor="privacyAccepted" className="text-sm">
                  I agree to the <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
                </Label>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Corporate Application</h1>
              <p className="text-gray-600">Complete your corporate rental application</p>
            </div>
            <Link to="/discovery">
              <Button variant="outline" size="sm">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Properties
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep} of {steps.length}
            </span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Navigation */}
        <div className="flex justify-between mb-8">
          {steps.map((step) => {
            const Icon = step.icon
            const isActive = currentStep === step.id
            const isCompleted = currentStep > step.id
            
            return (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center mb-2
                  ${isActive ? 'bg-green-600 text-white' : 
                    isCompleted ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-400'}
                `}>
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                </div>
                <span className={`text-xs text-center ${isActive ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                  {step.title}
                </span>
              </div>
            )
          })}
        </div>

        {/* Form Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              {React.createElement(steps[currentStep - 1].icon, { className: "w-5 h-5 mr-2" })}
              {steps[currentStep - 1].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {renderStepContent()}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          {currentStep === steps.length ? (
            <Button
              className="bg-green-600 hover:bg-green-700"
              disabled={!formData.termsAccepted || !formData.privacyAccepted}
            >
              Submit Application
              <FileText className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              className="bg-green-600 hover:bg-green-700"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CorporateApplication
