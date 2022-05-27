"use strict";
exports.id = 959;
exports.ids = [959];
exports.modules = {

/***/ 1374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ rolesData),
/* harmony export */   "a": () => (/* binding */ trainingData)
/* harmony export */ });
const rolesData = [
    {
        id: 1,
        role: "Compliance Manager",
        type: "In-office",
        location: "Lagos, Nigeria"
    },
    {
        id: 2,
        role: "Backend Engineer (Typescript/Postgres)",
        type: "Remote",
        location: "Lagos, Nigeria"
    },
    {
        id: 3,
        role: "React native engineer",
        type: "Remote",
        location: "Lagos, Nigeria"
    },
    {
        id: 4,
        role: "Compliance Manager",
        type: "In-office",
        location: "Lagos, Nigeria"
    },
    {
        id: 5,
        role: "Backend Engineer (Typescript/Postgres)",
        type: "Remote",
        location: "Lagos, Nigeria"
    },
    {
        id: 6,
        role: "React native engineer",
        type: "Remote",
        location: "Lagos, Nigeria"
    },
    {
        id: 7,
        role: "Compliance Manager",
        type: "In-office",
        location: "Lagos, Nigeria"
    },
    {
        id: 8,
        role: "Backend Engineer (Typescript/Postgres)",
        type: "Remote",
        location: "Lagos, Nigeria"
    },
    {
        id: 9,
        role: "React native engineer",
        type: "Remote",
        location: "Lagos, Nigeria"
    }, 
];
const trainingData = [
    {
        id: 1,
        course: "Basic Computer",
        code: "(SKO1CA)",
        desc: "Increase your prouductivity and Acquire solid computer skills. Including computer appreciation, Using the Internet, Ms office suit, and coral draw.",
        price: "42",
        dur: "8 weeks"
    },
    {
        id: 2,
        course: "Web Design",
        code: "(SKO2WD)",
        desc: "Learn how to create stunning website designs with html, Css and Javascript.",
        price: "120",
        dur: "12 weeks"
    },
    {
        id: 3,
        course: "Web Development",
        code: "(SKO5DF)",
        desc: "Increase your prouductivity and Acquire solid computer skills. Including computer appreciation, Using the Internet, Ms office suit, and coral draw.",
        price: "330",
        dur: "12 weeks"
    },
    {
        id: 4,
        course: "Flutter Dart",
        code: "(SKOFD)",
        desc: "Learn to build beautiful cross platform mobile applications using the Flutter and Dart",
        price: "350",
        dur: "12 weeks"
    },
    {
        id: 5,
        course: "UI/UK Design",
        code: "(SKOUX)",
        desc: "Learn to create websites and mobile applicaton interfaces and kickstart your career as a UI/UX designer",
        price: "300",
        dur: "11 weeks"
    },
    {
        id: 6,
        course: "Android Development",
        code: "(SKOUX)",
        desc: "Learn Android app development from Scratch to Advance. Learn to code in Java while building fun Android projects.",
        price: "320",
        dur: "12 weeks"
    },
    {
        id: 7,
        course: "Game Development",
        code: "(SKO9GD)",
        desc: " Climb the ladder of Game development with Unreal Engine 4.x and Game development & design using Unity Engine.",
        price: "362",
        dur: "15 weeks"
    },
    {
        id: 8,
        course: "Digital Marketing",
        code: "(SK11DM)",
        desc: "Master Digital Marketing: Advertise using the various Social Media Marketing platforms for Marketing including: SEO, Youtube, Email, Facebook Marketing, Analytics and more!",
        price: "172",
        dur: "18 weeks"
    },
    {
        id: 9,
        course: "Branding",
        code: "(SKO5BD)",
        desc: "Learn the worlds most popular language(Javscript) server-side Development library (Node.js). And build fully functional database.",
        price: "172",
        dur: "8 weeks"
    },
    {
        id: 10,
        course: "Animation (3D)",
        code: "(SK10AD5)",
        desc: "Climb the ladder of Game development with Unreal Engine 4.x and Game development & design using Unity Engine.",
        price: "285",
        dur: "8 weeks"
    },
    {
        id: 11,
        course: "Phyton",
        code: "(SK06PT)",
        desc: "Climb the ladder of Game development with Unreal Engine 4.x and Game development & design using Unity Engine.",
        price: "310",
        dur: "12 weeks"
    },
    {
        id: 12,
        course: "Javascript/Nodejs",
        code: "(SKO6JS)",
        desc: "  Learn the worlds most popular language(Javscript) server-side Development library (Node.js). And build fully functional database.",
        price: "300",
        dur: "12 weeks"
    }, 
];


/***/ }),

/***/ 4303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ myLoader)
/* harmony export */ });
const myLoader = ({ src , width , quality  })=>{
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};


/***/ }),

/***/ 7700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CS": () => (/* reexport */ Career_Section1),
  "CU": () => (/* reexport */ Career_Section2),
  "_$": () => (/* reexport */ Career_Section3),
  "ux": () => (/* reexport */ Career_Section4)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./Utils/loader.js
var loader = __webpack_require__(4303);
;// CONCATENATED MODULE: ./components/Career/Section1.jsx




const Section1 = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "career_section1",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "section1_main_wrap",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section1_main_img1 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                src: "/assets/emoji3.jpg",
                                width: 360,
                                height: 410,
                                alt: "circle",
                                priority: true
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "section1_main",
                        "data-aos": "fade-right",
                        "data-aos-delay": "400",
                        "data-aos-duration": "1400",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                className: "cur_hov",
                                children: [
                                    "Join",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "us",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Us."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "us_img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                    loader: loader/* myLoader */.t,
                                                    src: "/assets/career_svg1.svg",
                                                    width: 470,
                                                    height: 389,
                                                    alt: "circle",
                                                    priority: true
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "We’re who we are, and at the heart for what we do is our unique perspective, culture and community."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "section1_btn",
                                "data-aos": "fade-right",
                                "data-aos-delay": "400",
                                "data-aos-duration": "1400",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    children: "See open positions"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section1_main_img2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            loader: loader/* myLoader */.t,
                            src: "/assets/emoji1.png",
                            width: 290,
                            height: 473,
                            alt: "circle"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "section1_aux_wrap",
                "data-aos": "fade-down",
                "data-aos-delay": "400",
                "data-aos-duration": "1400",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section1_aux_img1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            loader: loader/* myLoader */.t,
                            src: "/assets/emoji2.png",
                            width: 247,
                            height: 420,
                            alt: "circle"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section1_aux_img2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            loader: loader/* myLoader */.t,
                            src: "/assets/emoji4.jpg",
                            width: 359,
                            height: 586,
                            alt: "circle"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "section1_mob_wrap",
                "data-aos": "fade-down",
                "data-aos-delay": "400",
                "data-aos-duration": "1400",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section1_aux_img1 emoji_bg ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            loader: loader/* myLoader */.t,
                            src: "/assets/emoji3.png",
                            width: 248,
                            height: 318,
                            alt: "circle"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section1_aux_img2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            loader: loader/* myLoader */.t,
                            src: "/assets/emoji8.png",
                            width: 99,
                            height: 116,
                            alt: "circle"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section1_aux_img3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            loader: loader/* myLoader */.t,
                            src: "/assets/emoji9.png",
                            width: 202,
                            height: 217,
                            alt: "circle"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section1_aux_img4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            loader: loader/* myLoader */.t,
                            src: "/assets/emoji10.png",
                            width: 197,
                            height: 308,
                            alt: "circle"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Career_Section1 = (Section1);

;// CONCATENATED MODULE: ./components/Career/Section2.jsx




const Section2 = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "career_section2 cu1",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "Our",
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "ring",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Culture"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "ring_img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    loader: loader/* myLoader */.t,
                                    src: "/assets/curl.svg",
                                    alt: "img",
                                    width: 439,
                                    height: 108
                                })
                            }),
                            " "
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section2_cards",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "section2_card",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section2_content",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "400",
                                    "data-aos-duration": "1400",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "no",
                                            children: "01."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "letter",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "Stay inspired every day"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "We show up to work every day inspired to pour our brains, hearts and vision into a product that matters to us because we care about the community of people who use it."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section2_img ",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "400",
                                    "data-aos-duration": "1400",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "emoji2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/emoji5.png",
                                            alt: "img",
                                            width: 409,
                                            height: 508
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "section2_card_mul",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section2_img",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section2_img1",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "400",
                                            "data-aos-duration": "1400",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "emoji3",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                    loader: loader/* myLoader */.t,
                                                    src: "/assets/emoji4.png",
                                                    alt: "img",
                                                    width: 412,
                                                    height: 376
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section2_img2",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "400",
                                            "data-aos-duration": "1400",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                loader: loader/* myLoader */.t,
                                                src: "/assets/emoji6.png",
                                                alt: "img",
                                                width: 412,
                                                height: 672
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section2_content",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section2_content1",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "400",
                                            "data-aos-duration": "1400",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "letter",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "no",
                                                            children: "02."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            children: "Inclusive & fresh team."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Softkodes is built for the global population, so we make sure our team actually reflects the global population. It’s a fresh, focused, inclusive and exciting work environment"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section2_content2",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "400",
                                            "data-aos-duration": "1400",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "letter",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "no",
                                                            children: "03."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            children: "Believe in each other"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "We belive in each other, rely on each other, hold the bar high for each other and have each other’s backs"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const Career_Section2 = (Section2);

;// CONCATENATED MODULE: ./components/Career/Section3.jsx




const Section3 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "career_section3",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "section3_wrap",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section3_svg",
                        "data-aos": "fade-right",
                        "data-aos-delay": "400",
                        "data-aos-duration": "1400",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            loader: loader/* myLoader */.t,
                            src: "/assets/ellipse.svg",
                            width: 244,
                            height: 230,
                            alt: "ellipse"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section3_svg_mob",
                        "data-aos": "fade-right",
                        "data-aos-delay": "400",
                        "data-aos-duration": "1400",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            loader: loader/* myLoader */.t,
                            src: "/assets/ellipse_mob.svg",
                            width: 244,
                            height: 230,
                            alt: "ellipse"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "section3_card",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "section3_content",
                                "data-aos": "fade-right",
                                "data-aos-delay": "400",
                                "data-aos-duration": "1400",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Flexible "
                                            }),
                                            "Work"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "enviroment"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "We work hybrid, remote or in-office. We open doors to everyone and give you the freedom to decide how you work best."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "section3_img",
                                "data-aos": "fade-right",
                                "data-aos-delay": "400",
                                "data-aos-duration": "1400",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    loader: loader/* myLoader */.t,
                                    src: "/assets/career_img12.png",
                                    width: 409,
                                    height: 608,
                                    alt: "image"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Career_Section3 = (Section3);

// EXTERNAL MODULE: ./Utils/data.js
var data = __webpack_require__(1374);
;// CONCATENATED MODULE: ./components/Career/Section4.jsx





const Section4 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "career_section4 cu2",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "search_wrap",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Like the way we see the world? Join Us."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "search_control",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    placeholder: "Search open roles"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "search_svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        alt: "search",
                                        width: 25,
                                        height: 21,
                                        src: "/assets/search.svg"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "search_cards",
                    children: data/* rolesData.map */.$.map((value, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "search_card",
                            "data-aos": "fade-down",
                            "data-aos-delay": "400",
                            "data-aos-duration": "1400",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: value.role
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card_body",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "card_body_wrap",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: value.type
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: value.location
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "role_btn",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "View Role"
                                        })
                                    })
                                })
                            ]
                        }, index)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const Career_Section4 = (Section4);

