# GlobalMarket - Multi-Market eCommerce Platform

![GlobalMarket]([https://github.com/yourusername/globalmarket/raw/main/public/globalmarket-preview.png](https://v0-ec-ommerce-website-design-jwv59j9d5.vercel.app/))

## 🌐 Live Demo

[View Live Demo]([https://globalmarket-demo.vercel.app](https://v0-ec-ommerce-website-design-jwv59j9d5.vercel.app/))

## 📋 Overview

GlobalMarket is a multi-market eCommerce platform designed to serve customers in both India and the USA. The platform supports multiple currencies, region-specific payment methods, and international shipping options, making it ideal for businesses that operate across borders.

This project was built using Next.js, React, and TailwindCSS to create a fast, responsive, and SEO-friendly eCommerce experience.

## ✨ Features

- **Multi-Market Support**: Serves customers in both India and USA markets
- **Currency Switching**: Toggle between INR and USD throughout the site
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Product Catalog**: Browse products by category with filtering and sorting options
- **Shopping Cart**: Add, remove, and update product quantities
- **Checkout Process**: Multi-step checkout with shipping and payment options
- **Payment Gateway Integration**: Support for Razorpay (India) and Stripe/PayPal (USA)
- **Admin Dashboard**: Manage products, orders, and customers
- **SEO Optimized**: Built with Next.js for optimal search engine performance
- **Dark Mode Support**: Toggle between light and dark themes

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18
- **Styling**: TailwindCSS, shadcn/ui components
- **State Management**: React Hooks
- **Deployment**: Vercel
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/globalmarket.git
   cd globalmarket
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

\`\`\`
globalmarket/
├── app/                    # Next.js App Router
│   ├── about/              # About page
│   ├── admin/              # Admin dashboard
│   ├── cart/               # Shopping cart
│   ├── checkout/           # Checkout process
│   ├── components/         # Shared components
│   ├── contact/            # Contact page
│   ├── products/           # Product listings and details
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # UI components
│   └── ui/                 # shadcn/ui components
├── lib/                    # Utility functions
├── public/                 # Static assets
├── styles/                 # Global styles
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # TailwindCSS configuration
└── package.json            # Project dependencies
\`\`\`

## 📱 Pages and Components

### Main Pages

- **Home Page**: Features hero banner, product categories, and featured products
- **Products Page**: Lists all products with filtering and sorting options
- **Product Detail Page**: Shows detailed product information, images, and purchase options
- **Cart Page**: Displays items in cart with quantity adjustment and price calculations
- **Checkout Page**: Multi-step process for shipping, payment, and order confirmation
- **About Page**: Company information and story
- **Contact Page**: Contact form and company information
- **Admin Dashboard**: Manage products, orders, and customers

### Key Components

- **Header**: Navigation, search, currency switcher, and cart
- **Footer**: Links, company information, and social media
- **Product Card**: Displays product information in listings
- **Currency Switcher**: Toggle between INR and USD
- **Theme Toggle**: Switch between light and dark modes

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

\`\`\`
# General
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Indian Payment Gateway (Razorpay)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# US Payment Gateway (Stripe)
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Database (if applicable)
DATABASE_URL=your_database_url
\`\`\`

## 🌟 Future Enhancements

- **User Authentication**: Implement user accounts and profiles
- **Wishlist Functionality**: Allow users to save products for later
- **Order Tracking**: Real-time order status updates
- **Reviews and Ratings**: Customer feedback system
- **Multi-language Support**: Add language options for international customers
- **Advanced Analytics**: Detailed sales and customer insights
- **Inventory Management**: Automated stock tracking and alerts
- **Marketing Tools**: Email campaigns and promotional features

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributors

- Your Name - [GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/) for hosting

---

Made with ❤️ by [Manpreet Singh](https://yourwebsite.com)
