<!-- 左侧边栏组件-链接 -->

<template>
    <ul class="aside-link">
        <li class="aside-link-item" v-for="(item, index) in links" v-bind:key="index">
            <a class="aside-link-item-src" v-bind:href="item.href" target="_blank">
                <img class="aside-link-item-img" v-bind:src="item.src" />
            </a>
        </li>
    </ul>
</template>

<script>
    import src_github from '../assets/icon/github.png'
    import src_weibo from '../assets/icon/weibo.png'
    import src_zhihu from '../assets/icon/zhihu.png'
    import src_twitter from '../assets/icon/twitter.png'
    import src_mail from '../assets/icon/mail.png'

    export default {
        name: 'AsideLink',
        data() {
            return {
                links: [
                    {
                        src: src_github,
                        href: 'https://github.com/mnichangxin'
                    },
                    {
                        src: src_weibo,
                        href: 'http://weibo.com/123happylife'
                    },
                    {
                        src: src_zhihu,
                        href: 'https://www.zhihu.com/people/mnichangxin'
                    },
                    {
                        src: src_twitter,
                        href: 'https://twitter.com/mnichangxin'
                    },
                    {
                        src: src_mail,
                        href: 'mailto:mnichangxin@163.com'
                    }
                ]
            }
        }
    }
</script> 
