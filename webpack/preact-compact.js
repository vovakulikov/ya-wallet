/**
 * Created by Not Igor on 05.06.2017.
 */
module.exports = function() {
    return {
        resolve: {
            alias: {
                'react': 'preact-compat',
                'react-dom': 'preact-compat',
            }
        }
    }
};