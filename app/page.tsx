// Remove 'use client' directive to make this a Server Component for proper static generation
import HomePage from '../components/HomePage';

// Static export configuration
export const dynamic = 'force-static';

export default function Home() {
  return <HomePage />;
}
