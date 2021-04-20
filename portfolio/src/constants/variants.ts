import { Variants } from "framer-motion";

export const preloader_container: Variants = {
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

export const preloader_splashBox: Variants = {
  initial: {
    height: "100vh",
    // bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      //   when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const fade_in_out: Variants = {
  initial: { opacity: 0 },
  exit: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 1 } },
};