;// CONCATENATED MODULE: ./components/Career/index.js






/***/ }),

/***/ 393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./Utils/loader.js
var loader = __webpack_require__(4303);
;// CONCATENATED MODULE: ./components/Contact/main.jsx




const budgetArr = [
    {
        id: 1,
        title: "<10,000"
    },
    {
        id: 2,
        title: "10K to 20K"
    },
    {
        id: 3,
        title: "30K to 40K"
    },
    {
        id: 4,
        title: "40K to 50K"
    },
    {
        id: 5,
        title: ">50K"
    }, 
];
const Main = ()=>{
    const { 0: budget , 1: setBudget  } = (0,external_react_.useState)(budgetArr[0].title);
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "contact",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    "data-aos": "fade-down",
                    "data-aos-delay": "400",
                    "data-aos-duration": "1300",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Hi!"
                        }),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Tell us what you"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            children: [
                                "want",
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "ser_em_wrap_aux",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        alt: "emoji",
                                        src: "/assets/con_emoji3.svg",
                                        width: 162,
                                        height: 155
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "contact_form_wrap",
                    "data-aos": "fade-down",
                    "data-aos-delay": "400",
                    "data-aos-duration": "1300",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        action: "https://formsubmit.co/info@softkodesllc.com",
                        method: "POST",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "control",
                                "data-aos": "fade-down",
                                "data-aos-delay": "400",
                                "data-aos-duration": "1300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    required: true,
                                    type: "text",
                                    name: "First Name",
                                    placeholder: "Enter First Name"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "control",
                                "data-aos": "fade-down",
                                "data-aos-delay": "400",
                                "data-aos-duration": "1300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    required: true,
                                    type: "text",
                                    name: "Last Name",
                                    placeholder: "Enter Last Name"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "control",
                                "data-aos": "fade-down",
                                "data-aos-delay": "400",
                                "data-aos-duration": "1300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    required: true,
                                    type: "email",
                                    name: "Email Address",
                                    placeholder: "Enter Email "
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "control",
                                "data-aos": "fade-down",
                                "data-aos-delay": "400",
                                "data-aos-duration": "1300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    required: true,
                                    type: "text",
                                    name: "Phone Number",
                                    placeholder: "Enter Phone Number"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "control",
                                "data-aos": "fade-down",
                                "data-aos-delay": "400",
                                "data-aos-duration": "1300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    required: true,
                                    type: "text",
                                    name: "Website",
                                    placeholder: "Enter Website"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "control",
                                "data-aos": "fade-down",
                                "data-aos-delay": "400",
                                "data-aos-duration": "1300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    required: true,
                                    type: "text",
                                    name: "Company or Organization",
                                    placeholder: "Enter Company/Organization"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "services",
                                "data-aos": "fade-down",
                                "data-aos-delay": "400",
                                "data-aos-duration": "1300",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ser_head_wrap",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "What services are you interested in"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "ser_em_wrap",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                    loader: loader/* myLoader */.t,
                                                    alt: "emoji",
                                                    src: "/assets/con_emoji1.svg",
                                                    width: 162,
                                                    height: 155
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "services_wrap",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "check_control",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "checkbox",
                                                        name: "Basic Website Service",
                                                        id: "checkWebsite"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "checkWebsite",
                                                        children: "Basic Website"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "check_control",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "checkbox",
                                                        name: "Digital Marketing Service",
                                                        id: "checkMarketing"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "checkMarketing",
                                                        children: "Digital Marketing"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "check_control",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "checkbox",
                                                        name: "Web Design Service",
                                                        id: "checkWeb"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "checkWeb",
                                                        children: "Web Design"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "check_control",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "checkbox",
                                                        name: "Animation 3D Service",
                                                        id: "checkAni"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "checkAni",
                                                        children: "Animation 3D"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "check_control",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "checkbox",
                                                        name: "Brand Website Service",
                                                        id: "checkBrand"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "checkBrand",
                                                        children: "Brand Website"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "check_control",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "checkbox",
                                                        name: "Mobile App Service",
                                                        id: "checkMobile"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "checkMobile",
                                                        children: "Mobile App"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "budget",
                                "data-aos": "fade-down",
                                "data-aos-delay": "400",
                                "data-aos-duration": "1300",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ser_head_wrap",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                children: [
                                                    "Project Budget ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "(USD)"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "ser_em_wrap",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                    loader: loader/* myLoader */.t,
                                                    alt: "emoji",
                                                    src: "/assets/con_emoji2.svg",
                                                    width: 122,
                                                    height: 125
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "budget_wrap",
                                        children: budgetArr.map((value, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: value.title === budget ? "budget_btn active" : "budget_btn",
                                                onClick: ()=>setBudget(value.title)
                                                ,
                                                children: [
                                                    " ",
                                                    value.title
                                                ]
                                            }, i)
                                        )
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                required: true,
                                hidden: true,
                                name: "Budget",
                                readOnly: true,
                                value: budget
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "control",
                                "data-aos": "fade-down",
                                "data-aos-delay": "400",
                                "data-aos-duration": "1300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    required: true,
                                    name: "Project Info",
                                    id: "",
                                    rows: "5",
                                    placeholder: " Tell Us About Your Project"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "contact_btn",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    children: "Submit"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const main = (Main);

;// CONCATENATED MODULE: ./components/Contact/index.js



/***/ }),

/***/ 4298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "yE": () => (/* reexport */ Culture_Section1),
  "TD": () => (/* reexport */ Culture_Section2),
  "Ik": () => (/* reexport */ Culture_Section3),
  "Ai": () => (/* reexport */ Culture_Section4),
  "QF": () => (/* reexport */ Culture_Section5),
  "aZ": () => (/* reexport */ Culture_Section6),
  "LH": () => (/* reexport */ Culture_Section7),
  "Qj": () => (/* reexport */ Culture_Section8),
  "Je": () => (/* reexport */ Culture_SmallCulture)
});

// UNUSED EXPORTS: HorFooter

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./Utils/loader.js
var loader = __webpack_require__(4303);
;// CONCATENATED MODULE: ./components/Culture/Section1.jsx




const Section1 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "culture-section1 cul-sel",
        "data-scroll": true,
        "data-scroll-id": "s1",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "hor-container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section1_main",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "C"
                                }),
                                "ULTURE"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "hor-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Here, we aim to actualize the full potential of every business, institution and individual with the use of technology. Our core values are passion, creativity, quality, innovation, continuous improvement, uniqueness and transparency."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "image",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/hor-arrow.svg",
                                            alt: "arrow",
                                            width: 320,
                                            height: 157
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Scroll Down"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "image2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/assets/culture_img1.png",
                        alt: ""
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const Culture_Section1 = (Section1);

// EXTERNAL MODULE: external "react-locomotive-scroll"
var external_react_locomotive_scroll_ = __webpack_require__(2966);
;// CONCATENATED MODULE: ./components/Culture/Section2.jsx





const Section2 = ()=>{
    const { scroll  } = (0,external_react_locomotive_scroll_.useLocomotiveScroll)();
    const { 0: scReady , 1: setScReady  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (!scroll) return;
        if (scReady) return;
        scroll.on("scroll", (args)=>{
            // Get all current elements : args.currentElements
            if (typeof args.currentElements["s1"] === "object") {
                let progress1 = args.currentElements["s1"].progress;
                if (progress1 > 0.2 && progress1 < 0.8) reverseBg();
            }
            if (typeof args.currentElements["s2"] === "object") {
                let progress2 = args.currentElements["s2"].progress;
                if (progress2 > 0.2 && progress2 < 0.8) changeBg();
            }
            if (typeof args.currentElements["s3"] === "object") {
                let progress3 = args.currentElements["s3"].progress;
                if (progress3 > 0.2 && progress3 < 0.8) reverseBg();
            }
            if (typeof args.currentElements["s4"] === "object") {
                let progress4 = args.currentElements["s4"].progress;
                if (progress4 > 0.2 && progress4 < 0.8) changeBg();
            }
            if (typeof args.currentElements["s5"] === "object") {
                let progress5 = args.currentElements["s5"].progress;
                if (progress5 > 0.2 && progress5 < 0.8) reverseBg();
            }
            if (typeof args.currentElements["s6"] === "object") {
                let progress6 = args.currentElements["s6"].progress;
                if (progress6 > 0.2 && progress6 < 0.8) changeBg();
            }
            if (typeof args.currentElements["s7"] === "object") {
                let progress7 = args.currentElements["s7"].progress;
                if (progress7 > 0.2 && progress7 < 0.8) reverseBg();
            }
            if (typeof args.currentElements["s8"] === "object") {
                let progress8 = args.currentElements["s8"].progress;
                if (progress8 > 0.2 && progress8 < 0.8) changeBg();
            }
        });
        setScReady(true);
    }, [
        scroll
    ]);
    const changeBg = (el)=>{
        const con = document.querySelector(".sc-con");
        if (con.classList.contains("sc-alt")) return;
        con.classList.add("sc-alt");
    };
    const reverseBg = (el)=>{
        const con = document.querySelector(".sc-con");
        if (con.classList.contains("sc-alt")) con.classList.remove("sc-alt");
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        "data-scroll": true,
        "data-scroll-id": "s2",
        className: "culture-section2 cul-sel cu-1",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "hor-container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section2_main",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Talent"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "We are a team of young talented designers and developers who are ready to tackle the most intricate puzzles when it comes to websites and app development. As a team, We are committed to providing smart and effective solutions to technology-related problems."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section2_img",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img1 im",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                width: 293,
                                height: 355,
                                alt: "people",
                                src: "/assets/people1.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img2 im",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                width: 293,
                                height: 355,
                                alt: "people",
                                src: "/assets/people2.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img3 im",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                width: 293,
                                height: 355,
                                alt: "people",
                                src: "/assets/people3.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img4 im",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                width: 293,
                                height: 355,
                                alt: "people",
                                src: "/assets/people4.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img5 im",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                width: 293,
                                height: 355,
                                alt: "people",
                                src: "/assets/people5.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img6 im",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                width: 293,
                                height: 355,
                                alt: "people",
                                src: "/assets/people6.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img7 im",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                width: 293,
                                height: 355,
                                alt: "people",
                                src: "/assets/people7.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img8 im",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                width: 293,
                                height: 355,
                                alt: "people",
                                src: "/assets/people8.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img9",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                width: 293,
                                height: 355,
                                alt: "people",
                                src: "/assets/people9.png"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Culture_Section2 = (Section2);

;// CONCATENATED MODULE: ./components/Culture/Section3.jsx




const Section3 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "culture-section3 cul-sel",
        "data-scroll": true,
        "data-scroll-id": "s3",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "hor-container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section3_main",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "We’re about a mixture of Science, Logic and Emotion..."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "In other to provide the best experience, our products and services intersects science, logic and emotion. We approach projects with technical precision, while considering the best possible outcome that evokes emotions."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section3_img",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img1 img",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                width: 400,
                                height: 470,
                                alt: "people",
                                src: "/assets/culture2_img1.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img2 img",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                width: 400,
                                height: 470,
                                alt: "people",
                                src: "/assets/culture2_img2.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img3 img",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                width: 400,
                                height: 470,
                                alt: "people",
                                src: "/assets/culture2_img3.png"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Culture_Section3 = (Section3);

;// CONCATENATED MODULE: ./components/Culture/Section4.jsx




const Section4 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "culture-section4 cul-sel",
        "data-scroll": true,
        "data-scroll-id": "s4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "hor-container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section4_main",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Preamble."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "At Softkodes, we provide tech solutions with solid design and development expertise. We build world class websites, mobile applications, and provide online business services"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section4_img",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "img1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            loader: loader/* myLoader */.t,
                            width: 700,
                            height: 470,
                            alt: "people",
                            src: "/assets/culture4_img.png"
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const Culture_Section4 = (Section4);

;// CONCATENATED MODULE: ./components/Culture/Section5.jsx



const Section5 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "culture-section5 cul-sel",
        "data-scroll": true,
        "data-scroll-id": "s5",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "hor-container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section5_main",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            children: [
                                "Evoke ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "emotion"
                                }),
                                " simplify the ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "process"
                                }),
                                " and transform pooeple/s dily routine for the better."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Our Agency Policy"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section5_main2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Softkodes is an education platform that empowers creatives to do what they love best: designing visual magic"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const Culture_Section5 = (Section5);

