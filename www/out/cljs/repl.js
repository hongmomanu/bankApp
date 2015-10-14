// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6590_6604 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6591_6605 = null;
var count__6592_6606 = (0);
var i__6593_6607 = (0);
while(true){
if((i__6593_6607 < count__6592_6606)){
var f_6608 = cljs.core._nth.call(null,chunk__6591_6605,i__6593_6607);
cljs.core.println.call(null,"  ",f_6608);

var G__6609 = seq__6590_6604;
var G__6610 = chunk__6591_6605;
var G__6611 = count__6592_6606;
var G__6612 = (i__6593_6607 + (1));
seq__6590_6604 = G__6609;
chunk__6591_6605 = G__6610;
count__6592_6606 = G__6611;
i__6593_6607 = G__6612;
continue;
} else {
var temp__4425__auto___6613 = cljs.core.seq.call(null,seq__6590_6604);
if(temp__4425__auto___6613){
var seq__6590_6614__$1 = temp__4425__auto___6613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6590_6614__$1)){
var c__4990__auto___6615 = cljs.core.chunk_first.call(null,seq__6590_6614__$1);
var G__6616 = cljs.core.chunk_rest.call(null,seq__6590_6614__$1);
var G__6617 = c__4990__auto___6615;
var G__6618 = cljs.core.count.call(null,c__4990__auto___6615);
var G__6619 = (0);
seq__6590_6604 = G__6616;
chunk__6591_6605 = G__6617;
count__6592_6606 = G__6618;
i__6593_6607 = G__6619;
continue;
} else {
var f_6620 = cljs.core.first.call(null,seq__6590_6614__$1);
cljs.core.println.call(null,"  ",f_6620);

var G__6621 = cljs.core.next.call(null,seq__6590_6614__$1);
var G__6622 = null;
var G__6623 = (0);
var G__6624 = (0);
seq__6590_6604 = G__6621;
chunk__6591_6605 = G__6622;
count__6592_6606 = G__6623;
i__6593_6607 = G__6624;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_6625 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4206__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4206__auto__)){
return or__4206__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_6625);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_6625)))?cljs.core.second.call(null,arglists_6625):arglists_6625));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6594 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6595 = null;
var count__6596 = (0);
var i__6597 = (0);
while(true){
if((i__6597 < count__6596)){
var vec__6598 = cljs.core._nth.call(null,chunk__6595,i__6597);
var name = cljs.core.nth.call(null,vec__6598,(0),null);
var map__6599 = cljs.core.nth.call(null,vec__6598,(1),null);
var map__6599__$1 = ((((!((map__6599 == null)))?((((map__6599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6599):map__6599);
var doc = cljs.core.get.call(null,map__6599__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__6599__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__6626 = seq__6594;
var G__6627 = chunk__6595;
var G__6628 = count__6596;
var G__6629 = (i__6597 + (1));
seq__6594 = G__6626;
chunk__6595 = G__6627;
count__6596 = G__6628;
i__6597 = G__6629;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6594);
if(temp__4425__auto__){
var seq__6594__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6594__$1)){
var c__4990__auto__ = cljs.core.chunk_first.call(null,seq__6594__$1);
var G__6630 = cljs.core.chunk_rest.call(null,seq__6594__$1);
var G__6631 = c__4990__auto__;
var G__6632 = cljs.core.count.call(null,c__4990__auto__);
var G__6633 = (0);
seq__6594 = G__6630;
chunk__6595 = G__6631;
count__6596 = G__6632;
i__6597 = G__6633;
continue;
} else {
var vec__6601 = cljs.core.first.call(null,seq__6594__$1);
var name = cljs.core.nth.call(null,vec__6601,(0),null);
var map__6602 = cljs.core.nth.call(null,vec__6601,(1),null);
var map__6602__$1 = ((((!((map__6602 == null)))?((((map__6602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6602):map__6602);
var doc = cljs.core.get.call(null,map__6602__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__6602__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__6634 = cljs.core.next.call(null,seq__6594__$1);
var G__6635 = null;
var G__6636 = (0);
var G__6637 = (0);
seq__6594 = G__6634;
chunk__6595 = G__6635;
count__6596 = G__6636;
i__6597 = G__6637;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map