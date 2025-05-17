'use client'

import { CacheProvider } from '@emotion/react'
import createEmotionCache from './createEmotionCache'
import { ReactNode, useRef } from 'react'

export default function EmotionRegistry({ children }: { children: ReactNode }) {
  const cache = useRef(createEmotionCache())

  return <CacheProvider value={cache.current}>{children}</CacheProvider>
}