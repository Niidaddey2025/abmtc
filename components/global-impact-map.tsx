"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, MapPin, Church, Users, Globe } from "lucide-react"

type MarkerType = "origin" | "church"

interface Marker {
  id: string
  type: MarkerType
  country: string
  x: number // percentage position
  y: number // percentage position
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
    x: 25,
    y: 65,
    name: "Maria Santos",
    photo: "/young-brazilian-woman-student-smiling.jpg",
    testimony: "God called me from Brazil to serve in missions.",
  },
  {
    id: "o2",
    type: "origin",
    country: "South Korea",
    x: 82,
    y: 38,
    name: "Sarah Kim",
    photo: "/young-korean-woman-student-portrait.jpg",
    testimony: "ABMTC transformed my understanding of missions.",
  },
  {
    id: "o3",
    type: "origin",
    country: "Zambia",
    x: 55,
    y: 75,
    name: "Emmanuel Banda",
    photo: "/young-zambian-man-student-smiling.jpg",
    testimony: "The community became my family.",
  },
  {
    id: "o4",
    type: "origin",
    country: "USA",
    x: 18,
    y: 40,
    name: "John Williams",
    testimony: "From America to Ghana, answering the call.",
  },
  {
    id: "o5",
    type: "origin",
    country: "Nigeria",
    x: 50,
    y: 55,
    name: "Grace Adeyemi",
    testimony: "Training to reach unreached people groups.",
  },
  {
    id: "o6",
    type: "origin",
    country: "Philippines",
    x: 85,
    y: 55,
    name: "Miguel Cruz",
    testimony: "Equipped for church planting in Asia.",
  },
  {
    id: "o7",
    type: "origin",
    country: "Kenya",
    x: 58,
    y: 62,
    name: "Ruth Mwangi",
    testimony: "Learning to make disciples of all nations.",
  },
  {
    id: "o8",
    type: "origin",
    country: "India",
    x: 75,
    y: 52,
    name: "Priya Sharma",
    testimony: "From India to the world through ABMTC.",
  },
]

const churchPlants: Marker[] = [
  {
    id: "c1",
    type: "church",
    country: "Thailand",
    x: 80,
    y: 52,
    year: 2022,
    planter: "Sarah Kim",
    impact: "3 churches planted, 150+ believers",
    status: "Active",
  },
  {
    id: "c2",
    type: "church",
    country: "Mozambique",
    x: 58,
    y: 78,
    year: 2021,
    planter: "Emmanuel Banda",
    impact: "2 churches, 80+ members",
    status: "Growing",
  },
  {
    id: "c3",
    type: "church",
    country: "Peru",
    x: 22,
    y: 70,
    year: 2023,
    planter: "Maria Santos",
    impact: "1 church, 45 believers",
    status: "New",
  },
  {
    id: "c4",
    type: "church",
    country: "Cambodia",
    x: 81,
    y: 54,
    year: 2020,
    planter: "Miguel Cruz",
    impact: "4 churches, 200+ believers",
    status: "Established",
  },
  {
    id: "c5",
    type: "church",
    country: "Tanzania",
    x: 57,
    y: 70,
    year: 2022,
    planter: "Ruth Mwangi",
    impact: "2 churches, 90+ members",
    status: "Active",
  },
  {
    id: "c6",
    type: "church",
    country: "Nepal",
    x: 76,
    y: 48,
    year: 2023,
    planter: "Priya Sharma",
    impact: "1 church, 30 believers",
    status: "New",
  },
  {
    id: "c7",
    type: "church",
    country: "Senegal",
    x: 45,
    y: 52,
    year: 2021,
    planter: "Grace Adeyemi",
    impact: "3 churches, 120+ believers",
    status: "Growing",
  },
]

const ghanaLocation = { x: 48, y: 55 } // Ghana's approximate position

type FilterType = "all" | "africa" | "asia" | "americas" | "europe"

export function GlobalImpactMap() {
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null)
  const [filter, setFilter] = useState<FilterType>("all")
  const [animatedStats, setAnimatedStats] = useState({ nations: 0, graduates: 0, churches: 0 })
  const [isVisible, setIsVisible] = useState(false)

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

    const element = document.getElementById("global-map")
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

  return (
    <div id="global-map" className="w-full">
      {/* Stats Counter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatCard icon={Globe} value={animatedStats.nations} label="Nations Represented" suffix="+" />
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

      {/* Map Container */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-8">
        <div className="relative w-full aspect-[2/1] bg-muted/20 rounded-lg overflow-hidden">
          {/* World Map Background */}
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 1000 500" className="w-full h-full">
              {/* Simplified world map continents */}
              <path
                d="M 150 200 Q 200 180 250 200 L 280 250 L 250 280 L 200 270 L 150 250 Z"
                fill="currentColor"
                className="text-foreground"
              />
              <path
                d="M 450 150 Q 550 140 650 160 L 680 200 L 650 250 L 550 240 L 450 220 Z"
                fill="currentColor"
                className="text-foreground"
              />
              <path
                d="M 700 200 Q 800 190 850 210 L 870 260 L 820 280 L 750 270 L 700 250 Z"
                fill="currentColor"
                className="text-foreground"
              />
            </svg>
          </div>

          {/* Ghana Pulsing Center */}
          <div
            className="absolute w-8 h-8 -ml-4 -mt-4 z-20"
            style={{ left: `${ghanaLocation.x}%`, top: `${ghanaLocation.y}%` }}
          >
            <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75" />
            <div className="absolute inset-0 bg-secondary rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-secondary-foreground" />
            </div>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {filteredMarkers.map((marker) => {
              if (marker.type === "origin") {
                return (
                  <line
                    key={`line-${marker.id}`}
                    x1={`${marker.x}%`}
                    y1={`${marker.y}%`}
                    x2={`${ghanaLocation.x}%`}
                    y2={`${ghanaLocation.y}%`}
                    stroke="rgb(59, 130, 246)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.3"
                    className="animate-pulse"
                  />
                )
              }
              return (
                <line
                  key={`line-${marker.id}`}
                  x1={`${ghanaLocation.x}%`}
                  y1={`${ghanaLocation.y}%`}
                  x2={`${marker.x}%`}
                  y2={`${marker.y}%`}
                  stroke="rgb(245, 158, 11)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.3"
                  className="animate-pulse"
                />
              )
            })}
          </svg>

          {/* Markers */}
          {filteredMarkers.map((marker) => (
            <button
              key={marker.id}
              className={`absolute w-6 h-6 -ml-3 -mt-3 rounded-full z-30 transition-all hover:scale-125 ${
                marker.type === "origin" ? "bg-blue-500 hover:bg-blue-600" : "bg-amber-500 hover:bg-amber-600"
              } ${selectedMarker?.id === marker.id ? "ring-4 ring-white scale-125" : ""}`}
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              onClick={() => setSelectedMarker(marker)}
              title={marker.country}
            >
              {marker.type === "church" && (
                <Church className="w-3 h-3 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              )}
            </button>
          ))}

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
            </div>
          </div>

          {/* Central Text Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-5">
            <p className="text-lg md:text-xl font-bold text-foreground/30">
              From the nations to Ghana,
              <br />
              from Ghana to the nations
            </p>
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
