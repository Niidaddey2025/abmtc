"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Sphere, Html } from "@react-three/drei"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, MapPin, Church, Users, Globe as GlobeIcon } from "lucide-react"
import * as THREE from "three"

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

const ghanaLocation = { lat: 7.9465, lng: -1.0232 } // Ghana's coordinates

type FilterType = "all" | "africa" | "asia" | "americas" | "europe"

// Convert lat/lng to 3D coordinates on sphere
function latLngToVector3(lat: number, lng: number, radius: number = 2) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)

  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const y = radius * Math.cos(phi)

  return new THREE.Vector3(x, y, z)
}

function GlobeMarker({ 
  marker, 
  onClick, 
  isSelected 
}: { 
  marker: Marker
  onClick: () => void
  isSelected: boolean 
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const position = latLngToVector3(marker.lat, marker.lng, 2.02)

  useFrame((state: any) => {
    if (meshRef.current) {
      meshRef.current.lookAt(state.camera.position)
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      scale={isSelected ? 1.5 : 1}
    >
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial 
        color={marker.type === "origin" ? "#3b82f6" : "#f59e0b"}
        transparent
        opacity={0.9}
      />
      {marker.type === "church" && (
        <Html distanceFactor={10}>
          <div className="pointer-events-none">
            <Church className="w-3 h-3 text-white" />
          </div>
        </Html>
      )}
    </mesh>
  )
}

function ConnectionLine({ start, end, color }: { start: THREE.Vector3, end: THREE.Vector3, color: string }) {
  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      start,
      start.clone().lerp(end, 0.5).multiplyScalar(1.3),
      end
    )
    return curve.getPoints(50)
  }, [start, end])
  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.6} />
    </line>
  )
}

function Globe({ 
  markers, 
  selectedMarker, 
  onMarkerClick 
}: { 
  markers: Marker[]
  selectedMarker: Marker | null
  onMarkerClick: (marker: Marker) => void 
}) {
  const globeRef = useRef<THREE.Mesh>(null)
  const ghanaPosition = latLngToVector3(ghanaLocation.lat, ghanaLocation.lng, 2.02)

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002
    }
  })

  return (
    <group>
      {/* Globe */}
      <Sphere ref={globeRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#1e293b"
          transparent
          opacity={0.8}
          wireframe={false}
        />
      </Sphere>

      {/* Ghana Center Marker */}
      <mesh position={ghanaPosition}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color="#ef4444" />
        <Html distanceFactor={10}>
          <div className="pointer-events-none">
            <MapPin className="w-4 h-4 text-red-500" />
          </div>
        </Html>
      </mesh>

      {/* Connection Lines */}
      {markers.map((marker) => {
        const markerPosition = latLngToVector3(marker.lat, marker.lng, 2.02)
        const color = marker.type === "origin" ? "#3b82f6" : "#f59e0b"
        
        return (
          <ConnectionLine
            key={`line-${marker.id}`}
            start={marker.type === "origin" ? markerPosition : ghanaPosition}
            end={marker.type === "origin" ? ghanaPosition : markerPosition}
            color={color}
          />
        )
      })}

      {/* Markers */}
      {markers.map((marker) => (
        <GlobeMarker
          key={marker.id}
          marker={marker}
          onClick={() => onMarkerClick(marker)}
          isSelected={selectedMarker?.id === marker.id}
        />
      ))}
    </group>
  )
}

export function InteractiveGlobe() {
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

    const element = document.getElementById("interactive-globe")
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
    <div id="interactive-globe" className="w-full">
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
        <div className="relative w-full aspect-square max-h-[600px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-lg overflow-hidden">
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <Globe 
              markers={filteredMarkers}
              selectedMarker={selectedMarker}
              onMarkerClick={setSelectedMarker}
            />
            <OrbitControls 
              enableZoom={true}
              enablePan={false}
              minDistance={3}
              maxDistance={8}
              autoRotate={true}
              autoRotateSpeed={0.5}
            />
          </Canvas>

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
            <p className="text-lg md:text-xl font-bold text-white/80">
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
