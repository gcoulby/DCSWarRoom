export type Properties = {
  [key: string]: string | number | boolean | Date | Coordinates[] | number[] | undefined
}

// Define interface for the parsed line output
export interface ParsedMessage {
  key?: string
  value?: string
  id?: string
  properties?: { [key: string]: string }
}

// Define the expected structure of the parser object
export interface MessageParser {
  parseMessage: (message: string) => ParsedMessage[] | null
}

export interface GlobalEvent {
  Time: number
  Event: string
  Details: string
}

type ConversionFunction = (value: string) => any

const conversionMap: { [key: string]: ConversionFunction } = {
  ReferenceTime: (value) => new Date(value),
  RecordingTime: (value) => new Date(value),
  ReferenceLongitude: parseFloat,
  ReferenceLatitude: parseFloat,
  Disabled: (value) => value === 'true',
  FuelWeight: (value) => value.split(',').map(Number),
  Events: (value) => JSON.parse(value), // Assuming JSON string for arrays
}

export type GlobalProperties = {
  FileType?: string
  FileVersion?: string
  ReferenceTime?: Date
  RecordingTime?: Date
  DataSource?: string
  DataRecorder?: string
  Author?: string
  Title?: string
  Category?: string
  Briefing?: string
  Debriefing?: string
  Comments?: string
  ReferenceLongitude?: number
  ReferenceLatitude?: number
  Events?: GlobalEvent[]
}

export type Entity = {
  Coordinates?: Coordinates[]
  Name?: string
  Type?: string
  AdditionalType?: string
  Parent?: string
  Next?: string
  ShortName?: string
  LongName?: string
  FullName?: string
  CallSign?: string
  Registration?: string
  Squawk?: string
  ICAO24?: string
  Pilot?: string
  Group?: string
  Country?: string
  Coalition?: string
  Color?: 'Red' | 'Orange' | 'Yellow' | 'Green' | 'Cyan' | 'Blue' | 'Violet'
  Shape?: string
  Debug?: string
  Label?: string
  FocusedTarget?: string
  LockedTarget2?: string
  Importance?: number
  Slot?: number
  Disabled?: boolean
  Visible?: number
  Health?: number
  Length?: number
  Width?: number
  Height?: number
  Radius?: number
  IAS?: number
  CAS?: number
  TAS?: number
  Mach?: number
  AltimeterSetting?: number
  AOA?: number
  AOS?: number
  AGL?: number
  HDG?: number
  HDM?: number
  Throttle?: number
  EngineRPM?: number
  NR?: number
  RotorRPM?: number
  Afterburner?: number
  AirBrakes?: number
  Flaps?: number
  LandingGear?: number
  LandingGearHandle?: number
  Tailhook?: number
  Parachute?: number
  DragChute?: number
  FuelWeight?: number[]
  FuelVolume?: number[]
  FuelFlowWeight?: number[]
  FuelFlowVolume?: number[]
  RadarMode?: number
  RadarAzimuth?: number
  RadarElevation?: number
  RadarRoll?: number
  RadarRange?: number
  RadarHorizontalBeamwidth?: number
  RadarVerticalBeamwidth?: number
  RadarRangeGateAzimuth?: number
  RadarRangeGateElevation?: number
  RadarRangeGateRoll?: number
  RadarRangeGateMin?: number
  RadarRangeGateMax?: number
  RadarRangeGateHorizontalBeamwidth?: number
  RadarRangeGateVerticalBeamwidth?: number
  LockedTargetMode?: number
  LockedTargetAzimuth?: number
  LockedTargetElevation?: number
  LockedTargetRange?: number
  EngagementMode?: number[]
  EngagementRange?: number[]
  VerticalEngagementRange?: number[]
  RollControlInput?: number
  PitchControlInput?: number
  YawControlInput?: number
  RollControlPosition?: number
  PitchControlPosition?: number
  YawControlPosition?: number
  RollTrimTab?: number
  PitchTrimTab?: number
  YawTrimTab?: number
  AileronLeft?: number
  AileronRight?: number
  Elevator?: number
  Rudder?: number
  LocalizerLateralDeviation?: number
  GlideslopeVerticalDeviation?: number
  LocalizerAngularDeviation?: number
  GlideslopeAngularDeviation?: number
  PilotHeadRoll?: number
  PilotHeadPitch?: number
  PilotHeadYaw?: number
  PilotEyeGazePitch?: number
  PilotEyeGazeYaw?: number
  VerticalGForce?: number
  LongitudinalGForce?: number
  LateralGForce?: number
  QNH?: number
  WindDirection?: number
  WindPitch?: number
  WindSpeed?: number
  TriggerPressed?: boolean
  ENL?: number
  HeartRate?: number
  SpO2?: number
  Longitude: number
  Latitude: number
  Altitude?: number
  Roll?: number
  Pitch?: number
  Yaw?: number
  U?: number
  V?: number
  Heading?: number
}

// Basic 3D coordinates in a spherical world
export interface BasicCoordinates {
  timeFrame?: number
  longitude: number
  latitude: number
  altitude: number
}

// Extended coordinates for flat world scenarios with native x and y
export interface FlatWorldCoordinates extends BasicCoordinates {
  u: number // Native x-coordinate in meters
  v: number // Native y-coordinate in meters
}

// Detailed coordinates for complex objects in a spherical world
export interface ComplexCoordinates extends BasicCoordinates {
  roll: number
  pitch: number
  yaw: number
}

// Most detailed coordinates for complex objects in a flat world
export interface ComplexFlatWorldCoordinates extends ComplexCoordinates {
  u: number
  v: number
  heading: number
}

export interface Coordinates {
  timeFrame?: number
  longitude: number
  latitude: number
  altitude?: number
  roll?: number
  pitch?: number
  yaw?: number
  u?: number
  v?: number
  heading?: number
}
