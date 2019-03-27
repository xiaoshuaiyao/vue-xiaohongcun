
module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"https://napi.xiaohongchun.com",
                changeOrigin:true,
                pathRewrite:{
                    "^api":""
                }
            }
        }
    }
}
//https://napi.xiaohongchun.com/video/349012/comment/topn?vid=349012
//https://napi.xiaohongchun.com/auto_index/search_text