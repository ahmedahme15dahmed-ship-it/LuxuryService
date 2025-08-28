"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { GaugeChart } from "@/components/admin/gauge-chart"

const salesData = [
  { name: "Jan", sales: 4000, profit: 2400 },
  { name: "Feb", sales: 3000, profit: 1398 },
  { name: "Mar", sales: 2000, profit: 9800 },
  { name: "Apr", sales: 2780, profit: 3908 },
  { name: "May", sales: 1890, profit: 4800 },
  { name: "Jun", sales: 2390, profit: 3800 },
  { name: "Jul", sales: 3490, profit: 4300 },
]

const categoryData = [
  { name: "Protection", value: 35, color: "#8b5cf6" },
  { name: "Roleplay", value: 25, color: "#6366f1" },
  { name: "Economy", value: 20, color: "#3b82f6" },
  { name: "Racing", value: 12, color: "#22c55e" },
  { name: "Admin", value: 8, color: "#fbbf24" },
]

const orderStatusData = [
  { name: "Mon", delivered: 12, pending: 3, rejected: 1 },
  { name: "Tue", delivered: 15, pending: 2, rejected: 0 },
  { name: "Wed", delivered: 8, pending: 5, rejected: 2 },
  { name: "Thu", delivered: 18, pending: 1, rejected: 1 },
  { name: "Fri", delivered: 22, pending: 4, rejected: 0 },
  { name: "Sat", delivered: 16, pending: 2, rejected: 1 },
  { name: "Sun", delivered: 10, pending: 3, rejected: 0 },
]

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Sales & Profit Chart */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Sales & Profit Overview</CardTitle>
          <CardDescription>Monthly sales and profit trends</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#8b5cf6" strokeWidth={2} />
              <Line type="monotone" dataKey="profit" stroke="#22c55e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Order Status Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Order Status Trends</CardTitle>
          <CardDescription>Daily order status breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={orderStatusData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="delivered" fill="#22c55e" />
              <Bar dataKey="pending" fill="#fbbf24" />
              <Bar dataKey="rejected" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Category Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Product Categories</CardTitle>
          <CardDescription>Sales distribution by category</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Success Rate Gauge */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Order Success Rate</CardTitle>
          <CardDescription>Monthly order completion rate</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <GaugeChart value={91} max={100} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
