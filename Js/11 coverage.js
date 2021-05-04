(function(e, t) {
    function r(r, i) {
        if (i.navigationStyle == "preview1" || i.navigationStyle == "preview3" || i.navigationStyle == "preview4") {
            i.soloArrowLeftHalign = "left";
            i.soloArrowLeftValign = "center";
            i.soloArrowLeftHOffset = 0;
            i.soloArrowLeftVOffset = 0;
            i.soloArrowRightHalign = "right";
            i.soloArrowRightValign = "center";
            i.soloArrowRightHOffset = 0;
            i.soloArrowRightVOffset = 0;
            i.navigationArrows = "solo"
        }
        if (i.simplifyAll == "on" && (f(8) || n())) {
            r.find(".tp-caption").each(function() {
            });
            r.find(">ul>li").each(function() {
            })
        }
        i.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
        if (i.fullWidth != "on" && i.fullScreen != "on")
            i.autoHeight = "off";
        if (i.fullScreen == "on")
            i.autoHeight = "on";
        if (i.fullWidth != "on" && i.fullScreen != "on")
            forceFulWidth = "off";
        if (i.fullWidth == "on" && i.autoHeight == "off")
            r.css({
                maxHeight: i.startheight + "px"
            });
        if (Q() && i.hideThumbsOnMobile == "on" && i.navigationType == "thumb")
            i.navigationType = "none";
        if (Q() && i.hideBulletsOnMobile == "on" && i.navigationType == "bullet")
            i.navigationType = "none";
        if (Q() && i.hideBulletsOnMobile == "on" && i.navigationType == "both")
            i.navigationType = "none";
        if (Q() && i.hideArrowsOnMobile == "on")
            i.navigationArrows = "none";
        if (i.forceFullWidth == "on" && r.closest(".forcefullwidth_wrapper_tp_banner").length == 0) {
            var s = r.parent().offset().left;
            var l = r.parent().css("marginBottom");
            var m = r.parent().css("marginTop");
            if (l == t)
                l = 0;
            if (m == t)
                m = 0;
            r.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + m + ";margin-bottom:" + l + '" class="forcefullwidth_wrapper_tp_banner"></div>');
            r.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + r.height() + 'px"></div>');
            r.css({
                backgroundColor: r.parent().css("backgroundColor"),
                backgroundImage: r.parent().css("backgroundImage")
            });
            r.parent().css({
                left: 0 - s + "px",
                position: "absolute",
                width: e(window).width()
            });
            i.width = e(window).width()
        }
        try {
            if (i.hideThumbsUnderResolution > e(window).width() && i.hideThumbsUnderResolution != 0) {
                r.parent().find(".tp-bullets.tp-thumbs").css({
                    display: "none"
                })
            } else {
                r.parent().find(".tp-bullets.tp-thumbs").css({
                    display: "block"
                })
            }
        } catch (g) {}
        if (!r.hasClass("revslider-initialised")) {
            r.addClass("revslider-initialised");
            if (r.attr("id") == t)
                r.attr("id", "revslider-" + Math.round(Math.random() * 1e3 + 5));
            i.firefox13 = false;
            i.ie = !e.support.opacity;
            i.ie9 = document.documentMode == 9;
            i.origcd = i.delay;
            var y = e.fn.jquery.split(".")
              , w = parseFloat(y[0])
              , E = parseFloat(y[1])
              , S = parseFloat(y[2] || "0");
            if (w == 1 && E < 7) {
                r.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + y + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>")
            }
            if (w > 1)
                i.ie = false;
            if (!e.support.transition)
                e.fn.transition = e.fn.animate;
            r.find(".caption").each(function() {
            });
            if (Q()) {
                r.find(".tp-caption").each(function() {
                })
            }
            var x = 0;
            var T = 0;
            var N = 0;
            var C = "http";
            if (location.protocol === "https:") {
                C = "https"
            }
            r.find(".tp-caption").each(function(n) {
                try {
                    if ((e(this).data("ytid") != t || e(this).find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && x == 0) {
                        x = 1;
                        var r = document.createElement("script");
                        var i = "https";
                        r.src = i + "://www.youtube.com/iframe_api";
                        var s = document.getElementsByTagName("script")[0];
                        var o = true;
                        e("head").find("*").each(function() {
                        });
                        if (o) {
                            s.parentNode.insertBefore(r, s)
                        }
                    }
                } catch (u) {}
                try {
                    if ((e(this).data("vimeoid") != t || e(this).find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && T == 0) {
                        T = 1;
                        var a = document.createElement("script");
                        a.src = C + "://a.vimeocdn.com/js/froogaloop2.min.js";
                        var s = document.getElementsByTagName("script")[0];
                        var o = true;
                        e("head").find("*").each(function() {
                        });
                        if (o)
                            s.parentNode.insertBefore(a, s)
                    }
                } catch (u) {}
                try {
                    if (e(this).data("videomp4") != t || e(this).data("videowebm") != t) {}
                } catch (u) {}
            });
            r.find(".tp-caption video").each(function(t) {
            });
            if (i.shuffle == "on") {
                var L = new Object
                  , A = r.find(">ul:first-child >li:first-child");
                L.fstransition = A.data("fstransition");
                L.fsmasterspeed = A.data("fsmasterspeed");
                L.fsslotamount = A.data("fsslotamount");
                for (var O = 0; O < r.find(">ul:first-child >li").length; O++) {
                    var M = Math.round(Math.random() * r.find(">ul:first-child >li").length);
                    r.find(">ul:first-child >li:eq(" + M + ")").prependTo(r.find(">ul:first-child"))
                }
                var _ = r.find(">ul:first-child >li:first-child");
                _.data("fstransition", L.fstransition);
                _.data("fsmasterspeed", L.fsmasterspeed);
                _.data("fsslotamount", L.fsslotamount)
            }
            i.slots = 4;
            i.act = -1;
            i.next = 0;
            if (i.startWithSlide != t)
                i.next = i.startWithSlide;
            var D = u("#")[0];
            if (D.length < 9) {
                if (D.split("slide").length > 1) {
                    var P = parseInt(D.split("slide")[1], 0);
                    if (P < 1)
                        P = 1;
                    if (P > r.find(">ul:first >li").length)
                        P = r.find(">ul:first >li").length;
                    i.next = P - 1
                }
            }
            i.firststart = 1;
            if (i.navigationHOffset == t)
                i.navOffsetHorizontal = 0;
            if (i.navigationVOffset == t)
                i.navOffsetVertical = 0;
            r.append('<div class="tp-loader ' + i.spinner + '">' + '<div class="dot1"></div>' + '<div class="dot2"></div>' + '<div class="bounce1"></div>' + '<div class="bounce2"></div>' + '<div class="bounce3"></div>' + "</div>");
            if (r.find(".tp-bannertimer").length == 0)
                r.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
            var H = r.find(".tp-bannertimer");
            if (H.length > 0) {
                H.css({
                    width: "0%"
                })
            }
            r.addClass("tp-simpleresponsive");
            i.container = r;
            i.slideamount = r.find(">ul:first >li").length;
            if (r.height() == 0)
                r.height(i.startheight);
            if (i.startwidth == t || i.startwidth == 0)
                i.startwidth = r.width();
            if (i.startheight == t || i.startheight == 0)
                i.startheight = r.height();
            i.width = r.width();
            i.height = r.height();
            i.bw = i.startwidth / r.width();
            i.bh = i.startheight / r.height();
            if (i.width != i.startwidth) {
                i.height = Math.round(i.startheight * (i.width / i.startwidth));
                r.height(i.height)
            }
            if (i.shadow != 0) {
                r.parent().append('<div class="tp-bannershadow tp-shadow' + i.shadow + '"></div>');
                var s = 0;
                if (i.forceFullWidth == "on")
                    s = 0 - i.container.parent().offset().left;
                r.parent().find(".tp-bannershadow").css({
                    width: i.width,
                    left: s
                })
            }
            r.find("ul").css({
                display: "none"
            });
            var B = r;
            r.find("ul").css({
                display: "block"
            });
            b(r, i);
            if (i.parallax != "off")
                nt(r, i);
            if (i.slideamount > 1)
                c(r, i);
            if (i.slideamount > 1 && i.navigationType == "thumb")
                it(r, i);
            if (i.slideamount > 1)
                h(r, i);
            if (i.keyboardNavigation == "on")
                p(r, i);
            d(r, i);
            if (i.hideThumbs > 0)
                v(r, i);
            k(r, i);
            if (i.slideamount > 1)
                K(r, i);
            setTimeout(function() {
                r.trigger("revolution.slide.onloaded")
            }, 500);
            e("body").data("rs-fullScreenMode", false);
            e(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
            });
            e(window).resize(function() {
                if (e("body").find(r) != 0)
                    if (i.forceFullWidth == "on") {
                        var t = i.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;
                        i.container.parent().css({
                            left: 0 - t + "px",
                            width: e(window).width()
                        })
                    }
                if (r.outerWidth(true) != i.width || r.is(":hidden")) {
                    a(r, i)
                }
            });
            try {
                if (i.hideThumbsUnderResoluition != 0 && i.navigationType == "thumb") {
                    if (i.hideThumbsUnderResoluition > e(window).width())
                        e(".tp-bullets").css({
                            display: "none"
                        });
                    else
                        e(".tp-bullets").css({
                            display: "block"
                        })
                }
            } catch (g) {}
            r.find(".tp-scrollbelowslider").on("click", function() {
            });
            var j = r.parent();
            if (e(window).width() < i.hideSliderAtLimit) {
                r.trigger("stoptimer");
                if (j.css("display") != "none")
                    j.data("olddisplay", j.css("display"));
                j.css({
                    display: "none"
                })
            }
            o(r, i)
        }
    }
    e.fn.extend({
        revolution: function(n) {
            defaults = {
                delay: 9e3,
                startheight: 500,
                startwidth: 960,
                fullScreenAlignForce: "off",
                autoHeight: "off",
                hideTimerBar: "off",
                hideThumbs: 200,
                hideNavDelayOnMobile: 1500,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 3,
                navigationType: "bullet",
                navigationArrows: "solo",
                navigationInGrid: "off",
                hideThumbsOnMobile: "off",
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResoluition: 0,
                navigationStyle: "round",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                keyboardNavigation: "on",
                touchenabled: "on",
                onHoverStop: "on",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "off",
                minFullScreenHeight: 0,
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                dottedOverlay: "none",
                forceFullWidth: "off",
                spinner: "spinner0",
                swipe_treshold: 75,
                swipe_min_touches: 1,
                drag_block_vertical: false,
                isJoomla: false,
                parallax: "off",
                parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                parallaxBgFreeze: "off",
                parallaxOpacity: "on",
                parallaxDisableOnMobile: "off",
                panZoomDisableOnMobile: "off",
                simplifyAll: "on",
                minHeight: 0,
                nextSlideOnWindowFocus: "off"
            };
            n = e.extend({}, defaults, n);
            return this.each(function() {
                if (window.tplogs == true)
                    try {
                        console.groupCollapsed("Slider Revolution 4.6.0 Initialisation on " + e(this).attr("id"));
                        console.groupCollapsed("Used Options:");
                        console.info(n);
                        console.groupEnd();
                        console.groupCollapsed("Tween Engine:")
                    } catch (i) {}
                if (punchgs.TweenLite == t) {
                    if (window.tplogs == true)
                        try {
                            console.error("GreenSock Engine Does not Exist!")
                        } catch (i) {}
                    return false
                }
                punchgs.force3D = true;
                if (window.tplogs == true)
                    try {
                        console.info("GreenSock Engine Version in Slider Revolution:" + punchgs.TweenLite.version)
                    } catch (i) {}
                if (n.simplifyAll == "on") {} else {
                    punchgs.TweenLite.lagSmoothing(1e3, 16);
                    punchgs.force3D = "true"
                }
                if (window.tplogs == true)
                    try {
                        console.groupEnd();
                        console.groupEnd()
                    } catch (i) {}
                r(e(this), n)
            })
        },
        revscroll: function(t) {
        },
        revredraw: function(t) {
        },
        revpause: function(t) {
        },
        revresume: function(t) {
        },
        revnext: function(t) {
        },
        revprev: function(t) {
        },
        revmaxslide: function(t) {
        },
        revcurrentslide: function(t) {
        },
        revlastslide: function(t) {
        },
        revshowslide: function(t) {
    });
    var s = function() {
        var e, t, n = {
            hidden: "visibilitychange",
            webkitHidden: "webkitvisibilitychange",
            mozHidden: "mozvisibilitychange",
            msHidden: "msvisibilitychange"
        };
        for (e in n) {
            if (e in document) {
                t = n[e];
                break
            }
        }
        return function(n) {
    }();
    var o = function(n, r) {
        var i = document.documentMode === t
          , s = window.chrome;
        if (i && !s) {
            e(window).on("focusin", function() {
            }).on("focusout", function() {})
        } else {
            if (window.addEventListener) {
                window.addEventListener("focus", function(e) {
                }, false);
                window.addEventListener("blur", function(e) {}, false)
            } else {
                window.attachEvent("focus", function(e) {
                });
                window.attachEvent("blur", function(e) {})
            }
        }
    };
    var u = function(e) {
        var t = [], n;
        var r = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_");
        for (var i = 0; i < r.length; i++) {
            r[i] = r[i].replace("%3D", "=");
            n = r[i].split("=");
            t.push(n[0]);
            t[n[0]] = n[1]
        }
        return t
    };
    var a = function(n, r) {
        try {
            if (r.hideThumbsUnderResoluition != 0 && r.navigationType == "thumb") {
                if (r.hideThumbsUnderResoluition > e(window).width())
                    e(".tp-bullets").css({
                        display: "none"
                    });
                else
                    e(".tp-bullets").css({
                        display: "block"
                    })
            }
        } catch (i) {}
        n.find(".defaultimg").each(function(t) {
            y(e(this), r)
        });
        var s = n.parent();
        if (e(window).width() < r.hideSliderAtLimit) {
            n.trigger("stoptimer");
            if (s.css("display") != "none")
                s.data("olddisplay", s.css("display"));
            s.css({
                display: "none"
            })
        } else {
            if (n.is(":hidden")) {
                if (s.data("olddisplay") != t && s.data("olddisplay") != "undefined" && s.data("olddisplay") != "none")
                    s.css({
                        display: s.data("olddisplay")
                    });
                else
                    s.css({
                        display: "block"
                    });
                n.trigger("restarttimer");
                setTimeout(function() {
                }, 150)
            }
        }
        var o = 0;
        if (r.forceFullWidth == "on")
            o = 0 - r.container.parent().offset().left;
        try {
            n.parent().find(".tp-bannershadow").css({
                width: r.width,
                left: o
            })
        } catch (i) {}
        var u = n.find(">ul >li:eq(" + r.act + ") .slotholder");
        var f = n.find(">ul >li:eq(" + r.next + ") .slotholder");
        x(n, r, n);
        punchgs.TweenLite.set(f.find(".defaultimg"), {
            opacity: 0
        });
        u.find(".defaultimg").css({
            opacity: 1
        });
        f.find(".defaultimg").each(function() {
            var i = e(this);
            if (r.panZoomDisableOnMobile == "on" && Q()) {} else {
                if (i.data("kenburn") != t) {
                    i.data("kenburn").restart();
                    Y(n, r, true)
                }
            }
        });
        var l = n.find(">ul >li:eq(" + r.next + ")");
        var c = n.parent().find(".tparrows");
        if (c.hasClass("preview2"))
            c.css({
                width: parseInt(c.css("minWidth"), 0)
            });
        I(l, r, true);
        m(n, r)
    };
    var f = function(t, n) {
        var r = e('<div style="display:none;"/>').appendTo(e("body"));
        r.html("<!--[if " + (n || "") + " IE " + (t || "") + "]><a>&nbsp;</a><![endif]-->");
        var i = r.find("a").length;
        r.remove();
        return i
    };
    var l = function(e, t) {
        if (e.next == t.find(">ul >li").length - 1) {
            e.looptogo = e.looptogo - 1;
            if (e.looptogo <= 0)
                e.stopLoop = "on"
        }
        k(t, e)
    };
    var c = function(t, n) {
        var r = "hidebullets";
        if (n.hideThumbs == 0)
            r = "";
        if (n.navigationType == "bullet" || n.navigationType == "both") {
            t.parent().append('<div class="tp-bullets ' + r + " simplebullets " + n.navigationStyle + '"></div>')
        }
        var i = t.parent().find(".tp-bullets");
        t.find(">ul:first >li").each(function(e) {
            var n = t.find(">ul:first >li:eq(" + e + ") img:first").attr("src");
            i.append('<div class="bullet"></div>');
            var r = i.find(".bullet:first")
        });
        i.find(".bullet").each(function(r) {
        });
        i.append('<div class="tpclear"></div>');
        m(t, n)
    };
    var h = function(e, n) {
        function u(t) {
            e.parent().append('<div style="' + i + '" class="tp-' + t + "arrow " + s + " tparrows " + o + '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')
        }
        var r = e.find(".tp-bullets");
        var i = ""
          , s = "hidearrows";
        if (n.hideThumbs == 0)
            s = "";
        var o = n.navigationStyle;
        if (n.navigationArrows == "none")
            i = "visibility:hidden;display:none";
        n.soloArrowStyle = "default" + " " + n.navigationStyle;
        if (n.navigationArrows != "none" && n.navigationArrows != "nexttobullets")
            o = n.soloArrowStyle;
        u("left");
        u("right");
        e.parent().find(".tp-rightarrow").click(function() {
        });
        e.parent().find(".tp-leftarrow").click(function() {
            if (n.transition == 0) {
                n.next = n.next - 1;
                n.leftarrowpressed = 1;
                if (n.next < 0)
                    n.next = n.slideamount - 1;
                l(n, e)
            }
        });
        m(e, n)
    };
    var p = function(n, r) {
    };
    var d = function(t, n) {
        var r = "vertical";
        if (n.touchenabled == "on") {
            if (n.drag_block_vertical == true)
                r = "none";
            t.swipe({
                allowPageScroll: r,
                fingers: n.swipe_min_touches,
                treshold: n.swipe_treshold,
                swipe: function(i, s, o, u, a, f) {
            })
        }
    };
    var v = function(e, t) {
        var n = e.parent().find(".tp-bullets");
        var r = e.parent().find(".tparrows");
        if (n == null) {
            e.append('<div class=".tp-bullets"></div>');
            var n = e.parent().find(".tp-bullets")
        }
        if (r == null) {
            e.append('<div class=".tparrows"></div>');
            var r = e.parent().find(".tparrows")
        }
        e.data("hideThumbs", t.hideThumbs);
        n.addClass("hidebullets");
        r.addClass("hidearrows");
        if (Q()) {
            try {
                e.hammer().on("touch", function() {
                });
                e.hammer().on("release", function() {
                })
            } catch (i) {}
        } else {
            n.hover(function() {
            }, function() {
            });
            r.hover(function() {
            }, function() {
            });
            e.on("mouseenter", function() {
                e.addClass("hovered");
                if (t.onHoverStop == "on")
                    e.trigger("stoptimer");
                clearTimeout(e.data("hideThumbs"));
                n.removeClass("hidebullets");
                r.removeClass("hidearrows")
            });
            e.on("mouseleave", function() {
                e.removeClass("hovered");
                e.trigger("starttimer");
                if (!e.hasClass("hovered") && !n.hasClass("hovered"))
                    e.data("hideThumbs", setTimeout(function() {
                        n.addClass("hidebullets");
                        r.addClass("hidearrows")
                    }, t.hideThumbs))
            })
        }
    };
    var m = function(t, n) {
        var r = t.parent();
        var i = r.find(".tp-bullets");
        if (n.navigationType == "thumb") {
            i.find(".thumb").each(function(t) {
            });
            var s = i.find(".tp-mask");
            s.width(n.thumbWidth * n.thumbAmount * n.bw);
            s.height(n.thumbHeight * n.bh);
            s.parent().width(n.thumbWidth * n.thumbAmount * n.bw);
            s.parent().height(n.thumbHeight * n.bh)
        }
        var o = r.find(".tp-leftarrow");
        var u = r.find(".tp-rightarrow");
        if (n.navigationType == "thumb" && n.navigationArrows == "nexttobullets")
            n.navigationArrows = "solo";
        if (n.navigationArrows == "nexttobullets") {
            o.prependTo(i).css({
                "float": "left"
            });
            u.insertBefore(i.find(".tpclear")).css({
                "float": "left"
            })
        }
        var a = 0;
        if (n.forceFullWidth == "on")
            a = 0 - n.container.parent().offset().left;
        var f = 0
          , l = 0;
        if (n.navigationInGrid == "on") {
            f = t.width() > n.startwidth ? (t.width() - n.startwidth) / 2 : 0,
            l = t.height() > n.startheight ? (t.height() - n.startheight) / 2 : 0
        }
        if (n.navigationArrows != "none" && n.navigationArrows != "nexttobullets") {
            o.css({
                position: "absolute"
            });
            u.css({
                position: "absolute"
            });
            if (n.soloArrowLeftValign == "center")
                o.css({
                    top: "50%",
                    marginTop: n.soloArrowLeftVOffset - Math.round(o.innerHeight() / 2) + "px"
                });
            if (n.soloArrowLeftValign == "bottom")
                o.css({
                    top: "auto",
                    bottom: 0 + n.soloArrowLeftVOffset + "px"
                });
            if (n.soloArrowLeftValign == "top")
                o.css({
                    bottom: "auto",
                    top: 0 + n.soloArrowLeftVOffset + "px"
                });
            if (n.soloArrowLeftHalign == "center")
                o.css({
                    left: "50%",
                    marginLeft: a + n.soloArrowLeftHOffset - Math.round(o.innerWidth() / 2) + "px"
                });
            if (n.soloArrowLeftHalign == "left")
                o.css({
                    left: f + n.soloArrowLeftHOffset + a + "px"
                });
            if (n.soloArrowLeftHalign == "right")
                o.css({
                    right: f + n.soloArrowLeftHOffset - a + "px"
                });
            if (n.soloArrowRightValign == "center")
                u.css({
                    top: "50%",
                    marginTop: n.soloArrowRightVOffset - Math.round(u.innerHeight() / 2) + "px"
                });
            if (n.soloArrowRightValign == "bottom")
                u.css({
                    top: "auto",
                    bottom: 0 + n.soloArrowRightVOffset + "px"
                });
            if (n.soloArrowRightValign == "top")
                u.css({
                    bottom: "auto",
                    top: 0 + n.soloArrowRightVOffset + "px"
                });
            if (n.soloArrowRightHalign == "center")
                u.css({
                    left: "50%",
                    marginLeft: a + n.soloArrowRightHOffset - Math.round(u.innerWidth() / 2) + "px"
                });
            if (n.soloArrowRightHalign == "left")
                u.css({
                    left: f + n.soloArrowRightHOffset + a + "px"
                });
            if (n.soloArrowRightHalign == "right")
                u.css({
                    right: f + n.soloArrowRightHOffset - a + "px"
                });
            if (o.position() != null)
                o.css({
                    top: Math.round(parseInt(o.position().top, 0)) + "px"
                });
            if (u.position() != null)
                u.css({
                    top: Math.round(parseInt(u.position().top, 0)) + "px"
                })
        }
        if (n.navigationArrows == "none") {
            o.css({
                visibility: "hidden"
            });
            u.css({
                visibility: "hidden"
            })
        }
        if (n.navigationVAlign == "center")
            i.css({
                top: "50%",
                marginTop: n.navigationVOffset - Math.round(i.innerHeight() / 2) + "px"
            });
        if (n.navigationVAlign == "bottom")
            i.css({
                bottom: 0 + n.navigationVOffset + "px"
            });
        if (n.navigationVAlign == "top")
            i.css({
                top: 0 + n.navigationVOffset + "px"
            });
        if (n.navigationHAlign == "center")
            i.css({
                left: "50%",
                marginLeft: a + n.navigationHOffset - Math.round(i.innerWidth() / 2) + "px"
            });
        if (n.navigationHAlign == "left")
            i.css({
                left: 0 + n.navigationHOffset + a + "px"
            });
        if (n.navigationHAlign == "right")
            i.css({
                right: 0 + n.navigationHOffset - a + "px"
            })
    };
    var g = function(n) {
        var r = n.container;
        n.beforli = n.next - 1;
        n.comingli = n.next + 1;
        if (n.beforli < 0)
            n.beforli = n.slideamount - 1;
        if (n.comingli >= n.slideamount)
            n.comingli = 0;
        var i = r.find(">ul:first-child >li:eq(" + n.comingli + ")")
          , s = r.find(">ul:first-child >li:eq(" + n.beforli + ")")
          , o = s.find(".defaultimg").attr("src")
          , u = i.find(".defaultimg").attr("src");
        if (n.arr == t) {
            n.arr = r.parent().find(".tparrows"),
            n.rar = r.parent().find(".tp-rightarrow"),
            n.lar = r.parent().find(".tp-leftarrow"),
            n.raimg = n.rar.find(".tp-arr-imgholder"),
            n.laimg = n.lar.find(".tp-arr-imgholder"),
            n.raimg_b = n.rar.find(".tp-arr-imgholder2"),
            n.laimg_b = n.lar.find(".tp-arr-imgholder2"),
            n.ratit = n.rar.find(".tp-arr-titleholder"),
            n.latit = n.lar.find(".tp-arr-titleholder")
        }
        var a = n.arr
          , f = n.rar
          , l = n.lar
          , c = n.raimg
          , h = n.laimg
          , p = n.raimg_b
          , d = n.laimg_b
          , v = n.ratit
          , m = n.latit;
        if (i.data("title") != t)
            v.html(i.data("title"));
        if (s.data("title") != t)
            m.html(s.data("title"));
        if (f.hasClass("itishovered")) {
            f.width(v.outerWidth(true) + parseInt(f.css("minWidth"), 0))
        }
        if (l.hasClass("itishovered")) {
            l.width(m.outerWidth(true) + parseInt(l.css("minWidth"), 0))
        }
        if (a.hasClass("preview2") && !a.hasClass("hashoveralready")) {
            a.addClass("hashoveralready");
            if (!Q())
                a.hover(function() {
                }, function() {
                });
            else {
                var a = e(this)
                  , g = a.find(".tp-arr-titleholder");
                g.addClass("alwayshidden");
                punchgs.TweenLite.set(g, {
                    autoAlpha: 0
                })
            }
        }
        if (s.data("thumb") != t)
            o = s.data("thumb");
        if (i.data("thumb") != t)
            u = i.data("thumb");
        if (!a.hasClass("preview4")) {
            punchgs.TweenLite.to(c, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    c.css({
                        backgroundImage: "url(" + u + ")"
                    });
                    h.css({
                        backgroundImage: "url(" + o + ")"
                    })
                }
            });
            punchgs.TweenLite.to(h, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    punchgs.TweenLite.to(c, .5, {
                        autoAlpha: 1,
                        delay: .2
                    });
                    punchgs.TweenLite.to(h, .5, {
                        autoAlpha: 1,
                        delay: .2
                    })
                }
            })
        } else {
            p.css({
                backgroundImage: "url(" + u + ")"
            });
            d.css({
                backgroundImage: "url(" + o + ")"
            });
            punchgs.TweenLite.fromTo(p, .8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: -c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
            });
            punchgs.TweenLite.fromTo(d, .8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
            });
            punchgs.TweenLite.fromTo(c, .8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: -c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
            });
            punchgs.TweenLite.fromTo(h, .8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
            })
        }
        if (f.hasClass("preview4") && !f.hasClass("hashoveralready")) {
            f.addClass("hashoveralready");
            f.hover(function() {
            }, function() {
            });
            l.hover(function() {
            }, function() {
            })
        }
    };
    var y = function(n, r) {
        r.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({
            height: r.container.height()
        });
        r.container.closest(".rev_slider_wrapper").css({
            height: r.container.height()
        });
        r.width = parseInt(r.container.width(), 0);
        r.height = parseInt(r.container.height(), 0);
        r.bw = r.width / r.startwidth;
        r.bh = r.height / r.startheight;
        if (r.bh > r.bw)
            r.bh = r.bw;
        if (r.bh < r.bw)
            r.bw = r.bh;
        if (r.bw < r.bh)
            r.bh = r.bw;
        if (r.bh > 1) {
            r.bw = 1;
            r.bh = 1
        }
        if (r.bw > 1) {
            r.bw = 1;
            r.bh = 1
        }
        r.height = Math.round(r.startheight * (r.width / r.startwidth));
        if (r.height > r.startheight && r.autoHeight != "on")
            r.height = r.startheight;
        if (r.fullScreen == "on") {
            r.height = r.bw * r.startheight;
            var i = r.container.parent().width();
            var s = e(window).height();
            if (r.fullScreenOffsetContainer != t) {
                try {
                    var o = r.fullScreenOffsetContainer.split(",");
                    e.each(o, function(t, n) {
                    })
                } catch (u) {}
                try {
                    if (r.fullScreenOffset.split("%").length > 1 && r.fullScreenOffset != t && r.fullScreenOffset.length > 0) {
                        s = s - e(window).height() * parseInt(r.fullScreenOffset, 0) / 100
                    } else {
                        if (r.fullScreenOffset != t && r.fullScreenOffset.length > 0)
                            s = s - parseInt(r.fullScreenOffset, 0)
                    }
                    if (s < r.minFullScreenHeight)
                        s = r.minFullScreenHeight
                } catch (u) {}
            }
            r.container.parent().height(s);
            r.container.closest(".rev_slider_wrapper").height(s);
            r.container.css({
                height: "100%"
            });
            r.height = s;
            if (r.minHeight != t && r.height < r.minHeight)
                r.height = r.minHeight
        } else {
            if (r.minHeight != t && r.height < r.minHeight)
                r.height = r.minHeight;
            r.container.height(r.height)
        }
        r.slotw = Math.ceil(r.width / r.slots);
        if (r.fullScreen == "on")
            r.sloth = Math.ceil(e(window).height() / r.slots);
        else
            r.sloth = Math.ceil(r.height / r.slots);
        if (r.autoHeight == "on")
            r.sloth = Math.ceil(n.height() / r.slots)
    };
    var b = function(n, r) {
        n.find(".tp-caption").each(function() {
            e(this).addClass(e(this).data("transition"));
            e(this).addClass("start")
        });
        n.find(">ul:first").css({
            overflow: "hidden",
            width: "100%",
            height: "100%",
            maxHeight: n.parent().css("maxHeight")
        });
        if (r.autoHeight == "on") {
            n.find(">ul:first").css({
                overflow: "hidden",
                width: "100%",
                height: "100%",
                maxHeight: "none"
            });
            n.css({
                maxHeight: "none"
            });
            n.parent().css({
                maxHeight: "none"
            })
        }
        n.find(">ul:first >li").each(function(n) {
            var r = e(this);
            r.css({
                width: "100%",
                height: "100%",
                overflow: "hidden"
            });
            if (r.data("link") != t) {
                var i = r.data("link");
                var s = "_self";
                var o = 60;
                if (r.data("slideindex") == "back")
                    o = 0;
                var u = r.data("linktoslide");
                if (r.data("target") != t)
                    s = r.data("target");
                if (i == "slide") {
                    r.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + o + ';" data-x="center" data-y="center" data-linktoslide="' + u + '" data-start="0"><a style="width:100%;height:100%;display:block"><span style="width:100%;height:100%;display:block"></span></a></div>')
                } else {
                    u = "no";
                    r.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + o + ';" data-x="center" data-y="center" data-linktoslide="' + u + '" data-start="0"><a style="width:100%;height:100%;display:block" target="' + s + '" href="' + i + '"><span style="width:100%;height:100%;display:block"></span></a></div>')
                }
            }
        });
        n.parent().css({
            overflow: "visible"
        });
        n.find(">ul:first >li >img").each(function(n) {
            var i = e(this);
            i.addClass("defaultimg");
            if (i.data("lazyload") != t && i.data("lazydone") != 1) {} else {
                y(i, r)
            }
            i.wrap('<div class="slotholder" style="width:100%;height:100%;"' + 'data-duration="' + i.data("duration") + '"' + 'data-zoomstart="' + i.data("zoomstart") + '"' + 'data-zoomend="' + i.data("zoomend") + '"' + 'data-rotationstart="' + i.data("rotationstart") + '"' + 'data-rotationend="' + i.data("rotationend") + '"' + 'data-ease="' + i.data("ease") + '"' + 'data-duration="' + i.data("duration") + '"' + 'data-bgpositionend="' + i.data("bgpositionend") + '"' + 'data-bgposition="' + i.data("bgposition") + '"' + 'data-duration="' + i.data("duration") + '"' + 'data-kenburns="' + i.data("kenburns") + '"' + 'data-easeme="' + i.data("ease") + '"' + 'data-bgfit="' + i.data("bgfit") + '"' + 'data-bgfitend="' + i.data("bgfitend") + '"' + 'data-owidth="' + i.data("owidth") + '"' + 'data-oheight="' + i.data("oheight") + '"' + "></div>");
            if (r.dottedOverlay != "none" && r.dottedOverlay != t)
                i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + r.dottedOverlay + '"></div>');
            var s = i.attr("src")
              , o = i.data("lazyload")
              , u = i.data("bgfit")
              , a = i.data("bgrepeat")
              , l = i.data("bgposition");
            if (u == t)
                u = "cover";
            if (a == t)
                a = "no-repeat";
            if (l == t)
                l = "center center";
            var c = i.closest(".slotholder");
            i.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + i.data("lazyload") + '" data-bgfit="' + u + '"data-bgposition="' + l + '" data-bgrepeat="' + a + '" data-lazydone="' + i.data("lazydone") + '" src="' + s + '" data-src="' + s + '" style="background-color:' + i.css("backgroundColor") + ";background-repeat:" + a + ";background-image:url(" + s + ");background-size:" + u + ";background-position:" + l + ';width:100%;height:100%;"></div>');
            if (f(8)) {
                c.find(".tp-bgimg").css({
                    backgroundImage: "none",
                    "background-image": "none"
                });
                c.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="' + s + '" style="width:100%">')
            }
            i.css({
                opacity: 0
            });
            i.data("li-id", n)
        })
    };
    var w = function(e, n, r, i) {
        var s = e
          , o = s.find(".defaultimg")
          , u = s.data("zoomstart")
          , a = s.data("rotationstart");
        if (o.data("currotate") != t)
            a = o.data("currotate");
        if (o.data("curscale") != t)
            u = o.data("curscale");
        y(o, n);
        var l = o.data("src")
          , c = o.css("background-color")
          , h = n.width
          , p = n.height
          , d = o.data("fxof");
        if (n.autoHeight == "on")
            p = n.container.height();
        if (d == t)
            d = 0;
        fullyoff = 0;
        var v = 0
          , m = o.data("bgfit")
          , g = o.data("bgrepeat")
          , b = o.data("bgposition");
        if (m == t)
            m = "cover";
        if (g == t)
            g = "no-repeat";
        if (b == t)
            b = "center center";
        if (f(8)) {
            s.data("kenburns", "off");
            var w = l;
            l = ""
        }
        if (n.panZoomDisableOnMobile == "on" && Q()) {
            s.data("kenburns", "off")
        }
        if (s.data("kenburns") == "on") {
            m = u;
            if (m.toString().length < 4)
                m = G(m, s, n)
        }
        if (i == "horizontal") {
            if (!r)
                var v = 0 - n.slotw;
            for (var E = 0; E < n.slots; E++) {
                s.append('<div class="slot" style="position:absolute;' + "top:" + (0 + fullyoff) + "px;" + "left:" + (d + E * n.slotw) + "px;" + "overflow:hidden;width:" + (n.slotw + .6) + "px;" + "height:" + p + 'px">' + '<div class="slotslide" style="position:absolute;' + "top:0px;left:" + v + "px;" + "width:" + (n.slotw + .6) + "px;" + "height:" + p + 'px;overflow:hidden;">' + '<div style="background-color:' + c + ";" + "position:absolute;top:0px;" + "left:" + (0 - E * n.slotw) + "px;" + "width:" + h + "px;height:" + p + "px;" + "background-image:url(" + l + ");" + "background-repeat:" + g + ";" + "background-size:" + m + ";background-position:" + b + ';">' + "</div></div></div>");
                if (u != t && a != t)
                    punchgs.TweenLite.set(s.find(".slot").last(), {
                        rotationZ: a
                    });
                if (f(8)) {
                    s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + w + '" style="width:100%;height:auto">');
                    S(s, n)
                }
            }
        } else {
            if (!r)
                var v = 0 - n.sloth;
            for (var E = 0; E < n.slots + 2; E++) {
                s.append('<div class="slot" style="position:absolute;' + "top:" + (fullyoff + E * n.sloth) + "px;" + "left:" + d + "px;" + "overflow:hidden;" + "width:" + h + "px;" + "height:" + n.sloth + 'px">' + '<div class="slotslide" style="position:absolute;' + "top:" + v + "px;" + "left:0px;width:" + h + "px;" + "height:" + n.sloth + "px;" + 'overflow:hidden;">' + '<div style="background-color:' + c + ";" + "position:absolute;" + "top:" + (0 - E * n.sloth) + "px;" + "left:0px;" + "width:" + h + "px;height:" + p + "px;" + "background-image:url(" + l + ");" + "background-repeat:" + g + ";" + "background-size:" + m + ";background-position:" + b + ';">' + "</div></div></div>");
                if (u != t && a != t)
                    punchgs.TweenLite.set(s.find(".slot").last(), {
                        rotationZ: a
                    });
                if (f(8)) {
                    s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + w + '" style="width:100%;height:auto;">');
                    S(s, n)
                }
            }
        }
    };
    var E = function(e, n, r) {
    };
    var S = function(e, t) {
    };
    var x = function(t, n, r) {
        r.find(".slot").each(function() {
            e(this).remove()
        });
        n.transition = 0
    };
    var T = function(n, r) {
        n.find("img, .defaultimg").each(function(n) {
            var i = e(this);
            if (i.data("lazyload") != i.attr("src") && r < 3 && i.data("lazyload") != t && i.data("lazyload") != "undefined") {
                if (i.data("lazyload") != t && i.data("lazyload") != "undefined") {
                    i.attr("src", i.data("lazyload"));
                    var s = new Image;
                    s.onload = function(e) {
                        i.data("lazydone", 1);
                        if (i.hasClass("defaultimg"))
                            N(i, s)
                    }
                    ;
                    s.error = function() {
                    ;
                    s.src = i.attr("src");
                    if (s.complete) {
                        if (i.hasClass("defaultimg"))
                            N(i, s);
                        i.data("lazydone", 1)
                    }
                }
            } else {
                if ((i.data("lazyload") === t || i.data("lazyload") === "undefined") && i.data("lazydone") != 1) {
                    var s = new Image;
                    s.onload = function() {
                    ;
                    s.error = function() {
                    ;
                    if (i.attr("src") != t && i.attr("src") != "undefined") {
                        s.src = i.attr("src")
                    } else
                        s.src = i.data("src");
                    if (s.complete) {
                        if (i.hasClass("defaultimg")) {
                            N(i, s)
                        }
                        i.data("lazydone", 1)
                    }
                }
            }
        })
    };
    var N = function(e, t) {
        var n = e.closest("li");
        var r = t.width;
        var i = t.height;
        n.data("owidth", r);
        n.data("oheight", i);
        n.find(".slotholder").data("owidth", r);
        n.find(".slotholder").data("oheight", i);
        n.data("loadeddone", 1)
    };
    var C = function(n, r, i) {
        T(n, 0);
        var s = setInterval(function() {
            i.bannertimeronpause = true;
            i.container.trigger("stoptimer");
            i.cd = 0;
            var o = 0;
            n.find("img, .defaultimg").each(function(t) {
                if (e(this).data("lazydone") != 1) {
                    o++
                }
            });
            if (o > 0)
                T(n, o);
            else {
                clearInterval(s);
                if (r != t)
                    r()
            }
        }, 100)
    };
    var k = function(e, n) {
        try {
            var r = e.find(">ul:first-child >li:eq(" + n.act + ")")
        } catch (i) {
            var r = e.find(">ul:first-child >li:eq(1)")
        }
        n.lastslide = n.act;
        var s = e.find(">ul:first-child >li:eq(" + n.next + ")");
        var o = s.find(".defaultimg");
        n.bannertimeronpause = true;
        e.trigger("stoptimer");
        n.cd = 0;
        if (o.data("lazyload") != t && o.data("lazyload") != "undefined" && o.data("lazydone") != 1) {
            if (!f(8))
                o.css({
                    backgroundImage: 'url("' + s.find(".defaultimg").data("lazyload") + '")'
                });
            else {
                o.attr("src", s.find(".defaultimg").data("lazyload"))
            }
            o.data("src", s.find(".defaultimg").data("lazyload"));
            o.data("lazydone", 1);
            o.data("orgw", 0);
            s.data("loadeddone", 1);
            e.find(".tp-loader").css({
                display: "block"
            });
            C(e.find(".tp-static-layers"), function() {
                C(s, function() {
                    var t = s.find(".slotholder");
                    if (t.data("kenburns") == "on") {
                        var r = setInterval(function() {
                        }, 10)
                    } else
                        L(n, o, e)
                }, n)
            }, n)
        } else {
            if (s.data("loadeddone") === t) {
                s.data("loadeddone", 1);
                C(s, function() {
                }, n)
            } else
                L(n, o, e)
        }
    };
    var L = function(e, t, n) {
        e.bannertimeronpause = false;
        e.cd = 0;
        n.trigger("nulltimer");
        n.find(".tp-loader").css({
            display: "none"
        });
        y(t, e);
        m(n, e);
        y(t, e);
        A(n, e)
    };
    var A = function(e, n) {
        e.trigger("revolution.slide.onbeforeswap");
        n.transition = 1;
        n.videoplaying = false;
        try {
            var r = e.find(">ul:first-child >li:eq(" + n.act + ")")
        } catch (i) {
            var r = e.find(">ul:first-child >li:eq(1)")
        }
        n.lastslide = n.act;
        var s = e.find(">ul:first-child >li:eq(" + n.next + ")");
        setTimeout(function() {
            g(n)
        }, 200);
        var o = r.find(".slotholder");
        var u = s.find(".slotholder");
        if (u.data("kenburns") == "on" || o.data("kenburns") == "on") {
            tt(e, n);
            e.find(".kenburnimg").remove()
        }
        if (s.data("delay") != t) {
            n.cd = 0;
            n.delay = s.data("delay")
        } else {
            n.delay = n.origcd
        }
        if (n.firststart == 1)
            punchgs.TweenLite.set(r, {
                autoAlpha: 0
            });
        punchgs.TweenLite.set(r, {
            zIndex: 18
        });
        punchgs.TweenLite.set(s, {
            autoAlpha: 0,
            zIndex: 20
        });
        var a = 0;
        if (r.index() != s.index() && n.firststart != 1) {
            a = X(r, n)
        }
        if (r.data("saveperformance") != "on")
            a = 0;
        setTimeout(function() {
            e.trigger("restarttimer");
            O(e, n, s, r, o, u)
        }, a)
    };
    var O = function(n, r, i, s, o, u) {
        function T() {
            e.each(d, function(e, t) {
                if (t[0] == h || t[8] == h) {
                    a = t[1];
                    p = t[2];
                    g = y
                }
                y = y + 1
            })
        }
        if (i.data("differentissplayed") == "prepared") {
            i.data("differentissplayed", "done");
            i.data("transition", i.data("savedtransition"));
            i.data("slotamount", i.data("savedslotamount"));
            i.data("masterspeed", i.data("savedmasterspeed"))
        }
        if (i.data("fstransition") != t && i.data("differentissplayed") != "done") {
            i.data("savedtransition", i.data("transition"));
            i.data("savedslotamount", i.data("slotamount"));
            i.data("savedmasterspeed", i.data("masterspeed"));
            i.data("transition", i.data("fstransition"));
            i.data("slotamount", i.data("fsslotamount"));
            i.data("masterspeed", i.data("fsmasterspeed"));
            i.data("differentissplayed", "prepared")
        }
        n.find(".active-revslide").removeClass(".active-revslide");
        i.addClass("active-revslide");
        if (i.data("transition") == t)
            i.data("transition", "random");
        var a = 0
          , l = i.data("transition").split(",")
          , c = i.data("nexttransid") == t ? -1 : i.data("nexttransid");
        if (i.data("randomtransition") == "on")
            c = Math.round(Math.random() * l.length);
        else
            c = c + 1;
        if (c == l.length)
            c = 0;
        i.data("nexttransid", c);
        var h = l[c];
        if (r.ie) {
            if (h == "boxfade")
                h = "boxslide";
            if (h == "slotfade-vertical")
                h = "slotzoom-vertical";
            if (h == "slotfade-horizontal")
                h = "slotzoom-horizontal"
        }
        if (f(8)) {
            h = 11
        }
        var p = 0;
        if (r.parallax == "scroll" && r.parallaxFirstGo == t) {
            r.parallaxFirstGo = true;
            rt(n, r);
            setTimeout(function() {
            }, 210);
            setTimeout(function() {
            }, 420)
        }
        if (h == "boxslide" || h == "boxfade" || h == "papercut" || h == 0 || h == 1 || h == 16)
            h = 9;
        if (h == "slidehorizontal") {
            h = "slideleft";
            if (r.leftarrowpressed == 1)
                h = "slideright"
        }
        if (h == "slidevertical") {
            h = "slideup";
            if (r.leftarrowpressed == 1)
                h = "slidedown"
        }
        if (h == "parallaxhorizontal") {
            h = "parallaxtoleft";
            if (r.leftarrowpressed == 1)
                h = "parallaxtoright"
        }
        if (h == "parallaxvertical") {
            h = "parallaxtotop";
            if (r.leftarrowpressed == 1)
                h = "parallaxtobottom"
        }
        var d = [["boxslide", 0, 1, 10, 0, "box", false, null, 0], ["boxfade", 1, 0, 10, 0, "box", false, null, 1], ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", true, false, 2], ["slotslide-vertical", 3, 0, 0, 200, "vertical", true, false, 3], ["curtain-1", 4, 3, 0, 0, "horizontal", true, true, 4], ["curtain-2", 5, 3, 0, 0, "horizontal", true, true, 5], ["curtain-3", 6, 3, 25, 0, "horizontal", true, true, 6], ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", true, true, 7], ["slotzoom-vertical", 8, 0, 0, 0, "vertical", true, true, 8], ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", true, null, 9], ["slotfade-vertical", 10, 0, 0, 500, "vertical", true, null, 10], ["fade", 11, 0, 1, 300, "horizontal", true, null, 11], ["slideleft", 12, 0, 1, 0, "horizontal", true, true, 12], ["slideup", 13, 0, 1, 0, "horizontal", true, true, 13], ["slidedown", 14, 0, 1, 0, "horizontal", true, true, 14], ["slideright", 15, 0, 1, 0, "horizontal", true, true, 15], ["papercut", 16, 0, 0, 600, "", null, null, 16], ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", false, true, 17], ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", false, true, 18], ["cubic", 19, 0, 20, 600, "horizontal", false, true, 19], ["cube", 19, 0, 20, 600, "horizontal", false, true, 20], ["flyin", 20, 0, 4, 600, "vertical", false, true, 21], ["turnoff", 21, 0, 1, 1600, "horizontal", false, true, 22], ["incube", 22, 0, 20, 200, "horizontal", false, true, 23], ["cubic-horizontal", 23, 0, 20, 500, "vertical", false, true, 24], ["cube-horizontal", 23, 0, 20, 500, "vertical", false, true, 25], ["incube-horizontal", 24, 0, 20, 500, "vertical", false, true, 26], ["turnoff-vertical", 25, 0, 1, 200, "horizontal", false, true, 27], ["fadefromright", 12, 1, 1, 0, "horizontal", true, true, 28], ["fadefromleft", 15, 1, 1, 0, "horizontal", true, true, 29], ["fadefromtop", 14, 1, 1, 0, "horizontal", true, true, 30], ["fadefrombottom", 13, 1, 1, 0, "horizontal", true, true, 31], ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", true, true, 32], ["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", true, true, 33], ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", true, true, 34], ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", true, true, 35], ["parallaxtoright", 12, 3, 1, 0, "horizontal", true, true, 36], ["parallaxtoleft", 15, 3, 1, 0, "horizontal", true, true, 37], ["parallaxtotop", 14, 3, 1, 0, "horizontal", true, true, 38], ["parallaxtobottom", 13, 3, 1, 0, "horizontal", true, true, 39], ["scaledownfromright", 12, 4, 1, 0, "horizontal", true, true, 40], ["scaledownfromleft", 15, 4, 1, 0, "horizontal", true, true, 41], ["scaledownfromtop", 14, 4, 1, 0, "horizontal", true, true, 42], ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", true, true, 43], ["zoomout", 13, 5, 1, 0, "horizontal", true, true, 44], ["zoomin", 13, 6, 1, 0, "horizontal", true, true, 45], ["notransition", 26, 0, 1, 0, "horizontal", true, null, 46]];
        var v = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
        var m = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
        var a = 0;
        var p = 1;
        var g = 0;
        var y = 0;
        var b = new Array;
        if (u.data("kenburns") == "on") {
            if (h == "boxslide" || h == 0 || h == "boxfade" || h == 1 || h == "papercut" || h == 16)
                h = 11;
            Y(n, r, true, true)
        }
        if (h == "random") {
            h = Math.round(Math.random() * d.length - 1);
            if (h > d.length - 1)
                h = d.length - 1
        }
        if (h == "random-static") {
            h = Math.round(Math.random() * v.length - 1);
            if (h > v.length - 1)
                h = v.length - 1;
            h = v[h]
        }
        if (h == "random-premium") {
            h = Math.round(Math.random() * m.length - 1);
            if (h > m.length - 1)
                h = m.length - 1;
            h = m[h]
        }
        var S = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
        if (r.isJoomla == true && window.MooTools != t && S.indexOf(h) != -1) {
            var x = Math.round(Math.random() * (m.length - 2)) + 1;
            if (x > m.length - 1)
                x = m.length - 1;
            if (x == 0)
                x = 1;
            h = m[x]
        }
        T();
        if (f(8) && a > 15 && a < 28) {
            h = Math.round(Math.random() * v.length - 1);
            if (h > v.length - 1)
                h = v.length - 1;
            h = v[h];
            y = 0;
            T()
        }
        var N = -1;
        if (r.leftarrowpressed == 1 || r.act > r.next)
            N = 1;
        r.leftarrowpressed = 0;
        if (a > 26)
            a = 26;
        if (a < 0)
            a = 0;
        var C = 300;
        if (i.data("masterspeed") != t && i.data("masterspeed") > 99 && i.data("masterspeed") < 4001)
            C = i.data("masterspeed");
        b = d[g];
        n.parent().find(".bullet").each(function() {
        });
        var k = new punchgs.TimelineLite({
            onComplete: function() {
                M(n, r, u, o, i, s, k)
            }
        });
        k.add(punchgs.TweenLite.set(u.find(".defaultimg"), {
            opacity: 0
        }));
        k.pause();
        if (i.data("slotamount") == t || i.data("slotamount") < 1) {
            r.slots = Math.round(Math.random() * 12 + 4);
            if (h == "boxslide")
                r.slots = Math.round(Math.random() * 6 + 3);
            else if (h == "flyin")
                r.slots = Math.round(Math.random() * 4 + 1)
        } else {
            r.slots = i.data("slotamount")
        }
        if (i.data("rotate") == t)
            r.rotate = 0;
        else if (i.data("rotate") == 999)
            r.rotate = Math.round(Math.random() * 360);
        else
            r.rotate = i.data("rotate");
        if (!e.support.transition || r.ie || r.ie9)
            r.rotate = 0;
        if (r.firststart == 1)
            r.firststart = 0;
        C = C + b[4];
        if ((a == 4 || a == 5 || a == 6) && r.slots < 3)
            r.slots = 3;
        if (b[3] != 0)
            r.slots = Math.min(r.slots, b[3]);
        if (a == 9)
            r.slots = r.width / 20;
        if (a == 10)
            r.slots = r.height / 20;
        if (b[5] == "box") {
            if (b[7] != null)
                E(o, r, b[7]);
            if (b[6] != null)
                E(u, r, b[6])
        } else if (b[5] == "vertical" || b[5] == "horizontal") {
            if (b[7] != null)
                w(o, r, b[7], b[5]);
            if (b[6] != null)
                w(u, r, b[6], b[5])
        }
        if (a == 0) {
            var L = Math.ceil(r.height / r.sloth);
            var A = 0;
            u.find(".slotslide").each(function(t) {
            })
        }
        if (a == 1) {
            var O, _ = 0;
            u.find(".slotslide").each(function(t) {
            })
        }
        if (a == 2) {
            var D = new punchgs.TimelineLite;
            o.find(".slotslide").each(function() {
            });
            u.find(".slotslide").each(function() {
            })
        }
        if (a == 3) {
            var D = new punchgs.TimelineLite;
            o.find(".slotslide").each(function() {
            });
            u.find(".slotslide").each(function() {
            })
        }
        if (a == 4 || a == 5) {
            setTimeout(function() {
            }, 100);
            var P = C / 1e3
              , H = P
              , D = new punchgs.TimelineLite;
            o.find(".slotslide").each(function(t) {
            });
            u.find(".slotslide").each(function(t) {
            })
        }
        if (a == 6) {
            if (r.slots < 2)
                r.slots = 2;
            if (r.slots % 2)
                r.slots = r.slots + 1;
            var D = new punchgs.TimelineLite;
            setTimeout(function() {
            }, 100);
            o.find(".slotslide").each(function(t) {
            });
            u.find(".slotslide").each(function(t) {
            })
        }
        if (a == 7) {
            C = C * 2;
            var D = new punchgs.TimelineLite;
            setTimeout(function() {
            }, 100);
            o.find(".slotslide").each(function() {
            });
            u.find(".slotslide").each(function(t) {
            })
        }
        if (a == 8) {
            C = C * 3;
            var D = new punchgs.TimelineLite;
            o.find(".slotslide").each(function() {
            });
            u.find(".slotslide").each(function(t) {
            })
        }
        if (a == 9 || a == 10) {
            var B = 0;
            u.find(".slotslide").each(function(t) {
            })
        }
        if (a == 11 || a == 26) {
            var B = 0;
            if (a == 26)
                C = 0;
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                k.add(punchgs.TweenLite.from(n, C / 1e3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: punchgs.Power2.easeInOut
                }), 0)
            })
        }
        if (a == 12 || a == 13 || a == 14 || a == 15) {
            C = 1e3;
            setTimeout(function() {
            }, 100);
            var j = r.width;
            var F = r.height;
            var q = u.find(".slotslide");
            if (r.fullWidth == "on" || r.fullScreen == "on") {
                j = q.width();
                F = q.height()
            }
            var R = 0;
            var U = 0;
            if (a == 12)
                R = j;
            else if (a == 15)
                R = 0 - j;
            else if (a == 13)
                U = F;
            else if (a == 14)
                U = 0 - F;
            var z = 1;
            var W = 1;
            var X = 1;
            var V = punchgs.Power2.easeInOut;
            var $ = punchgs.Power2.easeInOut;
            var J = C / 1e3;
            var K = J;
            if (p == 1)
                z = 0;
            if (p == 2)
                z = 0;
            if (p == 3) {
                V = punchgs.Power2.easeInOut;
                $ = punchgs.Power1.easeInOut;
                J = C / 1200
            }
            if (p == 4 || p == 5)
                W = .6;
            if (p == 6)
                W = 1.4;
            if (p == 5 || p == 6) {
                X = 1.4;
                z = 0;
                j = 0;
                F = 0;
                R = 0;
                U = 0
            }
            if (p == 6)
                X = .6;
            var Q = 0;
            k.add(punchgs.TweenLite.from(q, J, {
                left: R,
                top: U,
                scale: X,
                opacity: z,
                rotation: r.rotate,
                ease: $,
                force3D: "auto"
            }), 0);
            var G = o.find(".slotslide");
            if (p == 4 || p == 5) {
                j = 0;
                F = 0
            }
            if (p != 1) {
                if (a == 12)
                    k.add(punchgs.TweenLite.to(G, K, {
                        left: 0 - j + "px",
                        force3D: "auto",
                        scale: W,
                        opacity: z,
                        rotation: r.rotate,
                        ease: V
                    }), 0);
                else if (a == 15)
                    k.add(punchgs.TweenLite.to(G, K, {
                        left: j + "px",
                        force3D: "auto",
                        scale: W,
                        opacity: z,
                        rotation: r.rotate,
                        ease: V
                    }), 0);
                else if (a == 13)
                    k.add(punchgs.TweenLite.to(G, K, {
                        top: 0 - F + "px",
                        force3D: "auto",
                        scale: W,
                        opacity: z,
                        rotation: r.rotate,
                        ease: V
                    }), 0);
                else if (a == 14)
                    k.add(punchgs.TweenLite.to(G, K, {
                        top: F + "px",
                        force3D: "auto",
                        scale: W,
                        opacity: z,
                        rotation: r.rotate,
                        ease: V
                    }), 0)
            }
        }
        if (a == 16) {
            var D = new punchgs.TimelineLite;
            k.add(punchgs.TweenLite.set(s, {
                position: "absolute",
                "z-index": 20
            }), 0);
            k.add(punchgs.TweenLite.set(i, {
                position: "absolute",
                "z-index": 15
            }), 0);
            s.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>');
            s.find(".tp-half-one").clone(true).appendTo(s).addClass("tp-half-two");
            s.find(".tp-half-two").removeClass("tp-half-one");
            var j = r.width;
            var F = r.height;
            if (r.autoHeight == "on")
                F = n.height();
            s.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + j + "px;height:" + F + 'px;"></div>');
            s.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + j + "px;height:" + F + 'px;"></div>');
            s.find(".tp-half-two .defaultimg").css({
                position: "absolute",
                top: "-50%"
            });
            s.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>');
            k.add(punchgs.TweenLite.set(s.find(".tp-half-two"), {
                width: j,
                height: F,
                overflow: "hidden",
                zIndex: 15,
                position: "absolute",
                top: F / 2,
                left: "0px",
                transformPerspective: 600,
                transformOrigin: "center bottom"
            }), 0);
            k.add(punchgs.TweenLite.set(s.find(".tp-half-one"), {
                width: j,
                height: F / 2,
                overflow: "visible",
                zIndex: 10,
                position: "absolute",
                top: "0px",
                left: "0px",
                transformPerspective: 600,
                transformOrigin: "center top"
            }), 0);
            var Z = s.find(".defaultimg");
            var et = Math.round(Math.random() * 20 - 10)
              , tt = Math.round(Math.random() * 20 - 10)
              , nt = Math.round(Math.random() * 20 - 10)
              , it = Math.random() * .4 - .2
              , st = Math.random() * .4 - .2
              , ot = Math.random() * 1 + 1
              , ut = Math.random() * 1 + 1
              , at = Math.random() * .3 + .3;
            k.add(punchgs.TweenLite.set(s.find(".tp-half-one"), {
                overflow: "hidden"
            }), 0);
            k.add(punchgs.TweenLite.fromTo(s.find(".tp-half-one"), C / 800, {
                width: j,
                height: F / 2,
                position: "absolute",
                top: "0px",
                left: "0px",
                force3D: "auto",
                transformOrigin: "center top"
            }, {
                scale: ot,
                rotation: et,
                y: 0 - F - F / 4,
                autoAlpha: 0,
                ease: punchgs.Power2.easeInOut
            }), 0);
            k.add(punchgs.TweenLite.fromTo(s.find(".tp-half-two"), C / 800, {
                width: j,
                height: F,
                overflow: "hidden",
                position: "absolute",
                top: F / 2,
                left: "0px",
                force3D: "auto",
                transformOrigin: "center bottom"
            }, {
                scale: ut,
                rotation: tt,
                y: F + F / 4,
                ease: punchgs.Power2.easeInOut,
                autoAlpha: 0,
                onComplete: function() {
            }), 0);
            D.add(punchgs.TweenLite.set(u.find(".defaultimg"), {
                autoAlpha: 1
            }), 0);
            if (s.html() != null)
                k.add(punchgs.TweenLite.fromTo(i, (C - 200) / 1e3, {
                    scale: at,
                    x: r.width / 4 * it,
                    y: F / 4 * st,
                    rotation: nt,
                    force3D: "auto",
                    transformOrigin: "center center",
                    ease: punchgs.Power2.easeOut
                }, {
                    autoAlpha: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotation: 0
                }), 0);
            k.add(D, 0)
        }
        if (a == 17) {
            u.find(".slotslide").each(function(t) {
            })
        }
        if (a == 18) {
            u.find(".slotslide").each(function(t) {
            })
        }
        if (a == 19 || a == 22) {
            var D = new punchgs.TimelineLite;
            k.add(punchgs.TweenLite.set(s, {
                zIndex: 20
            }), 0);
            k.add(punchgs.TweenLite.set(i, {
                zIndex: 20
            }), 0);
            setTimeout(function() {
            }, 100);
            var ft = i.css("z-index")
              , lt = s.css("z-index")
              , ct = 90
              , z = 1;
            if (N == 1)
                ct = -90;
            if (a == 19) {
                var ht = "center center -" + r.height / 2;
                z = 0
            } else {
                var ht = "center center " + r.height / 2
            }
            punchgs.TweenLite.set(n, {
                transformStyle: "flat",
                backfaceVisibility: "hidden",
                transformPerspective: 600
            });
            u.find(".slotslide").each(function(t) {
            });
            o.find(".slotslide").each(function(t) {
            })
        }
        if (a == 20) {
            setTimeout(function() {
            }, 100);
            var ft = i.css("z-index");
            var lt = s.css("z-index");
            if (N == 1) {
                var pt = -r.width;
                var ct = 70;
                var ht = "left center -" + r.height / 2
            } else {
                var pt = r.width;
                var ct = -70;
                var ht = "right center -" + r.height / 2
            }
            u.find(".slotslide").each(function(t) {
            });
            o.find(".slotslide").each(function(t) {
            })
        }
        if (a == 21 || a == 25) {
            setTimeout(function() {
            }, 100);
            var ft = i.css("z-index");
            var lt = s.css("z-index");
            if (N == 1) {
                var pt = -r.width;
                var ct = 90;
                if (a == 25) {
                    var ht = "center top 0";
                    rot2 = -ct;
                    ct = r.rotate
                } else {
                    var ht = "left center 0";
                    rot2 = r.rotate
                }
            } else {
                var pt = r.width;
                var ct = -90;
                if (a == 25) {
                    var ht = "center bottom 0";
                    rot2 = -ct;
                    ct = r.rotate
                } else {
                    var ht = "right center 0";
                    rot2 = r.rotate
                }
            }
            u.find(".slotslide").each(function(t) {
            });
            if (N != 1) {
                var pt = -r.width;
                var ct = 90;
                if (a == 25) {
                    var ht = "center top 0";
                    rot2 = -ct;
                    ct = r.rotate
                } else {
                    var ht = "left center 0";
                    rot2 = r.rotate
                }
            } else {
                var pt = r.width;
                var ct = -90;
                if (a == 25) {
                    var ht = "center bottom 0";
                    rot2 = -ct;
                    ct = r.rotate
                } else {
                    var ht = "right center 0";
                    rot2 = r.rotate
                }
            }
            o.find(".slotslide").each(function(t) {
            })
        }
        if (a == 23 || a == 24) {
            setTimeout(function() {
            }, 100);
            var ft = i.css("z-index");
            var lt = s.css("z-index");
            var ct = -90;
            if (N == 1)
                ct = 90;
            var z = 1;
            if (a == 23) {
                var ht = "center center -" + r.width / 2;
                z = 0
            } else {
                var ht = "center center " + r.width / 2
            }
            var dt = 0;
            punchgs.TweenLite.set(n, {
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                perspective: 2500
            });
            u.find(".slotslide").each(function(t) {
            });
            ct = 90;
            if (N == 1)
                ct = -90;
            o.find(".slotslide").each(function(t) {
            })
        }
        k.pause();
        I(i, r, null, k);
        punchgs.TweenLite.to(i, .001, {
            autoAlpha: 1
        });
        var vt = {};
        vt.slideIndex = r.next + 1;
        vt.slide = i;
        n.trigger("revolution.slide.onchange", vt);
        setTimeout(function() {
            n.trigger("revolution.slide.onafterswap")
        }, C);
        n.trigger("revolution.slide.onvideostop")
    };
    var M = function(e, t, n, r, i, s, o) {
        punchgs.TweenLite.to(n.find(".defaultimg"), .001, {
            autoAlpha: 1,
            onComplete: function() {
                x(e, t, i)
            }
        });
        if (i.index() != s.index()) {
            punchgs.TweenLite.to(s, .2, {
                autoAlpha: 0,
                onComplete: function() {
                    x(e, t, s)
                }
            })
        }
        t.act = t.next;
        if (t.navigationType == "thumb")
            st(e);
        if (n.data("kenburns") == "on") {
            Y(e, t)
        }
        e.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible");
        i.addClass("current-sr-slide-visible");
        if (t.parallax == "scroll" || t.parallax == "scroll+mouse" || t.parallax == "mouse+scroll") {
            rt(e, t)
        }
        o.clear()
    };
    var _ = function(t) {
    };
    var D = function(e, t, n) {
    };
    var P = function(t, n) {
    };
    var B = function() {
        var e = new Object;
        e.x = 0;
        e.y = 0;
        e.rotationX = 0;
        e.rotationY = 0;
        e.rotationZ = 0;
        e.scale = 1;
        e.scaleX = 1;
        e.scaleY = 1;
        e.skewX = 0;
        e.skewY = 0;
        e.opacity = 0;
        e.transformOrigin = "center, center";
        e.transformPerspective = 400;
        e.rotation = 0;
        return e
    };
    var j = function(t, n) {
    };
    var I = function(n, r, i, s) {
        if (n.data("ctl") == t) {
            n.data("ctl", new punchgs.TimelineLite)
        }
        var o = n.data("ctl")
          , u = 0
          , a = 0
          , f = n.find(".tp-caption")
          , l = r.container.find(".tp-static-layers").find(".tp-caption");
        o.pause();
        e.each(l, function(e, t) {
        });
        f.each(function(n) {
            var s = i
              , o = -1
              , f = e(this);
            if (f.hasClass("tp-static-layer")) {
                var l = f.data("startslide")
                  , c = f.data("endslide");
                if (l == -1 || l == "-1")
                    f.data("startslide", 0);
                if (c == -1 || c == "-1")
                    f.data("endslide", r.slideamount);
                if (l == 0 && c == r.slideamount - 1)
                    f.data("endslide", r.slideamount + 1);
                l = f.data("startslide"),
                c = f.data("endslide");
                if (!f.hasClass("tp-is-shown")) {
                    if (l <= r.next && c >= r.next || l == r.next || c == r.next) {
                        f.addClass("tp-is-shown");
                        o = 1
                    } else {
                        o = 0
                    }
                } else {
                    if (c == r.next || l > r.next || c < r.next) {
                        o = 2
                    } else {
                        o = 0
                    }
                }
            }
            u = r.width / 2 - r.startwidth * r.bw / 2;
            var h = r.bw;
            var p = r.bh;
            if (r.fullScreen == "on")
                a = r.height / 2 - r.startheight * r.bh / 2;
            if (r.autoHeight == "on" || r.minHeight != t && r.minHeight > 0)
                a = r.container.height() / 2 - r.startheight * r.bh / 2;
            if (a < 0)
                a = 0;
            var d = 0;
            if (r.width < r.hideCaptionAtLimit && f.data("captionhidden") == "on") {
                f.addClass("tp-hidden-caption");
                d = 1
            } else {
                if (r.width < r.hideAllCaptionAtLimit || r.width < r.hideAllCaptionAtLilmit) {
                    f.addClass("tp-hidden-caption");
                    d = 1
                } else {
                    f.removeClass("tp-hidden-caption")
                }
            }
            if (d == 0) {
                if (f.data("linktoslide") != t && !f.hasClass("hasclicklistener")) {
                    f.addClass("hasclicklistener");
                    f.css({
                        cursor: "pointer"
                    });
                    if (f.data("linktoslide") != "no") {
                        f.click(function() {
                        })
                    }
                }
                if (u < 0)
                    u = 0;
                if (f.hasClass("tp-videolayer") || f.find("iframe").length > 0 || f.find("video").length > 0) {
                    var v = "iframe" + Math.round(Math.random() * 1e5 + 1)
                      , m = f.data("videowidth")
                      , g = f.data("videoheight")
                      , y = f.data("videoattributes")
                      , b = f.data("ytid")
                      , w = f.data("vimeoid")
                      , E = f.data("videpreload")
                      , S = f.data("videomp4")
                      , x = f.data("videowebm")
                      , T = f.data("videocontrols")
                      , N = "http"
                      , C = f.data("videoloop") == "loop" ? "loop" : f.data("videoloop") == "loopandnoslidestop" ? "loop" : "";
                    if (f.data("thumbimage") != t && f.data("videoposter") == t)
                        f.data("videoposter", f.data("thumbimage"));
                    if (b != t && String(b).length > 1 && f.find("iframe").length == 0) {
                        N = "https";
                        if (T == "none") {
                            y = y.replace("controls=1", "controls=0");
                            if (y.toLowerCase().indexOf("controls") == -1)
                                y = y + "&controls=0"
                        }
                        f.append('<iframe style="visible:hidden" src="' + N + "://www.youtube.com/embed/" + b + "?" + y + '" width="' + m + '" height="' + g + '" style="width:' + m + "px;height:" + g + 'px"></iframe>')
                    }
                    if (w != t && String(w).length > 1 && f.find("iframe").length == 0) {
                        f.append('<iframe style="visible:hidden" src="' + N + "://player.vimeo.com/video/" + w + "?" + y + '" width="' + m + '" height="' + g + '" style="width:' + m + "px;height:" + g + 'px"></iframe>')
                    }
                    if ((S != t || x != t) && f.find("video").length == 0) {
                        if (T != "controls")
                            T = "";
                        f.append('<video style="visible:hidden" class="" ' + C + " " + T + ' preload="' + E + '" width="' + m + '" height="' + g + '"' + 'poster="' + f.data("videoposter") + '">' + '<source src="' + S + '" type="video/mp4"" />' + '<source src="' + x + '" type="video/webm"" />' + "</video>")
                    }
                    var k = false;
                    if (f.data("autoplayonlyfirsttime") == true || f.data("autoplayonlyfirsttime") == "true" || f.data("autoplay") == true) {
                        f.data("autoplay", true);
                        k = true
                    }
                    f.find("iframe").each(function() {
                        })
                    }
                    if (f.data("autoplay") == true) {
                        setTimeout(function() {
                        }, 200);
                        if (f.data("videoloop") != "loopandnoslidestop") {
                            r.videoplaying = true;
                            r.container.trigger("stoptimer")
                        }
                        if (f.data("autoplayonlyfirsttime") == true || f.data("autoplayonlyfirsttime") == "true") {
                            f.data("autoplay", false);
                            f.data("autoplayonlyfirsttime", false)
                        }
                    }
                }
                var L = 0;
                var A = 0;
                if (f.find("img").length > 0) {
                    var O = f.find("img");
                    if (O.width() == 0)
                        O.css({
                            width: "auto"
                        });
                    if (O.height() == 0)
                        O.css({
                            height: "auto"
                        });
                    if (O.data("ww") == t && O.width() > 0)
                        O.data("ww", O.width());
                    if (O.data("hh") == t && O.height() > 0)
                        O.data("hh", O.height());
                    var M = O.data("ww");
                    var D = O.data("hh");
                    if (M == t)
                        M = 0;
                    if (D == t)
                        D = 0;
                    O.width(M * r.bw);
                    O.height(D * r.bh);
                    L = O.width();
                    A = O.height()
                } else {
                    if (f.find("iframe").length > 0 || f.find("video").length > 0) {
                        var I = false;
                        var O = f.find("iframe");
                        if (O.length == 0) {
                            O = f.find("video");
                            I = true
                        }
                        O.css({
                            display: "block"
                        });
                        if (f.data("ww") == t)
                            f.data("ww", O.width());
                        if (f.data("hh") == t)
                            f.data("hh", O.height());
                        var M = f.data("ww");
                        var D = f.data("hh");
                        var R = f;
                        if (R.data("fsize") == t)
                            R.data("fsize", parseInt(R.css("font-size"), 0) || 0);
                        if (R.data("pt") == t)
                            R.data("pt", parseInt(R.css("paddingTop"), 0) || 0);
                        if (R.data("pb") == t)
                            R.data("pb", parseInt(R.css("paddingBottom"), 0) || 0);
                        if (R.data("pl") == t)
                            R.data("pl", parseInt(R.css("paddingLeft"), 0) || 0);
                        if (R.data("pr") == t)
                            R.data("pr", parseInt(R.css("paddingRight"), 0) || 0);
                        if (R.data("mt") == t)
                            R.data("mt", parseInt(R.css("marginTop"), 0) || 0);
                        if (R.data("mb") == t)
                            R.data("mb", parseInt(R.css("marginBottom"), 0) || 0);
                        if (R.data("ml") == t)
                            R.data("ml", parseInt(R.css("marginLeft"), 0) || 0);
                        if (R.data("mr") == t)
                            R.data("mr", parseInt(R.css("marginRight"), 0) || 0);
                        if (R.data("bt") == t)
                            R.data("bt", parseInt(R.css("borderTop"), 0) || 0);
                        if (R.data("bb") == t)
                            R.data("bb", parseInt(R.css("borderBottom"), 0) || 0);
                        if (R.data("bl") == t)
                            R.data("bl", parseInt(R.css("borderLeft"), 0) || 0);
                        if (R.data("br") == t)
                            R.data("br", parseInt(R.css("borderRight"), 0) || 0);
                        if (R.data("lh") == t)
                            R.data("lh", parseInt(R.css("lineHeight"), 0) || 0);
                        var X = r.width;
                        var J = r.height;
                        if (X > r.startwidth)
                            X = r.startwidth;
                        if (J > r.startheight)
                            J = r.startheight;
                        if (!f.hasClass("fullscreenvideo"))
                            f.css({
                                "font-size": R.data("fsize") * r.bw + "px",
                                "padding-top": R.data("pt") * r.bh + "px",
                                "padding-bottom": R.data("pb") * r.bh + "px",
                                "padding-left": R.data("pl") * r.bw + "px",
                                "padding-right": R.data("pr") * r.bw + "px",
                                "margin-top": R.data("mt") * r.bh + "px",
                                "margin-bottom": R.data("mb") * r.bh + "px",
                                "margin-left": R.data("ml") * r.bw + "px",
                                "margin-right": R.data("mr") * r.bw + "px",
                                "border-top": R.data("bt") * r.bh + "px",
                                "border-bottom": R.data("bb") * r.bh + "px",
                                "border-left": R.data("bl") * r.bw + "px",
                                "border-right": R.data("br") * r.bw + "px",
                                "line-height": R.data("lh") * r.bh + "px",
                                height: D * r.bh + "px"
                            });
                        else {
                            u = 0;
                            a = 0;
                            f.data("x", 0);
                            f.data("y", 0);
                            var K = r.height;
                            if (r.autoHeight == "on")
                                K = r.container.height();
                            f.css({
                                width: r.width,
                                height: K
                            })
                        }
                        if (I == false) {
                            O.width(M * r.bw);
                            O.height(D * r.bh)
                        } else if (f.data("forcecover") != 1 && !f.hasClass("fullscreenvideo")) {
                            O.width(M * r.bw);
                            O.height(D * r.bh)
                        }
                        L = O.width();
                        A = O.height()
                    } else {
                        f.find(".tp-resizeme, .tp-resizeme *").each(function() {
                            U(e(this), r)
                        });
                        if (f.hasClass("tp-resizeme")) {
                            f.find("*").each(function() {
                                U(e(this), r)
                            })
                        }
                        U(f, r);
                        A = f.outerHeight(true);
                        L = f.outerWidth(true);
                        var G = f.outerHeight();
                        var Y = f.css("backgroundColor");
                        f.find(".frontcorner").css({
                            borderWidth: G + "px",
                            left: 0 - G + "px",
                            borderRight: "0px solid transparent",
                            borderTopColor: Y
                        });
                        f.find(".frontcornertop").css({
                            borderWidth: G + "px",
                            left: 0 - G + "px",
                            borderRight: "0px solid transparent",
                            borderBottomColor: Y
                        });
                        f.find(".backcorner").css({
                            borderWidth: G + "px",
                            right: 0 - G + "px",
                            borderLeft: "0px solid transparent",
                            borderBottomColor: Y
                        });
                        f.find(".backcornertop").css({
                            borderWidth: G + "px",
                            right: 0 - G + "px",
                            borderLeft: "0px solid transparent",
                            borderTopColor: Y
                        })
                    }
                }
                if (r.fullScreenAlignForce == "on") {
                    u = 0;
                    a = 0
                }
                if (f.data("voffset") == t)
                    f.data("voffset", 0);
                if (f.data("hoffset") == t)
                    f.data("hoffset", 0);
                var Z = f.data("voffset") * h;
                var et = f.data("hoffset") * h;
                var tt = r.startwidth * h;
                var nt = r.startheight * h;
                if (r.fullScreenAlignForce == "on") {
                    tt = r.container.width();
                    nt = r.container.height()
                }
                if (f.data("x") == "center" || f.data("xcenter") == "center") {
                    f.data("xcenter", "center");
                    f.data("x", tt / 2 - f.outerWidth(true) / 2 + et)
                }
                if (f.data("x") == "left" || f.data("xleft") == "left") {
                    f.data("xleft", "left");
                    f.data("x", 0 / h + et)
                }
                if (f.data("x") == "right" || f.data("xright") == "right") {
                    f.data("xright", "right");
                    f.data("x", (tt - f.outerWidth(true) + et) / h)
                }
                if (f.data("y") == "center" || f.data("ycenter") == "center") {
                    f.data("ycenter", "center");
                    f.data("y", nt / 2 - f.outerHeight(true) / 2 + Z)
                }
                if (f.data("y") == "top" || f.data("ytop") == "top") {
                    f.data("ytop", "top");
                    f.data("y", 0 / r.bh + Z)
                }
                if (f.data("y") == "bottom" || f.data("ybottom") == "bottom") {
                    f.data("ybottom", "bottom");
                    f.data("y", (nt - f.outerHeight(true) + Z) / h)
                }
                if (f.data("start") == t)
                    f.data("start", 1e3);
                var rt = f.data("easing");
                if (rt == t)
                    rt = "punchgs.Power1.easeOut";
                var it = f.data("start") / 1e3;
                var st = f.data("speed") / 1e3;
                if (f.data("x") == "center" || f.data("xcenter") == "center")
                    var ot = f.data("x") + u;
                else {
                    var ot = h * f.data("x") + u
                }
                if (f.data("y") == "center" || f.data("ycenter") == "center")
                    var ut = f.data("y") + a;
                else {
                    var ut = r.bh * f.data("y") + a
                }
                punchgs.TweenLite.set(f, {
                    top: ut,
                    left: ot,
                    overwrite: "auto"
                });
                if (o == 0)
                    s = true;
                if (f.data("timeline") != t && !s) {
                    if (o != 2)
                        f.data("timeline").gotoAndPlay(0);
                    s = true
                }
                if (!s) {
                    if (f.data("timeline") != t) {}
                    function at() {}
                    function ft() {}
                    var lt = new punchgs.TimelineLite({
                        smoothChildTiming: true,
                        onStart: ft
                    });
                    lt.pause();
                    if (r.fullScreenAlignForce == "on") {}
                    var ct = f;
                    if (f.data("mySplitText") != t)
                        f.data("mySplitText").revert();
                    if (f.data("splitin") == "chars" || f.data("splitin") == "words" || f.data("splitin") == "lines" || f.data("splitout") == "chars" || f.data("splitout") == "words" || f.data("splitout") == "lines") {
                        if (f.find("a").length > 0)
                            f.data("mySplitText", new punchgs.SplitText(f.find("a"),{
                                type: "lines,words,chars",
                                charsClass: "tp-splitted",
                                wordsClass: "tp-splitted",
                                linesClass: "tp-splitted"
                            }));
                        else if (f.find(".tp-layer-inner-rotation").length > 0)
                            f.data("mySplitText", new punchgs.SplitText(f.find(".tp-layer-inner-rotation"),{
                                type: "lines,words,chars",
                                charsClass: "tp-splitted",
                                wordsClass: "tp-splitted",
                                linesClass: "tp-splitted"
                            }));
                        else
                            f.data("mySplitText", new punchgs.SplitText(f,{
                                type: "lines,words,chars",
                                charsClass: "tp-splitted",
                                wordsClass: "tp-splitted",
                                linesClass: "tp-splitted"
                            }));
                        f.addClass("splitted")
                    }
                    if (f.data("splitin") == "chars")
                        ct = f.data("mySplitText").chars;
                    if (f.data("splitin") == "words")
                        ct = f.data("mySplitText").words;
                    if (f.data("splitin") == "lines")
                        ct = f.data("mySplitText").lines;
                    var ht = B();
                    var pt = B();
                    if (f.data("repeat") != t)
                        repeatV = f.data("repeat");
                    if (f.data("yoyo") != t)
                        yoyoV = f.data("yoyo");
                    if (f.data("repeatdelay") != t)
                        repeatdelayV = f.data("repeatdelay");
                    if (f.hasClass("customin"))
                        ht = j(ht, f.data("customin"));
                    else if (f.hasClass("randomrotate")) {
                        ht.scale = Math.random() * 3 + 1;
                        ht.rotation = Math.round(Math.random() * 200 - 100);
                        ht.x = Math.round(Math.random() * 200 - 100);
                        ht.y = Math.round(Math.random() * 200 - 100)
                    } else if (f.hasClass("lfr") || f.hasClass("skewfromright"))
                        ht.x = 15 + r.width;
                    else if (f.hasClass("lfl") || f.hasClass("skewfromleft"))
                        ht.x = -15 - L;
                    else if (f.hasClass("sfl") || f.hasClass("skewfromleftshort"))
                        ht.x = -50;
                    else if (f.hasClass("sfr") || f.hasClass("skewfromrightshort"))
                        ht.x = 50;
                    else if (f.hasClass("lft"))
                        ht.y = -25 - A;
                    else if (f.hasClass("lfb"))
                        ht.y = 25 + r.height;
                    else if (f.hasClass("sft"))
                        ht.y = -50;
                    else if (f.hasClass("sfb"))
                        ht.y = 50;
                    if (f.hasClass("skewfromright") || f.hasClass("skewfromrightshort"))
                        ht.skewX = -85;
                    else if (f.hasClass("skewfromleft") || f.hasClass("skewfromleftshort"))
                        ht.skewX = 85;
                    if (f.hasClass("fade") || f.hasClass("sft") || f.hasClass("sfl") || f.hasClass("sfb") || f.hasClass("skewfromleftshort") || f.hasClass("sfr") || f.hasClass("skewfromrightshort"))
                        ht.opacity = 0;
                    if (q().toLowerCase() == "safari") {}
                    var dt = f.data("elementdelay") == t ? 0 : f.data("elementdelay");
                    pt.ease = ht.ease = f.data("easing") == t ? punchgs.Power1.easeInOut : f.data("easing");
                    ht.data = new Object;
                    ht.data.oldx = ht.x;
                    ht.data.oldy = ht.y;
                    pt.data = new Object;
                    pt.data.oldx = pt.x;
                    pt.data.oldy = pt.y;
                    ht.x = ht.x * h;
                    ht.y = ht.y * h;
                    var vt = new punchgs.TimelineLite;
                    if (o != 2) {
                        if (f.hasClass("customin")) {
                            if (ct != f)
                                lt.add(punchgs.TweenLite.set(f, {
                                    force3D: "auto",
                                    opacity: 1,
                                    scaleX: 1,
                                    scaleY: 1,
                                    rotationX: 0,
                                    rotationY: 0,
                                    rotationZ: 0,
                                    skewX: 0,
                                    skewY: 0,
                                    z: 0,
                                    x: 0,
                                    y: 0,
                                    visibility: "visible",
                                    opacity: 1,
                                    delay: 0,
                                    overwrite: "all"
                                }));
                            ht.visibility = "hidden";
                            pt.visibility = "visible";
                            pt.overwrite = "all";
                            pt.opacity = 1;
                            pt.onComplete = at();
                            pt.delay = it;
                            pt.force3D = "auto";
                            lt.add(vt.staggerFromTo(ct, st, ht, pt, dt), "frame0")
                        } else {
                            ht.visibility = "visible";
                            ht.transformPerspective = 600;
                            if (ct != f)
                                lt.add(punchgs.TweenLite.set(f, {
                                    force3D: "auto",
                                    opacity: 1,
                                    scaleX: 1,
                                    scaleY: 1,
                                    rotationX: 0,
                                    rotationY: 0,
                                    rotationZ: 0,
                                    skewX: 0,
                                    skewY: 0,
                                    z: 0,
                                    x: 0,
                                    y: 0,
                                    visibility: "visible",
                                    opacity: 1,
                                    delay: 0,
                                    overwrite: "all"
                                }));
                            pt.visibility = "visible";
                            pt.delay = it;
                            pt.onComplete = at();
                            pt.opacity = 1;
                            pt.force3D = "auto";
                            if (f.hasClass("randomrotate") && ct != f) {
                                for (var n = 0; n < ct.length; n++) {
                                    var mt = new Object;
                                    var gt = new Object;
                                    e.extend(mt, ht);
                                    e.extend(gt, pt);
                                    ht.scale = Math.random() * 3 + 1;
                                    ht.rotation = Math.round(Math.random() * 200 - 100);
                                    ht.x = Math.round(Math.random() * 200 - 100);
                                    ht.y = Math.round(Math.random() * 200 - 100);
                                    if (n != 0)
                                        gt.delay = it + n * dt;
                                    lt.append(punchgs.TweenLite.fromTo(ct[n], st, mt, gt), "frame0")
                                }
                            } else
                                lt.add(vt.staggerFromTo(ct, st, ht, pt, dt), "frame0")
                        }
                    }
                    f.data("timeline", lt);
                    var yt = new Array;
                    if (f.data("frames") != t) {
                        var bt = f.data("frames");
                        bt = bt.replace(/\s+/g, "");
                        bt = bt.replace("{", "");
                        var wt = bt.split("}");
                        e.each(wt, function(e, t) {
                        })
                    }
                    lt = f.data("timeline");
                    if (f.data("end") != t && (o == -1 || o == 2)) {
                        $(f, r, f.data("end") / 1e3, ht, "frame99", h)
                    } else {
                        if (o == -1 || o == 2)
                            $(f, r, 999999, ht, "frame99", h);
                        else
                            $(f, r, 200, ht, "frame99", h)
                    }
                    lt = f.data("timeline");
                    f.data("timeline", lt);
                    z(f, h);
                    lt.resume()
                }
            }
            if (s) {
                W(f);
                z(f, h);
                if (f.data("timeline") != t) {
                    var Et = f.data("timeline").getTweensOf();
                    e.each(Et, function(e, n) {
                    })
                }
            }
        });
        var c = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
        c.data("opt", r);
        if (s != t)
            setTimeout(function() {
                s.resume()
            }, 30)
    };
    var q = function() {
        var e = navigator.appName, t = navigator.userAgent, n;
        var r = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (r && (n = t.match(/version\/([\.\d]+)/i)) != null)
            r[2] = n[1];
        r = r ? [r[1], r[2]] : [e, navigator.appVersion, "-?"];
        return r[0]
    };
    var R = function() {
    };
    var U = function(e, n) {
        if (e.data("fsize") == t)
            e.data("fsize", parseInt(e.css("font-size"), 0) || 0);
        if (e.data("pt") == t)
            e.data("pt", parseInt(e.css("paddingTop"), 0) || 0);
        if (e.data("pb") == t)
            e.data("pb", parseInt(e.css("paddingBottom"), 0) || 0);
        if (e.data("pl") == t)
            e.data("pl", parseInt(e.css("paddingLeft"), 0) || 0);
        if (e.data("pr") == t)
            e.data("pr", parseInt(e.css("paddingRight"), 0) || 0);
        if (e.data("mt") == t)
            e.data("mt", parseInt(e.css("marginTop"), 0) || 0);
        if (e.data("mb") == t)
            e.data("mb", parseInt(e.css("marginBottom"), 0) || 0);
        if (e.data("ml") == t)
            e.data("ml", parseInt(e.css("marginLeft"), 0) || 0);
        if (e.data("mr") == t)
            e.data("mr", parseInt(e.css("marginRight"), 0) || 0);
        if (e.data("bt") == t)
            e.data("bt", parseInt(e.css("borderTopWidth"), 0) || 0);
        if (e.data("bb") == t)
            e.data("bb", parseInt(e.css("borderBottomWidth"), 0) || 0);
        if (e.data("bl") == t)
            e.data("bl", parseInt(e.css("borderLeftWidth"), 0) || 0);
        if (e.data("br") == t)
            e.data("br", parseInt(e.css("borderRightWidth"), 0) || 0);
        if (e.data("ls") == t)
            e.data("ls", parseInt(e.css("letterSpacing"), 0) || 0);
        if (e.data("lh") == t)
            e.data("lh", parseInt(e.css("lineHeight"), 0) || "auto");
        if (e.data("minwidth") == t)
            e.data("minwidth", parseInt(e.css("minWidth"), 0) || 0);
        if (e.data("minheight") == t)
            e.data("minheight", parseInt(e.css("minHeight"), 0) || 0);
        if (e.data("maxwidth") == t)
            e.data("maxwidth", parseInt(e.css("maxWidth"), 0) || "none");
        if (e.data("maxheight") == t)
            e.data("maxheight", parseInt(e.css("maxHeight"), 0) || "none");
        if (e.data("wii") == t)
            e.data("wii", parseInt(e.css("width"), 0) || 0);
        if (e.data("hii") == t)
            e.data("hii", parseInt(e.css("height"), 0) || 0);
        if (e.data("wan") == t)
            e.data("wan", e.css("-webkit-transition"));
        if (e.data("moan") == t)
            e.data("moan", e.css("-moz-animation-transition"));
        if (e.data("man") == t)
            e.data("man", e.css("-ms-animation-transition"));
        if (e.data("ani") == t)
            e.data("ani", e.css("transition"));
        if (!e.hasClass("tp-splitted")) {
            e.css("-webkit-transition", "none");
            e.css("-moz-transition", "none");
            e.css("-ms-transition", "none");
            e.css("transition", "none");
            punchgs.TweenLite.set(e, {
                fontSize: Math.round(e.data("fsize") * n.bw) + "px",
                letterSpacing: Math.floor(e.data("ls") * n.bw) + "px",
                paddingTop: Math.round(e.data("pt") * n.bh) + "px",
                paddingBottom: Math.round(e.data("pb") * n.bh) + "px",
                paddingLeft: Math.round(e.data("pl") * n.bw) + "px",
                paddingRight: Math.round(e.data("pr") * n.bw) + "px",
                marginTop: e.data("mt") * n.bh + "px",
                marginBottom: e.data("mb") * n.bh + "px",
                marginLeft: e.data("ml") * n.bw + "px",
                marginRight: e.data("mr") * n.bw + "px",
                borderTopWidth: Math.round(e.data("bt") * n.bh) + "px",
                borderBottomWidth: Math.round(e.data("bb") * n.bh) + "px",
                borderLeftWidth: Math.round(e.data("bl") * n.bw) + "px",
                borderRightWidth: Math.round(e.data("br") * n.bw) + "px",
                lineHeight: Math.round(e.data("lh") * n.bh) + "px",
                minWidth: e.data("minwidth") * n.bw + "px",
                minHeight: e.data("minheight") * n.bh + "px",
                overwrite: "auto"
            });
            setTimeout(function() {
                e.css("-webkit-transition", e.data("wan"));
                e.css("-moz-transition", e.data("moan"));
                e.css("-ms-transition", e.data("man"));
                e.css("transition", e.data("ani"))
            }, 30);
            if (e.data("maxheight") != "none")
                e.css({
                    maxHeight: e.data("maxheight") * n.bh + "px"
                });
            if (e.data("maxwidth") != "none")
                e.css({
                    maxWidth: e.data("maxwidth") * n.bw + "px"
                })
        }
    };
    var z = function(n, r) {
        n.find(".rs-pendulum").each(function() {
        });
        n.find(".rs-slideloop").each(function() {
            var n = e(this);
            if (n.data("timeline") == t) {
                n.data("timeline", new punchgs.TimelineLite);
                var i = n.data("xs") == t ? 0 : n.data("xs")
                  , s = n.data("ys") == t ? 0 : n.data("ys");
                xe = n.data("xe") == t ? 0 : n.data("xe"),
                ye = n.data("ye") == t ? 0 : n.data("ye"),
                speed = n.data("speed") == t ? 2 : n.data("speed"),
                easing = n.data("ease") == t ? punchgs.Power2.easeInOut : n.data("ease");
                i = i * r;
                s = s * r;
                xe = xe * r;
                ye = ye * r;
                n.data("timeline").append(new punchgs.TweenLite.fromTo(n,speed,{
                    force3D: "auto",
                    x: i,
                    y: s
                },{
                    x: xe,
                    y: ye,
                    ease: easing
                }));
                n.data("timeline").append(new punchgs.TweenLite.fromTo(n,speed,{
                    force3D: "auto",
                    x: xe,
                    y: ye
                },{
                    x: i,
                    y: s,
                    onComplete: function() {
                        n.data("timeline").restart()
                    }
                }))
            }
        });
        n.find(".rs-pulse").each(function() {
            var n = e(this);
        });
        n.find(".rs-wave").each(function() {
        })
    };
    var W = function(n) {
        n.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
            var n = e(this);
            if (n.data("timeline") != t) {
                n.data("timeline").pause();
                n.data("timeline", null)
            }
        })
    };
    var X = function(n, r) {
        var i = 0;
        var s = n.find(".tp-caption")
          , o = r.container.find(".tp-static-layers").find(".tp-caption");
        e.each(o, function(e, t) {
        });
        s.each(function(n) {
            var s = -1;
            var o = e(this);
            if (o.hasClass("tp-static-layer")) {
                if (o.data("startslide") == -1 || o.data("startslide") == "-1")
                    o.data("startslide", 0);
                if (o.data("endslide") == -1 || o.data("endslide") == "-1")
                    o.data("endslide", r.slideamount);
                if (o.hasClass("tp-is-shown")) {
                    if (o.data("startslide") > r.next || o.data("endslide") < r.next) {
                        s = 2;
                        o.removeClass("tp-is-shown")
                    } else {
                        s = 0
                    }
                } else {
                    s = 2
                }
            }
            if (s != 0) {
                W(o);
                if (o.find("iframe").length > 0) {
                    punchgs.TweenLite.to(o.find("iframe"), .2, {
                        autoAlpha: 0
                    });
                    if (Q())
                        o.find("iframe").remove();
                    try {
                        var u = o.find("iframe");
                        var a = u.attr("id");
                        var f = $f(a);
                        f.api("pause");
                        clearTimeout(o.data("timerplay"))
                    } catch (l) {}
                    try {
                        var c = o.data("player");
                        c.stopVideo();
                        clearTimeout(o.data("timerplay"))
                    } catch (l) {}
                }
                if (o.find("video").length > 0) {
                    try {
                        o.find("video").each(function(t) {
                        })
                    } catch (l) {}
                }
                try {
                    var h = o.data("timeline");
                    var p = h.getLabelTime("frame99");
                    var d = h.time();
                    if (p > d) {
                        var v = h.getTweensOf(o);
                        e.each(v, function(e, t) {
                            if (e != 0)
                                t.pause()
                        });
                        if (o.css("opacity") != 0) {
                            var m = o.data("endspeed") == t ? o.data("speed") : o.data("endspeed");
                            if (m > i)
                                i = m;
                            h.play("frame99")
                        } else
                            h.progress(1, false)
                    }
                } catch (l) {}
            }
        });
        return i
    };
    var V = function(e, n, r, i, s) {
    };
    var $ = function(e, n, r, i, s, o) {
        var u = e.data("timeline");
        var a = new punchgs.TimelineLite;
        var f = B();
        var l = e.data("endspeed") == t ? e.data("speed") : e.data("endspeed");
        f.ease = e.data("endeasing") == t ? punchgs.Power1.easeInOut : e.data("endeasing");
        l = l / 1e3;
        if (e.hasClass("ltr") || e.hasClass("ltl") || e.hasClass("str") || e.hasClass("stl") || e.hasClass("ltt") || e.hasClass("ltb") || e.hasClass("stt") || e.hasClass("stb") || e.hasClass("skewtoright") || e.hasClass("skewtorightshort") || e.hasClass("skewtoleft") || e.hasClass("skewtoleftshort") || e.hasClass("fadeout") || e.hasClass("randomrotateout")) {
            if (e.hasClass("skewtoright") || e.hasClass("skewtorightshort"))
                f.skewX = 35;
            else if (e.hasClass("skewtoleft") || e.hasClass("skewtoleftshort"))
                f.skewX = -35;
            if (e.hasClass("ltr") || e.hasClass("skewtoright"))
                f.x = n.width + 60;
            else if (e.hasClass("ltl") || e.hasClass("skewtoleft"))
                f.x = 0 - (n.width + 60);
            else if (e.hasClass("ltt"))
                f.y = 0 - (n.height + 60);
            else if (e.hasClass("ltb"))
                f.y = n.height + 60;
            else if (e.hasClass("str") || e.hasClass("skewtorightshort")) {
                f.x = 50;
                f.opacity = 0
            } else if (e.hasClass("stl") || e.hasClass("skewtoleftshort")) {
                f.x = -50;
                f.opacity = 0
            } else if (e.hasClass("stt")) {
                f.y = -50;
                f.opacity = 0
            } else if (e.hasClass("stb")) {
                f.y = 50;
                f.opacity = 0
            } else if (e.hasClass("randomrotateout")) {
                f.x = Math.random() * n.width;
                f.y = Math.random() * n.height;
                f.scale = Math.random() * 2 + .3;
                f.rotation = Math.random() * 360 - 180;
                f.opacity = 0
            } else if (e.hasClass("fadeout")) {
                f.opacity = 0
            }
            if (e.hasClass("skewtorightshort"))
                f.x = 270;
            else if (e.hasClass("skewtoleftshort"))
                f.x = -270;
            f.data = new Object;
            f.data.oldx = f.x;
            f.data.oldy = f.y;
            f.x = f.x * o;
            f.y = f.y * o;
            f.overwrite = "auto";
            var c = e;
            var c = e;
            if (e.data("splitout") == "chars")
                c = e.data("mySplitText").chars;
            else if (e.data("splitout") == "words")
                c = e.data("mySplitText").words;
            else if (e.data("splitout") == "lines")
                c = e.data("mySplitText").lines;
            var h = e.data("endelementdelay") == t ? 0 : e.data("endelementdelay");
            u.add(a.staggerTo(c, l, f, h), r)
        } else if (e.hasClass("customout")) {
            f = j(f, e.data("customout"));
            var c = e;
            if (e.data("splitout") == "chars")
                c = e.data("mySplitText").chars;
            else if (e.data("splitout") == "words")
                c = e.data("mySplitText").words;
            else if (e.data("splitout") == "lines")
                c = e.data("mySplitText").lines;
            var h = e.data("endelementdelay") == t ? 0 : e.data("endelementdelay");
            f.onStart = function() {
            ;
            f.data = new Object;
            f.data.oldx = f.x;
            f.data.oldy = f.y;
            f.x = f.x * o;
            f.y = f.y * o;
            u.add(a.staggerTo(c, l, f, h), r)
        } else {
            i.delay = 0;
            u.add(punchgs.TweenLite.to(e, l, i), r)
        }
        u.addLabel(s, r);
        e.data("timeline", u)
    };
    var J = function(t, n) {
    };
    var K = function(n, r) {
        r.cd = 0;
        r.loop = 0;
        if (r.stopAfterLoops != t && r.stopAfterLoops > -1)
            r.looptogo = r.stopAfterLoops;
        else
            r.looptogo = 9999999;
        if (r.stopAtSlide != t && r.stopAtSlide > -1)
            r.lastslidetoshow = r.stopAtSlide;
        else
            r.lastslidetoshow = 999;
        r.stopLoop = "off";
        if (r.looptogo == 0)
            r.stopLoop = "on";
        if (r.slideamount > 1 && !(r.stopAfterLoops == 0 && r.stopAtSlide == 1)) {
            var i = n.find(".tp-bannertimer");
            n.on("stoptimer", function() {
            });
            n.on("starttimer", function() {
            });
            n.on("restarttimer", function() {
            });
            n.on("nulltimer", function() {
            });
            var s = function() {
                if (e("body").find(n).length == 0) {
            };
            i.data("tween", punchgs.TweenLite.fromTo(i, r.delay / 1e3, {
                width: "0%"
            }, {
                force3D: "auto",
                width: "100%",
                ease: punchgs.Linear.easeNone,
                onComplete: s,
                delay: 1
            }));
            i.data("opt", r);
            n.hover(function() {
            }, function() {
            })
        }
    };
    var Q = function() {
        var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"];
        var t = false;
        for (i in e) {
            if (navigator.userAgent.split(e[i]).length > 1) {
                t = true
            }
        }
        return t
    };
    var G = function(e, t, n) {
    };
    var Y = function(n, r, i, s) {
    };
    var Z = function(e, t, n, r, i) {
    };
    var et = function(e) {
    };
    var tt = function(n, r) {
    };
    var nt = function(t, n) {
    };
    var rt = function(t, n) {
    };
    var it = function(n, r) {
    };
    var st = function(e) {
    };
    var ot = function(e, t, n) {
}
)(jQuery)
