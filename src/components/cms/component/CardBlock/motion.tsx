'use client'
import { motion } from "framer-motion"
import { type FunctionComponent, type PropsWithChildren } from "react"

export type AnimatedImageProps = PropsWithChildren<{
    imageLayout: string | null
}>

export const AnimatedImage : FunctionComponent<AnimatedImageProps> = ({ imageLayout, children }) => {
    return <motion.div
            className={`@[80rem]/card:col-span-6 ${
              imageLayout === "after"
                ? "order-first lg:order-last @[80rem]/card:col-start-7"
                : "order-first"
            }`}
          >{ children }</motion.div>
}

export default AnimatedImage