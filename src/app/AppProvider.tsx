'use client'
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext({
  sessionToken: '',
  setSessionToken: (sessionToken: string) => {}
})

export const AppProvider = ({
  children,
  initialSessionToken = ''
}: {
  children: React.ReactNode
  initialSessionToken?: string
}) => {
  const [sessionToken, setSessionToken] = useState<string>(initialSessionToken)

  return <AppContext.Provider value={{ sessionToken, setSessionToken }}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }

  return context
}
