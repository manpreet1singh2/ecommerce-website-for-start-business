import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, ShoppingBag, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Story</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  From a small import business to a global marketplace connecting India and the USA.
                </p>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              alt="About Us"
              width={550}
              height={550}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                To bridge the gap between global markets and provide premium products at competitive prices to customers
                in India and the USA.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Our Mission"
              width={400}
              height={400}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Quality First</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We carefully select each product for its exceptional quality, ensuring that our customers receive
                      only the best.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Global Reach</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      By operating in both India and the USA, we create a seamless shopping experience for customers
                      across continents.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Customer Satisfaction</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our dedicated team works tirelessly to ensure that every customer has a positive experience with
                      our products and services.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Journey</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                From humble beginnings to a global marketplace
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">2018</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Started as a small import business bringing select products from China to India.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">2020</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Expanded operations to include exports to the USA, establishing our first international presence.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">2023</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Launched our global e-commerce platform to serve customers in both India and the USA seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                What sets us apart from other e-commerce platforms
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start space-y-2">
              <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Premium Quality</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                All our products are carefully selected and quality-checked to ensure the highest standards.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Global Shipping</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We offer reliable shipping options to both India and the USA with tracking and insurance.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Secure Payments</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Multiple payment options with secure processing for both Indian and US customers.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Customer Support</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Dedicated support team available to assist customers in both regions with any queries.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Easy Returns</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Hassle-free return policy with local return centers in both India and the USA.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Exclusive Products</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Access to unique products that are not easily available in local markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The dedicated professionals behind our global operations
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <div className="overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  width={200}
                  height={200}
                  className="h-40 w-40 object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Rahul Sharma</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Founder & CEO</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  width={200}
                  height={200}
                  className="h-40 w-40 object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Priya Patel</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Operations Director</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  width={200}
                  height={200}
                  className="h-40 w-40 object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Michael Johnson</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">US Operations Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Shop Globally?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our collection of premium imported products and experience the best of global shopping.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/products">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
