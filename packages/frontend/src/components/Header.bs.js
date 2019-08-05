// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Prelude$Tripdeer from "../helpers/Prelude.bs.js";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.js";

function Header(Props) {
  var linkTo = function ($$event, path) {
    $$event.preventDefault();
    return ReasonReactRouter.push(path);
  };
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: "header py-4"
                }, React.createElement("div", {
                      className: "container"
                    }, React.createElement("div", {
                          className: "d-flex"
                        }, React.createElement("a", {
                              className: "header-brand",
                              href: "/",
                              onClick: (function ($$event) {
                                  return linkTo($$event, "/");
                                })
                            }, Prelude$Tripdeer.s("ParentalJobs"))))), React.createElement("div", {
                  className: "header collapse d-lg-flex p-0",
                  id: "headerMenuCollapse"
                }, React.createElement("div", {
                      className: "container"
                    }, React.createElement("div", {
                          className: "row align-items-center"
                        }, React.createElement("div", {
                              className: "col-lg order-lg-first"
                            }, React.createElement("ul", {
                                  className: "nav nav-tabs border-0 flex-column flex-lg-row"
                                }, React.createElement("li", {
                                      className: "nav-item"
                                    }, React.createElement("a", {
                                          className: "nav-link",
                                          href: "/",
                                          onClick: (function ($$event) {
                                              return linkTo($$event, "/Home");
                                            })
                                        }, React.createElement("i", {
                                              className: "fe fe-home"
                                            }), Prelude$Tripdeer.s("Home"))), React.createElement("li", {
                                      className: "nav-item"
                                    }, React.createElement("a", {
                                          className: "nav-link",
                                          href: "/jobs",
                                          onClick: (function ($$event) {
                                              return linkTo($$event, "/jobs");
                                            })
                                        }, React.createElement("i", {
                                              className: "fe fe-box"
                                            }), Prelude$Tripdeer.s("Jobs")))))))));
}

var make = Header;

export {
  make ,
  
}
/* react Not a pure module */