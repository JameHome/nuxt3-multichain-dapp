/**
 * Tailwind CSS 配置文件
 * 用于自定义 Tailwind CSS 的行为、主题和工具类生成
 */
export default {
    /**
     * content: 内容扫描配置
     * 告诉 Tailwind 的 JIT (Just-In-Time) 编译器要扫描哪些文件来查找类名的使用
     * 只有在这些文件中找到的类名才会被编译成最终的 CSS
     * 这是性能优化的关键，避免生成不必要的 CSS
     */
    content: [
        "./components/**/*.{js,vue,ts}",  // 扫描 components 目录下的所有 JS/Vue/TS 文件
        "./layouts/**/*.vue",             // 扫描 layouts 目录下的所有 Vue 文件
        "./pages/**/*.vue",               // 扫描 pages 目录下的所有 Vue 文件
        "./plugins/**/*.{js,ts}",         // 扫描 plugins 目录下的所有 JS/TS 文件
        "./nuxt.config.{js,ts}",          // 扫描 Nuxt 配置文件
        "./app.vue",                      // 扫描根应用文件
        // "./app.config.{js,ts}"            // 扫描应用配置文件
    ],

    /**
     * safelist: 安全列表配置
     * 强制包含特定的类名，即使它们没有在 content 指定的文件中被检测到
     * 用于解决动态生成类名、条件渲染类名等 JIT 编译器无法自动检测的情况
     * 这些类名会被无条件地包含在最终的 CSS 中
     */
    // safelist: [
    //     // 确保自定义颜色类被包含（背景、文字、边框、轮廓）
    //     'bg-brand-primary',      // 品牌主色背景
    //     'text-brand-primary',    // 品牌主色文字
    //     'border-brand-primary',  // 品牌主色边框
    //     'ring-brand-primary',    // 品牌主色轮廓
    //     'bg-brand-active',       // 品牌激活色背景
    //     'text-brand-active',     // 品牌激活色文字
    //     'bg-custom-gradient',    // 自定义渐变背景bg-brand-primary
    //     'ring-custom-border',    // 自定义边框轮廓
    //     'border-custom-border',  // 自定义边框颜色

    //     // 包含交互状态的类名（悬停、激活、焦点）
    //     'hover:bg-brand-primary', // 悬停时的品牌主色背景
    //     'active:bg-brand-active', // 激活时的品牌激活色背景
    //     'focus:ring-brand-primary' // 焦点时的品牌主色轮廓
    // ],

    /**
     * theme: 主题配置
     * 定义设计系统的基础要素，如颜色、字体、间距、断点等
     */
    theme: {
        /**
         * extend: 扩展默认主题
         * 在不覆盖 Tailwind 默认值的基础上添加自定义配置
         * 使用 extend 可以保留所有默认的 Tailwind 工具类
         */
        extend: {
            /**
             * colors: 自定义颜色配置
             * 定义项目特有的颜色，可以通过 bg-{name}、text-{name}、border-{name} 等方式使用
             */
            colors: {
                'gradient-from': 'rgba(18,18,18,0.25)',      // 渐变起始色（半透明深灰）
                'gradient-to': 'rgba(15,15,36,0.92)',        // 渐变结束色（深蓝紫色）
                'custom-border': 'rgba(39,39,39,1)',         // 自定义边框色（深灰）
                'brand-primary': 'rgba(79, 82, 255, 0.92)',  // 品牌主色（蓝紫色）
                'brand-active': 'rgba(255, 255, 255, 0.85)', // 品牌激活色（半透明白色）
                // 添加 lucky 颜色系列 - 基于您的 brand-primary 颜色
                'purple': {
                    50: '#eef1ff',
                    100: '#dee5ff',
                    200: '#c4cdff',
                    300: '#a0aaff',
                    400: '#7a7eff',  // 接近您的 brand-primary
                    500: '#7578ff',  // 与您的品牌色匹配
                    600: '#5f45fc',
                    700: '#4f35df',
                    800: '#412db5',
                    900: '#372a8f',
                    950: '#231970'
                },
                'transparent': 'transparent', // 透明色，用于背景或边框

            },

            /**
             * backgroundImage: 自定义背景图像配置
             * 定义复杂的背景效果，如渐变、图案等
             * 可以通过 bg-{name} 的方式使用
             */
            backgroundImage: {
                // 自定义渐变：从左到右，结合两层渐变效果和纯黑色背景
                'custom-gradient': 'linear-gradient(to left, rgba(38, 38, 38, 0.9), rgba(18, 18, 18, 0.25)), linear-gradient(to left, #000, #000)',
            },

        },
    },

    /**
     * plugins: 插件配置
     * 用于扩展 Tailwind 的功能，添加新的工具类、组件或基础样式
     * 可以是官方插件、第三方插件或自定义插件
     */
    plugins: [],
}