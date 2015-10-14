// Compiled by ClojureScript 1.7.48 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4423__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4423__auto__)){
var cm = temp__4423__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(){
var args6924 = [];
var len__5245__auto___6927 = arguments.length;
var i__5246__auto___6928 = (0);
while(true){
if((i__5246__auto___6928 < len__5245__auto___6927)){
args6924.push((arguments[i__5246__auto___6928]));

var G__6929 = (i__5246__auto___6928 + (1));
i__5246__auto___6928 = G__6929;
continue;
} else {
}
break;
}

var G__6926 = args6924.length;
switch (G__6926) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6924.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;
jQuery.prototype.cljs$core$ISeqable$ = true;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = true;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = true;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = true;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = true;

jQuery.prototype.cljs$core$ILookup$ = true;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__4206__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__4206__auto__)){
return or__4206__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = true;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = true;

jQuery.prototype.call = (function() {
var G__6932 = null;
var G__6932__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__6932__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__6932 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__6932__2.call(this,self__,k);
case 3:
return G__6932__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6932.cljs$core$IFn$_invoke$arity$2 = G__6932__2;
G__6932.cljs$core$IFn$_invoke$arity$3 = G__6932__3;
return G__6932;
})()
;

jQuery.prototype.apply = (function (self__,args6931){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6931)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(){
var args__5252__auto__ = [];
var len__5245__auto___6938 = arguments.length;
var i__5246__auto___6939 = (0);
while(true){
if((i__5246__auto___6939 < len__5245__auto___6938)){
args__5252__auto__.push((arguments[i__5246__auto___6939]));

var G__6940 = (i__5246__auto___6939 + (1));
i__5246__auto___6939 = G__6940;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__6936){
var vec__6937 = p__6936;
var speed = cljs.core.nth.call(null,vec__6937,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6937,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq6933){
var G__6934 = cljs.core.first.call(null,seq6933);
var seq6933__$1 = cljs.core.next.call(null,seq6933);
var G__6935 = cljs.core.first.call(null,seq6933__$1);
var seq6933__$2 = cljs.core.next.call(null,seq6933__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__6934,G__6935,seq6933__$2);
});
jayq.core.text = (function jayq$core$text(){
var args6941 = [];
var len__5245__auto___6944 = arguments.length;
var i__5246__auto___6945 = (0);
while(true){
if((i__5246__auto___6945 < len__5245__auto___6944)){
args6941.push((arguments[i__5246__auto___6945]));

var G__6946 = (i__5246__auto___6945 + (1));
i__5246__auto___6945 = G__6946;
continue;
} else {
}
break;
}

var G__6943 = args6941.length;
switch (G__6943) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6941.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;
jayq.core.css = (function jayq$core$css(){
var args6948 = [];
var len__5245__auto___6951 = arguments.length;
var i__5246__auto___6952 = (0);
while(true){
if((i__5246__auto___6952 < len__5245__auto___6951)){
args6948.push((arguments[i__5246__auto___6952]));

var G__6953 = (i__5246__auto___6952 + (1));
i__5246__auto___6952 = G__6953;
continue;
} else {
}
break;
}

var G__6950 = args6948.length;
switch (G__6950) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6948.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;
jayq.core.attr = (function jayq$core$attr(){
var args6955 = [];
var len__5245__auto___6958 = arguments.length;
var i__5246__auto___6959 = (0);
while(true){
if((i__5246__auto___6959 < len__5245__auto___6958)){
args6955.push((arguments[i__5246__auto___6959]));

var G__6960 = (i__5246__auto___6959 + (1));
i__5246__auto___6959 = G__6960;
continue;
} else {
}
break;
}

var G__6957 = args6955.length;
switch (G__6957) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6955.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;
jayq.core.prop = (function jayq$core$prop(){
var args6962 = [];
var len__5245__auto___6965 = arguments.length;
var i__5246__auto___6966 = (0);
while(true){
if((i__5246__auto___6966 < len__5245__auto___6965)){
args6962.push((arguments[i__5246__auto___6966]));

var G__6967 = (i__5246__auto___6966 + (1));
i__5246__auto___6966 = G__6967;
continue;
} else {
}
break;
}

var G__6964 = args6962.length;
switch (G__6964) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6962.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;
jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(){
var args6969 = [];
var len__5245__auto___6972 = arguments.length;
var i__5246__auto___6973 = (0);
while(true){
if((i__5246__auto___6973 < len__5245__auto___6972)){
args6969.push((arguments[i__5246__auto___6973]));

var G__6974 = (i__5246__auto___6973 + (1));
i__5246__auto___6973 = G__6974;
continue;
} else {
}
break;
}

var G__6971 = args6969.length;
switch (G__6971) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6969.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;
jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(){
var args6976 = [];
var len__5245__auto___6979 = arguments.length;
var i__5246__auto___6980 = (0);
while(true){
if((i__5246__auto___6980 < len__5245__auto___6979)){
args6976.push((arguments[i__5246__auto___6980]));

var G__6981 = (i__5246__auto___6980 + (1));
i__5246__auto___6980 = G__6981;
continue;
} else {
}
break;
}

var G__6978 = args6976.length;
switch (G__6978) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6976.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;
jayq.core.toggle_class = (function jayq$core$toggle_class(){
var args6983 = [];
var len__5245__auto___6986 = arguments.length;
var i__5246__auto___6987 = (0);
while(true){
if((i__5246__auto___6987 < len__5245__auto___6986)){
args6983.push((arguments[i__5246__auto___6987]));

var G__6988 = (i__5246__auto___6987 + (1));
i__5246__auto___6987 = G__6988;
continue;
} else {
}
break;
}

var G__6985 = args6983.length;
switch (G__6985) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6983.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;
jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(){
var args__5252__auto__ = [];
var len__5245__auto___6994 = arguments.length;
var i__5246__auto___6995 = (0);
while(true){
if((i__5246__auto___6995 < len__5245__auto___6994)){
args__5252__auto__.push((arguments[i__5246__auto___6995]));

var G__6996 = (i__5246__auto___6995 + (1));
i__5246__auto___6995 = G__6996;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6992){
var vec__6993 = p__6992;
var speed = cljs.core.nth.call(null,vec__6993,(0),null);
var on_finish = cljs.core.nth.call(null,vec__6993,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq6990){
var G__6991 = cljs.core.first.call(null,seq6990);
var seq6990__$1 = cljs.core.next.call(null,seq6990);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__6991,seq6990__$1);
});
jayq.core.show = (function jayq$core$show(){
var args__5252__auto__ = [];
var len__5245__auto___7001 = arguments.length;
var i__5246__auto___7002 = (0);
while(true){
if((i__5246__auto___7002 < len__5245__auto___7001)){
args__5252__auto__.push((arguments[i__5246__auto___7002]));

var G__7003 = (i__5246__auto___7002 + (1));
i__5246__auto___7002 = G__7003;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__6999){
var vec__7000 = p__6999;
var speed = cljs.core.nth.call(null,vec__7000,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7000,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq6997){
var G__6998 = cljs.core.first.call(null,seq6997);
var seq6997__$1 = cljs.core.next.call(null,seq6997);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__6998,seq6997__$1);
});
jayq.core.toggle = (function jayq$core$toggle(){
var args__5252__auto__ = [];
var len__5245__auto___7008 = arguments.length;
var i__5246__auto___7009 = (0);
while(true){
if((i__5246__auto___7009 < len__5245__auto___7008)){
args__5252__auto__.push((arguments[i__5246__auto___7009]));

var G__7010 = (i__5246__auto___7009 + (1));
i__5246__auto___7009 = G__7010;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7006){
var vec__7007 = p__7006;
var speed = cljs.core.nth.call(null,vec__7007,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7007,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq7004){
var G__7005 = cljs.core.first.call(null,seq7004);
var seq7004__$1 = cljs.core.next.call(null,seq7004);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__7005,seq7004__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(){
var args__5252__auto__ = [];
var len__5245__auto___7015 = arguments.length;
var i__5246__auto___7016 = (0);
while(true){
if((i__5246__auto___7016 < len__5245__auto___7015)){
args__5252__auto__.push((arguments[i__5246__auto___7016]));

var G__7017 = (i__5246__auto___7016 + (1));
i__5246__auto___7016 = G__7017;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7013){
var vec__7014 = p__7013;
var speed = cljs.core.nth.call(null,vec__7014,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7014,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq7011){
var G__7012 = cljs.core.first.call(null,seq7011);
var seq7011__$1 = cljs.core.next.call(null,seq7011);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__7012,seq7011__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(){
var args__5252__auto__ = [];
var len__5245__auto___7022 = arguments.length;
var i__5246__auto___7023 = (0);
while(true){
if((i__5246__auto___7023 < len__5245__auto___7022)){
args__5252__auto__.push((arguments[i__5246__auto___7023]));

var G__7024 = (i__5246__auto___7023 + (1));
i__5246__auto___7023 = G__7024;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7020){
var vec__7021 = p__7020;
var speed = cljs.core.nth.call(null,vec__7021,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7021,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq7018){
var G__7019 = cljs.core.first.call(null,seq7018);
var seq7018__$1 = cljs.core.next.call(null,seq7018);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__7019,seq7018__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(){
var args__5252__auto__ = [];
var len__5245__auto___7029 = arguments.length;
var i__5246__auto___7030 = (0);
while(true){
if((i__5246__auto___7030 < len__5245__auto___7029)){
args__5252__auto__.push((arguments[i__5246__auto___7030]));

var G__7031 = (i__5246__auto___7030 + (1));
i__5246__auto___7030 = G__7031;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7027){
var vec__7028 = p__7027;
var speed = cljs.core.nth.call(null,vec__7028,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7028,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq7025){
var G__7026 = cljs.core.first.call(null,seq7025);
var seq7025__$1 = cljs.core.next.call(null,seq7025);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__7026,seq7025__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(){
var args__5252__auto__ = [];
var len__5245__auto___7036 = arguments.length;
var i__5246__auto___7037 = (0);
while(true){
if((i__5246__auto___7037 < len__5245__auto___7036)){
args__5252__auto__.push((arguments[i__5246__auto___7037]));

var G__7038 = (i__5246__auto___7037 + (1));
i__5246__auto___7037 = G__7038;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__7034){
var vec__7035 = p__7034;
var speed = cljs.core.nth.call(null,vec__7035,(0),null);
var on_finish = cljs.core.nth.call(null,vec__7035,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq7032){
var G__7033 = cljs.core.first.call(null,seq7032);
var seq7032__$1 = cljs.core.next.call(null,seq7032);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__7033,seq7032__$1);
});
jayq.core.siblings = (function jayq$core$siblings(){
var args7039 = [];
var len__5245__auto___7042 = arguments.length;
var i__5246__auto___7043 = (0);
while(true){
if((i__5246__auto___7043 < len__5245__auto___7042)){
args7039.push((arguments[i__5246__auto___7043]));

var G__7044 = (i__5246__auto___7043 + (1));
i__5246__auto___7043 = G__7044;
continue;
} else {
}
break;
}

var G__7041 = args7039.length;
switch (G__7041) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7039.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;
jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(){
var args7046 = [];
var len__5245__auto___7049 = arguments.length;
var i__5246__auto___7050 = (0);
while(true){
if((i__5246__auto___7050 < len__5245__auto___7049)){
args7046.push((arguments[i__5246__auto___7050]));

var G__7051 = (i__5246__auto___7050 + (1));
i__5246__auto___7050 = G__7051;
continue;
} else {
}
break;
}

var G__7048 = args7046.length;
switch (G__7048) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7046.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;
jayq.core.parents_until = (function jayq$core$parents_until(){
var args7053 = [];
var len__5245__auto___7056 = arguments.length;
var i__5246__auto___7057 = (0);
while(true){
if((i__5246__auto___7057 < len__5245__auto___7056)){
args7053.push((arguments[i__5246__auto___7057]));

var G__7058 = (i__5246__auto___7057 + (1));
i__5246__auto___7057 = G__7058;
continue;
} else {
}
break;
}

var G__7055 = args7053.length;
switch (G__7055) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7053.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;
jayq.core.children = (function jayq$core$children(){
var args7060 = [];
var len__5245__auto___7063 = arguments.length;
var i__5246__auto___7064 = (0);
while(true){
if((i__5246__auto___7064 < len__5245__auto___7063)){
args7060.push((arguments[i__5246__auto___7064]));

var G__7065 = (i__5246__auto___7064 + (1));
i__5246__auto___7064 = G__7065;
continue;
} else {
}
break;
}

var G__7062 = args7060.length;
switch (G__7062) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7060.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;
jayq.core.next = (function jayq$core$next(){
var args7067 = [];
var len__5245__auto___7070 = arguments.length;
var i__5246__auto___7071 = (0);
while(true){
if((i__5246__auto___7071 < len__5245__auto___7070)){
args7067.push((arguments[i__5246__auto___7071]));

var G__7072 = (i__5246__auto___7071 + (1));
i__5246__auto___7071 = G__7072;
continue;
} else {
}
break;
}

var G__7069 = args7067.length;
switch (G__7069) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7067.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;
jayq.core.prev = (function jayq$core$prev(){
var args7074 = [];
var len__5245__auto___7077 = arguments.length;
var i__5246__auto___7078 = (0);
while(true){
if((i__5246__auto___7078 < len__5245__auto___7077)){
args7074.push((arguments[i__5246__auto___7078]));

var G__7079 = (i__5246__auto___7078 + (1));
i__5246__auto___7078 = G__7079;
continue;
} else {
}
break;
}

var G__7076 = args7074.length;
switch (G__7076) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7074.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;
jayq.core.next_all = (function jayq$core$next_all(){
var args7081 = [];
var len__5245__auto___7084 = arguments.length;
var i__5246__auto___7085 = (0);
while(true){
if((i__5246__auto___7085 < len__5245__auto___7084)){
args7081.push((arguments[i__5246__auto___7085]));

var G__7086 = (i__5246__auto___7085 + (1));
i__5246__auto___7085 = G__7086;
continue;
} else {
}
break;
}

var G__7083 = args7081.length;
switch (G__7083) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7081.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;
jayq.core.prev_all = (function jayq$core$prev_all(){
var args7088 = [];
var len__5245__auto___7091 = arguments.length;
var i__5246__auto___7092 = (0);
while(true){
if((i__5246__auto___7092 < len__5245__auto___7091)){
args7088.push((arguments[i__5246__auto___7092]));

var G__7093 = (i__5246__auto___7092 + (1));
i__5246__auto___7092 = G__7093;
continue;
} else {
}
break;
}

var G__7090 = args7088.length;
switch (G__7090) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7088.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;
jayq.core.next_until = (function jayq$core$next_until(){
var args7095 = [];
var len__5245__auto___7098 = arguments.length;
var i__5246__auto___7099 = (0);
while(true){
if((i__5246__auto___7099 < len__5245__auto___7098)){
args7095.push((arguments[i__5246__auto___7099]));

var G__7100 = (i__5246__auto___7099 + (1));
i__5246__auto___7099 = G__7100;
continue;
} else {
}
break;
}

var G__7097 = args7095.length;
switch (G__7097) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7095.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;
jayq.core.prev_until = (function jayq$core$prev_until(){
var args7102 = [];
var len__5245__auto___7105 = arguments.length;
var i__5246__auto___7106 = (0);
while(true){
if((i__5246__auto___7106 < len__5245__auto___7105)){
args7102.push((arguments[i__5246__auto___7106]));

var G__7107 = (i__5246__auto___7106 + (1));
i__5246__auto___7106 = G__7107;
continue;
} else {
}
break;
}

var G__7104 = args7102.length;
switch (G__7104) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7102.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;
jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(){
var args__5252__auto__ = [];
var len__5245__auto___7114 = arguments.length;
var i__5246__auto___7115 = (0);
while(true){
if((i__5246__auto___7115 < len__5245__auto___7114)){
args__5252__auto__.push((arguments[i__5246__auto___7115]));

var G__7116 = (i__5246__auto___7115 + (1));
i__5246__auto___7115 = G__7116;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__7112){
var vec__7113 = p__7112;
var context = cljs.core.nth.call(null,vec__7113,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq7109){
var G__7110 = cljs.core.first.call(null,seq7109);
var seq7109__$1 = cljs.core.next.call(null,seq7109);
var G__7111 = cljs.core.first.call(null,seq7109__$1);
var seq7109__$2 = cljs.core.next.call(null,seq7109__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__7110,G__7111,seq7109__$2);
});
jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(){
var args7117 = [];
var len__5245__auto___7120 = arguments.length;
var i__5246__auto___7121 = (0);
while(true){
if((i__5246__auto___7121 < len__5245__auto___7120)){
args7117.push((arguments[i__5246__auto___7121]));

var G__7122 = (i__5246__auto___7121 + (1));
i__5246__auto___7121 = G__7122;
continue;
} else {
}
break;
}

var G__7119 = args7117.length;
switch (G__7119) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7117.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;
jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(){
var args7124 = [];
var len__5245__auto___7127 = arguments.length;
var i__5246__auto___7128 = (0);
while(true){
if((i__5246__auto___7128 < len__5245__auto___7127)){
args7124.push((arguments[i__5246__auto___7128]));

var G__7129 = (i__5246__auto___7128 + (1));
i__5246__auto___7128 = G__7129;
continue;
} else {
}
break;
}

var G__7126 = args7124.length;
switch (G__7126) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7124.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;
jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(){
var args7131 = [];
var len__5245__auto___7134 = arguments.length;
var i__5246__auto___7135 = (0);
while(true){
if((i__5246__auto___7135 < len__5245__auto___7134)){
args7131.push((arguments[i__5246__auto___7135]));

var G__7136 = (i__5246__auto___7135 + (1));
i__5246__auto___7135 = G__7136;
continue;
} else {
}
break;
}

var G__7133 = args7131.length;
switch (G__7133) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7131.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;
jayq.core.dequeue = (function jayq$core$dequeue(){
var args7138 = [];
var len__5245__auto___7141 = arguments.length;
var i__5246__auto___7142 = (0);
while(true){
if((i__5246__auto___7142 < len__5245__auto___7141)){
args7138.push((arguments[i__5246__auto___7142]));

var G__7143 = (i__5246__auto___7142 + (1));
i__5246__auto___7142 = G__7143;
continue;
} else {
}
break;
}

var G__7140 = args7138.length;
switch (G__7140) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7138.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;
jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__7147){
var map__7150 = p__7147;
var map__7150__$1 = ((((!((map__7150 == null)))?((((map__7150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7150):map__7150);
var request = map__7150__$1;
var data = cljs.core.get.call(null,map__7150__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__7150__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__7150,map__7150__$1,request,data,contentType){
return (function (p1__7146_SHARP_){
if(cljs.core.truth_((function (){var and__4194__auto__ = ct;
if(cljs.core.truth_(and__4194__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__4194__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__7146_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__7146_SHARP_;
}
});})(ct,map__7150,map__7150__$1,request,data,contentType))
.call(null,((function (ct,map__7150,map__7150__$1,request,data,contentType){
return (function (p1__7145_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__7145_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__7145_SHARP_;
}
});})(ct,map__7150,map__7150__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(){
var args7152 = [];
var len__5245__auto___7155 = arguments.length;
var i__5246__auto___7156 = (0);
while(true){
if((i__5246__auto___7156 < len__5245__auto___7155)){
args7152.push((arguments[i__5246__auto___7156]));

var G__7157 = (i__5246__auto___7156 + (1));
i__5246__auto___7156 = G__7157;
continue;
} else {
}
break;
}

var G__7154 = args7152.length;
switch (G__7154) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7152.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;
jayq.core.xhr = (function jayq$core$xhr(p__7159,content,callback){
var vec__7161 = p__7159;
var method = cljs.core.nth.call(null,vec__7161,(0),null);
var uri = cljs.core.nth.call(null,vec__7161,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(){
var args__5252__auto__ = [];
var len__5245__auto___7167 = arguments.length;
var i__5246__auto___7168 = (0);
while(true){
if((i__5246__auto___7168 < len__5245__auto___7167)){
args__5252__auto__.push((arguments[i__5246__auto___7168]));

var G__7169 = (i__5246__auto___7168 + (1));
i__5246__auto___7168 = G__7169;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__7165){
var vec__7166 = p__7165;
var func = cljs.core.nth.call(null,vec__7166,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq7162){
var G__7163 = cljs.core.first.call(null,seq7162);
var seq7162__$1 = cljs.core.next.call(null,seq7162);
var G__7164 = cljs.core.first.call(null,seq7162__$1);
var seq7162__$2 = cljs.core.next.call(null,seq7162__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__7163,G__7164,seq7162__$2);
});
jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(){
var args__5252__auto__ = [];
var len__5245__auto___7175 = arguments.length;
var i__5246__auto___7176 = (0);
while(true){
if((i__5246__auto___7176 < len__5245__auto___7175)){
args__5252__auto__.push((arguments[i__5246__auto___7176]));

var G__7177 = (i__5246__auto___7176 + (1));
i__5246__auto___7176 = G__7177;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__7173){
var vec__7174 = p__7173;
var sel = cljs.core.nth.call(null,vec__7174,(0),null);
var data = cljs.core.nth.call(null,vec__7174,(1),null);
var handler = cljs.core.nth.call(null,vec__7174,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq7170){
var G__7171 = cljs.core.first.call(null,seq7170);
var seq7170__$1 = cljs.core.next.call(null,seq7170);
var G__7172 = cljs.core.first.call(null,seq7170__$1);
var seq7170__$2 = cljs.core.next.call(null,seq7170__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__7171,G__7172,seq7170__$2);
});
jayq.core.one = (function jayq$core$one(){
var args__5252__auto__ = [];
var len__5245__auto___7183 = arguments.length;
var i__5246__auto___7184 = (0);
while(true){
if((i__5246__auto___7184 < len__5245__auto___7183)){
args__5252__auto__.push((arguments[i__5246__auto___7184]));

var G__7185 = (i__5246__auto___7184 + (1));
i__5246__auto___7184 = G__7185;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__7181){
var vec__7182 = p__7181;
var sel = cljs.core.nth.call(null,vec__7182,(0),null);
var data = cljs.core.nth.call(null,vec__7182,(1),null);
var handler = cljs.core.nth.call(null,vec__7182,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq7178){
var G__7179 = cljs.core.first.call(null,seq7178);
var seq7178__$1 = cljs.core.next.call(null,seq7178);
var G__7180 = cljs.core.first.call(null,seq7178__$1);
var seq7178__$2 = cljs.core.next.call(null,seq7178__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__7179,G__7180,seq7178__$2);
});
jayq.core.off = (function jayq$core$off(){
var args__5252__auto__ = [];
var len__5245__auto___7191 = arguments.length;
var i__5246__auto___7192 = (0);
while(true){
if((i__5246__auto___7192 < len__5245__auto___7191)){
args__5252__auto__.push((arguments[i__5246__auto___7192]));

var G__7193 = (i__5246__auto___7192 + (1));
i__5246__auto___7192 = G__7193;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((2) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((2)),(0))):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5253__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__7189){
var vec__7190 = p__7189;
var sel = cljs.core.nth.call(null,vec__7190,(0),null);
var handler = cljs.core.nth.call(null,vec__7190,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq7186){
var G__7187 = cljs.core.first.call(null,seq7186);
var seq7186__$1 = cljs.core.next.call(null,seq7186);
var G__7188 = cljs.core.first.call(null,seq7186__$1);
var seq7186__$2 = cljs.core.next.call(null,seq7186__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__7187,G__7188,seq7186__$2);
});
jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(){
var args7194 = [];
var len__5245__auto___7197 = arguments.length;
var i__5246__auto___7198 = (0);
while(true){
if((i__5246__auto___7198 < len__5245__auto___7197)){
args7194.push((arguments[i__5246__auto___7198]));

var G__7199 = (i__5246__auto___7198 + (1));
i__5246__auto___7198 = G__7199;
continue;
} else {
}
break;
}

var G__7196 = args7194.length;
switch (G__7196) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7194.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;
jayq.core.width = (function jayq$core$width(){
var args7201 = [];
var len__5245__auto___7204 = arguments.length;
var i__5246__auto___7205 = (0);
while(true){
if((i__5246__auto___7205 < len__5245__auto___7204)){
args7201.push((arguments[i__5246__auto___7205]));

var G__7206 = (i__5246__auto___7205 + (1));
i__5246__auto___7205 = G__7206;
continue;
} else {
}
break;
}

var G__7203 = args7201.length;
switch (G__7203) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7201.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;
jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(){
var args7208 = [];
var len__5245__auto___7211 = arguments.length;
var i__5246__auto___7212 = (0);
while(true){
if((i__5246__auto___7212 < len__5245__auto___7211)){
args7208.push((arguments[i__5246__auto___7212]));

var G__7213 = (i__5246__auto___7212 + (1));
i__5246__auto___7212 = G__7213;
continue;
} else {
}
break;
}

var G__7210 = args7208.length;
switch (G__7210) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7208.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;
jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(){
var args7215 = [];
var len__5245__auto___7218 = arguments.length;
var i__5246__auto___7219 = (0);
while(true){
if((i__5246__auto___7219 < len__5245__auto___7218)){
args7215.push((arguments[i__5246__auto___7219]));

var G__7220 = (i__5246__auto___7219 + (1));
i__5246__auto___7219 = G__7220;
continue;
} else {
}
break;
}

var G__7217 = args7215.length;
switch (G__7217) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7215.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;
jayq.core.scroll_top = (function jayq$core$scroll_top(){
var args7222 = [];
var len__5245__auto___7225 = arguments.length;
var i__5246__auto___7226 = (0);
while(true){
if((i__5246__auto___7226 < len__5245__auto___7225)){
args7222.push((arguments[i__5246__auto___7226]));

var G__7227 = (i__5246__auto___7226 + (1));
i__5246__auto___7226 = G__7227;
continue;
} else {
}
break;
}

var G__7224 = args7222.length;
switch (G__7224) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7222.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;
jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(){
var args7229 = [];
var len__5245__auto___7232 = arguments.length;
var i__5246__auto___7233 = (0);
while(true){
if((i__5246__auto___7233 < len__5245__auto___7232)){
args7229.push((arguments[i__5246__auto___7233]));

var G__7234 = (i__5246__auto___7233 + (1));
i__5246__auto___7233 = G__7234;
continue;
} else {
}
break;
}

var G__7231 = args7229.length;
switch (G__7231) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7229.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;
jayq.core.done = (function jayq$core$done(){
var args__5252__auto__ = [];
var len__5245__auto___7238 = arguments.length;
var i__5246__auto___7239 = (0);
while(true){
if((i__5246__auto___7239 < len__5245__auto___7238)){
args__5252__auto__.push((arguments[i__5246__auto___7239]));

var G__7240 = (i__5246__auto___7239 + (1));
i__5246__auto___7239 = G__7240;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq7236){
var G__7237 = cljs.core.first.call(null,seq7236);
var seq7236__$1 = cljs.core.next.call(null,seq7236);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__7237,seq7236__$1);
});
jayq.core.fail = (function jayq$core$fail(){
var args__5252__auto__ = [];
var len__5245__auto___7243 = arguments.length;
var i__5246__auto___7244 = (0);
while(true){
if((i__5246__auto___7244 < len__5245__auto___7243)){
args__5252__auto__.push((arguments[i__5246__auto___7244]));

var G__7245 = (i__5246__auto___7244 + (1));
i__5246__auto___7244 = G__7245;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq7241){
var G__7242 = cljs.core.first.call(null,seq7241);
var seq7241__$1 = cljs.core.next.call(null,seq7241);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__7242,seq7241__$1);
});
jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(){
var args7246 = [];
var len__5245__auto___7249 = arguments.length;
var i__5246__auto___7250 = (0);
while(true){
if((i__5246__auto___7250 < len__5245__auto___7249)){
args7246.push((arguments[i__5246__auto___7250]));

var G__7251 = (i__5246__auto___7250 + (1));
i__5246__auto___7250 = G__7251;
continue;
} else {
}
break;
}

var G__7248 = args7246.length;
switch (G__7248) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7246.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;
jayq.core.always = (function jayq$core$always(){
var args__5252__auto__ = [];
var len__5245__auto___7255 = arguments.length;
var i__5246__auto___7256 = (0);
while(true){
if((i__5246__auto___7256 < len__5245__auto___7255)){
args__5252__auto__.push((arguments[i__5246__auto___7256]));

var G__7257 = (i__5246__auto___7256 + (1));
i__5246__auto___7256 = G__7257;
continue;
} else {
}
break;
}

var argseq__5253__auto__ = ((((1) < args__5252__auto__.length))?(new cljs.core.IndexedSeq(args__5252__auto__.slice((1)),(0))):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5253__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq7253){
var G__7254 = cljs.core.first.call(null,seq7253);
var seq7253__$1 = cljs.core.next.call(null,seq7253);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__7254,seq7253__$1);
});
jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(){
var args7258 = [];
var len__5245__auto___7261 = arguments.length;
var i__5246__auto___7262 = (0);
while(true){
if((i__5246__auto___7262 < len__5245__auto___7261)){
args7258.push((arguments[i__5246__auto___7262]));

var G__7263 = (i__5246__auto___7262 + (1));
i__5246__auto___7262 = G__7263;
continue;
} else {
}
break;
}

var G__7260 = args7258.length;
switch (G__7260) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7258.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;
jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map