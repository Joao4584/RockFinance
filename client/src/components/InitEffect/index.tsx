// * Modules * //
import { motion } from "framer-motion";
import { ReactElement } from "react";


// * Exports * //


// * Components * //

export function DivEffect(props: { children: ReactElement, whileTap?: any }) {

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
                type: "spring",
                stiffness: 80,
                damping: 20
            }}
            whileTap={props.whileTap}
        >

            {props.children}
        </motion.div>
    )
}