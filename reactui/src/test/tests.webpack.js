//I'm not 100% sure what this does, I think it creates a single webpack bundle with all the tests
//http://nicolasgallagher.com/how-to-test-react-components-karma-webpack/

var context = require.context('.', true, /\.spec\.js$/);
context.keys().forEach(context);