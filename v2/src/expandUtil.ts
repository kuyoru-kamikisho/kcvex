export function upperFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export interface HTMLExpandElement extends HTMLElement {
    _parent?: (Node & ParentNode & HTMLElement) | null
    _initialStyle?: {
        transition: string
        overflow: string
        height?: string | null
        width?: string | null
    }
}