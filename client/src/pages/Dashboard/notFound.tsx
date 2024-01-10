"use client"
// * Modules * //
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


// * Exports * //


// * Components * //


export default function DashboardNotFound() {

    return (
        <div className="grid mt-44 px-4 place-content-center">
            <motion.div
                className="text-center"
                initial={{ scale: 0, rotate: 260 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >
                <h1 className="font-black text-gray-400 text-9xl">404</h1>

                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Uh-oh!
                </p>

                <p className="mt-4 text-gray-500">Pagina não encontrada.</p>

                <Link
                    to="/dashboard"
                    className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-purple-gray rounded hover:bg-purple-900 focus:outline-none focus:ring"
                >
                    Ir para o Inicio
                </Link>
            </motion.div>
        </div>
    )
}