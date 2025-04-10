/**
 * This file ensures proper static export handling
 */
export default function routes() {
  return [
    {
      source: '/',
      destination: '/index.html',
    },
    {
      source: '/webapp',
      destination: '/webapp/index.html',
    },
    {
      source: '/poster',
      destination: '/poster/index.html',
    },
  ];
} 