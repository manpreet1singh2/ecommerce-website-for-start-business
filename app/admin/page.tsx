"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BarChart3, DollarSign, Package, ShoppingCart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data for dashboard
  const stats = [
    {
      title: "Total Revenue",
      value: "₹1,25,000 / $1,500",
      description: "Last 30 days",
      icon: <DollarSign className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Orders",
      value: "120",
      description: "Last 30 days",
      icon: <ShoppingCart className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Products",
      value: "45",
      description: "Total products",
      icon: <Package className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Customers",
      value: "250",
      description: "Total customers",
      icon: <Users className="h-5 w-5 text-muted-foreground" />,
    },
  ]

  // Mock orders data
  const orders = [
    {
      id: "ORD-001",
      customer: "Rahul Sharma",
      date: "2023-04-15",
      status: "Delivered",
      total: "₹2,499 / $29.99",
      country: "India",
    },
    {
      id: "ORD-002",
      customer: "Michael Johnson",
      date: "2023-04-14",
      status: "Shipped",
      total: "₹4,999 / $59.99",
      country: "USA",
    },
    {
      id: "ORD-003",
      customer: "Priya Patel",
      date: "2023-04-13",
      status: "Processing",
      total: "₹1,299 / $15.99",
      country: "India",
    },
    {
      id: "ORD-004",
      customer: "Sarah Williams",
      date: "2023-04-12",
      status: "Delivered",
      total: "₹3,499 / $39.99",
      country: "USA",
    },
    {
      id: "ORD-005",
      customer: "Amit Kumar",
      date: "2023-04-11",
      status: "Processing",
      total: "₹1,999 / $24.99",
      country: "India",
    },
  ]

  // Mock products data
  const products = [
    {
      id: "PRD-001",
      name: "Premium Sunglasses",
      category: "Eyewear",
      price: "₹2,499 / $29.99",
      stock: 15,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "PRD-002",
      name: "Designer Watch",
      category: "Accessories",
      price: "₹4,999 / $59.99",
      stock: 8,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "PRD-003",
      name: "Leather Wallet",
      category: "Accessories",
      price: "₹1,299 / $15.99",
      stock: 22,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "PRD-004",
      name: "Wireless Earbuds",
      category: "Electronics",
      price: "₹3,499 / $39.99",
      stock: 12,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "PRD-005",
      name: "Casual Sneakers",
      category: "Footwear",
      price: "₹1,999 / $24.99",
      stock: 7,
      image: "/placeholder.svg?height=50&width=50",
    },
  ]

  // Filter orders based on search term
  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your products, orders, and customers</p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/admin/products/new">Add Product</Link>
          </Button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>Compare sales between India and USA markets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full rounded-lg border bg-muted flex items-center justify-center">
              <BarChart3 className="h-16 w-16 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Sales chart visualization</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="orders">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="orders">Recent Orders</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
            </TabsList>
            <div>
              <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[200px] lg:w-[300px]"
              />
            </div>
          </div>
          <TabsContent value="orders" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Manage your recent orders across all markets</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Country</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <div
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : order.status === "Shipped"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            }`}
                          >
                            {order.status}
                          </div>
                        </TableCell>
                        <TableCell>{order.total}</TableCell>
                        <TableCell>{order.country}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="products" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Products</CardTitle>
                <CardDescription>Manage your product inventory</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Image</TableHead>
                      <TableHead>Product ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={40}
                            height={40}
                            className="rounded-md object-cover"
                          />
                        </TableCell>
                        <TableCell className="font-medium">{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>
                          <div
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              product.stock > 10
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : product.stock > 5
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                            }`}
                          >
                            {product.stock}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
