const HtmlWebPackPlugin = require('html-webpack-plugin')

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
                use: {
                    loader: "css-loader",
                    options:{
                        name: "[name].css",
                        outputPath: "./styles",
                        publicPath: "./styles"
                    }
                }
            }
        
     ]
 },
 plugins: [htmlPlugin]
}
