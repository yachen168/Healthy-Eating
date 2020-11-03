const recommendedDailyIntake = {
  grains: {
    name: "全穀雜糧類",
    items: [
      { name: "糙米飯(熟)", quantity: "12份(3 碗)", weight: 50 },
      { name: "雜糧飯(熟)", quantity: "1/4 碗", weight: 50 },
      { name: "白米飯(熟)", quantity: "1/4 碗", weight: 50 },
      { name: "粥", quantity: "1/2 碗", weight: 125 },
      { name: "麵條(熟)", quantity: "1/2 碗", weight: 60 },
      { name: "芋頭", quantity: "3~4 塊", weight: 55 },
      { name: "蕃薯(小)", quantity: "1/2 個", weight: 55 },
      { name: "馬鈴薯(中)", quantity: "220", weight: 360 },
      { name: "玉米", quantity: "1/3 根", weight: null }
    ]
  },
  proteins: {
    name: "豆魚蛋肉類",
    items: [
      { name: "雞蛋", quantity: "1 顆", weight: 55 },
      { name: "豆皮(生)", quantity: "", weight: 15 },
      { name: "豆漿", quantity: "1 杯", weight: 260 },
      { name: "傳統豆腐", quantity: "", weight: 80 }
    ]
  },
  dairy: {
    name: "奶品類",
    items: [
      { name: "鮮奶", quantity: "1 杯", weight: 240 },
      { name: "奶粉", quantity: "4 湯匙", weight: 30 }
    ]
  },
  vegetables: {
    name: "蔬菜類",
    items: [
      { name: "小黃瓜", quantity: "", weight: 100 },
      { name: "高麗菜", quantity: "", weight: 100 },
      { name: "空心菜", quantity: "", weight: 100 },
      { name: "苦瓜", quantity: "", weight: 100 },
      { name: "金針菇", quantity: "", weight: 100 }
    ]
  },
  fruits: {
    name: "水果類",
    items: [
      { name: "蘋果(小)", quantity: "1 顆", weight: 120 },
      { name: "聖女番茄", quantity: "23 個", weight: 175 },
      { name: "荔枝", quantity: "9 個", weight: 100 },
      { name: "草莓", quantity: "", weight: 160 }
    ]
  },
  nuts: {
    name: "油脂及堅果種子類",
    items: [
      { name: "油", quantity: "1 茶匙", weight: 5 },
      { name: "杏仁果", quantity: "5 粒", weight: 7 },
      { name: "開心果", quantity: "10 粒", weight: 7 }
    ]
  }
};

const nutritionalConversionList = {
  grains: {
    name: "全穀雜糧類",
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
    items: [
      { name: "雞蛋", quantity: "1 顆", weight: 55 },
      { name: "豆皮(生)", quantity: "", weight: 15 },
      { name: "豆漿", quantity: "1 杯", weight: 260 },
      { name: "傳統豆腐", quantity: "", weight: 80 },
      { name: "嫩豆腐", quantity: "1/2 盒", weight: 140 },
      { name: "黃豆", quantity: "", weight: 20 },
      { name: "魚丸", quantity: "", weight: 50 }
    ]
  },
  dairy: {
    name: "奶品類",
    items: [
      { name: "鮮奶", quantity: "1 杯", weight: 240 },
      { name: "奶粉", quantity: "4 湯匙", weight: 30 }
    ]
  },
  vegetables: {
    name: "蔬菜類",
    items: [
      { name: "小黃瓜", quantity: "", weight: 100 },
      { name: "高麗菜", quantity: "", weight: 100 },
      { name: "空心菜", quantity: "", weight: 100 },
      { name: "苦瓜", quantity: "", weight: 100 },
      { name: "金針菇", quantity: "", weight: 100 },
      { name: "花椰菜", quantity: "", weight: 100 },
      { name: "洋蔥", quantity: "", weight: 100 },
      { name: "茭白筍", quantity: "", weight: 100 },
      { name: "玉米筍", quantity: "", weight: 100 },
      { name: "青江菜", quantity: "", weight: 100 },
      { name: "地瓜葉", quantity: "", weight: 100 },
      { name: "茼蒿", quantity: "", weight: 100 },
      { name: "香菇", quantity: "", weight: 100 }
    ]
  },
  fruits: {
    name: "水果類",
    items: [
      { name: "蘋果(小)", quantity: "1 顆", weight: 120 },
      { name: "聖女番茄", quantity: "23 個", weight: 175 },
      { name: "荔枝", quantity: "9 個", weight: 100 },
      { name: "草莓", quantity: "", weight: 160 },
      { name: "香蕉(中)", quantity: "1 根", weight: 75 },
      { name: "鳳梨", quantity: "", weight: 130 },
      { name: "奇異果", quantity: "1 個", weight: 115 },
      { name: "葡萄", quantity: "13 個", weight: 105 },
      { name: "蓮霧", quantity: "2 個", weight: 170 },
      { name: "柳丁", quantity: "1 顆", weight: 130 },
      { name: "芭樂", quantity: "1 顆", weight: 155 },
      { name: "水梨", quantity: "3/4 顆", weight: 150 },
      { name: "水蜜桃(小)", quantity: "1 顆", weight: 145 },
      { name: "白柚", quantity: "2 片", weight: 165 },
      { name: "木瓜", quantity: "1/3 顆", weight: 120 },
      { name: "西瓜(黃)", quantity: "", weight: 195 },
      { name: "西瓜(紅)", quantity: "", weight: 250 },
      { name: "哈密瓜", quantity: "", weight: 195 }
    ]
  },
  nuts: {
    name: "油脂及堅果種子類",
    items: [
      { name: "油", quantity: "1 茶匙", weight: 5 },
      { name: "杏仁果", quantity: "5 粒", weight: 7 },
      { name: "開心果", quantity: "10 粒", weight: 7 },
      { name: "腰果", quantity: "5 粒", weight: 8 },
      { name: "南瓜子", quantity: "30 顆", weight: 8 },
      { name: "花生仁", quantity: "10 粒", weight: 8 },
      { name: "培根", quantity: "1 片", weight: 10 },
      { name: "鮮奶油", quantity: "1 茶匙", weight: 30 },
      { name: "酪梨", quantity: "1/6 個", weight: 30 }
    ]
  }
};

export default { recommendedDailyIntake, nutritionalConversionList };
