/*
 * @Author: xiatian
 * @Date: 2020-04-14 11:14:40
 * @LastEditors: xiatian
 * @LastEditTime: 2020-05-13 10:44:49
 */
import routes from '@theme/utils/route'
import Mixin from '@theme/utils/mixin'
import Translation from '@theme/plugins/Translation'
import Blog from '@theme/plugins/Blog'
import customer from '@theme/plugins/PartyC/customer'
import baiDu from '@theme/plugins/PartyC/baiDu'
import Ant from 'ant-design-vue/es'
import Mermaid from '@theme/components/Mermaid'
import 'ant-design-vue/dist/antd.less'
import '@theme/styles/index.less'

export default ({ Vue, options, router, siteData }) => {
  Vue.use(routes, { router })
  Vue.use(Mixin)
  Vue.use(Translation)
  Vue.use(Blog)
  customer(router, siteData)
  baiDu(router, siteData)
  Vue.use(Ant)
  Vue.component('mermaid', Mermaid)
}

if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
  console.log('%c ','padding:400px 390px;background:url(https://s1.ax1x.com/2020/05/13/YakRZd.jpg) no-repeat;line-height:10px;height:1px;')
  console.log('\n%c(づ￣ ³￣)づヾ   Author：Tommy %c WelCome To - MyBlog \n', 'font-size:16px;color:rgba(80, 230, 215, 0.98); background: #030307; padding:5px 10px;', 'font-size:16px;color: #fadfa3;border-radius:25px;background: rgba(80,212,245,.534); padding:7px 0;')
  console.log('%c 感谢观看本博客 \n 如若有任何疑问，有任何感兴趣的地方，\n 都可以通过博客内%c crisp、%c 微博、%c 邮箱 、%c qq %c 联系我 \n 收到后会及时回复',' background: #030307;font-size:16px;color:#fff;padding:10px;','font-size:16px;padding:10px;color:rgba(80, 230, 215, 0.98);background: #030307;','font-size:16px;padding:10px;color:red;background: #030307;','font-size:16px;padding:10px;color:orange;background: #030307;','font-size:16px;padding:10px;color:#fff;background: #030307;',' background: #030307;font-size:16px;color:#fff;padding:10px;')

}else{
  console.log('%c ','padding:400px 390px;background:url(https://s1.ax1x.com/2020/05/13/YakRZd.jpg) no-repeat;line-height:10px;height:1px;')
  console.log('\n%c(づ￣ ³￣)づヾ   Author：Tommy %c WelCome To - MyBlog \n', 'font-size:16px;color:rgba(80, 230, 215, 0.98); background: #030307; padding:5px 10px;', 'font-size:16px;color: #fadfa3;border-radius:25px;background: rgba(80,212,245,.534); padding:7px 0;')
  console.log('%c 感谢观看本博客 \n 如若有任何疑问，有任何感兴趣的地方，\n 都可以通过博客内%c crisp、%c 微博、%c 邮箱 、%c qq %c 联系我 \n 收到后会及时回复',' background: #030307;font-size:16px;color:#fff;padding:10px;','font-size:16px;padding:10px;color:rgba(80, 230, 215, 0.98);background: #030307;','font-size:16px;padding:10px;color:red;background: #030307;','font-size:16px;padding:10px;color:orange;background: #030307;','font-size:16px;padding:10px;color:#fff;background: #030307;',' background: #030307;font-size:16px;color:#fff;padding:10px;')
}

