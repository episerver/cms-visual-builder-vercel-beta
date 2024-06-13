import type IconImageStyles from './image.icon.opti-style.json'
import type DefaultImageStyles from './image.default.opti-style.json'
import type { LayoutProps } from "@remkoj/optimizely-cms-react/components"
import type { DOMAttributes, ReactNode } from 'react'
import type { MotionProps } from "framer-motion"

export type DefaultImageLayoutProps = LayoutProps<typeof DefaultImageStyles>
export type IconImageLayoutProps = LayoutProps<typeof IconImageStyles>
export type ImageLayoutProps = DefaultImageLayoutProps | IconImageLayoutProps

export type ImageComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends ImageLayoutProps = ImageLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & Omit<JSX.IntrinsicElements['div'], keyof DOMAttributes<"div">>

export type ImageComponent<DT extends Record<string, any> = Record<string, any>, LP extends ImageLayoutProps = ImageLayoutProps> = (props: ImageComponentProps<DT,LP>) => ReactNode