(require 'cljs.build.api)

(cljs.build.api/watch "src"
  {:main 'bankapp.controllers.main
   :output-to "out/main.js"})
