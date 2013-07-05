Ember.TEMPLATES["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n<li>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "movie.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "movie", "movie", options) : helperMissing.call(depth0, "linkTo", "movie", "movie", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <p> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "movie.year", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("&nbsp");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "movie.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n      ");
  return buffer;
  }

  data.buffer.push("<h3>Basic List</h3>\n<ul>\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "movie", "in", "info", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n<div id=\"dynamic\"></div>\n<h3>Movies</h3>\n  <ul>\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "movie", "in", "movies", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>");
  return buffer;
  
});