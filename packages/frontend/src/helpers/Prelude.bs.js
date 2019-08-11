// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.js";

var list = Belt_List.toArray;

var RR = /* module */[
  /* statelessComponent */ReasonReact.statelessComponent,
  /* statelessComponentWithRetainedProps */ReasonReact.statelessComponentWithRetainedProps,
  /* reducerComponent */ReasonReact.reducerComponent,
  /* reducerComponentWithRetainedProps */ReasonReact.reducerComponentWithRetainedProps,
  /* element */ReasonReact.element,
  /* wrapReasonForJs */ReasonReact.wrapReasonForJs,
  /* createDomElement */ReasonReact.createDomElement,
  /* wrapJsForReason */ReasonReact.wrapJsForReason,
  /* Router */ReasonReact.Router,
  /* list */list
];

function s(prim) {
  return prim;
}

function parseUrl(url) {
  var match = url[/* path */0];
  if (match) {
    switch (match[0]) {
      case "job" : 
          var match$1 = match[1];
          if (match$1 && !match$1[1]) {
            return /* Job */[match$1[0]];
          } else {
            return /* NotFound */2;
          }
      case "jobs" : 
          if (match[1]) {
            return /* NotFound */2;
          } else {
            return /* Jobs */1;
          }
      default:
        return /* NotFound */2;
    }
  } else {
    return /* Home */0;
  }
}

function unwrap(param) {
  if (typeof param === "number") {
    switch (param) {
      case 0 : 
          return "home";
      case 1 : 
          return "jobs";
      case 2 : 
          return "NotFound";
      
    }
  } else {
    return "job";
  }
}

var Router = /* module */[
  /* parseUrl */parseUrl,
  /* unwrap */unwrap
];

function linkTo(path, $$event) {
  $$event.preventDefault();
  return ReasonReactRouter.push(path);
}

export {
  RR ,
  s ,
  Router ,
  linkTo ,
  
}
/* ReasonReact Not a pure module */
