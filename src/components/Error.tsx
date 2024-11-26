import { ReactNode } from "react"

type ErrorProps = {
    children: ReactNode
}

export default function Error({ children }: ErrorProps) {
    return (
        <p className="text-center bg-red-600 text-white font-bold p-3 uppercase text-sm">{children}</p>
    )
}