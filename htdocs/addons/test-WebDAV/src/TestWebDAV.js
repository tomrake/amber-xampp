define("test-WebDAV/TestWebDAV", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('TestWebDAV');
smalltalk.packages["TestWebDAV"].transport = {"type":"amd","amdNamespace":"test-WebDAV"};

smalltalk.addClass('TestWebDAV', globals.Object, [], 'TestWebDAV');

smalltalk.addMethod(
smalltalk.method({
selector: "delete:",
protocol: 'as yet unclassified',
fn: function (url){
var self=this;
function $PlatformInterface(){return globals.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
_st($PlatformInterface())._ajax_(globals.HashedCollection._newFromPairs_(["url",url,"type","DELETE"]));
return self}, function($ctx1) {$ctx1.fill(self,"delete:",{url:url},globals.TestWebDAV.klass)})},
args: ["url"],
source: "delete: url\x0a\x09PlatformInterface ajax: \x0a    #{ \x0a        'url' ->  url.\x0a       'type' -> 'DELETE' \x0a    }",
messageSends: ["ajax:"],
referencedClasses: ["PlatformInterface"]
}),
globals.TestWebDAV.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "makecol:",
protocol: 'as yet unclassified',
fn: function (url){
var self=this;
function $PlatformInterface(){return globals.PlatformInterface||(typeof PlatformInterface=="undefined"?nil:PlatformInterface)}
return smalltalk.withContext(function($ctx1) { 
_st($PlatformInterface())._ajax_(globals.HashedCollection._newFromPairs_(["url",url,"type","MKCOL"]));
return self}, function($ctx1) {$ctx1.fill(self,"makecol:",{url:url},globals.TestWebDAV.klass)})},
args: ["url"],
source: "makecol: url\x0a\x09PlatformInterface ajax: \x0a    #{ \x0a        'url' ->  url.\x0a       'type' -> 'MKCOL' \x0a    }",
messageSends: ["ajax:"],
referencedClasses: ["PlatformInterface"]
}),
globals.TestWebDAV.klass);

});
