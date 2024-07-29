"use client"

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

const SettingsPage = () => {

  const onClick = () => {
    signOut();
  }

  
  return (
    <div>
      <Button onClick={onClick}>
        Sign Out
      </Button>
    </div>
  )
}

export default SettingsPage