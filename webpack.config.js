const HtmlWebPackPlugin = require('html-webpack-plugin');


const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const miniCssExtract = new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
})
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

module.exports={
 module:{
     rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
            
        },
        {
            test: /\.html$/,
            use:["html-loader"]
        
        },
        {
            test: /.(jpg|png)$/,
            use:{
                loader: "file-loader",
                options:{
                    name: "[name].[ext]",
                    outputPath: "./img",
                    publicPath: "./img"
                }
            }

            },
            {
                test: /.css$/,
                exclude: /node_modules/,
                use: [
                    {
                     loader: MiniCssExtractPlugin.loader,
                     options:{
                        publicPath: "./dist/styles"
                     }
                
                    },
                'css-loader']
            },
            {
                test: /.(jpg|png)$/,
                use:{
                    loader: "url-loader",
                    options:{
                        limit: 8192
                    }
                }
    
                }
            ],
            
 },
 optimization:{
   splitChunks: {
       chunks: 'all',
       name: true,
       filename: "[name].[ext]"
   }

 },
 plugins: [htmlPlugin, miniCssExtract]
}
