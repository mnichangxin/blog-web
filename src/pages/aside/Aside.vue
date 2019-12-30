<template>
    <div class="aside">
        <div class="aside-top">
            <div class="aside-avatar">
                <img v-bind:src="src_avatar" class="aside-avatar-img" />
            </div>
        </div>
        <div class="aside-bottom">
            <ul class="aside-text">
                <li class="aside-text-nickname">Shawn</li>
                <li class="aside-text-feature">一个无聊的人的小站</li>
            </ul>
            <ul class="aside-menu">
                <li>
                    <a title="首页"><i class="fa fa-home"></i></a>
                </li>
                <li>
                    <a><i class="fa fa-home"></i></a>
                </li>
                <li>
                    <a><i class="fa fa-tags"></i></a>
                </li>
                <li>
                    <a><i class="fa fa-photo"></i></a>
                </li>
                <li>
                    <a title="首页"><i class="fa fa-home"></i></a>
                </li>
                <li>
                    <a><i class="fa fa-home"></i></a>
                </li>
                <li>
                    <a><i class="fa fa-tags"></i></a>
                </li>
                <li>
                    <a><i class="fa fa-photo"></i></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import src_avatar from '@assets/icon/head.png'
    import src_github from '@assets/icon/github.png'
    import src_weibo from '@assets/icon/weibo.png'
    import src_zhihu from '@assets/icon/zhihu.png'
    import src_twitter from '@assets/icon/twitter.png'
    import src_mail from '@assets/icon/mail.png'

    export default {
        name: 'Aside',
        data () {
            return {
                src_avatar: src_avatar,
                category: [
                    '主页',
                    '前端',
                    '后端',
                    'Android',
                    'IOS',
                    '算法'
                ],
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
