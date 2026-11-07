/**
 * DLEX DESIGN SYSTEM - JAVASCRIPT TOKENS DATA
 * Used for dynamic rendering, copying, searching, and exporting.
 */

export const DLEX_COLOR_SYSTEM = [
  {
    category: "Grayscale",
    slug: "gray",
    description: "Neutral tones for backgrounds, surfaces, borders, and typography hierarchy.",
    swatches: [
      { shade: "900", hex: "#121127", varName: "--dlex-gray-900", textDark: false },
      { shade: "800", hex: "#201f37", varName: "--dlex-gray-800", textDark: false },
      { shade: "700", hex: "#383751", varName: "--dlex-gray-700", textDark: false },
      { shade: "600", hex: "#4c4b63", varName: "--dlex-gray-600", textDark: false },
      { shade: "500", hex: "#6c6b80", varName: "--dlex-gray-500", textDark: false },
      { shade: "400", hex: "#9d9caf", varName: "--dlex-gray-400", textDark: true },
      { shade: "300", hex: "#d1d1db", varName: "--dlex-gray-300", textDark: true },
      { shade: "200", hex: "#e5e5eb", varName: "--dlex-gray-200", textDark: true },
      { shade: "100", hex: "#f3f3f6", varName: "--dlex-gray-100", textDark: true },
      { shade: "50",  hex: "#f9f9fb", varName: "--dlex-gray-50",  textDark: true }
    ]
  },
  {
    category: "Indigo",
    slug: "indigo",
    description: "Primary brand accent for key interactive elements, buttons, and active states.",
    swatches: [
      { shade: "900", hex: "#1e149d", varName: "--dlex-indigo-900", textDark: false },
      { shade: "800", hex: "#2d2cb0", varName: "--dlex-indigo-800", textDark: false },
      { shade: "700", hex: "#3638bc", varName: "--dlex-indigo-700", textDark: false },
      { shade: "600", hex: "#3f43c8", varName: "--dlex-indigo-600", textDark: false },
      { shade: "500", hex: "#444bd3", varName: "--dlex-indigo-500", textDark: false },
      { shade: "400", hex: "#6068db", varName: "--dlex-indigo-400", textDark: false },
      { shade: "300", hex: "#878de8", varName: "--dlex-indigo-300", textDark: true },
      { shade: "200", hex: "#b4b7f0", varName: "--dlex-indigo-200", textDark: true },
      { shade: "100", hex: "#dee0fa", varName: "--dlex-indigo-100", textDark: true },
      { shade: "50",  hex: "#f2f3ff", varName: "--dlex-indigo-50",  textDark: true }
    ]
  },
  {
    category: "Purple",
    slug: "purple",
    description: "Creative and secondary brand tokens for badges, gradients, and tags.",
    swatches: [
      { shade: "900", hex: "#4c1d95", varName: "--dlex-purple-900", textDark: false },
      { shade: "800", hex: "#5b21b6", varName: "--dlex-purple-800", textDark: false },
      { shade: "700", hex: "#6d28d9", varName: "--dlex-purple-700", textDark: false },
      { shade: "600", hex: "#7c3aed", varName: "--dlex-purple-600", textDark: false },
      { shade: "500", hex: "#8b5cf6", varName: "--dlex-purple-500", textDark: false },
      { shade: "400", hex: "#a78bfa", varName: "--dlex-purple-400", textDark: false },
      { shade: "300", hex: "#c4b5fd", varName: "--dlex-purple-300", textDark: true },
      { shade: "200", hex: "#ddd6fe", varName: "--dlex-purple-200", textDark: true },
      { shade: "100", hex: "#ede9fe", varName: "--dlex-purple-100", textDark: true },
      { shade: "50",  hex: "#f5f3ff", varName: "--dlex-purple-50",  textDark: true }
    ]
  },
  {
    category: "Blue",
    slug: "blue",
    description: "Informational states, links, tech indicators, and sky accents.",
    swatches: [
      { shade: "900", hex: "#3e399b", varName: "--dlex-blue-900", textDark: false },
      { shade: "800", hex: "#4559bd", varName: "--dlex-blue-800", textDark: false },
      { shade: "700", hex: "#496ad0", varName: "--dlex-blue-700", textDark: false },
      { shade: "600", hex: "#4c7ce5", varName: "--dlex-blue-600", textDark: false },
      { shade: "500", hex: "#4e8af4", varName: "--dlex-blue-500", textDark: false },
      { shade: "400", hex: "#599bf9", varName: "--dlex-blue-400", textDark: false },
      { shade: "300", hex: "#6eadfc", varName: "--dlex-blue-300", textDark: true },
      { shade: "200", hex: "#94c5ff", varName: "--dlex-blue-200", textDark: true },
      { shade: "100", hex: "#bde3ff", varName: "--dlex-blue-100", textDark: true },
      { shade: "50",  hex: "#e1f5ff", varName: "--dlex-blue-50",  textDark: true }
    ]
  },
  {
    category: "Yellow",
    slug: "yellow",
    description: "Warning notices, energy highlights, star ratings, and vibrant accents.",
    swatches: [
      { shade: "900", hex: "#f25722", varName: "--dlex-yellow-900", textDark: false },
      { shade: "800", hex: "#fc7125", varName: "--dlex-yellow-800", textDark: false },
      { shade: "700", hex: "#ff8127", varName: "--dlex-yellow-700", textDark: false },
      { shade: "600", hex: "#ff9129", varName: "--dlex-yellow-600", textDark: false },
      { shade: "500", hex: "#ff9e2a", varName: "--dlex-yellow-500", textDark: false },
      { shade: "400", hex: "#ffac3d", varName: "--dlex-yellow-400", textDark: true },
      { shade: "300", hex: "#ffbc5d", varName: "--dlex-yellow-300", textDark: true },
      { shade: "200", hex: "#ffd89f", varName: "--dlex-yellow-200", textDark: true },
      { shade: "100", hex: "#ffe7c7", varName: "--dlex-yellow-100", textDark: true },
      { shade: "50",  hex: "#fff4e6", varName: "--dlex-yellow-50",  textDark: true }
    ]
  },
  {
    category: "Green",
    slug: "green",
    description: "Success states, positive confirmations, badges, and growth indicators.",
    swatches: [
      { shade: "900", hex: "#064e3b", varName: "--dlex-green-900", textDark: false },
      { shade: "800", hex: "#065f46", varName: "--dlex-green-800", textDark: false },
      { shade: "700", hex: "#047857", varName: "--dlex-green-700", textDark: false },
      { shade: "600", hex: "#059669", varName: "--dlex-green-600", textDark: false },
      { shade: "500", hex: "#10b981", varName: "--dlex-green-500", textDark: false },
      { shade: "400", hex: "#34d399", varName: "--dlex-green-400", textDark: true },
      { shade: "300", hex: "#6ee7b7", varName: "--dlex-green-300", textDark: true },
      { shade: "200", hex: "#a7f3d0", varName: "--dlex-green-200", textDark: true },
      { shade: "100", hex: "#d1fae5", varName: "--dlex-green-100", textDark: true },
      { shade: "50",  hex: "#ecfdf5", varName: "--dlex-green-50",  textDark: true }
    ]
  },
  {
    category: "Cyan",
    slug: "cyan",
    description: "Fresh teal and aquatic tones for metrics, charts, and modern marketing surfaces.",
    swatches: [
      { shade: "900", hex: "#2a7576", varName: "--dlex-cyan-900", textDark: false },
      { shade: "800", hex: "#339aa2", varName: "--dlex-cyan-800", textDark: false },
      { shade: "700", hex: "#38aeba", varName: "--dlex-cyan-700", textDark: false },
      { shade: "600", hex: "#3ec4d5", varName: "--dlex-cyan-600", textDark: false },
      { shade: "500", hex: "#43d6e8", varName: "--dlex-cyan-500", textDark: true },
      { shade: "400", hex: "#4edceb", varName: "--dlex-cyan-400", textDark: true },
      { shade: "300", hex: "#67e4ef", varName: "--dlex-cyan-300", textDark: true },
      { shade: "200", hex: "#90ecf4", varName: "--dlex-cyan-200", textDark: true },
      { shade: "100", hex: "#bbf3f7", varName: "--dlex-cyan-100", textDark: true },
      { shade: "50",  hex: "#e4fafc", varName: "--dlex-cyan-50",  textDark: true }
    ]
  },
  {
    category: "Red",
    slug: "red",
    description: "Destructive actions, error alerts, required field indicators, and urgent badges.",
    swatches: [
      { shade: "900", hex: "#7f1d1d", varName: "--dlex-red-900", textDark: false },
      { shade: "800", hex: "#991b1b", varName: "--dlex-red-800", textDark: false },
      { shade: "700", hex: "#b91c1c", varName: "--dlex-red-700", textDark: false },
      { shade: "600", hex: "#dc2626", varName: "--dlex-red-600", textDark: false },
      { shade: "500", hex: "#ef4444", varName: "--dlex-red-500", textDark: false },
      { shade: "400", hex: "#f87171", varName: "--dlex-red-400", textDark: true },
      { shade: "300", hex: "#fca5a5", varName: "--dlex-red-300", textDark: true },
      { shade: "200", hex: "#fecaca", varName: "--dlex-red-200", textDark: true },
      { shade: "100", hex: "#fee2e2", varName: "--dlex-red-100", textDark: true },
      { shade: "50",  hex: "#fef2f2", varName: "--dlex-red-50",  textDark: true }
    ]
  },
  {
    category: "Pink",
    slug: "pink",
    description: "Vibrant social, lifestyle, and celebratory marketing highlights.",
    swatches: [
      { shade: "900", hex: "#831843", varName: "--dlex-pink-900", textDark: false },
      { shade: "800", hex: "#9d174d", varName: "--dlex-pink-800", textDark: false },
      { shade: "700", hex: "#be185d", varName: "--dlex-pink-700", textDark: false },
      { shade: "600", hex: "#db2777", varName: "--dlex-pink-600", textDark: false },
      { shade: "500", hex: "#ec4899", varName: "--dlex-pink-500", textDark: false },
      { shade: "400", hex: "#f472b6", varName: "--dlex-pink-400", textDark: true },
      { shade: "300", hex: "#f9a8d4", varName: "--dlex-pink-300", textDark: true },
      { shade: "200", hex: "#fbcfe8", varName: "--dlex-pink-200", textDark: true },
      { shade: "100", hex: "#fce7f3", varName: "--dlex-pink-100", textDark: true },
      { shade: "50",  hex: "#fdf2f8", varName: "--dlex-pink-50",  textDark: true }
    ]
  },
  {
    category: "No Color",
    slug: "nocolor",
    description: "Pure monochrome endpoints.",
    swatches: [
      { shade: "Black", hex: "#000000", varName: "--dlex-black", textDark: false },
      { shade: "White", hex: "#ffffff", varName: "--dlex-white", textDark: true, border: true }
    ]
  },
  {
    category: "White-Opacity",
    slug: "white-opacity",
    isDarkContainer: true,
    description: "Light glassmorphism and subtle elevation on deep night backgrounds.",
    swatches: [
      { shade: "90%", value: "rgba(255, 255, 255, 0.90)", hex: "#ffffff", op: 0.9, varName: "--dlex-white-op-90", textDark: true },
      { shade: "80%", value: "rgba(255, 255, 255, 0.80)", hex: "#ffffff", op: 0.8, varName: "--dlex-white-op-80", textDark: true },
      { shade: "70%", value: "rgba(255, 255, 255, 0.70)", hex: "#ffffff", op: 0.7, varName: "--dlex-white-op-70", textDark: true },
      { shade: "60%", value: "rgba(255, 255, 255, 0.60)", hex: "#ffffff", op: 0.6, varName: "--dlex-white-op-60", textDark: false },
      { shade: "50%", value: "rgba(255, 255, 255, 0.50)", hex: "#ffffff", op: 0.5, varName: "--dlex-white-op-50", textDark: false },
      { shade: "40%", value: "rgba(255, 255, 255, 0.40)", hex: "#ffffff", op: 0.4, varName: "--dlex-white-op-40", textDark: false },
      { shade: "30%", value: "rgba(255, 255, 255, 0.30)", hex: "#ffffff", op: 0.3, varName: "--dlex-white-op-30", textDark: false },
      { shade: "20%", value: "rgba(255, 255, 255, 0.20)", hex: "#ffffff", op: 0.2, varName: "--dlex-white-op-20", textDark: false },
      { shade: "10%", value: "rgba(255, 255, 255, 0.10)", hex: "#ffffff", op: 0.1, varName: "--dlex-white-op-10", textDark: false },
      { shade: "5%",  value: "rgba(255, 255, 255, 0.05)", hex: "#ffffff", op: 0.05, varName: "--dlex-white-op-5", textDark: false }
    ]
  },
  {
    category: "Gray Opacity",
    slug: "gray-opacity",
    description: "Neutral shading overlays and backdrop filters on daylight canvases.",
    swatches: [
      { shade: "90%", value: "rgba(18, 17, 39, 0.90)", hex: "#121127", op: 0.9, varName: "--dlex-gray-op-90", textDark: false },
      { shade: "80%", value: "rgba(18, 17, 39, 0.80)", hex: "#121127", op: 0.8, varName: "--dlex-gray-op-80", textDark: false },
      { shade: "70%", value: "rgba(18, 17, 39, 0.70)", hex: "#121127", op: 0.7, varName: "--dlex-gray-op-70", textDark: false },
      { shade: "60%", value: "rgba(18, 17, 39, 0.60)", hex: "#121127", op: 0.6, varName: "--dlex-gray-op-60", textDark: false },
      { shade: "50%", value: "rgba(18, 17, 39, 0.50)", hex: "#121127", op: 0.5, varName: "--dlex-gray-op-50", textDark: false },
      { shade: "40%", value: "rgba(18, 17, 39, 0.40)", hex: "#121127", op: 0.4, varName: "--dlex-gray-op-40", textDark: true },
      { shade: "30%", value: "rgba(18, 17, 39, 0.30)", hex: "#121127", op: 0.3, varName: "--dlex-gray-op-30", textDark: true },
      { shade: "20%", value: "rgba(18, 17, 39, 0.20)", hex: "#121127", op: 0.2, varName: "--dlex-gray-op-20", textDark: true },
      { shade: "10%", value: "rgba(18, 17, 39, 0.10)", hex: "#121127", op: 0.1, varName: "--dlex-gray-op-10", textDark: true },
      { shade: "5%",  value: "rgba(18, 17, 39, 0.05)", hex: "#121127", op: 0.05, varName: "--dlex-gray-op-5", textDark: true }
    ]
  }
];

