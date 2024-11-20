'use client'
import React from 'react'
import {NextUIProvider} from '@nextui-org/react'
import {store} from '@/store/store'
import { Provider } from 'react-redux'
const Providers = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Provider store={store}>
        <NextUIProvider>{children}</NextUIProvider>
    
    </Provider>
        
  )
}

export default Providers