module.exports = {
    configureWebpack:{
        resolve: {
            extensions: [],
            alias: {
                'assets' : '@/assets',
                'common' : '@/common',
                'components' : '@/components',
                'pages' : '@/pages',
                'network' : '@/network',

            }
        }
    }
}