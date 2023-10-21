import {useState} from "react"
import "./index.css"
import {products} from "./db/Data";

function App() {
    const [filters, setFilters] = useState({
        title: "",
        company: "",
        stars: undefined,
    })

    console.log("Render")

    return (
        <main className="flex h-screen">
            <aside className="flex-shrink-0 w-1/6 h-full px-2 py-5 flex flex-col gap-4 bg-gray-400">
                <h2 className="text-xl mb-5">Filters:</h2>
                <NameSearchFilter filters={filters} setFilters={setFilters}/>
                <StarFilter filters={filters} setFilters={setFilters}/>
                <CompanyFilter filters={filters} setFilters={setFilters}/>
            </aside>
            <div className="flex flex-col w-full overflow-y-scroll">
                <ProductsGrid products={products} filters={filters}/>
            </div>
        </main>
    );
}

const ProductsGrid = ({products, filters}) => {
    return (
        <div className="grid grid-cols-3 gap-5 p-10">
            {products
                .filter(p => p.title.toLowerCase().includes(filters.title.toLowerCase()))
                .filter(p => p.company.toLowerCase().includes(filters.company.toLowerCase()))
                .filter(p => filters.stars === undefined || p.star === filters.stars)
                .map(product => (
                    <div className="flex flex-col border rounded-lg shadow">
                        <img src={product.img} alt={product.title}
                             className="w-full h-48 w-full object-contain bg-white p-5"/>
                        <div className="p-4">
                            <span>{product.title}</span>
                            <div className="flex gap-1">
                                {Array(product.star).fill(null).map((_, index) => (
                                    <StarIcon className="w-6 h-6 fill-yellow-400"/>
                                ))}
                                {product.reviews}
                            </div>
                            <div className="flex flex-col gap-2 flex-wrap mt-2">
                                <span><strong>Company: </strong>{product.company}</span>
                                <span><strong>Color: </strong>{product.color}</span>
                                <span><strong>Category: </strong>{product.category}</span>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

const CompanyFilter = ({filters, setFilters}) => {
    const companies = [...new Set(products.map(p => p.company))]
    return (
        <div className="flex flex-col gap-1 border p-2">
            <h2>Company:</h2>
            <select
                name="company"
                onChange={(e) => setFilters({...filters, company: e.target.value})}
                defaultValue={filters.company}
            >
                <option value="">All</option>
                {companies.map(company => <option value={company}>{company}</option>)}
            </select>
        </div>
    )
}

const StarFilter = ({filters, setFilters}) => {
    return (
        <div className="flex flex-col gap-1 border p-2">
            <h2>Stars:</h2>
            <div className="flex gap-2">
                {Array(5).fill(null).map((_, index) => (
                    <label className="flex flex-col">
                        <input
                            type="radio"
                            name="stars"
                            value={index}
                            onChange={(e) => setFilters({...filters, stars: parseInt(e.target.value) + 1})}
                        />
                        <span>{index + 1}</span>
                    </label>
                ))}
                <label className="flex flex-col">
                    <input
                        type="radio"
                        name="stars"
                        onChange={(e) => setFilters({...filters, stars: undefined})}
                    />
                    <span>All</span>
                </label>
            </div>
        </div>
    )
}

const NameSearchFilter = ({filters, setFilters}) => {
    return (
        <input
            onChange={(e) => setFilters({...filters, title: e.target.value})}
            type="text"
            value={filters.title}
            placeholder="Search Name"
            className="px-4 py-3 rounded-full"
        />
    )
}

const StarIcon = ({className}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
        </svg>
    )
}


//
// function App() {
//     const [selectedCategory, setSelectedCategory] = useState({
//         category: undefined,
//         color: undefined,
//         company: undefined,
//         newprice: undefined,
//         title: undefined,
//     });
//
//     //  input filter
//     const [titleFilter, setTitleFilter] = useState("");
//
//     const filtereditems = products
//         .filter(product => product.title.toLowerCase().includes(titleFilter.toLowerCase()));
//
//     // Radio filter
//     const handleChange = (event) => {
//         setSelectedCategory(event.target.value);
//     };
//
//     // Button filter
//     const handleClick = (event) => {
//         setSelectedCategory(event.target.value);
//     };
//
//     function filteredData(products, selected, query) {
//         let filteredProducts = products;
//
//         // filtering input items
//         if (query) {
//             filteredProducts = filtereditems;
//         }
//
//         if (selected) {
//             filteredProducts = filteredProducts.filter(
//                 ({category, color, company, newprice, title}) =>
//                     category === selected ||
//                     color === selected ||
//                     company === selected ||
//                     newprice === selected ||
//                     title === selected
//             );
//         }
//
//         return filteredProducts.map(
//             ({img, title, star, reviews, prevPrice, newPrice}) => (
//                 <Card
//                     key={Math.random()}
//                     img={img}
//                     title={title}
//                     star={star}
//                     reviews={reviews}
//                     newPrice={newPrice}
//                     prevPrice={prevPrice}
//                 />
//             )
//         );
//     }
//
//     const result = filteredData(products, selectedCategory, titleFilter);
//     return (
//         <main className="flex">
//             <Sidebar handleChange={handleChange}/>
//             <div className="flex flex-col w-full">
//                 <Nav query={titleFilter} handleInputChange={(e) => setTitleFilter(e.target.value)}></Nav>
//                 <Recommended handleChange={handleClick}></Recommended>
//                 <Products result={result}></Products>
//             </div>
//         </main>
//     );
// }
//
export default App;