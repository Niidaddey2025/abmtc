"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, MapPin, Church, Users, Globe as GlobeIcon } from "lucide-react"

type MarkerType = "origin" | "church"

interface Marker {
  id: string
  type: MarkerType
  country: string
  lat: number
  lng: number
  name?: string
  photo?: string
  testimony?: string
  year?: number
  planter?: string
  impact?: string
  status?: string
}

const studentOrigins: Marker[] = [
  {
    id: "o1",
    type: "origin",
    country: "Brazil",
    lat: -14.2350,
    lng: -51.9253,
    name: "Maria Santos",
    photo: "/young-brazilian-woman-student-smiling.jpg",
    testimony: "God called me from Brazil to serve in missions.",
  },
  {
    id: "o2",
    type: "origin",
    country: "South Korea",
    lat: 35.9078,
    lng: 127.7669,
    name: "Sarah Kim",
    photo: "/young-korean-woman-student-portrait.jpg",
    testimony: "ABMTC transformed my understanding of missions.",
  },
  {
    id: "o3",
    type: "origin",
    country: "Zambia",
    lat: -13.1339,
    lng: 27.8493,
    name: "Emmanuel Banda",
    photo: "/young-zambian-man-student-smiling.jpg",
    testimony: "The community became my family.",
  },
  {
    id: "o4",
    type: "origin",
    country: "USA",
    lat: 37.0902,
    lng: -95.7129,
    name: "John Williams",
    testimony: "From America to Ghana, answering the call.",
  },
  {
    id: "o5",
    type: "origin",
    country: "Nigeria",
    lat: 9.0820,
    lng: 8.6753,
    name: "Grace Adeyemi",
    testimony: "Training to reach unreached people groups.",
  },
  {
    id: "o6",
    type: "origin",
    country: "Philippines",
    lat: 12.8797,
    lng: 121.7740,
    name: "Miguel Cruz",
    testimony: "Equipped for church planting in Asia.",
  },
  {
    id: "o7",
    type: "origin",
    country: "Kenya",
    lat: -0.0236,
    lng: 37.9062,
    name: "Ruth Mwangi",
    testimony: "Learning to make disciples of all nations.",
  },
  {
    id: "o8",
    type: "origin",
    country: "India",
    lat: 20.5937,
    lng: 78.9629,
    name: "Priya Sharma",
    testimony: "From India to the world through ABMTC.",
  },
]

const churchPlants: Marker[] = [
  {
    id: "c1",
    type: "church",
    country: "Thailand",
    lat: 15.8700,
    lng: 100.9925,
    year: 2022,
    planter: "Sarah Kim",
    impact: "3 churches planted, 150+ believers",
    status: "Active",
  },
  {
    id: "c2",
    type: "church",
    country: "Mozambique",
    lat: -18.6657,
    lng: 35.5296,
    year: 2021,
    planter: "Emmanuel Banda",
    impact: "2 churches, 80+ members",
    status: "Growing",
  },
  {
    id: "c3",
    type: "church",
    country: "Peru",
    lat: -9.1900,
    lng: -75.0152,
    year: 2023,
    planter: "Maria Santos",
    impact: "1 church, 45 believers",
    status: "New",
  },
  {
    id: "c4",
    type: "church",
    country: "Cambodia",
    lat: 12.5657,
    lng: 104.9910,
    year: 2020,
    planter: "Miguel Cruz",
    impact: "4 churches, 200+ believers",
    status: "Established",
  },
  {
    id: "c5",
    type: "church",
    country: "Tanzania",
    lat: -6.3690,
    lng: 34.8888,
    year: 2022,
    planter: "Ruth Mwangi",
    impact: "2 churches, 90+ members",
    status: "Active",
  },
  {
    id: "c6",
    type: "church",
    country: "Nepal",
    lat: 28.3949,
    lng: 84.1240,
    year: 2023,
    planter: "Priya Sharma",
    impact: "1 church, 30 believers",
    status: "New",
  },
  {
    id: "c7",
    type: "church",
    country: "Senegal",
    lat: 14.4974,
    lng: -14.4524,
    year: 2021,
    planter: "Grace Adeyemi",
    impact: "3 churches, 120+ believers",
    status: "Growing",
  },
]