;// CONCATENATED MODULE: ./components/Culture/Section6.jsx


const Section6 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "culture-section6 cul-sel ",
        "data-scroll": true,
        "data-scroll-id": "s6",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "hor-container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "section6_main",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Softkodes is a tech solutions company with solid design and development expertise. We build state-of-the-art websites, mobile applications, and provide online business services."
                })
            })
        })
    }));
};
/* harmony default export */ const Culture_Section6 = (Section6);

;// CONCATENATED MODULE: ./components/Culture/Section7.jsx




const Section7 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "culture-section7 cul-sel",
        "data-scroll": true,
        "data-scroll-id": "s7",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "hor-container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section7_main",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Round Table decision"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "& Counselling."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "We work closely as a team, sharing ideas and concepts to ensure that our products are up to par."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section7_img",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                width: 234,
                                height: 500,
                                alt: "people",
                                src: "/assets/culture7_img1.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                width: 234,
                                height: 500,
                                alt: "people",
                                src: "/assets/culture7_img2.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                width: 234,
                                height: 500,
                                alt: "people",
                                src: "/assets/culture7_img3.png"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Culture_Section7 = (Section7);

;// CONCATENATED MODULE: ./components/Culture/Section8.jsx




const Section8 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "culture-section8 cul-sel",
        "data-scroll": true,
        "data-scroll-id": "s8",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "hor-container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section8_main",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Distinctions."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "We have worked with various prominent brands and delivered satisfactorily. Our experienced team work tirelessly to ensure that clients are provided with the best products and services. In other to achieve this, we combine our expertise with the brand’s vision and create magic"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section8_img",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "img1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            loader: loader/* myLoader */.t,
                            width: 700,
                            height: 470,
                            alt: "people",
                            src: "/assets/culture8_img.png"
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const Culture_Section8 = (Section8);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Culture/HorFooter.jsx





