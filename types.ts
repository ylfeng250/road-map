export interface Route {
    "city": string,
    "area": string,
    "name": string,
    "distance": string,
    "ascent": string,
    "highlights": string[]
  }

const example = {
    routes:[{
        "city": "杭州",
        "name": "萧山三泉王村",
        "distance": "5.4km",
        "ascent": "300m",
        "highlights": [
          "龙泉，红心打卡点",
          "千年古樟树，红心好望角",
          "毓秀亭，玻璃栈道，牛泉，龙泉"
        ]
      }]
}