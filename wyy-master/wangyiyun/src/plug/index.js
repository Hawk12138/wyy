import { Icon,Search,Tabbar,TabbarItem,Swipe, SwipeItem  } from 'vant';
// 放入数组中
let plugins=[
    Icon,Search,Tabbar,TabbarItem,Swipe, SwipeItem
]
export default function Vant(app){
    plugins.forEach((arr)=>{
        return app.use(arr)
    })
}
