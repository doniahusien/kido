'use client';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ProductCard from '@/components/product/ProductCard';
import { withAuth } from '@/withAuth';
function CategoriesPage() {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://backend-chi-sepia.vercel.app/api/products');
                const data = await res.json();

                const cats = data.categories.map((cat) => ({ ...cat, id: String(cat.id) }));
                const prods = data.products.map((prod) => ({ ...prod, categoryId: String(prod.categoryId) }));

                setCategories(cats);
                setProducts(prods);
                if (cats.length > 0) {
                    setSelectedCategory(cats[0].id);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (selectedCategory !== null) {
            const filtered = products.filter(
                (product) => product.categoryId === selectedCategory
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    }, [selectedCategory, products]);

    return (
        <div className="p-6 pb-10">
            <h1 className="text-3xl font-bold mb-6 text-center">التصنيفات</h1>

            {/* Categories Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        className={`px-4 py-2 rounded font-bold ${
                            selectedCategory === cat.id
                                ? 'bg-yellow-500 text-white'
                                : 'bg-red-600 text-white hover:bg-red-700'
                        }`}
                        onClick={() => setSelectedCategory(cat.id)}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            {selectedCategory !== null && (
                filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((toy, index) => (
                            <ProductCard key={index} toy={toy} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 text-lg">
                        لا يوجد منتجات في هذا التصنيف
                    </p>
                )
            )}
        </div>
    );
}
export default withAuth(CategoriesPage);