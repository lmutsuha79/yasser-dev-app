export  const heroVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
export const jijivariant = {
  hidden: {
    opacity: 0,
    translateY: 100,
  },
  show: {
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
export const itemVariant = {
  hidden: { opacity: 0, top: 100 },
  show: { opacity: 1, top: 0 },
};