const ghanaLocation = { lat: 7.9465, lng: -1.0232 }

type FilterType = "all" | "africa" | "asia" | "americas" | "europe"

// Convert lat/lng to x,y coordinates on a sphere projection
function latLngToXY(lat: number, lng: number, rotation: number = 0) {
  // Adjust longitude based on rotation
  const adjustedLng = lng - rotation
  
  // Convert to radians
  const latRad = (lat * Math.PI) / 180
  const lngRad = (adjustedLng * Math.PI) / 180
  
  // Project to 2D using orthographic projection
  const x = Math.cos(latRad) * Math.sin(lngRad)
  const y = -Math.sin(latRad)
  const z = Math.cos(latRad) * Math.cos(lngRad)
  
  // Only show markers on the visible hemisphere (z > 0)
  const visible = z > 0
  
  return { 
    x: x * 180 + 200, // Scale and center
    y: y * 180 + 200, // Scale and center
    visible 
  }
}

export function CSSGlobe() {
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null)
  const [filter, setFilter] = useState<FilterType>("all")
  const [animatedStats, setAnimatedStats] = useState({ nations: 0, graduates: 0, churches: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("css-globe")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setAnimatedStats({
        nations: Math.floor(45 * progress),
        graduates: Math.floor(300 * progress),
        churches: Math.floor(25 * progress),
      })

      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [isVisible])

  useEffect(() => {
    const rotationTimer = setInterval(() => {
      setRotation(prev => prev + 0.5)
    }, 50)

    return () => clearInterval(rotationTimer)
  }, [])

  const getFilteredMarkers = () => {
    if (filter === "all") return [...studentOrigins, ...churchPlants]

    const regionMap: Record<string, string[]> = {
      africa: ["Ghana", "Nigeria", "Kenya", "Zambia", "Mozambique", "Tanzania", "Senegal"],
      asia: ["South Korea", "Philippines", "India", "Thailand", "Cambodia", "Nepal"],
      americas: ["Brazil", "USA", "Peru"],
      europe: [],
    }

    const countries = regionMap[filter] || []
    return [...studentOrigins, ...churchPlants].filter((m) => countries.includes(m.country))
  }

  const filteredMarkers = getFilteredMarkers()
  const ghanaXY = latLngToXY(ghanaLocation.lat, ghanaLocation.lng, rotation)

  return (
    <div id="css-globe" className="w-full">
      {/* Stats Counter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatCard icon={GlobeIcon} value={animatedStats.nations} label="Nations Represented" suffix="+" />
        <StatCard icon={Users} value={animatedStats.graduates} label="Graduates Serving" suffix="+" />
        <StatCard icon={Church} value={animatedStats.churches} label="Churches Planted" suffix="+" />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <FilterButton active={filter === "all"} onClick={() => setFilter("all")} label="All Regions" />
        <FilterButton active={filter === "africa"} onClick={() => setFilter("africa")} label="Africa" />
        <FilterButton active={filter === "asia"} onClick={() => setFilter("asia")} label="Asia" />
        <FilterButton active={filter === "americas"} onClick={() => setFilter("americas")} label="Americas" />
      </div>

      {/* Globe Container */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-8">
        <div className="relative w-full aspect-square max-h-[600px] mx-auto flex items-center justify-center">
          {/* Globe Sphere */}
          <div 
            className="relative w-96 h-96 rounded-full shadow-2xl"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(100, 200, 255, 0.8) 0%, rgba(50, 100, 200, 0.6) 30%, rgba(20, 50, 100, 0.8) 70%, rgba(10, 30, 60, 1) 100%),
                conic-gradient(from 0deg, 
                  #1e40af 0deg, #1e3a8a 30deg, #1e40af 60deg, 
                  #065f46 90deg, #047857 120deg, #059669 150deg,
                  #92400e 180deg, #a16207 210deg, #ca8a04 240deg,
                  #1e40af 270deg, #1e3a8a 300deg, #1e40af 330deg, #1e40af 360deg
                )
              `,
              transform: `rotateY(${rotation}deg) rotateX(10deg)`,
              transformStyle: 'preserve-3d',
              boxShadow: `
                inset -20px -20px 50px rgba(0, 0, 0, 0.5),
                inset 20px 20px 50px rgba(255, 255, 255, 0.1),
                0 0 50px rgba(59, 130, 246, 0.3)
              `
            }}
          >
            {/* World Map Overlay */}
            <div 
              className="absolute inset-0 rounded-full opacity-40"
              style={{
                background: `
                  radial-gradient(ellipse 40% 30% at 20% 40%, #065f46 0%, transparent 50%),
                  radial-gradient(ellipse 35% 25% at 45% 35%, #065f46 0%, transparent 50%),
                  radial-gradient(ellipse 30% 40% at 70% 45%, #065f46 0%, transparent 50%),
                  radial-gradient(ellipse 25% 35% at 15% 65%, #065f46 0%, transparent 50%),
                  radial-gradient(ellipse 20% 25% at 80% 30%, #065f46 0%, transparent 50%),
                  radial-gradient(ellipse 15% 20% at 25% 75%, #065f46 0%, transparent 50%)
                `
              }}
            />
            
            {/* Latitude/Longitude Grid */}
            <svg className="absolute inset-0 w-full h-full opacity-20 rounded-full" viewBox="0 0 400 400">
              {/* Longitude lines */}
              {Array.from({ length: 12 }, (_, i) => (
                <ellipse
                  key={`lng-${i}`}
                  cx="200"
                  cy="200"
                  rx={`${200 * Math.cos((i * 15 * Math.PI) / 180)}`}
                  ry="200"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1"
                  transform={`rotate(${i * 15} 200 200)`}
                />
              ))}
              {/* Latitude lines */}
              {Array.from({ length: 9 }, (_, i) => (
                <ellipse
                  key={`lat-${i}`}
                  cx="200"
                  cy="200"
                  rx="200"
                  ry={`${200 * Math.sin(((i + 1) * 20 * Math.PI) / 180)}`}
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1"
                />
              ))}
            </svg>

            {/* Ghana Center Marker */}
            {ghanaXY.visible && (
              <div
                className="absolute w-6 h-6 -ml-3 -mt-3 z-20"
                style={{ 
                  left: `${(ghanaXY.x / 400) * 100}%`, 
                  top: `${(ghanaXY.y / 400) * 100}%` 
                }}
              >
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
                <div className="absolute inset-0 bg-red-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
              </div>
            )}

            {/* Animated Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              {filteredMarkers.map((marker) => {
                const markerXY = latLngToXY(marker.lat, marker.lng, rotation)
                
                // Only show connections if both points are visible
                if (!markerXY.visible || !ghanaXY.visible) return null
                
                const startX = marker.type === "origin" ? markerXY.x : ghanaXY.x
                const startY = marker.type === "origin" ? markerXY.y : ghanaXY.y
                const endX = marker.type === "origin" ? ghanaXY.x : markerXY.x
                const endY = marker.type === "origin" ? ghanaXY.y : markerXY.y
                
                return (
                  <path
                    key={`line-${marker.id}`}
                    d={`M ${startX} ${startY} Q ${(startX + endX) / 2} ${Math.min(startY, endY) - 30} ${endX} ${endY}`}
                    stroke={marker.type === "origin" ? "#3b82f6" : "#f59e0b"}
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    fill="none"
                    opacity="0.7"
                    className="animate-pulse"
                  />
                )
              })}
            </svg>

            {/* Markers */}
            {filteredMarkers.map((marker) => {
              const markerXY = latLngToXY(marker.lat, marker.lng, rotation)
              
              // Only show markers on the visible hemisphere
              if (!markerXY.visible) return null
              
              return (
                <button
                  key={marker.id}
                  className={`absolute w-4 h-4 -ml-2 -mt-2 rounded-full z-30 transition-all hover:scale-125 shadow-lg ${
                    marker.type === "origin" ? "bg-blue-500 hover:bg-blue-600" : "bg-amber-500 hover:bg-amber-600"
                  } ${selectedMarker?.id === marker.id ? "ring-4 ring-white scale-125" : ""}`}
                  style={{ 
                    left: `${(markerXY.x / 400) * 100}%`, 
                    top: `${(markerXY.y / 400) * 100}%` 
                  }}
                  onClick={() => setSelectedMarker(marker)}
                  title={marker.country}
                >
                  {marker.type === "church" && (
                    <Church className="w-2 h-2 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  )}
                </button>
              )
            })}

            {/* Radiating Waves from Ghana */}
            {ghanaXY.visible && (
              <div
                className="absolute w-16 h-16 -ml-8 -mt-8 z-5"
                style={{ 
                  left: `${(ghanaXY.x / 400) * 100}%`, 
                  top: `${(ghanaXY.y / 400) * 100}%` 
                }}
              >
                <div className="absolute inset-0 border-2 border-secondary rounded-full animate-ping opacity-30" />
                <div className="absolute inset-2 border-2 border-secondary rounded-full animate-ping opacity-20" style={{ animationDelay: '0.5s' }} />
                <div className="absolute inset-4 border-2 border-secondary rounded-full animate-ping opacity-10" style={{ animationDelay: '1s' }} />
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500" />
                <span>Student Origins</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-500" />
                <span>Church Plants</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <span>ABMTC Ghana</span>
              </div>
            </div>
          </div>

          {/* Central Text Overlay */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10">
            <p className="text-lg md:text-xl font-bold text-white/80 drop-shadow-lg">
              From the nations to Ghana,
              <br />
              from Ghana to the nations
            </p>
            <p className="text-sm text-white/60 mt-2">A global vision, a global mission</p>
          </div>
        </div>

        {/* Marker Details Popup */}
        {selectedMarker && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md px-4">
            <Card className="p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
              <button
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                onClick={() => setSelectedMarker(null)}
              >
                <X className="w-5 h-5" />
              </button>

              {selectedMarker.type === "origin" ? (
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    {selectedMarker.photo && (
                      <img
                        src={selectedMarker.photo || "/placeholder.svg"}
                        alt={selectedMarker.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{selectedMarker.name}</h3>
                      <p className="text-muted-foreground">{selectedMarker.country}</p>
                    </div>
                  </div>
                  {selectedMarker.testimony && (
                    <p className="text-sm text-foreground/80 italic">"{selectedMarker.testimony}"</p>
                  )}
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Church className="w-6 h-6 text-amber-500" />
                    <h3 className="text-xl font-bold text-foreground">{selectedMarker.country}</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold">Established:</span> {selectedMarker.year}
                    </p>
                    <p>
                      <span className="font-semibold">Planter:</span> {selectedMarker.planter}
                    </p>
                    <p>
                      <span className="font-semibold">Impact:</span> {selectedMarker.impact}
                    </p>
                    <p>
                      <span className="font-semibold">Status:</span>{" "}
                      <span className="text-green-600 font-medium">{selectedMarker.status}</span>
                    </p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        )}
      </Card>
    </div>
  )
}

function StatCard({
  icon: Icon,
  value,
  label,
  suffix = "",
}: {
  icon: any
  value: number
  label: string
  suffix?: string
}) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-3">
        <div className="p-3 bg-primary/10 rounded-full">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="text-4xl font-bold text-primary mb-2">
        {value}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </Card>
  )
}

function FilterButton({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <Button variant={active ? "default" : "outline"} onClick={onClick} className={active ? "bg-primary" : ""}>
      {label}
    </Button>
  )
}
