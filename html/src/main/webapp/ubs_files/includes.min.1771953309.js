(function(f){f.support.touch="ontouchend" in document;
if(!f.support.touch){return
}var j=f.ui.mouse.prototype,h=j._mouseInit,g;
function i(c,b){if(c.originalEvent.touches.length>1){return
}c.preventDefault();
var a=c.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");
d.initMouseEvent(b,true,true,window,1,a.screenX,a.screenY,a.clientX,a.clientY,false,false,false,false,0,null);
c.target.dispatchEvent(d)
}j._touchStart=function(a){var b=this;
if(g||!b._mouseCapture(a.originalEvent.changedTouches[0])){return
}g=true;
b._touchMoved=false;
i(a,"mouseover");
i(a,"mousemove");
i(a,"mousedown")
};
j._touchMove=function(a){if(!g){return
}this._touchMoved=true;
i(a,"mousemove")
};
j._touchEnd=function(a){if(!g){return
}i(a,"mouseup");
i(a,"mouseout");
if(!this._touchMoved){i(a,"click")
}g=false
};
j._mouseInit=function(){var a=this;
a.element.bind("touchstart",f.proxy(a,"_touchStart")).bind("touchmove",f.proxy(a,"_touchMove")).bind("touchend",f.proxy(a,"_touchEnd"));
h.call(a)
}
})(jQuery);
/*!
 * jQuery UI Tooltip 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tooltip/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(d){var b=0;
function c(f,g){var e=(f.attr("aria-describedby")||"").split(/\s+/);
e.push(g);
f.data("ui-tooltip-id",g).attr("aria-describedby",d.trim(e.join(" ")))
}function a(g){var h=g.data("ui-tooltip-id"),f=(g.attr("aria-describedby")||"").split(/\s+/),e=d.inArray(h,f);
if(e!==-1){f.splice(e,1)
}g.removeData("ui-tooltip-id");
f=d.trim(f.join(" "));
if(f){g.attr("aria-describedby",f)
}else{g.removeAttr("aria-describedby")
}}d.widget("ui.tooltip",{version:"1.10.3",options:{content:function(){var e=d(this).attr("title")||"";
return d("<a>").text(e).html()
},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});
this.tooltips={};
this.parents={};
if(this.options.disabled){this._disable()
}},_setOption:function(e,g){var f=this;
if(e==="disabled"){this[g?"_disable":"_enable"]();
this.options[e]=g;
return
}this._super(e,g);
if(e==="content"){d.each(this.tooltips,function(i,h){f._updateContent(h)
})
}},_disable:function(){var e=this;
d.each(this.tooltips,function(h,f){var g=d.Event("blur");
g.target=g.currentTarget=f[0];
e.close(g,true)
});
this.element.find(this.options.items).addBack().each(function(){var f=d(this);
if(f.is("[title]")){f.data("ui-tooltip-title",f.attr("title")).attr("title","")
}})
},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=d(this);
if(e.data("ui-tooltip-title")){e.attr("title",e.data("ui-tooltip-title"))
}})
},open:function(f){var e=this,g=d(f?f.target:this.element).closest(this.options.items);
if(!g.length||g.data("ui-tooltip-id")){return
}if(g.attr("title")){g.data("ui-tooltip-title",g.attr("title"))
}g.data("ui-tooltip-open",true);
if(f&&f.type==="mouseover"){g.parents().each(function(){var i=d(this),h;
if(i.data("ui-tooltip-open")){h=d.Event("blur");
h.target=h.currentTarget=this;
e.close(h,true)
}if(i.attr("title")){i.uniqueId();
e.parents[this.id]={element:this,title:i.attr("title")};
i.attr("title","")
}})
}this._updateContent(g,f)
},_updateContent:function(j,i){var h,e=this.options.content,g=this,f=i?i.type:null;
if(typeof e==="string"){return this._open(i,j,e)
}h=e.call(j[0],function(k){if(!j.data("ui-tooltip-open")){return
}g._delay(function(){if(i){i.type=f
}this._open(i,j,k)
})
});
if(h){this._open(i,j,h)
}},_open:function(i,k,h){var j,g,f,l=d.extend({},this.options.position);
if(!h){return
}j=this._find(k);
if(j.length){j.find(".ui-tooltip-content").html(h);
return
}if(k.is("[title]")){if(i&&i.type==="mouseover"){k.attr("title","")
}else{k.removeAttr("title")
}}j=this._tooltip(k);
c(k,j.attr("id"));
j.find(".ui-tooltip-content").html(h);
function e(m){l.of=m;
if(j.is(":hidden")){return
}j.position(l)
}if(this.options.track&&i&&/^mouse/.test(i.type)){this._on(this.document,{mousemove:e});
e(i)
}else{j.position(d.extend({of:k},this.options.position))
}j.hide();
this._show(j,this.options.show);
if(this.options.show&&this.options.show.delay){f=this.delayedShow=setInterval(function(){if(j.is(":visible")){e(l.of);
clearInterval(f)
}},d.fx.interval)
}this._trigger("open",i,{tooltip:j});
g={keyup:function(m){if(m.keyCode===d.ui.keyCode.ESCAPE){var n=d.Event(m);
n.currentTarget=k[0];
this.close(n,true)
}},remove:function(){this._removeTooltip(j)
}};
if(!i||i.type==="mouseover"){g.mouseleave="close"
}if(!i||i.type==="focusin"){g.focusout="close"
}this._on(true,k,g)
},close:function(f){var e=this,h=d(f?f.currentTarget:this.element),g=this._find(h);
if(this.closing){return
}clearInterval(this.delayedShow);
if(h.data("ui-tooltip-title")){h.attr("title",h.data("ui-tooltip-title"))
}a(h);
g.stop(true);
this._hide(g,this.options.hide,function(){e._removeTooltip(d(this))
});
h.removeData("ui-tooltip-open");
this._off(h,"mouseleave focusout keyup");
if(h[0]!==this.element[0]){this._off(h,"remove")
}this._off(this.document,"mousemove");
if(f&&f.type==="mouseleave"){d.each(this.parents,function(j,i){d(i.element).attr("title",i.title);
delete e.parents[j]
})
}this.closing=true;
this._trigger("close",f,{tooltip:g});
this.closing=false
},_tooltip:function(e){var g="ui-tooltip-"+b++,f=d("<div>").attr({id:g,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));
d("<div>").addClass("ui-tooltip-content").appendTo(f);
f.appendTo(this.document[0].body);
this.tooltips[g]=e;
return f
},_find:function(e){var f=e.data("ui-tooltip-id");
return f?d("#"+f):d()
},_removeTooltip:function(e){e.remove();
delete this.tooltips[e.attr("id")]
},_destroy:function(){var e=this;
d.each(this.tooltips,function(h,f){var g=d.Event("blur");
g.target=g.currentTarget=f[0];
e.close(g,true);
d("#"+h).remove();
if(f.data("ui-tooltip-title")){f.attr("title",f.data("ui-tooltip-title"));
f.removeData("ui-tooltip-title")
}})
}})
}(jQuery));
(function(a){ubs.funds=ubs.funds||{};
ubs.funds.ui=ubs.funds.ui||{};
a.extend(ubs.funds.ui,{init:function(d){ubs.util.time("init funds UI");
var b=a("#content",d);
if(b.length===0){b=a("#main",d);
if(b.length===0){b=d
}}ubs.funds.ui.calculator.init(a(".fundsCalculator",b));
ubs.funds.ui.resultsAccordion.init(a("table.fundsProductTable",b));
ubs.func.termHighlight.init(true,false,a(".fundsSearchResults",ubs.init.states.$content));
ubs.funds.ui.autocomplete(a(".init-autocomplete-fundsSearch"),b);
a(".fundsCalculator .info-icon",d).tooltip({tooltipClass:"fundsChartInfo",position:{my:"left center",at:"right+10 center",using:function(c,e){a(this).css(c);
a(this).find(".ui-tooltip-content").append('<div class="arrow '+e.vertical+" "+e.horizontal+'" ></div>')
}},content:function(e,f){var c=a(this).prop("title");
return c
}});
a(".fundsSearchResults .info-icon",d).tooltip({tooltipClass:"fundsSearchInfo",position:{my:"center bottom",at:"center top-10",using:function(c,e){a(this).css(c);
a(this).find(".ui-tooltip-content").append('<div class="arrow '+e.vertical+" "+e.horizontal+'" ></div>')
}},content:function(e,f){var c=a(this).prop("title");
return c
}});
ubs.util.timeEnd("init funds UI")
},resultsAccordion:{init:function(b){var d=ubs.ui.accordion.getActiveElement(b,false),c=function(e,f){f.oldPanel.hide()
};
ubs.ui.heightAdjust(a("th.header a",b));
ubs.funds.ui.resultsAccordion.headerLinkExecution(b);
b.accordion({header:".parent-row",animated:false,heightStyle:"content",active:d,beforeActivate:c,collapsible:true,icons:false})
},isEnter:function(b){return b===13
},isSpace:function(b){return b===32
},headerLinkExecution:function(b){b.find(".parent-row a").on("click keydown",function(f){var d,c;
switch(f.type){case"click":d=true;
break;
case"keydown":c=f.which;
if(ubs.funds.ui.resultsAccordion.isEnter(c)||ubs.funds.ui.resultsAccordion.isSpace(c)){d=true
}break;
default:d=false;
break
}if(d===true){f.stopPropagation()
}})
}},autocomplete:function(b,d){var c="fundsSearchPanel";
var e=a(".fundsSearchBar",d);
e.find("button").on({click:function(g){g.preventDefault();
var f=b.val().replace(/^\s*((?:[\S\s]*\S)?)\s*$/,"$1").replace(/\s{2,}/g," ");
b.val(f);
a(this).closest("form").submit()
}});
b.autocomplete({minLength:3,delay:300,source:function(h,f){var g=h.term.replace(/^\s*((?:[\S\s]*\S)?)\s*$/,"$1").replace(/\s{2,}/g," ");
a.ajax({url:b.attr("data-autocomplete-url"),dataType:"JSON",cache:false,data:"querystring="+encodeURIComponent(g)+"&_charset_=UTF-8",success:function(i){f(a.map(i,function(j){return{label:j.label,url:j.url,type:j.type,value:a("<span>"+j.label+"</span>").text()}
}))
}})
},select:function(f,g){if(typeof g.item.url!=="undefined"&&g.item.url){window.location.href=g.item.url
}},open:function(){a(this).data("ui-autocomplete").menu.element.addClass(c)
},position:{my:"left top",at:"left bottom",on:a(this)},close:function(){a(this).data("ui-autocomplete").menu.element.removeClass(c)
}}).each(function(){a(this).data("ui-autocomplete")._renderItem=function(g,h){var i="",f="<a>"+h.label+"</a>";
if(h.type==="moreResults"){f="<a><span></span>"+h.label+"</a>";
i=a('<li class="fundsSearch__moreResults">'+f+"</li>")
}else{i=a('<li class="fundsSearch_result">'+f+"</li>")
}return i.data("ui-autocomplete-item",h).appendTo(g)
}
})
},calculator:{init:function(b){b.find(".fundsInput").each(function(){if(a(this).val()<0){b.find(".chartArea .graph, .chartArea .legend").addClass("hidden")
}});
a(".fundsForm .fundsInput",b).on({change:function(f){var e=a(this).val();
var d=parseInt(a(this).attr("data-max"),10);
if(e>d){a(this).val(d)
}else{if(e===""&&f.target.id!=="timeHorizon"){a(this).val(0)
}else{if(e===""&&f.target.id==="timeHorizon"){a(this).val(1)
}}}ubs.funds.ui.calculator.updateFromInput(a(this),b)
},keydown:function(d){if(a.inArray(d.keyCode,[45,109,189,173,46,8,9,27,13,190])!==-1||(d.keyCode===65&&d.ctrlKey===true)||(d.keyCode>=35&&d.keyCode<=39)){return
}else{if(d.shiftKey||(d.keyCode<48||d.keyCode>57)&&(d.keyCode<96||d.keyCode>105)){d.preventDefault()
}}},keyup:function(f){var e=a(this).val();
var d=parseInt(a(this).attr("data-max"),10);
if(f.which===13){if(e>d){a(this).val(d)
}else{if(e===""&&f.target.id!=="timeHorizon"){a(this).val(0)
}else{if(e===""&&f.target.id==="timeHorizon"){a(this).val(1)
}}}ubs.funds.ui.calculator.updateFromInput(a(this),b)
}}}).parent().find("#timeHorizon").trigger("change");
a(".slider",b).each(function(){var f=parseInt(a(this).attr("data-min"),10),k=parseInt(a(this).attr("data-max"),10),e=parseInt(a(this).attr("data-value"),10),i=parseFloat(a(this).attr("data-step")),j="#"+a(this).attr("data-inputfield"),h=a(this).parent().find(".units").text(),d={},g={};
a(this).slider({value:e,min:f,max:k,step:i,start:function(l,m){d=l;
g=m.value
},slide:function(l,m){a(j).val(m.value)
},stop:function(n,o){var l=a(this),p=o.value,m=a("#"+a(this).attr("data-inputfield"));
ubs.funds.ui.calculator.change.init(m,l,p,b)
}});
a(this).append('<span class="min">'+f+" "+h+'</span><span class="max">'+ubs.funds.ui.calculator.change.thousandSeparator(k)+" "+h+"</span>").find(".ui-slider-handle").append('<span class="handleIcon"></span>')
});
var c=a("#periodicity",b);
c.on({change:function(){var d=parseInt(a(this).val(),10),e=a(this).parent().find(".units").text(),f=12000,g;
if(!isNaN(d)){g=f/d
}else{g=f
}a(this).parent().find(".slider").slider("option","max",g);
a(this).parent().find(".slider .max").text(ubs.funds.ui.calculator.change.thousandSeparator(g)+" "+e)
}});
if(c.val()!=="12"){c.trigger("change")
}},updateFromInput:function(c,b){var d=a("."+c.attr("data-slider"),b),e=parseFloat(c.val());
d.slider({value:e});
ubs.funds.ui.calculator.change.init(c,d,e,b)
},change:{init:function(c,d,f,b){var e=ubs.funds.ui.calculator.change.before(c,b);
ubs.funds.ui.calculator.change.action(c,d,f,e,b);
ubs.funds.ui.calculator.change.after(c,d,e,b)
},before:function(c,b){if(c.prop("id")!=="inflation"){a(".bar.data",b).height(0)
}return c.val()
},action:function(m,o,n,h,j){var c=a(".bars",j).find(".bar-group").last().clone(),k='<li class="newBar"><span> </span></li>',d=false;
j.find(".fundsInput").each(function(){if(a(this).val()<0){d=true
}});
if(n>=0&&d===false){j.find(".chartArea .graph, .chartArea .legend").removeClass("hidden")
}else{j.find(".chartArea .graph, .chartArea .legend").addClass("hidden")
}m.attr("value",n);
o.attr("data-value",n);
if(m.attr("id")==="timeHorizon"){var b=a(".bars .bar-group",j).length,g;
if(n>=1){g=n
}else{m.val(1);
g=1
}var f=100/g;
if(b<g){for(var e=b;
e<g;
e++){a(c).clone().appendTo(".bars",j);
a(".x-axis",j).append(k)
}}else{if(b>g){for(var e=g;
e<b;
e++){a(".bars .bar-group:last",j).remove();
a(".x-axis li:last",j).remove()
}}}a(".bars .bar-group, .x-axis li",j).width(f-1+"%");
var l=g;
a(".x-axis li",j).each(function(p,q){if(l<=10){a(q).find("span").text(p+1)
}else{if(l>10&&l<=30&&(((p)%2)||l===p+1)){a(q).find("span").text(p+1)
}else{if(l>30&&l<=50&&(!((p+1)%5)||l===p+1)){a(q).find("span").text(p+1)
}else{a(q).find("span").text("")
}}}})
}ubs.funds.ui.calculator.change.render(m,o,h,j)
},read:function(f,e){var d=a(".fundsForm .fundsSelect",e).val(),g={},c,b=a(".fundsForm .fundsInput",e).not(".fundsSelect").get();
while(c=b.shift()){g[c.id]=a(c).val();
a(c).parent().parent().find(".slider").attr("data-value",g[c.id])
}g.periodsMultiplier=d;
return g
},render:function(d,f,T,M){var c=ubs.funds.ui.calculator.change.read(d,M);
var Z=parseFloat(c.initialPayoff),O=parseFloat(c.regularPayment),S=parseFloat(c.timeHorizon),R=parseInt(c.periodsMultiplier,10),s=(S*R),X=parseFloat(c.yearlyGrowth/100),V=parseFloat(c.inflation/100),P=parseFloat(1+(X-V)),A,F,o,Y,t,v=[],U,J=a(".bar"),z=50,ab=J.filter(".fig2",M),aa=J.filter(".fig1",M),l=J.filter(".fig0",M),b,h=a(".y-axis .y-value",M).length,m,K,I,L,D=a(".bars",M).find(".bar-group").get(),W=0;
v.totalGrowth=[];
v.regularPayment=[];
v.initialPayoff=[];
function B(g,i,e){if(g>=0){o=i;
A=((i+O)*Math.pow((1+(X-e)),(1/R)));
F=parseInt(s-g,10);
if(F%R===0&&F>0&&e==0){U=F/R;
v.totalGrowth[U-1]=o;
v.regularPayment[U-1]=(U)*O*R;
v.initialPayoff[U-1]=Z
}g--;
B(g,A,e)
}else{return
}}B(s,Z,V);
t=o;
B(s,Z,0);
Y=o;
b=Y;
var C=a(d).prop("id");
l.css({"z-index":1});
aa.css({"z-index":2});
ab.css({"z-index":3});
a(".accountValueData span.dataNumber",M).text(ubs.funds.ui.calculator.change.thousandSeparator(Math.round(Y)));
a(".effectiveValueData span.dataNumber",M).text(ubs.funds.ui.calculator.change.thousandSeparator(Math.round(t)));
a(".accountValue span.timeHorizonNumber, .effectiveValue span.timeHorizonNumber",M).text(S);
var G=Math.round(b/1000)*1000;
if(G>b){b=G
}else{b=G+1000
}var k=(b*1.25)/(h-1),Q=0,j=a(".y-axis .y-value span",M).get();
while(I=j.shift()){a(I).text(ubs.funds.ui.calculator.change.thousandSeparator((h-Q-1)*k));
Q++
}if(C!=="inflation"){while(K=D.shift()){var u,ac,H,E,N=a(K).find(".bar").not(".data").get(),V=0,L;
while(L=N.shift()){switch(V){case 2:u=Z;
m=Math.round((v.initialPayoff[W]/b)*10000)/100;
break;
case 1:ac=(Math.round(parseFloat(v.regularPayment[W]+v.initialPayoff[W])*100)/100);
H=(Math.round(parseFloat(v.regularPayment[W])*100)/100);
m=Math.round((ac/b)*10000)/100;
break;
case 0:E=Math.round(parseFloat(v.totalGrowth[W])*100)/100;
m=Math.round((E/b)*10000)/100;
break
}ubs.funds.ui.calculator.change.setBarHeight(m,z,L,M);
V++
}a(K).find("span.dataPayoff").text(ubs.funds.ui.calculator.change.thousandSeparator(Math.round(u*20)/20));
a(K).find("span.dataPayment").text(ubs.funds.ui.calculator.change.thousandSeparator(Math.round(H*20)/20));
a(K).find("span.dataGrowth").text(ubs.funds.ui.calculator.change.thousandSeparator(Math.round((E-ac)*20)/20));
a(K).find("span.dataTotal").text(ubs.funds.ui.calculator.change.thousandSeparator(Math.round(E*20)/20));
ubs.funds.ui.calculator.change.setBarsTooltips(M);
W++
}}},setBarHeight:function(h,f,d,c){var g=a(d,c).parent().find(".data.bar");
if(!Modernizr.csstransitions){var e=a(d).parent(),b=e.index(),i=e.length;
a(d).each(function(){a(this).delay((b/i)*f).animate({height:h+"%",queue:false},f,function(){if(g.height()<h){g.height(h+"%")
}})
})
}else{a(d,c).height(function(){if(g.height()<h){g.height(h+"%")
}return h+"%"
})
}},thousandSeparator:function(f){var h,e,d,c,b,g;
f+="";
h=f.split(".");
e=h[0];
d=h.length>1?"."+h[1]:"";
g=/(\d+)(\d{3})/;
while(g.test(e)){e=e.replace(g,"$1'$2")
}if(d!==""){c=parseFloat(d).toFixed(2);
b=c.split(".");
d="."+b[1]
}return e+d
},setBarsTooltips:function(b){a(".data.bar",b).each(function(c,d){a(d,b).tooltip({items:"span.bar.data",tooltipClass:"fundsChartData",content:function(){return a(this).html()
},position:{my:"center bottom",at:"center top-10",using:function(e,f){a(this).css(e);
a(this).find(".ui-tooltip-content").append('<div class="arrow '+f.vertical+" "+f.horizontal+'" ></div>')
}}})
}).on("mouseleave blur",function(){a(".fundsChartData").hide()
})
},after:function(c,d,e,b){}}}})
}(ubs.$));