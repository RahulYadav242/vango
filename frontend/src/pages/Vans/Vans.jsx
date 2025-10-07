import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import { axiosInstance } from '../../lib/axios.js'

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])

    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
    async function loadVans() {
        try {
            const res = await axiosInstance.get("/auth/vans");
            setVans(res.data.vans);
        } catch (err) {
            console.error("Failed to fetch vans:", err);
        }
    }

    loadVans();
}, []);

    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map((van, index) => (
        <div 
            key={van.id} 
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift overflow-hidden animate-fade-in-up"
            style={{animationDelay: `${index * 0.1}s`}}
        >
            <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
                <div className="relative">
                    <img 
                        className="w-full h-48 object-cover" 
                        src={van.imageUrl} 
                        alt={van.name}
                        loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white shadow-lg ${
                            van.type === 'simple' ? 'bg-orange-500' :
                            van.type === 'luxury' ? 'bg-purple-500' :
                            'bg-green-500'
                        }`}>
                            {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
                        </span>
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                        {van.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {van.description}
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <span className="text-3xl font-bold text-gray-900">${van.price}</span>
                            <span className="text-gray-500 ml-1">/day</span>
                        </div>
                        <div className="flex items-center text-orange-500 hover:text-orange-600 transition-colors">
                            <span className="text-sm font-semibold mr-2">View Details</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Explore our van options
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover the perfect van for your next adventure. From simple to luxury, we have something for every traveler.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <button
                        onClick={() => handleFilterChange("type", "simple")}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                            typeFilter === "simple" 
                                ? "bg-orange-500 text-white shadow-lg" 
                                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300"
                        }`}
                    >
                        <span className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                            Simple
                        </span>
                    </button>
                    <button
                        onClick={() => handleFilterChange("type", "luxury")}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                            typeFilter === "luxury" 
                                ? "bg-purple-500 text-white shadow-lg" 
                                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300"
                        }`}
                    >
                        <span className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                            Luxury
                        </span>
                    </button>
                    <button
                        onClick={() => handleFilterChange("type", "rugged")}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                            typeFilter === "rugged" 
                                ? "bg-green-500 text-white shadow-lg" 
                                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300"
                        }`}
                    >
                        <span className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            Rugged
                        </span>
                    </button>

                    {typeFilter && (
                        <button
                            onClick={() => handleFilterChange("type", null)}
                            className="px-6 py-3 rounded-full font-semibold bg-gray-100 text-gray-600 border-2 border-gray-200 hover:bg-gray-200 transition-all duration-300 hover-lift"
                        >
                            Clear filter
                        </button>
                    )}
                </div>

                {/* Results Count */}
                {typeFilter && (
                    <div className="text-center mb-8 animate-fade-in-up">
                        <p className="text-lg text-gray-600">
                            Showing {displayedVans.length} {typeFilter} van{displayedVans.length !== 1 ? 's' : ''}
                        </p>
                    </div>
                )}

                {/* Van Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {vanElements}
                </div>

                {/* Empty State */}
                {displayedVans.length === 0 && (
                    <div className="text-center py-16 animate-fade-in-up">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">No vans found</h3>
                        <p className="text-gray-600 mb-6">Try adjusting your filters or browse all vans.</p>
                        <button
                            onClick={() => handleFilterChange("type", null)}
                            className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 hover-lift"
                        >
                            Show All Vans
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
