import EmotionRegistry from '@/theme/EmotionRegistry'
import { ReactNode } from 'react'

export default function EmotionProviderLayout({ children }: { children: ReactNode }) {
  return <EmotionRegistry>{children}</EmotionRegistry>
}