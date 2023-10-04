export const UL_VARIANT = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            stiffness: 80,
            type: "spring",
            delayChildren: 0.1,
            staggerChildren: 0.2,
        }
    }
}

export const LI_VARIANT = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}