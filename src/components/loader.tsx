import { motion, AnimatePresence } from "framer-motion";

export default function loader({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
        { isLoading && (
            <motion.div 
                className="absolute flex items-center justify-center inset-0 bg-black/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.5
                }}
            >
                <motion.div 
                    className="aspect-square w-4 rounded bg-white" 
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: 'linear'
                    }}
                    animate={{
                        x: [-50, 0, 50, 0, -50],
                        scale: [1, 1.5, 1, 0.5, 1],
                    }}
                />

            </motion.div>
        )}
    </AnimatePresence>
  )
}
