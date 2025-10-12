"use client";

import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, MapPin, Church, Users, Globe as GlobeIcon } from "lucide-react";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: ThreeElements["mesh"] & {
      new (): ThreeGlobe;
    };
  }
}

extend({ ThreeGlobe: ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

interface MarkerData {
  id: string;
  type: "origin" | "church";
  country: string;
  lat: number;
  lng: number;
  name?: string;
  photo?: string;
  testimony?: string;
  year?: number;
  planter?: string;
  impact?: string;
  status?: string;
}

const studentOrigins: MarkerData[] = [
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
];

const churchPlants: MarkerData[] = [
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
];

const ghanaLocation = { lat: 7.9465, lng: -1.0232 };

// Simple countries data for polygons
const countries = {
  features: [
    {
      type: "Feature",
      properties: { name: "Africa" },
      geometry: {
        type: "Polygon",
        coordinates: [[[20, -35], [50, -35], [50, 35], [20, 35], [20, -35]]]
      }
    },
    {
      type: "Feature", 
      properties: { name: "Asia" },
      geometry: {
        type: "Polygon",
        coordinates: [[[60, -10], [140, -10], [140, 70], [60, 70], [60, -10]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Europe" },
      geometry: {
        type: "Polygon", 
        coordinates: [[[0, 35], [40, 35], [40, 70], [0, 70], [0, 35]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "North America" },
      geometry: {
        type: "Polygon",
        coordinates: [[[-140, 20], [-60, 20], [-60, 70], [-140, 70], [-140, 20]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "South America" },
      geometry: {
        type: "Polygon",
        coordinates: [[[-80, -55], [-35, -55], [-35, 15], [-80, 15], [-80, -55]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Australia" },
      geometry: {
        type: "Polygon",
        coordinates: [[[110, -45], [155, -45], [155, -10], [110, -10], [110, -45]]]
      }
    }
  ]
};

let numbersOfRings = [0];

export function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<any>();
  const [isInitialized, setIsInitialized] = useState(false);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  // Initialize globe only once
  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      (groupRef.current as any).add(globeRef.current);
      setIsInitialized(true);
    }
  }, []);

  // Build material when globe is initialized or when relevant props change
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(globeConfig.globeColor);
    globeMaterial.emissive = new Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
  }, [
    isInitialized,
    globeConfig.globeColor,
    globeConfig.emissive,
    globeConfig.emissiveIntensity,
    globeConfig.shininess,
  ]);

  // Build data when globe is initialized or when data changes
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    const arcs = data;
    let points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    // remove duplicates for same lat and lng
    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ["lat", "lng"].every(
            (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"],
          ),
        ) === i,
    );

    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);

    globeRef.current
      .arcsData(data)
      .arcStartLat((d) => (d as { startLat: number }).startLat * 1)
      .arcStartLng((d) => (d as { startLng: number }).startLng * 1)
      .arcEndLat((d) => (d as { endLat: number }).endLat * 1)
      .arcEndLng((d) => (d as { endLng: number }).endLng * 1)
      .arcColor((e: any) => (e as { color: string }).color)
      .arcAltitude((e) => (e as { arcAlt: number }).arcAlt * 1)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((e) => (e as { order: number }).order * 1)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime);

    globeRef.current
      .pointsData(filteredPoints)
      .pointColor((e) => (e as { color: string }).color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globeRef.current
      .ringsData([])
      .ringColor(() => defaultProps.polygonColor)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings,
      );
  }, [
    isInitialized,
    data,
    defaultProps.pointSize,
    defaultProps.showAtmosphere,
    defaultProps.atmosphereColor,
    defaultProps.atmosphereAltitude,
    defaultProps.polygonColor,
    defaultProps.arcLength,
    defaultProps.arcTime,
    defaultProps.rings,
    defaultProps.maxRings,
  ]);

  // Handle rings animation with cleanup
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    const interval = setInterval(() => {
      if (!globeRef.current) return;

      const newNumbersOfRings = genRandomNumbers(
        0,
        data.length,
        Math.floor((data.length * 4) / 5),
      );

      const ringsData = data
        .filter((d, i) => newNumbersOfRings.includes(i))
        .map((d) => ({
          lat: d.startLat,
          lng: d.startLng,
          color: d.color,
        }));

      globeRef.current.ringsData(ringsData);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isInitialized, data]);

  return <group ref={groupRef} />;
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0x000000, 0);
  }, [gl, size]);

  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0x000000, 400, 2000);
  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

type FilterType = "all" | "africa" | "asia" | "americas" | "europe";

export function AceternityGlobe() {
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);
  const [filter, setFilter] = useState<FilterType>("all");
  const [animatedStats, setAnimatedStats] = useState({ nations: 0, graduates: 0, churches: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("aceternity-globe");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setAnimatedStats({
        nations: Math.floor(45 * progress),
        graduates: Math.floor(300 * progress),
        churches: Math.floor(25 * progress),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const getFilteredMarkers = () => {
    if (filter === "all") return [...studentOrigins, ...churchPlants];

    const regionMap: Record<string, string[]> = {
      africa: ["Ghana", "Nigeria", "Kenya", "Zambia", "Mozambique", "Tanzania", "Senegal"],
      asia: ["South Korea", "Philippines", "India", "Thailand", "Cambodia", "Nepal"],
      americas: ["Brazil", "USA", "Peru"],
      europe: [],
    };

    const countries = regionMap[filter] || [];
    return [...studentOrigins, ...churchPlants].filter((m) => countries.includes(m.country));
  };

  const filteredMarkers = getFilteredMarkers();

  // Generate arc data for Three.js globe
  const generateArcData = (): Position[] => {
    const arcs: Position[] = [];
    let order = 0;

    filteredMarkers.forEach((marker) => {
      if (marker.type === "origin") {
        // Arc from origin to Ghana
        arcs.push({
          order: order++,
          startLat: marker.lat,
          startLng: marker.lng,
          endLat: ghanaLocation.lat,
          endLng: ghanaLocation.lng,
          arcAlt: 0.3,
          color: "#3b82f6", // Blue for student origins
        });
      } else {
        // Arc from Ghana to church plant
        arcs.push({
          order: order++,
          startLat: ghanaLocation.lat,
          startLng: ghanaLocation.lng,
          endLat: marker.lat,
          endLng: marker.lng,
          arcAlt: 0.3,
          color: "#f59e0b", // Amber for church plants
        });
      }
    });

    return arcs;
  };

  const globeConfig: GlobeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    autoRotate: true,
    autoRotateSpeed: 1,
  };

  const arcData = generateArcData();

  return (
    <div id="aceternity-globe" className="w-full">
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
        <div className="relative w-full h-[600px] md:h-[720px] mx-auto bg-black rounded-lg">
          {isMounted ? (
            <World globeConfig={globeConfig} data={arcData} />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg">
              <div className="text-white text-lg">Loading Globe...</div>
            </div>
          )}
          
          {/* Central Text Overlay */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10">
            <p className="text-lg md:text-xl font-bold text-white drop-shadow-lg">
              From the nations to Ghana,
              <br />
              from Ghana to the nations
            </p>
            <p className="text-sm text-white/80 mt-2">A global vision, a global mission</p>
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
        </div>
      </Card>
    </div>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
  suffix = "",
}: {
  icon: any;
  value: number;
  label: string;
  suffix?: string;
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
  );
}

function FilterButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <Button variant={active ? "default" : "outline"} onClick={onClick} className={active ? "bg-primary" : ""}>
      {label}
    </Button>
  );
}
