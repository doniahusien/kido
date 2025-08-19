import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AddToCartButton from "@/components/product/AddToCartButton";
const ProductCard = ({ toy }) => {
    return (
        <motion.div
            className="bg-white shadow-md rounded-2xl space-y-5 p-4 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
        >
            <Link href={`/toys/${toy.id}`} className="block">
                <div className="h-44 w-full rounded-md mb-5 flex items-center justify-center ">
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Image
                            src={toy.images[0]}
                            alt={toy.name}
                            width={550}
                            height={250}
                            className="w-full h-auto rounded-lg"
                        />
                    </motion.div>
                </div>

                <h3 className="text-lg font-semibold">{toy.name}</h3>
                <p className="text-gray-600">ج.م{toy.price}</p>
            </Link>

            <AddToCartButton toy={toy} />
        </motion.div>
    );
};

export default ProductCard;
