import { Variants } from "framer-motion";

export const variantsPreloaderContainer: Variants = {
  initial: {
    zIndex: 10,
    opacity: 1,
  },
  animate: {
    zIndex: -1,
    opacity: 0,
    transition: {
      when: "afterChildren",
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const variantesPreloaderSplashBox: Variants = {
  initial: {
    height: "100vh",
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
      delay: 3.5,
    },
  },
};
export const variantsLogoMainFadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.7,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const variantsLogoMainSlideOut: Variants = {
  initial: {
    opacity: 1,
    x: "9rem",
  },
  animate: {
    opacity: 0,
    x: "2.5rem",
    transition: {
      when: "afterChildren",
      delay: 0.5,
      duration: 1.0,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const variantsLogoSecondarySlideIn: Variants = {
  initial: {
    x: "-11.5rem",
  },
  animate: {
    x: "-2.5rem",
    transition: { duration: 1.0, delay: 1.5 },
  },
};

export const variantsLogoSecondary: Variants = {
  initial: {
    opacity: 1,
    y: 0,
  },
  animate: {
    opacity: 0,
    y: "calc(-50vh + 4rem)",
    transition: {
      delay: 0.5,
      delayChildren: 1.55,
      staggerChildren: 0.04,
      staggerDirection: -1,
      duration: 1.5,
      when: "afterChildren",
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const variantsLogoSecondaryPath: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const fade_in_out: Variants = {
  // initial: { opacity: 0 },
  exit: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 1 } },
};

export const variantsPage: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

export const variantsPageSection: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};
export const variantsDetailsFadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};
