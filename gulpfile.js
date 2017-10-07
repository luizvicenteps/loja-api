var gulp   = require( 'gulp' ),
server = require( 'gulp-develop-server' ),
runSequence = require ('run-sequence');

// run server
gulp.task( 'server:start', function() {
server.listen( { path: './bin/www' } );
});

// restart server if app.js changed
gulp.task( 'server:restart', function() {
gulp.watch( [ './app.js' ], server.restart );
});

gulp.task('dev',function(){
    runSequence(['server:start','server:restart']);
})