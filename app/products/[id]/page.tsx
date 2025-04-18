import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Heart, ShoppingCart, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage({ params }: { params: { id: string } }) {
  // Mock product data - in a real app, this would come from a database or API
  const product = {
    id: params.id,
    name: "Premium Sunglasses",
    description:
      "High-quality sunglasses with UV protection and stylish design. Perfect for everyday use and outdoor activities.",
    price: { inr: 2499, usd: 29.99 },
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    rating: 4.8,
    reviews: 42,
    colors: ["Black", "Brown", "Blue"],
    features: [
      "100% UV protection",
      "Polarized lenses",
      "Lightweight frame",
      "Scratch-resistant coating",
      "Includes protective case",
    ],
    specifications: {
      Material: "Acetate frame, polycarbonate lenses",
      Dimensions: "145mm temple length, 54mm lens width",
      Weight: "28g",
      Warranty: "1 year manufacturer warranty",
      Origin: "Imported from China",
    },
    shipping: {
      India: "2-3 business days",
      USA: "7-10 business days",
    },
    stock: 15,
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <Link
        href="/products"
        className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </Link>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg border">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Image ${index + 1}`}
                  width={150}
                  height={150}
                  className="aspect-square w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-current text-yellow-400"
                        : i < product.rating
                          ? "fill-current text-yellow-400 opacity-50"
                          : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold">
              ₹{product.price.inr} / ${product.price.usd}
            </div>
            <p className="text-sm text-muted-foreground">
              Price includes all taxes. Free shipping on orders above ₹999 in India and $50 in the USA.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="font-medium">Color</div>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <Button key={color} variant="outline" className="rounded-full px-4">
                    {color}
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-medium">Quantity</div>
              <div className="flex items-center gap-2">
                <Select defaultValue="1">
                  <SelectTrigger className="w-20">
                    <SelectValue placeholder="Qty" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: Math.min(10, product.stock) }).map((_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="text-sm text-muted-foreground">{product.stock} available</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button size="lg" className="flex-1">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="mr-2 h-5 w-5" />
              Add to Wishlist
            </Button>
          </div>
          <div className="space-y-4 rounded-lg border p-4">
            <div className="font-medium">Shipping Information</div>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <div className="text-sm">
                  <span className="font-medium">India:</span> {product.shipping.India}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <div className="text-sm">
                  <span className="font-medium">USA:</span> {product.shipping.USA}
                </div>
              </div>
            </div>
          </div>
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </TabsContent>
            <TabsContent value="features" className="pt-4">
              <ul className="grid gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="specifications" className="pt-4">
              <div className="grid gap-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 gap-2 text-sm">
                    <div className="font-medium">{key}</div>
                    <div className="text-muted-foreground">{value}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
