var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


var isProdBuild = (process.env.NODE_ENV === 'production');

var copyPatterns = [
    { from: 'src/index.html'},
    { from: 'src/css', to: 'css' },
    { from: 'src/images', to: 'images' }
];

//create a global that can be accessed by any module in the bundle
//see configureStore.js to see this global in use
//react and redux expect this process.env.NODE_ENV variable in the build, https://github.com/reactjs/redux/issues/1132
var globals = {
  
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
}

var outputPath = __dirname + '/dist'
module.exports = {		
   entry: {
        main: './src/js/index.js'
    },
   output: {
	  path: outputPath,
	  filename: '[name].bundle.js'
	},
    devtool: (isProdBuild) ? 'sourcemap' : 'sourcemap',
    module: {
        rules: [        
        {
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            exclude: "/node_modules/",
            include: path.join(__dirname, 'src')
        },        
        {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
            loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
        },
        {
        test: /\.(less|css|scss)$/,
        exclude: "/node_modules/",
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader!sass-loader!less-loader"
            })
        //loader: "style-loader!css-loader!sass-loader!less-loader"
        }]
    },
    plugins: (isProdBuild) ? [ //prod
        new CleanWebpackPlugin(['dist'], {}),
        new CopyWebpackPlugin(copyPatterns, {}),
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
          }),
        new OptimizeCssAssetsPlugin({
              assetNameRegExp: /\.optimize\.css$/g,
              cssProcessor: require('cssnano'),
              cssProcessorOptions: { discardComments: {removeAll: true } },
              canPrint: true
            }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeCssAssetsPlugin(),
        new webpack.DefinePlugin(globals)
    ] : [ //dev
        new CleanWebpackPlugin(['dist'], {}),
        new CopyWebpackPlugin(copyPatterns, {}),
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
          }),
        new OptimizeCssAssetsPlugin({
              assetNameRegExp: /\.optimize\.css$/g,
              cssProcessor: require('cssnano'),
              cssProcessorOptions: { discardComments: {removeAll: true } },
              canPrint: true
            })
    ]
};
