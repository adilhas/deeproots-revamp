import { products } from './data';

const OurProducts = () => {
  return (
    <section className="mb-24">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          What We&apos;re Building
        </span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800/50 hover:bg-white/90 dark:hover:bg-gray-800/70 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md flex items-center"
          >
            <div
              className={`mr-3 ${index % 2 === 0 ? 'text-[#0085a8]' : 'text-[#ad1aaf]'}`}
            >
              {product.icon}
            </div>
            <p className="text-gray-800 dark:text-gray-200">{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
