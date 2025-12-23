import { Variants } from "framer-motion";

export const luxuryTransition = {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1] as const // Custom Bezier for luxury feel
};

export const quickTransition = {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1] as const
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2 // Delay between each child
        }
    }
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: luxuryTransition
    }
};

export const drawLine: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: 1.5, ease: "easeInOut" },
            opacity: { duration: 0.01 }
        }
    }
};

export const scrollSpringConfig = {
    stiffness: 40,
    damping: 20,
    mass: 1,
    restDelta: 0.001
};
