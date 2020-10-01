const NutritionalConversionList = {
  grains: {
    name: "全穀雜糧類",
    description: "每份含蛋白質 2 克，醣類 15 克，熱量 70 大卡",
    items: [
      { name: "糙米飯(熟)", quantity: "1/4 碗", weight: 50 },
      { name: "雜糧飯(熟)", quantity: "1/4 碗", weight: 50 },
      { name: "白米飯(熟)", quantity: "1/4 碗", weight: 50 },
      { name: "粥", quantity: "1/2 碗", weight: 125 },
      { name: "麵條(熟)", quantity: "1/2 碗", weight: 60 },
      { name: "芋頭", quantity: "3~4 塊", weight: 55 },
      { name: "蕃薯(小)", quantity: "1/2 個", weight: 55 },
      { name: "馬鈴薯(中)", quantity: "1/2 個", weight: 90 },
      { name: "玉米", quantity: "1/3 根", weight: null },
      { name: "玉米粒", quantity: "1/2 杯", weight: 65 },
      { name: "紅豆(熟)", quantity: " 2 免洗匙", weight: null },
      { name: "綠豆(熟)", quantity: " 2 免洗匙", weight: null },
      { name: "土司", quantity: "1/2 片", weight: 25 },
      { name: "饅頭", quantity: " 1/3 個", weight: 30 },
      { name: "餐包(小)", quantity: " 1 個", weight: 25 },
      { name: "餃子皮", quantity: " 3 張", weight: 30 },
      { name: "小湯圓(無餡)", quantity: " 10 顆", weight: 30 },
      { name: "蘇打餅乾", quantity: " 3 片", weight: 60 }
    ]
  },
  proteins: {
    name: "豆魚蛋肉類",
    description: "每份含蛋白質 7 克，脂肪 5 克，熱量 75 大卡",
    list: []
  },
  dairy: {
    name: "奶品類",
    list: [
      "雞蛋 1 顆",
      "雞腿肉 (40 克)",
      "牡蠣(熟) 65 克",
      "花枝(熟) 40 克",
      "雞胸肉 (30 克)",
      "豆腐 1 塊 (30 克)"
    ]
  },
  description: "",
  vegetables: {
    name: "蔬菜類",
    description: "",
    list: ["生菜 100 克", "蔬菜(熟) 半碗"]
  },
  fruits: { name: "水果類", description: "", list: [] },
  nuts: { name: "油脂及堅果種子類", description: "", list: [] }
};

export default NutritionalConversionList;
