import type AnimatedCTAStyles from './cta.animated.opti-style.json'
import type DefaultCTAStyles from './cta.default.opti-style.json'
import type { LayoutProps } from "@remkoj/optimizely-cms-react/components"
import type { ReactNode } from 'react'

export type DefaultCTALayoutProps = LayoutProps<typeof DefaultCTAStyles>
export type AnimatedCTALayoutProps = LayoutProps<typeof AnimatedCTAStyles>
export type CTALayoutProps = DefaultCTALayoutProps | AnimatedCTALayoutProps

export type CTAComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends CTALayoutProps = CTALayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type CTAComponent<DT extends Record<string, any> = Record<string, any>, LP extends CTALayoutProps = CTALayoutProps> = (props: CTAComponentProps<DT,LP>) => ReactNode