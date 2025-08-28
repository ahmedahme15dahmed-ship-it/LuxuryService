export interface User {
  id: string
  email: string
  password: string // bcrypt hashed
  name: string
  avatar?: string
  role: "admin" | "customer"
  balance: number
  points: number
  level: "Bronze" | "Silver" | "Gold"
  isBlocked: boolean
  twoFactorEnabled: boolean
  twoFactorSecret?: string
  createdAt: string
  lastLogin?: string
  referralCode: string
  referredBy?: string
}

export interface Product {
  id: string
  name: string
  description: string
  shortDescription: string
  price: number
  discountPrice?: number
  category: string
  tags: string[]
  images: string[]
  downloadUrl?: string
  fileSize: string
  requirements: string[]
  features: string[]
  isActive: boolean
  showStats: boolean
  fakeViews?: number
  fakeRating?: number
  fakeCustomers?: number
  createdAt: string
  updatedAt: string
}

export interface Order {
  id: string
  userId: string
  items: {
    productId: string
    quantity: number
    price: number
  }[]
  total: number
  status: "pending" | "processing" | "approved" | "delivered" | "rejected"
  paymentMethod: "wallet"
  createdAt: string
  updatedAt: string
  deliveredAt?: string
}

export interface Review {
  id: string
  userId: string
  productId: string
  orderId: string
  rating: number
  comment: string
  status: "pending" | "approved" | "rejected"
  createdAt: string
}

export interface Coupon {
  id: string
  code: string
  type: "percentage" | "fixed"
  value: number
  minAmount?: number
  maxUses?: number
  usedCount: number
  expiresAt?: string
  isActive: boolean
  allowedUsers?: string[]
  createdAt: string
}

export interface SiteSettings {
  siteName: string
  currency: string
  logo?: string
  banner?: string
  maintenanceMode: boolean
  taxRate: number
  shippingFee: number
  discordUrl: string
  youtubeUrl: string
}

// Mock data storage - will be replaced with actual JSON files
const users: User[] = []
const products: Product[] = []
const orders: Order[] = []
const reviews: Review[] = []
const coupons: Coupon[] = []
let settings: SiteSettings = {
  siteName: "Luxury Service | Lua Development",
  currency: "USD",
  maintenanceMode: false,
  taxRate: 0,
  shippingFee: 0,
  discordUrl: "https://discord.gg/6kHrgJPKEq",
  youtubeUrl: "#",
}

export class DataService {
  // User methods
  static async getUsers(): Promise<User[]> {
    return users
  }

  static async getUserById(id: string): Promise<User | null> {
    return users.find((u) => u.id === id) || null
  }

  static async getUserByEmail(email: string): Promise<User | null> {
    return users.find((u) => u.email === email) || null
  }

  static async createUser(userData: Omit<User, "id" | "createdAt">): Promise<User> {
    const user: User = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    }
    users.push(user)
    return user
  }

  static async updateUser(id: string, updates: Partial<User>): Promise<User | null> {
    const index = users.findIndex((u) => u.id === id)
    if (index === -1) return null
    users[index] = { ...users[index], ...updates }
    return users[index]
  }

  // Product methods
  static async getProducts(): Promise<Product[]> {
    return products.filter((p) => p.isActive)
  }

  static async getAllProducts(): Promise<Product[]> {
    return products
  }

  static async getProductById(id: string): Promise<Product | null> {
    return products.find((p) => p.id === id) || null
  }

  static async createProduct(productData: Omit<Product, "id" | "createdAt" | "updatedAt">): Promise<Product> {
    const product: Product = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    products.push(product)
    return product
  }

  // Order methods
  static async getOrdersByUserId(userId: string): Promise<Order[]> {
    return orders.filter((o) => o.userId === userId)
  }

  static async getAllOrders(): Promise<Order[]> {
    return orders
  }

  static async createOrder(orderData: Omit<Order, "id" | "createdAt" | "updatedAt">): Promise<Order> {
    const order: Order = {
      ...orderData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    orders.push(order)
    return order
  }

  static async updateOrder(id: string, updates: Partial<Order>): Promise<Order | null> {
    const index = orders.findIndex((o) => o.id === id)
    if (index === -1) return null
    orders[index] = { ...orders[index], ...updates, updatedAt: new Date().toISOString() }
    return orders[index]
  }

  // Settings methods
  static async getSettings(): Promise<SiteSettings> {
    return settings
  }

  static async updateSettings(updates: Partial<SiteSettings>): Promise<SiteSettings> {
    settings = { ...settings, ...updates }
    return settings
  }
}

// Initialize default admin user
DataService.createUser({
  email: "bebo11hany1@gmail.com",
  password: "$2b$10$encrypted_password_hash", // This will be properly hashed
  name: "Admin",
  role: "admin",
  balance: 0,
  points: 0,
  level: "Gold",
  isBlocked: false,
  twoFactorEnabled: false,
  referralCode: "ADMIN001",
})
