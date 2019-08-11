// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Cn from "re-classnames/src/Cn.bs.js";
import * as React from "react";
import * as Prelude$Frontend from "../helpers/Prelude.bs.js";
import * as NotFound_Css$Frontend from "./NotFound_Css.bs.js";

function NotFound(Props) {
  return React.createElement("div", {
              className: Cn.make(/* :: */[
                    "container",
                    /* :: */[
                      NotFound_Css$Frontend.container,
                      /* [] */0
                    ]
                  ])
            }, React.createElement("h1", undefined, Prelude$Frontend.s("Page not found")), React.createElement("p", undefined, Prelude$Frontend.s("The page you requested was not found.")));
}

var Css = 0;

var make = NotFound;

export {
  Css ,
  make ,
  
}
/* react Not a pure module */
