# PlantPal Smart Watering System

A Next.js web application that demonstrates a smart watering system concept with an interactive device visualization and mobile app interface.

## Overview

PlantPal is a conceptual smart watering system that helps users take better care of their plants by:

- Monitoring soil moisture levels in real-time
- Automatically watering plants when needed
- Providing insights and recommendations through a mobile app
- Sending alerts when attention is required

This project includes:

1. A landing page showcasing the product features and benefits
2. An interactive webapp demo that simulates both the physical device and mobile app
3. Animations that demonstrate how the system works

## Features

### Landing Page
- Modern, responsive design
- Product overview and key features
- How it works section
- Pricing information
- Call-to-action sections

### Interactive Demo
- Device visualization with animated components:
  - Soil moisture sensor
  - Water reservoir with dynamic water level
  - Pump animation
  - LED status indicator
  - Wireless connectivity visualization
  
- Mobile app interface simulation:
  - Real-time moisture monitoring
  - Watering controls
  - Alerts and notifications
  - Plant status dashboard
  - Watering history chart
  - Smart recommendations

## Technologies Used

- **Next.js**: React framework for building the web application
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling and responsive design
- **Framer Motion**: For animations and transitions
- **Chart.js**: For data visualization
- **React Icons**: For UI icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/smart-watering-system.git
cd smart-watering-system
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.
5. Navigate to [http://localhost:3000/webapp](http://localhost:3000/webapp) to see the interactive demo.

## Project Structure

```
smart-watering-system/
├── app/                  # Next.js app directory
│   ├── components/       # Reusable components
│   │   ├── AppInterface.tsx     # Mobile app interface component
│   │   ├── DeviceVisualization.tsx  # Device visualization component
│   │   └── Navbar.tsx    # Navigation component
│   ├── webapp/           # Interactive demo page
│   │   └── page.tsx      # Demo page component
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Landing page component
├── public/               # Static assets
│   └── images/           # SVG and image files
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## Usage

The interactive demo allows users to:

1. See the soil moisture level decrease over time
2. Trigger watering manually via the app interface or demo controls
3. Watch the water flow animation from reservoir to soil
4. See the moisture level increase after watering
5. Observe alerts when moisture levels get too low
6. View dynamic recommendations based on plant conditions

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- This project is a conceptual demonstration and not a real product
- Inspired by various smart gardening solutions and IoT devices
