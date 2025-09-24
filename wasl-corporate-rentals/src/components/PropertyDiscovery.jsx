import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Search, Filter, MapPin, Bed, Square, DollarSign, Eye } from 'lucide-react'

const PropertyDiscovery = () => {
  const [selectedProperty, setSelectedProperty] = useState(null)

  const properties = [
    {
      id: 1,
      name: "Wasl 1",
      location: "Za'abeel 1 - Dubai",
      building: "Tower A",
      unit: "1205",
      rooms: "2 BR",
      area: "1,250 sq-ft",
      price: "AED 185,000",
      availability: "Available",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      name: "Wasl Gate",
      location: "Sheikh Zyad Road",
      building: "Building B",
      unit: "805",
      rooms: "3 BR",
      area: "1,850 sq-ft",
      price: "AED 275,000",
      availability: "Available",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      name: "Nad Al Hammar Gardens",
      location: "Al Warqa",
      building: "Block C",
      unit: "402",
      rooms: "2 BR",
      area: "1,150 sq-ft",
      price: "AED 165,000",
      availability: "Available",
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      name: "Hillside Residences",
      location: "Jebel Ali Village",
      building: "Villa Complex",
      unit: "V-15",
      rooms: "4 BR",
      area: "2,500 sq-ft",
      price: "AED 425,000",
      availability: "Available",
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      name: "One B Tower",
      location: "Al Habtoor City",
      building: "Tower B",
      unit: "3201",
      rooms: "3 BR",
      area: "2,100 sq-ft",
      price: "AED 385,000",
      availability: "Available",
      image: "/api/placeholder/300/200"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Corporate Rentals - Availability</h1>
          <p className="text-gray-600">Discover premium Dubai properties for corporate rental</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>
              
              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input placeholder="Location, Community, Building" className="pl-10" />
                  </div>
                </div>

                {/* Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="office">Office</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="1">1 BR</SelectItem>
                      <SelectItem value="2">2 BR</SelectItem>
                      <SelectItem value="3">3 BR</SelectItem>
                      <SelectItem value="4">4+ BR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business-bay">Business Bay</SelectItem>
                      <SelectItem value="downtown">Downtown Dubai</SelectItem>
                      <SelectItem value="marina">Dubai Marina</SelectItem>
                      <SelectItem value="jlt">JLT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Area */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area (Sq. Ft.)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Min" />
                    <Input placeholder="Max" />
                  </div>
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price (AED)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Min" />
                    <Input placeholder="Max" />
                  </div>
                </div>

                {/* Premium Units */}
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="premium" className="rounded" />
                  <label htmlFor="premium" className="text-sm text-gray-700">Premium Units for Singles</label>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{properties.length} properties found</p>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price - Low to High</SelectItem>
                  <SelectItem value="price-high">Price - High to Low</SelectItem>
                  <SelectItem value="area">Area</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                        <div className="text-gray-400 text-center">
                          <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                          <p className="text-sm">Property Image</p>
                        </div>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-green-500">
                        {property.availability}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{property.name}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {property.location}
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 mr-2 bg-gray-300 rounded"></div>
                        Building: {property.building}
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 mr-2 bg-gray-300 rounded"></div>
                        Unit: {property.unit}
                      </div>
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-2" />
                        {property.rooms}
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-2" />
                        {property.area}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center text-lg font-semibold text-green-600">
                        <DollarSign className="w-5 h-5 mr-1" />
                        {property.price}
                      </div>
                      <span className="text-sm text-gray-500">/ Year</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-4 pt-0 space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => setSelectedProperty(property)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Link to="/application" className="flex-1">
                      <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                        Start Application
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedProperty.name}</h2>
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedProperty(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-gray-400 text-center">
                      <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                      <p>Property Photos</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-full h-20 bg-gray-200 rounded"></div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Property Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Location:</span>
                          <span>{selectedProperty.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Building:</span>
                          <span>{selectedProperty.building}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Unit:</span>
                          <span>{selectedProperty.unit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rooms:</span>
                          <span>{selectedProperty.rooms}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Area:</span>
                          <span>{selectedProperty.area}</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Price:</span>
                          <span className="text-green-600">{selectedProperty.price}/Year</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Amenities</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>• Parking</div>
                        <div>• Gym</div>
                        <div>• Pool</div>
                        <div>• Security</div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Link to="/application">
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          Start Corporate Application
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PropertyDiscovery
