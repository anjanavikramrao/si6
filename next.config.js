// const path = require('path');


// module.exports = {
//   env: {
//     NEXT_PUBLIC_SUPABASE_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODIzMTAwNywiZXhwIjoxOTQzODA3MDA3fQ.-NPAlkkmwzJhMsp2n60L7dYp0-4r1MvTsqomWQupMXE",
//     NEXT_PUBLIC_SUPABASE_URL:"https://awzskdvknmpuuhxditwu.supabase.co/rest/v1/"
//   },
//     sassOptions: {
//         includePaths: [path.join(__dirname, 'styles')],
//     },
//     webpack: (config, options) => {
//       let loaders = 
//       config.module.rules.push({
//         test: /\.(png|jp(e*)g|gif)$/,
//         use: [
//           options.defaultLoaders.babel,
//           {
//             loader: 'file-loader',
//             options: {
//               name: 'images/[hash]-[name].[ext]',
//             },
//           },
//         ],
//       }, 
//       {
//         test: /\.svg$/,
//         use: [
//           options.defaultLoaders.babel,
//           '@svgr/webpack'
//         ],
//       },
//       )
  
//       return config
//     },
    
// }