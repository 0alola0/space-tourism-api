export type TDestination = {
    name: string,
    description: string,
    distance: string,
    images: {
        png: string,
        webp: string
    },
    travel: string
}
export type TCrew = {
    name: string,
    images: {
        png: string,
        webp: string
    },
    role: string,
    bio: string     
}
export type TTechnology = {
    name: string,
    images: {
        portrait: string,
        landscape: string
    },
    description: string
}
export type TLanding = {
    header: string,
    name: string,
    description: string
}