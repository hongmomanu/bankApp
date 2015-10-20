(ns bankapp.controllers.main
  (:require [clojure.browser.repl :as repl])
  (:use [jayq.core :only [$ css html]]
        )
  (:use-macros [purnam.core :only [obj arr ! def.n]]
               [gyr.core :only [def.module def.config def.factory
                                def.controller def.service]])
  )





#_(defonce conn
    (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(def serverurl "http://localhost:3000/")

;(def bankmap nil)
(def global-hub (atom {:markers []}))


(def.module starter.controllers [])


(def.service starter.MapService [$http]
  (obj
    :getbanksbytype (fn [type]
                (-> $http
                  (.post (str serverurl "getbanksbytype") (when-not (nil? type) (obj  :type  type  )))
                  (.then (fn [response] response))))

    ))


;;加载初始化控制器
(def.controller starter.controllers.AppCtrl [$scope $ionicModal $timeout MapService]

  (! $scope.loginData  {})

  (-> (.fromTemplateUrl  $ionicModal "templates/login.html" (clj->js {
                                                                       :scope $scope
                                                                       })) (.then  (fn [modal] (
                                                                                                 ! $scope.modal modal
                                                                                                 ))))




  (! $scope.getbanks (fn [type]

                       (println "1212122")

                       (-> MapService
                         (.getbanksbytype type)
                         (.then (fn [response]

                                  (println (get @global-hub "markers"))

                           (if (empty? response.data)

                             (dorun (map #(.removeLayer (get @global-hub "map") % ) (get @global-hub "markers")) )

                             (dorun (map #(makemark %) response.data) )
                             )




                                  )))

                       ))


  (! $scope.closeLogin (fn [] ( .hide $scope.modal
                                )))

  (! $scope.login (fn [] (.show $scope.modal )

                    ))

  (! $scope.doLogin (fn []

                      ($timeout (fn [] (.closeLogin $scope)) 1000)

                      )))

(def.controller starter.controllers.PlaylistsCtrl [$scope]
  (! $scope.playlists (clj->js [
                                 { :title "Reggae"  :id 1 }
                                 { :title  "Chill"  :id 2 }
                                 { :title  "Dubstep" :id 3 }
                                 { :title  "Indie"  :id 4 }
                                 { :title  "Rap" :id 5 }
                                 { :title  "Cowbell" :id 6 }
                                 ]))

  ;;(println $scope.playlists)

  )
(def.controller starter.controllers.PlaylistCtrl [$scope $stateParams]

  )
(def.controller starter.controllers.mapCtrl [$scope $stateParams]

  (println "map")
  (swap! global-hub assoc "map" (.setView (js/L.map "map" (obj :zoomControl false  ))  (array 30.00641 120.580176 ) 13))
  ;(! bankmap  (.setView (js/L.map "map" (obj :zoomControl false ))  (array 30.00641 120.580176 ) 13))
  (let [
         bankmap (get @global-hub "map")
         ]
    (.addTo
      ( js/L.tileLayer "http://t{s}.tianditu.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}"
        (obj :subdomains "012345")
        )
      bankmap
    )
    (.addTo
      ( js/L.tileLayer (str "http://t{s}.tianditu.com/cva_w/wmts?"
        "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles"
        "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}") (obj :subdomains "012345")
        )
      bankmap
    )

    )




  )



(println "Hello world initssssssss  sssssss!")



(defn makemark [item]
   (.reverse item.loc.coordinates )
  (let [
          redMarker ( js/L.AwesomeMarkers.icon (obj :icon "location" :prefix "ion"
                                                  :iconColor "black"
                                                 ))

         ]

    (swap! global-hub assoc "markers" (conj (get @global-hub "markers") redMarker ))

    (.openPopup (.bindPopup

      (.addTo (js/L.marker item.loc.coordinates
                  (obj :icon ( js/L.AwesomeMarkers.icon (obj :icon "location" :prefix "ion"

                                                       ))) )
        (get @global-hub "map"))

      "A pretty CSS3 popup.<br> Easily customizable" ))
    )

  )
(defn foo [a b]
  (* a b)) ;; CHANGED

(defn arr []

  (clj->js [
             { :title "Reggae"  :id 1 }
             { :title  "Chill"  :id 2 }
             { :title  "Dubstep" :id 3 }
             { :title  "Indie"  :id 4 }
             { :title  "Rap" :id 5 }
             { :title  "Cowbell" :id 6 }
             ]) )
