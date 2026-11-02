export const AIRPODS_MODELS = [
  {
    id: 'airpods-4',
    name: 'AirPods 4',
    tagline: 'Iconic. Now supersonic.',
    price: 129,
    priceWithAnc: 179,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
    description: 'Redesigned for exceptional all-day comfort and greater stability. Powered by the H2 chip.',
    features: ['H2 Headphone Chip', 'Voice Isolation', 'Personalized Spatial Audio', 'USB-C Charging Case', 'IP54 Dust, sweat, and water resistance'],
    battery: 'Up to 30 hours total listening time with case',
    chip: 'Apple H2 chip',
    activeNoiseCancellation: 'Available on select model',
    colors: ['#ffffff'],
    badge: 'New Design'
  },
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro 2',
    tagline: 'A marvel of modern silence.',
    price: 249,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    description: 'Up to 2x more Active Noise Cancellation, Transparency mode, Adaptive Audio, and Hearing Health features.',
    features: ['Up to 2x More ANC', 'Adaptive Audio & Transparency', 'Personalized Spatial Audio', 'MagSafe Case (USB-C) with Speaker & Lanyard Loop', 'Clinical-grade Hearing Aid feature'],
    battery: 'Up to 6 hours on a single charge (up to 30h with case)',
    chip: 'Apple H2 chip + U1 chip in case',
    activeNoiseCancellation: 'Up to 2x more ANC with Transparency mode',
    colors: ['#ffffff'],
    badge: 'Most Popular'
  },
  {
    id: 'airpods-max',
    name: 'AirPods Max',
    tagline: 'The ultimate over-ear acoustic experience.',
    price: 549,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    description: 'High-fidelity audio, Active Noise Cancellation with Transparency mode, and now with USB-C charging.',
    features: ['Apple-designed dynamic driver', 'Industry-leading Active Noise Cancellation', 'Transparency mode', 'Spatial Audio with dynamic head tracking', 'Breathable knit mesh canopy and memory foam ear cushions'],
    battery: 'Up to 20 hours of listening time with ANC enabled',
    chip: 'Apple H1 chip (each earcup)',
    activeNoiseCancellation: 'Pro-level Active Noise Cancellation',
    colors: ['#3b3d40', '#e3e4e6', '#224259', '#e8b8c1', '#7b95a8'],
    colorNames: ['Space Gray', 'Starlight', 'Blue', 'Purple', 'Orange'],
    badge: 'Over-Ear Masterpiece'
  }
];

export const COMPARISON_FEATURES = [
  {
    category: 'Audio Technology',
    items: [
      { name: 'Active Noise Cancellation', 'airpods-4': 'Optional', 'airpods-pro-2': 'Up to 2x more', 'airpods-max': 'Pro-level ANC' },
      { name: 'Adaptive Audio', 'airpods-4': 'No', 'airpods-pro-2': 'Yes', 'airpods-max': 'No' },
      { name: 'Transparency Mode', 'airpods-4': 'No', 'airpods-pro-2': 'Yes', 'airpods-max': 'Yes' },
      { name: 'Spatial Audio with Head Tracking', 'airpods-4': 'Yes', 'airpods-pro-2': 'Yes', 'airpods-max': 'Yes' },
      { name: 'Adaptive EQ', 'airpods-4': 'Yes', 'airpods-pro-2': 'Yes', 'airpods-max': 'Yes' }
    ]
  },
  {
    category: 'Charging & Battery',
    items: [
      { name: 'Listening Time (Single Charge)', 'airpods-4': 'Up to 5 hours', 'airpods-pro-2': 'Up to 6 hours', 'airpods-max': 'Up to 20 hours' },
      { name: 'Total Listening Time (With Case)', 'airpods-4': 'Up to 30 hours', 'airpods-pro-2': 'Up to 30 hours', 'airpods-max': 'Smart Case included' },
      { name: 'Charging Connector', 'airpods-4': 'USB-C', 'airpods-pro-2': 'USB-C / MagSafe', 'airpods-max': 'USB-C' },
      { name: 'Wireless Charging', 'airpods-4': 'Case with ANC model', 'airpods-pro-2': 'MagSafe & Apple Watch charger', 'airpods-max': 'No' }
    ]
  },
  {
    category: 'Sensors & Controls',
    items: [
      { name: 'Main Chip', 'airpods-4': 'H2 chip', 'airpods-pro-2': 'H2 chip', 'airpods-max': 'H1 chip (both cups)' },
      { name: 'Touch / Force Control', 'airpods-4': 'Force sensor', 'airpods-pro-2': 'Touch control (Swipe volume)', 'airpods-max': 'Digital Crown' },
      { name: 'Skin-detect Sensor', 'airpods-4': 'Yes', 'airpods-pro-2': 'Yes', 'airpods-max': 'Optical & position sensors' }
    ]
  }
];

export const EMOJI_LIST = ['✨', '🚀', '🎧', '🎸', '⚡️', '🔥', '👑', '💎', '🍀', '🎯', '🐱', '🐶', '⭐', '❤️', '🌊', '🍏'];
