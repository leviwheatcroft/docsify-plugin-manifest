const browserSync = require('browser-sync')
browserSync.create()
.init({
  open: false,
  server: {
    baseDir: 'dev',
    index: 'index.html',
    serveStaticOptions: {
      extensions: ['html'],
      dotfiles: 'allow'
    }
    // serveStaticOptions: {
    //   // this is a bit hacky. If there's no `.` within the last 5 chars of a
    //   // path, then set the header to `text/html`. Works nicely for me. YMMV.
    //   setHeaders: (res, path, stat) => {
    //     if (/\..{1,4}$/.exec(path)) return
    //     res.setHeader('content-type', 'text/html')
    //   }
    // }
  },
  watch: true
})