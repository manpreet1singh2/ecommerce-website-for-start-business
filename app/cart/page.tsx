import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

export default function CartPage() {
  // Mock cart data
  const cartItems = [
    {
      id: 1,
      name: "Premium Sunglasses",
      price: { inr: 2499, usd: 29.99 },
      image: "/placeholder.svg?height=100&width=100",
      quantity: 1,
      color: "Black",
    },
    {
      id: 2,
      name: "Designer Watch",
      price: { inr: 4999, usd: 59.99 },
      image: "/placeholder.svg?height=100&width=100",
      quantity: 1,
      color: "Silver",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: { inr: 3499, usd: 39.99 },
      image: "/placeholder.svg?height=100&width=100",
      quantity: 1,
      color: "White",
    },
  ]

  // Calculate totals
  const subtotal = {
    inr: cartItems.reduce((total, item) => total + item.price.inr * item.quantity, 0),
    usd: cartItems.reduce((total, item) => total + item.price.usd * item.quantity, 0),
  }
  const shipping = { inr: 199, usd: 4.99 }
  const total = {
    inr: subtotal.inr + shipping.inr,
    usd: subtotal.usd + shipping.usd,
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-3xl font-bold tracking-tight">Shopping Cart</h1>
      <p className="text-muted-foreground">Review and modify your items before checkout</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {cartItems.length > 0 ? (
            <div className="rounded-lg border">
              <div className="p-6">
                <div className="grid gap-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="grid gap-4 sm:grid-cols-[100px_1fr] sm:gap-6">
                      <div className="aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">Color: {item.color}</p>
                          </div>
                          <div className="font-semibold">
                            ₹{item.price.inr} / ${item.price.usd}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" className="h-8 w-8">
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Increase quantity</span>
                            </Button>
                          </div>
                          <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove item</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="p-6">
                <div className="flex justify-between">
                  <Button variant="outline">Continue Shopping</Button>
                  <Button variant="outline">Update Cart</Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border p-12 text-center">
              <h2 className="text-xl font-semibold">Your cart is empty</h2>
              <p className="mt-2 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
              <Button asChild className="mt-4">
                <Link href="/products">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
        <div>
          <div className="rounded-lg border">
            <div className="p-6">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <div className="mt-4 grid gap-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>
                    ₹{subtotal.inr} / ${subtotal.usd.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>
                    ₹{shipping.inr} / ${shipping.usd.toFixed(2)}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>
                    ₹{total.inr} / ${total.usd.toFixed(2)}
                  </span>
                </div>
              </div>
              <Button className="mt-6 w-full" size="lg" asChild>
                <Link href="/checkout">
                  Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Separator />
            <div className="p-6">
              <h3 className="font-medium">Have a coupon?</h3>
              <div className="mt-2 flex gap-2">
                <Input placeholder="Enter coupon code" />
                <Button variant="outline">Apply</Button>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-lg border p-6">
            <h3 className="font-medium">Shipping Options</h3>
            <div className="mt-4 grid gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="font-medium">India</div>
                  <div className="text-sm text-muted-foreground">2-3 business days</div>
                </div>
                <div>₹199</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="font-medium">USA</div>
                  <div className="text-sm text-muted-foreground">7-10 business days</div>
                </div>
                <div>$4.99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