export const DLEX_TYPOGRAPHY_SYSTEM = [
  {
    token: "Display 1",
    tag: "h1",
    fontSize: "64px",
    lineHeight: "72px",
    weight: "800 (ExtraBold)",
    weightNum: 800,
    tracking: "-0.02em",
    varName: "--dlex-fs-display-1",
    sample: "Design is intelligence made visible."
  },
  {
    token: "Display 2",
    tag: "h2",
    fontSize: "48px",
    lineHeight: "56px",
    weight: "800 (ExtraBold)",
    weightNum: 800,
    tracking: "-0.015em",
    varName: "--dlex-fs-display-2",
    sample: "Design is intelligence made visible."
  },
  {
    token: "H1",
    tag: "h1",
    fontSize: "40px",
    lineHeight: "48px",
    weight: "700 (Bold)",
    weightNum: 700,
    tracking: "-0.01em",
    varName: "--dlex-fs-h1",
    sample: "Design is intelligence made visible."
  },
  {
    token: "H2",
    tag: "h2",
    fontSize: "32px",
    lineHeight: "40px",
    weight: "700 (Bold)",
    weightNum: 700,
    tracking: "-0.01em",
    varName: "--dlex-fs-h2",
    sample: "Design is intelligence made visible."
  },
  {
    token: "H3",
    tag: "h3",
    fontSize: "24px",
    lineHeight: "32px",
    weight: "700 (Bold)",
    weightNum: 700,
    tracking: "0",
    varName: "--dlex-fs-h3",
    sample: "Design is intelligence made visible."
  },
  {
    token: "H4",
    tag: "h4",
    fontSize: "20px",
    lineHeight: "28px",
    weight: "600 (SemiBold)",
    weightNum: 600,
    tracking: "0",
    varName: "--dlex-fs-h4",
    sample: "Design is intelligence made visible."
  },
  {
    token: "H5",
    tag: "h5",
    fontSize: "16px",
    lineHeight: "24px",
    weight: "600 (SemiBold)",
    weightNum: 600,
    tracking: "0",
    varName: "--dlex-fs-h5",
    sample: "Design is intelligence made visible."
  },
  {
    token: "H6",
    tag: "h6",
    fontSize: "14px",
    lineHeight: "20px",
    weight: "600 (SemiBold)",
    weightNum: 600,
    tracking: "0",
    varName: "--dlex-fs-h6",
    sample: "Design is intelligence made visible."
  },
  {
    token: "Body - 20",
    tag: "p",
    fontSize: "20px",
    lineHeight: "30px",
    weight: "400 (Regular)",
    weightNum: 400,
    tracking: "0",
    varName: "--dlex-fs-body-20",
    sample: "Accelerate growth and unlock modern scale globally with fast, powerful APIs and software solutions designed to help you capture more revenues."
  },
  {
    token: "Body - 18",
    tag: "p",
    fontSize: "18px",
    lineHeight: "28px",
    weight: "400 (Regular)",
    weightNum: 400,
    tracking: "0",
    varName: "--dlex-fs-body-18",
    sample: "Accelerate growth and unlock modern scale globally with fast, powerful APIs and software solutions designed to help you capture more revenues."
  },
  {
    token: "Body - 16",
    tag: "p",
    fontSize: "16px",
    lineHeight: "24px",
    weight: "400 (Regular)",
    weightNum: 400,
    tracking: "0",
    varName: "--dlex-fs-body-16",
    sample: "Accelerate growth and unlock modern scale globally with fast, powerful APIs and software solutions designed to help you capture more revenues."
  },
  {
    token: "Body - 14",
    tag: "p",
    fontSize: "14px",
    lineHeight: "20px",
    weight: "400 (Regular)",
    weightNum: 400,
    tracking: "0",
    varName: "--dlex-fs-body-14",
    sample: "Accelerate growth and unlock modern scale globally with fast, powerful APIs and software solutions designed to help you capture more revenues."
  },
  {
    token: "Body - 12",
    tag: "p",
    fontSize: "12px",
    lineHeight: "18px",
    weight: "400 (Regular)",
    weightNum: 400,
    tracking: "0",
    varName: "--dlex-fs-body-12",
    sample: "Accelerate growth and unlock modern scale globally with fast, powerful APIs and software solutions designed to help you capture more revenues."
  },
  {
    token: "Caption / Small",
    tag: "span",
    fontSize: "12px",
    lineHeight: "16px",
    weight: "500 (Medium)",
    weightNum: 500,
    tracking: "0.01em",
    varName: "--dlex-fs-caption",
    sample: "Accept payments from anyone easily."
  },
  {
    token: "Button - L",
    tag: "button",
    fontSize: "16px",
    lineHeight: "24px",
    weight: "600 (SemiBold)",
    weightNum: 600,
    tracking: "0",
    varName: "--dlex-fs-btn-l",
    sample: "Accept payments"
  },
  {
    token: "Button - M",
    tag: "button",
    fontSize: "14px",
    lineHeight: "20px",
    weight: "600 (SemiBold)",
    weightNum: 600,
    tracking: "0",
    varName: "--dlex-fs-btn-m",
    sample: "Accept payments"
  },
  {
    token: "Link / Underline",
    tag: "a",
    fontSize: "14px",
    lineHeight: "20px",
    weight: "500 (Medium)",
    weightNum: 500,
    tracking: "0",
    color: "#444bd3",
    varName: "--dlex-indigo-500",
    sample: "Learn more →"
  }
];
