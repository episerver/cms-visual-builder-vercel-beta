import type AnimatedHeadingStyles from './animated_heading_styles.opti-style.json'
import type DefaultHeadingStyles from './heading_styles.opti-style.json'
import type { LayoutProps } from "@remkoj/optimizely-cms-react/components"
import type { ReactNode } from 'react'

export type DefaultHeadingLayoutProps = LayoutProps<typeof DefaultHeadingStyles>
export type AnimatedHeadingLayoutProps = LayoutProps<typeof AnimatedHeadingStyles>
export type HeadingLayoutProps = DefaultHeadingLayoutProps | AnimatedHeadingLayoutProps

export type HeadingComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends HeadingLayoutProps = HeadingLayoutProps> = {
    data: DT
    layoutProps: LP
} & JSX.IntrinsicElements['div']

export type HeadingComponent<DT extends Record<string, any> = Record<string, any>, LP extends HeadingLayoutProps = HeadingLayoutProps> = (props: HeadingComponentProps<DT,LP>) => ReactNode