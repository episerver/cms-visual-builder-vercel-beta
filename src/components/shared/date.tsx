'use client'

import { useLayoutEffect, useState, type FunctionComponent } from "react";

export type DateDisplayProps = {
    value?: string
} & Omit<JSX.IntrinsicElements['span'], 'children'>

export const DateDisplay : FunctionComponent<DateDisplayProps> = ({ value, ...props }) => {
    const [ dateDisplayValue, setDateDisplayValue ] = useState<string | undefined>(undefined)
    useLayoutEffect(() => { 
        if (!value) return
        try {
            const parsed = new Date(Date.parse(value))
            setDateDisplayValue(parsed.toLocaleDateString())
        } catch {
            // Do nothing
        }
    }, [ value ])
    return <span { ...props }>{ dateDisplayValue ?? '' }</span>
}

export default DateDisplay