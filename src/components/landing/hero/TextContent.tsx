import navbarStyles from "@/styles/navbar.module.css";
import { medium, montserrat } from "@/ui/fonts";
import defaultStyles from "@/styles/default.module.css";
import heroStyles from "@/styles/hero.module.css";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const TextContent = ({
  loading,
  textControls,
}: {
  loading: boolean;
  textControls: AnimationControls;
}) => {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <motion.p
          className={[
            defaultStyles.textLarge,
            montserrat.className,
            heroStyles.firstText,
            navbarStyles.containerSpace,
          ].join(" ")}
          initial={{ y: 100 }}
          animate={textControls}
          transition={{ duration: 2, ease: "anticipate", delay: 0.1 }}
        >
          I&apos;m a Full Stack Web Developer based in India. <br />
          Exploring my journey through tech endeavors.
        </motion.p>
      </div>
      <div
        className={[
          defaultStyles.containerSpace,
          heroStyles.secondarySection,
        ].join(" ")}
      >
        <div style={{ overflow: "hidden" }}>
          <motion.img
            className={heroStyles.nameText}
            src={"/assets/img/others/fullname.png"}
            width={0}
            height={0}
            sizes="100vw"
            alt="Rakshankrishnan"
            initial={{ y: 100 }}
            animate={textControls}
            transition={{ duration: 2, ease: "anticipate", delay: 0.1 }}
          />
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h3
            className={[
              medium.className,
              defaultStyles.headingStandard,
              defaultStyles.textPrimary,
              defaultStyles.letterSpacingDefault,
              heroStyles.textSpacing,
            ].join(" ")}
            initial={{ y: 100 }}
            animate={textControls}
            transition={{ duration: 2, ease: "anticipate", delay: 0.1 }}
          >
            Web developer
          </motion.h3>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.p
            className={[
              montserrat.className,
              defaultStyles.headingStandard,
              defaultStyles.textLarge,
              defaultStyles.textWhite,
            ].join(" ")}
            initial={{ y: 100 }}
            animate={textControls}
            transition={{ duration: 2, ease: "anticipate", delay: 0.1 }}
          >
            Since 2022
          </motion.p>
        </div>
      </div>
    </>
  );
};