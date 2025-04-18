import Link from "next/link"
import Image from "next/image"
import { Filter, ShoppingBag, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function ProductsPage() {
  // Mock product data
  const products = [
    {
      id: 1,
      name: "Premium Sunglasses",
      description: "UV protection with stylish design",
      price: { inr: 2499, usd: 29.99 },
      image: "/placeholder.svg?height=300&width=300",
      category: "Eyewear",
      rating: 5,
      reviews: 42,
      badge: "New",
      badgeColor: "bg-green-600",
    },
    {
      id: 2,
      name: "Designer Watch",
      description: "Elegant timepiece for all occasions",
      price: { inr: 4999, usd: 59.99 },
      image: "/placeholder.svg?height=300&width=300",
      category: "Accessories",
      rating: 5,
      reviews: 28,
      badge: "Sale",
      badgeColor: "bg-red-600",
    },
    {
      id: 3,
      name: "Leather Wallet",
      description: "Genuine leather with multiple compartments",
      price: { inr: 1299, usd: 15.99 },
      image: "/placeholder.svg?height=300&width=300",
      category: "Accessories",
      rating: 4,
      reviews: 16,
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      description: "Crystal clear sound with noise cancellation",
      price: { inr: 3499, usd: 39.99 },
      image: "/placeholder.svg?height=300&width=300",
      category: "Electronics",
      rating: 5,
      reviews: 53,
      badge: "Hot",
      badgeColor: "bg-orange-500",
    },
    {
      id: 5,
      name: "Casual Sneakers",
      description: "Comfortable everyday footwear",
      price: { inr: 1999, usd: 24.99 },
      image: "/placeholder.svg?height=300&width=300",
      category: "Footwear",
      rating: 4,
      reviews: 37,
    },
    {
      id: 6,
      name: "Smartphone Case",
      description: "Durable protection with sleek design",
      price: { inr: 899, usd: 10.99 },
      image: "/placeholder.svg?height=300&width=300",
      category: "Accessories",
      rating: 4,
      reviews: 22,
    },
    {
      id: 7,
      name: "Polarized Sunglasses",
      description: "Enhanced UV protection for outdoor activities",
      price: { inr: 3299, usd: 39.99 },
      image: "/placeholder.svg?height=300&width=300",
      category: "Eyewear",
      rating: 5,
      reviews: 19,
    },
    {
      id: 8,
      name: "Crossbody Bag",
      description: "Stylish and practical everyday bag",
      price: { inr: 1799, usd: 21.99 },
      image: "/placeholder.svg?height=300&width=300",
      category: "Accessories",
      rating: 4,
      reviews: 31,
      badge: "Sale",
      badgeColor: "bg-red-600",
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">Browse our collection of premium imported products</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="featured">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Narrow down your product search with filters</SheetDescription>
              </SheetHeader>
              <div className="grid gap-6 py-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Categories</h3>
                  <div className="space-y-2">
                    {["Eyewear", "Accessories", "Electronics", "Footwear"].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={`category-${category}`} />
                        <Label htmlFor={`category-${category}`}>{category}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Price Range</h3>
                  <div className="flex items-center space-x-2">
                    <Input type="number" placeholder="Min" className="w-20" />
                    <span>to</span>
                    <Input type="number" placeholder="Max" className="w-20" />
                    <Button size="sm">Apply</Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Rating</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <Label htmlFor={`rating-${rating}`} className="flex items-center">
                          {Array.from({ length: rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                          {Array.from({ length: 5 - rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-gray-300" />
                          ))}
                          <span className="ml-1">& Up</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* Desktop Filters */}
        <div className="hidden md:col-span-3 md:block">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Categories</h3>
              <div className="space-y-2">
                {["Eyewear", "Accessories", "Electronics", "Footwear"].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={`desktop-category-${category}`} />
                    <Label htmlFor={`desktop-category-${category}`}>{category}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Price Range</h3>
              <div className="grid gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <Input type="number" placeholder="Min" />
                  <Input type="number" placeholder="Max" />
                </div>
                <Button size="sm">Apply</Button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Rating</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center space-x-2">
                    <Checkbox id={`desktop-rating-${rating}`} />
                    <Label htmlFor={`desktop-rating-${rating}`} className="flex items-center">
                      {Array.from({ length: rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                      ))}
                      {Array.from({ length: 5 - rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gray-300" />
                      ))}
                      <span className="ml-1">& Up</span>
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Product Grid */}
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="relative aspect-square overflow-hidden">
                  {product.badge && (
                    <span
                      className={`absolute top-2 right-2 z-10 rounded-full ${product.badgeColor} px-2 py-0.5 text-xs font-medium text-white`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{product.description}</p>
                  <div className="flex items-center gap-2 pt-1">
                    <div className="flex items-center">
                      {Array.from({ length: product.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                      ))}
                      {Array.from({ length: 5 - product.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gray-300" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between pt-3">
                    <div className="font-semibold">
                      ₹{product.price.inr} / ${product.price.usd}
                    </div>
                    <Button size="sm" variant="ghost">
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Previous page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="font-medium">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Next page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
