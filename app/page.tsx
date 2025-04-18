import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingBag, Star, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Global Products, Local Convenience
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Premium imported products delivered to your doorstep in India and the USA.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/products">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              alt="Hero Image"
              width={550}
              height={550}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Shop by Category</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our wide range of premium imported products
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {/* Eyewear Category */}
            <Link
              href="/products/eyewear"
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40 z-10"></div>
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Eyewear"
                width={300}
                height={400}
                className="h-[300px] w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                <h3 className="text-xl font-bold">Eyewear</h3>
                <p className="text-sm">Premium sunglasses & frames</p>
              </div>
            </Link>

            {/* Accessories Category */}
            <Link
              href="/products/accessories"
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40 z-10"></div>
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Accessories"
                width={300}
                height={400}
                className="h-[300px] w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                <h3 className="text-xl font-bold">Accessories</h3>
                <p className="text-sm">Stylish accessories for everyone</p>
              </div>
            </Link>

            {/* Trending Category */}
            <Link
              href="/products/trending"
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40 z-10"></div>
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Trending"
                width={300}
                height={400}
                className="h-[300px] w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                <h3 className="text-xl font-bold">Trending</h3>
                <p className="text-sm">Our most popular products</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our best-selling products across India and the USA
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Product 1 */}
            <Link
              href="/products/1"
              className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="relative aspect-square overflow-hidden">
                <span className="absolute top-2 right-2 z-10 rounded-full bg-green-600 px-2 py-0.5 text-xs font-medium text-white">
                  New
                </span>
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Product 1"
                  width={300}
                  height={300}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Premium Sunglasses</h3>
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">(42)</span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <div className="font-semibold">₹2,499 / $29.99</div>
                  <Button size="sm" variant="ghost">
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Product 2 */}
            <Link
              href="/products/2"
              className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="relative aspect-square overflow-hidden">
                <span className="absolute top-2 right-2 z-10 rounded-full bg-red-600 px-2 py-0.5 text-xs font-medium text-white">
                  Sale
                </span>
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Product 2"
                  width={300}
                  height={300}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Designer Watch</h3>
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">(28)</span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <div className="font-semibold">₹4,999 / $59.99</div>
                  <Button size="sm" variant="ghost">
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Product 3 */}
            <Link
              href="/products/3"
              className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Product 3"
                  width={300}
                  height={300}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Leather Wallet</h3>
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex items-center">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <span className="text-xs text-gray-500">(16)</span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <div className="font-semibold">₹1,299 / $15.99</div>
                  <Button size="sm" variant="ghost">
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Product 4 */}
            <Link
              href="/products/4"
              className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="relative aspect-square overflow-hidden">
                <span className="absolute top-2 right-2 z-10 rounded-full bg-orange-500 px-2 py-0.5 text-xs font-medium text-white">
                  Hot
                </span>
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Product 4"
                  width={300}
                  height={300}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Wireless Earbuds</h3>
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">(53)</span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <div className="font-semibold">₹3,499 / $39.99</div>
                  <Button size="sm" variant="ghost">
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                <span>Trending Now</span>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What's Hot Right Now</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The most popular products in both India and the USA
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Trending Product"
              width={400}
              height={400}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Premium Quality</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      All our products are carefully selected for their exceptional quality and craftsmanship.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Global Shipping</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We deliver to your doorstep whether you're in India or the USA, with fast and reliable shipping
                      options.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Exclusive Deals</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Get access to exclusive products and deals that you won't find anywhere else.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/products/trending">
                    Shop Trending <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from our satisfied customers across the globe
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="space-y-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  "The quality of the products is exceptional. I've ordered multiple times and have never been
                  disappointed. Fast shipping to Mumbai too!"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                  <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                </div>
                <div>
                  <p className="font-medium">Priya Sharma</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="space-y-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  "I love that I can get these unique products in the US. The international shipping was faster than I
                  expected and the packaging was secure."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                  <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                </div>
                <div>
                  <p className="font-medium">Michael Johnson</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">New York, USA</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="space-y-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  "The currency switcher makes it so easy to understand pricing. Customer service was excellent when I
                  had questions about international shipping."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                  <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                </div>
                <div>
                  <p className="font-medium">Rahul Patel</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
