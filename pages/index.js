// This file ensures there's a fallback root index.html file
// if the app directory export doesn't create one

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RootIndexFallback() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/app');
  }, [router]);
  
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      flexDirection: 'column' 
    }}>
      <h1>PlantPal Smart Watering System</h1>
      <p>Redirecting to the application...</p>
    </div>
  );
} 