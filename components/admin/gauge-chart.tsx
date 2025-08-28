"use client"

interface GaugeChartProps {
  value: number
  max: number
  size?: number
}

export function GaugeChart({ value, max, size = 200 }: GaugeChartProps) {
  const percentage = (value / max) * 100
  const strokeWidth = 8
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  const getColor = (percentage: number) => {
    if (percentage >= 90) return "#22c55e" // green
    if (percentage >= 70) return "#fbbf24" // yellow
    return "#ef4444" // red
  }

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-muted/20"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor(percentage)}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold">{value}%</div>
          <div className="text-sm text-muted-foreground">Success Rate</div>
        </div>
      </div>
    </div>
  )
}
