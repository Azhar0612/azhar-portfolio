export const playgroundInitialData = {
  regions: ["All", "North", "South", "East", "West"],
  categories: ["All", "Technology", "Furniture", "Office Supplies"],
  monthlyTrends: {
    "All": {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      sales: [42000, 38000, 51000, 47000, 63000, 59000, 72000, 68000, 84000, 91000, 115000, 128000],
      profit: [8400, 7200, 10200, 9400, 13800, 12400, 15800, 14900, 18400, 20900, 26400, 29800]
    },
    "North": {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      sales: [12000, 10500, 15000, 13500, 18000, 17000, 21000, 19500, 24000, 27000, 33000, 37000],
      profit: [2400, 2100, 3150, 2700, 3960, 3570, 4620, 4290, 5280, 6210, 7590, 8880]
    },
    "South": {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      sales: [8500, 7800, 10200, 9500, 12500, 11800, 14200, 13500, 16800, 18200, 23000, 25500],
      profit: [1700, 1482, 2040, 1805, 2750, 2478, 3124, 2970, 3696, 4186, 5290, 5865]
    },
    "East": {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      sales: [11500, 10200, 13800, 12600, 17200, 16000, 19500, 18200, 22800, 24500, 31000, 34500],
      profit: [2300, 1938, 2760, 2394, 3784, 3360, 4290, 4004, 5016, 5635, 7130, 7935]
    },
    "West": {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      sales: [10000, 9500, 12000, 11400, 15300, 14200, 17300, 16800, 20400, 21300, 28000, 31000],
      profit: [2000, 1680, 2400, 2280, 3306, 2982, 3806, 3696, 4488, 4899, 6390, 7130]
    }
  },
  categoryShare: {
    "All": [
      { name: "Technology", sales: 345000, color: "#06b6d4" },
      { name: "Furniture", sales: 268000, color: "#6366f1" },
      { name: "Office Supplies", sales: 213000, color: "#10b981" }
    ],
    "Technology": [
      { name: "Phones", sales: 145000, color: "#06b6d4" },
      { name: "Accessories", sales: 110000, color: "#38bdf8" },
      { name: "Copiers", sales: 90000, color: "#0284c7" }
    ],
    "Furniture": [
      { name: "Chairs", sales: 118000, color: "#6366f1" },
      { name: "Tables", sales: 85000, color: "#818cf8" },
      { name: "Bookcases", sales: 65000, color: "#4f46e5" }
    ],
    "Office Supplies": [
      { name: "Storage", sales: 92000, color: "#10b981" },
      { name: "Paper", sales: 71000, color: "#34d399" },
      { name: "Binders", sales: 50000, color: "#059669" }
    ]
  },
  kpiStats: {
    "All": { totalSales: "$826,000", totalProfit: "$168,120", profitMargin: "20.35%", totalOrders: 3412, avgOrderValue: "$242.08" },
    "North": { totalSales: "$248,000", totalProfit: "$50,860", profitMargin: "20.50%", totalOrders: 1024, avgOrderValue: "$242.18" },
    "South": { totalSales: "$167,000", totalProfit: "$33,475", profitMargin: "20.04%", totalOrders: 695, avgOrderValue: "$240.28" },
    "East": { totalSales: "$222,400", totalProfit: "$45,246", profitMargin: "20.34%", totalOrders: 918, avgOrderValue: "$242.26" },
    "West": { totalSales: "$188,600", totalProfit: "$38,539", profitMargin: "20.43%", totalOrders: 775, avgOrderValue: "$243.35" }
  }
};
