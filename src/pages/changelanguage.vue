<template>
  <div class='wrapper'>
    <div class='chart' id='chart'></div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      country:{
        "Afghanistan": "阿富汗",
        "Angola": "安哥拉",
        "Albania": "阿尔巴尼亚",
        "Algeria": "阿尔及利亚",
        "Argentina": "阿根廷",
        "Armenia": "亚美尼亚",
        "Australia": "澳大利亚",
        "Austria": "奥地利",
        "Azerbaijan": "阿塞拜疆",
        "Bahamas": "巴哈马",
        "Bangladesh": "孟加拉国",
        "Belgium": "比利时",
        "Benin": "贝宁",
        "Burkina Faso": "布基纳法索",
        "Burundi": "布隆迪",
        "Bulgaria": "保加利亚",
        "Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
        "Belarus": "白俄罗斯",
        "Belize": "伯利兹",
        "Bermuda": "百慕大群岛",
        "Bolivia": "玻利维亚",
        "Brazil": "巴西",
        "Brunei": "文莱",
        "Bhutan": "不丹",
        "Botswana": "博茨瓦纳",
        "Cambodia": "柬埔寨",
        "Cameroon": "喀麦隆",
        "Canada": "加拿大",
        "Central African Rep.": "中非共和国",
        "Chad": "乍得",
        "Chile": "智利",
        "China": "中国",
        "Colombia": "哥伦比亚",
        "Congo": "刚果",
        "Costa Rica": "哥斯达黎加",
        "Côte d'Ivoire": "科特迪瓦",
        "Croatia": "克罗地亚",
        "Cuba": "古巴",
        "Cyprus": "塞浦路斯",
        "Czech Rep.": "捷克共和国",
        "Dem. Rep. Korea": "韩国",
        "Dem. Rep. Congo": "民主刚果",
        "Denmark": "丹麦",
        "Djibouti": "吉布提",
        "Dominican Rep.": "多米尼加共和国",
        "Ecuador": "厄瓜多尔",
        "Egypt": "埃及",
        "El Salvador": "萨尔瓦多",
        "Eq. Guinea": "赤道几内亚",
        "Eritrea": "厄立特里亚",
        "Estonia": "爱沙尼亚",
        "Ethiopia": "埃塞俄比亚",
        "Falkland Is.": "福克兰群岛",
        "Fiji": "斐济",
        "Finland": "芬兰",
        "France": "法国",
        "French Guiana": "法属圭亚那",
        "Fr. S. Antarctic Lands": "法属南部领地",
        "Gabon": "加蓬",
        "Gambia": "冈比亚",
        "Germany": "德国",
        "Georgia": "佐治亚州",
        "Ghana": "加纳",
        "Greece": "希腊",
        "Greenland": "格陵兰",
        "Guatemala": "危地马拉",
        "Guinea": "几内亚",
        "Guinea-Bissau": "几内亚比绍",
        "Guyana": "圭亚那",
        "Haiti": "海地",
        "Heard I. and McDonald Is.": "赫德岛和麦克唐纳群岛",
        "Honduras": "洪都拉斯",
        "Hungary": "匈牙利",
        "Iceland": "冰岛",
        "India": "印度",
        "Indonesia": "印度尼西亚",
        "Iran": "伊朗",
        "Iraq": "伊拉克",
        "Ireland": "爱尔兰",
        "Israel": "以色列",
        "Italy": "意大利",
        "Ivory Coast": "象牙海岸",
        "Jamaica": "牙买加",
        "Japan": "日本",
        "Jordan": "乔丹",
        "Kashmir": "克什米尔",
        "Kazakhstan": "哈萨克斯坦",
        "Kenya": "肯尼亚",
        "Kosovo": "科索沃",
        "Kuwait": "科威特",
        "Kyrgyzstan": "吉尔吉斯斯坦",
        "Laos": "老挝",
        "Lao PDR": "老挝人民民主共和国",
        "Latvia": "拉脱维亚",
        "Lebanon": "黎巴嫩",
        "Lesotho": "莱索托",
        "Liberia": "利比里亚",
        "Libya": "利比亚",
        "Lithuania": "立陶宛",
        "Luxembourg": "卢森堡",
        "Madagascar": "马达加斯加",
        "Macedonia": "马其顿",
        "Malawi": "马拉维",
        "Malaysia": "马来西亚",
        "Mali": "马里",
        "Mauritania": "毛里塔尼亚",
        "Mexico": "墨西哥",
        "Moldova": "摩尔多瓦",
        "Mongolia": "蒙古",
        "Montenegro": "黑山",
        "Morocco": "摩洛哥",
        "Mozambique": "莫桑比克",
        "Myanmar": "缅甸",
        "Namibia": "纳米比亚",
        "Netherlands": "荷兰",
        "New Caledonia": "新喀里多尼亚",
        "New Zealand": "新西兰",
        "Nepal": "尼泊尔",
        "Nicaragua": "尼加拉瓜",
        "Niger": "尼日尔",
        "Nigeria": "尼日利亚",
        "Korea": "朝鲜",
        "Northern Cyprus": "北塞浦路斯",
        "Norway": "挪威",
        "Oman": "阿曼",
        "Pakistan": "巴基斯坦",
        "Panama": "巴拿马",
        "Papua New Guinea": "巴布亚新几内亚",
        "Paraguay": "巴拉圭",
        "Peru": "秘鲁",
        "Republic of the Congo": "刚果共和国",
        "Philippines": "菲律宾",
        "Poland": "波兰",
        "Portugal": "葡萄牙",
        "Puerto Rico": "波多黎各",
        "Qatar": "卡塔尔",
        "Republic of Serbia": "塞尔维亚共和国",
        "Romania": "罗马尼亚",
        "Russia": "俄罗斯",
        "Rwanda": "卢旺达",
        "Samoa": "萨摩亚",
        "Saudi Arabia": "沙特阿拉伯",
        "Senegal": "塞内加尔",
        "Serbia": "塞尔维亚",
        "Sierra Leone": "塞拉利昂",
        "Slovakia": "斯洛伐克",
        "Slovenia": "斯洛文尼亚",
        "Solomon Is.": "所罗门群岛",
        "Somaliland": "索马里兰",
        "Somalia": "索马里",
        "South Africa": "南非",
        "S. Geo. and S. Sandw. Is.": "南乔治亚和南桑德威奇群岛",
        "S. Sudan": "南苏丹",
        "Spain": "西班牙",
        "Sri Lanka": "斯里兰卡",
        "Sudan": "苏丹",
        "Suriname": "苏里南",
        "Swaziland": "斯威士兰",
        "Sweden": "瑞典",
        "Switzerland": "瑞士",
        "Syria": "叙利亚",
        "Tajikistan": "塔吉克斯坦",
        "Tanzania": "坦桑尼亚",
        "Thailand": "泰国",
        "Timor-Leste": "东帝汶",
        "Togo": "多哥",
        "Trinidad and Tobago": "特立尼达和多巴哥",
        "Tunisia": "突尼斯",
        "Turkey": "土耳其",
        "Turkmenistan": "土库曼斯坦",
        "Uganda": "乌干达",
        "Ukraine": "乌克兰",
        "United Arab Emirates": "阿拉伯联合酋长国",
        "United Kingdom": "大不列颠联合王国",
        "United Republic of Tanzania": "坦桑尼亚联合共和国",
        "United States": "美国",
        "United States of America": "美利坚合众国",
        "Uruguay": "乌拉圭",
        "Uzbekistan": "乌兹别克斯坦",
        "Vanuatu": "瓦努阿图",
        "Venezuela": "委内瑞拉",
        "Vietnam": "越南",
        "West Bank": "西岸",
        "W. Sahara": "西撒哈拉",
        "Yemen": "也门",
        "Zambia": "赞比亚",
        "Zimbabwe": "津巴布韦"
      },
      countryValue: [
        {
          "name": "阿富汗",
          "value": 28397.812,
          label:{
            show:false
          }
        },
        {
          "name": "安哥拉",
          "value": 19549.124,
          label:{
            show:false
          }
        },
        {
          "name": "阿尔巴尼亚",
          "value": 3150.143,
          label:{
            show:false
          }
        },
        {
          "name": "阿尔及利亚",
          "value": 8441.537,
          label:{
            show:false
          }
        },
        {
          "name": "阿根廷",
          "value": 40374.224,
          label:{
            show:false
          }
        },
        {
          "name": "亚美尼亚",
          "value": 2963.496,
          label:{
            show:false
          }
        },
        {
          "name": "澳大利亚",
          "value": 268.065,
          label:{
            show:false
          }
        },
        {
          "name": "奥地利",
          "value": 22404.488,
          label:{
            show:false
          }
        },
        {
          "name": "阿塞拜疆",
          "value": 8401.924,
          label:{
            show:false
          }
        },
        {
          "name": "布隆迪",
          "value": 9094.718,
          label:{
            show:false
          }
        },
        {
          "name": "比利时",
          "value": 9232.753,
          label:{
            show:false
          }
        },
        {
          "name": "贝宁",
          "value": 10941.288,
          label:{
            show:false
          }
        },
        {
          "name": "布基纳法索",
          "value": 9509.798,
          label:{
            show:false
          }
        },
        {
          "name": "孟加拉国",
          "value": 15540.284,
          label:{
            show:false
          }
        },
        {
          "name": "保加利亚",
          "value": 151125.475,
          label:{
            show:false
          }
        },
        {
          "name": "波斯尼亚和黑塞哥维那",
          "value": 7389.175,
          label:{
            show:false
          }
        },
        {
          "name": "白俄罗斯",
          "value": 66402.316,
          label:{
            show:false
          }
        },
        {
          "name": "伯利兹",
          "value": 3845.929,
          label:{
            show:false
          }
        },
        {
          "name": "百慕大群岛",
          "value": 9491.07,
          label:{
            show:false
          }
        },
        {
          "name": "玻利维亚",
          "value": 308.595,
          label:{
            show:false
          }
        },
        {
          "name": "巴西",
          "value": 64.951,
          label:{
            show:false
          }
        },
        {
          "name": "文莱",
          "value": 716.939,
          label:{
            show:false
          }
        },
        {
          "name": "不丹",
          "value": 195210.154,
          label:{
            show:false
          }
        },
        {
          "name": "博茨瓦纳",
          "value": 27.223,
          label:{
            show:false
          }
        },
        {
          "name": "柬埔寨",
          "value": 716.939,
          label:{
            show:false
          }
        },
        {
          "name": "喀麦隆",
          "value": 1969.341,
          label:{
            show:false
          }
        },
        {
          "name": "加拿大",
          "value": 4349.921,
          label:{
            show:false
          }
        },
        {
          "name": "中非共和国",
          "value": 34126.24,
          label:{
            show:false
          }
        },
        {
          "name": "乍得",
          "value": 7830.534,
          label:{
            show:false
          }
        },
        {
          "name": "智利",
          "value": 17150.76,
          label:{
            show:false
          }
        },
        {
          "name": "中国",
          "value": 1359821.465,
          label:{
            show:true
          }
        },
        {
          "name": "哥伦比亚",
          "value": 60508.978,
          label:{
            show:false
          }
        },
        {
          "name": "刚果",
          "value": 17150.343,
          label:{
            show:false
          }
        },
        {
          "name": "科特迪瓦",
          "value": 17150.343,
          label:{
            show:false
          }
        },
        {
          "name": "哥斯达黎加",
          "value": 20624.343,
          label:{
            show:false
          }
        },
        {
          "name": "克罗地亚",
          "value": 62191.161,
          label:{
            show:false
          }
        },
        {
          "name": "古巴",
          "value": 3573.024,
          label:{
            show:false
          }
        },
        {
          "name": "塞浦路斯",
          "value": 46444.798,
          label:{
            show:false
          }
        },
        {
          "name": "捷克共和国",
          "value": 4669.685,
          label:{
            show:false
          }
        },
        {
          "name": "民主刚果",
          "value": 11281.768,
          label:{
            show:false
          }
        },
        {
          "name": "丹麦",
          "value": 1.468,
          label:{
            show:false
          }
        },
        {
          "name": "吉布提",
          "value": 1103.685,
          label:{
            show:false
          }
        },
        {
          "name": "多米尼加共和国",
          "value": 10553.701,
          label:{
            show:false
          }
        },
        {
          "name": "东帝汶",
          "value": 83017.404,
          label:{
            show:false
          }
        },
        {
          "name": "厄瓜多尔",
          "value": 834.036,
          label:{
            show:false
          }
        },
        {
          "name": "埃及",
          "value": 5550.959,
          label:{
            show:false
          }
        },
        {
          "name": "萨尔瓦多",
          "value": 10016.797,
          label:{
            show:false
          }
        },
        {
          "name": "赤道几内亚",
          "value": 37062.82,
          label:{
            show:false
          }
        },
        {
          "name": "厄立特里亚",
          "value": 15001.072,
          label:{
            show:false
          }
        },
        {
          "name": "爱沙尼亚",
          "value": 78075.705,
          label:{
            show:false
          }
        },
        {
          "name": "埃塞俄比亚",
          "value": 5741.159,
          label:{
            show:false
          }
        },
        {
          "name": "福克兰群岛",
          "value": 46182.038,
          label:{
            show:false
          }
        },
        {
          "name": "斐济",
          "value": 1298.533,
          label:{
            show:false
          }
        },
        {
          "name": "芬兰",
          "value": 87095.281,
          label:{
            show:false
          }
        },
        {
          "name": "法国",
          "value": 5367.693,
          label:{
            show:false
          }
        },
        {
          "name": "法属圭亚那",
          "value": 860.559,
          label:{
            show:false
          }
        },
        {
          "name": "法属南部领地",
          "value": 49.581,
          label:{
            show:false
          }
        },
        {
          "name": "加蓬",
          "value": 63230.866,
          label:{
            show:false
          }
        },
        {
          "name": "冈比亚",
          "value": 1556.222,
          label:{
            show:false
          }
        },
        {
          "name": "德国",
          "value": 62066.35,
          label:{
            show:false
          }
        },
        {
          "name": "佐治亚州",
          "value": 4388.674,
          label:{
            show:false
          }
        },
        {
          "name": "加纳",
          "value": 24262.901,
          label:{
            show:false
          }
        },
        {
          "name": "希腊",
          "value": 10876.033,
          label:{
            show:false
          }
        },
        {
          "name": "格陵兰",
          "value": 1680.64,
          label:{
            show:false
          }
        },
        {
          "name": "危地马拉",
          "value": 10876.033,
          label:{
            show:false
          }
        },
        {
          "name": "几内亚",
          "value": 696.167,
          label:{
            show:false
          }
        },
        {
          "name": "几内亚比绍",
          "value": 11109.999,
          label:{
            show:false
          }
        },
        {
          "name": "圭亚那",
          "value": 56.546,
          label:{
            show:false
          }
        },
        {
          "name": "海地",
          "value": 14341.576,
          label:{
            show:false
          }
        },
        {
          "name": "赫德岛和麦克唐纳群岛",
          "value": 4338.027,
          label:{
            show:false
          }
        },
        {
          "name": "洪都拉斯",
          "value": 231.169,
          label:{
            show:false
          }
        },
        {
          "name": "匈牙利",
          "value": 786.126,
          label:{
            show:false
          }
        },
        {
          "name": "冰岛",
          "value": 7621.204,
          label:{
            show:false
          }
        },
        {
          "name": "印度",
          "value": 4338.027,
          label:{
            show:false
          }
        },
        {
          "name": "印度尼西亚",
          "value": 9896.4,
          label:{
            show:false
          }
        },
        {
          "name": "伊朗",
          "value": 10014.633,
          label:{
            show:false
          }
        },
        {
          "name": "伊拉克",
          "value": 240676.485,
          label:{
            show:false
          }
        },
        {
          "name": "爱尔兰",
          "value": 15624.648,
          label:{
            show:false
          }
        },
        {
          "name": "以色列",
          "value": 4467.561,
          label:{
            show:false
          }
        },
        {
          "name": "意大利",
          "value": 240676.485,
          label:{
            show:false
          }
        },
        {
          "name": "象牙海岸",
          "value": 30962.38,
          label:{
            show:false
          }
        },
        {
          "name": "牙买加",
          "value": 318.042,
          label:{
            show:false
          }
        },
        {
          "name": "日本",
          "value": 7420.368,
          label:{
            show:false
          }
        },
        {
          "name": "乔丹",
          "value": 60508.978,
          label:{
            show:false
          }
        },
        {
          "name": "克什米尔",
          "value": 15921.485,
          label:{
            show:false
          }
        },
        {
          "name": "哈萨克斯坦",
          "value": 2741.485,
          label:{
            show:false
          }
        },
        {
          "name": "肯尼亚",
          "value": 6454.554,
          label:{
            show:false
          }
        },
        {
          "name": "科索沃",
          "value": 127352.833,
          label:{
            show:false
          }
        },
        {
          "name": "科威特",
          "value": 15921.127,
          label:{
            show:false
          }
        },
        {
          "name": "吉尔吉斯斯坦",
          "value": 40909.194,
          label:{
            show:false
          }
        },
        {
          "name": "老挝",
          "value": 5334.223,
          label:{
            show:false
          }
        },
        {
          "name": "老挝人民民主共和国",
          "value": 127352.833,
          label:{
            show:false
          }
        },
        {
          "name": "拉脱维亚",
          "value": 14364.931,
          label:{
            show:false
          }
        },
        {
          "name": "黎巴嫩",
          "value": 51452.352,
          label:{
            show:false
          }
        },
        {
          "name": "莱索托",
          "value": 97.743,
          label:{
            show:false
          }
        },
        {
          "name": "利比里亚",
          "value": 2991.58,
          label:{
            show:false
          }
        },
        {
          "name": "利比亚",
          "value": 6395.713,
          label:{
            show:false
          }
        },
        {
          "name": "立陶宛",
          "value": 4341.092,
          label:{
            show:false
          }
        },
        {
          "name": "卢森堡",
          "value": 3957.99,
          label:{
            show:false
          }
        },
        {
          "name": "马达加斯加",
          "value": 6040.612,
          label:{
            show:false
          }
        },
        {
          "name": "马其顿",
          "value": 20758.779,
          label:{
            show:false
          }
        },
        {
          "name": "马拉维",
          "value": 2008.921,
          label:{
            show:false
          }
        },
        {
          "name": "马来西亚",
          "value": 3068.457,
          label:{
            show:false
          }
        },
        {
          "name": "马里",
          "value": 507.885,
          label:{
            show:false
          }
        },
        {
          "name": "毛里塔尼亚",
          "value": 2090.519,
          label:{
            show:false
          }
        },
        {
          "name": "墨西哥",
          "value": 31642.36,
          label:{
            show:false
          }
        },
        {
          "name": "摩尔多瓦",
          "value": 103.619,
          label:{
            show:false
          }
        },
        {
          "name": "蒙古",
          "value": 21079.532,
          label:{
            show:false
          }
        },
        {
          "name": "黑山",
          "value": 117886.404,
          label:{
            show:false
          }
        },
        {
          "name": "摩洛哥",
          "value": 507.885,
          label:{
            show:false
          }
        },
        {
          "name": "莫桑比克",
          "value": 13985.961,
          label:{
            show:false
          }
        },
        {
          "name": "缅甸",
          "value": 51931.231,
          label:{
            show:false
          }
        },
        {
          "name": "纳米比亚",
          "value": 620.078,
          label:{
            show:false
          }
        },
        {
          "name": "荷兰",
          "value": 2712.738,
          label:{
            show:false
          }
        },
        {
          "name": "新喀里多尼亚",
          "value": 23967.265,
          label:{
            show:false
          }
        },
        {
          "name": "新西兰",
          "value": 3609.42,
          label:{
            show:false
          }
        },
        {
          "name": "尼泊尔",
          "value": 15013.694,
          label:{
            show:false
          }
        },
        {
          "name": "尼加拉瓜",
          "value": 28275.835,
          label:{
            show:false
          }
        },
        {
          "name": "尼日尔",
          "value": 2178.967,
          label:{
            show:false
          }
        },
        {
          "name": "尼日利亚",
          "value": 246.379,
          label:{
            show:false
          }
        },
        {
          "name": "朝鲜",
          "value": 15893.746,
          label:{
            show:false
          }
        },
        {
          "name": "北塞浦路斯",
          "value": 159707.78,
          label:{
            show:false
          }
        },
        {
          "name": "挪威",
          "value": 5822.209,
          label:{
            show:false
          }
        },
        {
          "name": "阿曼",
          "value": 16615.243,
          label:{
            show:false
          }
        },
        {
          "name": "巴基斯坦",
          "value": 4891.251,
          label:{
            show:false
          }
        },
        {
          "name": "巴拿马",
          "value": 26846.016,
          label:{
            show:false
          }
        },
        {
          "name": "巴布亚新几内亚",
          "value": 4368.136,
          label:{
            show:false
          }
        },
        {
          "name": "巴拉圭",
          "value": 2802.768,
          label:{
            show:false
          }
        },
        {
          "name": "秘鲁",
          "value": 173149.306,
          label:{
            show:false
          }
        },
        {
          "name": "刚果共和国",
          "value": 3678.128,
          label:{
            show:false
          }
        },
        {
          "name": "菲律宾",
          "value": 29262.83,
          label:{
            show:false
          }
        },
        {
          "name": "波兰",
          "value": 93444.322,
          label:{
            show:false
          }
        },
        {
          "name": "葡萄牙",
          "value": 6858.945,
          label:{
            show:false
          }
        },
        {
          "name": "波多黎各",
          "value": 38198.754,
          label:{
            show:false
          }
        },
        {
          "name": "卡塔尔",
          "value": 3709.671,
          label:{
            show:false
          }
        },
        {
          "name": "塞尔维亚共和国",
          "value": 1.468,
          label:{
            show:false
          }
        },
        {
          "name": "罗马尼亚",
          "value": 10589.792,
          label:{
            show:false
          }
        },
        {
          "name": "俄罗斯",
          "value": 6459.721,
          label:{
            show:false
          }
        },
        {
          "name": "卢旺达",
          "value": 1749.713,
          label:{
            show:false
          }
        },
        {
          "name": "萨摩亚",
          "value": 11749.713,
          label:{
            show:false
          }
        },
        {
          "name": "沙特阿拉伯",
          "value": 21861.476,
          label:{
            show:false
          }
        },
        {
          "name": "塞内加尔",
          "value": 21861.476,
          label:{
            show:false
          }
        },
        {
          "name": "塞尔维亚",
          "value": 18862.257,
          label:{
            show:false
          }
        },
        {
          "name": "塞拉利昂",
          "value": 10836.732,
          label:{
            show:false
          }
        },
        {
          "name": "斯洛伐克",
          "value": 514.648,
          label:{
            show:false
          }
        },
        {
          "name": "斯洛文尼亚",
          "value": 27258.387,
          label:{
            show:false
          }
        },
        {
          "name": "所罗门群岛",
          "value": 35652.002,
          label:{
            show:false
          }
        },
        {
          "name": "索马里兰",
          "value": 9940.929,
          label:{
            show:false
          }
        },
        {
          "name": "索马里",
          "value": 12950.564,
          label:{
            show:false
          }
        },
        {
          "name": "南非",
          "value": 526.447,
          label:{
            show:false
          }
        },
        {
          "name": "南乔治亚和南桑德威奇群岛",
          "value": 6218.195,
          label:{
            show:false
          }
        },
        {
          "name": "韩国",
          "value": 5751.976,
          label:{
            show:false
          }
        },
        {
          "name": "南苏丹",
          "value": 6218.195,
          label:{
            show:false
          }
        },
        {
          "name": "西班牙",
          "value": 9636.173,
          label:{
            show:false
          }
        },
        {
          "name": "斯里兰卡",
          "value": 9636.173,
          label:{
            show:false
          }
        },
        {
          "name": "苏丹",
          "value": 3573.024,
          label:{
            show:false
          }
        },
        {
          "name": "苏里南",
          "value": 524.96,
          label:{
            show:false
          }
        },
        {
          "name": "斯威士兰",
          "value": 5433.437,
          label:{
            show:false
          }
        },
        {
          "name": "瑞典",
          "value": 2054.232,
          label:{
            show:false
          }
        },
        {
          "name": "瑞士",
          "value": 9382.297,
          label:{
            show:false
          }
        },
        {
          "name": "叙利亚",
          "value": 1193.148,
          label:{
            show:false
          }
        },
        {
          "name": "塔吉克斯坦",
          "value": 7830.534,
          label:{
            show:false
          }
        },
        {
          "name": "坦桑尼亚",
          "value": 9876.785,
          label:{
            show:false
          }
        },
        {
          "name": "泰国",
          "value": 11720.781,
          label:{
            show:false
          }
        },
        {
          "name": "巴哈马",
          "value": 6306.014,
          label:{
            show:false
          }
        },
        {
          "name": "多哥",
          "value": 66402.316,
          label:{
            show:false
          }
        },
        {
          "name": "特立尼达和多巴哥",
          "value": 7627.326,
          label:{
            show:false
          }
        },
        {
          "name": "突尼斯",
          "value": 5041.995,
          label:{
            show:false
          }
        },
        {
          "name": "土耳其",
          "value": 10016.797,
          label:{
            show:false
          }
        },
        {
          "name": "土库曼斯坦",
          "value": 1328.095,
          label:{
            show:false
          }
        },
        {
          "name": "乌干达",
          "value": 10631.83,
          label:{
            show:false
          }
        },
        {
          "name": "乌克兰",
          "value": 72137.546,
          label:{
            show:false
          }
        },
        {
          "name": "阿拉伯联合酋长国",
          "value": 44973.33,
          label:{
            show:false
          }
        },
        {
          "name": "大不列颠联合王国",
          "value": 33987.213,
          label:{
            show:false
          }
        },
        {
          "name": "坦桑尼亚联合共和国",
          "value": 46050.22,
          label:{
            show:false
          }
        },
        {
          "name": "美国",
          "value": 3371.982,
          label:{
            show:true
          }
        },
        {
          "name": "美利坚合众国",
          "value": 312247.116,
          label:{
            show:false
          }
        },
        {
          "name": "乌拉圭",
          "value": 27769.27,
          label:{
            show:false
          }
        },
        {
          "name": "乌兹别克斯坦",
          "value": 236.299,
          label:{
            show:false
          }
        },
        {
          "name": "瓦努阿图",
          "value": 89047.397,
          label:{
            show:false
          }
        },
        {
          "name": "委内瑞拉",
          "value": 236.299,
          label:{
            show:false
          }
        },
        {
          "name": "越南",
          "value": 13.565,
          label:{
            show:false
          }
        },
        {
          "name": "西岸",
          "value": 22763.008,
          label:{
            show:false
          }
        },
        {
          "name": "西撒哈拉",
          "value": 51452.352,
          label:{
            show:false
          }
        },
        {
          "name": "也门",
          "value": 13216.985,
          label:{
            show:false
          }
        },
        {
          "name": "赞比亚",
          "value": 13076.978,
          label:{
            show:false
          }
        },
        {
          "name": "津巴布韦",
          "value": 11056.426,
          label:{
            show:false
          }
        }
      ]
    }
  },
  mounted () {
    this.drawChart()
  },
  methods: {
    drawChart () {
      var self=this
      // 基于准备好的dom，初始化echarts实例
      let chart = this.$echarts.init(document.getElementById('chart'))
      // 监听屏幕变化自动缩放图表
      window.addEventListener('resize', function () {
        chart.resize()
      })
      // 绘制图表
      chart.setOption({
        // 图表主标题
        title: {
          text: '', // 主标题文本，支持使用 \n 换行
          top: 20, // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
          left: 'center', // 值: 'left', 'center', 'right' 同上
          textStyle: { // 文本样式
            fontSize: 24,
            fontWeight: 600,
            color: '#fff'
          }
        },
        // 提示框组件
        tooltip: {
          trigger: 'item', // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用
        },
        dataRange: {
          x: '-1000 px', //图例横轴位置
          y: '-1000 px', //图例纵轴位置
          splitList: [
              { start: 1359821.464, end:1359821.466, label:"中国", color: '#af847a' },
              { start: 3371.981, end:3371.983, label:"美国", color: '#af847a' },
        ]},
        series: [
          {
            type: 'map', // 类型
            // 系列名称，用于tooltip的显示，legend 的图例筛选 在 setOption 更新数据和配置项时用于指定对应的系列
            name: '',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            mapType: 'world', // 地图类型
            // 是否开启鼠标缩放和平移漫游 默认不开启 如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move' 设置成 true 为都开启
            roam: true,
            // 图形上的文本标签
            label:{
              normal: {
                  show: false // 是否显示对应地名
               },
              emphasis:{
                show: false // 是否显示对应地名
              }
            },
            // 地图区域的多边形 图形样式
            itemStyle:{ 
              normal: {
                        // borderWidth: .5, //区域边框宽度
                        // borderColor: '#000', //区域边框颜色
                        // areaColor: "#af847a", //区域颜色
                        label:{
                          show:false
                        }
                    },
            emphasis: {
                        // borderWidth: .5,
                        // borderColor: '#4b0082',
                        // areaColor: "#db5e3e",
                        label:{
                          show:false
                        }
                    }
            },
            // 自定义地区的名称映射
            nameMap:this.country,
            // 地图系列中的数据内容数组 数组项可以为单个数值
            data: this.countryValue,
         },
         
        ],
      })
        chart.on("click",function(param){
          var value=param.name
          self.$router.push({name:'index',params:{countryid:value}})
        })
    }
    
  }
}
</script>

<style scoped>
  .wrapper {
    width: 100%;
  }
  .wrapper .chart {
    width: 90%;
    height: 600px;
    margin: 5rem auto;
    border: 1px solid #eeeeee;
    background-color:#f3f3f3;
    background-size: 100% 100%;
  }
</style>