const HorFooter = ()=>{
    const router = useRouter();
    return(/*#__PURE__*/ _jsx("div", {
        className: "hor-footer",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "footer_wrap",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "top",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "left",
                            "data-aos": "fade-right",
                            "data-aos-delay": "400",
                            "data-aos-duration": "1300",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "image",
                                    onClick: ()=>router.push("/")
                                    ,
                                    children: /*#__PURE__*/ _jsx(Image, {
                                        loader: myLoader,
                                        src: "/assets/title.svg",
                                        width: 336,
                                        height: 109,
                                        alt: "title"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("h3", {
                                    children: "Info@softkodesllc.com"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: "km 5 Refinery road opp Chicken Republic. Effurun Delta state"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "center",
                            "data-aos": "fade-bottom",
                            "data-aos-delay": "400",
                            "data-aos-duration": "1300",
                            children: [
                                /*#__PURE__*/ _jsx("h1", {
                                    children: "Quick Links"
                                }),
                                /*#__PURE__*/ _jsxs("ul", {
                                    children: [
                                        /*#__PURE__*/ _jsx("li", {
                                            onClick: ()=>router.push("/")
                                            ,
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            onClick: ()=>router.push("/member")
                                            ,
                                            children: "Get to know us"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            onClick: ()=>router.push("/culture")
                                            ,
                                            children: "Culture"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            onClick: ()=>router.push("/projects")
                                            ,
                                            children: "Our Works"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            onClick: ()=>router.push("/training")
                                            ,
                                            children: "Training"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "right",
                            "data-aos": "fade-left",
                            "data-aos-delay": "400",
                            "data-aos-duration": "1300",
                            children: [
                                /*#__PURE__*/ _jsx("h1", {
                                    onClick: ()=>router.push("/contact")
                                    ,
                                    children: "Contact Us"
                                }),
                                /*#__PURE__*/ _jsxs("ul", {
                                    children: [
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "Dribble"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "Instagram"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "Twitter"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "Behance"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "Facebook"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "Medium"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "bottom",
                    "data-aos": "fade-up",
                    "data-aos-delay": "400",
                    "data-aos-duration": "1300",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "copy",
                            children: "Copyright Softkode all rights reserved."
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "list",
                            children: [
                                /*#__PURE__*/ _jsx("p", {
                                    children: "Terms Condition "
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    onClick: ()=>router.push("/privacy")
                                    ,
                                    children: "Privacy Policy"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: "FAQ"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Culture_HorFooter = ((/* unused pure expression or super */ null && (HorFooter)));

;// CONCATENATED MODULE: ./components/Culture/SmallCulture.jsx




let bgChange = false;
const SmallCulture = ()=>{
    const ovrRef = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        if (!window) return;
        window.addEventListener("scroll", checkBg);
        return ()=>{
            window.removeEventListener("scroll", checkBg);
        };
    }, []);
    const checkBg = (e)=>{
        const bg1 = document.querySelector(".small2");
        const bg2 = document.querySelector(".small4");
        const bg3 = document.querySelector(".small6");
        const bg4 = document.querySelector(".small8");
        const ans = percentageSeen(bg1);
        const ans2 = percentageSeen(bg2);
        const ans3 = percentageSeen(bg3);
        const ans4 = percentageSeen(bg4);
        if (bgChange === false) {
            if (ans === true) {
                bgChange = true;
                changeBg(bg1);
            }
            if (ans2 === true) {
                bgChange = true;
                changeBg(bg1);
            }
            if (ans3 === true) {
                bgChange = true;
                changeBg(bg1);
            }
            if (ans4 === true) {
                bgChange = true;
                changeBg(bg1);
            }
        }
        if (bgChange === true) {
            if (ans === false && ans2 !== true && ans3 !== true && ans4 !== true) {
                bgChange = false;
                reverseBg(bg1);
            }
            if (ans2 === false && ans !== true && ans3 !== true && ans4 !== true) {
                bgChange = false;
                reverseBg(bg1);
            }
            if (ans3 === false && ans !== true && ans2 !== true && ans4 !== true) {
                bgChange = false;
                reverseBg(bg1);
            }
            if (ans4 === false && ans !== true && ans2 !== true && ans3 !== true) {
                bgChange = false;
                reverseBg(bg1);
            }
        }
    };
    const changeBg = ()=>{
        ovrRef.current.style.background = "#000";
        ovrRef.current.style.color = "#fff";
    };
    const reverseBg = ()=>{
        ovrRef.current.style.background = "#fff";
        ovrRef.current.style.color = "#000";
    };
    const percentageSeen = (el)=>{
        const box = el.getBoundingClientRect();
        return box.top <= 0.6 * window.innerHeight && box.bottom >= 0;
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "small_culture",
        ref: ovrRef,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "small1",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Culture"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Here, we aim to actualize the full potential of every business, institution and individual with the use of technology. Our core values are passion, creativity, quality, innovation, continuous improvement, uniqueness and transparency."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                src: "/assets/small1.png",
                                alt: "culture",
                                width: 301,
                                height: 460
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "small2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Talent"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "We are a team of young talented designers and developers who are ready to tackle the most intricate puzzles when it comes to websites and app development. As a team, We are committed to providing smart and effective solutions to technology-related problems."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "image",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/people1.png",
                                        alt: "culture",
                                        width: 151,
                                        height: 225
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/people2.png",
                                        alt: "culture",
                                        width: 151,
                                        height: 225
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/people3.png",
                                        alt: "culture",
                                        width: 151,
                                        height: 225
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/people4.png",
                                        alt: "culture",
                                        width: 151,
                                        height: 225
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/people5.png",
                                        alt: "culture",
                                        width: 151,
                                        height: 225
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "small3",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "We’re about a mixture of Science, Logic and Emotion..."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "In other to provide the best experience, our products and services intersects science, logic and emotion. We approach projects with technical precision, while considering the best possible outcome that evokes emotions."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "image",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img1 img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/culture2_img2.png",
                                        alt: "culture",
                                        width: 232,
                                        height: 263
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img2 img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/culture2_img1.png",
                                        alt: "culture",
                                        width: 232,
                                        height: 263
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img3 img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/culture2_img3.png",
                                        alt: "culture",
                                        width: 232,
                                        height: 263
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "small4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Preamble"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "At Softkodes, we provide tech solutions with solid design and development expertise. We build world class websites, mobile applications, and provide online business services"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "img1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    loader: loader/* myLoader */.t,
                                    src: "/assets/culture4_img.png",
                                    alt: "culture",
                                    width: 322,
                                    height: 263
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "small5",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                children: [
                                    "Evoke ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "emotion"
                                    }),
                                    " simplify the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "process"
                                    }),
                                    " and transform pooeple/s dily routine for the better."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Our Agency Policy"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Softkodes is an education platform that empowers creatives to do what they love best: designing visual magic"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "small6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "content",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Softkodes is a tech solutions company with solid design and development expertise. We build state-of-the-art websites, mobile applications, and provide online business services."
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "small7",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Round Table descision"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "& Counselling."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "We work closely as a team, sharing ideas and concepts to ensure that our products are up to par."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "image",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img1 img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/culture7_img1.png",
                                        alt: "culture",
                                        width: 96,
                                        height: 263
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img2 img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/culture7_img2.png",
                                        alt: "culture",
                                        width: 96,
                                        height: 263
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img3 img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/culture7_img3.png",
                                        alt: "culture",
                                        width: 96,
                                        height: 263
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "small8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Distinctions."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "We have worked with various prominent brands and delivered satisfactorily. Our experienced team work tirelessly to ensure that clients are provided with the best products and services. In other to achieve this, we combine our expertise with the brand’s vision and create magic"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "img1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    loader: loader/* myLoader */.t,
                                    src: "/assets/culture8_img.png",
                                    alt: "culture",
                                    width: 285,
                                    height: 183
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Culture_SmallCulture = (SmallCulture);

;// CONCATENATED MODULE: ./components/Culture/index.js












/***/ }),

/***/ 9236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "VM": () => (/* reexport */ Landing_Hero),
  "S3": () => (/* reexport */ Landing_Section1),
  "vV": () => (/* reexport */ Landing_Section2),
  "vb": () => (/* reexport */ Landing_Section3),
  "fV": () => (/* reexport */ Landing_Section4),
  "rM": () => (/* reexport */ Landing_Section5),
  "Mv": () => (/* reexport */ Landing_Section7),
  "e1": () => (/* reexport */ Landing_Section8)
});

// UNUSED EXPORTS: Section6

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-scrollmagic"
var external_react_scrollmagic_ = __webpack_require__(3948);
// EXTERNAL MODULE: external "react-gsap"
var external_react_gsap_ = __webpack_require__(1196);
;// CONCATENATED MODULE: ./components/Landing/Hero.jsx




const Hero = ()=>{
    const { 0: currOp , 1: setCurrOp  } = (0,external_react_.useState)(1);
    const { 0: currSc , 1: setCurrSc  } = (0,external_react_.useState)(1);
    (0,external_react_.useEffect)(()=>{
        if (!window) return;
        window.addEventListener("scroll", checkOp);
        return ()=>{
            window.removeEventListener("scroll", checkOp);
        };
    }, []);
    const checkOp = ()=>{
        setCurrOp(1 - window.scrollY * 0.0125);
        setCurrSc(1 - window.scrollY * 0.00125);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "sticky_styled",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scrollmagic_.Controller, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scrollmagic_.Scene, {
                triggerHook: "onLeave",
                duration: 700,
                pin: true,
                children: (progress)=>/*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "landing_hero",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_gsap_.Timeline, {
                            totalProgress: progress,
                            paused: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_gsap_.Tween, {
                                from: {
                                    opacity: 1
                                },
                                to: {
                                    opacity: 0
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "container",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "hero_bread",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Development"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Design"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: "Training"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "landing_hero_wrap",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hero_content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "div_1",
                                                        "data-aos": "fade-left",
                                                        "data-aos-delay": "500",
                                                        "data-aos-duration": "1200",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Do you need your brand to look endearing on the web? need a user friendly app to create value?"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "div_2",
                                                        "data-aos": "fade-right",
                                                        "data-aos-delay": "500",
                                                        "data-aos-duration": "1200",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "div_2_content",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Softkodes is a tech solutions company with solid design and development expertise. We build state-of-the-art websites, mobile applications, and provide online business services."
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "arrow_wrap",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "arrow",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "mid"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "down"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
            })
        })
    }));
};
/* harmony default export */ const Landing_Hero = (Hero);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./Utils/loader.js
var loader = __webpack_require__(4303);
;// CONCATENATED MODULE: ./components/Landing/Section1.jsx






const Section1 = ()=>{
    const { 0: card1Pos , 1: setCard1Pos  } = (0,external_react_.useState)(-800);
    const { 0: card1Op , 1: setCard1Op  } = (0,external_react_.useState)(1);
    const { 0: card2Op , 1: setCard2Op  } = (0,external_react_.useState)(0);
    const { 0: card1Scale , 1: setCard1Scale  } = (0,external_react_.useState)(1.3);
    const { 0: card2Pos , 1: setCard2Pos  } = (0,external_react_.useState)(800);
    (0,external_react_.useEffect)(()=>{
    // if (!window) return;
    // window.addEventListener("scroll", checkOp);
    // return () => {
    //   window.removeEventListener("scroll", checkOp);
    // };
    }, []);
    const checkOp = ()=>{
        if (window.scrollY * 8 - 820 < 0) {
            setCard1Op(0 + window.scrollY * 0.0125);
            setCard1Pos(window.scrollY * 8 - 800);
            setCard2Pos(-window.scrollY * 8 + 800);
            setCard1Scale(1.1 - window.scrollY * 0.0008);
            if (window.scrollY * 8 - 800 > -400 || window.scrollY * 8 - 800 < -800) {
                setCard2Op(1);
            } else {
                setCard2Op(0);
            }
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "section1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section1_wrap",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "section1_cards",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "sticky_styled",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scrollmagic_.Controller, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scrollmagic_.Scene, {
                                            triggerHook: "onLeave",
                                            duration: 1000,
                                            pin: true,
                                            children: (progress)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "section1_cards1",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_gsap_.Timeline, {
                                                            totalProgress: progress,
                                                            paused: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_gsap_.Tween, {
                                                                from: {
                                                                    x: "-100%",
                                                                    opacity: 0,
                                                                    scale: "1.6"
                                                                },
                                                                to: {
                                                                    x: "0%",
                                                                    opacity: 1,
                                                                    scale: "1"
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "card",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "card_image",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                            loader: loader/* myLoader */.t,
                                                                            src: "/assets/image39.png",
                                                                            alt: "test",
                                                                            width: 343,
                                                                            height: 455
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "card",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "card_image",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                        loader: loader/* myLoader */.t,
                                                                        src: "/assets/image41.png",
                                                                        alt: "test",
                                                                        width: 343,
                                                                        height: 455
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "content cont_blur",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                            children: "Development"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "We specialise in Web development, android development, IOS development, HTML/CSS/JS, Backend/API, integrated word press"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_gsap_.Timeline, {
                                                            totalProgress: progress,
                                                            paused: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_gsap_.Tween, {
                                                                from: {
                                                                    x: "100%",
                                                                    opacity: 0,
                                                                    scale: "1.6"
                                                                },
                                                                to: {
                                                                    x: "0%",
                                                                    opacity: 1,
                                                                    scale: "1"
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "card",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "card_image",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                            loader: loader/* myLoader */.t,
                                                                            src: "/assets/image42.png",
                                                                            alt: "test",
                                                                            width: 343,
                                                                            height: 455
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section1_cards2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "card",
                                            id: "bg-1",
                                            "data-aos": "zoom-out-right",
                                            "data-aos-delay": "450",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "card_image",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                        loader: loader/* myLoader */.t,
                                                        src: "/assets/image43.png",
                                                        alt: "test",
                                                        width: 343,
                                                        height: 455
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "content cont_blur",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "Design"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "We provide dhesign services ranging from Animation, Iconography, 2D/3D graphics."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "card",
                                            "data-aos": "zoom-out-down",
                                            "data-aos-delay": "450",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "card_image",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                        loader: loader/* myLoader */.t,
                                                        src: "/assets/image44.png",
                                                        alt: "test",
                                                        width: 343,
                                                        height: 455
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "content cont_blur",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "Development"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Our designs are tailored to be functional, aesthetically pleasing and to represents the brand’s vision adequately."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "card",
                                            "data-aos": "zoom-out-left",
                                            "data-aos-delay": "450",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "card_image",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                        loader: loader/* myLoader */.t,
                                                        src: "/assets/image_37.png",
                                                        alt: "test",
                                                        width: 343,
                                                        height: 455
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "content cont_blur",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "Training"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "We offer intensive and thorough training on Ui/Ux Design, Graphic Design, Mobile Development, Web Development and Game Development"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "section1_mobile",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mobile_pt1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "WHAT WE DO"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "head_image",
                                    "data-aos": "flip-down",
                                    "data-aos-delay": "400",
                                    "data-aos-easing": "ease-out-back",
                                    "data-aos-duration": "2000",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/image2.png",
                                        alt: "test",
                                        width: 285,
                                        height: 201
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mobile_pt1_wrap",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "content ",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "400",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "Development"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "cont_blur",
                                                    children: "We specialise in Web development, android development, IOS development, HTML/CSS/JS, Backend/API, integrated word press at."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "image_wrap",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "arrow",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                        loader: loader/* myLoader */.t,
                                                        src: "/assets/arrow3.svg",
                                                        alt: "test",
                                                        width: 88,
                                                        height: 90
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "image",
                                                    "data-aos": "flip-right",
                                                    "data-aos-delay": "400",
                                                    "data-aos-easing": "ease-out-back",
                                                    "data-aos-duration": "2000",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                        loader: loader/* myLoader */.t,
                                                        src: "/assets/image39.png",
                                                        alt: "test",
                                                        width: 217,
                                                        height: 243
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mobile_pt2",
                            id: "bg-1-mob",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mobile_pt2_wrap",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "content ",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "400",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "Design"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "cont_blur",
                                                children: "We provide design services ranging from Animation, Iconography, 2D/3D graphics, and Branding to graphic design and Ui/Ux design."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "arrow",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/arrow4.svg",
                                            alt: "test",
                                            width: 88,
                                            height: 107
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "image",
                                        "data-aos": "flip-right",
                                        "data-aos-delay": "400",
                                        "data-aos-easing": "ease-out-back",
                                        "data-aos-duration": "2000",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image23.png",
                                            alt: "test",
                                            width: 185,
                                            height: 291
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mobile_pt3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mobile_pt3_wrap",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "image",
                                        "data-aos": "flip-left",
                                        "data-aos-delay": "400",
                                        "data-aos-easing": "ease-out-back",
                                        "data-aos-duration": "2000",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image6.png",
                                            alt: "test",
                                            width: 185,
                                            height: 291
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "arrow",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/arrow5.svg",
                                            alt: "test",
                                            width: 88,
                                            height: 107
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "content",
                                        "data-aos": "fade-left",
                                        "data-aos-delay": "400",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "fake"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "content_wrap ",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: "Training"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "We offer intensive and thorough training on Ui/Ux Design, Graphic Design, Mobile Development, Web Development and Game Development"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const Landing_Section1 = (Section1);

;// CONCATENATED MODULE: ./components/Landing/Section2.jsx




const Section2 = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "section2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "part1",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "300",
                                    children: "Design Interactive & Responsive Prototypes"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "300",
                                    children: [
                                        "Our ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Prototypes"
                                        }),
                                        " are created with",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "responsive design"
                                        }),
                                        " which displays impeccably any screen size, including mobile, tablet, and desktop."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "dir",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                alt: "arrow",
                                width: 427,
                                height: 158,
                                src: "/assets/arrow1.svg"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image",
                            "data-aos": "flip-left",
                            "data-aos-delay": "300",
                            "data-aos-easing": "ease-out-back",
                            "data-aos-duration": "2000",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                alt: "image",
                                width: 401,
                                height: 587,
                                src: "/assets/image40.png"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "part2",
                id: "bg-2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image",
                            "data-aos": "flip-right",
                            "data-aos-delay": "300",
                            "data-aos-easing": "ease-out-back",
                            "data-aos-duration": "2000",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                alt: "image",
                                width: 401,
                                height: 587,
                                src: "/assets/image7.png"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "part2_prime",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "dir",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        alt: "arrow",
                                        width: 293,
                                        height: 205,
                                        src: "/assets/arrow2.svg"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            "data-aos": "fade-left",
                                            "data-aos-delay": "300",
                                            children: "Development"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            "data-aos": "fade-left",
                                            "data-aos-delay": "300",
                                            children: "Code Quickly with us."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                            "data-aos": "fade-left",
                                            "data-aos-delay": "300",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "With us, you don’t have a problem with urgency."
                                                }),
                                                " Our pace though swift, will provide you with the best possible results.",
                                                " ",
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        " ",
                                                        "We are committed to providing amazing products in a timely manner."
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const Landing_Section2 = (Section2);

;// CONCATENATED MODULE: ./components/Landing/Section3.jsx




const Section3 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section3",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "section3_card",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section3_img",
                        "data-aos": "flip-down",
                        "data-aos-delay": "400",
                        "data-aos-easing": "ease-out-back",
                        "data-aos-duration": "2000",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            loader: loader/* myLoader */.t,
                            src: "/assets/image9.png",
                            width: 729,
                            height: 526,
                            alt: "image"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section3_content",
                        "data-aos": "fade-up",
                        "data-aos-delay": "400",
                        children: "Softkodes is a tech solutions company with solid design and development expertise. We build state-of-the-art websites, mobile applications, and provide online business services."
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Landing_Section3 = (Section3);

// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__(7446);
;// CONCATENATED MODULE: ./components/Landing/Section4.jsx





const Section4 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "WE ALSO TRAIN PEOPLE ON"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section4_parts",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "section4_part",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
                                    translateX: [
                                        "400px",
                                        "0px"
                                    ],
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "WEB DESIGN"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section4_img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
                                        rotate: [
                                            35,
                                            0
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "parallax_wrap parallax_wrap1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                loader: loader/* myLoader */.t,
                                                src: "/assets/alt_2.png",
                                                alt: "image",
                                                width: 460,
                                                height: 460
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "section4_part",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
                                    translateX: [
                                        "400px",
                                        "0px"
                                    ],
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "MOBILE DEVELOPMENT"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section4_img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
                                        rotate: [
                                            -35,
                                            0
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "parallax_wrap parallax_wrap2",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                loader: loader/* myLoader */.t,
                                                src: "/assets/image45.png",
                                                alt: "image",
                                                width: 460,
                                                height: 460
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "section4_part",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
                                    translateX: [
                                        "-400px",
                                        "0px"
                                    ],
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "GAME DEVELOPMENT"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section4_img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
                                        rotate: [
                                            35,
                                            0
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "parallax_wrap parallax_wrap3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                loader: loader/* myLoader */.t,
                                                src: "/assets/image12.png",
                                                alt: "image",
                                                width: 460,
                                                height: 460
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Landing_Section4 = (Section4);

// EXTERNAL MODULE: external "pure-react-carousel"
var external_pure_react_carousel_ = __webpack_require__(5001);
;// CONCATENATED MODULE: ./hooks/useWindowDimensions.js

const useWindowDimensions = ()=>{
    const { 0: windowDimensions , 1: setWindowDimensions  } = (0,external_react_.useState)({
        width: undefined,
        height: undefined
    });
    const { 0: slideNo , 1: setSlideNo  } = (0,external_react_.useState)(4);
    (0,external_react_.useEffect)(()=>{
        window.innerWidth >= 768 ? setSlideNo(7) : setSlideNo(4);
    // function handleResize() {
    //   setWindowDimensions({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //   });
    //   window.innerWidth >= 768 ? setSlideNo(7) : setSlideNo(4);
    // }
    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
    }, []);
    return slideNo;
};
/* harmony default export */ const hooks_useWindowDimensions = (useWindowDimensions);

;// CONCATENATED MODULE: ./hooks/index.js


;// CONCATENATED MODULE: ./components/Landing/Section5.jsx







const Section5 = ()=>{
    const slideNo = hooks_useWindowDimensions();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "section5",
        id: "bg-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "PROJECTS"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "carousel_wrap",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_pure_react_carousel_.CarouselProvider, {
                    naturalSlideWidth: 180,
                    naturalSlideHeight: 600,
                    totalSlides: 21,
                    visibleSlides: slideNo ? slideNo : 4,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_pure_react_carousel_.Slider, {
                            className: "carouselProvider",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 0,
                                    className: "slide1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6,
                                            marginLeft: 0
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image13.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 1,
                                    className: "slide2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image14.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 2,
                                    className: "slide3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image15.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 3,
                                    className: "slide4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image17.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 4,
                                    className: "slide5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image18.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 5,
                                    className: "slide6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image16.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 6,
                                    className: "slide7",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6,
                                            marginRight: 0
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image19.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 0,
                                    className: "slide1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6,
                                            marginLeft: 10
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image13.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 1,
                                    className: "slide2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image14.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 2,
                                    className: "slide3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image15.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 3,
                                    className: "slide4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image17.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 4,
                                    className: "slide5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image18.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 5,
                                    className: "slide6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image16.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 6,
                                    className: "slide7",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6,
                                            marginRight: 0
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image19.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 0,
                                    className: "slide1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6,
                                            marginLeft: 10
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image13.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 1,
                                    className: "slide2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image14.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 2,
                                    className: "slide3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image15.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 3,
                                    className: "slide4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image17.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 4,
                                    className: "slide5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image18.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 5,
                                    className: "slide6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image16.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                    index: 6,
                                    className: "slide7",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "carousel_item",
                                        style: {
                                            height: 600,
                                            margin: 6,
                                            marginRight: 0
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            loader: loader/* myLoader */.t,
                                            src: "/assets/image19.png",
                                            width: 180,
                                            height: 600,
                                            alt: "carousel"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "carousel_btns",
                            children: [
                                slideNo === 4 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Dot, {
                                            slide: 0
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Dot, {
                                            slide: 4
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Dot, {
                                            slide: 8
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Dot, {
                                            slide: 12
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Dot, {
                                            slide: 16
                                        })
                                    ]
                                }),
                                slideNo === 7 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Dot, {
                                            slide: 0
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Dot, {
                                            slide: 7
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Dot, {
                                            slide: 14
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const Landing_Section5 = (Section5);

;// CONCATENATED MODULE: ./components/Landing/Section6.jsx




const Section6 = ()=>{
    return(/*#__PURE__*/ _jsx("section", {
        className: "section6",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container",
            children: [
                /*#__PURE__*/ _jsx("h1", {
                    children: "NEWS"
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "section6_cards",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "section6_card",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "content",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "400",
                                    "data-aos-duration": "1300",
                                    children: [
                                        "Lorem ipsum dolor",
                                        " ",
                                        /*#__PURE__*/ _jsxs("span", {
                                            children: [
                                                " ",
                                                "sit amet, consectetur adipiscing elit. Tincidunt pellentesque vel ac consectetur ac vel tristique. A in urna, quis integer tincidunt viverra ornare. Ac cursus a auctor ut neque pharetra. Non pellentesque id sagittis sagittis, nullam elit lorem luctus lectus. Elementu",
                                                " "
                                            ]
                                        }),
                                        " ",
                                        "Lorem ipsum",
                                        " ",
                                        /*#__PURE__*/ _jsxs("span", {
                                            children: [
                                                " ",
                                                "dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, laoreet nunc lacus turpis vulputate...",
                                                " "
                                            ]
                                        }),
                                        " ",
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "#",
                                            children: "Read More"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "image",
                                    "data-aos": "fade-left",
                                    "data-aos-delay": "400",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ _jsx(Image, {
                                        loader: myLoader,
                                        src: "/assets/image20.png",
                                        alt: "news",
                                        width: 486,
                                        height: 356
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "section6_card",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "image",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "400",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ _jsx(Image, {
                                        loader: myLoader,
                                        src: "/assets/image21.png",
                                        alt: "news",
                                        width: 486,
                                        height: 356
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "content",
                                    "data-aos": "fade-left",
                                    "data-aos-delay": "400",
                                    "data-aos-duration": "1300",
                                    children: [
                                        "Lorem ipsum",
                                        " ",
                                        /*#__PURE__*/ _jsxs("span", {
                                            children: [
                                                "dolor sit amet, consectetur adipiscing elit. Tincidunt pellentesque vel ac consectetur ac vel tristique. A in urna, quis integer tincidunt viverra ornare.",
                                                " "
                                            ]
                                        }),
                                        " ",
                                        "Ac cursus",
                                        " ",
                                        /*#__PURE__*/ _jsxs("span", {
                                            children: [
                                                " ",
                                                "a auctor ut neque pharetra. Non pellentesque id sagittis sagittis, nullam elit lorem luctus lectus. ElementuLorem..."
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "#",
                                            children: "Read More"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Landing_Section6 = ((/* unused pure expression or super */ null && (Section6)));

;// CONCATENATED MODULE: ./components/Landing/Section7.jsx




const Section7 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section7",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "MEET THE TEAM"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "image",
                    "data-aos": "flip-down",
                    "data-aos-delay": "400",
                    "data-aos-easing": "ease-out-back",
                    "data-aos-duration": "2000",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        loader: loader/* myLoader */.t,
                        alt: "team",
                        src: "/assets/image22.png",
                        width: 980,
                        height: 720
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const Landing_Section7 = (Section7);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Landing/Section8.jsx



const Section8 = ()=>{
    const router = (0,router_.useRouter)();
    const changeBg = (e)=>{
        if (!window) return;
        const back = document.querySelector(".section8");
        const btn = document.querySelector(".btn_target");
        back.style.backgroundSize = "2% 2%";
        back.style.color = "#000";
        btn.style.color = "#fff";
        btn.style.backgroundColor = "#000";
    };
    const removeBg = (e)=>{
        if (!window) return;
        const back = document.querySelector(".section8");
        const btn = document.querySelector(".btn_target");
        back.style.backgroundSize = "100% 100%";
        back.style.color = "#fff";
        btn.style.color = "#000";
        btn.style.backgroundColor = "#fff";
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section8",
        id: "bg-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    "data-aos": "fade-down",
                    "data-aos-delay": "200",
                    "data-aos-duration": "1300",
                    children: "Have a project in mind? Get in touch with us today"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section8_btn",
                    "data-aos": "zoom-out",
                    "data-aos-delay": "400",
                    "data-aos-duration": "500",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>router.push("/contact")
                        ,
                        className: "btn_target",
                        onMouseEnter: changeBg,
                        onMouseLeave: removeBg,
                        children: "Message"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const Landing_Section8 = (Section8);

;// CONCATENATED MODULE: ./components/Landing/index.js











/***/ }),

/***/ 4751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* reexport */ Member_main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./Utils/loader.js
var loader = __webpack_require__(4303);
;// CONCATENATED MODULE: ./components/Member/main.jsx




const main = ({ name  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "member",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    "data-aos": "fade-down",
                    "data-aos-delay": "400",
                    "data-aos-duration": "1300",
                    children: "Welcome to Apply, a member of our Team will respond to you shortly after submission want"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "member_form_wrap",
                    "data-aos": "fade-down",
                    "data-aos-delay": "400",
                    "data-aos-duration": "1300",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "member_head",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "member_head_img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/ring.svg",
                                        alt: "ring",
                                        width: 63,
                                        height: 63
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: name
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            "data-aos": "fade-down",
                            "data-aos-delay": "400",
                            "data-aos-duration": "1300",
                            children: "Fill-in your details and a representative will be in touch with you shortly."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            action: "https://formsubmit.co/info@softkodesllc.com",
                            method: "POST",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    required: true,
                                    hidden: true,
                                    name: "Course Name",
                                    readOnly: true,
                                    value: name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "control",
                                    "data-aos": "fade-down",
                                    "data-aos-delay": "400",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        required: true,
                                        type: "text",
                                        name: "First Name",
                                        placeholder: "Enter First Name"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "control",
                                    "data-aos": "fade-down",
                                    "data-aos-delay": "400",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        required: true,
                                        type: "text",
                                        name: "Last Name",
                                        placeholder: "Enter Last Name"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "control",
                                    "data-aos": "fade-down",
                                    "data-aos-delay": "400",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        required: true,
                                        type: "email",
                                        name: "Email Address",
                                        placeholder: "Enter Email "
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "control",
                                    "data-aos": "fade-down",
                                    "data-aos-delay": "400",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        required: true,
                                        type: "text",
                                        name: "Phone Number",
                                        placeholder: "Enter Phone Number"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "control",
                                    "data-aos": "fade-down",
                                    "data-aos-delay": "400",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "date",
                                        name: "Date of Birth",
                                        required: true,
                                        placeholder: "Date Of birth*"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "control",
                                    "data-aos": "fade-down",
                                    "data-aos-delay": "400",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "Home Address",
                                        required: true,
                                        placeholder: "Home Address*"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "control",
                                    "data-aos": "fade-down",
                                    "data-aos-delay": "400",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                        name: "Academic Background",
                                        id: "",
                                        required: true,
                                        rows: "5",
                                        placeholder: "Tell Us About Your Academic Background*"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "control",
                                    "data-aos": "fade-down",
                                    "data-aos-delay": "400",
                                    "data-aos-duration": "1300"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "one",
                                    "data-aos": "fade-down",
                                    "data-aos-delay": "400",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        children: "Submit"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Member_main = (main);

;// CONCATENATED MODULE: ./components/Member/index.js



/***/ }),

/***/ 4218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* reexport */ News_main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./Utils/loader.js
var loader = __webpack_require__(4303);
;// CONCATENATED MODULE: ./components/News/main.jsx




const main = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "news",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "news_main",
                "data-aos": "fade-down",
                "data-aos-delay": "500",
                "data-aos-duration": "1200",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "NEWS"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae enim morbi aliquet"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "news_card",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "news_img",
                            "data-aos": "fade-down",
                            "data-aos-delay": "500",
                            "data-aos-duration": "1200",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                src: "/assets/image21.png",
                                alt: "news",
                                width: 868,
                                height: 502
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "news_content",
                            "data-aos": "fade-down",
                            "data-aos-delay": "500",
                            "data-aos-duration": "1200",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Purus tellus."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, laoreet nunc lacus turpis vulputate. Eu nisl volutpat, massa faucibus quam risus, amet mauris. Nec id ipsum eget nunc, sagittis. Pellentesque orci arcu, lectus duis. Id faucibus at id tellus diam nibh faucibus. Lorem id urna, duis quam fermentum in. Lacus, lacus at aliquam tempor, at. Diam fermentum, et tempor enim non amet eget pellentesque scelerisque. Mauris sagittis, risus arcu elementum id. Adipiscing erat a dignissim risus. Lorem id nulla posuere tristique purus. Facilisi egestas sociis a in donec porttitor elit, vitae. Congue rutrum mattis vulputate massa pulvinar. Purus nunc, diam egestas sed volutpat, dignissim eleifend bibendum cursus. Amet, ut sodales urna arcu ut urna. Euismod ultrices enim sagittis consequat lectus fusce scelerisque potenti. Pharetra tortor in congue urna lacus. Eros, purus nibh convallis eu. Nunc quam dictum massa sapien ac etiam commodo, morbi vestibulum. In iaculis faucibus sit sit. Sed et nam at massa. Tellus laoreet nibh ac tincidunt vel. Tellus, et volutpat leo vel nec ipsum. Morbi ultricies lacus laoreet pretium aenean tortor nullam."
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "news_card nw1",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "news_img",
                            "data-aos": "fade-down",
                            "data-aos-delay": "500",
                            "data-aos-duration": "1200",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                src: "/assets/image35.png",
                                alt: "news",
                                width: 868,
                                height: 502
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "news_content",
                            "data-aos": "fade-down",
                            "data-aos-delay": "500",
                            "data-aos-duration": "1200",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Purus tellus."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, laoreet nunc lacus turpis vulputate. Eu nisl volutpat, massa faucibus quam risus, amet mauris. Nec id ipsum eget nunc, sagittis. Pellentesque orci arcu, lectus duis. Id faucibus at id tellus diam nibh faucibus. Lorem id urna, duis quam fermentum in. Lacus, lacus at aliquam tempor, at. Diam fermentum, et tempor enim non amet eget pellentesque scelerisque. Mauris sagittis, risus arcu elementum id. Adipiscing erat a dignissim risus. Lorem id nulla posuere tristique purus. Facilisi egestas sociis a in donec porttitor elit, vitae. Congue rutrum mattis vulputate massa pulvinar. Purus nunc, diam egestas sed volutpat, dignissim eleifend bibendum cursus. Amet, ut sodales urna arcu ut urna. Euismod ultrices enim sagittis consequat lectus fusce scelerisque potenti. Pharetra tortor in congue urna lacus. Eros, purus nibh convallis eu. Nunc quam dictum massa sapien ac etiam commodo, morbi vestibulum. In iaculis faucibus sit sit. Sed et nam at massa. Tellus laoreet nibh ac tincidunt vel. Tellus, et volutpat leo vel nec ipsum. Morbi ultricies lacus laoreet pretium aenean tortor nullam."
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "news_card",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "news_img",
                            "data-aos": "fade-down",
                            "data-aos-delay": "500",
                            "data-aos-duration": "1200",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: loader/* myLoader */.t,
                                src: "/assets/image36.png",
                                alt: "news",
                                width: 829,
                                height: 532
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "news_content",
                            "data-aos": "fade-down",
                            "data-aos-delay": "500",
                            "data-aos-duration": "1200",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Purus tellus."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, laoreet nunc lacus turpis vulputate. Eu nisl volutpat, massa faucibus quam risus, amet mauris. Nec id ipsum eget nunc, sagittis. Pellentesque orci arcu, lectus duis. Id faucibus at id tellus diam nibh faucibus. Lorem id urna, duis quam fermentum in. Lacus, lacus at aliquam tempor, at. Diam fermentum, et tempor enim non amet eget pellentesque scelerisque. Mauris sagittis, risus arcu elementum id. Adipiscing erat a dignissim risus. Lorem id nulla posuere tristique purus. Facilisi egestas sociis a in donec porttitor elit, vitae. Congue rutrum mattis vulputate massa pulvinar. Purus nunc, diam egestas sed volutpat, dignissim eleifend bibendum cursus. Amet, ut sodales urna arcu ut urna. Euismod ultrices enim sagittis consequat lectus fusce scelerisque potenti. Pharetra tortor in congue urna lacus. Eros, purus nibh convallis eu. Nunc quam dictum massa sapien ac etiam commodo, morbi vestibulum. In iaculis faucibus sit sit. Sed et nam at massa. Tellus laoreet nibh ac tincidunt vel. Tellus, et volutpat leo vel nec ipsum. Morbi ultricies lacus laoreet pretium aenean tortor nullam."
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const News_main = (main);

;// CONCATENATED MODULE: ./components/News/index.js



/***/ }),

/***/ 1240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* reexport */ Newsletter_main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Newsletter/main.jsx


const main = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "newsletter",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Subsccribe to our Newsletter"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "control",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Enter Email Address"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "control",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "Subscribe"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const Newsletter_main = (main);

;// CONCATENATED MODULE: ./components/Newsletter/index.js



/***/ }),

/***/ 1582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c2": () => (/* reexport */ Projects_Section1),
  "Dq": () => (/* reexport */ Projects_Section2),
  "dI": () => (/* reexport */ Projects_Section3)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./Utils/loader.js
var loader = __webpack_require__(4303);
;// CONCATENATED MODULE: ./components/Projects/Section1.jsx




const Section1 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "project1",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    "data-aos": "fade-right",
                    "data-aos-delay": "400",
                    "data-aos-duration": "1300",
                    children: "ALL PROJECTS"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    "data-aos": "fade-left",
                    "data-aos-delay": "400",
                    "data-aos-duration": "1300",
                    children: "We drive growth for your business making your brand more compelling online."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "project1_img",
                    "data-aos": "flip-down",
                    "data-aos-delay": "600",
                    "data-aos-easing": "ease-out-back",
                    "data-aos-duration": "1300",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        loader: loader/* myLoader */.t,
                        src: "/assets/image24.jpg",
                        width: 900,
                        height: 650,
                        alt: "Project",
                        priority: true
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const Projects_Section1 = (Section1);

;// CONCATENATED MODULE: ./components/Projects/Section2.jsx




const Section2 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "project2",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "project2_cards",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "project2_card",
                        "data-aos": "fade-right",
                        "data-aos-delay": "600",
                        "data-aos-duration": "1300",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project2_img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    loader: loader/* myLoader */.t,
                                    src: "/assets/image25.png",
                                    alt: "projects",
                                    width: 553,
                                    height: 407
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project2_content",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Find your dream job with some clicks and swipes"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "project2_card",
                        "data-aos": "fade-left",
                        "data-aos-delay": "600",
                        "data-aos-duration": "1300",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project2_img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    loader: loader/* myLoader */.t,
                                    src: "/assets/image26.png",
                                    alt: "projects",
                                    width: 553,
                                    height: 407
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project2_content",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Inferface that let’s you find the perfect peice with ease"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "project2_card",
                        "data-aos": "fade-right",
                        "data-aos-delay": "600",
                        "data-aos-duration": "1300",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project2_img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    loader: loader/* myLoader */.t,
                                    src: "/assets/image27.png",
                                    alt: "projects",
                                    width: 553,
                                    height: 407
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project2_content",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Quick navigation to satisfy your cravings"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "project2_card",
                        "data-aos": "fade-left",
                        "data-aos-delay": "600",
                        "data-aos-duration": "1300",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project2_img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    loader: loader/* myLoader */.t,
                                    src: "/assets/image28.png",
                                    alt: "projects",
                                    width: 553,
                                    height: 407
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project2_content",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Food for everyone. Just tap and swipe conveniently to get yours"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "project2_card",
                        "data-aos": "fade-right",
                        "data-aos-delay": "600",
                        "data-aos-duration": "1300",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project2_img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    loader: loader/* myLoader */.t,
                                    src: "/assets/image29.png",
                                    alt: "projects",
                                    width: 553,
                                    height: 407
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project2_content",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "With this app, you purchase your favourite football kit hitchfree"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "project2_card",
                        "data-aos": "fade-left",
                        "data-aos-delay": "600",
                        "data-aos-duration": "1300",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project2_img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    loader: loader/* myLoader */.t,
                                    src: "/assets/image30.png",
                                    alt: "projects",
                                    width: 553,
                                    height: 407
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "project2_content",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Use easy navigations to get jobs."
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Projects_Section2 = (Section2);

;// CONCATENATED MODULE: ./components/Projects/Section3.jsx




const Section3 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "project3 pr1",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Web Applications"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "project3_cards",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "project3_card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project3_img",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "600",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/image31.png",
                                        alt: "projects",
                                        width: 549,
                                        height: 412
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project3_content",
                                    "data-aos": "fade-left",
                                    "data-aos-delay": "600",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Easy navigation through this interior design website"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "project3_card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project3_img",
                                    "data-aos": "fade-left",
                                    "data-aos-delay": "600",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/image32.png",
                                        alt: "projects",
                                        width: 549,
                                        height: 412
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project3_content",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "600",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "This website lets you select and purchase the perfect drone"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "project3_card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project3_img",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "600",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/image33.png",
                                        alt: "projects",
                                        width: 549,
                                        height: 412
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project3_content",
                                    "data-aos": "fade-left",
                                    "data-aos-delay": "600",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Get appealing visuals on this furniture websites"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "project3_card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project3_img",
                                    "data-aos": "fade-left",
                                    "data-aos-delay": "600",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        loader: loader/* myLoader */.t,
                                        src: "/assets/image34.png",
                                        alt: "projects",
                                        width: 549,
                                        height: 412
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "project3_content",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "600",
                                    "data-aos-duration": "1300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "User friendly crypto investment assistant"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Projects_Section3 = (Section3);

;// CONCATENATED MODULE: ./components/Projects/index.js





/***/ }),

/***/ 9505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y0": () => (/* reexport */ Training_Section1),
  "Jw": () => (/* reexport */ Training_Section2)
});

// UNUSED EXPORTS: TrainingSection3

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Training/Section1.jsx


const Section1 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "training1",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    "data-aos": "fade-down",
                    "data-aos-delay": "600",
                    "data-aos-duration": "1300",
                    children: "Learn digital skills and more."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "training1_text",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            "data-aos": "fade-right",
                            "data-aos-delay": "600",
                            "data-aos-duration": "1300",
                            children: "It's 2022,"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            "data-aos": "fade-right",
                            "data-aos-delay": "650",
                            "data-aos-duration": "1300",
                            children: "What are you"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            "data-aos": "fade-right",
                            "data-aos-delay": "700",
                            "data-aos-duration": "1300",
                            children: "waiting for?"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    "data-aos": "fade-up",
                    "data-aos-delay": "600",
                    "data-aos-duration": "1300",
                    children: "The process of getting started are very simple Pick a Course | Attend classes online | get your certificate"
                })
            ]
        })
    }));
};
/* harmony default export */ const Training_Section1 = (Section1);

// EXTERNAL MODULE: ./Utils/data.js
var data = __webpack_require__(1374);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Training/Section2.jsx




const Section2 = ()=>{
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "training2",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "OUR COURSES"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "training2_cards",
                    children: data/* trainingData.map */.a.map((value, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "training2_card",
                            "data-aos": "fade-down",
                            "data-aos-delay": "600",
                            "data-aos-duration": "1300",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: value.course
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: value.code
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: value.desc
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "button_card btn_card_hover",
                                    onClick: ()=>router.push({
                                            pathname: "/member/[name]",
                                            query: {
                                                name: value.course
                                            }
                                        })
                                    ,
                                    children: [
                                        "$",
                                        value.price,
                                        " (",
                                        value.dur,
                                        ")"
                                    ]
                                })
                            ]
                        }, i)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const Training_Section2 = (Section2);

;// CONCATENATED MODULE: ./components/Training/Section3.jsx


const Section3 = ()=>{
    return(/*#__PURE__*/ _jsx("section", {
        className: "training2 tr1",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "training2_cards",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "training2_card",
                        "data-aos": "fade-down",
                        "data-aos-delay": "600",
                        "data-aos-duration": "1300",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                children: "Game Development"
                            }),
                            /*#__PURE__*/ _jsx("h3", {
                                children: "(SKO9GD)"
                            }),
                            /*#__PURE__*/ _jsxs("p", {
                                children: [
                                    " ",
                                    "Climb the ladder of Game development with Unreal Engine 4.x and Game development & design using Unity Engine."
                                ]
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "button_card btn_card_hover",
                                children: "$362 (15weeks)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "training2_card",
                        "data-aos": "fade-down",
                        "data-aos-delay": "600",
                        "data-aos-duration": "1300",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                children: "Digital Marketing"
                            }),
                            /*#__PURE__*/ _jsx("h3", {
                                children: "(SK11DM)"
                            }),
                            /*#__PURE__*/ _jsxs("p", {
                                children: [
                                    " ",
                                    "Master Digital Marketing: Advertise using the various Social Media Marketing platforms for Marketing including: SEO, Youtube, Email, Facebook Marketing, Analytics and more!"
                                ]
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "button_card btn_card_hover",
                                children: "$172 (18weeks)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "training2_card",
                        "data-aos": "fade-down",
                        "data-aos-delay": "600",
                        "data-aos-duration": "1300",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                children: "Branding"
                            }),
                            /*#__PURE__*/ _jsx("h3", {
                                children: "(SK05BD)"
                            }),
                            /*#__PURE__*/ _jsxs("p", {
                                children: [
                                    " ",
                                    "Learn the worlds most popular language(Javscript) server-side Development library (Node.js). And build fully functional database."
                                ]
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "button_card btn_card_hover",
                                children: "$172 (8weeks)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "training2_card",
                        "data-aos": "fade-down",
                        "data-aos-delay": "600",
                        "data-aos-duration": "1300",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                children: "Animation (3D)"
                            }),
                            /*#__PURE__*/ _jsx("h3", {
                                children: "(SK10ADS)"
                            }),
                            /*#__PURE__*/ _jsxs("p", {
                                children: [
                                    " ",
                                    "Climb the ladder of Game development with Unreal Engine 4.x and Game development & design using Unity Engine."
                                ]
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "button_card btn_card_hover",
                                children: "$285 (8weeks)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "training2_card",
                        "data-aos": "fade-down",
                        "data-aos-delay": "600",
                        "data-aos-duration": "1300",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                children: "Python"
                            }),
                            /*#__PURE__*/ _jsx("h3", {
                                children: "(SK06PT)"
                            }),
                            /*#__PURE__*/ _jsxs("p", {
                                children: [
                                    " ",
                                    "Climb the ladder of Game development with Unreal Engine 4.x and Game development & design using Unity Engine."
                                ]
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "button_card btn_card_hover",
                                children: "$310 (12weeks)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "training2_card",
                        "data-aos": "fade-down",
                        "data-aos-delay": "600",
                        "data-aos-duration": "1300",
                        children: [
                            /*#__PURE__*/ _jsx("h2", {
                                children: "Javascript/Nodejs"
                            }),
                            /*#__PURE__*/ _jsx("h3", {
                                children: "(SK06JS)"
                            }),
                            /*#__PURE__*/ _jsxs("p", {
                                children: [
                                    " ",
                                    "Learn the worlds most popular language(Javscript) server-side Development library (Node.js). And build fully functional database."
                                ]
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "button_card btn_card_hover",
                                children: "$300 (12weeks)"
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Training_Section3 = ((/* unused pure expression or super */ null && (Section3)));

;// CONCATENATED MODULE: ./components/Training/index.js





/***/ }),

/***/ 6959:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _organisms__WEBPACK_IMPORTED_MODULE_0__.$_),
/* harmony export */   "h4": () => (/* reexport safe */ _organisms__WEBPACK_IMPORTED_MODULE_0__.h4),
/* harmony export */   "gb": () => (/* reexport safe */ _organisms__WEBPACK_IMPORTED_MODULE_0__.gb),
/* harmony export */   "JL": () => (/* reexport safe */ _organisms__WEBPACK_IMPORTED_MODULE_0__.JL),
/* harmony export */   "VM": () => (/* reexport safe */ _Landing__WEBPACK_IMPORTED_MODULE_1__.VM),
/* harmony export */   "S3": () => (/* reexport safe */ _Landing__WEBPACK_IMPORTED_MODULE_1__.S3),
/* harmony export */   "vV": () => (/* reexport safe */ _Landing__WEBPACK_IMPORTED_MODULE_1__.vV),
/* harmony export */   "vb": () => (/* reexport safe */ _Landing__WEBPACK_IMPORTED_MODULE_1__.vb),
/* harmony export */   "fV": () => (/* reexport safe */ _Landing__WEBPACK_IMPORTED_MODULE_1__.fV),
/* harmony export */   "rM": () => (/* reexport safe */ _Landing__WEBPACK_IMPORTED_MODULE_1__.rM),
/* harmony export */   "Mv": () => (/* reexport safe */ _Landing__WEBPACK_IMPORTED_MODULE_1__.Mv),
/* harmony export */   "e1": () => (/* reexport safe */ _Landing__WEBPACK_IMPORTED_MODULE_1__.e1),
/* harmony export */   "bp": () => (/* reexport safe */ _molecules__WEBPACK_IMPORTED_MODULE_2__.b),
/* harmony export */   "c2": () => (/* reexport safe */ _Projects__WEBPACK_IMPORTED_MODULE_3__.c2),
/* harmony export */   "Dq": () => (/* reexport safe */ _Projects__WEBPACK_IMPORTED_MODULE_3__.Dq),
/* harmony export */   "dI": () => (/* reexport safe */ _Projects__WEBPACK_IMPORTED_MODULE_3__.dI),
/* harmony export */   "y0": () => (/* reexport safe */ _Training__WEBPACK_IMPORTED_MODULE_4__.y0),
/* harmony export */   "Jw": () => (/* reexport safe */ _Training__WEBPACK_IMPORTED_MODULE_4__.Jw),
/* harmony export */   "he": () => (/* reexport safe */ _Member__WEBPACK_IMPORTED_MODULE_5__.h),
/* harmony export */   "P$": () => (/* reexport safe */ _Contact__WEBPACK_IMPORTED_MODULE_6__.P),
/* harmony export */   "Oy": () => (/* reexport safe */ _News__WEBPACK_IMPORTED_MODULE_7__.O),
/* harmony export */   "Im": () => (/* reexport safe */ _Newsletter__WEBPACK_IMPORTED_MODULE_8__.I),
/* harmony export */   "CS": () => (/* reexport safe */ _Career__WEBPACK_IMPORTED_MODULE_9__.CS),
/* harmony export */   "CU": () => (/* reexport safe */ _Career__WEBPACK_IMPORTED_MODULE_9__.CU),
/* harmony export */   "_$": () => (/* reexport safe */ _Career__WEBPACK_IMPORTED_MODULE_9__._$),
/* harmony export */   "ux": () => (/* reexport safe */ _Career__WEBPACK_IMPORTED_MODULE_9__.ux),
/* harmony export */   "yE": () => (/* reexport safe */ _Culture__WEBPACK_IMPORTED_MODULE_10__.yE),
/* harmony export */   "TD": () => (/* reexport safe */ _Culture__WEBPACK_IMPORTED_MODULE_10__.TD),
/* harmony export */   "Ik": () => (/* reexport safe */ _Culture__WEBPACK_IMPORTED_MODULE_10__.Ik),
/* harmony export */   "Ai": () => (/* reexport safe */ _Culture__WEBPACK_IMPORTED_MODULE_10__.Ai),
/* harmony export */   "QF": () => (/* reexport safe */ _Culture__WEBPACK_IMPORTED_MODULE_10__.QF),
/* harmony export */   "aZ": () => (/* reexport safe */ _Culture__WEBPACK_IMPORTED_MODULE_10__.aZ),
/* harmony export */   "LH": () => (/* reexport safe */ _Culture__WEBPACK_IMPORTED_MODULE_10__.LH),
/* harmony export */   "Qj": () => (/* reexport safe */ _Culture__WEBPACK_IMPORTED_MODULE_10__.Qj),
/* harmony export */   "Je": () => (/* reexport safe */ _Culture__WEBPACK_IMPORTED_MODULE_10__.Je)
/* harmony export */ });
/* harmony import */ var _organisms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4566);
/* harmony import */ var _Landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9236);
/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4230);
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1582);
/* harmony import */ var _Training__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9505);
/* harmony import */ var _Member__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4751);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(393);
/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4218);
/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1240);
/* harmony import */ var _Career__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7700);
/* harmony import */ var _Culture__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4298);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_organisms__WEBPACK_IMPORTED_MODULE_0__]);
_organisms__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* reexport */ molecules_TopButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./Utils/loader.js
var loader = __webpack_require__(4303);
;// CONCATENATED MODULE: ./components/molecules/TopButton.jsx




// import { FiChevronUp } from "react-icons/fi";
const TopButton = ()=>{
    // Set useRef
    const topRef = (0,external_react_.useRef)();
    // Scroll Function
    const topScroll = (e)=>{
        let target = 0;
        let duration = 1000;
        let start = window.pageYOffset;
        let distance = -start;
        let startTime = null;
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            let timeElapsed = currentTime - startTime;
            let run = ease(timeElapsed, start, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t * t + b;
            t -= 2;
            return -c / 2 * (t * t * t * t - 2) + b;
        }
        requestAnimationFrame(animation);
    };
    // Event listener function
    const handleScroll = ()=>{
        if (window.scrollY > 500) {
            topRef.current.style.display = "flex";
        } else if (window.scrollY <= 500) {
            topRef.current.style.display = "none";
        }
    };
    // Set scroll event listener
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: TopButton_top,
        onClick: topScroll,
        ref: topRef,
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
            loader: loader/* myLoader */.t,
            src: "/assets/up.svg",
            width: 40,
            height: 40,
            alt: "top"
        })
    }));
};
const TopButton_top = {
    position: "fixed",
    right: "50px",
    bottom: "50px",
    background: "#fff",
    color: "#f4f4f4",
    cursor: "pointer",
    padding: "0.9rem",
    borderRadius: "50%",
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17)"
};
/* harmony default export */ const molecules_TopButton = (TopButton);

;// CONCATENATED MODULE: ./components/molecules/index.js



/***/ }),

/***/ 2367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var _Utils_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4303);

/* eslint-disable @next/next/link-passhref */ 




const Footer = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "footer_wrap",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "top",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "left",
                            "data-aos": "fade-right",
                            "data-aos-delay": "400",
                            "data-aos-duration": "1300",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "image",
                                    onClick: ()=>router.push("/")
                                    ,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                        loader: _Utils_loader__WEBPACK_IMPORTED_MODULE_5__/* .myLoader */ .t,
                                        src: "/assets/white.png",
                                        width: 336,
                                        height: 30,
                                        alt: "title"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Info@softkodesllc.com"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "km 5 Refinery road opp Chicken Republic. Effurun Delta state"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "center",
                            "data-aos": "fade-bottom",
                            "data-aos-delay": "400",
                            "data-aos-duration": "1300",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: "Quick Links"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: ()=>router.push("/")
                                            ,
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: ()=>router.push("/member")
                                            ,
                                            children: "Get to know us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: ()=>router.push("/culture")
                                            ,
                                            children: "Culture"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: ()=>router.push("/projects")
                                            ,
                                            children: "Our Works"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: ()=>router.push("/training")
                                            ,
                                            children: "Training"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "right",
                            "data-aos": "fade-left",
                            "data-aos-delay": "400",
                            "data-aos-duration": "1300",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    onClick: ()=>router.push("/contact")
                                    ,
                                    children: "Contact Us"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                            href: "https://www.instagram.com/softkodesworld",
                                            target: "_blank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "Instagram"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: "Twitter"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                            href: "https://www.linkedin.com/company/softkodes-tech-lim",
                                            target: "_blank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "Linkedin"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bottom",
                    "data-aos": "fade-up",
                    "data-aos-delay": "400",
                    "data-aos-duration": "1300",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "copy",
                            children: "Copyright Softkode all rights reserved."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "list",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Terms Condition "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    onClick: ()=>router.push("/privacy")
                                    ,
                                    children: "Privacy Policy"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "FAQ"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 3207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _context_GeneralContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6435);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utils_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4303);






const Header = ({ black  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { navOpen , setNavOpen  } = (0,_context_GeneralContext__WEBPACK_IMPORTED_MODULE_3__/* .useGeneralContext */ .L)();
    const openNav = ()=>{
        setNavOpen(true);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: `${black && "head_black"}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "logo",
                    onClick: ()=>router.push("/")
                    ,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        loader: _Utils_loader__WEBPACK_IMPORTED_MODULE_5__/* .myLoader */ .t,
                        src: "/assets/title_new.svg",
                        priority: true,
                        width: 161,
                        height: 50,
                        alt: "title"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "logo_aux",
                    onClick: ()=>router.push("/")
                    ,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        loader: _Utils_loader__WEBPACK_IMPORTED_MODULE_5__/* .myLoader */ .t,
                        src: "/assets/title_aux.svg",
                        priority: true,
                        width: 251,
                        height: 80,
                        alt: "title"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bar_wrap",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bars_aux",
                            onClick: openNav,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                loader: _Utils_loader__WEBPACK_IMPORTED_MODULE_5__/* .myLoader */ .t,
                                src: "/assets/bar_aux.svg",
                                width: 24,
                                height: 24,
                                alt: "bars"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bars",
                            onClick: openNav,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                loader: _Utils_loader__WEBPACK_IMPORTED_MODULE_5__/* .myLoader */ .t,
                                src: "/assets/bars.svg",
                                width: 24,
                                height: 24,
                                alt: "bars"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 7026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(183);
/* harmony import */ var _ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utils_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4303);





const LoadingScreen = ({ loading , percent  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: loading ? "loading_wrap" : "none",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "loading_left",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "loading_left_img",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            loader: _Utils_loader__WEBPACK_IMPORTED_MODULE_4__/* .myLoader */ .t,
                            src: "/assets/title_new.svg",
                            alt: "",
                            height: 75,
                            width: 271
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "blink_anim",
                        children: "Experience"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "loading_centre",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "loading_centre_wrap",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        children: [
                            percent,
                            "%"
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "loading_right",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "blink_anim",
                    children: "Loading..."
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingScreen);


/***/ }),

/***/ 9196:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_GeneralContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6435);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var _Utils_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4303);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
framer_motion__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/link-passhref */ 






const whatVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    }
};
const Nav = ()=>{
    const { navOpen , setNavOpen  } = (0,_context_GeneralContext__WEBPACK_IMPORTED_MODULE_4__/* .useGeneralContext */ .L)();
    const { 0: whatShow , 1: setWhatShow  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: traShow , 1: setTraShow  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: culShow , 1: setCulShow  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: newsShow , 1: setNewsShow  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: currColor , 1: setCurrColor  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("#fff");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const move = (route)=>{
        router.push(route);
    };
    const removeNav = ()=>{
        setNavOpen(false);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
        children: navOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
            className: "nav",
            initial: {
                x: 500,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1
            },
            exit: {
                x: 500,
                opacity: 0
            },
            transition: {
                duration: 1,
                ease: "easeInOut"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                className: "nav_con",
                // variants={orangeVariants}
                // animate={!orangeBg ? "initial" : "animate"}
                initial: {
                    background: "#fff"
                },
                animate: {
                    background: currColor
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                        className: "nav_img_wrap",
                        variants: whatVariants,
                        animate: !whatShow ? "initial" : "animate",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            loader: _Utils_loader__WEBPACK_IMPORTED_MODULE_7__/* .myLoader */ .t,
                            src: "/assets/nav_img1.png",
                            alt: "nav img",
                            width: 273,
                            height: 455
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                        className: "nav_img_wrap",
                        variants: whatVariants,
                        animate: !traShow ? "initial" : "animate",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                loader: _Utils_loader__WEBPACK_IMPORTED_MODULE_7__/* .myLoader */ .t,
                                src: "/assets/nav_img2.png",
                                alt: "nav img",
                                width: 140,
                                height: 485
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "nav_img_training2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    loader: _Utils_loader__WEBPACK_IMPORTED_MODULE_7__/* .myLoader */ .t,
                                    src: "/assets/nav_img3.png",
                                    alt: "nav img",
                                    width: 140,
                                    height: 485
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                        className: "nav_img_wrap",
                        variants: whatVariants,
                        animate: !culShow ? "initial" : "animate",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            loader: _Utils_loader__WEBPACK_IMPORTED_MODULE_7__/* .myLoader */ .t,
                            src: "/assets/nav_img9.png",
                            alt: "nav img",
                            width: 323,
                            height: 315
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                        className: "nav_img_wrap",
                        variants: whatVariants,
                        animate: !newsShow ? "initial" : "animate",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "nav_img_culture_wrap",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "nav_img_culture nav_drop",
                                    style: {
                                        position: "relative",
                                        zIndex: 10
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                        loader: _Utils_loader__WEBPACK_IMPORTED_MODULE_7__/* .myLoader */ .t,
                                        src: "/assets/nav_img8.png",
                                        alt: "nav img",
                                        width: 241,
                                        height: 212
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "nav_img_culture img_culture_2",
                                    style: {
                                        position: "relative",
                                        zIndex: 9,
                                        transform: "translateY(-96%) translateX(-30px)"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                        loader: _Utils_loader__WEBPACK_IMPORTED_MODULE_7__/* .myLoader */ .t,
                                        src: "/assets/nav_img5.png",
                                        alt: "nav img",
                                        width: 281,
                                        height: 252
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "nav_header",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "title",
                                onClick: ()=>router.push("/")
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    loader: _Utils_loader__WEBPACK_IMPORTED_MODULE_7__/* .myLoader */ .t,
                                    src: "/assets/title.svg",
                                    width: 201,
                                    height: 79,
                                    alt: "logo"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "nav_icon",
                                onClick: removeNav,
                                children: "X"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "nav_body",
                        "data-aos": "flip-right",
                        "data-aos-delay": "300",
                        "data-aos-easing": "ease-out-back",
                        "data-aos-duration": "2000",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "nav_links1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                            onClick: ()=>move("/projects")
                                            ,
                                            onMouseEnter: ()=>setWhatShow(true)
                                            ,
                                            onMouseLeave: ()=>setWhatShow(false)
                                            ,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "01."
                                                }),
                                                "What we do"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                            onClick: ()=>move("/training")
                                            ,
                                            onMouseEnter: ()=>setTraShow(true)
                                            ,
                                            onMouseLeave: ()=>setTraShow(false)
                                            ,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "02."
                                                }),
                                                "Training"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                            onClick: ()=>move("/culture")
                                            ,
                                            onMouseEnter: ()=>setCulShow(true)
                                            ,
                                            onMouseLeave: ()=>setCulShow(false)
                                            ,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "03."
                                                }),
                                                "Culture"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                            onClick: ()=>move("/career")
                                            ,
                                            onMouseEnter: ()=>setNewsShow(true)
                                            ,
                                            onMouseLeave: ()=>setNewsShow(false)
                                            ,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                                "Career"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                            onMouseEnter: ()=>setCurrColor("#fff")
                                            ,
                                            onMouseLeave: ()=>setCurrColor("#fff")
                                            ,
                                            className: "con_hov",
                                            onClick: ()=>move("/contact")
                                            ,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                                "Contact",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "nav_links_img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                        loader: _Utils_loader__WEBPACK_IMPORTED_MODULE_7__/* .myLoader */ .t,
                                                        src: "/assets/nav_angle_arrow.svg",
                                                        width: 25,
                                                        height: 40,
                                                        alt: "arrow"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "nav_links2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: "More"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: "Twitter"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                            href: "https://www.instagram.com/softkodesworld",
                                            target: "_blank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "Instagram"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                            href: "https://www.linkedin.com/company/softkodes-tech-lim",
                                            target: "_blank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "Linkedin"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: "Subscribe to our newsletter"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4566:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gb": () => (/* reexport safe */ _LoadingScreen__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "JL": () => (/* reexport safe */ _Nav__WEBPACK_IMPORTED_MODULE_3__.Z)
/* harmony export */ });
/* harmony import */ var _LoadingScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7026);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3207);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2367);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9196);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Nav__WEBPACK_IMPORTED_MODULE_3__]);
_Nav__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useGeneralContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const GeneralContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
const useGeneralContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GeneralContext)
;
const GeneralContextProvider = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: navOpen , 1: setNavOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            setNavOpen(false);
        };
        router.events.on("routeChangeStart", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GeneralContext.Provider, {
        value: {
            navOpen,
            setNavOpen,
            loading,
            setLoading
        },
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralContextProvider);


/***/ })

};
;