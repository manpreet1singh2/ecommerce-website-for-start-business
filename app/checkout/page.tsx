import Link from "next/link"
import { ArrowLeft, CreditCard, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CheckoutPage() {
  // Mock order summary data
  const orderSummary = {
    subtotal: { inr: 10997, usd: 129.97 },
    shipping: { inr: 199, usd: 4.99 },
    total: { inr: 11196, usd: 134.96 },
    items: 3,
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <Link
        href="/cart"
        className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Cart
      </Link>
      <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
      <p className="text-muted-foreground">Complete your order by providing your shipping and payment details</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-lg border">
            <div className="p-6">
              <h2 className="text-lg font-semibold">Shipping Information</h2>
              <div className="mt-4 grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="country">Country</Label>
                  <Select defaultValue="india">
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                  <Input id="apartment" />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">State / Province</Label>
                    <Input id="state" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="postal-code">Postal Code</Label>
                    <Input id="postal-code" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>
              </div>
            </div>
            <Separator />
            <div className="p-6">
              <h2 className="text-lg font-semibold">Shipping Method</h2>
              <RadioGroup defaultValue="standard" className="mt-4 grid gap-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="font-medium">
                      Standard Shipping
                    </Label>
                  </div>
                  <div className="font-medium">₹199 / $4.99</div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="font-medium">
                      Express Shipping
                    </Label>
                  </div>
                  <div className="font-medium">₹499 / $14.99</div>
                </div>
              </RadioGroup>
            </div>
            <Separator />
            <div className="p-6">
              <h2 className="text-lg font-semibold">Payment Method</h2>
              <Tabs defaultValue="card" className="mt-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="card">Credit Card</TabsTrigger>
                  <TabsTrigger value="paypal">PayPal</TabsTrigger>
                </TabsList>
                <TabsContent value="card" className="pt-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="grid gap-2">
                        <Label htmlFor="expiry-month">Expiry Month</Label>
                        <Select>
                          <SelectTrigger id="expiry-month">
                            <SelectValue placeholder="Month" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 12 }).map((_, i) => (
                              <SelectItem key={i + 1} value={(i + 1).toString().padStart(2, "0")}>
                                {(i + 1).toString().padStart(2, "0")}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="expiry-year">Expiry Year</Label>
                        <Select>
                          <SelectTrigger id="expiry-year">
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 10 }).map((_, i) => {
                              const year = new Date().getFullYear() + i
                              return (
                                <SelectItem key={year} value={year.toString()}>
                                  {year}
                                </SelectItem>
                              )
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="name-on-card">Name on Card</Label>
                      <Input id="name-on-card" />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="paypal" className="pt-4">
                  <div className="flex flex-col items-center justify-center rounded-lg border p-6 text-center">
                    <p className="text-muted-foreground">You will be redirected to PayPal to complete your payment.</p>
                    <Button className="mt-4">Continue with PayPal</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-lg border">
            <div className="p-6">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <div className="mt-4 grid gap-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal ({orderSummary.items} items)</span>
                  <span>
                    ₹{orderSummary.subtotal.inr} / ${orderSummary.subtotal.usd.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>
                    ₹{orderSummary.shipping.inr} / ${orderSummary.shipping.usd.toFixed(2)}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>
                    ₹{orderSummary.total.inr} / ${orderSummary.total.usd.toFixed(2)}
                  </span>
                </div>
              </div>
              <Button className="mt-6 w-full" size="lg">
                <CreditCard className="mr-2 h-4 w-4" />
                Place Order
              </Button>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4" />
                <span>Secure checkout. Your data is protected.</span>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-lg border p-6">
            <h3 className="font-medium">Need Help?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              If you have any questions or need assistance with your order, please contact our customer support team.
            </p>
            <Button variant="outline" className="mt-4 w-full" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
