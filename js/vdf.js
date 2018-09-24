!function e(t, n, i) {
    function o(r, a) {
        if (!n[r]) {
            if (!t[r]) {
                var l = "function" == typeof require && require;
                if (!a && l)return l(r, !0);
                if (s)return s(r, !0);
                var u = new Error("Cannot find module '" + r + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var c = n[r] = {exports: {}};
            t[r][0].call(c.exports, function (e) {
                var n = t[r][1][e];
                return o(n || e)
            }, c, c.exports, e, t, n, i)
        }
        return n[r].exports
    }

    for (var s = "function" == typeof require && require, r = 0; r < i.length; r++)o(i[r]);
    return o
}({
    1: [function (e, t, n) {
        e("../../js/transition.js"), e("../../js/alert.js"), e("../../js/button.js"), e("../../js/carousel.js"), e("../../js/collapse.js"), e("../../js/dropdown.js"), e("../../js/modal.js"), e("../../js/tooltip.js"), e("../../js/popover.js"), e("../../js/scrollspy.js"), e("../../js/tab.js"), e("../../js/affix.js")
    }, {
        "../../js/affix.js": 2,
        "../../js/alert.js": 3,
        "../../js/button.js": 4,
        "../../js/carousel.js": 5,
        "../../js/collapse.js": 6,
        "../../js/dropdown.js": 7,
        "../../js/modal.js": 8,
        "../../js/popover.js": 9,
        "../../js/scrollspy.js": 10,
        "../../js/tab.js": 11,
        "../../js/tooltip.js": 12,
        "../../js/transition.js": 13
    }], 2: [function (e, t, n) {
        +function (e) {
            "use strict";
            function t(t) {
                return this.each(function () {
                    var i = e(this), o = i.data("bs.affix"), s = "object" == typeof t && t;
                    o || i.data("bs.affix", o = new n(this, s)), "string" == typeof t && o[t]()
                })
            }

            var n = function (t, i) {
                this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
            };
            n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
                offset: 0,
                target: window
            }, n.prototype.getState = function (e, t, n, i) {
                var o = this.$target.scrollTop(), s = this.$element.offset(), r = this.$target.height();
                if (null != n && "top" == this.affixed)return o < n && "top";
                if ("bottom" == this.affixed)return null != n ? !(o + this.unpin <= s.top) && "bottom" : !(o + r <= e - i) && "bottom";
                var a = null == this.affixed, l = a ? o : s.top, u = a ? r : t;
                return null != n && o <= n ? "top" : null != i && l + u >= e - i && "bottom"
            }, n.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset)return this.pinnedOffset;
                this.$element.removeClass(n.RESET).addClass("affix");
                var e = this.$target.scrollTop(), t = this.$element.offset();
                return this.pinnedOffset = t.top - e
            }, n.prototype.checkPositionWithEventLoop = function () {
                setTimeout(e.proxy(this.checkPosition, this), 1)
            }, n.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var t = this.$element.height(), i = this.options.offset, o = i.top, s = i.bottom,
                        r = Math.max(e(document).height(), e(document.body).height());
                    "object" != typeof i && (s = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof s && (s = i.bottom(this.$element));
                    var a = this.getState(r, t, o, s);
                    if (this.affixed != a) {
                        null != this.unpin && this.$element.css("top", "");
                        var l = "affix" + (a ? "-" + a : ""), u = e.Event(l + ".bs.affix");
                        if (this.$element.trigger(u), u.isDefaultPrevented())return;
                        this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                    }
                    "bottom" == a && this.$element.offset({top: r - t - s})
                }
            };
            var i = e.fn.affix;
            e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function () {
                return e.fn.affix = i, this
            }, e(window).on("load", function () {
                e('[data-spy="affix"]').each(function () {
                    var n = e(this), i = n.data();
                    i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
                })
            })
        }(jQuery)
    }, {}], 3: [function (e, t, n) {
        +function (e) {
            "use strict";
            var t = '[data-dismiss="alert"]', n = function (n) {
                e(n).on("click", t, this.close)
            };
            n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function (t) {
                function i() {
                    r.detach().trigger("closed.bs.alert").remove()
                }

                var o = e(this), s = o.attr("data-target");
                s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
                var r = e("#" === s ? [] : s);
                t && t.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
            };
            var i = e.fn.alert;
            e.fn.alert = function (t) {
                return this.each(function () {
                    var i = e(this), o = i.data("bs.alert");
                    o || i.data("bs.alert", o = new n(this)), "string" == typeof t && o[t].call(i)
                })
            }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function () {
                return e.fn.alert = i, this
            }, e(document).on("click.bs.alert.data-api", t, n.prototype.close)
        }(jQuery)
    }, {}], 4: [function (e, t, n) {
        +function (e) {
            "use strict";
            function t(t) {
                return this.each(function () {
                    var i = e(this), o = i.data("bs.button"), s = "object" == typeof t && t;
                    o || i.data("bs.button", o = new n(this, s)), "toggle" == t ? o.toggle() : t && o.setState(t)
                })
            }

            var n = function (t, i) {
                this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
            };
            n.VERSION = "3.3.7", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (t) {
                var n = "disabled", i = this.$element, o = i.is("input") ? "val" : "html", s = i.data();
                t += "Text", null == s.resetText && i.data("resetText", i[o]()), setTimeout(e.proxy(function () {
                    i[o](null == s[t] ? this.options[t] : s[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
                }, this), 0)
            }, n.prototype.toggle = function () {
                var e = !0, t = this.$element.closest('[data-toggle="buttons"]');
                if (t.length) {
                    var n = this.$element.find("input");
                    "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
                } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
            };
            var i = e.fn.button;
            e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function () {
                return e.fn.button = i, this
            }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
                var i = e(n.target).closest(".btn");
                t.call(i, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
            }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
                e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
            })
        }(jQuery)
    }, {}], 5: [function (e, t, n) {
        +function (e) {
            "use strict";
            function t(t) {
                return this.each(function () {
                    var i = e(this), o = i.data("bs.carousel"),
                        s = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                        r = "string" == typeof t ? t : s.slide;
                    o || i.data("bs.carousel", o = new n(this, s)), "number" == typeof t ? o.to(t) : r ? o[r]() : s.interval && o.pause().cycle()
                })
            }

            var n = function (t, n) {
                this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
            };
            n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
                interval: 5e3,
                pause: "hover",
                wrap: !0,
                keyboard: !0
            }, n.prototype.keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName)) {
                    switch (e.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return
                    }
                    e.preventDefault()
                }
            }, n.prototype.cycle = function (t) {
                return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
            }, n.prototype.getItemIndex = function (e) {
                return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
            }, n.prototype.getItemForDirection = function (e, t) {
                var n = this.getItemIndex(t);
                if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap)return t;
                var i = (n + ("prev" == e ? -1 : 1)) % this.$items.length;
                return this.$items.eq(i)
            }, n.prototype.to = function (e) {
                var t = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                if (!(e > this.$items.length - 1 || e < 0))return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                    t.to(e)
                }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
            }, n.prototype.pause = function (t) {
                return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
            }, n.prototype.next = function () {
                if (!this.sliding)return this.slide("next")
            }, n.prototype.prev = function () {
                if (!this.sliding)return this.slide("prev")
            }, n.prototype.slide = function (t, i) {
                var o = this.$element.find(".item.active"), s = i || this.getItemForDirection(t, o), r = this.interval,
                    a = "next" == t ? "left" : "right", l = this;
                if (s.hasClass("active"))return this.sliding = !1;
                var u = s[0], c = e.Event("slide.bs.carousel", {relatedTarget: u, direction: a});
                if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                    if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                        this.$indicators.find(".active").removeClass("active");
                        var d = e(this.$indicators.children()[this.getItemIndex(s)]);
                        d && d.addClass("active")
                    }
                    var p = e.Event("slid.bs.carousel", {relatedTarget: u, direction: a});
                    return e.support.transition && this.$element.hasClass("slide") ? (s.addClass(t), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function () {
                        s.removeClass([t, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                            l.$element.trigger(p)
                        }, 0)
                    }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(p)), r && this.cycle(), this
                }
            };
            var i = e.fn.carousel;
            e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function () {
                return e.fn.carousel = i, this
            };
            var o = function (n) {
                var i, o = e(this),
                    s = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
                if (s.hasClass("carousel")) {
                    var r = e.extend({}, s.data(), o.data()), a = o.attr("data-slide-to");
                    a && (r.interval = !1), t.call(s, r), a && s.data("bs.carousel").to(a), n.preventDefault()
                }
            };
            e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), e(window).on("load", function () {
                e('[data-ride="carousel"]').each(function () {
                    var n = e(this);
                    t.call(n, n.data())
                })
            })
        }(jQuery)
    }, {}], 6: [function (e, t, n) {
        +function (e) {
            "use strict";
            function t(t) {
                var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
                return e(i)
            }

            function n(t) {
                return this.each(function () {
                    var n = e(this), o = n.data("bs.collapse"),
                        s = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
                    !o && s.toggle && /show|hide/.test(t) && (s.toggle = !1), o || n.data("bs.collapse", o = new i(this, s)), "string" == typeof t && o[t]()
                })
            }

            var i = function (t, n) {
                this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
            };
            i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
                return this.$element.hasClass("width") ? "width" : "height"
            }, i.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(o && o.length && (t = o.data("bs.collapse")) && t.transitioning)) {
                        var s = e.Event("show.bs.collapse");
                        if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                            o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
                            var r = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                            var a = function () {
                                this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                            };
                            if (!e.support.transition)return a.call(this);
                            var l = e.camelCase(["scroll", r].join("-"));
                            this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])
                        }
                    }
                }
            }, i.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var t = e.Event("hide.bs.collapse");
                    if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                        var n = this.dimension();
                        this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                        var o = function () {
                            this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        };
                        return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
                    }
                }
            }, i.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }, i.prototype.getParent = function () {
                return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function (n, i) {
                    var o = e(i);
                    this.addAriaAndCollapsedClass(t(o), o)
                }, this)).end()
            }, i.prototype.addAriaAndCollapsedClass = function (e, t) {
                var n = e.hasClass("in");
                e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
            };
            var o = e.fn.collapse;
            e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function () {
                return e.fn.collapse = o, this
            }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
                var o = e(this);
                o.attr("data-target") || i.preventDefault();
                var s = t(o), r = s.data("bs.collapse") ? "toggle" : o.data();
                n.call(s, r)
            })
        }(jQuery)
    }, {}], 7: [function (e, t, n) {
        +function (e) {
            "use strict";
            function t(t) {
                var n = t.attr("data-target");
                n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
                var i = n && e(n);
                return i && i.length ? i : t.parent()
            }

            function n(n) {
                n && 3 === n.which || (e(i).remove(), e(o).each(function () {
                    var i = e(this), o = t(i), s = {relatedTarget: this};
                    o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o[0], n.target) || (o.trigger(n = e.Event("hide.bs.dropdown", s)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(e.Event("hidden.bs.dropdown", s)))))
                }))
            }

            var i = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', s = function (t) {
                e(t).on("click.bs.dropdown", this.toggle)
            };
            s.VERSION = "3.3.7", s.prototype.toggle = function (i) {
                var o = e(this);
                if (!o.is(".disabled, :disabled")) {
                    var s = t(o), r = s.hasClass("open");
                    if (n(), !r) {
                        "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                        var a = {relatedTarget: this};
                        if (s.trigger(i = e.Event("show.bs.dropdown", a)), i.isDefaultPrevented())return;
                        o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(e.Event("shown.bs.dropdown", a))
                    }
                    return !1
                }
            }, s.prototype.keydown = function (n) {
                if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                    var i = e(this);
                    if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                        var s = t(i), r = s.hasClass("open");
                        if (!r && 27 != n.which || r && 27 == n.which)return 27 == n.which && s.find(o).trigger("focus"), i.trigger("click");
                        var a = s.find(".dropdown-menu li:not(.disabled):visible a");
                        if (a.length) {
                            var l = a.index(n.target);
                            38 == n.which && l > 0 && l--, 40 == n.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                        }
                    }
                }
            };
            var r = e.fn.dropdown;
            e.fn.dropdown = function (t) {
                return this.each(function () {
                    var n = e(this), i = n.data("bs.dropdown");
                    i || n.data("bs.dropdown", i = new s(this)), "string" == typeof t && i[t].call(n)
                })
            }, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function () {
                return e.fn.dropdown = r, this
            }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
                e.stopPropagation()
            }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
        }(jQuery)
    }, {}], 8: [function (e, t, n) {
        +function (e) {
            "use strict";
            function t(t, i) {
                return this.each(function () {
                    var o = e(this), s = o.data("bs.modal"),
                        r = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
                    s || o.data("bs.modal", s = new n(this, r)), "string" == typeof t ? s[t](i) : r.show && s.show(i)
                })
            }

            var n = function (t, n) {
                this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function () {
                    this.$element.trigger("loaded.bs.modal")
                }, this))
            };
            n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
                backdrop: !0,
                keyboard: !0,
                show: !0
            }, n.prototype.toggle = function (e) {
                return this.isShown ? this.hide() : this.show(e)
            }, n.prototype.show = function (t) {
                var i = this, o = e.Event("show.bs.modal", {relatedTarget: t});
                this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                    i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                        e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                    })
                }), this.backdrop(function () {
                    var o = e.support.transition && i.$element.hasClass("fade");
                    i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                    var s = e.Event("shown.bs.modal", {relatedTarget: t});
                    o ? i.$dialog.one("bsTransitionEnd", function () {
                        i.$element.trigger("focus").trigger(s)
                    }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(s)
                }))
            }, n.prototype.hide = function (t) {
                t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
            }, n.prototype.enforceFocus = function () {
                e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
                    document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
                }, this))
            }, n.prototype.escape = function () {
                this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function (e) {
                    27 == e.which && this.hide()
                }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
            }, n.prototype.resize = function () {
                this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
            }, n.prototype.hideModal = function () {
                var e = this;
                this.$element.hide(), this.backdrop(function () {
                    e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
                })
            }, n.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            }, n.prototype.backdrop = function (t) {
                var i = this, o = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var s = e.support.transition && o;
                    if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function (e) {
                            return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                        }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t)return;
                    s ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var r = function () {
                        i.removeBackdrop(), t && t()
                    };
                    e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : r()
                } else t && t()
            }, n.prototype.handleUpdate = function () {
                this.adjustDialog()
            }, n.prototype.adjustDialog = function () {
                var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({
                    paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
                    paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
                })
            }, n.prototype.resetAdjustments = function () {
                this.$element.css({paddingLeft: "", paddingRight: ""})
            }, n.prototype.checkScrollbar = function () {
                var e = window.innerWidth;
                if (!e) {
                    var t = document.documentElement.getBoundingClientRect();
                    e = t.right - Math.abs(t.left)
                }
                this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
            }, n.prototype.setScrollbar = function () {
                var e = parseInt(this.$body.css("padding-right") || 0, 10);
                this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
            }, n.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", this.originalBodyPad)
            }, n.prototype.measureScrollbar = function () {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", this.$body.append(e);
                var t = e.offsetWidth - e.clientWidth;
                return this.$body[0].removeChild(e), t
            };
            var i = e.fn.modal;
            e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function () {
                return e.fn.modal = i, this
            }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
                var i = e(this), o = i.attr("href"),
                    s = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                    r = s.data("bs.modal") ? "toggle" : e.extend({remote: !/#/.test(o) && o}, s.data(), i.data());
                i.is("a") && n.preventDefault(), s.one("show.bs.modal", function (e) {
                    e.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                        i.is(":visible") && i.trigger("focus")
                    })
                }), t.call(s, r, this)
            })
        }(jQuery)
    }, {}], 9: [function (e, t, n) {
        +function (e) {
            "use strict";
            var t = function (e, t) {
                this.init("popover", e, t)
            };
            if (!e.fn.tooltip)throw new Error("Popover requires tooltip.js");
            t.VERSION = "3.3.7", t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function () {
                return t.DEFAULTS
            }, t.prototype.setContent = function () {
                var e = this.tip(), t = this.getTitle(), n = this.getContent();
                e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
            }, t.prototype.hasContent = function () {
                return this.getTitle() || this.getContent()
            }, t.prototype.getContent = function () {
                var e = this.$element, t = this.options;
                return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
            }, t.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".arrow")
            };
            var n = e.fn.popover;
            e.fn.popover = function (n) {
                return this.each(function () {
                    var i = e(this), o = i.data("bs.popover"), s = "object" == typeof n && n;
                    !o && /destroy|hide/.test(n) || (o || i.data("bs.popover", o = new t(this, s)), "string" == typeof n && o[n]())
                })
            }, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function () {
                return e.fn.popover = n, this
            }
        }(jQuery)
    }, {}], 10: [function (e, t, n) {
        +function (e) {
            "use strict";
            function t(n, i) {
                this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
            }

            function n(n) {
                return this.each(function () {
                    var i = e(this), o = i.data("bs.scrollspy"), s = "object" == typeof n && n;
                    o || i.data("bs.scrollspy", o = new t(this, s)), "string" == typeof n && o[n]()
                })
            }

            t.VERSION = "3.3.7", t.DEFAULTS = {offset: 10}, t.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
            }, t.prototype.refresh = function () {
                var t = this, n = "offset", i = 0;
                this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                    var t = e(this), o = t.data("target") || t.attr("href"), s = /^#./.test(o) && e(o);
                    return s && s.length && s.is(":visible") && [[s[n]().top + i, o]] || null
                }).sort(function (e, t) {
                    return e[0] - t[0]
                }).each(function () {
                    t.offsets.push(this[0]), t.targets.push(this[1])
                })
            }, t.prototype.process = function () {
                var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(),
                    i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, s = this.targets,
                    r = this.activeTarget;
                if (this.scrollHeight != n && this.refresh(), t >= i)return r != (e = s[s.length - 1]) && this.activate(e);
                if (r && t < o[0])return this.activeTarget = null, this.clear();
                for (e = o.length; e--;)r != s[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(s[e])
            }, t.prototype.activate = function (t) {
                this.activeTarget = t, this.clear();
                var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
                    i = e(n).parents("li").addClass("active");
                i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
            }, t.prototype.clear = function () {
                e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
            };
            var i = e.fn.scrollspy;
            e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function () {
                return e.fn.scrollspy = i, this
            }, e(window).on("load.bs.scrollspy.data-api", function () {
                e('[data-spy="scroll"]').each(function () {
                    var t = e(this);
                    n.call(t, t.data())
                })
            })
        }(jQuery)
    }, {}], 11: [function (e, t, n) {
        +function (e) {
            "use strict";
            function t(t) {
                return this.each(function () {
                    var i = e(this), o = i.data("bs.tab");
                    o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]()
                })
            }

            var n = function (t) {
                this.element = e(t)
            };
            n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
                var t = this.element, n = t.closest("ul:not(.dropdown-menu)"), i = t.data("target");
                if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
                    var o = n.find(".active:last a"), s = e.Event("hide.bs.tab", {relatedTarget: t[0]}),
                        r = e.Event("show.bs.tab", {relatedTarget: o[0]});
                    if (o.trigger(s), t.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        var a = e(i);
                        this.activate(t.closest("li"), n), this.activate(a, a.parent(), function () {
                            o.trigger({type: "hidden.bs.tab", relatedTarget: t[0]}), t.trigger({
                                type: "shown.bs.tab",
                                relatedTarget: o[0]
                            })
                        })
                    }
                }
            }, n.prototype.activate = function (t, i, o) {
                function s() {
                    r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
                }

                var r = i.find("> .active"),
                    a = o && e.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
                r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s(), r.removeClass("in")
            };
            var i = e.fn.tab;
            e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function () {
                return e.fn.tab = i, this
            };
            var o = function (n) {
                n.preventDefault(), t.call(e(this), "show")
            };
            e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
        }(jQuery)
    }, {}], 12: [function (e, t, n) {
        +function (e) {
            "use strict";
            var t = function (e, t) {
                this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
            };
            t.VERSION = "3.3.7", t.TRANSITION_DURATION = 150, t.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: {selector: "body", padding: 0}
            }, t.prototype.init = function (t, n, i) {
                if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                        click: !1,
                        hover: !1,
                        focus: !1
                    }, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
                    var r = o[s];
                    if ("click" == r) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)); else if ("manual" != r) {
                        var a = "hover" == r ? "mouseenter" : "focusin", l = "hover" == r ? "mouseleave" : "focusout";
                        this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
                    }
                }
                this.options.selector ? this._options = e.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            }, t.prototype.getDefaults = function () {
                return t.DEFAULTS
            }, t.prototype.getOptions = function (t) {
                return (t = e.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), t
            }, t.prototype.getDelegateOptions = function () {
                var t = {}, n = this.getDefaults();
                return this._options && e.each(this._options, function (e, i) {
                    n[e] != i && (t[e] = i)
                }), t
            }, t.prototype.enter = function (t) {
                var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
                return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
                    "in" == n.hoverState && n.show()
                }, n.options.delay.show)) : n.show())
            }, t.prototype.isInStateTrue = function () {
                for (var e in this.inState)if (this.inState[e])return !0;
                return !1
            }, t.prototype.leave = function (t) {
                var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
                if (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), !n.isInStateTrue())return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
                    "out" == n.hoverState && n.hide()
                }, n.options.delay.hide)) : n.hide()
            }, t.prototype.show = function () {
                var n = e.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(n);
                    var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (n.isDefaultPrevented() || !i)return;
                    var o = this, s = this.tip(), r = this.getUID(this.type);
                    this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
                    var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                        l = /\s?auto?\s?/i, u = l.test(a);
                    u && (a = a.replace(l, "") || "top"), s.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                    var c = this.getPosition(), d = s[0].offsetWidth, p = s[0].offsetHeight;
                    if (u) {
                        var h = a, f = this.getPosition(this.$viewport);
                        a = "bottom" == a && c.bottom + p > f.bottom ? "top" : "top" == a && c.top - p < f.top ? "bottom" : "right" == a && c.right + d > f.width ? "left" : "left" == a && c.left - d < f.left ? "right" : a, s.removeClass(h).addClass(a)
                    }
                    var m = this.getCalculatedOffset(a, c, d, p);
                    this.applyPlacement(m, a);
                    var g = function () {
                        var e = o.hoverState;
                        o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o)
                    };
                    e.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(t.TRANSITION_DURATION) : g()
                }
            }, t.prototype.applyPlacement = function (t, n) {
                var i = this.tip(), o = i[0].offsetWidth, s = i[0].offsetHeight, r = parseInt(i.css("margin-top"), 10),
                    a = parseInt(i.css("margin-left"), 10);
                isNaN(r) && (r = 0), isNaN(a) && (a = 0), t.top += r, t.left += a, e.offset.setOffset(i[0], e.extend({
                    using: function (e) {
                        i.css({top: Math.round(e.top), left: Math.round(e.left)})
                    }
                }, t), 0), i.addClass("in");
                var l = i[0].offsetWidth, u = i[0].offsetHeight;
                "top" == n && u != s && (t.top = t.top + s - u);
                var c = this.getViewportAdjustedDelta(n, t, l, u);
                c.left ? t.left += c.left : t.top += c.top;
                var d = /top|bottom/.test(n), p = d ? 2 * c.left - o + l : 2 * c.top - s + u,
                    h = d ? "offsetWidth" : "offsetHeight";
                i.offset(t), this.replaceArrow(p, i[0][h], d)
            }, t.prototype.replaceArrow = function (e, t, n) {
                this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
            }, t.prototype.setContent = function () {
                var e = this.tip(), t = this.getTitle();
                e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
            }, t.prototype.hide = function (n) {
                function i() {
                    "in" != o.hoverState && s.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), n && n()
                }

                var o = this, s = e(this.$tip), r = e.Event("hide.bs." + this.type);
                if (this.$element.trigger(r), !r.isDefaultPrevented())return s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(t.TRANSITION_DURATION) : i(), this.hoverState = null, this
            }, t.prototype.fixTitle = function () {
                var e = this.$element;
                (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
            }, t.prototype.hasContent = function () {
                return this.getTitle()
            }, t.prototype.getPosition = function (t) {
                var n = (t = t || this.$element)[0], i = "BODY" == n.tagName, o = n.getBoundingClientRect();
                null == o.width && (o = e.extend({}, o, {width: o.right - o.left, height: o.bottom - o.top}));
                var s = window.SVGElement && n instanceof window.SVGElement,
                    r = i ? {top: 0, left: 0} : s ? null : t.offset(),
                    a = {scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()},
                    l = i ? {width: e(window).width(), height: e(window).height()} : null;
                return e.extend({}, o, a, l, r)
            }, t.prototype.getCalculatedOffset = function (e, t, n, i) {
                return "bottom" == e ? {
                    top: t.top + t.height,
                    left: t.left + t.width / 2 - n / 2
                } : "top" == e ? {
                    top: t.top - i,
                    left: t.left + t.width / 2 - n / 2
                } : "left" == e ? {
                    top: t.top + t.height / 2 - i / 2,
                    left: t.left - n
                } : {top: t.top + t.height / 2 - i / 2, left: t.left + t.width}
            }, t.prototype.getViewportAdjustedDelta = function (e, t, n, i) {
                var o = {top: 0, left: 0};
                if (!this.$viewport)return o;
                var s = this.options.viewport && this.options.viewport.padding || 0,
                    r = this.getPosition(this.$viewport);
                if (/right|left/.test(e)) {
                    var a = t.top - s - r.scroll, l = t.top + s - r.scroll + i;
                    a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
                } else {
                    var u = t.left - s, c = t.left + s + n;
                    u < r.left ? o.left = r.left - u : c > r.right && (o.left = r.left + r.width - c)
                }
                return o
            }, t.prototype.getTitle = function () {
                var e = this.$element, t = this.options;
                return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
            }, t.prototype.getUID = function (e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            }, t.prototype.tip = function () {
                if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip
            }, t.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }, t.prototype.enable = function () {
                this.enabled = !0
            }, t.prototype.disable = function () {
                this.enabled = !1
            }, t.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled
            }, t.prototype.toggle = function (t) {
                var n = this;
                t && ((n = e(t.currentTarget).data("bs." + this.type)) || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
            }, t.prototype.destroy = function () {
                var e = this;
                clearTimeout(this.timeout), this.hide(function () {
                    e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
                })
            };
            var n = e.fn.tooltip;
            e.fn.tooltip = function (n) {
                return this.each(function () {
                    var i = e(this), o = i.data("bs.tooltip"), s = "object" == typeof n && n;
                    !o && /destroy|hide/.test(n) || (o || i.data("bs.tooltip", o = new t(this, s)), "string" == typeof n && o[n]())
                })
            }, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function () {
                return e.fn.tooltip = n, this
            }
        }(jQuery)
    }, {}], 13: [function (e, t, n) {
        +function (e) {
            "use strict";
            function t() {
                var e = document.createElement("bootstrap"), t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (var n in t)if (void 0 !== e.style[n])return {end: t[n]};
                return !1
            }

            e.fn.emulateTransitionEnd = function (t) {
                var n = !1, i = this;
                e(this).one("bsTransitionEnd", function () {
                    n = !0
                });
                return setTimeout(function () {
                    n || e(i).trigger(e.support.transition.end)
                }, t), this
            }, e(function () {
                e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
                    bindType: e.support.transition.end,
                    delegateType: e.support.transition.end,
                    handle: function (t) {
                        if (e(t.target).is(this))return t.handleObj.handler.apply(this, arguments)
                    }
                })
            })
        }(jQuery)
    }, {}], 14: [function (e, t, n) {
        var i = function (e) {
            return e.Configuration = function (e) {
                function t(e) {
                    return void 0 !== i[e] && null !== i[e]
                }

                function n(e, t) {
                    function n(t, i) {
                        for (var s in i)void 0 === t[s] && e.log("Property '" + s + "' does not exist in EasyAutocomplete options API."), "object" == typeof t[s] && -1 === $.inArray(s, o) && n(t[s], i[s])
                    }

                    n(i, t)
                }

                var i = {
                    data: "list-required",
                    url: "list-required",
                    dataType: "json",
                    listLocation: function (e) {
                        return e
                    },
                    xmlElementName: "",
                    getValue: function (e) {
                        return e
                    },
                    autocompleteOff: !0,
                    placeholder: !1,
                    ajaxCallback: function () {
                    },
                    matchResponseProperty: !1,
                    list: {
                        sort: {
                            enabled: !1, method: function (e, t) {
                                return e = i.getValue(e), t = i.getValue(t), e < t ? -1 : e > t ? 1 : 0
                            }
                        },
                        maxNumberOfElements: 6,
                        hideOnEmptyPhrase: !0,
                        match: {
                            enabled: !1, caseSensitive: !1, method: function (e, t) {
                                return e.search(t) > -1
                            }
                        },
                        showAnimation: {
                            type: "normal", time: 400, callback: function () {
                            }
                        },
                        hideAnimation: {
                            type: "normal", time: 400, callback: function () {
                            }
                        },
                        onClickEvent: function () {
                        },
                        onSelectItemEvent: function () {
                        },
                        onLoadEvent: function () {
                        },
                        onChooseEvent: function () {
                        },
                        onKeyEnterEvent: function () {
                        },
                        onMouseOverEvent: function () {
                        },
                        onMouseOutEvent: function () {
                        },
                        onShowListEvent: function () {
                        },
                        onHideListEvent: function () {
                        }
                    },
                    highlightPhrase: !0,
                    theme: "",
                    cssClasses: "",
                    minCharNumber: 0,
                    requestDelay: 0,
                    adjustWidth: !0,
                    ajaxSettings: {},
                    preparePostData: function (e, t) {
                        return e
                    },
                    loggerEnabled: !0,
                    template: "",
                    categoriesAssigned: !1,
                    categories: [{maxNumberOfElements: 4}]
                }, o = ["ajaxSettings", "template"];
                this.get = function (e) {
                    return i[e]
                }, this.equals = function (e, n) {
                    return !(!t(e) || i[e] !== n)
                }, this.checkDataUrlProperties = function () {
                    return "list-required" !== i.url || "list-required" !== i.data
                }, this.checkRequiredProperties = function () {
                    for (var e in i)if ("required" === i[e])return logger.error("Option " + e + " must be defined"), !1;
                    return !0
                }, this.printPropertiesThatDoesntExist = function (e, t) {
                    n(e, t)
                }, function () {
                    if ("xml" === e.dataType && (e.getValue || (e.getValue = function (e) {
                            return $(e).text()
                        }), e.list || (e.list = {}), e.list.sort || (e.list.sort = {}), e.list.sort.method = function (t, n) {
                            return t = e.getValue(t), n = e.getValue(n), t < n ? -1 : t > n ? 1 : 0
                        }, e.list.match || (e.list.match = {}), e.list.match.method = function (e, t) {
                            return e.search(t) > -1
                        }), void 0 !== e.categories && e.categories instanceof Array) {
                        for (var t = [], n = 0, o = e.categories.length; n < o; n += 1) {
                            var s = e.categories[n];
                            for (var r in i.categories[0])void 0 === s[r] && (s[r] = i.categories[0][r]);
                            t.push(s)
                        }
                        e.categories = t
                    }
                }(), function () {
                    function t(e, n) {
                        var i = e || {};
                        for (var o in e)void 0 !== n[o] && null !== n[o] && ("object" != typeof n[o] || n[o] instanceof Array ? i[o] = n[o] : t(e[o], n[o]));
                        return void 0 !== n.data && null !== n.data && "object" == typeof n.data && (i.data = n.data), i
                    }

                    i = t(i, e)
                }(), !0 === i.loggerEnabled && n(console, e), void 0 !== e.ajaxSettings && "object" == typeof e.ajaxSettings ? i.ajaxSettings = e.ajaxSettings : i.ajaxSettings = {}, function () {
                    "list-required" !== i.url && "function" != typeof i.url && (t = i.url, i.url = function () {
                        return t
                    });
                    if (void 0 !== i.ajaxSettings.url && "function" != typeof i.ajaxSettings.url) {
                        var t = i.ajaxSettings.url;
                        i.ajaxSettings.url = function () {
                            return t
                        }
                    }
                    if ("string" == typeof i.listLocation) {
                        var n = i.listLocation;
                        "XML" === i.dataType.toUpperCase() ? i.listLocation = function (e) {
                            return $(e).find(n)
                        } : i.listLocation = function (e) {
                            return e[n]
                        }
                    }
                    if ("string" == typeof i.getValue) {
                        var o = i.getValue;
                        i.getValue = function (e) {
                            return e[o]
                        }
                    }
                    void 0 !== e.categories && (i.categoriesAssigned = !0)
                }()
            }, e
        }(i || {}), i = function (e) {
            return e.Constans = function () {
                var e = {
                    CONTAINER_CLASS: "easy-autocomplete-container",
                    CONTAINER_ID: "eac-container-",
                    WRAPPER_CSS_CLASS: "easy-autocomplete"
                };
                this.getValue = function (t) {
                    return e[t]
                }
            }, e
        }((i = function (e) {
                return e.Logger = function () {
                    this.error = function (e) {
                        console.log("ERROR: " + e)
                    }, this.warning = function (e) {
                        console.log("WARNING: " + e)
                    }
                }, e
            }(i || {})) || {}), i = function (e) {
            return e.proccess = function (t, n, i) {
                function o(e, n) {
                    return t.get("list").match.caseSensitive || ("string" == typeof e && (e = e.toLowerCase()), n = n.toLowerCase()), !!t.get("list").match.method(e, n)
                }

                e.proccess.match = o;
                var s = n.data;
                return s = function (e, n) {
                    var i = [], s = "";
                    if (t.get("list").match.enabled)for (var r = 0,
                                                             a = e.length; r < a; r += 1)s = t.get("getValue")(e[r]), o(s, n) && i.push(e[r]); else i = e;
                    return i
                }(s, i), s = function (e) {
                    return void 0 !== n.maxNumberOfElements && e.length > n.maxNumberOfElements && (e = e.slice(0, n.maxNumberOfElements)), e
                }(s), s = function (e) {
                    return t.get("list").sort.enabled && e.sort(t.get("list").sort.method), e
                }(s)
            }, e
        }((i = function (e) {
                return e.ListBuilderService = function (e, t) {
                    function n(t, n) {
                        var i = {};
                        if (i = "XML" === e.get("dataType").toUpperCase() ? function () {
                                var i, o = {};
                                return void 0 !== t.xmlElementName && (o.xmlElementName = t.xmlElementName), void 0 !== t.listLocation ? i = t.listLocation : void 0 !== e.get("listLocation") && (i = e.get("listLocation")), void 0 !== i ? "string" == typeof i ? o.data = $(n).find(i) : "function" == typeof i && (o.data = i(n)) : o.data = n, o
                            }() : function () {
                                var e = {};
                                return void 0 !== t.listLocation ? "string" == typeof t.listLocation ? e.data = n[t.listLocation] : "function" == typeof t.listLocation && (e.data = t.listLocation(n)) : e.data = n, e
                            }(), void 0 !== t.header && (i.header = t.header), void 0 !== t.maxNumberOfElements && (i.maxNumberOfElements = t.maxNumberOfElements), void 0 !== e.get("list").maxNumberOfElements && (i.maxListSize = e.get("list").maxNumberOfElements), void 0 !== t.getValue)if ("string" == typeof t.getValue) {
                            var o = t.getValue;
                            i.getValue = function (e) {
                                return e[o]
                            }
                        } else"function" == typeof t.getValue && (i.getValue = t.getValue); else i.getValue = e.get("getValue");
                        return i
                    }

                    function i(t) {
                        var n = [];
                        return void 0 === t.xmlElementName && (t.xmlElementName = e.get("xmlElementName")), $(t.data).find(t.xmlElementName).each(function () {
                            n.push(this)
                        }), n
                    }

                    this.init = function (t) {
                        var n = [], i = {};
                        return i.data = e.get("listLocation")(t), i.getValue = e.get("getValue"), i.maxListSize = e.get("list").maxNumberOfElements, n.push(i), n
                    }, this.updateCategories = function (t, i) {
                        if (e.get("categoriesAssigned")) {
                            t = [];
                            for (var o = 0; o < e.get("categories").length; o += 1) {
                                var s = n(e.get("categories")[o], i);
                                t.push(s)
                            }
                        }
                        return t
                    }, this.convertXml = function (t) {
                        if ("XML" === e.get("dataType").toUpperCase())for (var n = 0; n < t.length; n += 1)t[n].data = i(t[n]);
                        return t
                    }, this.processData = function (n, i) {
                        for (var o = 0, s = n.length; o < s; o += 1)n[o].data = t(e, n[o], i);
                        return n
                    }, this.checkIfDataExists = function (e) {
                        for (var t = 0,
                                 n = e.length; t < n; t += 1)if (void 0 !== e[t].data && e[t].data instanceof Array && e[t].data.length > 0)return !0;
                        return !1
                    }
                }, e
            }(i || {})) || {}), i = function (e) {
            return e.main = function (t, n) {
                function i() {
                    return 0 === b.length ? void m.error("Input field doesn't exist.") : f.checkDataUrlProperties() ? f.checkRequiredProperties() ? (o(), void r()) : void m.error("Will not work without mentioned properties.") : void m.error("One of options variables 'data' or 'url' must be defined.")
                }

                function o() {
                    function e() {
                        var e = b.outerWidth();
                        b.parent().css("width", e)
                    }

                    function t(e, t) {
                        return f.get("highlightPhrase") && "" !== t ? i(e, t) : e
                    }

                    function n(e) {
                        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    }

                    function i(e, t) {
                        var i = n(t);
                        return (e + "").replace(new RegExp("(" + i + ")", "gi"), "<b>$1</b>")
                    }

                    b.parent().hasClass(h.getValue("WRAPPER_CSS_CLASS")) && (b.next("." + h.getValue("CONTAINER_CLASS")).remove(), b.unwrap()), function () {
                        var t = $("<div>"), n = h.getValue("WRAPPER_CSS_CLASS");
                        f.get("theme") && "" !== f.get("theme") && (n += " eac-" + f.get("theme")), f.get("cssClasses") && "" !== f.get("cssClasses") && (n += " " + f.get("cssClasses")), "" !== g.getTemplateClass() && (n += " " + g.getTemplateClass()), t.addClass(n), b.wrap(t), !0 === f.get("adjustWidth") && e()
                    }(), function () {
                        var e = $("<div>").addClass(h.getValue("CONTAINER_CLASS"));
                        e.attr("id", s()).prepend($("<ul>")), e.on("show.eac", function () {
                            switch (f.get("list").showAnimation.type) {
                                case"slide":
                                    var t = f.get("list").showAnimation.time, n = f.get("list").showAnimation.callback;
                                    e.find("ul").slideDown(t, n);
                                    break;
                                case"fade":
                                    var t = f.get("list").showAnimation.time, n = f.get("list").showAnimation.callback;
                                    e.find("ul").fadeIn(t);
                                    break;
                                default:
                                    e.find("ul").show()
                            }
                            f.get("list").onShowListEvent()
                        }).on("hide.eac", function () {
                            switch (f.get("list").hideAnimation.type) {
                                case"slide":
                                    var t = f.get("list").hideAnimation.time, n = f.get("list").hideAnimation.callback;
                                    e.find("ul").slideUp(t, n);
                                    break;
                                case"fade":
                                    var t = f.get("list").hideAnimation.time, n = f.get("list").hideAnimation.callback;
                                    e.find("ul").fadeOut(t, n);
                                    break;
                                default:
                                    e.find("ul").hide()
                            }
                            f.get("list").onHideListEvent()
                        }).on("selectElement.eac", function () {
                            e.find("ul li").removeClass("selected"), e.find("ul li").eq(T).addClass("selected"), f.get("list").onSelectItemEvent()
                        }).on("loadElements.eac", function (n, i, o) {
                            var s = "", r = e.find("ul");
                            r.empty().detach(), x = [];
                            for (var a = 0, l = 0, c = i.length; l < c; l += 1) {
                                var d = i[l].data;
                                if (0 !== d.length) {
                                    void 0 !== i[l].header && i[l].header.length > 0 && r.append("<div class='eac-category' >" + i[l].header + "</div>");
                                    for (var p = 0,
                                             h = d.length; p < h && a < i[l].maxListSize; p += 1)s = $("<li><div class='eac-item'></div></li>"), function () {
                                        var e = p, n = a, r = i[l].getValue(d[e]);
                                        s.find(" > div").on("click", function () {
                                            b.val(r).trigger("change"), T = n, u(n), f.get("list").onClickEvent(), f.get("list").onChooseEvent()
                                        }).mouseover(function () {
                                            T = n, u(n), f.get("list").onMouseOverEvent()
                                        }).mouseout(function () {
                                            f.get("list").onMouseOutEvent()
                                        }).html(g.build(t(r, o), d[e]))
                                    }(), r.append(s), x.push(d[p]), a += 1
                                }
                            }
                            e.append(r), f.get("list").onLoadEvent()
                        }), b.after(e)
                    }(), w = $("#" + s()), f.get("placeholder") && b.attr("placeholder", f.get("placeholder"))
                }

                function s() {
                    var e = b.attr("id");
                    return e = h.getValue("CONTAINER_ID") + e
                }

                function r() {
                    function e() {
                        b.focusout(function () {
                            var e, t = b.val();
                            f.get("list").match.caseSensitive || (t = t.toLowerCase());
                            for (var n = 0,
                                     i = x.length; n < i; n += 1)if (e = f.get("getValue")(x[n]), f.get("list").match.caseSensitive || (e = e.toLowerCase()), e === t)return T = n, void u(T)
                        })
                    }

                    function t() {
                        b.off("keyup").keyup(function (e) {
                            function t(e) {
                                function t(e, t) {
                                    return !1 === f.get("matchResponseProperty") || ("string" == typeof f.get("matchResponseProperty") ? t[f.get("matchResponseProperty")] === e : "function" != typeof f.get("matchResponseProperty") || f.get("matchResponseProperty")(t) === e)
                                }

                                if (!(e.length < f.get("minCharNumber"))) {
                                    if ("list-required" !== f.get("data")) {
                                        var n = f.get("data"), i = v.init(n);
                                        i = v.updateCategories(i, n), c(i = v.processData(i, e), e), b.parent().find("li").length > 0 ? a() : l()
                                    }
                                    var o = function () {
                                        var e = {}, t = f.get("ajaxSettings") || {};
                                        for (var n in t)e[n] = t[n];
                                        return e
                                    }();
                                    void 0 !== o.url && "" !== o.url || (o.url = f.get("url")), void 0 !== o.dataType && "" !== o.dataType || (o.dataType = f.get("dataType")), void 0 !== o.url && "list-required" !== o.url && (o.url = o.url(e), o.data = f.get("preparePostData")(o.data, e), $.ajax(o).done(function (n) {
                                        var i = v.init(n);
                                        i = v.updateCategories(i, n), i = v.convertXml(i), t(e, n) && (i = v.processData(i, e), c(i, e)), v.checkIfDataExists(i) && b.parent().find("li").length > 0 ? a() : l(), f.get("ajaxCallback")()
                                    }).fail(function () {
                                        m.warning("Fail to load response data")
                                    }).always(function () {
                                    }))
                                }
                            }

                            switch (e.keyCode) {
                                case 27:
                                    l(), d();
                                    break;
                                case 38:
                                    e.preventDefault(), x.length > 0 && T > 0 && (T -= 1, b.val(f.get("getValue")(x[T])), u(T));
                                    break;
                                case 40:
                                    e.preventDefault(), x.length > 0 && T < x.length - 1 && (T += 1, b.val(f.get("getValue")(x[T])), u(T));
                                    break;
                                default:
                                    if (e.keyCode > 40 || 8 === e.keyCode) {
                                        var n = b.val();
                                        !0 !== f.get("list").hideOnEmptyPhrase || 8 !== e.keyCode || "" !== n ? f.get("requestDelay") > 0 ? (void 0 !== p && clearTimeout(p), p = setTimeout(function () {
                                            t(n)
                                        }, f.get("requestDelay"))) : t(n) : l()
                                    }
                            }
                        })
                    }

                    function n() {
                        b.on("keydown", function (e) {
                            if (38 === (e = e || window.event).keyCode)return suppressKeypress = !0, !1
                        }).keydown(function (e) {
                            13 === e.keyCode && T > -1 && (b.val(f.get("getValue")(x[T])), f.get("list").onKeyEnterEvent(), f.get("list").onChooseEvent(), T = -1, l(), e.preventDefault())
                        })
                    }

                    function i() {
                        b.off("keypress")
                    }

                    function o() {
                        b.focus(function () {
                            "" !== b.val() && x.length > 0 && (T = -1, a())
                        })
                    }

                    function s() {
                        b.blur(function () {
                            setTimeout(function () {
                                T = -1, l()
                            }, 250)
                        })
                    }

                    function r() {
                        b.attr("autocomplete", "off")
                    }

                    y("autocompleteOff", !0) && r(), e(), t(), n(), i(), o(), s()
                }

                function a() {
                    w.trigger("show.eac")
                }

                function l() {
                    w.trigger("hide.eac")
                }

                function u(e) {
                    w.trigger("selectElement.eac", e)
                }

                function c(e, t) {
                    w.trigger("loadElements.eac", [e, t])
                }

                function d() {
                    b.trigger("blur")
                }

                var p, h = new e.Constans, f = new e.Configuration(n), m = new e.Logger, g = new e.Template(n.template),
                    v = new e.ListBuilderService(f, e.proccess), y = f.equals, b = t, w = "", x = [], T = -1;
                e.consts = h, this.getConstants = function () {
                    return h
                }, this.getConfiguration = function () {
                    return f
                }, this.getContainer = function () {
                    return w
                }, this.getSelectedItemIndex = function () {
                    return T
                }, this.getItems = function () {
                    return x
                }, this.getItemData = function (e) {
                    return x.length < e || void 0 === x[e] ? -1 : x[e]
                }, this.getSelectedItemData = function () {
                    return this.getItemData(T)
                }, this.build = function () {
                    o()
                }, this.init = function () {
                    i()
                }
            }, e.eacHandles = [], e.getHandle = function (t) {
                return e.eacHandles[t]
            }, e.inputHasId = function (e) {
                return void 0 !== $(e).attr("id") && $(e).attr("id").length > 0
            }, e.assignRandomId = function (t) {
                var n = "";
                do {
                    n = "eac-" + Math.floor(1e4 * Math.random())
                } while (0 !== $("#" + n).length);
                elementId = e.consts.getValue("CONTAINER_ID") + n, $(t).attr("id", n)
            }, e.setHandle = function (t, n) {
                e.eacHandles[n] = t
            }, e
        }((i = function (e) {
                return e.Template = function (e) {
                    var t = {
                        basic: {
                            type: "basic", method: function (e) {
                                return e
                            }, cssClass: ""
                        }, description: {
                            type: "description", fields: {description: "description"}, method: function (e) {
                                return e + " - description"
                            }, cssClass: "eac-description"
                        }, iconLeft: {
                            type: "iconLeft", fields: {icon: ""}, method: function (e) {
                                return e
                            }, cssClass: "eac-icon-left"
                        }, iconRight: {
                            type: "iconRight", fields: {iconSrc: ""}, method: function (e) {
                                return e
                            }, cssClass: "eac-icon-right"
                        }, links: {
                            type: "links", fields: {link: ""}, method: function (e) {
                                return e
                            }, cssClass: ""
                        }, custom: {
                            type: "custom", method: function () {
                            }, cssClass: ""
                        }
                    }, n = function (e) {
                        var n, i = e.fields;
                        return "description" === e.type ? (n = t.description.method, "string" == typeof i.description ? n = function (e, t) {
                            return e + " - <span>" + t[i.description] + "</span>"
                        } : "function" == typeof i.description && (n = function (e, t) {
                                return e + " - <span>" + i.description(t) + "</span>"
                            }), n) : "iconRight" === e.type ? ("string" == typeof i.iconSrc ? n = function (e, t) {
                            return e + "<img class='eac-icon' src='" + t[i.iconSrc] + "' />"
                        } : "function" == typeof i.iconSrc && (n = function (e, t) {
                                return e + "<img class='eac-icon' src='" + i.iconSrc(t) + "' />"
                            }), n) : "iconLeft" === e.type ? ("string" == typeof i.iconSrc ? n = function (e, t) {
                            return "<img class='eac-icon' src='" + t[i.iconSrc] + "' />" + e
                        } : "function" == typeof i.iconSrc && (n = function (e, t) {
                                return "<img class='eac-icon' src='" + i.iconSrc(t) + "' />" + e
                            }), n) : "links" === e.type ? ("string" == typeof i.link ? n = function (e, t) {
                            return "<a href='" + t[i.link] + "' >" + e + "</a>"
                        } : "function" == typeof i.link && (n = function (e, t) {
                                return "<a href='" + i.link(t) + "' >" + e + "</a>"
                            }), n) : "custom" === e.type ? e.method : t.basic.method
                    };
                    this.getTemplateClass = function (e) {
                        return e && e.type && e.type && t[e.type] ? function () {
                            var n = t[e.type].cssClass;
                            return function () {
                                return n
                            }
                        }() : function () {
                            return ""
                        }
                    }(e), this.build = function (e) {
                        return e && e.type && e.type && t[e.type] ? n(e) : t.basic.method
                    }(e)
                }, e
            }(i || {})) || {});
        !function (e) {
            e.fn.easyAutocomplete = function (t) {
                return this.each(function () {
                    var n = e(this), o = new i.main(n, t);
                    i.inputHasId(n) || i.assignRandomId(n), o.init(), i.setHandle(o, n.attr("id"))
                })
            }, e.fn.getSelectedItemIndex = function () {
                var t = e(this).attr("id");
                return void 0 !== t ? i.getHandle(t).getSelectedItemIndex() : -1
            }, e.fn.getItems = function () {
                var t = e(this).attr("id");
                return void 0 !== t ? i.getHandle(t).getItems() : -1
            }, e.fn.getItemData = function (t) {
                var n = e(this).attr("id");
                return void 0 !== n && t > -1 ? i.getHandle(n).getItemData(t) : -1
            }, e.fn.getSelectedItemData = function () {
                var t = e(this).attr("id");
                return void 0 !== t ? i.getHandle(t).getSelectedItemData() : -1
            }
        }(jQuery)
    }, {}], 15: [function (e, t, n) {
        !function (n) {
            "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof t && t.exports ? t.exports = n(e("jquery")) : n(jQuery)
        }(function (e) {
            var t = function () {
                function t() {
                    var t = this, n = function () {
                        var n = ["br-wrapper"];
                        "" !== t.options.theme && n.push("br-theme-" + t.options.theme), t.$elem.wrap(e("<div />", {class: n.join(" ")}))
                    }, i = function () {
                        t.$elem.unwrap()
                    }, o = function (n) {
                        return e.isNumeric(n) && (n = Math.floor(n)), e('option[value="' + n + '"]', t.$elem)
                    }, s = function () {
                        var n = t.options.initialRating;
                        return n ? o(n) : e("option:selected", t.$elem)
                    }, r = function (e) {
                        var n = t.$elem.data("barrating");
                        return void 0 !== e ? n[e] : n
                    }, a = function (e, n) {
                        null !== n && "object" == typeof n ? t.$elem.data("barrating", n) : t.$elem.data("barrating")[e] = n
                    }, l = function () {
                        var e = s(), n = e.val(), i = e.data("html") ? e.data("html") : e.text();
                        a(null, {
                            userOptions: t.options,
                            ratingValue: n,
                            ratingText: i,
                            originalRatingValue: n,
                            originalRatingText: i,
                            readOnly: t.options.readonly,
                            ratingMade: !1
                        })
                    }, u = function () {
                        t.$elem.removeData("barrating")
                    }, c = function () {
                        return r("ratingText")
                    }, d = function () {
                        return r("ratingValue")
                    }, p = function () {
                        var n = e("<div />", {class: "br-widget"});
                        return t.$elem.find("option").each(function () {
                            var i, o, s, r;
                            (i = e(this).val()) && (o = e(this).text(), (s = e(this).data("html")) && (o = s), r = e("<a />", {
                                href: "#",
                                "data-rating-value": i,
                                "data-rating-text": o,
                                html: t.options.showValues ? o : ""
                            }), n.append(r))
                        }), t.options.showSelectedRating && n.append(e("<div />", {
                            text: "",
                            class: "br-current-rating"
                        })), t.options.reverse && n.addClass("br-reverse"), t.options.readonly && n.addClass("br-readonly"), n
                    }, h = function () {
                        return r("userOptions").reverse ? "nextAll" : "prevAll"
                    }, f = function (e) {
                        o(e).prop("selected", !0), t.$elem.change()
                    }, m = function () {
                        e("option", t.$elem).prop("selected", function () {
                            return this.defaultSelected
                        }), t.$elem.change()
                    }, g = function (e) {
                        e = e || c(), t.options.showSelectedRating && t.$elem.parent().find(".br-current-rating").text(e)
                    }, v = function (e) {
                        return Math.round(Math.floor(10 * e) / 10 % 1 * 100)
                    }, y = function () {
                        t.$widget.find("a").removeClass(function (e, t) {
                            return (t.match(/(^|\s)br-\S+/g) || []).join(" ")
                        })
                    }, b = function () {
                        var n, i, o = t.$widget.find('a[data-rating-value="' + d() + '"]'),
                            s = r("userOptions").initialRating, a = e.isNumeric(d()) ? d() : 0, l = v(s);
                        if (y(), o.addClass("br-selected br-current")[h()]().addClass("br-selected"), !r("ratingMade") && e.isNumeric(s)) {
                            if (s <= a || !l)return;
                            n = t.$widget.find("a"), (i = o.length ? o[r("userOptions").reverse ? "prev" : "next"]() : n[r("userOptions").reverse ? "last" : "first"]()).addClass("br-fractional"), i.addClass("br-fractional-" + l)
                        }
                    }, w = function (e) {
                        return !!t.options.deselectable && !t.$elem.find("option:first").val() && d() == e.attr("data-rating-value")
                    }, x = function (n) {
                        n.on("click.barrating", function (n) {
                            var i, o, s = e(this), l = r("userOptions");
                            return n.preventDefault(), i = s.attr("data-rating-value"), o = s.attr("data-rating-text"), w(s) && (i = "", o = ""), a("ratingValue", i), a("ratingText", o), a("ratingMade", !0), f(i), g(o), b(), l.onSelect.call(t, d(), c(), n), !1
                        })
                    }, T = function (t) {
                        t.on("mouseenter.barrating", function () {
                            var t = e(this);
                            y(), t.addClass("br-active")[h()]().addClass("br-active"), g(t.attr("data-rating-text"))
                        })
                    }, C = function (e) {
                        t.$widget.on("mouseleave.barrating blur.barrating", function () {
                            g(), b()
                        })
                    }, j = function (t) {
                        t.on("touchstart.barrating", function (t) {
                            t.preventDefault(), t.stopPropagation(), e(this).click()
                        })
                    }, k = function (e) {
                        e.on("click.barrating", function (e) {
                            e.preventDefault()
                        })
                    }, S = function (e) {
                        x(e), t.options.hoverState && (T(e), C())
                    }, E = function (e) {
                        e.off(".barrating")
                    }, $ = function (e) {
                        var n = t.$widget.find("a");
                        j && j(n), e ? (E(n), k(n)) : S(n)
                    };
                    this.show = function () {
                        r() || (n(), l(), t.$widget = p(), t.$widget.insertAfter(t.$elem), b(), g(), $(t.options.readonly), t.$elem.hide())
                    }, this.readonly = function (e) {
                        "boolean" == typeof e && r("readOnly") != e && ($(e), a("readOnly", e), t.$widget.toggleClass("br-readonly"))
                    }, this.set = function (e) {
                        var n = r("userOptions");
                        t.$elem.find('option[value="' + e + '"]').val() && (a("ratingValue", e), a("ratingText", t.$elem.find('option[value="' + e + '"]').text()), a("ratingMade", !0), f(d()), g(c()), b(), n.silent || n.onSelect.call(this, d(), c()))
                    }, this.clear = function () {
                        var e = r("userOptions");
                        a("ratingValue", r("originalRatingValue")), a("ratingText", r("originalRatingText")), a("ratingMade", !1), m(), g(c()), b(), e.onClear.call(this, d(), c())
                    }, this.destroy = function () {
                        var e = d(), n = c(), o = r("userOptions");
                        E(t.$widget.find("a")), t.$widget.remove(), u(), i(), t.$elem.show(), o.onDestroy.call(this, e, n)
                    }
                }

                return t.prototype.init = function (t, n) {
                    return this.$elem = e(n), this.options = e.extend({}, e.fn.barrating.defaults, t), this.options
                }, t
            }();
            e.fn.barrating = function (n, i) {
                return this.each(function () {
                    var o = new t;
                    if (e(this).is("select") || e.error("Sorry, this plugin only works with select fields."), o.hasOwnProperty(n)) {
                        if (o.init(i, this), "show" === n)return o.show(i);
                        if (o.$elem.data("barrating"))return o.$widget = e(this).next(".br-widget"), o[n](i)
                    } else {
                        if ("object" == typeof n || !n)return i = n, o.init(i, this), o.show();
                        e.error("Method " + n + " does not exist on jQuery.barrating")
                    }
                })
            }, e.fn.barrating.defaults = {
                theme: "",
                initialRating: null,
                showValues: !1,
                showSelectedRating: !0,
                deselectable: !0,
                reverse: !1,
                readonly: !1,
                fastClicks: !0,
                hoverState: !0,
                silent: !1,
                onSelect: function (e, t, n) {
                },
                onClear: function (e, t) {
                },
                onDestroy: function (e, t) {
                }
            }, e.fn.barrating.BarRating = t
        })
    }, {jquery: 16}], 16: [function (e, t, n) {
        !function (e, n) {
            "use strict";
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (e) {
                if (!e.document)throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(e)
        }("undefined" != typeof window ? window : this, function (e, t) {
            "use strict";
            function n(e, t) {
                var n = (t = t || ee).createElement("script");
                n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
            }

            function i(e) {
                var t = !!e && "length" in e && e.length, n = pe.type(e);
                return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }

            function o(e, t, n) {
                return pe.isFunction(t) ? pe.grep(e, function (e, i) {
                    return !!t.call(e, i, e) !== n
                }) : t.nodeType ? pe.grep(e, function (e) {
                    return e === t !== n
                }) : "string" != typeof t ? pe.grep(e, function (e) {
                    return se.call(t, e) > -1 !== n
                }) : Te.test(t) ? pe.filter(t, e, n) : (t = pe.filter(t, e), pe.grep(e, function (e) {
                    return se.call(t, e) > -1 !== n && 1 === e.nodeType
                }))
            }

            function s(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;);
                return e
            }

            function r(e) {
                var t = {};
                return pe.each(e.match(Ee) || [], function (e, n) {
                    t[n] = !0
                }), t
            }

            function a(e) {
                return e
            }

            function l(e) {
                throw e
            }

            function u(e, t, n) {
                var i;
                try {
                    e && pe.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && pe.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
                } catch (e) {
                    n.call(void 0, e)
                }
            }

            function c() {
                ee.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), pe.ready()
            }

            function d() {
                this.expando = pe.expando + d.uid++
            }

            function p(e) {
                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ne.test(e) ? JSON.parse(e) : e)
            }

            function h(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType)if (i = "data-" + t.replace(Me, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = p(n)
                    } catch (e) {
                    }
                    Pe.set(e, t, n)
                } else n = void 0;
                return n
            }

            function f(e, t, n, i) {
                var o, s = 1, r = 20, a = i ? function () {
                        return i.cur()
                    } : function () {
                        return pe.css(e, t, "")
                    }, l = a(), u = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
                    c = (pe.cssNumber[t] || "px" !== u && +l) && Oe.exec(pe.css(e, t));
                if (c && c[3] !== u) {
                    u = u || c[3], n = n || [], c = +l || 1;
                    do {
                        s = s || ".5", c /= s, pe.style(e, t, c + u)
                    } while (s !== (s = a() / l) && 1 !== s && --r)
                }
                return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
            }

            function m(e) {
                var t, n = e.ownerDocument, i = e.nodeName, o = He[i];
                return o || (t = n.body.appendChild(n.createElement(i)), o = pe.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), He[i] = o, o)
            }

            function g(e, t) {
                for (var n, i, o = [], s = 0,
                         r = e.length; s < r; s++)(i = e[s]).style && (n = i.style.display, t ? ("none" === n && (o[s] = De.get(i, "display") || null, o[s] || (i.style.display = "")), "" === i.style.display && Re(i) && (o[s] = m(i))) : "none" !== n && (o[s] = "none", De.set(i, "display", n)));
                for (s = 0; s < r; s++)null != o[s] && (e[s].style.display = o[s]);
                return e
            }

            function v(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], n) : n
            }

            function y(e, t) {
                for (var n = 0, i = e.length; n < i; n++)De.set(e[n], "globalEval", !t || De.get(t[n], "globalEval"))
            }

            function b(e, t, n, i, o) {
                for (var s, r, a, l, u, c, d = t.createDocumentFragment(), p = [], h = 0,
                         f = e.length; h < f; h++)if ((s = e[h]) || 0 === s)if ("object" === pe.type(s)) pe.merge(p, s.nodeType ? [s] : s); else if (ze.test(s)) {
                    for (r = r || d.appendChild(t.createElement("div")), a = (Be.exec(s) || ["", ""])[1].toLowerCase(), l = Ue[a] || Ue._default, r.innerHTML = l[1] + pe.htmlPrefilter(s) + l[2], c = l[0]; c--;)r = r.lastChild;
                    pe.merge(p, r.childNodes), (r = d.firstChild).textContent = ""
                } else p.push(t.createTextNode(s));
                for (d.textContent = "", h = 0; s = p[h++];)if (i && pe.inArray(s, i) > -1) o && o.push(s); else if (u = pe.contains(s.ownerDocument, s), r = v(d.appendChild(s), "script"), u && y(r), n)for (c = 0; s = r[c++];)We.test(s.type || "") && n.push(s);
                return d
            }

            function w() {
                return !0
            }

            function x() {
                return !1
            }

            function T() {
                try {
                    return ee.activeElement
                } catch (e) {
                }
            }

            function C(e, t, n, i, o, s) {
                var r, a;
                if ("object" == typeof t) {
                    "string" != typeof n && (i = i || n, n = void 0);
                    for (a in t)C(e, a, n, i, t[a], s);
                    return e
                }
                if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = x; else if (!o)return e;
                return 1 === s && (r = o, o = function (e) {
                    return pe().off(e), r.apply(this, arguments)
                }, o.guid = r.guid || (r.guid = pe.guid++)), e.each(function () {
                    pe.event.add(this, t, o, i, n)
                })
            }

            function j(e, t) {
                return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
            }

            function k(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function S(e) {
                var t = et.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function E(e, t) {
                var n, i, o, s, r, a, l, u;
                if (1 === t.nodeType) {
                    if (De.hasData(e) && (s = De.access(e), r = De.set(t, s), u = s.events)) {
                        delete r.handle, r.events = {};
                        for (o in u)for (n = 0, i = u[o].length; n < i; n++)pe.event.add(t, o, u[o][n])
                    }
                    Pe.hasData(e) && (a = Pe.access(e), l = pe.extend({}, a), Pe.set(t, l))
                }
            }

            function $(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }

            function A(e, t, i, o) {
                t = ie.apply([], t);
                var s, r, a, l, u, c, d = 0, p = e.length, h = p - 1, f = t[0], m = pe.isFunction(f);
                if (m || p > 1 && "string" == typeof f && !de.checkClone && Je.test(f))return e.each(function (n) {
                    var s = e.eq(n);
                    m && (t[0] = f.call(this, n, s.html())), A(s, t, i, o)
                });
                if (p && (s = b(t, e[0].ownerDocument, !1, e, o), r = s.firstChild, 1 === s.childNodes.length && (s = r), r || o)) {
                    for (l = (a = pe.map(v(s, "script"), k)).length; d < p; d++)u = s, d !== h && (u = pe.clone(u, !0, !0), l && pe.merge(a, v(u, "script"))), i.call(e[d], u, d);
                    if (l)for (c = a[a.length - 1].ownerDocument, pe.map(a, S), d = 0; d < l; d++)u = a[d], We.test(u.type || "") && !De.access(u, "globalEval") && pe.contains(c, u) && (u.src ? pe._evalUrl && pe._evalUrl(u.src) : n(u.textContent.replace(tt, ""), c))
                }
                return e
            }

            function _(e, t, n) {
                for (var i, o = t ? pe.filter(t, e) : e,
                         s = 0; null != (i = o[s]); s++)n || 1 !== i.nodeType || pe.cleanData(v(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
                return e
            }

            function I(e, t, n) {
                var i, o, s, r, a = e.style;
                return (n = n || ot(e)) && ("" !== (r = n.getPropertyValue(t) || n[t]) || pe.contains(e.ownerDocument, e) || (r = pe.style(e, t)), !de.pixelMarginRight() && it.test(r) && nt.test(t) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
            }

            function D(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function P(e) {
                if (e in ut)return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = lt.length; n--;)if ((e = lt[n] + t) in ut)return e
            }

            function N(e, t, n) {
                var i = Oe.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }

            function M(e, t, n, i, o) {
                var s, r = 0;
                for (s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; s < 4; s += 2)"margin" === n && (r += pe.css(e, n + Le[s], !0, o)), i ? ("content" === n && (r -= pe.css(e, "padding" + Le[s], !0, o)), "margin" !== n && (r -= pe.css(e, "border" + Le[s] + "Width", !0, o))) : (r += pe.css(e, "padding" + Le[s], !0, o), "padding" !== n && (r += pe.css(e, "border" + Le[s] + "Width", !0, o)));
                return r
            }

            function F(e, t, n) {
                var i, o = !0, s = ot(e), r = "border-box" === pe.css(e, "boxSizing", !1, s);
                if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
                    if (((i = I(e, t, s)) < 0 || null == i) && (i = e.style[t]), it.test(i))return i;
                    o = r && (de.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
                }
                return i + M(e, t, n || (r ? "border" : "content"), o, s) + "px"
            }

            function O(e, t, n, i, o) {
                return new O.prototype.init(e, t, n, i, o)
            }

            function L() {
                dt && (e.requestAnimationFrame(L), pe.fx.tick())
            }

            function R() {
                return e.setTimeout(function () {
                    ct = void 0
                }), ct = pe.now()
            }

            function q(e, t) {
                var n, i = 0, o = {height: e};
                for (t = t ? 1 : 0; i < 4; i += 2 - t)n = Le[i], o["margin" + n] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e), o
            }

            function H(e, t, n) {
                for (var i, o = (B.tweeners[t] || []).concat(B.tweeners["*"]), s = 0,
                         r = o.length; s < r; s++)if (i = o[s].call(n, t, e))return i
            }

            function V(e, t) {
                var n, i, o, s, r;
                for (n in e)if (i = pe.camelCase(n), o = t[i], s = e[n], pe.isArray(s) && (o = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (r = pe.cssHooks[i]) && "expand" in r) {
                    s = r.expand(s), delete e[i];
                    for (n in s)n in e || (e[n] = s[n], t[n] = o)
                } else t[i] = o
            }

            function B(e, t, n) {
                var i, o, s = 0, r = B.prefilters.length, a = pe.Deferred().always(function () {
                    delete l.elem
                }), l = function () {
                    if (o)return !1;
                    for (var t = ct || R(), n = Math.max(0, u.startTime + u.duration - t),
                             i = 1 - (n / u.duration || 0), s = 0, r = u.tweens.length; s < r; s++)u.tweens[s].run(i);
                    return a.notifyWith(e, [u, i, n]), i < 1 && r ? n : (a.resolveWith(e, [u]), !1)
                }, u = a.promise({
                    elem: e,
                    props: pe.extend({}, t),
                    opts: pe.extend(!0, {specialEasing: {}, easing: pe.easing._default}, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ct || R(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var i = pe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function (t) {
                        var n = 0, i = t ? u.tweens.length : 0;
                        if (o)return this;
                        for (o = !0; n < i; n++)u.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                    }
                }), c = u.props;
                for (V(c, u.opts.specialEasing); s < r; s++)if (i = B.prefilters[s].call(u, e, c, u.opts))return pe.isFunction(i.stop) && (pe._queueHooks(u.elem, u.opts.queue).stop = pe.proxy(i.stop, i)), i;
                return pe.map(c, H, u), pe.isFunction(u.opts.start) && u.opts.start.call(e, u), pe.fx.timer(pe.extend(l, {
                    elem: e,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }

            function W(e) {
                return (e.match(Ee) || []).join(" ")
            }

            function U(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function z(e, t, n, i) {
                var o;
                if (pe.isArray(t)) pe.each(t, function (t, o) {
                    n || Ct.test(e) ? i(e, o) : z(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
                }); else if (n || "object" !== pe.type(t)) i(e, t); else for (o in t)z(e + "[" + o + "]", t[o], n, i)
            }

            function X(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var i, o = 0, s = t.toLowerCase().match(Ee) || [];
                    if (pe.isFunction(n))for (; i = s[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }

            function Y(e, t, n, i) {
                function o(a) {
                    var l;
                    return s[a] = !0, pe.each(e[a] || [], function (e, a) {
                        var u = a(t, n, i);
                        return "string" != typeof u || r || s[u] ? r ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
                    }), l
                }

                var s = {}, r = e === Mt;
                return o(t.dataTypes[0]) || !s["*"] && o("*")
            }

            function Q(e, t) {
                var n, i, o = pe.ajaxSettings.flatOptions || {};
                for (n in t)void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
                return i && pe.extend(!0, e, i), e
            }

            function G(e, t, n) {
                for (var i, o, s, r, a = e.contents,
                         l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)for (o in a)if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                }
                if (l[0] in n) s = l[0]; else {
                    for (o in n) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                            s = o;
                            break
                        }
                        r || (r = o)
                    }
                    s = s || r
                }
                if (s)return s !== l[0] && l.unshift(s), n[s]
            }

            function K(e, t, n, i) {
                var o, s, r, a, l, u = {}, c = e.dataTypes.slice();
                if (c[1])for (r in e.converters)u[r.toLowerCase()] = e.converters[r];
                for (s = c.shift(); s;)if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())if ("*" === s) s = l; else if ("*" !== l && l !== s) {
                    if (!(r = u[l + " " + s] || u["* " + s]))for (o in u)if ((a = o.split(" "))[1] === s && (r = u[l + " " + a[0]] || u["* " + a[0]])) {
                        !0 === r ? r = u[o] : !0 !== u[o] && (s = a[0], c.unshift(a[1]));
                        break
                    }
                    if (!0 !== r)if (r && e.throws) t = r(t); else try {
                        t = r(t)
                    } catch (e) {
                        return {state: "parsererror", error: r ? e : "No conversion from " + l + " to " + s}
                    }
                }
                return {state: "success", data: t}
            }

            function Z(e) {
                return pe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }

            var J = [], ee = e.document, te = Object.getPrototypeOf, ne = J.slice, ie = J.concat, oe = J.push,
                se = J.indexOf, re = {}, ae = re.toString, le = re.hasOwnProperty, ue = le.toString,
                ce = ue.call(Object), de = {}, pe = function (e, t) {
                    return new pe.fn.init(e, t)
                }, he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, fe = /^-ms-/, me = /-([a-z])/g, ge = function (e, t) {
                    return t.toUpperCase()
                };
            pe.fn = pe.prototype = {
                jquery: "3.1.1", constructor: pe, length: 0, toArray: function () {
                    return ne.call(this)
                }, get: function (e) {
                    return null == e ? ne.call(this) : e < 0 ? this[e + this.length] : this[e]
                }, pushStack: function (e) {
                    var t = pe.merge(this.constructor(), e);
                    return t.prevObject = this, t
                }, each: function (e) {
                    return pe.each(this, e)
                }, map: function (e) {
                    return this.pushStack(pe.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                }, slice: function () {
                    return this.pushStack(ne.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (e) {
                    var t = this.length, n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor()
                }, push: oe, sort: J.sort, splice: J.splice
            }, pe.extend = pe.fn.extend = function () {
                var e, t, n, i, o, s, r = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
                for ("boolean" == typeof r && (u = r, r = arguments[a] || {}, a++), "object" == typeof r || pe.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)if (null != (e = arguments[a]))for (t in e)n = r[t], i = e[t], r !== i && (u && i && (pe.isPlainObject(i) || (o = pe.isArray(i))) ? (o ? (o = !1, s = n && pe.isArray(n) ? n : []) : s = n && pe.isPlainObject(n) ? n : {}, r[t] = pe.extend(u, s, i)) : void 0 !== i && (r[t] = i));
                return r
            }, pe.extend({
                expando: "jQuery" + ("3.1.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                },
                noop: function () {
                },
                isFunction: function (e) {
                    return "function" === pe.type(e)
                },
                isArray: Array.isArray,
                isWindow: function (e) {
                    return null != e && e === e.window
                },
                isNumeric: function (e) {
                    var t = pe.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                },
                isPlainObject: function (e) {
                    var t, n;
                    return !(!e || "[object Object]" !== ae.call(e) || (t = te(e)) && ("function" != typeof(n = le.call(t, "constructor") && t.constructor) || ue.call(n) !== ce))
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e)return !1;
                    return !0
                },
                type: function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? re[ae.call(e)] || "object" : typeof e
                },
                globalEval: function (e) {
                    n(e)
                },
                camelCase: function (e) {
                    return e.replace(fe, "ms-").replace(me, ge)
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function (e, t) {
                    var n, o = 0;
                    if (i(e))for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++); else for (o in e)if (!1 === t.call(e[o], o, e[o]))break;
                    return e
                },
                trim: function (e) {
                    return null == e ? "" : (e + "").replace(he, "")
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (i(Object(e)) ? pe.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
                },
                inArray: function (e, t, n) {
                    return null == t ? -1 : se.call(t, e, n)
                },
                merge: function (e, t) {
                    for (var n = +t.length, i = 0, o = e.length; i < n; i++)e[o++] = t[i];
                    return e.length = o, e
                },
                grep: function (e, t, n) {
                    for (var i = [], o = 0, s = e.length, r = !n; o < s; o++)!t(e[o], o) !== r && i.push(e[o]);
                    return i
                },
                map: function (e, t, n) {
                    var o, s, r = 0, a = [];
                    if (i(e))for (o = e.length; r < o; r++)null != (s = t(e[r], r, n)) && a.push(s); else for (r in e)null != (s = t(e[r], r, n)) && a.push(s);
                    return ie.apply([], a)
                },
                guid: 1,
                proxy: function (e, t) {
                    var n, i, o;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), pe.isFunction(e))return i = ne.call(arguments, 2), o = function () {
                        return e.apply(t || this, i.concat(ne.call(arguments)))
                    }, o.guid = e.guid = e.guid || pe.guid++, o
                },
                now: Date.now,
                support: de
            }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = J[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                re["[object " + t + "]"] = t.toLowerCase()
            });
            var ve = function (e) {
                function t(e, t, n, i) {
                    var o, s, r, a, l, c, p, h = t && t.ownerDocument, f = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f)return n;
                    if (!i && ((t ? t.ownerDocument || t : R) !== I && _(t), t = t || I, P)) {
                        if (11 !== f && (l = me.exec(e)))if (o = l[1]) {
                            if (9 === f) {
                                if (!(r = t.getElementById(o)))return n;
                                if (r.id === o)return n.push(r), n
                            } else if (h && (r = h.getElementById(o)) && O(t, r) && r.id === o)return n.push(r), n
                        } else {
                            if (l[2])return G.apply(n, t.getElementsByTagName(e)), n;
                            if ((o = l[3]) && w.getElementsByClassName && t.getElementsByClassName)return G.apply(n, t.getElementsByClassName(o)), n
                        }
                        if (w.qsa && !W[e + " "] && (!N || !N.test(e))) {
                            if (1 !== f) h = t, p = e; else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((a = t.getAttribute("id")) ? a = a.replace(be, we) : t.setAttribute("id", a = L), s = (c = j(e)).length; s--;)c[s] = "#" + a + " " + d(c[s]);
                                p = c.join(","), h = ge.test(e) && u(t.parentNode) || t
                            }
                            if (p)try {
                                return G.apply(n, h.querySelectorAll(p)), n
                            } catch (e) {
                            } finally {
                                a === L && t.removeAttribute("id")
                            }
                        }
                    }
                    return S(e.replace(se, "$1"), t, n, i)
                }

                function n() {
                    function e(n, i) {
                        return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
                    }

                    var t = [];
                    return e
                }

                function i(e) {
                    return e[L] = !0, e
                }

                function o(e) {
                    var t = I.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function s(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;)x.attrHandle[n[i]] = t
                }

                function r(e, t) {
                    var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i)return i;
                    if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                    return e ? 1 : -1
                }

                function a(e) {
                    return function (t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function l(e) {
                    return i(function (t) {
                        return t = +t, i(function (n, i) {
                            for (var o, s = e([], n.length, t),
                                     r = s.length; r--;)n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }

                function u(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }

                function c() {
                }

                function d(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++)i += e[t].value;
                    return i
                }

                function p(e, t, n) {
                    var i = t.dir, o = t.next, s = o || i, r = n && "parentNode" === s, a = H++;
                    return t.first ? function (t, n, o) {
                        for (; t = t[i];)if (1 === t.nodeType || r)return e(t, n, o);
                        return !1
                    } : function (t, n, l) {
                        var u, c, d, p = [q, a];
                        if (l) {
                            for (; t = t[i];)if ((1 === t.nodeType || r) && e(t, n, l))return !0
                        } else for (; t = t[i];)if (1 === t.nodeType || r)if (d = t[L] || (t[L] = {}), c = d[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t; else {
                            if ((u = c[s]) && u[0] === q && u[1] === a)return p[2] = u[2];
                            if (c[s] = p, p[2] = e(t, n, l))return !0
                        }
                        return !1
                    }
                }

                function h(e) {
                    return e.length > 1 ? function (t, n, i) {
                        for (var o = e.length; o--;)if (!e[o](t, n, i))return !1;
                        return !0
                    } : e[0]
                }

                function f(e, n, i) {
                    for (var o = 0, s = n.length; o < s; o++)t(e, n[o], i);
                    return i
                }

                function m(e, t, n, i, o) {
                    for (var s, r = [], a = 0, l = e.length,
                             u = null != t; a < l; a++)(s = e[a]) && (n && !n(s, i, o) || (r.push(s), u && t.push(a)));
                    return r
                }

                function g(e, t, n, o, s, r) {
                    return o && !o[L] && (o = g(o)), s && !s[L] && (s = g(s, r)), i(function (i, r, a, l) {
                        var u, c, d, p = [], h = [], g = r.length, v = i || f(t || "*", a.nodeType ? [a] : a, []),
                            y = !e || !i && t ? v : m(v, p, e, a, l), b = n ? s || (i ? e : g || o) ? [] : r : y;
                        if (n && n(y, b, a, l), o)for (u = m(b, h), o(u, [], a, l), c = u.length; c--;)(d = u[c]) && (b[h[c]] = !(y[h[c]] = d));
                        if (i) {
                            if (s || e) {
                                if (s) {
                                    for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                                    s(null, b = [], u, l)
                                }
                                for (c = b.length; c--;)(d = b[c]) && (u = s ? Z(i, d) : p[c]) > -1 && (i[u] = !(r[u] = d))
                            }
                        } else b = m(b === r ? b.splice(g, b.length) : b), s ? s(null, r, b, l) : G.apply(r, b)
                    })
                }

                function v(e) {
                    for (var t, n, i, o = e.length, s = x.relative[e[0].type], r = s || x.relative[" "], a = s ? 1 : 0,
                             l = p(function (e) {
                                 return e === t
                             }, r, !0), u = p(function (e) {
                            return Z(t, e) > -1
                        }, r, !0), c = [function (e, n, i) {
                            var o = !s && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                            return t = null, o
                        }]; a < o; a++)if (n = x.relative[e[a].type]) c = [p(h(c), n)]; else {
                        if ((n = x.filter[e[a].type].apply(null, e[a].matches))[L]) {
                            for (i = ++a; i < o && !x.relative[e[i].type]; i++);
                            return g(a > 1 && h(c), a > 1 && d(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(se, "$1"), n, a < i && v(e.slice(a, i)), i < o && v(e = e.slice(i)), i < o && d(e))
                        }
                        c.push(n)
                    }
                    return h(c)
                }

                function y(e, n) {
                    var o = n.length > 0, s = e.length > 0, r = function (i, r, a, l, u) {
                        var c, d, p, h = 0, f = "0", g = i && [], v = [], y = E, b = i || s && x.find.TAG("*", u),
                            w = q += null == y ? 1 : Math.random() || .1, T = b.length;
                        for (u && (E = r === I || r || u); f !== T && null != (c = b[f]); f++) {
                            if (s && c) {
                                for (d = 0, r || c.ownerDocument === I || (_(c), a = !P); p = e[d++];)if (p(c, r || I, a)) {
                                    l.push(c);
                                    break
                                }
                                u && (q = w)
                            }
                            o && ((c = !p && c) && h--, i && g.push(c))
                        }
                        if (h += f, o && f !== h) {
                            for (d = 0; p = n[d++];)p(g, v, r, a);
                            if (i) {
                                if (h > 0)for (; f--;)g[f] || v[f] || (v[f] = Y.call(l));
                                v = m(v)
                            }
                            G.apply(l, v), u && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (q = w, E = y), g
                    };
                    return o ? i(r) : r
                }

                var b, w, x, T, C, j, k, S, E, $, A, _, I, D, P, N, M, F, O, L = "sizzle" + 1 * new Date,
                    R = e.document, q = 0, H = 0, V = n(), B = n(), W = n(), U = function (e, t) {
                        return e === t && (A = !0), 0
                    }, z = {}.hasOwnProperty, X = [], Y = X.pop, Q = X.push, G = X.push, K = X.slice, Z = function (e, t) {
                        for (var n = 0, i = e.length; n < i; n++)if (e[n] === t)return n;
                        return -1
                    },
                    J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                    ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                    oe = new RegExp(ee + "+", "g"),
                    se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                    re = new RegExp("^" + ee + "*," + ee + "*"),
                    ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                    le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ue = new RegExp(ie),
                    ce = new RegExp("^" + te + "$"), de = {
                        ID: new RegExp("^#(" + te + ")"),
                        CLASS: new RegExp("^\\.(" + te + ")"),
                        TAG: new RegExp("^(" + te + "|[*])"),
                        ATTR: new RegExp("^" + ne),
                        PSEUDO: new RegExp("^" + ie),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + J + ")$", "i"),
                        needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                    }, pe = /^(?:input|select|textarea|button)$/i, he = /^h\d$/i, fe = /^[^{]+\{\s*\[native \w/,
                    me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/,
                    ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function (e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    }, be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, we = function (e, t) {
                        return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    }, xe = function () {
                        _()
                    }, Te = p(function (e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {dir: "parentNode", next: "legend"});
                try {
                    G.apply(X = K.call(R.childNodes), R.childNodes), X[R.childNodes.length].nodeType
                } catch (e) {
                    G = {
                        apply: X.length ? function (e, t) {
                            Q.apply(e, K.call(t))
                        } : function (e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                w = t.support = {}, C = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, _ = t.setDocument = function (e) {
                    var t, n, i = e ? e.ownerDocument || e : R;
                    return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, D = I.documentElement, P = !C(I), R !== I && (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), w.attributes = o(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), w.getElementsByTagName = o(function (e) {
                        return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
                    }), w.getElementsByClassName = fe.test(I.getElementsByClassName), w.getById = o(function (e) {
                        return D.appendChild(e).id = L, !I.getElementsByName || !I.getElementsByName(L).length
                    }), w.getById ? (x.filter.ID = function (e) {
                        var t = e.replace(ve, ye);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }, x.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && P) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (x.filter.ID = function (e) {
                        var t = e.replace(ve, ye);
                        return function (e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, x.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && P) {
                            var n, i, o, s = t.getElementById(e);
                            if (s) {
                                if ((n = s.getAttributeNode("id")) && n.value === e)return [s];
                                for (o = t.getElementsByName(e), i = 0; s = o[i++];)if ((n = s.getAttributeNode("id")) && n.value === e)return [s]
                            }
                            return []
                        }
                    }), x.find.TAG = w.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, i = [], o = 0, s = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = s[o++];)1 === n.nodeType && i.push(n);
                            return i
                        }
                        return s
                    }, x.find.CLASS = w.getElementsByClassName && function (e, t) {
                            if (void 0 !== t.getElementsByClassName && P)return t.getElementsByClassName(e)
                        }, M = [], N = [], (w.qsa = fe.test(I.querySelectorAll)) && (o(function (e) {
                        D.appendChild(e).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + L + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + L + "+*").length || N.push(".#.+[+~]")
                    }), o(function (e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = I.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && N.push(":enabled", ":disabled"), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
                    })), (w.matchesSelector = fe.test(F = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function (e) {
                        w.disconnectedMatch = F.call(e, "*"), F.call(e, "[s!='']:x"), M.push("!=", ie)
                    }), N = N.length && new RegExp(N.join("|")), M = M.length && new RegExp(M.join("|")), t = fe.test(D.compareDocumentPosition), O = t || fe.test(D.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function (e, t) {
                        if (t)for (; t = t.parentNode;)if (t === e)return !0;
                        return !1
                    }, U = t ? function (e, t) {
                        if (e === t)return A = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === R && O(R, e) ? -1 : t === I || t.ownerDocument === R && O(R, t) ? 1 : $ ? Z($, e) - Z($, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t)return A = !0, 0;
                        var n, i = 0, o = e.parentNode, s = t.parentNode, a = [e], l = [t];
                        if (!o || !s)return e === I ? -1 : t === I ? 1 : o ? -1 : s ? 1 : $ ? Z($, e) - Z($, t) : 0;
                        if (o === s)return r(e, t);
                        for (n = e; n = n.parentNode;)a.unshift(n);
                        for (n = t; n = n.parentNode;)l.unshift(n);
                        for (; a[i] === l[i];)i++;
                        return i ? r(a[i], l[i]) : a[i] === R ? -1 : l[i] === R ? 1 : 0
                    }, I) : I
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== I && _(e), n = n.replace(le, "='$1']"), w.matchesSelector && P && !W[n + " "] && (!M || !M.test(n)) && (!N || !N.test(n)))try {
                        var i = F.call(e, n);
                        if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
                    } catch (e) {
                    }
                    return t(n, I, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== I && _(e), O(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== I && _(e);
                    var n = x.attrHandle[t.toLowerCase()],
                        i = n && z.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                    return void 0 !== i ? i : w.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, t.escape = function (e) {
                    return (e + "").replace(be, we)
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [], i = 0, o = 0;
                    if (A = !w.detectDuplicates, $ = !w.sortStable && e.slice(0), e.sort(U), A) {
                        for (; t = e[o++];)t === e[o] && (i = n.push(o));
                        for (; i--;)e.splice(n[i], 1)
                    }
                    return $ = null, e
                }, T = t.getText = function (e) {
                    var t, n = "", i = 0, o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent)return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)n += T(e)
                        } else if (3 === o || 4 === o)return e.nodeValue
                    } else for (; t = e[i++];)n += T(t);
                    return n
                }, (x = t.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: de,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = j(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(ve, ye).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = V[e + " "];
                            return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && V(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                        }, ATTR: function (e, n, i) {
                            return function (o) {
                                var s = t.attr(o, e);
                                return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                            }
                        }, CHILD: function (e, t, n, i, o) {
                            var s = "nth" !== e.slice(0, 3), r = "last" !== e.slice(-4), a = "of-type" === t;
                            return 1 === i && 0 === o ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, l) {
                                var u, c, d, p, h, f, m = s !== r ? "nextSibling" : "previousSibling", g = t.parentNode,
                                    v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                                if (g) {
                                    if (s) {
                                        for (; m;) {
                                            for (p = t; p = p[m];)if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)return !1;
                                            f = m = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [r ? g.firstChild : g.lastChild], r && y) {
                                        for (b = (h = (u = (c = (d = (p = g)[L] || (p[L] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === q && u[1]) && u[2], p = h && g.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop();)if (1 === p.nodeType && ++b && p === t) {
                                            c[e] = [q, h, b];
                                            break
                                        }
                                    } else if (y && (p = t, d = p[L] || (p[L] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[e] || [], h = u[0] === q && u[1], b = h), !1 === b)for (; (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (d = p[L] || (p[L] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), c[e] = [q, b]), p !== t)););
                                    return (b -= o) === i || b % i == 0 && b / i >= 0
                                }
                            }
                        }, PSEUDO: function (e, n) {
                            var o,
                                s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return s[L] ? s(n) : s.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                                for (var i, o = s(e, n), r = o.length; r--;)i = Z(e, o[r]), e[i] = !(t[i] = o[r])
                            }) : function (e) {
                                return s(e, 0, o)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: i(function (e) {
                            var t = [], n = [], o = k(e.replace(se, "$1"));
                            return o[L] ? i(function (e, t, n, i) {
                                for (var s, r = o(e, null, i, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
                            }) : function (e, i, s) {
                                return t[0] = e, o(t, null, s, n), t[0] = null, !n.pop()
                            }
                        }), has: i(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }), contains: i(function (e) {
                            return e = e.replace(ve, ye), function (t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                        }), lang: i(function (e) {
                            return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(), function (t) {
                                var n;
                                do {
                                    if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }), target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        }, root: function (e) {
                            return e === D
                        }, focus: function (e) {
                            return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: a(!1), disabled: a(!0), checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                            return !0
                        }, parent: function (e) {
                            return !x.pseudos.empty(e)
                        }, header: function (e) {
                            return he.test(e.nodeName)
                        }, input: function (e) {
                            return pe.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: l(function () {
                            return [0]
                        }), last: l(function (e, t) {
                            return [t - 1]
                        }), eq: l(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }), even: l(function (e, t) {
                            for (var n = 0; n < t; n += 2)e.push(n);
                            return e
                        }), odd: l(function (e, t) {
                            for (var n = 1; n < t; n += 2)e.push(n);
                            return e
                        }), lt: l(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; --i >= 0;)e.push(i);
                            return e
                        }), gt: l(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;)e.push(i);
                            return e
                        })
                    }
                }).pseudos.nth = x.pseudos.eq;
                for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})x.pseudos[b] = function (e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }(b);
                for (b in{submit: !0, reset: !0})x.pseudos[b] = function (e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }(b);
                return c.prototype = x.filters = x.pseudos, x.setFilters = new c, j = t.tokenize = function (e, n) {
                    var i, o, s, r, a, l, u, c = B[e + " "];
                    if (c)return n ? 0 : c.slice(0);
                    for (a = e, l = [], u = x.preFilter; a;) {
                        i && !(o = re.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = ae.exec(a)) && (i = o.shift(), s.push({
                            value: i,
                            type: o[0].replace(se, " ")
                        }), a = a.slice(i.length));
                        for (r in x.filter)!(o = de[r].exec(a)) || u[r] && !(o = u[r](o)) || (i = o.shift(), s.push({
                            value: i,
                            type: r,
                            matches: o
                        }), a = a.slice(i.length));
                        if (!i)break
                    }
                    return n ? a.length : a ? t.error(e) : B(e, l).slice(0)
                }, k = t.compile = function (e, t) {
                    var n, i = [], o = [], s = W[e + " "];
                    if (!s) {
                        for (t || (t = j(e)), n = t.length; n--;)s = v(t[n]), s[L] ? i.push(s) : o.push(s);
                        (s = W(e, y(o, i))).selector = e
                    }
                    return s
                }, S = t.select = function (e, t, n, i) {
                    var o, s, r, a, l, c = "function" == typeof e && e, p = !i && j(e = c.selector || e);
                    if (n = n || [], 1 === p.length) {
                        if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (r = s[0]).type && 9 === t.nodeType && P && x.relative[s[1].type]) {
                            if (!(t = (x.find.ID(r.matches[0].replace(ve, ye), t) || [])[0]))return n;
                            c && (t = t.parentNode), e = e.slice(s.shift().value.length)
                        }
                        for (o = de.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o], !x.relative[a = r.type]);)if ((l = x.find[a]) && (i = l(r.matches[0].replace(ve, ye), ge.test(s[0].type) && u(t.parentNode) || t))) {
                            if (s.splice(o, 1), !(e = i.length && d(s)))return G.apply(n, i), n;
                            break
                        }
                    }
                    return (c || k(e, p))(i, t, !P, n, !t || ge.test(e) && u(t.parentNode) || t), n
                }, w.sortStable = L.split("").sort(U).join("") === L, w.detectDuplicates = !!A, _(), w.sortDetached = o(function (e) {
                    return 1 & e.compareDocumentPosition(I.createElement("fieldset"))
                }), o(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || s("type|href|height|width", function (e, t, n) {
                    if (!n)return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), w.attributes && o(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || s("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())return e.defaultValue
                }), o(function (e) {
                    return null == e.getAttribute("disabled")
                }) || s(J, function (e, t, n) {
                    var i;
                    if (!n)return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), t
            }(e);
            pe.find = ve, pe.expr = ve.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ve.uniqueSort, pe.text = ve.getText, pe.isXMLDoc = ve.isXML, pe.contains = ve.contains, pe.escapeSelector = ve.escape;
            var ye = function (e, t, n) {
                    for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                        if (o && pe(e).is(n))break;
                        i.push(e)
                    }
                    return i
                }, be = function (e, t) {
                    for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
                    return n
                }, we = pe.expr.match.needsContext, xe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
                Te = /^.[^:#\[\.,]*$/;
            pe.filter = function (e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, pe.fn.extend({
                find: function (e) {
                    var t, n, i = this.length, o = this;
                    if ("string" != typeof e)return this.pushStack(pe(e).filter(function () {
                        for (t = 0; t < i; t++)if (pe.contains(o[t], this))return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < i; t++)pe.find(e, o[t], n);
                    return i > 1 ? pe.uniqueSort(n) : n
                }, filter: function (e) {
                    return this.pushStack(o(this, e || [], !1))
                }, not: function (e) {
                    return this.pushStack(o(this, e || [], !0))
                }, is: function (e) {
                    return !!o(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
                }
            });
            var Ce, je = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (pe.fn.init = function (e, t, n) {
                var i, o;
                if (!e)return this;
                if (n = n || Ce, "string" == typeof e) {
                    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : je.exec(e)) || !i[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ee, !0)), xe.test(i[1]) && pe.isPlainObject(t))for (i in t)pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return (o = ee.getElementById(i[2])) && (this[0] = o, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : pe.makeArray(e, this)
            }).prototype = pe.fn, Ce = pe(ee);
            var ke = /^(?:parents|prev(?:Until|All))/, Se = {children: !0, contents: !0, next: !0, prev: !0};
            pe.fn.extend({
                has: function (e) {
                    var t = pe(e, this), n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++)if (pe.contains(this, t[e]))return !0
                    })
                }, closest: function (e, t) {
                    var n, i = 0, o = this.length, s = [], r = "string" != typeof e && pe(e);
                    if (!we.test(e))for (; i < o; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
                    return this.pushStack(s.length > 1 ? pe.uniqueSort(s) : s)
                }, index: function (e) {
                    return e ? "string" == typeof e ? se.call(pe(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (e, t) {
                    return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
                }, addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), pe.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                }, parents: function (e) {
                    return ye(e, "parentNode")
                }, parentsUntil: function (e, t, n) {
                    return ye(e, "parentNode", n)
                }, next: function (e) {
                    return s(e, "nextSibling")
                }, prev: function (e) {
                    return s(e, "previousSibling")
                }, nextAll: function (e) {
                    return ye(e, "nextSibling")
                }, prevAll: function (e) {
                    return ye(e, "previousSibling")
                }, nextUntil: function (e, t, n) {
                    return ye(e, "nextSibling", n)
                }, prevUntil: function (e, t, n) {
                    return ye(e, "previousSibling", n)
                }, siblings: function (e) {
                    return be((e.parentNode || {}).firstChild, e)
                }, children: function (e) {
                    return be(e.firstChild)
                }, contents: function (e) {
                    return e.contentDocument || pe.merge([], e.childNodes)
                }
            }, function (e, t) {
                pe.fn[e] = function (n, i) {
                    var o = pe.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = pe.filter(i, o)), this.length > 1 && (Se[e] || pe.uniqueSort(o), ke.test(e) && o.reverse()), this.pushStack(o)
                }
            });
            var Ee = /[^\x20\t\r\n\f]+/g;
            pe.Callbacks = function (e) {
                e = "string" == typeof e ? r(e) : pe.extend({}, e);
                var t, n, i, o, s = [], a = [], l = -1, u = function () {
                    for (o = e.once, i = t = !0; a.length; l = -1)for (n = a.shift(); ++l < s.length;)!1 === s[l].apply(n[0], n[1]) && e.stopOnFalse && (l = s.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (s = n ? [] : "")
                }, c = {
                    add: function () {
                        return s && (n && !t && (l = s.length - 1, a.push(n)), function t(n) {
                            pe.each(n, function (n, i) {
                                pe.isFunction(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== pe.type(i) && t(i)
                            })
                        }(arguments), n && !t && u()), this
                    }, remove: function () {
                        return pe.each(arguments, function (e, t) {
                            for (var n; (n = pe.inArray(t, s, n)) > -1;)s.splice(n, 1), n <= l && l--
                        }), this
                    }, has: function (e) {
                        return e ? pe.inArray(e, s) > -1 : s.length > 0
                    }, empty: function () {
                        return s && (s = []), this
                    }, disable: function () {
                        return o = a = [], s = n = "", this
                    }, disabled: function () {
                        return !s
                    }, lock: function () {
                        return o = a = [], n || t || (s = n = ""), this
                    }, locked: function () {
                        return !!o
                    }, fireWith: function (e, n) {
                        return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                    }, fire: function () {
                        return c.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!i
                    }
                };
                return c
            }, pe.extend({
                Deferred: function (t) {
                    var n = [["notify", "progress", pe.Callbacks("memory"), pe.Callbacks("memory"), 2], ["resolve", "done", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 1, "rejected"]],
                        i = "pending", o = {
                            state: function () {
                                return i
                            }, always: function () {
                                return s.done(arguments).fail(arguments), this
                            }, catch: function (e) {
                                return o.then(null, e)
                            }, pipe: function () {
                                var e = arguments;
                                return pe.Deferred(function (t) {
                                    pe.each(n, function (n, i) {
                                        var o = pe.isFunction(e[i[4]]) && e[i[4]];
                                        s[i[1]](function () {
                                            var e = o && o.apply(this, arguments);
                                            e && pe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            }, then: function (t, i, o) {
                                function s(t, n, i, o) {
                                    return function () {
                                        var u = this, c = arguments, d = function () {
                                            var e, d;
                                            if (!(t < r)) {
                                                if ((e = i.apply(u, c)) === n.promise())throw new TypeError("Thenable self-resolution");
                                                d = e && ("object" == typeof e || "function" == typeof e) && e.then, pe.isFunction(d) ? o ? d.call(e, s(r, n, a, o), s(r, n, l, o)) : (r++, d.call(e, s(r, n, a, o), s(r, n, l, o), s(r, n, a, n.notifyWith))) : (i !== a && (u = void 0, c = [e]), (o || n.resolveWith)(u, c))
                                            }
                                        }, p = o ? d : function () {
                                            try {
                                                d()
                                            } catch (e) {
                                                pe.Deferred.exceptionHook && pe.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= r && (i !== l && (u = void 0, c = [e]), n.rejectWith(u, c))
                                            }
                                        };
                                        t ? p() : (pe.Deferred.getStackHook && (p.stackTrace = pe.Deferred.getStackHook()), e.setTimeout(p))
                                    }
                                }

                                var r = 0;
                                return pe.Deferred(function (e) {
                                    n[0][3].add(s(0, e, pe.isFunction(o) ? o : a, e.notifyWith)), n[1][3].add(s(0, e, pe.isFunction(t) ? t : a)), n[2][3].add(s(0, e, pe.isFunction(i) ? i : l))
                                }).promise()
                            }, promise: function (e) {
                                return null != e ? pe.extend(e, o) : o
                            }
                        }, s = {};
                    return pe.each(n, function (e, t) {
                        var r = t[2], a = t[5];
                        o[t[1]] = r.add, a && r.add(function () {
                            i = a
                        }, n[3 - e][2].disable, n[0][2].lock), r.add(t[3].fire), s[t[0]] = function () {
                            return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                        }, s[t[0] + "With"] = r.fireWith
                    }), o.promise(s), t && t.call(s, s), s
                }, when: function (e) {
                    var t = arguments.length, n = t, i = Array(n), o = ne.call(arguments), s = pe.Deferred(),
                        r = function (e) {
                            return function (n) {
                                i[e] = this, o[e] = arguments.length > 1 ? ne.call(arguments) : n, --t || s.resolveWith(i, o)
                            }
                        };
                    if (t <= 1 && (u(e, s.done(r(n)).resolve, s.reject), "pending" === s.state() || pe.isFunction(o[n] && o[n].then)))return s.then();
                    for (; n--;)u(o[n], r(n), s.reject);
                    return s.promise()
                }
            });
            var $e = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            pe.Deferred.exceptionHook = function (t, n) {
                e.console && e.console.warn && t && $e.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
            }, pe.readyException = function (t) {
                e.setTimeout(function () {
                    throw t
                })
            };
            var Ae = pe.Deferred();
            pe.fn.ready = function (e) {
                return Ae.then(e).catch(function (e) {
                    pe.readyException(e)
                }), this
            }, pe.extend({
                isReady: !1, readyWait: 1, holdReady: function (e) {
                    e ? pe.readyWait++ : pe.ready(!0)
                }, ready: function (e) {
                    (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || Ae.resolveWith(ee, [pe]))
                }
            }), pe.ready.then = Ae.then, "complete" === ee.readyState || "loading" !== ee.readyState && !ee.documentElement.doScroll ? e.setTimeout(pe.ready) : (ee.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
            var _e = function (e, t, n, i, o, s, r) {
                var a = 0, l = e.length, u = null == n;
                if ("object" === pe.type(n)) {
                    o = !0;
                    for (a in n)_e(e, t, a, n[a], !0, s, r)
                } else if (void 0 !== i && (o = !0, pe.isFunction(i) || (r = !0), u && (r ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                        return u.call(pe(e), n)
                    })), t))for (; a < l; a++)t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
                return o ? e : u ? t.call(e) : l ? t(e[0], n) : s
            }, Ie = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
            d.uid = 1, d.prototype = {
                cache: function (e) {
                    var t = e[this.expando];
                    return t || (t = {}, Ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                }, set: function (e, t, n) {
                    var i, o = this.cache(e);
                    if ("string" == typeof t) o[pe.camelCase(t)] = n; else for (i in t)o[pe.camelCase(i)] = t[i];
                    return o
                }, get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][pe.camelCase(t)]
                }, access: function (e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                }, remove: function (e, t) {
                    var n, i = e[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== t) {
                            pe.isArray(t) ? t = t.map(pe.camelCase) : (t = pe.camelCase(t), t = t in i ? [t] : t.match(Ee) || []), n = t.length;
                            for (; n--;)delete i[t[n]]
                        }
                        (void 0 === t || pe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                }, hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !pe.isEmptyObject(t)
                }
            };
            var De = new d, Pe = new d, Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Me = /[A-Z]/g;
            pe.extend({
                hasData: function (e) {
                    return Pe.hasData(e) || De.hasData(e)
                }, data: function (e, t, n) {
                    return Pe.access(e, t, n)
                }, removeData: function (e, t) {
                    Pe.remove(e, t)
                }, _data: function (e, t, n) {
                    return De.access(e, t, n)
                }, _removeData: function (e, t) {
                    De.remove(e, t)
                }
            }), pe.fn.extend({
                data: function (e, t) {
                    var n, i, o, s = this[0], r = s && s.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = Pe.get(s), 1 === s.nodeType && !De.get(s, "hasDataAttrs"))) {
                            for (n = r.length; n--;)r[n] && 0 === (i = r[n].name).indexOf("data-") && (i = pe.camelCase(i.slice(5)), h(s, i, o[i]));
                            De.set(s, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function () {
                        Pe.set(this, e)
                    }) : _e(this, function (t) {
                        var n;
                        if (s && void 0 === t) {
                            if (void 0 !== (n = Pe.get(s, e)))return n;
                            if (void 0 !== (n = h(s, e)))return n
                        } else this.each(function () {
                            Pe.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                }, removeData: function (e) {
                    return this.each(function () {
                        Pe.remove(this, e)
                    })
                }
            }), pe.extend({
                queue: function (e, t, n) {
                    var i;
                    if (e)return t = (t || "fx") + "queue", i = De.get(e, t), n && (!i || pe.isArray(n) ? i = De.access(e, t, pe.makeArray(n)) : i.push(n)), i || []
                }, dequeue: function (e, t) {
                    t = t || "fx";
                    var n = pe.queue(e, t), i = n.length, o = n.shift(), s = pe._queueHooks(e, t);
                    "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete s.stop, o.call(e, function () {
                        pe.dequeue(e, t)
                    }, s)), !i && s && s.empty.fire()
                }, _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return De.get(e, n) || De.access(e, n, {
                            empty: pe.Callbacks("once memory").add(function () {
                                De.remove(e, [t + "queue", n])
                            })
                        })
                }
            }), pe.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = pe.queue(this, e, t);
                        pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                    })
                }, dequeue: function (e) {
                    return this.each(function () {
                        pe.dequeue(this, e)
                    })
                }, clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                }, promise: function (e, t) {
                    var n, i = 1, o = pe.Deferred(), s = this, r = this.length, a = function () {
                        --i || o.resolveWith(s, [s])
                    };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(n = De.get(s[r], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                    return a(), o.promise(t)
                }
            });
            var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Oe = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"), Le = ["Top", "Right", "Bottom", "Left"],
                Re = function (e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && pe.contains(e.ownerDocument, e) && "none" === pe.css(e, "display")
                }, qe = function (e, t, n, i) {
                    var o, s, r = {};
                    for (s in t)r[s] = e.style[s], e.style[s] = t[s];
                    o = n.apply(e, i || []);
                    for (s in t)e.style[s] = r[s];
                    return o
                }, He = {};
            pe.fn.extend({
                show: function () {
                    return g(this, !0)
                }, hide: function () {
                    return g(this)
                }, toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        Re(this) ? pe(this).show() : pe(this).hide()
                    })
                }
            });
            var Ve = /^(?:checkbox|radio)$/i, Be = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, We = /^$|\/(?:java|ecma)script/i,
                Ue = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td;
            var ze = /<|&#?\w+;/;
            !function () {
                var e = ee.createDocumentFragment().appendChild(ee.createElement("div")), t = ee.createElement("input");
                t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
            }();
            var Xe = ee.documentElement, Ye = /^key/, Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ge = /^([^.]*)(?:\.(.+)|)/;
            pe.event = {
                global: {}, add: function (e, t, n, i, o) {
                    var s, r, a, l, u, c, d, p, h, f, m, g = De.get(e);
                    if (g)for (n.handler && (s = n, n = s.handler, o = s.selector), o && pe.find.matchesSelector(Xe, o), n.guid || (n.guid = pe.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function (t) {
                        return void 0 !== pe && pe.event.triggered !== t.type ? pe.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(Ee) || [""], u = t.length; u--;)a = Ge.exec(t[u]) || [], h = m = a[1], f = (a[2] || "").split(".").sort(), h && (d = pe.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = pe.event.special[h] || {}, c = pe.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && pe.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, s), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, f, r) || e.addEventListener && e.addEventListener(h, r)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), pe.event.global[h] = !0)
                }, remove: function (e, t, n, i, o) {
                    var s, r, a, l, u, c, d, p, h, f, m, g = De.hasData(e) && De.get(e);
                    if (g && (l = g.events)) {
                        for (u = (t = (t || "").match(Ee) || [""]).length; u--;)if (a = Ge.exec(t[u]) || [], h = m = a[1], f = (a[2] || "").split(".").sort(), h) {
                            for (d = pe.event.special[h] || {}, p = l[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;)c = p[s], !o && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(s, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
                            r && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || pe.removeEvent(e, h, g.handle), delete l[h])
                        } else for (h in l)pe.event.remove(e, h + t[u], n, i, !0);
                        pe.isEmptyObject(l) && De.remove(e, "handle events")
                    }
                }, dispatch: function (e) {
                    var t, n, i, o, s, r, a = pe.event.fix(e), l = new Array(arguments.length),
                        u = (De.get(this, "events") || {})[a.type] || [], c = pe.event.special[a.type] || {};
                    for (l[0] = a, t = 1; t < arguments.length; t++)l[t] = arguments[t];
                    if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                        for (r = pe.event.handlers.call(this, a, u), t = 0; (o = r[t++]) && !a.isPropagationStopped();)for (a.currentTarget = o.elem, n = 0; (s = o.handlers[n++]) && !a.isImmediatePropagationStopped();)a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (i = ((pe.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, a), a.result
                    }
                }, handlers: function (e, t) {
                    var n, i, o, s, r, a = [], l = t.delegateCount, u = e.target;
                    if (l && u.nodeType && !("click" === e.type && e.button >= 1))for (; u !== this; u = u.parentNode || this)if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (s = [], r = {}, n = 0; n < l; n++)i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? pe(o, this).index(u) > -1 : pe.find(o, this, null, [u]).length), r[o] && s.push(i);
                        s.length && a.push({elem: u, handlers: s})
                    }
                    return u = this, l < t.length && a.push({elem: u, handlers: t.slice(l)}), a
                }, addProp: function (e, t) {
                    Object.defineProperty(pe.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: pe.isFunction(t) ? function () {
                            if (this.originalEvent)return t(this.originalEvent)
                        } : function () {
                            if (this.originalEvent)return this.originalEvent[e]
                        },
                        set: function (t) {
                            Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                        }
                    })
                }, fix: function (e) {
                    return e[pe.expando] ? e : new pe.Event(e)
                }, special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            if (this !== T() && this.focus)return this.focus(), !1
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            if (this === T() && this.blur)return this.blur(), !1
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && pe.nodeName(this, "input"))return this.click(), !1
                        }, _default: function (e) {
                            return pe.nodeName(e.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, pe.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, pe.Event = function (e, t) {
                return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : x, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t)
            }, pe.Event.prototype = {
                constructor: pe.Event,
                isDefaultPrevented: x,
                isPropagationStopped: x,
                isImmediatePropagationStopped: x,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, pe.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && Ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, pe.event.addProp), pe.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, t) {
                pe.event.special[e] = {
                    delegateType: t, bindType: t, handle: function (e) {
                        var n, i = this, o = e.relatedTarget, s = e.handleObj;
                        return o && (o === i || pe.contains(i, o)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), pe.fn.extend({
                on: function (e, t, n, i) {
                    return C(this, e, t, n, i)
                }, one: function (e, t, n, i) {
                    return C(this, e, t, n, i, 1)
                }, off: function (e, t, n) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj)return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof e) {
                        for (o in e)this.off(o, t, e[o]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = x), this.each(function () {
                        pe.event.remove(this, e, n, t)
                    })
                }
            });
            var Ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Ze = /<script|<style|<link/i, Je = /checked\s*(?:[^=]|=\s*.checked.)/i, et = /^true\/(.*)/,
                tt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            pe.extend({
                htmlPrefilter: function (e) {
                    return e.replace(Ke, "<$1></$2>")
                }, clone: function (e, t, n) {
                    var i, o, s, r, a = e.cloneNode(!0), l = pe.contains(e.ownerDocument, e);
                    if (!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))for (r = v(a), s = v(e), i = 0, o = s.length; i < o; i++)$(s[i], r[i]);
                    if (t)if (n)for (s = s || v(e), r = r || v(a), i = 0, o = s.length; i < o; i++)E(s[i], r[i]); else E(e, a);
                    return (r = v(a, "script")).length > 0 && y(r, !l && v(e, "script")), a
                }, cleanData: function (e) {
                    for (var t, n, i, o = pe.event.special, s = 0; void 0 !== (n = e[s]); s++)if (Ie(n)) {
                        if (t = n[De.expando]) {
                            if (t.events)for (i in t.events)o[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, t.handle);
                            n[De.expando] = void 0
                        }
                        n[Pe.expando] && (n[Pe.expando] = void 0)
                    }
                }
            }), pe.fn.extend({
                detach: function (e) {
                    return _(this, e, !0)
                }, remove: function (e) {
                    return _(this, e)
                }, text: function (e) {
                    return _e(this, function (e) {
                        return void 0 === e ? pe.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                }, append: function () {
                    return A(this, arguments, function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || j(this, e).appendChild(e)
                    })
                }, prepend: function () {
                    return A(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = j(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                }, before: function () {
                    return A(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                }, after: function () {
                    return A(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                }, empty: function () {
                    for (var e,
                             t = 0; null != (e = this[t]); t++)1 === e.nodeType && (pe.cleanData(v(e, !1)), e.textContent = "");
                    return this
                }, clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function () {
                        return pe.clone(this, e, t)
                    })
                }, html: function (e) {
                    return _e(this, function (e) {
                        var t = this[0] || {}, n = 0, i = this.length;
                        if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                        if ("string" == typeof e && !Ze.test(e) && !Ue[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = pe.htmlPrefilter(e);
                            try {
                                for (; n < i; n++)1 === (t = this[n] || {}).nodeType && (pe.cleanData(v(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {
                            }
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                }, replaceWith: function () {
                    var e = [];
                    return A(this, arguments, function (t) {
                        var n = this.parentNode;
                        pe.inArray(this, e) < 0 && (pe.cleanData(v(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), pe.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                pe.fn[e] = function (e) {
                    for (var n, i = [], o = pe(e), s = o.length - 1,
                             r = 0; r <= s; r++)n = r === s ? this : this.clone(!0), pe(o[r])[t](n), oe.apply(i, n.get());
                    return this.pushStack(i)
                }
            });
            var nt = /^margin/, it = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"), ot = function (t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t)
            };
            !function () {
                function t() {
                    if (a) {
                        a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Xe.appendChild(r);
                        var t = e.getComputedStyle(a);
                        n = "1%" !== t.top, s = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Xe.removeChild(r), a = null
                    }
                }

                var n, i, o, s, r = ee.createElement("div"), a = ee.createElement("div");
                a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), pe.extend(de, {
                    pixelPosition: function () {
                        return t(), n
                    }, boxSizingReliable: function () {
                        return t(), i
                    }, pixelMarginRight: function () {
                        return t(), o
                    }, reliableMarginLeft: function () {
                        return t(), s
                    }
                }))
            }();
            var st = /^(none|table(?!-c[ea]).+)/, rt = {position: "absolute", visibility: "hidden", display: "block"},
                at = {letterSpacing: "0", fontWeight: "400"}, lt = ["Webkit", "Moz", "ms"],
                ut = ee.createElement("div").style;
            pe.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = I(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {float: "cssFloat"},
                style: function (e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, s, r, a = pe.camelCase(t), l = e.style;
                        return t = pe.cssProps[a] || (pe.cssProps[a] = P(a) || a), r = pe.cssHooks[t] || pe.cssHooks[a], void 0 === n ? r && "get" in r && void 0 !== (o = r.get(e, !1, i)) ? o : l[t] : ("string" === (s = typeof n) && (o = Oe.exec(n)) && o[1] && (n = f(e, t, o), s = "number"), void(null != n && n === n && ("number" === s && (n += o && o[3] || (pe.cssNumber[a] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, i)) || (l[t] = n))))
                    }
                },
                css: function (e, t, n, i) {
                    var o, s, r, a = pe.camelCase(t);
                    return t = pe.cssProps[a] || (pe.cssProps[a] = P(a) || a), (r = pe.cssHooks[t] || pe.cssHooks[a]) && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = I(e, t, i)), "normal" === o && t in at && (o = at[t]), "" === n || n ? (s = parseFloat(o), !0 === n || isFinite(s) ? s || 0 : o) : o
                }
            }), pe.each(["height", "width"], function (e, t) {
                pe.cssHooks[t] = {
                    get: function (e, n, i) {
                        if (n)return !st.test(pe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, i) : qe(e, rt, function () {
                            return F(e, t, i)
                        })
                    }, set: function (e, n, i) {
                        var o, s = i && ot(e), r = i && M(e, t, i, "border-box" === pe.css(e, "boxSizing", !1, s), s);
                        return r && (o = Oe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = pe.css(e, t)), N(e, n, r)
                    }
                }
            }), pe.cssHooks.marginLeft = D(de.reliableMarginLeft, function (e, t) {
                if (t)return (parseFloat(I(e, "marginLeft")) || e.getBoundingClientRect().left - qe(e, {marginLeft: 0}, function () {
                        return e.getBoundingClientRect().left
                    })) + "px"
            }), pe.each({margin: "", padding: "", border: "Width"}, function (e, t) {
                pe.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var i = 0, o = {},
                                 s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)o[e + Le[i] + t] = s[i] || s[i - 2] || s[0];
                        return o
                    }
                }, nt.test(e) || (pe.cssHooks[e + t].set = N)
            }), pe.fn.extend({
                css: function (e, t) {
                    return _e(this, function (e, t, n) {
                        var i, o, s = {}, r = 0;
                        if (pe.isArray(t)) {
                            for (i = ot(e), o = t.length; r < o; r++)s[t[r]] = pe.css(e, t[r], !1, i);
                            return s
                        }
                        return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }), pe.Tween = O, O.prototype = {
                constructor: O, init: function (e, t, n, i, o, s) {
                    this.elem = e, this.prop = n, this.easing = o || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (pe.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var e = O.propHooks[this.prop];
                    return e && e.get ? e.get(this) : O.propHooks._default.get(this)
                }, run: function (e) {
                    var t, n = O.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
                }
            }, O.prototype.init.prototype = O.prototype, O.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                    }, set: function (e) {
                        pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, pe.easing = {
                linear: function (e) {
                    return e
                }, swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }, _default: "swing"
            }, pe.fx = O.prototype.init, pe.fx.step = {};
            var ct, dt, pt = /^(?:toggle|show|hide)$/, ht = /queueHooks$/;
            pe.Animation = pe.extend(B, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return f(n.elem, e, Oe.exec(t), n), n
                    }]
                }, tweener: function (e, t) {
                    pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ee);
                    for (var n, i = 0,
                             o = e.length; i < o; i++)n = e[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(t)
                }, prefilters: [function (e, t, n) {
                    var i, o, s, r, a, l, u, c, d = "width" in t || "height" in t, p = this, h = {}, f = e.style,
                        m = e.nodeType && Re(e), v = De.get(e, "fxshow");
                    n.queue || (null == (r = pe._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
                        r.unqueued || a()
                    }), r.unqueued++, p.always(function () {
                        p.always(function () {
                            r.unqueued--, pe.queue(e, "fx").length || r.empty.fire()
                        })
                    }));
                    for (i in t)if (o = t[i], pt.test(o)) {
                        if (delete t[i], s = s || "toggle" === o, o === (m ? "hide" : "show")) {
                            if ("show" !== o || !v || void 0 === v[i])continue;
                            m = !0
                        }
                        h[i] = v && v[i] || pe.style(e, i)
                    }
                    if ((l = !pe.isEmptyObject(t)) || !pe.isEmptyObject(h)) {
                        d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = v && v.display) && (u = De.get(e, "display")), "none" === (c = pe.css(e, "display")) && (u ? c = u : (g([e], !0), u = e.style.display || u, c = pe.css(e, "display"), g([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === pe.css(e, "float") && (l || (p.done(function () {
                            f.display = u
                        }), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function () {
                            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                        })), l = !1;
                        for (i in h)l || (v ? "hidden" in v && (m = v.hidden) : v = De.access(e, "fxshow", {display: u}), s && (v.hidden = !m), m && g([e], !0), p.done(function () {
                            m || g([e]), De.remove(e, "fxshow");
                            for (i in h)pe.style(e, i, h[i])
                        })), l = H(m ? v[i] : 0, i, p), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
                    }
                }], prefilter: function (e, t) {
                    t ? B.prefilters.unshift(e) : B.prefilters.push(e)
                }
            }), pe.speed = function (e, t, n) {
                var i = e && "object" == typeof e ? pe.extend({}, e) : {
                    complete: n || !n && t || pe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !pe.isFunction(t) && t
                };
                return pe.fx.off || ee.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in pe.fx.speeds ? i.duration = pe.fx.speeds[i.duration] : i.duration = pe.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue)
                }, i
            }, pe.fn.extend({
                fadeTo: function (e, t, n, i) {
                    return this.filter(Re).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
                }, animate: function (e, t, n, i) {
                    var o = pe.isEmptyObject(e), s = pe.speed(t, n, i), r = function () {
                        var t = B(this, pe.extend({}, e), s);
                        (o || De.get(this, "finish")) && t.stop(!0)
                    };
                    return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
                }, stop: function (e, t, n) {
                    var i = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                        var t = !0, o = null != e && e + "queueHooks", s = pe.timers, r = De.get(this);
                        if (o) r[o] && r[o].stop && i(r[o]); else for (o in r)r[o] && r[o].stop && ht.test(o) && i(r[o]);
                        for (o = s.length; o--;)s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(n), t = !1, s.splice(o, 1));
                        !t && n || pe.dequeue(this, e)
                    })
                }, finish: function (e) {
                    return !1 !== e && (e = e || "fx"), this.each(function () {
                        var t, n = De.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], s = pe.timers,
                            r = i ? i.length : 0;
                        for (n.finish = !0, pe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;)s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                        for (t = 0; t < r; t++)i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), pe.each(["toggle", "show", "hide"], function (e, t) {
                var n = pe.fn[t];
                pe.fn[t] = function (e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, i, o)
                }
            }), pe.each({
                slideDown: q("show"),
                slideUp: q("hide"),
                slideToggle: q("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (e, t) {
                pe.fn[e] = function (e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), pe.timers = [], pe.fx.tick = function () {
                var e, t = 0, n = pe.timers;
                for (ct = pe.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || pe.fx.stop(), ct = void 0
            }, pe.fx.timer = function (e) {
                pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
            }, pe.fx.interval = 13, pe.fx.start = function () {
                dt || (dt = e.requestAnimationFrame ? e.requestAnimationFrame(L) : e.setInterval(pe.fx.tick, pe.fx.interval))
            }, pe.fx.stop = function () {
                e.cancelAnimationFrame ? e.cancelAnimationFrame(dt) : e.clearInterval(dt), dt = null
            }, pe.fx.speeds = {slow: 600, fast: 200, _default: 400}, pe.fn.delay = function (t, n) {
                return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
                    var o = e.setTimeout(n, t);
                    i.stop = function () {
                        e.clearTimeout(o)
                    }
                })
            }, function () {
                var e = ee.createElement("input"),
                    t = ee.createElement("select").appendChild(ee.createElement("option"));
                e.type = "checkbox", de.checkOn = "" !== e.value, de.optSelected = t.selected, (e = ee.createElement("input")).value = "t", e.type = "radio", de.radioValue = "t" === e.value
            }();
            var ft, mt = pe.expr.attrHandle;
            pe.fn.extend({
                attr: function (e, t) {
                    return _e(this, pe.attr, e, t, arguments.length > 1)
                }, removeAttr: function (e) {
                    return this.each(function () {
                        pe.removeAttr(this, e)
                    })
                }
            }), pe.extend({
                attr: function (e, t, n) {
                    var i, o, s = e.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s)return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === s && pe.isXMLDoc(e) || (o = pe.attrHooks[t.toLowerCase()] || (pe.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = pe.find.attr(e, t), null == i ? void 0 : i))
                }, attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }, removeAttr: function (e, t) {
                    var n, i = 0, o = t && t.match(Ee);
                    if (o && 1 === e.nodeType)for (; n = o[i++];)e.removeAttribute(n)
                }
            }), ft = {
                set: function (e, t, n) {
                    return !1 === t ? pe.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = mt[t] || pe.find.attr;
                mt[t] = function (e, t, i) {
                    var o, s, r = t.toLowerCase();
                    return i || (s = mt[r], mt[r] = o, o = null != n(e, t, i) ? r : null, mt[r] = s), o
                }
            });
            var gt = /^(?:input|select|textarea|button)$/i, vt = /^(?:a|area)$/i;
            pe.fn.extend({
                prop: function (e, t) {
                    return _e(this, pe.prop, e, t, arguments.length > 1)
                }, removeProp: function (e) {
                    return this.each(function () {
                        delete this[pe.propFix[e] || e]
                    })
                }
            }), pe.extend({
                prop: function (e, t, n) {
                    var i, o, s = e.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s)return 1 === s && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, o = pe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
                }, propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = pe.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                }, propFix: {for: "htmlFor", class: "className"}
            }), de.optSelected || (pe.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }, set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                pe.propFix[this.toLowerCase()] = this
            }), pe.fn.extend({
                addClass: function (e) {
                    var t, n, i, o, s, r, a, l = 0;
                    if (pe.isFunction(e))return this.each(function (t) {
                        pe(this).addClass(e.call(this, t, U(this)))
                    });
                    if ("string" == typeof e && e)for (t = e.match(Ee) || []; n = this[l++];)if (o = U(n), i = 1 === n.nodeType && " " + W(o) + " ") {
                        for (r = 0; s = t[r++];)i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        o !== (a = W(i)) && n.setAttribute("class", a)
                    }
                    return this
                }, removeClass: function (e) {
                    var t, n, i, o, s, r, a, l = 0;
                    if (pe.isFunction(e))return this.each(function (t) {
                        pe(this).removeClass(e.call(this, t, U(this)))
                    });
                    if (!arguments.length)return this.attr("class", "");
                    if ("string" == typeof e && e)for (t = e.match(Ee) || []; n = this[l++];)if (o = U(n), i = 1 === n.nodeType && " " + W(o) + " ") {
                        for (r = 0; s = t[r++];)for (; i.indexOf(" " + s + " ") > -1;)i = i.replace(" " + s + " ", " ");
                        o !== (a = W(i)) && n.setAttribute("class", a)
                    }
                    return this
                }, toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function (n) {
                        pe(this).toggleClass(e.call(this, n, U(this), t), t)
                    }) : this.each(function () {
                        var t, i, o, s;
                        if ("string" === n)for (i = 0, o = pe(this), s = e.match(Ee) || []; t = s[i++];)o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = U(this)) && De.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : De.get(this, "__className__") || ""))
                    })
                }, hasClass: function (e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];)if (1 === n.nodeType && (" " + W(U(n)) + " ").indexOf(t) > -1)return !0;
                    return !1
                }
            });
            var yt = /\r/g;
            pe.fn.extend({
                val: function (e) {
                    var t, n, i, o = this[0];
                    return arguments.length ? (i = pe.isFunction(e), this.each(function (n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, pe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : pe.isArray(o) && (o = pe.map(o, function (e) {
                                return null == e ? "" : e + ""
                            })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    })) : o ? (t = pe.valHooks[o.type] || pe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(yt, "") : null == n ? "" : n)) : void 0
                }
            }), pe.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = pe.find.attr(e, "value");
                            return null != t ? t : W(pe.text(e))
                        }
                    }, select: {
                        get: function (e) {
                            var t, n, i, o = e.options, s = e.selectedIndex, r = "select-one" === e.type,
                                a = r ? null : [], l = r ? s + 1 : o.length;
                            for (i = s < 0 ? l : r ? s : 0; i < l; i++)if (((n = o[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = pe(n).val(), r)return t;
                                a.push(t)
                            }
                            return a
                        }, set: function (e, t) {
                            for (var n, i, o = e.options, s = pe.makeArray(t),
                                     r = o.length; r--;)i = o[r], (i.selected = pe.inArray(pe.valHooks.option.get(i), s) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), s
                        }
                    }
                }
            }), pe.each(["radio", "checkbox"], function () {
                pe.valHooks[this] = {
                    set: function (e, t) {
                        if (pe.isArray(t))return e.checked = pe.inArray(pe(e).val(), t) > -1
                    }
                }, de.checkOn || (pe.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var bt = /^(?:focusinfocus|focusoutblur)$/;
            pe.extend(pe.event, {
                trigger: function (t, n, i, o) {
                    var s, r, a, l, u, c, d, p = [i || ee], h = le.call(t, "type") ? t.type : t,
                        f = le.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (r = a = i = i || ee, 3 !== i.nodeType && 8 !== i.nodeType && !bt.test(h + pe.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."), h = f.shift(), f.sort()), u = h.indexOf(":") < 0 && "on" + h, t = t[pe.expando] ? t : new pe.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), d = pe.event.special[h] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                        if (!o && !d.noBubble && !pe.isWindow(i)) {
                            for (l = d.delegateType || h, bt.test(l + h) || (r = r.parentNode); r; r = r.parentNode)p.push(r), a = r;
                            a === (i.ownerDocument || ee) && p.push(a.defaultView || a.parentWindow || e)
                        }
                        for (s = 0; (r = p[s++]) && !t.isPropagationStopped();)t.type = s > 1 ? l : d.bindType || h, (c = (De.get(r, "events") || {})[t.type] && De.get(r, "handle")) && c.apply(r, n), (c = u && r[u]) && c.apply && Ie(r) && (t.result = c.apply(r, n), !1 === t.result && t.preventDefault());
                        return t.type = h, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), n) || !Ie(i) || u && pe.isFunction(i[h]) && !pe.isWindow(i) && ((a = i[u]) && (i[u] = null), pe.event.triggered = h, i[h](), pe.event.triggered = void 0, a && (i[u] = a)), t.result
                    }
                }, simulate: function (e, t, n) {
                    var i = pe.extend(new pe.Event, n, {type: e, isSimulated: !0});
                    pe.event.trigger(i, null, t)
                }
            }), pe.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        pe.event.trigger(e, t, this)
                    })
                }, triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n)return pe.event.trigger(e, t, n, !0)
                }
            }), pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                pe.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), pe.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), de.focusin = "onfocusin" in e, de.focusin || pe.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                var n = function (e) {
                    pe.event.simulate(t, e.target, pe.event.fix(e))
                };
                pe.event.special[t] = {
                    setup: function () {
                        var i = this.ownerDocument || this, o = De.access(i, t);
                        o || i.addEventListener(e, n, !0), De.access(i, t, (o || 0) + 1)
                    }, teardown: function () {
                        var i = this.ownerDocument || this, o = De.access(i, t) - 1;
                        o ? De.access(i, t, o) : (i.removeEventListener(e, n, !0), De.remove(i, t))
                    }
                }
            });
            var wt = e.location, xt = pe.now(), Tt = /\?/;
            pe.parseXML = function (t) {
                var n;
                if (!t || "string" != typeof t)return null;
                try {
                    n = (new e.DOMParser).parseFromString(t, "text/xml")
                } catch (e) {
                    n = void 0
                }
                return n && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
            };
            var Ct = /\[\]$/, jt = /\r?\n/g, kt = /^(?:submit|button|image|reset|file)$/i,
                St = /^(?:input|select|textarea|keygen)/i;
            pe.param = function (e, t) {
                var n, i = [], o = function (e, t) {
                    var n = pe.isFunction(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
                if (pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function () {
                    o(this.name, this.value)
                }); else for (n in e)z(n, e[n], t, o);
                return i.join("&")
            }, pe.fn.extend({
                serialize: function () {
                    return pe.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var e = pe.prop(this, "elements");
                        return e ? pe.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !pe(this).is(":disabled") && St.test(this.nodeName) && !kt.test(e) && (this.checked || !Ve.test(e))
                    }).map(function (e, t) {
                        var n = pe(this).val();
                        return null == n ? null : pe.isArray(n) ? pe.map(n, function (e) {
                            return {name: t.name, value: e.replace(jt, "\r\n")}
                        }) : {name: t.name, value: n.replace(jt, "\r\n")}
                    }).get()
                }
            });
            var Et = /%20/g, $t = /#.*$/, At = /([?&])_=[^&]*/, _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Dt = /^(?:GET|HEAD)$/, Pt = /^\/\//,
                Nt = {}, Mt = {}, Ft = "*/".concat("*"), Ot = ee.createElement("a");
            Ot.href = wt.href, pe.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: wt.href,
                    type: "GET",
                    isLocal: It.test(wt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ft,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": pe.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (e, t) {
                    return t ? Q(Q(e, pe.ajaxSettings), t) : Q(pe.ajaxSettings, e)
                },
                ajaxPrefilter: X(Nt),
                ajaxTransport: X(Mt),
                ajax: function (t, n) {
                    function i(t, n, i, a) {
                        var u, p, h, w, x, T = n;
                        c || (c = !0, l && e.clearTimeout(l), o = void 0, r = a || "", C.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (w = G(f, C, i)), w = K(f, w, C, u), u ? (f.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (pe.lastModified[s] = x), (x = C.getResponseHeader("etag")) && (pe.etag[s] = x)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, p = w.data, h = w.error, u = !h)) : (h = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", u ? v.resolveWith(m, [p, T, C]) : v.rejectWith(m, [C, T, h]), C.statusCode(b), b = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [C, f, u ? p : h]), y.fireWith(m, [C, T]), d && (g.trigger("ajaxComplete", [C, f]), --pe.active || pe.event.trigger("ajaxStop")))
                    }

                    "object" == typeof t && (n = t, t = void 0), n = n || {};
                    var o, s, r, a, l, u, c, d, p, h, f = pe.ajaxSetup({}, n), m = f.context || f,
                        g = f.context && (m.nodeType || m.jquery) ? pe(m) : pe.event, v = pe.Deferred(),
                        y = pe.Callbacks("once memory"), b = f.statusCode || {}, w = {}, x = {}, T = "canceled", C = {
                            readyState: 0, getResponseHeader: function (e) {
                                var t;
                                if (c) {
                                    if (!a)for (a = {}; t = _t.exec(r);)a[t[1].toLowerCase()] = t[2];
                                    t = a[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            }, getAllResponseHeaders: function () {
                                return c ? r : null
                            }, setRequestHeader: function (e, t) {
                                return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                            }, overrideMimeType: function (e) {
                                return null == c && (f.mimeType = e), this
                            }, statusCode: function (e) {
                                var t;
                                if (e)if (c) C.always(e[C.status]); else for (t in e)b[t] = [b[t], e[t]];
                                return this
                            }, abort: function (e) {
                                var t = e || T;
                                return o && o.abort(t), i(0, t), this
                            }
                        };
                    if (v.promise(C), f.url = ((t || f.url || wt.href) + "").replace(Pt, wt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Ee) || [""], null == f.crossDomain) {
                        u = ee.createElement("a");
                        try {
                            u.href = f.url, u.href = u.href, f.crossDomain = Ot.protocol + "//" + Ot.host != u.protocol + "//" + u.host
                        } catch (e) {
                            f.crossDomain = !0
                        }
                    }
                    if (f.data && f.processData && "string" != typeof f.data && (f.data = pe.param(f.data, f.traditional)), Y(Nt, f, n, C), c)return C;
                    (d = pe.event && f.global) && 0 == pe.active++ && pe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Dt.test(f.type), s = f.url.replace($t, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Et, "+")) : (h = f.url.slice(s.length), f.data && (s += (Tt.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (s = s.replace(At, "$1"), h = (Tt.test(s) ? "&" : "?") + "_=" + xt++ + h), f.url = s + h), f.ifModified && (pe.lastModified[s] && C.setRequestHeader("If-Modified-Since", pe.lastModified[s]), pe.etag[s] && C.setRequestHeader("If-None-Match", pe.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : f.accepts["*"]);
                    for (p in f.headers)C.setRequestHeader(p, f.headers[p]);
                    if (f.beforeSend && (!1 === f.beforeSend.call(m, C, f) || c))return C.abort();
                    if (T = "abort", y.add(f.complete), C.done(f.success), C.fail(f.error), o = Y(Mt, f, n, C)) {
                        if (C.readyState = 1, d && g.trigger("ajaxSend", [C, f]), c)return C;
                        f.async && f.timeout > 0 && (l = e.setTimeout(function () {
                            C.abort("timeout")
                        }, f.timeout));
                        try {
                            c = !1, o.send(w, i)
                        } catch (e) {
                            if (c)throw e;
                            i(-1, e)
                        }
                    } else i(-1, "No Transport");
                    return C
                },
                getJSON: function (e, t, n) {
                    return pe.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return pe.get(e, void 0, t, "script")
                }
            }), pe.each(["get", "post"], function (e, t) {
                pe[t] = function (e, n, i, o) {
                    return pe.isFunction(n) && (o = o || i, i = n, n = void 0), pe.ajax(pe.extend({
                        url: e,
                        type: t,
                        dataType: o,
                        data: n,
                        success: i
                    }, pe.isPlainObject(e) && e))
                }
            }), pe._evalUrl = function (e) {
                return pe.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
            }, pe.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return this[0] && (pe.isFunction(e) && (e = e.call(this[0])), t = pe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                        return e
                    }).append(this)), this
                }, wrapInner: function (e) {
                    return pe.isFunction(e) ? this.each(function (t) {
                        pe(this).wrapInner(e.call(this, t))
                    }) : this.each(function () {
                        var t = pe(this), n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                }, wrap: function (e) {
                    var t = pe.isFunction(e);
                    return this.each(function (n) {
                        pe(this).wrapAll(t ? e.call(this, n) : e)
                    })
                }, unwrap: function (e) {
                    return this.parent(e).not("body").each(function () {
                        pe(this).replaceWith(this.childNodes)
                    }), this
                }
            }), pe.expr.pseudos.hidden = function (e) {
                return !pe.expr.pseudos.visible(e)
            }, pe.expr.pseudos.visible = function (e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, pe.ajaxSettings.xhr = function () {
                try {
                    return new e.XMLHttpRequest
                } catch (e) {
                }
            };
            var Lt = {0: 200, 1223: 204}, Rt = pe.ajaxSettings.xhr();
            de.cors = !!Rt && "withCredentials" in Rt, de.ajax = Rt = !!Rt, pe.ajaxTransport(function (t) {
                var n, i;
                if (de.cors || Rt && !t.crossDomain)return {
                    send: function (o, s) {
                        var r, a = t.xhr();
                        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (r in t.xhrFields)a[r] = t.xhrFields[r];
                        t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                        for (r in o)a.setRequestHeader(r, o[r]);
                        n = function (e) {
                            return function () {
                                n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Lt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                            }
                        }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                            4 === a.readyState && e.setTimeout(function () {
                                n && i()
                            })
                        }, n = n("abort");
                        try {
                            a.send(t.hasContent && t.data || null)
                        } catch (e) {
                            if (n)throw e
                        }
                    }, abort: function () {
                        n && n()
                    }
                }
            }), pe.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1)
            }), pe.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /\b(?:java|ecma)script\b/},
                converters: {
                    "text script": function (e) {
                        return pe.globalEval(e), e
                    }
                }
            }), pe.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), pe.ajaxTransport("script", function (e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function (i, o) {
                            t = pe("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function (e) {
                                t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                            }), ee.head.appendChild(t[0])
                        }, abort: function () {
                            n && n()
                        }
                    }
                }
            });
            var qt = [], Ht = /(=)\?(?=&|$)|\?\?/;
            pe.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var e = qt.pop() || pe.expando + "_" + xt++;
                    return this[e] = !0, e
                }
            }), pe.ajaxPrefilter("json jsonp", function (t, n, i) {
                var o, s, r,
                    a = !1 !== t.jsonp && (Ht.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
                if (a || "jsonp" === t.dataTypes[0])return o = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ht, "$1" + o) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
                    return r || pe.error(o + " was not called"), r[0]
                }, t.dataTypes[0] = "json", s = e[o], e[o] = function () {
                    r = arguments
                }, i.always(function () {
                    void 0 === s ? pe(e).removeProp(o) : e[o] = s, t[o] && (t.jsonpCallback = n.jsonpCallback, qt.push(o)), r && pe.isFunction(s) && s(r[0]), r = s = void 0
                }), "script"
            }), de.createHTMLDocument = function () {
                var e = ee.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
            }(), pe.parseHTML = function (e, t, n) {
                if ("string" != typeof e)return [];
                "boolean" == typeof t && (n = t, t = !1);
                var i, o, s;
                return t || (de.createHTMLDocument ? (t = ee.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = ee.location.href, t.head.appendChild(i)) : t = ee), o = xe.exec(e), s = !n && [], o ? [t.createElement(o[1])] : (o = b([e], t, s), s && s.length && pe(s).remove(), pe.merge([], o.childNodes))
            }, pe.fn.load = function (e, t, n) {
                var i, o, s, r = this, a = e.indexOf(" ");
                return a > -1 && (i = W(e.slice(a)), e = e.slice(0, a)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), r.length > 0 && pe.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    s = arguments, r.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
                }).always(n && function (e, t) {
                        r.each(function () {
                            n.apply(this, s || [e.responseText, t, e])
                        })
                    }), this
            }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                pe.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), pe.expr.pseudos.animated = function (e) {
                return pe.grep(pe.timers, function (t) {
                    return e === t.elem
                }).length
            }, pe.offset = {
                setOffset: function (e, t, n) {
                    var i, o, s, r, a, l, u = pe.css(e, "position"), c = pe(e), d = {};
                    "static" === u && (e.style.position = "relative"), a = c.offset(), s = pe.css(e, "top"), l = pe.css(e, "left"), ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1 ? (i = c.position(), r = i.top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, a))), null != t.top && (d.top = t.top - a.top + r), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : c.css(d)
                }
            }, pe.fn.extend({
                offset: function (e) {
                    if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                        pe.offset.setOffset(this, e, t)
                    });
                    var t, n, i, o, s = this[0];
                    return s ? s.getClientRects().length ? (i = s.getBoundingClientRect(), i.width || i.height ? (o = s.ownerDocument, n = Z(o), t = o.documentElement, {
                        top: i.top + n.pageYOffset - t.clientTop,
                        left: i.left + n.pageXOffset - t.clientLeft
                    }) : i) : {top: 0, left: 0} : void 0
                }, position: function () {
                    if (this[0]) {
                        var e, t, n = this[0], i = {top: 0, left: 0};
                        return "fixed" === pe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (i = e.offset()), i = {
                            top: i.top + pe.css(e[0], "borderTopWidth", !0),
                            left: i.left + pe.css(e[0], "borderLeftWidth", !0)
                        }), {
                            top: t.top - i.top - pe.css(n, "marginTop", !0),
                            left: t.left - i.left - pe.css(n, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && "static" === pe.css(e, "position");)e = e.offsetParent;
                        return e || Xe
                    })
                }
            }), pe.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
                var n = "pageYOffset" === t;
                pe.fn[e] = function (i) {
                    return _e(this, function (e, i, o) {
                        var s = Z(e);
                        return void 0 === o ? s ? s[t] : e[i] : void(s ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset) : e[i] = o)
                    }, e, i, arguments.length)
                }
            }), pe.each(["top", "left"], function (e, t) {
                pe.cssHooks[t] = D(de.pixelPosition, function (e, n) {
                    if (n)return n = I(e, t), it.test(n) ? pe(e).position()[t] + "px" : n
                })
            }), pe.each({Height: "height", Width: "width"}, function (e, t) {
                pe.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
                    pe.fn[i] = function (o, s) {
                        var r = arguments.length && (n || "boolean" != typeof o),
                            a = n || (!0 === o || !0 === s ? "margin" : "border");
                        return _e(this, function (t, n, o) {
                            var s;
                            return pe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === o ? pe.css(t, n, a) : pe.style(t, n, o, a)
                        }, t, r ? o : void 0, r)
                    }
                })
            }), pe.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                }, unbind: function (e, t) {
                    return this.off(e, null, t)
                }, delegate: function (e, t, n, i) {
                    return this.on(t, e, n, i)
                }, undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), pe.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
                return pe
            });
            var Vt = e.jQuery, Bt = e.$;
            return pe.noConflict = function (t) {
                return e.$ === pe && (e.$ = Bt), t && e.jQuery === pe && (e.jQuery = Vt), pe
            }, t || (e.jQuery = e.$ = pe), pe
        })
    }, {}], 17: [function (e, t, n) {
        !function (t) {
            "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof n ? e("jquery") : jQuery)
        }(function (e) {
            var t = function () {
                if (e && e.fn && e.fn.select2 && e.fn.select2.amd) t = e.fn.select2.amd;
                var t;
                return function () {
                    if (!t || !t.requirejs) {
                        t ? n = t : t = {};
                        var e, n, i;
                        !function (t) {
                            function o(e, t) {
                                return w.call(e, t)
                            }

                            function s(e, t) {
                                var n, i, o, s, r, a, l, u, c, d, p, h = t && t.split("/"), f = y.map,
                                    m = f && f["*"] || {};
                                if (e && "." === e.charAt(0))if (t) {
                                    for (r = (e = e.split("/")).length - 1, y.nodeIdCompat && T.test(e[r]) && (e[r] = e[r].replace(T, "")), e = h.slice(0, h.length - 1).concat(e), c = 0; c < e.length; c += 1)if ("." === (p = e[c])) e.splice(c, 1), c -= 1; else if (".." === p) {
                                        if (1 === c && (".." === e[2] || ".." === e[0]))break;
                                        c > 0 && (e.splice(c - 1, 2), c -= 2)
                                    }
                                    e = e.join("/")
                                } else 0 === e.indexOf("./") && (e = e.substring(2));
                                if ((h || m) && f) {
                                    for (c = (n = e.split("/")).length; c > 0; c -= 1) {
                                        if (i = n.slice(0, c).join("/"), h)for (d = h.length; d > 0; d -= 1)if ((o = f[h.slice(0, d).join("/")]) && (o = o[i])) {
                                            s = o, a = c;
                                            break
                                        }
                                        if (s)break;
                                        !l && m && m[i] && (l = m[i], u = c)
                                    }
                                    !s && l && (s = l, a = u), s && (n.splice(0, a, s), e = n.join("/"))
                                }
                                return e
                            }

                            function r(e, n) {
                                return function () {
                                    var i = x.call(arguments, 0);
                                    return "string" != typeof i[0] && 1 === i.length && i.push(null), h.apply(t, i.concat([e, n]))
                                }
                            }

                            function a(e) {
                                return function (t) {
                                    return s(t, e)
                                }
                            }

                            function l(e) {
                                return function (t) {
                                    g[e] = t
                                }
                            }

                            function u(e) {
                                if (o(v, e)) {
                                    var n = v[e];
                                    delete v[e], b[e] = !0, p.apply(t, n)
                                }
                                if (!o(g, e) && !o(b, e))throw new Error("No " + e);
                                return g[e]
                            }

                            function c(e) {
                                var t, n = e ? e.indexOf("!") : -1;
                                return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                            }

                            function d(e) {
                                return function () {
                                    return y && y.config && y.config[e] || {}
                                }
                            }

                            var p, h, f, m, g = {}, v = {}, y = {}, b = {}, w = Object.prototype.hasOwnProperty,
                                x = [].slice, T = /\.js$/;
                            f = function (e, t) {
                                var n, i = c(e), o = i[0];
                                return e = i[1], o && (o = s(o, t), n = u(o)), o ? e = n && n.normalize ? n.normalize(e, a(t)) : s(e, t) : (e = s(e, t), i = c(e), o = i[0], e = i[1], o && (n = u(o))), {
                                    f: o ? o + "!" + e : e,
                                    n: e,
                                    pr: o,
                                    p: n
                                }
                            }, m = {
                                require: function (e) {
                                    return r(e)
                                }, exports: function (e) {
                                    var t = g[e];
                                    return void 0 !== t ? t : g[e] = {}
                                }, module: function (e) {
                                    return {id: e, uri: "", exports: g[e], config: d(e)}
                                }
                            }, p = function (e, n, i, s) {
                                var a, c, d, p, h, y, w = [], x = typeof i;
                                if (s = s || e, "undefined" === x || "function" === x) {
                                    for (n = !n.length && i.length ? ["require", "exports", "module"] : n, h = 0; h < n.length; h += 1)if (p = f(n[h], s), "require" === (c = p.f)) w[h] = m.require(e); else if ("exports" === c) w[h] = m.exports(e), y = !0; else if ("module" === c) a = w[h] = m.module(e); else if (o(g, c) || o(v, c) || o(b, c)) w[h] = u(c); else {
                                        if (!p.p)throw new Error(e + " missing " + c);
                                        p.p.load(p.n, r(s, !0), l(c), {}), w[h] = g[c]
                                    }
                                    d = i ? i.apply(g[e], w) : void 0, e && (a && a.exports !== t && a.exports !== g[e] ? g[e] = a.exports : d === t && y || (g[e] = d))
                                } else e && (g[e] = i)
                            }, e = n = h = function (e, n, i, o, s) {
                                if ("string" == typeof e)return m[e] ? m[e](n) : u(f(e, n).f);
                                if (!e.splice) {
                                    if ((y = e).deps && h(y.deps, y.callback), !n)return;
                                    n.splice ? (e = n, n = i, i = null) : e = t
                                }
                                return n = n || function () {
                                    }, "function" == typeof i && (i = o, o = s), o ? p(t, e, n, i) : setTimeout(function () {
                                    p(t, e, n, i)
                                }, 4), h
                            }, h.config = function (e) {
                                return h(e)
                            }, e._defined = g, (i = function (e, t, n) {
                                if ("string" != typeof e)throw new Error("See almond README: incorrect module build, no module name");
                                t.splice || (n = t, t = []), o(g, e) || o(v, e) || (v[e] = [e, t, n])
                            }).amd = {jQuery: !0}
                        }(), t.requirejs = e, t.require = n, t.define = i
                    }
                }(), t.define("almond", function () {
                }), t.define("jquery", [], function () {
                    var t = e || $;
                    return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
                }), t.define("select2/utils", ["jquery"], function (e) {
                    function t(e) {
                        var t = e.prototype, n = [];
                        for (var i in t)"function" == typeof t[i] && "constructor" !== i && n.push(i);
                        return n
                    }

                    var n = {};
                    n.Extend = function (e, t) {
                        function n() {
                            this.constructor = e
                        }

                        var i = {}.hasOwnProperty;
                        for (var o in t)i.call(t, o) && (e[o] = t[o]);
                        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                    }, n.Decorate = function (e, n) {
                        function i() {
                            var t = Array.prototype.unshift, i = n.prototype.constructor.length,
                                o = e.prototype.constructor;
                            i > 0 && (t.call(arguments, e.prototype.constructor), o = n.prototype.constructor), o.apply(this, arguments)
                        }

                        var o = t(n), s = t(e);
                        n.displayName = e.displayName, i.prototype = new function () {
                            this.constructor = i
                        };
                        for (var r = 0; r < s.length; r++) {
                            var a = s[r];
                            i.prototype[a] = e.prototype[a]
                        }
                        for (var l = 0; l < o.length; l++) {
                            var u = o[l];
                            i.prototype[u] = function (e) {
                                var t = function () {
                                };
                                e in i.prototype && (t = i.prototype[e]);
                                var o = n.prototype[e];
                                return function () {
                                    return Array.prototype.unshift.call(arguments, t), o.apply(this, arguments)
                                }
                            }(u)
                        }
                        return i
                    };
                    var i = function () {
                        this.listeners = {}
                    };
                    return i.prototype.on = function (e, t) {
                        this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                    }, i.prototype.trigger = function (e) {
                        var t = Array.prototype.slice, n = t.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, i.prototype.invoke = function (e, t) {
                        for (var n = 0, i = e.length; n < i; n++)e[n].apply(this, t)
                    }, n.Observable = i, n.generateChars = function (e) {
                        for (var t = "", n = 0; n < e; n++)t += Math.floor(36 * Math.random()).toString(36);
                        return t
                    }, n.bind = function (e, t) {
                        return function () {
                            e.apply(t, arguments)
                        }
                    }, n._convertData = function (e) {
                        for (var t in e) {
                            var n = t.split("-"), i = e;
                            if (1 !== n.length) {
                                for (var o = 0; o < n.length; o++) {
                                    var s = n[o];
                                    (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in i || (i[s] = {}), o == n.length - 1 && (i[s] = e[t]), i = i[s]
                                }
                                delete e[t]
                            }
                        }
                        return e
                    }, n.hasScroll = function (t, n) {
                        var i = e(n), o = n.style.overflowX, s = n.style.overflowY;
                        return (o !== s || "hidden" !== s && "visible" !== s) && ("scroll" === o || "scroll" === s || i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth)
                    }, n.escapeMarkup = function (e) {
                        var t = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                            return t[e]
                        })
                    }, n.appendMany = function (t, n) {
                        if ("1.7" === e.fn.jquery.substr(0, 3)) {
                            var i = e();
                            e.map(n, function (e) {
                                i = i.add(e)
                            }), n = i
                        }
                        t.append(n)
                    }, n
                }), t.define("select2/results", ["jquery", "./utils"], function (e, t) {
                    function n(e, t, i) {
                        this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)
                    }

                    return t.Extend(n, t.Observable), n.prototype.render = function () {
                        var t = e('<ul class="select2-results__options" role="tree"></ul>');
                        return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
                    }, n.prototype.clear = function () {
                        this.$results.empty()
                    }, n.prototype.displayMessage = function (t) {
                        var n = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var i = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            o = this.options.get("translations").get(t.message);
                        i.append(n(o(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
                    }, n.prototype.hideMessages = function () {
                        this.$results.find(".select2-results__message").remove()
                    }, n.prototype.append = function (e) {
                        this.hideLoading();
                        var t = [];
                        if (null != e.results && 0 !== e.results.length) {
                            e.results = this.sort(e.results);
                            for (var n = 0; n < e.results.length; n++) {
                                var i = e.results[n], o = this.option(i);
                                t.push(o)
                            }
                            this.$results.append(t)
                        } else 0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"})
                    }, n.prototype.position = function (e, t) {
                        t.find(".select2-results").append(e)
                    }, n.prototype.sort = function (e) {
                        return this.options.get("sorter")(e)
                    }, n.prototype.highlightFirstItem = function () {
                        var e = this.$results.find(".select2-results__option[aria-selected]"),
                            t = e.filter("[aria-selected=true]");
                        t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                    }, n.prototype.setClasses = function () {
                        var t = this;
                        this.data.current(function (n) {
                            var i = e.map(n, function (e) {
                                return e.id.toString()
                            });
                            t.$results.find(".select2-results__option[aria-selected]").each(function () {
                                var t = e(this), n = e.data(this, "data"), o = "" + n.id;
                                null != n.element && n.element.selected || null == n.element && e.inArray(o, i) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                            })
                        })
                    }, n.prototype.showLoading = function (e) {
                        this.hideLoading();
                        var t = {disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(e)},
                            n = this.option(t);
                        n.className += " loading-results", this.$results.prepend(n)
                    }, n.prototype.hideLoading = function () {
                        this.$results.find(".loading-results").remove()
                    }, n.prototype.option = function (t) {
                        var n = document.createElement("li");
                        n.className = "select2-results__option";
                        var i = {role: "treeitem", "aria-selected": "false"};
                        t.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == t.id && delete i["aria-selected"], null != t._resultId && (n.id = t._resultId), t.title && (n.title = t.title), t.children && (i.role = "group", i["aria-label"] = t.text, delete i["aria-selected"]);
                        for (var o in i) {
                            var s = i[o];
                            n.setAttribute(o, s)
                        }
                        if (t.children) {
                            var r = e(n), a = document.createElement("strong");
                            a.className = "select2-results__group", e(a), this.template(t, a);
                            for (var l = [], u = 0; u < t.children.length; u++) {
                                var c = t.children[u], d = this.option(c);
                                l.push(d)
                            }
                            var p = e("<ul></ul>", {class: "select2-results__options select2-results__options--nested"});
                            p.append(l), r.append(a), r.append(p)
                        } else this.template(t, n);
                        return e.data(n, "data", t), n
                    }, n.prototype.bind = function (t, n) {
                        var i = this, o = t.id + "-results";
                        this.$results.attr("id", o), t.on("results:all", function (e) {
                            i.clear(), i.append(e.data), t.isOpen() && (i.setClasses(), i.highlightFirstItem())
                        }), t.on("results:append", function (e) {
                            i.append(e.data), t.isOpen() && i.setClasses()
                        }), t.on("query", function (e) {
                            i.hideMessages(), i.showLoading(e)
                        }), t.on("select", function () {
                            t.isOpen() && (i.setClasses(), i.highlightFirstItem())
                        }), t.on("unselect", function () {
                            t.isOpen() && (i.setClasses(), i.highlightFirstItem())
                        }), t.on("open", function () {
                            i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible()
                        }), t.on("close", function () {
                            i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant")
                        }), t.on("results:toggle", function () {
                            var e = i.getHighlightedResults();
                            0 !== e.length && e.trigger("mouseup")
                        }), t.on("results:select", function () {
                            var e = i.getHighlightedResults();
                            if (0 !== e.length) {
                                var t = e.data("data");
                                "true" == e.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {data: t})
                            }
                        }), t.on("results:previous", function () {
                            var e = i.getHighlightedResults(), t = i.$results.find("[aria-selected]"), n = t.index(e);
                            if (0 !== n) {
                                var o = n - 1;
                                0 === e.length && (o = 0);
                                var s = t.eq(o);
                                s.trigger("mouseenter");
                                var r = i.$results.offset().top, a = s.offset().top,
                                    l = i.$results.scrollTop() + (a - r);
                                0 === o ? i.$results.scrollTop(0) : a - r < 0 && i.$results.scrollTop(l)
                            }
                        }), t.on("results:next", function () {
                            var e = i.getHighlightedResults(), t = i.$results.find("[aria-selected]"),
                                n = t.index(e) + 1;
                            if (!(n >= t.length)) {
                                var o = t.eq(n);
                                o.trigger("mouseenter");
                                var s = i.$results.offset().top + i.$results.outerHeight(!1),
                                    r = o.offset().top + o.outerHeight(!1), a = i.$results.scrollTop() + r - s;
                                0 === n ? i.$results.scrollTop(0) : r > s && i.$results.scrollTop(a)
                            }
                        }), t.on("results:focus", function (e) {
                            e.element.addClass("select2-results__option--highlighted")
                        }), t.on("results:message", function (e) {
                            i.displayMessage(e)
                        }), e.fn.mousewheel && this.$results.on("mousewheel", function (e) {
                            var t = i.$results.scrollTop(), n = i.$results.get(0).scrollHeight - t + e.deltaY,
                                o = e.deltaY > 0 && t - e.deltaY <= 0, s = e.deltaY < 0 && n <= i.$results.height();
                            o ? (i.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : s && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), e.preventDefault(), e.stopPropagation())
                        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (t) {
                            var n = e(this), o = n.data("data");
                            return "true" === n.attr("aria-selected") ? void(i.options.get("multiple") ? i.trigger("unselect", {
                                originalEvent: t,
                                data: o
                            }) : i.trigger("close", {})) : void i.trigger("select", {originalEvent: t, data: o})
                        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (t) {
                            var n = e(this).data("data");
                            i.getHighlightedResults().removeClass("select2-results__option--highlighted"), i.trigger("results:focus", {
                                data: n,
                                element: e(this)
                            })
                        })
                    }, n.prototype.getHighlightedResults = function () {
                        return this.$results.find(".select2-results__option--highlighted")
                    }, n.prototype.destroy = function () {
                        this.$results.remove()
                    }, n.prototype.ensureHighlightVisible = function () {
                        var e = this.getHighlightedResults();
                        if (0 !== e.length) {
                            var t = this.$results.find("[aria-selected]").index(e), n = this.$results.offset().top,
                                i = e.offset().top, o = this.$results.scrollTop() + (i - n), s = i - n;
                            o -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(o)
                        }
                    }, n.prototype.template = function (t, n) {
                        var i = this.options.get("templateResult"), o = this.options.get("escapeMarkup"), s = i(t, n);
                        null == s ? n.style.display = "none" : "string" == typeof s ? n.innerHTML = o(s) : e(n).append(s)
                    }, n
                }), t.define("select2/keys", [], function () {
                    return {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    }
                }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (e, t, n) {
                    function i(e, t) {
                        this.$element = e, this.options = t, i.__super__.constructor.call(this)
                    }

                    return t.Extend(i, t.Observable), i.prototype.render = function () {
                        var t = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                        return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t
                    }, i.prototype.bind = function (e, t) {
                        var i = this, o = (e.id, e.id + "-results");
                        this.container = e, this.$selection.on("focus", function (e) {
                            i.trigger("focus", e)
                        }), this.$selection.on("blur", function (e) {
                            i._handleBlur(e)
                        }), this.$selection.on("keydown", function (e) {
                            i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                        }), e.on("results:focus", function (e) {
                            i.$selection.attr("aria-activedescendant", e.data._resultId)
                        }), e.on("selection:update", function (e) {
                            i.update(e.data)
                        }), e.on("open", function () {
                            i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", o), i._attachCloseHandler(e)
                        }), e.on("close", function () {
                            i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), i._detachCloseHandler(e)
                        }), e.on("enable", function () {
                            i.$selection.attr("tabindex", i._tabindex)
                        }), e.on("disable", function () {
                            i.$selection.attr("tabindex", "-1")
                        })
                    }, i.prototype._handleBlur = function (t) {
                        var n = this;
                        window.setTimeout(function () {
                            document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                        }, 1)
                    }, i.prototype._attachCloseHandler = function (t) {
                        e(document.body).on("mousedown.select2." + t.id, function (t) {
                            var n = e(t.target).closest(".select2");
                            e(".select2.select2-container--open").each(function () {
                                var t = e(this);
                                this != n[0] && t.data("element").select2("close")
                            })
                        })
                    }, i.prototype._detachCloseHandler = function (t) {
                        e(document.body).off("mousedown.select2." + t.id)
                    }, i.prototype.position = function (e, t) {
                        t.find(".selection").append(e)
                    }, i.prototype.destroy = function () {
                        this._detachCloseHandler(this.container)
                    }, i.prototype.update = function (e) {
                        throw new Error("The `update` method must be defined in child classes.")
                    }, i
                }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, i) {
                    function o() {
                        o.__super__.constructor.apply(this, arguments)
                    }

                    return n.Extend(o, t), o.prototype.render = function () {
                        var e = o.__super__.render.call(this);
                        return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                    }, o.prototype.bind = function (e, t) {
                        var n = this;
                        o.__super__.bind.apply(this, arguments);
                        var i = e.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function (e) {
                            1 === e.which && n.trigger("toggle", {originalEvent: e})
                        }), this.$selection.on("focus", function (e) {
                        }), this.$selection.on("blur", function (e) {
                        }), e.on("focus", function (t) {
                            e.isOpen() || n.$selection.focus()
                        }), e.on("selection:update", function (e) {
                            n.update(e.data)
                        })
                    }, o.prototype.clear = function () {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, o.prototype.display = function (e, t) {
                        var n = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(n(e, t))
                    }, o.prototype.selectionContainer = function () {
                        return e("<span></span>")
                    }, o.prototype.update = function (e) {
                        if (0 !== e.length) {
                            var t = e[0], n = this.$selection.find(".select2-selection__rendered"),
                                i = this.display(t, n);
                            n.empty().append(i), n.prop("title", t.title || t.text)
                        } else this.clear()
                    }, o
                }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (e, t, n) {
                    function i(e, t) {
                        i.__super__.constructor.apply(this, arguments)
                    }

                    return n.Extend(i, t), i.prototype.render = function () {
                        var e = i.__super__.render.call(this);
                        return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                    }, i.prototype.bind = function (t, n) {
                        var o = this;
                        i.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e) {
                            o.trigger("toggle", {originalEvent: e})
                        }), this.$selection.on("click", ".select2-selection__choice__remove", function (t) {
                            if (!o.options.get("disabled")) {
                                var n = e(this).parent().data("data");
                                o.trigger("unselect", {originalEvent: t, data: n})
                            }
                        })
                    }, i.prototype.clear = function () {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, i.prototype.display = function (e, t) {
                        var n = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(n(e, t))
                    }, i.prototype.selectionContainer = function () {
                        return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                    }, i.prototype.update = function (e) {
                        if (this.clear(), 0 !== e.length) {
                            for (var t = [], i = 0; i < e.length; i++) {
                                var o = e[i], s = this.selectionContainer(), r = this.display(o, s);
                                s.append(r), s.prop("title", o.title || o.text), s.data("data", o), t.push(s)
                            }
                            var a = this.$selection.find(".select2-selection__rendered");
                            n.appendMany(a, t)
                        }
                    }, i
                }), t.define("select2/selection/placeholder", ["../utils"], function (e) {
                    function t(e, t, n) {
                        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                    }

                    return t.prototype.normalizePlaceholder = function (e, t) {
                        return "string" == typeof t && (t = {id: "", text: t}), t
                    }, t.prototype.createPlaceholder = function (e, t) {
                        var n = this.selectionContainer();
                        return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                    }, t.prototype.update = function (e, t) {
                        var n = 1 == t.length && t[0].id != this.placeholder.id;
                        if (t.length > 1 || n)return e.call(this, t);
                        this.clear();
                        var i = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(i)
                    }, t
                }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function (e, t) {
                    function n() {
                    }

                    return n.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
                            i._handleClear(e)
                        }), t.on("keypress", function (e) {
                            i._handleKeyboardClear(e, t)
                        })
                    }, n.prototype._handleClear = function (e, t) {
                        if (!this.options.get("disabled")) {
                            var n = this.$selection.find(".select2-selection__clear");
                            if (0 !== n.length) {
                                t.stopPropagation();
                                for (var i = n.data("data"), o = 0; o < i.length; o++) {
                                    var s = {data: i[o]};
                                    if (this.trigger("unselect", s), s.prevented)return
                                }
                                this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }, n.prototype._handleKeyboardClear = function (e, n, i) {
                        i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)
                    }, n.prototype.update = function (t, n) {
                        if (t.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                            var i = e('<span class="select2-selection__clear">&times;</span>');
                            i.data("data", n), this.$selection.find(".select2-selection__rendered").prepend(i)
                        }
                    }, n
                }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (e, t, n) {
                    function i(e, t, n) {
                        e.call(this, t, n)
                    }

                    return i.prototype.render = function (t) {
                        var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = n, this.$search = n.find("input");
                        var i = t.call(this);
                        return this._transferTabIndex(), i
                    }, i.prototype.bind = function (e, t, i) {
                        var o = this;
                        e.call(this, t, i), t.on("open", function () {
                            o.$search.trigger("focus")
                        }), t.on("close", function () {
                            o.$search.val(""), o.$search.removeAttr("aria-activedescendant"), o.$search.trigger("focus")
                        }), t.on("enable", function () {
                            o.$search.prop("disabled", !1), o._transferTabIndex()
                        }), t.on("disable", function () {
                            o.$search.prop("disabled", !0)
                        }), t.on("focus", function (e) {
                            o.$search.trigger("focus")
                        }), t.on("results:focus", function (e) {
                            o.$search.attr("aria-activedescendant", e.id)
                        }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
                            o.trigger("focus", e)
                        }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
                            o._handleBlur(e)
                        }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
                            if (e.stopPropagation(), o.trigger("keypress", e), o._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === o.$search.val()) {
                                var t = o.$searchContainer.prev(".select2-selection__choice");
                                if (t.length > 0) {
                                    var i = t.data("data");
                                    o.searchRemoveChoice(i), e.preventDefault()
                                }
                            }
                        });
                        var s = document.documentMode, r = s && s <= 11;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
                            return r ? void o.$selection.off("input.search input.searchcheck") : void o.$selection.off("keyup.search")
                        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
                            if (r && "input" === e.type) o.$selection.off("input.search input.searchcheck"); else {
                                var t = e.which;
                                t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && o.handleSearch(e)
                            }
                        })
                    }, i.prototype._transferTabIndex = function (e) {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                    }, i.prototype.createPlaceholder = function (e, t) {
                        this.$search.attr("placeholder", t.text)
                    }, i.prototype.update = function (e, t) {
                        var n = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
                    }, i.prototype.handleSearch = function () {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var e = this.$search.val();
                            this.trigger("query", {term: e})
                        }
                        this._keyUpPrevented = !1
                    }, i.prototype.searchRemoveChoice = function (e, t) {
                        this.trigger("unselect", {data: t}), this.$search.val(t.text), this.handleSearch()
                    }, i.prototype.resizeSearch = function () {
                        this.$search.css("width", "25px");
                        var e = "";
                        e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", e)
                    }, i
                }), t.define("select2/selection/eventRelay", ["jquery"], function (e) {
                    function t() {
                    }

                    return t.prototype.bind = function (t, n, i) {
                        var o = this,
                            s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            r = ["opening", "closing", "selecting", "unselecting"];
                        t.call(this, n, i), n.on("*", function (t, n) {
                            if (-1 !== e.inArray(t, s)) {
                                n = n || {};
                                var i = e.Event("select2:" + t, {params: n});
                                o.$element.trigger(i), -1 !== e.inArray(t, r) && (n.prevented = i.isDefaultPrevented())
                            }
                        })
                    }, t
                }), t.define("select2/translation", ["jquery", "require"], function (e, t) {
                    function n(e) {
                        this.dict = e || {}
                    }

                    return n.prototype.all = function () {
                        return this.dict
                    }, n.prototype.get = function (e) {
                        return this.dict[e]
                    }, n.prototype.extend = function (t) {
                        this.dict = e.extend({}, t.all(), this.dict)
                    }, n._cache = {}, n.loadPath = function (e) {
                        if (!(e in n._cache)) {
                            var i = t(e);
                            n._cache[e] = i
                        }
                        return new n(n._cache[e])
                    }, n
                }), t.define("select2/diacritics", [], function () {
                    return {
                        "â’¶": "A",
                        "ï¼¡": "A",
                        "Ã€": "A",
                        "Ã": "A",
                        "Ã‚": "A",
                        "áº¦": "A",
                        "áº¤": "A",
                        "áºª": "A",
                        "áº¨": "A",
                        "Ãƒ": "A",
                        "Ä€": "A",
                        "Ä‚": "A",
                        "áº°": "A",
                        "áº®": "A",
                        "áº´": "A",
                        "áº²": "A",
                        "È¦": "A",
                        "Ç ": "A",
                        "Ã„": "A",
                        "Çž": "A",
                        "áº¢": "A",
                        "Ã…": "A",
                        "Çº": "A",
                        "Ç": "A",
                        "È€": "A",
                        "È‚": "A",
                        "áº ": "A",
                        "áº¬": "A",
                        "áº¶": "A",
                        "á¸€": "A",
                        "Ä„": "A",
                        "Èº": "A",
                        "â±¯": "A",
                        "êœ²": "AA",
                        "Ã†": "AE",
                        "Ç¼": "AE",
                        "Ç¢": "AE",
                        "êœ´": "AO",
                        "êœ¶": "AU",
                        "êœ¸": "AV",
                        "êœº": "AV",
                        "êœ¼": "AY",
                        "â’·": "B",
                        "ï¼¢": "B",
                        "á¸‚": "B",
                        "á¸„": "B",
                        "á¸†": "B",
                        "Éƒ": "B",
                        "Æ‚": "B",
                        "Æ": "B",
                        "â’¸": "C",
                        "ï¼£": "C",
                        "Ä†": "C",
                        "Äˆ": "C",
                        "ÄŠ": "C",
                        "ÄŒ": "C",
                        "Ã‡": "C",
                        "á¸ˆ": "C",
                        "Æ‡": "C",
                        "È»": "C",
                        "êœ¾": "C",
                        "â’¹": "D",
                        "ï¼¤": "D",
                        "á¸Š": "D",
                        "ÄŽ": "D",
                        "á¸Œ": "D",
                        "á¸": "D",
                        "á¸’": "D",
                        "á¸Ž": "D",
                        "Ä": "D",
                        "Æ‹": "D",
                        "ÆŠ": "D",
                        "Æ‰": "D",
                        "ê¹": "D",
                        "Ç±": "DZ",
                        "Ç„": "DZ",
                        "Ç²": "Dz",
                        "Ç…": "Dz",
                        "â’º": "E",
                        "ï¼¥": "E",
                        "Ãˆ": "E",
                        "Ã‰": "E",
                        "ÃŠ": "E",
                        "á»€": "E",
                        "áº¾": "E",
                        "á»„": "E",
                        "á»‚": "E",
                        "áº¼": "E",
                        "Ä’": "E",
                        "á¸”": "E",
                        "á¸–": "E",
                        "Ä”": "E",
                        "Ä–": "E",
                        "Ã‹": "E",
                        "áºº": "E",
                        "Äš": "E",
                        "È„": "E",
                        "È†": "E",
                        "áº¸": "E",
                        "á»†": "E",
                        "È¨": "E",
                        "á¸œ": "E",
                        "Ä˜": "E",
                        "á¸˜": "E",
                        "á¸š": "E",
                        "Æ": "E",
                        "ÆŽ": "E",
                        "â’»": "F",
                        "ï¼¦": "F",
                        "á¸ž": "F",
                        "Æ‘": "F",
                        "ê»": "F",
                        "â’¼": "G",
                        "ï¼§": "G",
                        "Ç´": "G",
                        "Äœ": "G",
                        "á¸ ": "G",
                        "Äž": "G",
                        "Ä ": "G",
                        "Ç¦": "G",
                        "Ä¢": "G",
                        "Ç¤": "G",
                        "Æ“": "G",
                        "êž ": "G",
                        "ê½": "G",
                        "ê¾": "G",
                        "â’½": "H",
                        "ï¼¨": "H",
                        "Ä¤": "H",
                        "á¸¢": "H",
                        "á¸¦": "H",
                        "Èž": "H",
                        "á¸¤": "H",
                        "á¸¨": "H",
                        "á¸ª": "H",
                        "Ä¦": "H",
                        "â±§": "H",
                        "â±µ": "H",
                        "êž": "H",
                        "â’¾": "I",
                        "ï¼©": "I",
                        "ÃŒ": "I",
                        "Ã": "I",
                        "ÃŽ": "I",
                        "Ä¨": "I",
                        "Äª": "I",
                        "Ä¬": "I",
                        "Ä°": "I",
                        "Ã": "I",
                        "á¸®": "I",
                        "á»ˆ": "I",
                        "Ç": "I",
                        "Èˆ": "I",
                        "ÈŠ": "I",
                        "á»Š": "I",
                        "Ä®": "I",
                        "á¸¬": "I",
                        "Æ—": "I",
                        "â’¿": "J",
                        "ï¼ª": "J",
                        "Ä´": "J",
                        "Éˆ": "J",
                        "â“€": "K",
                        "ï¼«": "K",
                        "á¸°": "K",
                        "Ç¨": "K",
                        "á¸²": "K",
                        "Ä¶": "K",
                        "á¸´": "K",
                        "Æ˜": "K",
                        "â±©": "K",
                        "ê€": "K",
                        "ê‚": "K",
                        "ê„": "K",
                        "êž¢": "K",
                        "â“": "L",
                        "ï¼¬": "L",
                        "Ä¿": "L",
                        "Ä¹": "L",
                        "Ä½": "L",
                        "á¸¶": "L",
                        "á¸¸": "L",
                        "Ä»": "L",
                        "á¸¼": "L",
                        "á¸º": "L",
                        "Å": "L",
                        "È½": "L",
                        "â±¢": "L",
                        "â± ": "L",
                        "êˆ": "L",
                        "ê†": "L",
                        "êž€": "L",
                        "Ç‡": "LJ",
                        "Çˆ": "Lj",
                        "â“‚": "M",
                        "ï¼­": "M",
                        "á¸¾": "M",
                        "á¹€": "M",
                        "á¹‚": "M",
                        "â±®": "M",
                        "Æœ": "M",
                        "â“ƒ": "N",
                        "ï¼®": "N",
                        "Ç¸": "N",
                        "Åƒ": "N",
                        "Ã‘": "N",
                        "á¹„": "N",
                        "Å‡": "N",
                        "á¹†": "N",
                        "Å…": "N",
                        "á¹Š": "N",
                        "á¹ˆ": "N",
                        "È ": "N",
                        "Æ": "N",
                        "êž": "N",
                        "êž¤": "N",
                        "ÇŠ": "NJ",
                        "Ç‹": "Nj",
                        "â“„": "O",
                        "ï¼¯": "O",
                        "Ã’": "O",
                        "Ã“": "O",
                        "Ã”": "O",
                        "á»’": "O",
                        "á»": "O",
                        "á»–": "O",
                        "á»”": "O",
                        "Ã•": "O",
                        "á¹Œ": "O",
                        "È¬": "O",
                        "á¹Ž": "O",
                        "ÅŒ": "O",
                        "á¹": "O",
                        "á¹’": "O",
                        "ÅŽ": "O",
                        "È®": "O",
                        "È°": "O",
                        "Ã–": "O",
                        "Èª": "O",
                        "á»Ž": "O",
                        "Å": "O",
                        "Ç‘": "O",
                        "ÈŒ": "O",
                        "ÈŽ": "O",
                        "Æ ": "O",
                        "á»œ": "O",
                        "á»š": "O",
                        "á» ": "O",
                        "á»ž": "O",
                        "á»¢": "O",
                        "á»Œ": "O",
                        "á»˜": "O",
                        "Çª": "O",
                        "Ç¬": "O",
                        "Ã˜": "O",
                        "Ç¾": "O",
                        "Æ†": "O",
                        "ÆŸ": "O",
                        "êŠ": "O",
                        "êŒ": "O",
                        "Æ¢": "OI",
                        "êŽ": "OO",
                        "È¢": "OU",
                        "â“…": "P",
                        "ï¼°": "P",
                        "á¹”": "P",
                        "á¹–": "P",
                        "Æ¤": "P",
                        "â±£": "P",
                        "ê": "P",
                        "ê’": "P",
                        "ê”": "P",
                        "â“†": "Q",
                        "ï¼±": "Q",
                        "ê–": "Q",
                        "ê˜": "Q",
                        "ÉŠ": "Q",
                        "â“‡": "R",
                        "ï¼²": "R",
                        "Å”": "R",
                        "á¹˜": "R",
                        "Å˜": "R",
                        "È": "R",
                        "È’": "R",
                        "á¹š": "R",
                        "á¹œ": "R",
                        "Å–": "R",
                        "á¹ž": "R",
                        "ÉŒ": "R",
                        "â±¤": "R",
                        "êš": "R",
                        "êž¦": "R",
                        "êž‚": "R",
                        "â“ˆ": "S",
                        "ï¼³": "S",
                        "áºž": "S",
                        "Åš": "S",
                        "á¹¤": "S",
                        "Åœ": "S",
                        "á¹ ": "S",
                        "Å ": "S",
                        "á¹¦": "S",
                        "á¹¢": "S",
                        "á¹¨": "S",
                        "È˜": "S",
                        "Åž": "S",
                        "â±¾": "S",
                        "êž¨": "S",
                        "êž„": "S",
                        "â“‰": "T",
                        "ï¼´": "T",
                        "á¹ª": "T",
                        "Å¤": "T",
                        "á¹¬": "T",
                        "Èš": "T",
                        "Å¢": "T",
                        "á¹°": "T",
                        "á¹®": "T",
                        "Å¦": "T",
                        "Æ¬": "T",
                        "Æ®": "T",
                        "È¾": "T",
                        "êž†": "T",
                        "êœ¨": "TZ",
                        "â“Š": "U",
                        "ï¼µ": "U",
                        "Ã™": "U",
                        "Ãš": "U",
                        "Ã›": "U",
                        "Å¨": "U",
                        "á¹¸": "U",
                        "Åª": "U",
                        "á¹º": "U",
                        "Å¬": "U",
                        "Ãœ": "U",
                        "Ç›": "U",
                        "Ç—": "U",
                        "Ç•": "U",
                        "Ç™": "U",
                        "á»¦": "U",
                        "Å®": "U",
                        "Å°": "U",
                        "Ç“": "U",
                        "È”": "U",
                        "È–": "U",
                        "Æ¯": "U",
                        "á»ª": "U",
                        "á»¨": "U",
                        "á»®": "U",
                        "á»¬": "U",
                        "á»°": "U",
                        "á»¤": "U",
                        "á¹²": "U",
                        "Å²": "U",
                        "á¹¶": "U",
                        "á¹´": "U",
                        "É„": "U",
                        "â“‹": "V",
                        "ï¼¶": "V",
                        "á¹¼": "V",
                        "á¹¾": "V",
                        "Æ²": "V",
                        "êž": "V",
                        "É…": "V",
                        "ê ": "VY",
                        "â“Œ": "W",
                        "ï¼·": "W",
                        "áº€": "W",
                        "áº‚": "W",
                        "Å´": "W",
                        "áº†": "W",
                        "áº„": "W",
                        "áºˆ": "W",
                        "â±²": "W",
                        "â“": "X",
                        "ï¼¸": "X",
                        "áºŠ": "X",
                        "áºŒ": "X",
                        "â“Ž": "Y",
                        "ï¼¹": "Y",
                        "á»²": "Y",
                        "Ã": "Y",
                        "Å¶": "Y",
                        "á»¸": "Y",
                        "È²": "Y",
                        "áºŽ": "Y",
                        "Å¸": "Y",
                        "á»¶": "Y",
                        "á»´": "Y",
                        "Æ³": "Y",
                        "ÉŽ": "Y",
                        "á»¾": "Y",
                        "â“": "Z",
                        "ï¼º": "Z",
                        "Å¹": "Z",
                        "áº": "Z",
                        "Å»": "Z",
                        "Å½": "Z",
                        "áº’": "Z",
                        "áº”": "Z",
                        "Æµ": "Z",
                        "È¤": "Z",
                        "â±¿": "Z",
                        "â±«": "Z",
                        "ê¢": "Z",
                        "â“": "a",
                        "ï½": "a",
                        "áºš": "a",
                        "Ã ": "a",
                        "Ã¡": "a",
                        "Ã¢": "a",
                        "áº§": "a",
                        "áº¥": "a",
                        "áº«": "a",
                        "áº©": "a",
                        "Ã£": "a",
                        "Ä": "a",
                        "Äƒ": "a",
                        "áº±": "a",
                        "áº¯": "a",
                        "áºµ": "a",
                        "áº³": "a",
                        "È§": "a",
                        "Ç¡": "a",
                        "Ã¤": "a",
                        "ÇŸ": "a",
                        "áº£": "a",
                        "Ã¥": "a",
                        "Ç»": "a",
                        "ÇŽ": "a",
                        "È": "a",
                        "Èƒ": "a",
                        "áº¡": "a",
                        "áº­": "a",
                        "áº·": "a",
                        "á¸": "a",
                        "Ä…": "a",
                        "â±¥": "a",
                        "É": "a",
                        "êœ³": "aa",
                        "Ã¦": "ae",
                        "Ç½": "ae",
                        "Ç£": "ae",
                        "êœµ": "ao",
                        "êœ·": "au",
                        "êœ¹": "av",
                        "êœ»": "av",
                        "êœ½": "ay",
                        "â“‘": "b",
                        "ï½‚": "b",
                        "á¸ƒ": "b",
                        "á¸…": "b",
                        "á¸‡": "b",
                        "Æ€": "b",
                        "Æƒ": "b",
                        "É“": "b",
                        "â“’": "c",
                        "ï½ƒ": "c",
                        "Ä‡": "c",
                        "Ä‰": "c",
                        "Ä‹": "c",
                        "Ä": "c",
                        "Ã§": "c",
                        "á¸‰": "c",
                        "Æˆ": "c",
                        "È¼": "c",
                        "êœ¿": "c",
                        "â†„": "c",
                        "â““": "d",
                        "ï½„": "d",
                        "á¸‹": "d",
                        "Ä": "d",
                        "á¸": "d",
                        "á¸‘": "d",
                        "á¸“": "d",
                        "á¸": "d",
                        "Ä‘": "d",
                        "ÆŒ": "d",
                        "É–": "d",
                        "É—": "d",
                        "êº": "d",
                        "Ç³": "dz",
                        "Ç†": "dz",
                        "â“”": "e",
                        "ï½…": "e",
                        "Ã¨": "e",
                        "Ã©": "e",
                        "Ãª": "e",
                        "á»": "e",
                        "áº¿": "e",
                        "á»…": "e",
                        "á»ƒ": "e",
                        "áº½": "e",
                        "Ä“": "e",
                        "á¸•": "e",
                        "á¸—": "e",
                        "Ä•": "e",
                        "Ä—": "e",
                        "Ã«": "e",
                        "áº»": "e",
                        "Ä›": "e",
                        "È…": "e",
                        "È‡": "e",
                        "áº¹": "e",
                        "á»‡": "e",
                        "È©": "e",
                        "á¸": "e",
                        "Ä™": "e",
                        "á¸™": "e",
                        "á¸›": "e",
                        "É‡": "e",
                        "É›": "e",
                        "Ç": "e",
                        "â“•": "f",
                        "ï½†": "f",
                        "á¸Ÿ": "f",
                        "Æ’": "f",
                        "ê¼": "f",
                        "â“–": "g",
                        "ï½‡": "g",
                        "Çµ": "g",
                        "Ä": "g",
                        "á¸¡": "g",
                        "ÄŸ": "g",
                        "Ä¡": "g",
                        "Ç§": "g",
                        "Ä£": "g",
                        "Ç¥": "g",
                        "É ": "g",
                        "êž¡": "g",
                        "áµ¹": "g",
                        "ê¿": "g",
                        "â“—": "h",
                        "ï½ˆ": "h",
                        "Ä¥": "h",
                        "á¸£": "h",
                        "á¸§": "h",
                        "ÈŸ": "h",
                        "á¸¥": "h",
                        "á¸©": "h",
                        "á¸«": "h",
                        "áº–": "h",
                        "Ä§": "h",
                        "â±¨": "h",
                        "â±¶": "h",
                        "É¥": "h",
                        "Æ•": "hv",
                        "â“˜": "i",
                        "ï½‰": "i",
                        "Ã¬": "i",
                        "Ã­": "i",
                        "Ã®": "i",
                        "Ä©": "i",
                        "Ä«": "i",
                        "Ä­": "i",
                        "Ã¯": "i",
                        "á¸¯": "i",
                        "á»‰": "i",
                        "Ç": "i",
                        "È‰": "i",
                        "È‹": "i",
                        "á»‹": "i",
                        "Ä¯": "i",
                        "á¸­": "i",
                        "É¨": "i",
                        "Ä±": "i",
                        "â“™": "j",
                        "ï½Š": "j",
                        "Äµ": "j",
                        "Ç°": "j",
                        "É‰": "j",
                        "â“š": "k",
                        "ï½‹": "k",
                        "á¸±": "k",
                        "Ç©": "k",
                        "á¸³": "k",
                        "Ä·": "k",
                        "á¸µ": "k",
                        "Æ™": "k",
                        "â±ª": "k",
                        "ê": "k",
                        "êƒ": "k",
                        "ê…": "k",
                        "êž£": "k",
                        "â“›": "l",
                        "ï½Œ": "l",
                        "Å€": "l",
                        "Äº": "l",
                        "Ä¾": "l",
                        "á¸·": "l",
                        "á¸¹": "l",
                        "Ä¼": "l",
                        "á¸½": "l",
                        "á¸»": "l",
                        "Å¿": "l",
                        "Å‚": "l",
                        "Æš": "l",
                        "É«": "l",
                        "â±¡": "l",
                        "ê‰": "l",
                        "êž": "l",
                        "ê‡": "l",
                        "Ç‰": "lj",
                        "â“œ": "m",
                        "ï½": "m",
                        "á¸¿": "m",
                        "á¹": "m",
                        "á¹ƒ": "m",
                        "É±": "m",
                        "É¯": "m",
                        "â“": "n",
                        "ï½Ž": "n",
                        "Ç¹": "n",
                        "Å„": "n",
                        "Ã±": "n",
                        "á¹…": "n",
                        "Åˆ": "n",
                        "á¹‡": "n",
                        "Å†": "n",
                        "á¹‹": "n",
                        "á¹‰": "n",
                        "Æž": "n",
                        "É²": "n",
                        "Å‰": "n",
                        "êž‘": "n",
                        "êž¥": "n",
                        "ÇŒ": "nj",
                        "â“ž": "o",
                        "ï½": "o",
                        "Ã²": "o",
                        "Ã³": "o",
                        "Ã´": "o",
                        "á»“": "o",
                        "á»‘": "o",
                        "á»—": "o",
                        "á»•": "o",
                        "Ãµ": "o",
                        "á¹": "o",
                        "È­": "o",
                        "á¹": "o",
                        "Å": "o",
                        "á¹‘": "o",
                        "á¹“": "o",
                        "Å": "o",
                        "È¯": "o",
                        "È±": "o",
                        "Ã¶": "o",
                        "È«": "o",
                        "á»": "o",
                        "Å‘": "o",
                        "Ç’": "o",
                        "È": "o",
                        "È": "o",
                        "Æ¡": "o",
                        "á»": "o",
                        "á»›": "o",
                        "á»¡": "o",
                        "á»Ÿ": "o",
                        "á»£": "o",
                        "á»": "o",
                        "á»™": "o",
                        "Ç«": "o",
                        "Ç­": "o",
                        "Ã¸": "o",
                        "Ç¿": "o",
                        "É”": "o",
                        "ê‹": "o",
                        "ê": "o",
                        "Éµ": "o",
                        "Æ£": "oi",
                        "È£": "ou",
                        "ê": "oo",
                        "â“Ÿ": "p",
                        "ï½": "p",
                        "á¹•": "p",
                        "á¹—": "p",
                        "Æ¥": "p",
                        "áµ½": "p",
                        "ê‘": "p",
                        "ê“": "p",
                        "ê•": "p",
                        "â“ ": "q",
                        "ï½‘": "q",
                        "É‹": "q",
                        "ê—": "q",
                        "ê™": "q",
                        "â“¡": "r",
                        "ï½’": "r",
                        "Å•": "r",
                        "á¹™": "r",
                        "Å™": "r",
                        "È‘": "r",
                        "È“": "r",
                        "á¹›": "r",
                        "á¹": "r",
                        "Å—": "r",
                        "á¹Ÿ": "r",
                        "É": "r",
                        "É½": "r",
                        "ê›": "r",
                        "êž§": "r",
                        "êžƒ": "r",
                        "â“¢": "s",
                        "ï½“": "s",
                        "ÃŸ": "s",
                        "Å›": "s",
                        "á¹¥": "s",
                        "Å": "s",
                        "á¹¡": "s",
                        "Å¡": "s",
                        "á¹§": "s",
                        "á¹£": "s",
                        "á¹©": "s",
                        "È™": "s",
                        "ÅŸ": "s",
                        "È¿": "s",
                        "êž©": "s",
                        "êž…": "s",
                        "áº›": "s",
                        "â“£": "t",
                        "ï½”": "t",
                        "á¹«": "t",
                        "áº—": "t",
                        "Å¥": "t",
                        "á¹­": "t",
                        "È›": "t",
                        "Å£": "t",
                        "á¹±": "t",
                        "á¹¯": "t",
                        "Å§": "t",
                        "Æ­": "t",
                        "Êˆ": "t",
                        "â±¦": "t",
                        "êž‡": "t",
                        "êœ©": "tz",
                        "â“¤": "u",
                        "ï½•": "u",
                        "Ã¹": "u",
                        "Ãº": "u",
                        "Ã»": "u",
                        "Å©": "u",
                        "á¹¹": "u",
                        "Å«": "u",
                        "á¹»": "u",
                        "Å­": "u",
                        "Ã¼": "u",
                        "Çœ": "u",
                        "Ç˜": "u",
                        "Ç–": "u",
                        "Çš": "u",
                        "á»§": "u",
                        "Å¯": "u",
                        "Å±": "u",
                        "Ç”": "u",
                        "È•": "u",
                        "È—": "u",
                        "Æ°": "u",
                        "á»«": "u",
                        "á»©": "u",
                        "á»¯": "u",
                        "á»­": "u",
                        "á»±": "u",
                        "á»¥": "u",
                        "á¹³": "u",
                        "Å³": "u",
                        "á¹·": "u",
                        "á¹µ": "u",
                        "Ê‰": "u",
                        "â“¥": "v",
                        "ï½–": "v",
                        "á¹½": "v",
                        "á¹¿": "v",
                        "Ê‹": "v",
                        "êŸ": "v",
                        "ÊŒ": "v",
                        "ê¡": "vy",
                        "â“¦": "w",
                        "ï½—": "w",
                        "áº": "w",
                        "áºƒ": "w",
                        "Åµ": "w",
                        "áº‡": "w",
                        "áº…": "w",
                        "áº˜": "w",
                        "áº‰": "w",
                        "â±³": "w",
                        "â“§": "x",
                        "ï½˜": "x",
                        "áº‹": "x",
                        "áº": "x",
                        "â“¨": "y",
                        "ï½™": "y",
                        "á»³": "y",
                        "Ã½": "y",
                        "Å·": "y",
                        "á»¹": "y",
                        "È³": "y",
                        "áº": "y",
                        "Ã¿": "y",
                        "á»·": "y",
                        "áº™": "y",
                        "á»µ": "y",
                        "Æ´": "y",
                        "É": "y",
                        "á»¿": "y",
                        "â“©": "z",
                        "ï½š": "z",
                        "Åº": "z",
                        "áº‘": "z",
                        "Å¼": "z",
                        "Å¾": "z",
                        "áº“": "z",
                        "áº•": "z",
                        "Æ¶": "z",
                        "È¥": "z",
                        "É€": "z",
                        "â±¬": "z",
                        "ê£": "z",
                        "Î†": "Î‘",
                        "Îˆ": "Î•",
                        "Î‰": "Î—",
                        "ÎŠ": "Î™",
                        "Îª": "Î™",
                        "ÎŒ": "ÎŸ",
                        "ÎŽ": "Î¥",
                        "Î«": "Î¥",
                        "Î": "Î©",
                        "Î¬": "Î±",
                        "Î­": "Îµ",
                        "Î®": "Î·",
                        "Î¯": "Î¹",
                        "ÏŠ": "Î¹",
                        "Î": "Î¹",
                        "ÏŒ": "Î¿",
                        "Ï": "Ï…",
                        "Ï‹": "Ï…",
                        "Î°": "Ï…",
                        "Ï‰": "Ï‰",
                        "Ï‚": "Ïƒ"
                    }
                }), t.define("select2/data/base", ["../utils"], function (e) {
                    function t(e, n) {
                        t.__super__.constructor.call(this)
                    }

                    return e.Extend(t, e.Observable), t.prototype.current = function (e) {
                        throw new Error("The `current` method must be defined in child classes.")
                    }, t.prototype.query = function (e, t) {
                        throw new Error("The `query` method must be defined in child classes.")
                    }, t.prototype.bind = function (e, t) {
                    }, t.prototype.destroy = function () {
                    }, t.prototype.generateResultId = function (t, n) {
                        var i = t.id + "-result-";
                        return i += e.generateChars(4), i += null != n.id ? "-" + n.id.toString() : "-" + e.generateChars(4)
                    }, t
                }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, n) {
                    function i(e, t) {
                        this.$element = e, this.options = t, i.__super__.constructor.call(this)
                    }

                    return t.Extend(i, e), i.prototype.current = function (e) {
                        var t = [], i = this;
                        this.$element.find(":selected").each(function () {
                            var e = n(this), o = i.item(e);
                            t.push(o)
                        }), e(t)
                    }, i.prototype.select = function (e) {
                        var t = this;
                        if (e.selected = !0, n(e.element).is("option"))return e.element.selected = !0, void this.$element.trigger("change");
                        if (this.$element.prop("multiple")) this.current(function (i) {
                            var o = [];
                            (e = [e]).push.apply(e, i);
                            for (var s = 0; s < e.length; s++) {
                                var r = e[s].id;
                                -1 === n.inArray(r, o) && o.push(r)
                            }
                            t.$element.val(o), t.$element.trigger("change")
                        }); else {
                            var i = e.id;
                            this.$element.val(i), this.$element.trigger("change")
                        }
                    }, i.prototype.unselect = function (e) {
                        var t = this;
                        if (this.$element.prop("multiple"))return e.selected = !1, n(e.element).is("option") ? (e.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (i) {
                            for (var o = [], s = 0; s < i.length; s++) {
                                var r = i[s].id;
                                r !== e.id && -1 === n.inArray(r, o) && o.push(r)
                            }
                            t.$element.val(o), t.$element.trigger("change")
                        })
                    }, i.prototype.bind = function (e, t) {
                        var n = this;
                        this.container = e, e.on("select", function (e) {
                            n.select(e.data)
                        }), e.on("unselect", function (e) {
                            n.unselect(e.data)
                        })
                    }, i.prototype.destroy = function () {
                        this.$element.find("*").each(function () {
                            n.removeData(this, "data")
                        })
                    }, i.prototype.query = function (e, t) {
                        var i = [], o = this;
                        this.$element.children().each(function () {
                            var t = n(this);
                            if (t.is("option") || t.is("optgroup")) {
                                var s = o.item(t), r = o.matches(e, s);
                                null !== r && i.push(r)
                            }
                        }), t({results: i})
                    }, i.prototype.addOptions = function (e) {
                        t.appendMany(this.$element, e)
                    }, i.prototype.option = function (e) {
                        var t;
                        e.children ? (t = document.createElement("optgroup"), t.label = e.text) : (t = document.createElement("option"), void 0 !== t.textContent ? t.textContent = e.text : t.innerText = e.text), e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                        var i = n(t), o = this._normalizeItem(e);
                        return o.element = t, n.data(t, "data", o), i
                    }, i.prototype.item = function (e) {
                        var t = {};
                        if (null != (t = n.data(e[0], "data")))return t;
                        if (e.is("option")) t = {
                            id: e.val(),
                            text: e.text(),
                            disabled: e.prop("disabled"),
                            selected: e.prop("selected"),
                            title: e.prop("title")
                        }; else if (e.is("optgroup")) {
                            t = {text: e.prop("label"), children: [], title: e.prop("title")};
                            for (var i = e.children("option"), o = [], s = 0; s < i.length; s++) {
                                var r = n(i[s]), a = this.item(r);
                                o.push(a)
                            }
                            t.children = o
                        }
                        return t = this._normalizeItem(t), t.element = e[0], n.data(e[0], "data", t), t
                    }, i.prototype._normalizeItem = function (e) {
                        n.isPlainObject(e) || (e = {id: e, text: e});
                        var t = {selected: !1, disabled: !1};
                        return null != (e = n.extend({}, {text: ""}, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, t, e)
                    }, i.prototype.matches = function (e, t) {
                        return this.options.get("matcher")(e, t)
                    }, i
                }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, n) {
                    function i(e, t) {
                        var n = t.get("data") || [];
                        i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
                    }

                    return t.Extend(i, e), i.prototype.select = function (e) {
                        var t = this.$element.find("option").filter(function (t, n) {
                            return n.value == e.id.toString()
                        });
                        0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
                    }, i.prototype.convertToOptions = function (e) {
                        for (var i = this, o = this.$element.find("option"), s = o.map(function () {
                            return i.item(n(this)).id
                        }).get(), r = [], a = 0; a < e.length; a++) {
                            var l = this._normalizeItem(e[a]);
                            if (n.inArray(l.id, s) >= 0) {
                                var u = o.filter(function (e) {
                                    return function () {
                                        return n(this).val() == e.id
                                    }
                                }(l)), c = this.item(u), d = n.extend(!0, {}, l, c), p = this.option(d);
                                u.replaceWith(p)
                            } else {
                                var h = this.option(l);
                                if (l.children) {
                                    var f = this.convertToOptions(l.children);
                                    t.appendMany(h, f)
                                }
                                r.push(h)
                            }
                        }
                        return r
                    }, i
                }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, n) {
                    function i(e, t) {
                        this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)
                    }

                    return t.Extend(i, e), i.prototype._applyDefaults = function (e) {
                        var t = {
                            data: function (e) {
                                return n.extend({}, e, {q: e.term})
                            }, transport: function (e, t, i) {
                                var o = n.ajax(e);
                                return o.then(t), o.fail(i), o
                            }
                        };
                        return n.extend({}, t, e, !0)
                    }, i.prototype.processResults = function (e) {
                        return e
                    }, i.prototype.query = function (e, t) {
                        function i() {
                            var i = s.transport(s, function (i) {
                                var s = o.processResults(i, e);
                                o.options.get("debug") && window.console && console.error && (s && s.results && n.isArray(s.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(s)
                            }, function () {
                                i.status && "0" === i.status || o.trigger("results:message", {message: "errorLoading"})
                            });
                            o._request = i
                        }

                        var o = this;
                        null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var s = n.extend({type: "GET"}, this.ajaxOptions);
                        "function" == typeof s.url && (s.url = s.url.call(this.$element, e)), "function" == typeof s.data && (s.data = s.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
                    }, i
                }), t.define("select2/data/tags", ["jquery"], function (e) {
                    function t(t, n, i) {
                        var o = i.get("tags"), s = i.get("createTag");
                        void 0 !== s && (this.createTag = s);
                        var r = i.get("insertTag");
                        if (void 0 !== r && (this.insertTag = r), t.call(this, n, i), e.isArray(o))for (var a = 0; a < o.length; a++) {
                            var l = o[a], u = this._normalizeItem(l), c = this.option(u);
                            this.$element.append(c)
                        }
                    }

                    return t.prototype.query = function (e, t, n) {
                        function i(e, s) {
                            for (var r = e.results, a = 0; a < r.length; a++) {
                                var l = r[a], u = null != l.children && !i({results: l.children}, !0);
                                if (l.text === t.term || u)return !s && (e.data = r, void n(e))
                            }
                            if (s)return !0;
                            var c = o.createTag(t);
                            if (null != c) {
                                var d = o.option(c);
                                d.attr("data-select2-tag", !0), o.addOptions([d]), o.insertTag(r, c)
                            }
                            e.results = r, n(e)
                        }

                        var o = this;
                        return this._removeOldTags(), null == t.term || null != t.page ? void e.call(this, t, n) : void e.call(this, t, i)
                    }, t.prototype.createTag = function (t, n) {
                        var i = e.trim(n.term);
                        return "" === i ? null : {id: i, text: i}
                    }, t.prototype.insertTag = function (e, t, n) {
                        t.unshift(n)
                    }, t.prototype._removeOldTags = function (t) {
                        (this._lastTag, this.$element.find("option[data-select2-tag]")).each(function () {
                            this.selected || e(this).remove()
                        })
                    }, t
                }), t.define("select2/data/tokenizer", ["jquery"], function (e) {
                    function t(e, t, n) {
                        var i = n.get("tokenizer");
                        void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
                    }

                    return t.prototype.bind = function (e, t, n) {
                        e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                    }, t.prototype.query = function (t, n, i) {
                        function o(e) {
                            s.trigger("select", {data: e})
                        }

                        var s = this;
                        n.term = n.term || "";
                        var r = this.tokenizer(n, this.options, function (t) {
                            var n = s._normalizeItem(t);
                            if (!s.$element.find("option").filter(function () {
                                    return e(this).val() === n.id
                                }).length) {
                                var i = s.option(n);
                                i.attr("data-select2-tag", !0), s._removeOldTags(), s.addOptions([i])
                            }
                            o(n)
                        });
                        r.term !== n.term && (this.$search.length && (this.$search.val(r.term), this.$search.focus()), n.term = r.term), t.call(this, n, i)
                    }, t.prototype.tokenizer = function (t, n, i, o) {
                        for (var s = i.get("tokenSeparators") || [], r = n.term, a = 0,
                                 l = this.createTag || function (e) {
                                         return {id: e.term, text: e.term}
                                     }; a < r.length;) {
                            var u = r[a];
                            if (-1 !== e.inArray(u, s)) {
                                var c = r.substr(0, a), d = l(e.extend({}, n, {term: c}));
                                null != d ? (o(d), r = r.substr(a + 1) || "", a = 0) : a++
                            } else a++
                        }
                        return {term: r}
                    }, t
                }), t.define("select2/data/minimumInputLength", [], function () {
                    function e(e, t, n) {
                        this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                    }

                    return e.prototype.query = function (e, t, n) {
                        return t.term = t.term || "", t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {minimum: this.minimumInputLength, input: t.term, params: t}
                        }) : void e.call(this, t, n)
                    }, e
                }), t.define("select2/data/maximumInputLength", [], function () {
                    function e(e, t, n) {
                        this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                    }

                    return e.prototype.query = function (e, t, n) {
                        return t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {maximum: this.maximumInputLength, input: t.term, params: t}
                        }) : void e.call(this, t, n)
                    }, e
                }), t.define("select2/data/maximumSelectionLength", [], function () {
                    function e(e, t, n) {
                        this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                    }

                    return e.prototype.query = function (e, t, n) {
                        var i = this;
                        this.current(function (o) {
                            var s = null != o ? o.length : 0;
                            return i.maximumSelectionLength > 0 && s >= i.maximumSelectionLength ? void i.trigger("results:message", {
                                message: "maximumSelected",
                                args: {maximum: i.maximumSelectionLength}
                            }) : void e.call(i, t, n)
                        })
                    }, e
                }), t.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
                    function n(e, t) {
                        this.$element = e, this.options = t, n.__super__.constructor.call(this)
                    }

                    return t.Extend(n, t.Observable), n.prototype.render = function () {
                        var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                        return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
                    }, n.prototype.bind = function () {
                    }, n.prototype.position = function (e, t) {
                    }, n.prototype.destroy = function () {
                        this.$dropdown.remove()
                    }, n
                }), t.define("select2/dropdown/search", ["jquery", "../utils"], function (e, t) {
                    function n() {
                    }

                    return n.prototype.render = function (t) {
                        var n = t.call(this),
                            i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                        return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
                    }, n.prototype.bind = function (t, n, i) {
                        var o = this;
                        t.call(this, n, i), this.$search.on("keydown", function (e) {
                            o.trigger("keypress", e), o._keyUpPrevented = e.isDefaultPrevented()
                        }), this.$search.on("input", function (t) {
                            e(this).off("keyup")
                        }), this.$search.on("keyup input", function (e) {
                            o.handleSearch(e)
                        }), n.on("open", function () {
                            o.$search.attr("tabindex", 0), o.$search.focus(), window.setTimeout(function () {
                                o.$search.focus()
                            }, 0)
                        }), n.on("close", function () {
                            o.$search.attr("tabindex", -1), o.$search.val("")
                        }), n.on("focus", function () {
                            n.isOpen() && o.$search.focus()
                        }), n.on("results:all", function (e) {
                            null != e.query.term && "" !== e.query.term || (o.showSearch(e) ? o.$searchContainer.removeClass("select2-search--hide") : o.$searchContainer.addClass("select2-search--hide"))
                        })
                    }, n.prototype.handleSearch = function (e) {
                        if (!this._keyUpPrevented) {
                            var t = this.$search.val();
                            this.trigger("query", {term: t})
                        }
                        this._keyUpPrevented = !1
                    }, n.prototype.showSearch = function (e, t) {
                        return !0
                    }, n
                }), t.define("select2/dropdown/hidePlaceholder", [], function () {
                    function e(e, t, n, i) {
                        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
                    }

                    return e.prototype.append = function (e, t) {
                        t.results = this.removePlaceholder(t.results), e.call(this, t)
                    }, e.prototype.normalizePlaceholder = function (e, t) {
                        return "string" == typeof t && (t = {id: "", text: t}), t
                    }, e.prototype.removePlaceholder = function (e, t) {
                        for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                            var o = t[i];
                            this.placeholder.id === o.id && n.splice(i, 1)
                        }
                        return n
                    }, e
                }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
                    function t(e, t, n, i) {
                        this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                    }

                    return t.prototype.append = function (e, t) {
                        this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                    }, t.prototype.bind = function (t, n, i) {
                        var o = this;
                        t.call(this, n, i), n.on("query", function (e) {
                            o.lastParams = e, o.loading = !0
                        }), n.on("query:append", function (e) {
                            o.lastParams = e, o.loading = !0
                        }), this.$results.on("scroll", function () {
                            var t = e.contains(document.documentElement, o.$loadingMore[0]);
                            !o.loading && t && o.$results.offset().top + o.$results.outerHeight(!1) + 50 >= o.$loadingMore.offset().top + o.$loadingMore.outerHeight(!1) && o.loadMore()
                        })
                    }, t.prototype.loadMore = function () {
                        this.loading = !0;
                        var t = e.extend({}, {page: 1}, this.lastParams);
                        t.page++, this.trigger("query:append", t)
                    }, t.prototype.showLoadingMore = function (e, t) {
                        return t.pagination && t.pagination.more
                    }, t.prototype.createLoadingMore = function () {
                        var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            n = this.options.get("translations").get("loadingMore");
                        return t.html(n(this.lastParams)), t
                    }, t
                }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (e, t) {
                    function n(t, n, i) {
                        this.$dropdownParent = i.get("dropdownParent") || e(document.body), t.call(this, n, i)
                    }

                    return n.prototype.bind = function (e, t, n) {
                        var i = this, o = !1;
                        e.call(this, t, n), t.on("open", function () {
                            i._showDropdown(), i._attachPositioningHandler(t), o || (o = !0, t.on("results:all", function () {
                                i._positionDropdown(), i._resizeDropdown()
                            }), t.on("results:append", function () {
                                i._positionDropdown(), i._resizeDropdown()
                            }))
                        }), t.on("close", function () {
                            i._hideDropdown(), i._detachPositioningHandler(t)
                        }), this.$dropdownContainer.on("mousedown", function (e) {
                            e.stopPropagation()
                        })
                    }, n.prototype.destroy = function (e) {
                        e.call(this), this.$dropdownContainer.remove()
                    }, n.prototype.position = function (e, t, n) {
                        t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                            position: "absolute",
                            top: -999999
                        }), this.$container = n
                    }, n.prototype.render = function (t) {
                        var n = e("<span></span>"), i = t.call(this);
                        return n.append(i), this.$dropdownContainer = n, n
                    }, n.prototype._hideDropdown = function (e) {
                        this.$dropdownContainer.detach()
                    }, n.prototype._attachPositioningHandler = function (n, i) {
                        var o = this, s = "scroll.select2." + i.id, r = "resize.select2." + i.id,
                            a = "orientationchange.select2." + i.id, l = this.$container.parents().filter(t.hasScroll);
                        l.each(function () {
                            e(this).data("select2-scroll-position", {x: e(this).scrollLeft(), y: e(this).scrollTop()})
                        }), l.on(s, function (t) {
                            var n = e(this).data("select2-scroll-position");
                            e(this).scrollTop(n.y)
                        }), e(window).on(s + " " + r + " " + a, function (e) {
                            o._positionDropdown(), o._resizeDropdown()
                        })
                    }, n.prototype._detachPositioningHandler = function (n, i) {
                        var o = "scroll.select2." + i.id, s = "resize.select2." + i.id,
                            r = "orientationchange.select2." + i.id;
                        this.$container.parents().filter(t.hasScroll).off(o), e(window).off(o + " " + s + " " + r)
                    }, n.prototype._positionDropdown = function () {
                        var t = e(window), n = this.$dropdown.hasClass("select2-dropdown--above"),
                            i = this.$dropdown.hasClass("select2-dropdown--below"), o = null,
                            s = this.$container.offset();
                        s.bottom = s.top + this.$container.outerHeight(!1);
                        var r = {height: this.$container.outerHeight(!1)};
                        r.top = s.top, r.bottom = s.top + r.height;
                        var a = {height: this.$dropdown.outerHeight(!1)},
                            l = {top: t.scrollTop(), bottom: t.scrollTop() + t.height()}, u = l.top < s.top - a.height,
                            c = l.bottom > s.bottom + a.height, d = {left: s.left, top: r.bottom},
                            p = this.$dropdownParent;
                        "static" === p.css("position") && (p = p.offsetParent());
                        var h = p.offset();
                        d.top -= h.top, d.left -= h.left, n || i || (o = "below"), c || !u || n ? !u && c && n && (o = "below") : o = "above", ("above" == o || n && "below" !== o) && (d.top = r.top - h.top - a.height), null != o && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + o), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + o)), this.$dropdownContainer.css(d)
                    }, n.prototype._resizeDropdown = function () {
                        var e = {width: this.$container.outerWidth(!1) + "px"};
                        this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                    }, n.prototype._showDropdown = function (e) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                    }, n
                }), t.define("select2/dropdown/minimumResultsForSearch", [], function () {
                    function e(t) {
                        for (var n = 0, i = 0; i < t.length; i++) {
                            var o = t[i];
                            o.children ? n += e(o.children) : n++
                        }
                        return n
                    }

                    function t(e, t, n, i) {
                        this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
                    }

                    return t.prototype.showSearch = function (t, n) {
                        return !(e(n.data.results) < this.minimumResultsForSearch) && t.call(this, n)
                    }, t
                }), t.define("select2/dropdown/selectOnClose", [], function () {
                    function e() {
                    }

                    return e.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n), t.on("close", function (e) {
                            i._handleSelectOnClose(e)
                        })
                    }, e.prototype._handleSelectOnClose = function (e, t) {
                        if (t && null != t.originalSelect2Event) {
                            var n = t.originalSelect2Event;
                            if ("select" === n._type || "unselect" === n._type)return
                        }
                        var i = this.getHighlightedResults();
                        if (!(i.length < 1)) {
                            var o = i.data("data");
                            null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {data: o})
                        }
                    }, e
                }), t.define("select2/dropdown/closeOnSelect", [], function () {
                    function e() {
                    }

                    return e.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n), t.on("select", function (e) {
                            i._selectTriggered(e)
                        }), t.on("unselect", function (e) {
                            i._selectTriggered(e)
                        })
                    }, e.prototype._selectTriggered = function (e, t) {
                        var n = t.originalEvent;
                        n && n.ctrlKey || this.trigger("close", {originalEvent: n, originalSelect2Event: t})
                    }, e
                }), t.define("select2/i18n/en", [], function () {
                    return {
                        errorLoading: function () {
                            return "The results could not be loaded."
                        }, inputTooLong: function (e) {
                            var t = e.input.length - e.maximum, n = "Please delete " + t + " character";
                            return 1 != t && (n += "s"), n
                        }, inputTooShort: function (e) {
                            return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                        }, loadingMore: function () {
                            return "Loading more resultsâ€¦"
                        }, maximumSelected: function (e) {
                            var t = "You can only select " + e.maximum + " item";
                            return 1 != e.maximum && (t += "s"), t
                        }, noResults: function () {
                            return "No results found"
                        }, searching: function () {
                            return "Searchingâ€¦"
                        }
                    }
                }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (e, t, n, i, o, s, r, a, l, u, c, d, p, h, f, m, g, v, y, b, w, x, T, C, j, k, S, E, $) {
                    function A() {
                        this.reset()
                    }

                    return A.prototype.apply = function (d) {
                        if (null == (d = e.extend(!0, {}, this.defaults, d)).dataAdapter) {
                            if (null != d.ajax ? d.dataAdapter = f : null != d.data ? d.dataAdapter = h : d.dataAdapter = p, d.minimumInputLength > 0 && (d.dataAdapter = u.Decorate(d.dataAdapter, v)), d.maximumInputLength > 0 && (d.dataAdapter = u.Decorate(d.dataAdapter, y)), d.maximumSelectionLength > 0 && (d.dataAdapter = u.Decorate(d.dataAdapter, b)), d.tags && (d.dataAdapter = u.Decorate(d.dataAdapter, m)), null == d.tokenSeparators && null == d.tokenizer || (d.dataAdapter = u.Decorate(d.dataAdapter, g)), null != d.query) {
                                var $ = t(d.amdBase + "compat/query");
                                d.dataAdapter = u.Decorate(d.dataAdapter, $)
                            }
                            if (null != d.initSelection) {
                                var A = t(d.amdBase + "compat/initSelection");
                                d.dataAdapter = u.Decorate(d.dataAdapter, A)
                            }
                        }
                        if (null == d.resultsAdapter && (d.resultsAdapter = n, null != d.ajax && (d.resultsAdapter = u.Decorate(d.resultsAdapter, C)), null != d.placeholder && (d.resultsAdapter = u.Decorate(d.resultsAdapter, T)), d.selectOnClose && (d.resultsAdapter = u.Decorate(d.resultsAdapter, S))), null == d.dropdownAdapter) {
                            if (d.multiple) d.dropdownAdapter = w; else {
                                var _ = u.Decorate(w, x);
                                d.dropdownAdapter = _
                            }
                            if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = u.Decorate(d.dropdownAdapter, k)), d.closeOnSelect && (d.dropdownAdapter = u.Decorate(d.dropdownAdapter, E)), null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                                var I = t(d.amdBase + "compat/dropdownCss");
                                d.dropdownAdapter = u.Decorate(d.dropdownAdapter, I)
                            }
                            d.dropdownAdapter = u.Decorate(d.dropdownAdapter, j)
                        }
                        if (null == d.selectionAdapter) {
                            if (d.multiple ? d.selectionAdapter = o : d.selectionAdapter = i, null != d.placeholder && (d.selectionAdapter = u.Decorate(d.selectionAdapter, s)), d.allowClear && (d.selectionAdapter = u.Decorate(d.selectionAdapter, r)), d.multiple && (d.selectionAdapter = u.Decorate(d.selectionAdapter, a)), null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                                var D = t(d.amdBase + "compat/containerCss");
                                d.selectionAdapter = u.Decorate(d.selectionAdapter, D)
                            }
                            d.selectionAdapter = u.Decorate(d.selectionAdapter, l)
                        }
                        if ("string" == typeof d.language)if (d.language.indexOf("-") > 0) {
                            var P = d.language.split("-")[0];
                            d.language = [d.language, P]
                        } else d.language = [d.language];
                        if (e.isArray(d.language)) {
                            var N = new c;
                            d.language.push("en");
                            for (var M = d.language, F = 0; F < M.length; F++) {
                                var O = M[F], L = {};
                                try {
                                    L = c.loadPath(O)
                                } catch (e) {
                                    try {
                                        O = this.defaults.amdLanguageBase + O, L = c.loadPath(O)
                                    } catch (e) {
                                        d.debug && window.console && console.warn && console.warn('Select2: The language file for "' + O + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                N.extend(L)
                            }
                            d.translations = N
                        } else {
                            var R = c.loadPath(this.defaults.amdLanguageBase + "en"), q = new c(d.language);
                            q.extend(R), d.translations = q
                        }
                        return d
                    }, A.prototype.reset = function () {
                        function t(e) {
                            return e.replace(/[^\u0000-\u007E]/g, function (e) {
                                return d[e] || e
                            })
                        }

                        function n(i, o) {
                            if ("" === e.trim(i.term))return o;
                            if (o.children && o.children.length > 0) {
                                for (var s = e.extend(!0, {}, o),
                                         r = o.children.length - 1; r >= 0; r--)null == n(i, o.children[r]) && s.children.splice(r, 1);
                                return s.children.length > 0 ? s : n(i, s)
                            }
                            var a = t(o.text).toUpperCase(), l = t(i.term).toUpperCase();
                            return a.indexOf(l) > -1 ? o : null
                        }

                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: u.escapeMarkup,
                            language: $,
                            matcher: n,
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function (e) {
                                return e
                            },
                            templateResult: function (e) {
                                return e.text
                            },
                            templateSelection: function (e) {
                                return e.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }, A.prototype.set = function (t, n) {
                        var i = {};
                        i[e.camelCase(t)] = n;
                        var o = u._convertData(i);
                        e.extend(this.defaults, o)
                    }, new A
                }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (e, t, n, i) {
                    function o(t, o) {
                        if (this.options = t, null != o && this.fromElement(o), this.options = n.apply(this.options), o && o.is("input")) {
                            var s = e(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = i.Decorate(this.options.dataAdapter, s)
                        }
                    }

                    return o.prototype.fromElement = function (e) {
                        var n = ["select2"];
                        null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                        var o = {};
                        o = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                        var s = t.extend(!0, {}, o);
                        s = i._convertData(s);
                        for (var r in s)t.inArray(r, n) > -1 || (t.isPlainObject(this.options[r]) ? t.extend(this.options[r], s[r]) : this.options[r] = s[r]);
                        return this
                    }, o.prototype.get = function (e) {
                        return this.options[e]
                    }, o.prototype.set = function (e, t) {
                        this.options[e] = t
                    }, o
                }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (e, t, n, i) {
                    var o = function (e, n) {
                        null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), n = n || {}, this.options = new t(n, e), o.__super__.constructor.call(this);
                        var i = e.attr("tabindex") || 0;
                        e.data("old-tabindex", i), e.attr("tabindex", "-1");
                        var s = this.options.get("dataAdapter");
                        this.dataAdapter = new s(e, this.options);
                        var r = this.render();
                        this._placeContainer(r);
                        var a = this.options.get("selectionAdapter");
                        this.selection = new a(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r);
                        var l = this.options.get("dropdownAdapter");
                        this.dropdown = new l(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r);
                        var u = this.options.get("resultsAdapter");
                        this.results = new u(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                        var c = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
                            c.trigger("selection:update", {data: e})
                        }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
                    };
                    return n.Extend(o, n.Observable), o.prototype._generateId = function (e) {
                        var t = "";
                        return t = null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), t = t.replace(/(:|\.|\[|\]|,)/g, ""), t = "select2-" + t
                    }, o.prototype._placeContainer = function (e) {
                        e.insertAfter(this.$element);
                        var t = this._resolveWidth(this.$element, this.options.get("width"));
                        null != t && e.css("width", t)
                    }, o.prototype._resolveWidth = function (e, t) {
                        var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == t) {
                            var i = this._resolveWidth(e, "style");
                            return null != i ? i : this._resolveWidth(e, "element")
                        }
                        if ("element" == t) {
                            var o = e.outerWidth(!1);
                            return o <= 0 ? "auto" : o + "px"
                        }
                        if ("style" == t) {
                            var s = e.attr("style");
                            if ("string" != typeof s)return null;
                            for (var r = s.split(";"), a = 0, l = r.length; a < l; a += 1) {
                                var u = r[a].replace(/\s/g, "").match(n);
                                if (null !== u && u.length >= 1)return u[1]
                            }
                            return null
                        }
                        return t
                    }, o.prototype._bindAdapters = function () {
                        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                    }, o.prototype._registerDomEvents = function () {
                        var t = this;
                        this.$element.on("change.select2", function () {
                            t.dataAdapter.current(function (e) {
                                t.trigger("selection:update", {data: e})
                            })
                        }), this.$element.on("focus.select2", function (e) {
                            t.trigger("focus", e)
                        }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != i ? (this._observer = new i(function (n) {
                            e.each(n, t._syncA), e.each(n, t._syncS)
                        }), this._observer.observe(this.$element[0], {
                            attributes: !0,
                            childList: !0,
                            subtree: !1
                        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                    }, o.prototype._registerDataEvents = function () {
                        var e = this;
                        this.dataAdapter.on("*", function (t, n) {
                            e.trigger(t, n)
                        })
                    }, o.prototype._registerSelectionEvents = function () {
                        var t = this, n = ["toggle", "focus"];
                        this.selection.on("toggle", function () {
                            t.toggleDropdown()
                        }), this.selection.on("focus", function (e) {
                            t.focus(e)
                        }), this.selection.on("*", function (i, o) {
                            -1 === e.inArray(i, n) && t.trigger(i, o)
                        })
                    }, o.prototype._registerDropdownEvents = function () {
                        var e = this;
                        this.dropdown.on("*", function (t, n) {
                            e.trigger(t, n)
                        })
                    }, o.prototype._registerResultsEvents = function () {
                        var e = this;
                        this.results.on("*", function (t, n) {
                            e.trigger(t, n)
                        })
                    }, o.prototype._registerEvents = function () {
                        var e = this;
                        this.on("open", function () {
                            e.$container.addClass("select2-container--open")
                        }), this.on("close", function () {
                            e.$container.removeClass("select2-container--open")
                        }), this.on("enable", function () {
                            e.$container.removeClass("select2-container--disabled")
                        }), this.on("disable", function () {
                            e.$container.addClass("select2-container--disabled")
                        }), this.on("blur", function () {
                            e.$container.removeClass("select2-container--focus")
                        }), this.on("query", function (t) {
                            e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function (n) {
                                e.trigger("results:all", {data: n, query: t})
                            })
                        }), this.on("query:append", function (t) {
                            this.dataAdapter.query(t, function (n) {
                                e.trigger("results:append", {data: n, query: t})
                            })
                        }), this.on("keypress", function (t) {
                            var n = t.which;
                            e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
                        })
                    }, o.prototype._syncAttributes = function () {
                        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, o.prototype._syncSubtree = function (e, t) {
                        var n = !1, i = this;
                        if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                            if (t)if (t.addedNodes && t.addedNodes.length > 0)for (var o = 0; o < t.addedNodes.length; o++)t.addedNodes[o].selected && (n = !0); else t.removedNodes && t.removedNodes.length > 0 && (n = !0); else n = !0;
                            n && this.dataAdapter.current(function (e) {
                                i.trigger("selection:update", {data: e})
                            })
                        }
                    }, o.prototype.trigger = function (e, t) {
                        var n = o.__super__.trigger,
                            i = {open: "opening", close: "closing", select: "selecting", unselect: "unselecting"};
                        if (void 0 === t && (t = {}), e in i) {
                            var s = i[e], r = {prevented: !1, name: e, args: t};
                            if (n.call(this, s, r), r.prevented)return void(t.prevented = !0)
                        }
                        n.call(this, e, t)
                    }, o.prototype.toggleDropdown = function () {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }, o.prototype.open = function () {
                        this.isOpen() || this.trigger("query", {})
                    }, o.prototype.close = function () {
                        this.isOpen() && this.trigger("close", {})
                    }, o.prototype.isOpen = function () {
                        return this.$container.hasClass("select2-container--open")
                    }, o.prototype.hasFocus = function () {
                        return this.$container.hasClass("select2-container--focus")
                    }, o.prototype.focus = function (e) {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, o.prototype.enable = function (e) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                        var t = !e[0];
                        this.$element.prop("disabled", t)
                    }, o.prototype.data = function () {
                        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var e = [];
                        return this.dataAdapter.current(function (t) {
                            e = t
                        }), e
                    }, o.prototype.val = function (t) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length)return this.$element.val();
                        var n = t[0];
                        e.isArray(n) && (n = e.map(n, function (e) {
                            return e.toString()
                        })), this.$element.val(n).trigger("change")
                    }, o.prototype.destroy = function () {
                        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                    }, o.prototype.render = function () {
                        var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                        return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
                    }, o
                }), t.define("jquery-mousewheel", ["jquery"], function (e) {
                    return e
                }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (e, t, n, i) {
                    if (null == e.fn.select2) {
                        var o = ["open", "close", "destroy"];
                        e.fn.select2 = function (t) {
                            if ("object" == typeof(t = t || {}))return this.each(function () {
                                var i = e.extend(!0, {}, t);
                                new n(e(this), i)
                            }), this;
                            if ("string" == typeof t) {
                                var i, s = Array.prototype.slice.call(arguments, 1);
                                return this.each(function () {
                                    var n = e(this).data("select2");
                                    null == n && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = n[t].apply(n, s)
                                }), e.inArray(t, o) > -1 ? this : i
                            }
                            throw new Error("Invalid arguments for Select2: " + t)
                        }
                    }
                    return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
                }), {define: t.define, require: t.require}
            }(), n = t.require("jquery.select2");
            return e.fn.select2.amd = t, n
        })
    }, {jquery: 16}], 18: [function (e, t, n) {
        window.$ = window.jQuery = e("jquery"), e("bootstrap"), e("select2"), e("easy-autocomplete"), e("jquery-bar-rating"), e("./helpers"), e("./categories"), e("./notifications"), e("./carousels"), e("./filter"), e("./header"), e("./autocomplete"), e("./rating"), e("./profile"), e("./payments"), e("./place"), e("./ymap"), e("./inits")
    }, {
        "./autocomplete": 19,
        "./carousels": 20,
        "./categories": 21,
        "./filter": 22,
        "./header": 23,
        "./helpers": 24,
        "./inits": 25,
        "./notifications": 26,
        "./payments": 27,
        "./place": 28,
        "./profile": 29,
        "./rating": 30,
        "./ymap": 31,
        bootstrap: 1,
        "easy-autocomplete": 14,
        jquery: 16,
        "jquery-bar-rating": 15,
        select2: 17
    }], 19: [function (e, t, n) {
        !function (e) {
            function t(t) {
                var n = e(".easy-autocomplete");
                n.is(".has-icon") || n.addClass("has-icon"), n.find(".input-selected-icon").length || n.append(e('<span class="input-selected-icon"/>')), n.find(".input-selected-icon").html(e("<img />", {src: t.icon}))
            }

            function n() {
                e(".easy-autocomplete").removeClass("has-icon")
            }

            var i = ".search-text-input.autocomplete", o = {
                url: function (e) {
                    return "/auto-complete"
                },
                categories: [{listLocation: "categories", maxNumberOfElements: 10, header: ""}, {
                    listLocation: "venues",
                    maxNumberOfElements: 10,
                    header: ""
                }, {listLocation: "peoples", maxNumberOfElements: 10, header: "Ð›ÑŽÐ´Ð¸"}],
                getValue: function (e) {
                    return e.text
                },
                ajaxSettings: {dataType: "json", method: "GET", data: {dataType: "json"}},
                preparePostData: function (e) {
                    return e.q = $(".autocomplete").val(), e
                },
                template: {
                    type: "custom", method: function (e, t) {
                        var n = "";
                        return n += t.image ? '<img src="' + t.image + '" class="item-image">' : t.icon ? '<img src="' + t.icon + '" class="item-icon">' : t.avatar ? '<img src="' + t.avatar + '" class="item-avatar ava-sm">' : '<span class="empty-image">&nbsp;</span>', n += t.info ? '<div class="with-info">' : '<div class="no-info">', n += t.link ? '<a href="' + t.link + '"><span class="value">' + t.title + "</span></a>" : '<span class="value">' + t.title + "</span>", t.info && (n += '<span class="info">' + t.info + "</span>"), n += "</div>", t.count && (n += '<span class="results-count">' + t.count + "</span>"), n
                    }
                },
                list: {
                    maxNumberOfElements: 8, match: {enabled: !0}, onSelectItemEvent: function () {
                        var o = e(i).getSelectedItemData();
                        o.icon ? t(o) : n()
                    }, onLoadEvent: function () {
                        n()
                    }, onShowListEvent: function () {
                        e(".app-backdrop").show()
                    }, onHideListEvent: function () {
                        e(".app-backdrop").hide()
                    }
                }
            }, s = e(i).data("autocompleteUrl");
            s && (o.url = s), e(i).easyAutocomplete(o)
        }(jQuery)
    }, {}], 20: [function (e, t, n) {
        $(function () {
            $("#place-images-carousel").owlCarousel({
                items: 6,
                itemsDesktop: [1e3, 5],
                itemsDesktopSmall: [900, 4],
                itemsTablet: [600, 2],
                itemsMobile: [400, 1],
                autoPlay: !0,
                stopOnHover: !0
            })
        })
    }, {}], 21: [function (e, t, n) {
        !function (e) {
            e(".category-item").on("click", ".subcategories-expander", function (t) {
                var n = e(this), i = n.closest(".category-item").find(".subcategories");
                i.last().is(":visible") ? (i.last().slideUp("fast"), n.text(n.data("showText"))) : (i.last().slideDown("fast"), n.text(n.data("hideText"))), t.preventDefault()
            })
        }(jQuery)
    }, {}], 22: [function (e, t, n) {
        !function (e) {
            var t = e(".filters-toggle"), n = t.find("span").text();
            e("#search-filters").on("show.bs.collapse", function () {
                t.find("span").text(t.data("hideText")), t.find("i").removeClass("fa-angle-down").addClass("fa-angle-up")
            }).on("hidden.bs.collapse", function () {
                t.find("span").text(n), t.find("i").removeClass("fa-angle-up").addClass("fa-angle-down")
            })
        }(jQuery)
    }, {}], 23: [function (e, t, n) {
        !function (e) {
            var t = !1;
            e("#header-search-block").on("show.bs.collapse", function () {
                var n = e(this);
                t || (n.find(".easy-autocomplete").css({width: "100%"}), n.find(".select2-container").css({width: "100%"}), t = !0), e("#notifications-modal").modal("hide"), e(".user-menu .search-toggle-btn").addClass("open")
            }).on("hidden.bs.collapse", function () {
                e(".user-menu .search-toggle-btn").removeClass("open")
            })
        }(jQuery)
    }, {}], 24: [function (e, t, n) {
    }, {}], 25: [function (e, t, n) {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip(), $("select").not(".no-select2").select2({minimumResultsForSearch: 10}), $('input[type="checkbox"], input[type="radio"]').not(".no-icheck").iCheck({
                checkboxClass: "icheckbox_flat-green",
                radioClass: "icheckbox_flat-green"
            }), $("audio").mediaelementplayer({audioWidth: "100%", features: ["playpause", "current", "progress"]})
        })
    }, {}], 26: [function (e, t, n) {
        !function (e) {
            e(".notification-toggle").on("click", function (t) {
                t.preventDefault(), e("#header-search-block").collapse("hide"), e("#notifications-modal").modal("toggle"), e(".modal-backdrop").toggleClass("under-header"), e(this).toggleClass("open")
            }), e("#notifications-modal").on("hidden.bs.modal", function (t) {
                e(".notification-toggle").removeClass("open")
            })
        }(jQuery)
    }, {}], 27: [function (e, t, n) {
        !function (e) {
            e(".payment-methods-list").on("ifChecked", 'input[type="radio"]', function (t) {
                e(".payment-methods-list li.active").find('input[type="radio"]').iCheck("uncheck"), e(this).closest("li").addClass("active").siblings().removeClass("active")
            }), e(".place-paint-colors").on("click", "a", function (t) {
                var n = e(this), i = e(n.data("target")), o = n.data("color");
                return !n.hasClass("active") && (n.closest("ul").find("a").removeClass("active"), n.addClass("active"), i.css({backgroundColor: o}), void t.preventDefault())
            })
        }(jQuery)
    }, {}], 28: [function (e, t, n) {
        !function (e) {
            e("#place-share-btn").tooltip(), e(".place-info-toggler").on("click", function (t) {
                var n = e(".place-info-box"), i = e(e(this).attr("href"));
                e(".place-info-toggler").removeClass("active"), e(this).addClass("active"), n.find(".box-body").removeClass("in"), n.addClass("in"), i.addClass("in"), t.preventDefault()
            }), e("#place-services").on("click", ".show-more", function (t) {
                t.preventDefault(), e(this).closest("ul").next("ul").slideDown("fast"), e(this).closest("li").remove()
            }), e("#place-affiliates").on("click", ".show-more", function (t) {
                t.preventDefault(), e(this).closest("ul").next("ul").slideDown("fast"), e(this).closest("li").remove()
            }), e("#place-contacts").on("click", ".show-more", function (t) {
                t.preventDefault(), e(this).closest("p").next("div").slideDown("fast"), e(this).closest("p").remove()
            }).on("click", ".p-schedule-status", function (t) {
                t.preventDefault();
                var n = e(this).closest("div"), i = n.find(".p-schedule-list"), o = n.find(".today-schedule");
                i.is(":visible") ? (i.slideUp("fast"), o.show()) : (i.slideDown("fast"), o.hide())
            }), e("#place-desc").on("click", ".show-more", function (t) {
                t.preventDefault(), e(this).closest("p").next("div").slideDown("fast"), e(this).remove()
            })
        }(jQuery)
    }, {}], 29: [function (e, t, n) {
        !function (e) {
            e(".profile-edit-image").on("click", "a", function (t) {
                e("#profile-photo-file").click(), t.preventDefault()
            }), e("#profile-photo-file").on("change", function (t) {
                var n = this;
                if (n.files && n.files[0]) {
                    var i = new FileReader;
                    i.onload = function (t) {
                        e("#profile-photo-img").attr("src", t.target.result)
                    }, i.readAsDataURL(n.files[0])
                }
            }), e("#profile-app-right").affix({
                offset: {
                    top: function () {
                        var t = 65, n = e(".profile-header").outerHeight(!0), i = e(".profile-pages").outerHeight(!0);
                        return e("body").hasClass("fixed-header") && (t = 0), this.top = t + n + i
                    }
                }
            }), e(".profile-review-comment").on("click", ".profile-review-edit", function (t) {
                e(".review-form-block").removeClass("hidden").siblings("div").addClass("hidden")
            }).on("click", ".profile-review-form-close", function (t) {
                e(".review-form-block").addClass("hidden").siblings("div").removeClass("hidden")
            })
        }(jQuery)
    }, {}], 30: [function (e, t, n) {
        $(function () {
            $("#place-rating").barrating({
                theme: "fontawesome-stars",
                allowEmpty: !0
            }), $(".review-message > textarea").on("focus", function () {
                $(".review-form-buttons").slideDown("fast")
            })
        })
    }, {}], 31: [function (e, t, n) {
        !function (e, t, n) {
            e.fn.yMap = function (n) {
                var i, o = this.attr("id"), s = t.ymaps, r = {
                    single: !1,
                    center: [],
                    zoom: 13,
                    controls: ["zoomControl", "fullscreenControl"],
                    data: [],
                    mobileWidth: 800,
                    mobileHeight: 600
                }, a = e.extend(r, n || {});
                s.ready(function () {
                    (i = new s.Map(o, {
                        center: a.center,
                        zoom: a.zoom,
                        controls: a.controls
                    })).behaviors.disable("scrollZoom"), t.innerWidth <= a.mobileWidth && t.innerHeight <= a.mobileHeight && i.behaviors.disable("drag");
                    var n = s.templateLayoutFactory.createClass('<div class="ymap-placemark-container"><div class="ymap-placemark"><img src="{{ properties.imgUrl }}"></div></div>'),
                        r = s.templateLayoutFactory.createClass('<div class="ymap-placemark-container hover"><div class="ymap-placemark"><img src="{{ properties.imgUrl }}"><div class="ymap-placemark-content"><h3>{{ properties.title }}</h3><span>{{ properties.category }}</span><div class="ymap-placemark-rating">{% for n in properties.ratingRange %}{% if properties.rating > n %}<i class="icon icon-rating-star-active"></i>{% else %}<i class="icon icon-rating-star-disable"></i>{% endif %}{% endfor %}</div></div></div></div>');
                    if (a.data.length) {
                        var l, u = a.data, c = [[-18, -40], [18, 0]], d = [[-90, -70], [90, 0]];
                        e.each(u, function (e, o) {
                            l = new s.Placemark(o.coordinates, o.properties, {
                                iconLayout: a.single ? r : n,
                                iconShape: {type: "Rectangle", coordinates: a.single ? d : c}
                            }), a.single || l.events.add("mouseenter", function (e) {
                                e.get("target").options.set({
                                    iconLayout: r,
                                    iconShape: {type: "Rectangle", coordinates: d}
                                })
                            }).add("mouseleave", function (e) {
                                e.get("target").options.set({
                                    iconLayout: n,
                                    iconShape: {type: "Rectangle", coordinates: c}
                                })
                            }).add("click", function (e) {
                                t.location = e.get("target").properties.get("href")
                            }), i.geoObjects.add(l)
                        }), a.single || i.setBounds(i.geoObjects.getBounds(), {checkZoomRange: !0, duration: 200})
                    }
                })
            }
        }(jQuery, window)
    }, {}]
}, {}, [18]), "function" != typeof Object.create && (Object.create = function (e) {
    function t() {
    }

    return t.prototype = e, new t
}), function (e, t, n) {
    var i = {
        init: function (t, n) {
            this.$elem = e(n), this.options = e.extend({}, e.fn.owlCarousel.options, this.$elem.data(), t), this.userOptions = t, this.loadContent()
        }, loadContent: function () {
            var t, n = this;
            "function" == typeof n.options.beforeInit && n.options.beforeInit.apply(this, [n.$elem]), "string" == typeof n.options.jsonPath ? (t = n.options.jsonPath, e.getJSON(t, function (e) {
                var t, i = "";
                if ("function" == typeof n.options.jsonSuccess) n.options.jsonSuccess.apply(this, [e]); else {
                    for (t in e.owl)e.owl.hasOwnProperty(t) && (i += e.owl[t].item);
                    n.$elem.html(i)
                }
                n.logIn()
            })) : n.logIn()
        }, logIn: function () {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style")), this.$elem.data("owl-originalClasses", this.$elem.attr("class")), this.$elem.css({opacity: 0}), this.orignalItems = this.options.items, this.checkBrowser(), this.wrapperWidth = 0, this.checkVisible = null, this.setVars()
        }, setVars: function () {
            if (0 === this.$elem.children().length)return !1;
            this.baseClass(), this.eventTypes(), this.$userItems = this.$elem.children(), this.itemsAmount = this.$userItems.length, this.wrapItems(), this.$owlItems = this.$elem.find(".owl-item"), this.$owlWrapper = this.$elem.find(".owl-wrapper"), this.playDirection = "next", this.prevItem = 0, this.prevArr = [0], this.currentItem = 0, this.customEvents(), this.onStartup()
        }, onStartup: function () {
            this.updateItems(), this.calculateAll(), this.buildControls(), this.updateControls(), this.response(), this.moveEvents(), this.stopOnHover(), this.owlStatus(), !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle), !0 === this.options.autoPlay && (this.options.autoPlay = 5e3), this.play(), this.$elem.find(".owl-wrapper").css("display", "block"), this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility(), this.onstartup = !1, this.eachMoveUpdate(), "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        }, eachMoveUpdate: function () {
            !0 === this.options.lazyLoad && this.lazyLoad(), !0 === this.options.autoHeight && this.autoHeight(), this.onVisibleItems(), "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        }, updateVars: function () {
            "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]), this.watchVisibility(), this.updateItems(), this.calculateAll(), this.updatePosition(), this.updateControls(), this.eachMoveUpdate(), "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        }, reload: function () {
            var e = this;
            t.setTimeout(function () {
                e.updateVars()
            }, 0)
        }, watchVisibility: function () {
            var e = this;
            if (!1 !== e.$elem.is(":visible"))return !1;
            e.$elem.css({opacity: 0}), t.clearInterval(e.autoPlayInterval), t.clearInterval(e.checkVisible), e.checkVisible = t.setInterval(function () {
                e.$elem.is(":visible") && (e.reload(), e.$elem.animate({opacity: 1}, 200), t.clearInterval(e.checkVisible))
            }, 500)
        }, wrapItems: function () {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), this.wrapperOuter = this.$elem.find(".owl-wrapper-outer"), this.$elem.css("display", "block")
        }, baseClass: function () {
            var e = this.$elem.hasClass(this.options.baseClass), t = this.$elem.hasClass(this.options.theme);
            e || this.$elem.addClass(this.options.baseClass), t || this.$elem.addClass(this.options.theme)
        }, updateItems: function () {
            var t, n;
            if (!1 === this.options.responsive)return !1;
            if (!0 === this.options.singleItem)return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            if ((t = e(this.options.responsiveBaseWidth).width()) > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems), !1 !== this.options.itemsCustom)for (this.options.itemsCustom.sort(function (e, t) {
                return e[0] - t[0]
            }), n = 0; n < this.options.itemsCustom.length; n += 1)this.options.itemsCustom[n][0] <= t && (this.options.items = this.options.itemsCustom[n][1]); else t <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), t <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), t <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), t <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), t <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        }, response: function () {
            var n, i, o = this;
            if (!0 !== o.options.responsive)return !1;
            i = e(t).width(), o.resizer = function () {
                e(t).width() !== i && (!1 !== o.options.autoPlay && t.clearInterval(o.autoPlayInterval), t.clearTimeout(n), n = t.setTimeout(function () {
                    i = e(t).width(), o.updateVars()
                }, o.options.responsiveRefreshRate))
            }, e(t).resize(o.resizer)
        }, updatePosition: function () {
            this.jumpTo(this.currentItem), !1 !== this.options.autoPlay && this.checkAp()
        }, appendItemsSizes: function () {
            var t = this, n = 0, i = t.itemsAmount - t.options.items;
            t.$owlItems.each(function (o) {
                var s = e(this);
                s.css({width: t.itemWidth}).data("owl-item", Number(o)), 0 != o % t.options.items && o !== i || o > i || (n += 1), s.data("owl-roundPages", n)
            })
        }, appendWrapperSizes: function () {
            this.$owlWrapper.css({width: this.$owlItems.length * this.itemWidth * 2, left: 0}), this.appendItemsSizes()
        }, calculateAll: function () {
            this.calculateWidth(), this.appendWrapperSizes(), this.loops(), this.max()
        }, calculateWidth: function () {
            this.itemWidth = Math.round(this.$elem.width() / this.options.items)
        }, max: function () {
            var e = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            return this.options.items > this.itemsAmount ? this.maximumPixels = e = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = e), e
        }, min: function () {
            return 0
        }, loops: function () {
            var t, n, i = 0, o = 0;
            for (this.positionsInArray = [0], this.pagesInArray = [], t = 0; t < this.itemsAmount; t += 1)o += this.itemWidth, this.positionsInArray.push(-o), !0 === this.options.scrollPerPage && (n = e(this.$owlItems[t]), (n = n.data("owl-roundPages")) !== i && (this.pagesInArray[i] = this.positionsInArray[t], i = n))
        }, buildControls: function () {
            !0 !== this.options.navigation && !0 !== this.options.pagination || (this.owlControls = e('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)), !0 === this.options.pagination && this.buildPagination(), !0 === this.options.navigation && this.buildButtons()
        }, buildButtons: function () {
            var t = this, n = e('<div class="owl-buttons"/>');
            t.owlControls.append(n), t.buttonPrev = e("<div/>", {
                class: "owl-prev",
                html: t.options.navigationText[0] || ""
            }), t.buttonNext = e("<div/>", {
                class: "owl-next",
                html: t.options.navigationText[1] || ""
            }), n.append(t.buttonPrev).append(t.buttonNext), n.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (e) {
                e.preventDefault()
            }), n.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (n) {
                n.preventDefault(), e(this).hasClass("owl-next") ? t.next() : t.prev()
            })
        }, buildPagination: function () {
            var t = this;
            t.paginationWrapper = e('<div class="owl-pagination"/>'), t.owlControls.append(t.paginationWrapper), t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (n) {
                n.preventDefault(), Number(e(this).data("owl-page")) !== t.currentItem && t.goTo(Number(e(this).data("owl-page")), !0)
            })
        }, updatePagination: function () {
            var t, n, i, o, s, r;
            if (!1 === this.options.pagination)return !1;
            for (this.paginationWrapper.html(""), t = 0, n = this.itemsAmount - this.itemsAmount % this.options.items, o = 0; o < this.itemsAmount; o += 1)0 == o % this.options.items && (t += 1, n === o && (i = this.itemsAmount - this.options.items), s = e("<div/>", {class: "owl-page"}), r = e("<span></span>", {
                text: !0 === this.options.paginationNumbers ? t : "",
                class: !0 === this.options.paginationNumbers ? "owl-numbers" : ""
            }), s.append(r), s.data("owl-page", n === o ? i : o), s.data("owl-roundPages", t), this.paginationWrapper.append(s));
            this.checkPagination()
        }, checkPagination: function () {
            var t = this;
            if (!1 === t.options.pagination)return !1;
            t.paginationWrapper.find(".owl-page").each(function () {
                e(this).data("owl-roundPages") === e(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), e(this).addClass("active"))
            })
        }, checkNavigation: function () {
            if (!1 === this.options.navigation)return !1;
            !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        }, updateControls: function () {
            this.updatePagination(), this.checkNavigation(), this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        }, destroyControls: function () {
            this.owlControls && this.owlControls.remove()
        }, next: function (e) {
            if (this.isTransition)return !1;
            if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1, this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
                if (!0 !== this.options.rewindNav)return this.currentItem = this.maximumItem, !1;
                this.currentItem = 0, e = "rewind"
            }
            this.goTo(this.currentItem, e)
        }, prev: function (e) {
            if (this.isTransition)return !1;
            if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1), 0 > this.currentItem) {
                if (!0 !== this.options.rewindNav)return this.currentItem = 0, !1;
                this.currentItem = this.maximumItem, e = "rewind"
            }
            this.goTo(this.currentItem, e)
        }, goTo: function (e, n, i) {
            var o = this;
            return !o.isTransition && ("function" == typeof o.options.beforeMove && o.options.beforeMove.apply(this, [o.$elem]), e >= o.maximumItem ? e = o.maximumItem : 0 >= e && (e = 0), o.currentItem = o.owl.currentItem = e, !1 !== o.options.transitionStyle && "drag" !== i && 1 === o.options.items && !0 === o.browser.support3d ? (o.swapSpeed(0), !0 === o.browser.support3d ? o.transition3d(o.positionsInArray[e]) : o.css2slide(o.positionsInArray[e], 1), o.afterGo(), o.singleItemTransition(), !1) : (e = o.positionsInArray[e], !0 === o.browser.support3d ? (o.isCss3Finish = !1, !0 === n ? (o.swapSpeed("paginationSpeed"), t.setTimeout(function () {
                    o.isCss3Finish = !0
                }, o.options.paginationSpeed)) : "rewind" === n ? (o.swapSpeed(o.options.rewindSpeed), t.setTimeout(function () {
                    o.isCss3Finish = !0
                }, o.options.rewindSpeed)) : (o.swapSpeed("slideSpeed"), t.setTimeout(function () {
                    o.isCss3Finish = !0
                }, o.options.slideSpeed)), o.transition3d(e)) : !0 === n ? o.css2slide(e, o.options.paginationSpeed) : "rewind" === n ? o.css2slide(e, o.options.rewindSpeed) : o.css2slide(e, o.options.slideSpeed), void o.afterGo()))
        }, jumpTo: function (e) {
            "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]), e >= this.maximumItem || -1 === e ? e = this.maximumItem : 0 >= e && (e = 0), this.swapSpeed(0), !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[e]) : this.css2slide(this.positionsInArray[e], 1), this.currentItem = this.owl.currentItem = e, this.afterGo()
        }, afterGo: function () {
            this.prevArr.push(this.currentItem), this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2], this.prevArr.shift(0), this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp()), "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        }, stop: function () {
            this.apStatus = "stop", t.clearInterval(this.autoPlayInterval)
        }, checkAp: function () {
            "stop" !== this.apStatus && this.play()
        }, play: function () {
            var e = this;
            if (e.apStatus = "play", !1 === e.options.autoPlay)return !1;
            t.clearInterval(e.autoPlayInterval), e.autoPlayInterval = t.setInterval(function () {
                e.next(!0)
            }, e.options.autoPlay)
        }, swapSpeed: function (e) {
            "slideSpeed" === e ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === e ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof e && this.$owlWrapper.css(this.addCssSpeed(e))
        }, addCssSpeed: function (e) {
            return {
                "-webkit-transition": "all " + e + "ms ease",
                "-moz-transition": "all " + e + "ms ease",
                "-o-transition": "all " + e + "ms ease",
                transition: "all " + e + "ms ease"
            }
        }, removeTransition: function () {
            return {"-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: ""}
        }, doTranslate: function (e) {
            return {
                "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
                transform: "translate3d(" + e + "px, 0px,0px)"
            }
        }, transition3d: function (e) {
            this.$owlWrapper.css(this.doTranslate(e))
        }, css2move: function (e) {
            this.$owlWrapper.css({left: e})
        }, css2slide: function (e, t) {
            var n = this;
            n.isCssFinish = !1, n.$owlWrapper.stop(!0, !0).animate({left: e}, {
                duration: t || n.options.slideSpeed,
                complete: function () {
                    n.isCssFinish = !0
                }
            })
        }, checkBrowser: function () {
            var e = n.createElement("div");
            e.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)", e = e.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g), this.browser = {
                support3d: null !== e && 1 === e.length,
                isTouch: "ontouchstart" in t || t.navigator.msMaxTouchPoints
            }
        }, moveEvents: function () {
            !1 === this.options.mouseDrag && !1 === this.options.touchDrag || (this.gestures(), this.disabledEvents())
        }, eventTypes: function () {
            var e = ["s", "e", "x"];
            this.ev_types = {}, !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), this.ev_types.start = e[0], this.ev_types.move = e[1], this.ev_types.end = e[2]
        }, disabledEvents: function () {
            this.$elem.on("dragstart.owl", function (e) {
                e.preventDefault()
            }), this.$elem.on("mousedown.disableTextSelect", function (t) {
                return e(t.target).is("input, textarea, select, option")
            })
        }, gestures: function () {
            function i(e) {
                if (void 0 !== e.touches)return {x: e.touches[0].pageX, y: e.touches[0].pageY};
                if (void 0 === e.touches) {
                    if (void 0 !== e.pageX)return {x: e.pageX, y: e.pageY};
                    if (void 0 === e.pageX)return {x: e.clientX, y: e.clientY}
                }
            }

            function o(t) {
                "on" === t ? (e(n).on(a.ev_types.move, s), e(n).on(a.ev_types.end, r)) : "off" === t && (e(n).off(a.ev_types.move), e(n).off(a.ev_types.end))
            }

            function s(o) {
                o = o.originalEvent || o || t.event, a.newPosX = i(o).x - l.offsetX, a.newPosY = i(o).y - l.offsetY, a.newRelativeX = a.newPosX - l.relativePos, "function" == typeof a.options.startDragging && !0 !== l.dragging && 0 !== a.newRelativeX && (l.dragging = !0, a.options.startDragging.apply(a, [a.$elem])), (8 < a.newRelativeX || -8 > a.newRelativeX) && !0 === a.browser.isTouch && (void 0 !== o.preventDefault ? o.preventDefault() : o.returnValue = !1, l.sliding = !0), (10 < a.newPosY || -10 > a.newPosY) && !1 === l.sliding && e(n).off("touchmove.owl"), a.newPosX = Math.max(Math.min(a.newPosX, a.newRelativeX / 5), a.maximumPixels + a.newRelativeX / 5), !0 === a.browser.support3d ? a.transition3d(a.newPosX) : a.css2move(a.newPosX)
            }

            function r(n) {
                var i;
                (n = n.originalEvent || n || t.event).target = n.target || n.srcElement, l.dragging = !1, !0 !== a.browser.isTouch && a.$owlWrapper.removeClass("grabbing"), a.dragDirection = 0 > a.newRelativeX ? a.owl.dragDirection = "left" : a.owl.dragDirection = "right", 0 !== a.newRelativeX && (i = a.getNewPosition(), a.goTo(i, !1, "drag"), l.targetElement === n.target && !0 !== a.browser.isTouch && (e(n.target).on("click.disable", function (t) {
                    t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), e(t.target).off("click.disable")
                }), n = e._data(n.target, "events").click, i = n.pop(), n.splice(0, 0, i))), o("off")
            }

            var a = this, l = {
                offsetX: 0,
                offsetY: 0,
                baseElWidth: 0,
                relativePos: 0,
                position: null,
                minSwipe: null,
                maxSwipe: null,
                sliding: null,
                dargging: null,
                targetElement: null
            };
            a.isCssFinish = !0, a.$elem.on(a.ev_types.start, ".owl-wrapper", function (n) {
                var s;
                if (3 === (n = n.originalEvent || n || t.event).which)return !1;
                if (!(a.itemsAmount <= a.options.items)) {
                    if (!1 === a.isCssFinish && !a.options.dragBeforeAnimFinish || !1 === a.isCss3Finish && !a.options.dragBeforeAnimFinish)return !1;
                    !1 !== a.options.autoPlay && t.clearInterval(a.autoPlayInterval), !0 === a.browser.isTouch || a.$owlWrapper.hasClass("grabbing") || a.$owlWrapper.addClass("grabbing"), a.newPosX = 0, a.newRelativeX = 0, e(this).css(a.removeTransition()), s = e(this).position(), l.relativePos = s.left, l.offsetX = i(n).x - s.left, l.offsetY = i(n).y - s.top, o("on"), l.sliding = !1, l.targetElement = n.target || n.srcElement
                }
            })
        }, getNewPosition: function () {
            var e = this.closestItem();
            return e > this.maximumItem ? e = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = e = 0), e
        }, closestItem: function () {
            var t = this, n = !0 === t.options.scrollPerPage ? t.pagesInArray : t.positionsInArray, i = t.newPosX,
                o = null;
            return e.each(n, function (s, r) {
                i - t.itemWidth / 20 > n[s + 1] && i - t.itemWidth / 20 < r && "left" === t.moveDirection() ? (o = r, t.currentItem = !0 === t.options.scrollPerPage ? e.inArray(o, t.positionsInArray) : s) : i + t.itemWidth / 20 < r && i + t.itemWidth / 20 > (n[s + 1] || n[s] - t.itemWidth) && "right" === t.moveDirection() && (!0 === t.options.scrollPerPage ? (o = n[s + 1] || n[n.length - 1], t.currentItem = e.inArray(o, t.positionsInArray)) : (o = n[s + 1], t.currentItem = s + 1))
            }), t.currentItem
        }, moveDirection: function () {
            var e;
            return 0 > this.newRelativeX ? (e = "right", this.playDirection = "next") : (e = "left", this.playDirection = "prev"), e
        }, customEvents: function () {
            var e = this;
            e.$elem.on("owl.next", function () {
                e.next()
            }), e.$elem.on("owl.prev", function () {
                e.prev()
            }), e.$elem.on("owl.play", function (t, n) {
                e.options.autoPlay = n, e.play(), e.hoverStatus = "play"
            }), e.$elem.on("owl.stop", function () {
                e.stop(), e.hoverStatus = "stop"
            }), e.$elem.on("owl.goTo", function (t, n) {
                e.goTo(n)
            }), e.$elem.on("owl.jumpTo", function (t, n) {
                e.jumpTo(n)
            })
        }, stopOnHover: function () {
            var e = this;
            !0 === e.options.stopOnHover && !0 !== e.browser.isTouch && !1 !== e.options.autoPlay && (e.$elem.on("mouseover", function () {
                e.stop()
            }), e.$elem.on("mouseout", function () {
                "stop" !== e.hoverStatus && e.play()
            }))
        }, lazyLoad: function () {
            var t, n, i, o;
            if (!1 === this.options.lazyLoad)return !1;
            for (t = 0; t < this.itemsAmount; t += 1)"loaded" !== (n = e(this.$owlItems[t])).data("owl-loaded") && (i = n.data("owl-item"), o = n.find(".lazyOwl"), "string" != typeof o.data("src") ? n.data("owl-loaded", "loaded") : (void 0 === n.data("owl-loaded") && (o.hide(), n.addClass("loading").data("owl-loaded", "checked")), (!0 !== this.options.lazyFollow || i >= this.currentItem) && i < this.currentItem + this.options.items && o.length && this.lazyPreload(n, o)))
        }, lazyPreload: function (e, n) {
            function i() {
                e.data("owl-loaded", "loaded").removeClass("loading"), n.removeAttr("data-src"), "fade" === r.options.lazyEffect ? n.fadeIn(400) : n.show(), "function" == typeof r.options.afterLazyLoad && r.options.afterLazyLoad.apply(this, [r.$elem])
            }

            function o() {
                a += 1, r.completeImg(n.get(0)) || !0 === s ? i() : 100 >= a ? t.setTimeout(o, 100) : i()
            }

            var s, r = this, a = 0;
            "DIV" === n.prop("tagName") ? (n.css("background-image", "url(" + n.data("src") + ")"), s = !0) : n[0].src = n.data("src"), o()
        }, autoHeight: function () {
            function n() {
                var n = e(s.$owlItems[s.currentItem]).height();
                s.wrapperOuter.css("height", n + "px"), s.wrapperOuter.hasClass("autoHeight") || t.setTimeout(function () {
                    s.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function i() {
                o += 1, s.completeImg(r.get(0)) ? n() : 100 >= o ? t.setTimeout(i, 100) : s.wrapperOuter.css("height", "")
            }

            var o, s = this, r = e(s.$owlItems[s.currentItem]).find("img");
            void 0 !== r.get(0) ? (o = 0, i()) : n()
        }, completeImg: function (e) {
            return !(!e.complete || void 0 !== e.naturalWidth && 0 === e.naturalWidth)
        }, onVisibleItems: function () {
            var t;
            for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"), this.visibleItems = [], t = this.currentItem; t < this.currentItem + this.options.items; t += 1)this.visibleItems.push(t), !0 === this.options.addClassActive && e(this.$owlItems[t]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        }, transitionTypes: function (e) {
            this.outClass = "owl-" + e + "-out", this.inClass = "owl-" + e + "-in"
        }, singleItemTransition: function () {
            var e = this, t = e.outClass, n = e.inClass, i = e.$owlItems.eq(e.currentItem),
                o = e.$owlItems.eq(e.prevItem),
                s = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                r = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2;
            e.isTransition = !0, e.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": r + "px",
                "-moz-perspective-origin": r + "px",
                "perspective-origin": r + "px"
            }), o.css({
                position: "relative",
                left: s + "px"
            }).addClass(t).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                e.endPrev = !0, o.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), e.clearTransStyle(o, t)
            }), i.addClass(n).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                e.endCurrent = !0, i.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), e.clearTransStyle(i, n)
            })
        }, clearTransStyle: function (e, t) {
            e.css({
                position: "",
                left: ""
            }).removeClass(t), this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        }, owlStatus: function () {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        }, clearEvents: function () {
            this.$elem.off(".owl owl mousedown.disableTextSelect"), e(n).off(".owl owl"), e(t).off("resize", this.resizer)
        }, unWrap: function () {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove()), this.clearEvents(), this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        }, destroy: function () {
            this.stop(), t.clearInterval(this.checkVisible), this.unWrap(), this.$elem.removeData()
        }, reinit: function (t) {
            t = e.extend({}, this.userOptions, t), this.unWrap(), this.init(t, this.$elem)
        }, addItem: function (e, t) {
            var n;
            return !!e && (0 === this.$elem.children().length ? (this.$elem.append(e), this.setVars(), !1) : (this.unWrap(), (n = void 0 === t || -1 === t ? -1 : t) >= this.$userItems.length || -1 === n ? this.$userItems.eq(-1).after(e) : this.$userItems.eq(n).before(e), void this.setVars()))
        }, removeItem: function (e) {
            if (0 === this.$elem.children().length)return !1;
            e = void 0 === e || -1 === e ? -1 : e, this.unWrap(), this.$userItems.eq(e).remove(), this.setVars()
        }
    };
    e.fn.owlCarousel = function (t) {
        return this.each(function () {
            if (!0 === e(this).data("owl-init"))return !1;
            e(this).data("owl-init", !0);
            var n = Object.create(i);
            n.init(t, this), e.data(this, "owlCarousel", n)
        })
    }, e.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: t,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
}(jQuery, window, document), function (e) {
    e.gritter = {}, e.gritter.options = {
        position: "",
        class_name: "",
        fade_in_speed: "medium",
        fade_out_speed: 1e3,
        time: 6e3
    }, e.gritter.add = function (e) {
        try {
            return t.add(e || {})
        } catch (t) {
            var n = "Gritter Error: " + t;
            "undefined" != typeof console && console.error ? console.error(n, e) : alert(n)
        }
    }, e.gritter.remove = function (e, n) {
        t.removeSpecific(e, n || {})
    }, e.gritter.removeAll = function (e) {
        t.stop(e || {})
    };
    var t = {
        position: "",
        fade_in_speed: "",
        fade_out_speed: "",
        time: "",
        _custom_timer: 0,
        _item_count: 0,
        _is_setup: 0,
        _tpl_close: '<a class="gritter-close" href="#" tabindex="1">Close Notification</a>',
        _tpl_title: '<span class="gritter-title">[[title]]</span>',
        _tpl_item: '<div id="gritter-item-[[number]]" class="gritter-item-wrapper [[item_class]]" style="display:none" role="alert"><div class="gritter-top"></div><div class="gritter-item">[[close]][[image]]<div class="[[class_name]]">[[title]]<p>[[text]]</p></div><div style="clear:both"></div></div><div class="gritter-bottom"></div></div>',
        _tpl_wrap: '<div id="gritter-notice-wrapper"></div>',
        add: function (n) {
            if ("string" == typeof n && (n = {text: n}), null === n.text)throw'You must supply "text" parameter.';
            this._is_setup || this._runSetup();
            var i = n.title, o = n.text, s = n.image || "", r = n.sticky || !1,
                a = n.class_name || e.gritter.options.class_name, l = e.gritter.options.position, u = n.time || "";
            this._verifyWrapper();
            var c = ++this._item_count, d = this._tpl_item;
            e(["before_open", "after_open", "before_close", "after_close"]).each(function (i, o) {
                t["_" + o + "_" + c] = e.isFunction(n[o]) ? n[o] : function () {
                }
            }), this._custom_timer = 0, u && (this._custom_timer = u);
            var p = "" != s ? '<img src="' + s + '" class="gritter-image" />' : "",
                h = "" != s ? "gritter-with-image" : "gritter-without-image";
            if (i = i ? this._str_replace("[[title]]", i, this._tpl_title) : "", d = this._str_replace(["[[title]]", "[[text]]", "[[close]]", "[[image]]", "[[number]]", "[[class_name]]", "[[item_class]]"], [i, o, this._tpl_close, p, this._item_count, h, a], d), !1 === this["_before_open_" + c]())return !1;
            e("#gritter-notice-wrapper").addClass(l).append(d);
            var f = e("#gritter-item-" + this._item_count);
            return f.fadeIn(this.fade_in_speed, function () {
                t["_after_open_" + c](e(this))
            }), r || this._setFadeTimer(f, c), e(f).bind("mouseenter mouseleave", function (n) {
                "mouseenter" == n.type ? r || t._restoreItemIfFading(e(this), c) : r || t._setFadeTimer(e(this), c), t._hoverState(e(this), n.type)
            }), c
        },
        _countRemoveWrapper: function (t, n, i) {
            n.remove(), this["_after_close_" + t](n, i), 0 == e(".gritter-item-wrapper").length && e("#gritter-notice-wrapper").remove()
        },
        _fade: function (e, n, i, o) {
            var s = void 0 === (i = i || {}).fade || i.fade, r = i.speed || this.fade_out_speed, a = o;
            this["_before_close_" + n](e, a), o && e.unbind("mouseenter mouseleave"), s ? e.animate({opacity: 0}, r, function () {
                e.animate({height: 0}, 300, function () {
                    t._countRemoveWrapper(n, e, a)
                })
            }) : this._countRemoveWrapper(n, e)
        },
        _hoverState: function (e, t) {
            "mouseenter" == t ? e.addClass("hover") : (e.removeClass("hover"), e.find(".gritter-close").hide())
        },
        removeSpecific: function (t, n, i, o) {
            if (!i)var i = e("#gritter-item-" + t);
            this._fade(i, t, n || {}, o)
        },
        _restoreItemIfFading: function (e, t) {
            clearTimeout(this["_int_id_" + t]), e.stop().css({opacity: "", height: ""})
        },
        _runSetup: function () {
            for (opt in e.gritter.options)this[opt] = e.gritter.options[opt];
            this._is_setup = 1
        },
        _setFadeTimer: function (e, n) {
            var i = this._custom_timer ? this._custom_timer : this.time;
            this["_int_id_" + n] = setTimeout(function () {
                t._fade(e, n)
            }, i)
        },
        stop: function (t) {
            var n = e.isFunction(t.before_close) ? t.before_close : function () {
            }, i = e.isFunction(t.after_close) ? t.after_close : function () {
            }, o = e("#gritter-notice-wrapper");
            n(o), o.fadeOut(function () {
                e(this).remove(), i()
            })
        },
        _str_replace: function (e, t, n, i) {
            var o = 0, s = 0, r = "", a = "", l = 0, u = 0, c = [].concat(e), d = [].concat(t), p = n,
                h = d instanceof Array, f = p instanceof Array;
            for (p = [].concat(p), i && (this.window[i] = 0), o = 0, l = p.length; o < l; o++)if ("" !== p[o])for (s = 0, u = c.length; s < u; s++)r = p[o] + "", a = h ? void 0 !== d[s] ? d[s] : "" : d[0], p[o] = r.split(c[s]).join(a), i && p[o] !== r && (this.window[i] += (r.length - p[o].length) / c[s].length);
            return f ? p : p[0]
        },
        _verifyWrapper: function () {
            0 == e("#gritter-notice-wrapper").length && e("body").append(this._tpl_wrap)
        }
    }
}(jQuery), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
    var t, n = navigator.userAgent, i = /iphone/i.test(n), o = /chrome/i.test(n), s = /android/i.test(n);
    e.mask = {
        definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"},
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, e.fn.extend({
        caret: function (e, t) {
            var n;
            if (0 !== this.length && !this.is(":hidden"))return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((n = this.createTextRange()).collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
            })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
                begin: e,
                end: t
            })
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (n, r) {
            var a, l, u, c, d, p, h, f;
            if (!n && this.length > 0) {
                var m = (a = e(this[0])).data(e.mask.dataName);
                return m ? m() : void 0
            }
            return r = e.extend({
                autoclear: e.mask.autoclear,
                placeholder: e.mask.placeholder,
                completed: null
            }, r), l = e.mask.definitions, u = [], c = h = n.length, d = null, e.each(n.split(""), function (e, t) {
                "?" == t ? (h--, c = e) : l[t] ? (u.push(new RegExp(l[t])), null === d && (d = u.length - 1), c > e && (p = u.length - 1)) : u.push(null)
            }), this.trigger("unmask").each(function () {
                function a() {
                    if (r.completed) {
                        for (var e = d; p >= e; e++)if (u[e] && k[e] === m(e))return;
                        r.completed.call(j)
                    }
                }

                function m(e) {
                    return r.placeholder.charAt(e < r.placeholder.length ? e : 0)
                }

                function g(e) {
                    for (; ++e < h && !u[e];);
                    return e
                }

                function v(e) {
                    for (; --e >= 0 && !u[e];);
                    return e
                }

                function y(e, t) {
                    var n, i;
                    if (!(0 > e)) {
                        for (n = e, i = g(t); h > n; n++)if (u[n]) {
                            if (!(h > i && u[n].test(k[i])))break;
                            k[n] = k[i], k[i] = m(i), i = g(i)
                        }
                        T(), j.caret(Math.max(d, e))
                    }
                }

                function b(e) {
                    var t, n, i, o;
                    for (t = e, n = m(e); h > t; t++)if (u[t]) {
                        if (i = g(t), o = k[t], k[t] = n, !(h > i && u[i].test(o)))break;
                        n = o
                    }
                }

                function w() {
                    C(), j.val() != E && j.change()
                }

                function x(e, t) {
                    var n;
                    for (n = e; t > n && h > n; n++)u[n] && (k[n] = m(n))
                }

                function T() {
                    j.val(k.join(""))
                }

                function C(e) {
                    var t, n, i, o = j.val(), s = -1;
                    for (t = 0, i = 0; h > t; t++)if (u[t]) {
                        for (k[t] = m(t); i++ < o.length;)if (n = o.charAt(i - 1), u[t].test(n)) {
                            k[t] = n, s = t;
                            break
                        }
                        if (i > o.length) {
                            x(t + 1, h);
                            break
                        }
                    } else k[t] === o.charAt(i) && i++, c > t && (s = t);
                    return e ? T() : c > s + 1 ? r.autoclear || k.join("") === S ? (j.val() && j.val(""), x(0, h)) : T() : (T(), j.val(j.val().substring(0, s + 1))), c ? t : d
                }

                var j = e(this), k = e.map(n.split(""), function (e, t) {
                    return "?" != e ? l[e] ? m(t) : e : void 0
                }), S = k.join(""), E = j.val();
                j.data(e.mask.dataName, function () {
                    return e.map(k, function (e, t) {
                        return u[t] && e != m(t) ? e : null
                    }).join("")
                }), j.one("unmask", function () {
                    j.off(".mask").removeData(e.mask.dataName)
                }).on("focus.mask", function () {
                    if (!j.prop("readonly")) {
                        clearTimeout(t);
                        var e;
                        E = j.val(), e = C(), t = setTimeout(function () {
                            j.get(0) === document.activeElement && (T(), e == n.replace("?", "").length ? j.caret(0, e) : j.caret(e))
                        }, 10)
                    }
                }).on("blur.mask", w).on("keydown.mask", function (e) {
                    if (!j.prop("readonly")) {
                        var t, n, o, s = e.which || e.keyCode;
                        f = j.val(), 8 === s || 46 === s || i && 127 === s ? (t = j.caret(), n = t.begin, (o = t.end) - n == 0 && (n = 46 !== s ? v(n) : o = g(n - 1), o = 46 === s ? g(o) : o), x(n, o), y(n, o - 1), e.preventDefault()) : 13 === s ? w.call(this, e) : 27 === s && (j.val(E), j.caret(0, C()), e.preventDefault())
                    }
                }).on("keypress.mask", function (t) {
                    if (!j.prop("readonly")) {
                        var n, i, o, r = t.which || t.keyCode, l = j.caret();
                        t.ctrlKey || t.altKey || t.metaKey || 32 > r || !r || 13 === r || (l.end - l.begin != 0 && (x(l.begin, l.end), y(l.begin, l.end - 1)), n = g(l.begin - 1), h > n && (i = String.fromCharCode(r), u[n].test(i)) && (b(n), k[n] = i, T(), o = g(n), s ? setTimeout(function () {
                            e.proxy(e.fn.caret, j, o)()
                        }, 0) : j.caret(o), l.begin <= p && a()), t.preventDefault())
                    }
                }).on("input.mask paste.mask", function () {
                    j.prop("readonly") || setTimeout(function () {
                        var e = C(!0);
                        j.caret(e), a()
                    }, 0)
                }), o && s && j.off("input.mask").on("input.mask", function () {
                    var e = j.val(), t = j.caret();
                    if (f && f.length && f.length > e.length) {
                        for (C(!0); t.begin > 0 && !u[t.begin - 1];)t.begin--;
                        if (0 === t.begin)for (; t.begin < d && !u[t.begin];)t.begin++;
                        j.caret(t.begin, t.begin)
                    } else {
                        for (C(!0); t.begin < h && !u[t.begin];)t.begin++;
                        j.caret(t.begin, t.begin)
                    }
                    a()
                }), C()
            })
        }
    })
}), function (e) {
    function t(e, t, o) {
        var s = e[0], r = /er/.test(o) ? _indeterminate : /bl/.test(o) ? h : d, a = o == _update ? {
            checked: s[d],
            disabled: s[h],
            indeterminate: "true" == e.attr(_indeterminate) || "false" == e.attr(_determinate)
        } : s[r];
        if (/^(ch|di|in)/.test(o) && !a) n(e, r); else if (/^(un|en|de)/.test(o) && a) i(e, r); else if (o == _update)for (var l in a)a[l] ? n(e, l, !0) : i(e, l, !0); else t && "toggle" != o || (t || e[_callback]("ifClicked"), a ? s[_type] !== c && i(e, r) : n(e, r))
    }

    function n(t, n, o) {
        var f = t[0], m = t.parent(), g = n == d, v = n == _indeterminate, y = n == h,
            b = v ? _determinate : g ? p : "enabled", w = s(t, b + r(f[_type])), x = s(t, n + r(f[_type]));
        if (!0 !== f[n]) {
            if (!o && n == d && f[_type] == c && f.name) {
                var T = t.closest("form"), C = 'input[name="' + f.name + '"]';
                (C = T.length ? T.find(C) : e(C)).each(function () {
                    this !== f && e(this).data(l) && i(e(this), n)
                })
            }
            v ? (f[n] = !0, f[d] && i(t, d, "force")) : (o || (f[n] = !0), g && f[_indeterminate] && i(t, _indeterminate, !1)), a(t, g, n, o)
        }
        f[h] && s(t, _cursor, !0) && m.find("." + u).css(_cursor, "default"), m[_add](x || s(t, n) || ""), m.attr("role") && !v && m.attr("aria-" + (y ? h : d), "true"), m[_remove](w || s(t, b) || "")
    }

    function i(e, t, n) {
        var i = e[0], o = e.parent(), l = t == d, c = t == _indeterminate, f = t == h,
            m = c ? _determinate : l ? p : "enabled", g = s(e, m + r(i[_type])), v = s(e, t + r(i[_type]));
        !1 !== i[t] && (!c && n && "force" != n || (i[t] = !1), a(e, l, m, n)), !i[h] && s(e, _cursor, !0) && o.find("." + u).css(_cursor, "pointer"), o[_remove](v || s(e, t) || ""), o.attr("role") && !c && o.attr("aria-" + (f ? h : d), "false"), o[_add](g || s(e, m) || "")
    }

    function o(t, n) {
        t.data(l) && (t.parent().html(t.attr("style", t.data(l).s || "")), n && t[_callback](n), t.off(".i").unwrap(), e(_label + '[for="' + t[0].id + '"]').add(t.closest(_label)).off(".i"))
    }

    function s(e, t, n) {
        if (e.data(l))return e.data(l).o[t + (n ? "" : "Class")]
    }

    function r(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }

    function a(e, t, n, i) {
        i || (t && e[_callback]("ifToggled"), e[_callback]("ifChanged")[_callback]("if" + r(n)))
    }

    var l = "iCheck", u = l + "-helper", c = "radio", d = "checked", p = "un" + d, h = "disabled";
    _determinate = "determinate", _indeterminate = "in" + _determinate, _update = "update", _type = "type", _click = "click", _touch = "touchbegin.i touchend.i", _add = "addClass", _remove = "removeClass", _callback = "trigger", _label = "label", _cursor = "cursor", _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent), e.fn[l] = function (s, r) {
        var a = 'input[type="checkbox"], input[type="' + c + '"]', p = e(), f = function (t) {
            t.each(function () {
                var t = e(this);
                p = t.is(a) ? p.add(t) : p.add(t.find(a))
            })
        };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(s))return s = s.toLowerCase(), f(this), p.each(function () {
            var n = e(this);
            "destroy" == s ? o(n, "ifDestroyed") : t(n, !0, s), e.isFunction(r) && r()
        });
        if ("object" != typeof s && s)return this;
        var m = e.extend({checkedClass: d, disabledClass: h, indeterminateClass: _indeterminate, labelHover: !0}, s),
            g = m.handle, v = m.hoverClass || "hover", y = m.focusClass || "focus", b = m.activeClass || "active",
            w = !!m.labelHover, x = m.labelHoverClass || "hover", T = 0 | ("" + m.increaseArea).replace("%", "");
        return "checkbox" != g && g != c || (a = 'input[type="' + g + '"]'), -50 > T && (T = -50), f(this), p.each(function () {
            var s = e(this);
            o(s);
            var r = this, a = r.id, p = {
                    position: "absolute",
                    top: f = -T + "%",
                    left: f,
                    display: "block",
                    width: p = 100 + 2 * T + "%",
                    height: p,
                    margin: 0,
                    padding: 0,
                    background: "#fff",
                    border: 0,
                    opacity: 0
                }, f = _mobile ? {position: "absolute", visibility: "hidden"} : T ? p : {position: "absolute", opacity: 0},
                g = "checkbox" == r[_type] ? m.checkboxClass || "icheckbox" : m.radioClass || "i" + c,
                C = e(_label + '[for="' + a + '"]').add(s.closest(_label)), j = !!m.aria,
                k = l + "-" + Math.random().toString(36).substr(2, 6),
                S = '<div class="' + g + '" ' + (j ? 'role="' + r[_type] + '" ' : "");
            j && C.each(function () {
                S += 'aria-labelledby="', this.id ? S += this.id : (this.id = k, S += k), S += '"'
            }), S = s.wrap(S + "/>")[_callback]("ifCreated").parent().append(m.insert), p = e('<ins class="' + u + '"/>').css(p).appendTo(S), s.data(l, {
                o: m,
                s: s.attr("style")
            }).css(f), m.inheritClass && S[_add](r.className || ""), m.inheritID && a && S.attr("id", l + "-" + a), "static" == S.css("position") && S.css("position", "relative"), t(s, !0, _update), C.length && C.on(_click + ".i mouseover.i mouseout.i " + _touch, function (n) {
                var i = n[_type], o = e(this);
                if (!r[h]) {
                    if (i == _click) {
                        if (e(n.target).is("a"))return;
                        t(s, !1, !0)
                    } else w && (/ut|nd/.test(i) ? (S[_remove](v), o[_remove](x)) : (S[_add](v), o[_add](x)));
                    if (!_mobile)return !1;
                    n.stopPropagation()
                }
            }), s.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function (e) {
                var t = e[_type];
                return e = e.keyCode, t != _click && ("keydown" == t && 32 == e ? (r[_type] == c && r[d] || (r[d] ? i(s, d) : n(s, d)), !1) : void("keyup" == t && r[_type] == c ? !r[d] && n(s, d) : /us|ur/.test(t) && S["blur" == t ? _remove : _add](y)))
            }), p.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function (e) {
                var n = e[_type], i = /wn|up/.test(n) ? b : v;
                if (!r[h]) {
                    if (n == _click ? t(s, !1, !0) : (/wn|er|in/.test(n) ? S[_add](i) : S[_remove](i + " " + b), C.length && w && i == v && C[/ut|nd/.test(n) ? _remove : _add](x)), !_mobile)return !1;
                    e.stopPropagation()
                }
            })
        })
    }
}(window.jQuery || window.Zepto);
var mejs = mejs || {};
mejs.version = "2.23.4", mejs.meIndex = 0, mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mp4", "audio/mpeg", "video/dailymotion", "video/x-dailymotion", "application/x-mpegURL", "audio/ogg"]
    }],
    youtube: [{version: null, types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]}],
    vimeo: [{version: null, types: ["video/vimeo", "video/x-vimeo"]}]
}, mejs.Utility = {
    encodeUrl: function (e) {
        return encodeURIComponent(e)
    }, escapeHTML: function (e) {
        return e.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    }, absolutizeUrl: function (e) {
        var t = document.createElement("div");
        return t.innerHTML = '<a href="' + this.escapeHTML(e) + '">x</a>', t.firstChild.href
    }, getScriptPath: function (e) {
        for (var t, n, i, o, s, r = 0, a = "", l = "", u = document.getElementsByTagName("script"), c = u.length,
                 d = e.length; c > r; r++) {
            for ((n = (i = u[r].src).lastIndexOf("/")) > -1 ? (s = i.substring(n + 1), o = i.substring(0, n + 1)) : (s = i, o = ""), t = 0; d > t; t++)if (l = e[t], s.indexOf(l) > -1) {
                a = o;
                break
            }
            if ("" !== a)break
        }
        return a
    }, calculateTimeFormat: function (e, t, n) {
        0 > e && (e = 0), void 0 === n && (n = 25);
        var i = t.timeFormat, o = i[0], s = i[1] == i[0], r = s ? 2 : 1, a = ":", l = Math.floor(e / 3600) % 24,
            u = Math.floor(e / 60) % 60, c = Math.floor(e % 60),
            d = [[Math.floor((e % 1 * n).toFixed(3)), "f"], [c, "s"], [u, "m"], [l, "h"]];
        i.length < r && (a = i[r]);
        for (var p = !1, h = 0, f = d.length; f > h; h++)if (-1 !== i.indexOf(d[h][1])) p = !0; else if (p) {
            for (var m = !1, g = h; f > g; g++)if (d[g][0] > 0) {
                m = !0;
                break
            }
            if (!m)break;
            s || (i = o + i), i = d[h][1] + a + i, s && (i = d[h][1] + i), o = d[h][1]
        }
        t.currentTimeFormat = i
    }, twoDigitsString: function (e) {
        return 10 > e ? "0" + e : String(e)
    }, secondsToTimeCode: function (e, t) {
        if (0 > e && (e = 0), "object" != typeof t) {
            o = "m:ss";
            o = arguments[1] ? "hh:mm:ss" : o, t = {
                currentTimeFormat: o = arguments[2] ? o + ":ff" : o,
                framesPerSecond: arguments[3] || 25
            }
        }
        var n = t.framesPerSecond;
        void 0 === n && (n = 25);
        var o = t.currentTimeFormat, s = Math.floor(e / 3600) % 24, r = Math.floor(e / 60) % 60, a = Math.floor(e % 60),
            l = Math.floor((e % 1 * n).toFixed(3));
        lis = [[l, "f"], [a, "s"], [r, "m"], [s, "h"]];
        var u = o;
        for (i = 0, len = lis.length; i < len; i++)u = u.replace(lis[i][1] + lis[i][1], this.twoDigitsString(lis[i][0])), u = u.replace(lis[i][1], lis[i][0]);
        return u
    }, timeCodeToSeconds: function (e, t, n, i) {
        void 0 === n ? n = !1 : void 0 === i && (i = 25);
        var o = e.split(":"), s = parseInt(o[0], 10), r = parseInt(o[1], 10), a = parseInt(o[2], 10), l = 0;
        return n && (l = parseInt(o[3]) / i), 3600 * s + 60 * r + a + l
    }, convertSMPTEtoSeconds: function (e) {
        if ("string" != typeof e)return !1;
        var t = 0, n = -1 != (e = e.replace(",", ".")).indexOf(".") ? e.split(".")[1].length : 0, i = 1;
        e = e.split(":").reverse();
        for (var o = 0; o < e.length; o++)i = 1, o > 0 && (i = Math.pow(60, o)), t += Number(e[o]) * i;
        return Number(t.toFixed(n))
    }, removeSwf: function (e) {
        var t = document.getElementById(e);
        t && /object|embed/i.test(t.nodeName) && (mejs.MediaFeatures.isIE ? (t.style.display = "none", function () {
            4 == t.readyState ? mejs.Utility.removeObjectInIE(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    }, removeObjectInIE: function (e) {
        var t = document.getElementById(e);
        if (t) {
            for (var n in t)"function" == typeof t[n] && (t[n] = null);
            t.parentNode.removeChild(t)
        }
    }, determineScheme: function (e) {
        return e && -1 != e.indexOf("://") ? e.substr(0, e.indexOf("://") + 3) : "//"
    }, debounce: function (e, t, n) {
        var i;
        return function () {
            var o = this, s = arguments, r = n && !i;
            clearTimeout(i), i = setTimeout(function () {
                i = null, n || e.apply(o, s)
            }, t), r && e.apply(o, s)
        }
    }, isNodeAfter: function (e, t) {
        return !!(e && t && "function" == typeof e.compareDocumentPosition && e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_PRECEDING)
    }
}, mejs.PluginDetector = {
    hasPluginVersion: function (e, t) {
        var n = this.plugins[e];
        return t[1] = t[1] || 0, t[2] = t[2] || 0, n[0] > t[0] || n[0] == t[0] && n[1] > t[1] || n[0] == t[0] && n[1] == t[1] && n[2] >= t[2]
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function (e, t, n, i, o) {
        this.plugins[e] = this.detectPlugin(t, n, i, o)
    },
    detectPlugin: function (e, t, n, i) {
        var o, s, r, a = [0, 0, 0];
        if (void 0 !== this.nav.plugins && "object" == typeof this.nav.plugins[e]) {
            if ((o = this.nav.plugins[e].description) && (void 0 === this.nav.mimeTypes || !this.nav.mimeTypes[t] || this.nav.mimeTypes[t].enabledPlugin))for (a = o.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), s = 0; s < a.length; s++)a[s] = parseInt(a[s].match(/\d+/), 10)
        } else if (void 0 !== window.ActiveXObject)try {
            (r = new ActiveXObject(n)) && (a = i(r))
        } catch (e) {
        }
        return a
    }
}, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (e) {
    var t = [], n = e.GetVariable("$version");
    return n && (n = n.split(" ")[1].split(","), t = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]), t
}), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function (e) {
    var t = [0, 0, 0, 0], n = function (e, t, n, i) {
        for (; e.isVersionSupported(t[0] + "." + t[1] + "." + t[2] + "." + t[3]);)t[n] += i;
        t[n] -= i
    };
    return n(e, t, 0, 1), n(e, t, 1, 1), n(e, t, 2, 1e4), n(e, t, 2, 1e3), n(e, t, 2, 100), n(e, t, 2, 10), n(e, t, 2, 1), n(e, t, 3, 1), t
}), mejs.MediaFeatures = {
    init: function () {
        var e, t, n = this, i = document, o = mejs.PluginDetector.nav, s = mejs.PluginDetector.ua.toLowerCase(),
            r = ["source", "track", "audio", "video"];
        n.isiPad = null !== s.match(/ipad/i), n.isiPhone = null !== s.match(/iphone/i), n.isiOS = n.isiPhone || n.isiPad, n.isAndroid = null !== s.match(/android/i), n.isBustedAndroid = null !== s.match(/android 2\.[12]/), n.isBustedNativeHTTPS = "https:" === location.protocol && (null !== s.match(/android [12]\./) || null !== s.match(/macintosh.* version.* safari/)), n.isIE = -1 != o.appName.toLowerCase().indexOf("microsoft") || null !== o.appName.toLowerCase().match(/trident/gi), n.isChrome = null !== s.match(/chrome/gi), n.isChromium = null !== s.match(/chromium/gi), n.isFirefox = null !== s.match(/firefox/gi), n.isWebkit = null !== s.match(/webkit/gi), n.isGecko = null !== s.match(/gecko/gi) && !n.isWebkit && !n.isIE, n.isOpera = null !== s.match(/opera/gi), n.hasTouch = "ontouchstart" in window, n.svgAsImg = !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
        for (e = 0; e < r.length; e++)t = document.createElement(r[e]);
        n.supportsMediaTag = void 0 !== t.canPlayType || n.isBustedAndroid;
        try {
            t.canPlayType("video/mp4")
        } catch (e) {
            n.supportsMediaTag = !1
        }
        n.supportsPointerEvents = function () {
            var e, t = document.createElement("x"), n = document.documentElement, i = window.getComputedStyle;
            return "pointerEvents" in t.style && (t.style.pointerEvents = "auto", t.style.pointerEvents = "x", n.appendChild(t), e = i && "auto" === i(t, "").pointerEvents, n.removeChild(t), !!e)
        }(), n.hasFirefoxPluginMovingProblem = !1, n.hasiOSFullScreen = void 0 !== t.webkitEnterFullscreen, n.hasNativeFullscreen = void 0 !== t.requestFullscreen, n.hasWebkitNativeFullScreen = void 0 !== t.webkitRequestFullScreen, n.hasMozNativeFullScreen = void 0 !== t.mozRequestFullScreen, n.hasMsNativeFullScreen = void 0 !== t.msRequestFullscreen, n.hasTrueNativeFullScreen = n.hasWebkitNativeFullScreen || n.hasMozNativeFullScreen || n.hasMsNativeFullScreen, n.nativeFullScreenEnabled = n.hasTrueNativeFullScreen, n.hasMozNativeFullScreen ? n.nativeFullScreenEnabled = document.mozFullScreenEnabled : n.hasMsNativeFullScreen && (n.nativeFullScreenEnabled = document.msFullscreenEnabled), n.isChrome && (n.hasiOSFullScreen = !1), n.hasTrueNativeFullScreen && (n.fullScreenEventName = "", n.hasWebkitNativeFullScreen ? n.fullScreenEventName = "webkitfullscreenchange" : n.hasMozNativeFullScreen ? n.fullScreenEventName = "mozfullscreenchange" : n.hasMsNativeFullScreen && (n.fullScreenEventName = "MSFullscreenChange"), n.isFullScreen = function () {
            return n.hasMozNativeFullScreen ? i.mozFullScreen : n.hasWebkitNativeFullScreen ? i.webkitIsFullScreen : n.hasMsNativeFullScreen ? null !== i.msFullscreenElement : void 0
        }, n.requestFullScreen = function (e) {
            n.hasWebkitNativeFullScreen ? e.webkitRequestFullScreen() : n.hasMozNativeFullScreen ? e.mozRequestFullScreen() : n.hasMsNativeFullScreen && e.msRequestFullscreen()
        }, n.cancelFullScreen = function () {
            n.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : n.hasMozNativeFullScreen ? document.mozCancelFullScreen() : n.hasMsNativeFullScreen && document.msExitFullscreen()
        }), n.hasiOSFullScreen && s.match(/mac os x 10_5/i) && (n.hasNativeFullScreen = !1, n.hasiOSFullScreen = !1)
    }
}, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: !1,
    setCurrentTime: function (e) {
        this.currentTime = e
    },
    setMuted: function (e) {
        this.muted = e
    },
    setVolume: function (e) {
        this.volume = e
    },
    stop: function () {
        this.pause()
    },
    setSrc: function (e) {
        for (var t = this.getElementsByTagName("source"); t.length > 0;)this.removeChild(t[0]);
        if ("string" == typeof e) this.src = e; else {
            var n, i;
            for (n = 0; n < e.length; n++)if (i = e[n], this.canPlayType(i.type)) {
                this.src = i.src;
                break
            }
        }
    },
    setVideoSize: function (e, t) {
        this.width = e, this.height = t
    }
}, mejs.PluginMediaElement = function (e, t, n) {
    this.id = e, this.pluginType = t, this.src = n, this.events = {}, this.attributes = {}
}, mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: !1,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: !0,
    ended: !1,
    seeking: !1,
    duration: 0,
    error: null,
    tagName: "",
    muted: !1,
    volume: 1,
    currentTime: 0,
    play: function () {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused = !1)
    },
    load: function () {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(), this.paused = !1)
    },
    pause: function () {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? 1 == this.pluginApi.getPlayerState() && this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused = !0)
    },
    stop: function () {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused = !0)
    },
    canPlayType: function (e) {
        var t, n, i, o = mejs.plugins[this.pluginType];
        for (t = 0; t < o.length; t++)if (i = o[t], mejs.PluginDetector.hasPluginVersion(this.pluginType, i.version))for (n = 0; n < i.types.length; n++)if (e == i.types[n])return "probably";
        return ""
    },
    positionFullscreenButton: function (e, t, n) {
        null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(e), Math.floor(t), n)
    },
    hideFullscreenButton: function () {
        null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function (e) {
        if ("string" == typeof e) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(e)), this.src = mejs.Utility.absolutizeUrl(e); else {
            var t, n;
            for (t = 0; t < e.length; t++)if (n = e[t], this.canPlayType(n.type)) {
                this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(n.src)), this.src = mejs.Utility.absolutizeUrl(n.src);
                break
            }
        }
    },
    setCurrentTime: function (e) {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(e) : this.pluginApi.setCurrentTime(e), this.currentTime = e)
    },
    setVolume: function (e) {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * e) : this.pluginApi.setVolume(e), this.volume = e)
    },
    setMuted: function (e) {
        null != this.pluginApi && ("youtube" == this.pluginType ? (e ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = e, this.dispatchEvent({type: "volumechange"})) : this.pluginApi.setMuted(e), this.muted = e)
    },
    setVideoSize: function (e, t) {
        this.pluginElement && this.pluginElement.style && (this.pluginElement.style.width = e + "px", this.pluginElement.style.height = t + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(e, t)
    },
    setFullscreen: function (e) {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(e)
    },
    enterFullScreen: function () {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
    },
    exitFullScreen: function () {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
    },
    addEventListener: function (e, t, n) {
        this.events[e] = this.events[e] || [], this.events[e].push(t)
    },
    removeEventListener: function (e, t) {
        if (!e)return this.events = {}, !0;
        var n = this.events[e];
        if (!n)return !0;
        if (!t)return this.events[e] = [], !0;
        for (var i = 0; i < n.length; i++)if (n[i] === t)return this.events[e].splice(i, 1), !0;
        return !1
    },
    dispatchEvent: function (e) {
        var t, n = this.events[e.type];
        if (n)for (t = 0; t < n.length; t++)n[t].apply(this, [e])
    },
    hasAttribute: function (e) {
        return e in this.attributes
    },
    removeAttribute: function (e) {
        delete this.attributes[e]
    },
    getAttribute: function (e) {
        return this.hasAttribute(e) ? this.attributes[e] : null
    },
    setAttribute: function (e, t) {
        this.attributes[e] = t
    },
    remove: function () {
        mejs.Utility.removeSwf(this.pluginElement.id)
    }
}, mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: !1,
    httpsBasicAuthSite: !1,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    flashScriptAccess: "sameDomain",
    enablePluginSmoothing: !1,
    enablePseudoStreaming: !1,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: .8,
    customError: "",
    success: function () {
    },
    error: function () {
    }
}, mejs.MediaElement = function (e, t) {
    return mejs.HtmlMediaElementShim.create(e, t)
}, mejs.HtmlMediaElementShim = {
    create: function (e, t) {
        var n, i, o = {}, s = "string" == typeof e ? document.getElementById(e) : e, r = s.tagName.toLowerCase(),
            a = "audio" === r || "video" === r, l = a ? s.getAttribute("src") : s.getAttribute("href"),
            u = s.getAttribute("poster"), c = s.getAttribute("autoplay"), d = s.getAttribute("preload"),
            p = s.getAttribute("controls");
        for (i in mejs.MediaElementDefaults)o[i] = mejs.MediaElementDefaults[i];
        for (i in t)o[i] = t[i];
        return l = void 0 === l || null === l || "" == l ? null : l, u = void 0 === u || null === u ? "" : u, d = void 0 === d || null === d || "false" === d ? "none" : d, c = !(void 0 === c || null === c || "false" === c), p = !(void 0 === p || null === p || "false" === p), n = this.determinePlayback(s, o, mejs.MediaFeatures.supportsMediaTag, a, l), n.url = null !== n.url ? mejs.Utility.absolutizeUrl(n.url) : "", n.scheme = mejs.Utility.determineScheme(n.url), "native" == n.method ? (mejs.MediaFeatures.isBustedAndroid && (s.src = n.url, s.addEventListener("click", function () {
            s.play()
        }, !1)), this.updateNative(n, o, c, d)) : "" !== n.method ? this.createPlugin(n, o, u, c, d, p) : (this.createErrorMessage(n, o, u), this)
    }, determinePlayback: function (e, t, n, i, o) {
        var s, r, a, l, u, c, d, p, h, f, m, g = [],
            v = {method: "", url: "", htmlMediaElement: e, isVideo: "audio" !== e.tagName.toLowerCase(), scheme: ""};
        if (void 0 !== t.type && "" !== t.type)if ("string" == typeof t.type) g.push({
            type: t.type,
            url: o
        }); else for (s = 0; s < t.type.length; s++)g.push({
            type: t.type[s],
            url: o
        }); else if (null !== o) c = this.formatType(o, e.getAttribute("type")), g.push({
            type: c,
            url: o
        }); else for (s = 0; s < e.childNodes.length; s++)1 == (u = e.childNodes[s]).nodeType && "source" == u.tagName.toLowerCase() && (o = u.getAttribute("src"), c = this.formatType(o, u.getAttribute("type")), (!(m = u.getAttribute("media")) || !window.matchMedia || window.matchMedia && window.matchMedia(m).matches) && g.push({
            type: c,
            url: o
        }));
        if (!i && g.length > 0 && null !== g[0].url && this.getTypeFromFile(g[0].url).indexOf("audio") > -1 && (v.isVideo = !1), v.isVideo && mejs.MediaFeatures.isBustedAndroid && (e.canPlayType = function (e) {
                return null !== e.match(/video\/(mp4|m4v)/gi) ? "maybe" : ""
            }), v.isVideo && mejs.MediaFeatures.isChromium && (e.canPlayType = function (e) {
                return null !== e.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : ""
            }), n && ("auto" === t.mode || "auto_plugin" === t.mode || "native" === t.mode) && (!mejs.MediaFeatures.isBustedNativeHTTPS || !0 !== t.httpsBasicAuthSite)) {
            for (i || (f = document.createElement(v.isVideo ? "video" : "audio"), e.parentNode.insertBefore(f, e), e.style.display = "none", v.htmlMediaElement = e = f), s = 0; s < g.length; s++)if ("video/m3u8" == g[s].type || "" !== e.canPlayType(g[s].type).replace(/no/, "") || "" !== e.canPlayType(g[s].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== e.canPlayType(g[s].type.replace(/m4a/, "mp4")).replace(/no/, "")) {
                v.method = "native", v.url = g[s].url;
                break
            }
            if ("native" === v.method && (null !== v.url && (e.src = v.url), "auto_plugin" !== t.mode))return v
        }
        if ("auto" === t.mode || "auto_plugin" === t.mode || "shim" === t.mode)for (s = 0; s < g.length; s++)for (c = g[s].type, r = 0; r < t.plugins.length; r++)for (d = t.plugins[r], p = mejs.plugins[d], a = 0; a < p.length; a++)if (null == (h = p[a]).version || mejs.PluginDetector.hasPluginVersion(d, h.version))for (l = 0; l < h.types.length; l++)if (c.toLowerCase() == h.types[l].toLowerCase())return v.method = d, v.url = g[s].url, v;
        return "auto_plugin" === t.mode && "native" === v.method ? v : ("" === v.method && g.length > 0 && (v.url = g[0].url), v)
    }, formatType: function (e, t) {
        return e && !t ? this.getTypeFromFile(e) : t && ~t.indexOf(";") ? t.substr(0, t.indexOf(";")) : t
    }, getTypeFromFile: function (e) {
        var t = (e = e.split("?")[0]).substring(e.lastIndexOf(".") + 1).toLowerCase(),
            n = /(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(t) ? "video/" : "audio/";
        return this.getTypeFromExtension(t, n)
    }, getTypeFromExtension: function (e, t) {
        switch (t = t || "", e) {
            case"mp4":
            case"m4v":
            case"m4a":
            case"f4v":
            case"f4a":
                return t + "mp4";
            case"flv":
                return t + "x-flv";
            case"webm":
            case"webma":
            case"webmv":
                return t + "webm";
            case"ogg":
            case"oga":
            case"ogv":
                return t + "ogg";
            case"m3u8":
                return "application/x-mpegurl";
            case"ts":
                return t + "mp2t";
            default:
                return t + e
        }
    }, createErrorMessage: function (e, t, n) {
        var i = e.htmlMediaElement, o = document.createElement("div"), s = t.customError;
        o.className = "me-cannotplay";
        try {
            o.style.width = i.width + "px", o.style.height = i.height + "px"
        } catch (e) {
        }
        s || (s = '<a href="' + e.url + '">', "" !== n && (s += '<img src="' + n + '" width="100%" height="100%" alt="" />'), s += "<span>" + mejs.i18n.t("mejs.download-file") + "</span></a>"), o.innerHTML = s, i.parentNode.insertBefore(o, i), i.style.display = "none", t.error(i)
    }, createPlugin: function (e, t, n, i, o, s) {
        var r, a, l, u = e.htmlMediaElement, c = 1, d = 1, p = "me_" + e.method + "_" + mejs.meIndex++,
            h = new mejs.PluginMediaElement(p, e.method, e.url), f = document.createElement("div");
        h.tagName = u.tagName;
        for (y = 0; y < u.attributes.length; y++) {
            var m = u.attributes[y];
            m.specified && h.setAttribute(m.name, m.value)
        }
        for (a = u.parentNode; null !== a && null != a.tagName && "body" !== a.tagName.toLowerCase() && null != a.parentNode && null != a.parentNode.tagName && null != a.parentNode.constructor && "ShadowRoot" === a.parentNode.constructor.name;) {
            if ("p" === a.parentNode.tagName.toLowerCase()) {
                a.parentNode.parentNode.insertBefore(a, a.parentNode);
                break
            }
            a = a.parentNode
        }
        if (e.isVideo ? (c = t.pluginWidth > 0 ? t.pluginWidth : t.videoWidth > 0 ? t.videoWidth : null !== u.getAttribute("width") ? u.getAttribute("width") : t.defaultVideoWidth, d = t.pluginHeight > 0 ? t.pluginHeight : t.videoHeight > 0 ? t.videoHeight : null !== u.getAttribute("height") ? u.getAttribute("height") : t.defaultVideoHeight, c = mejs.Utility.encodeUrl(c), d = mejs.Utility.encodeUrl(d)) : t.enablePluginDebug && (c = 320, d = 240), h.success = t.success, f.className = "me-plugin", f.id = p + "_container", e.isVideo ? u.parentNode.insertBefore(f, u) : document.body.insertBefore(f, document.body.childNodes[0]), "flash" === e.method || "silverlight" === e.method) {
            var g = "audio/mp4" === u.getAttribute("type"), v = u.getElementsByTagName("source");
            if (v && !g)for (var y = 0, b = v.length; b > y; y++)"audio/mp4" === v[y].getAttribute("type") && (g = !0);
            l = ["id=" + p, "isvideo=" + (e.isVideo || g ? "true" : "false"), "autoplay=" + (i ? "true" : "false"), "preload=" + o, "width=" + c, "startvolume=" + t.startVolume, "timerrate=" + t.timerRate, "flashstreamer=" + t.flashStreamer, "height=" + d, "pseudostreamstart=" + t.pseudoStreamingStartQueryParam], null !== e.url && ("flash" == e.method ? l.push("file=" + mejs.Utility.encodeUrl(e.url)) : l.push("file=" + e.url)), t.enablePluginDebug && l.push("debug=true"), t.enablePluginSmoothing && l.push("smoothing=true"), t.enablePseudoStreaming && l.push("pseudostreaming=true"), s && l.push("controls=true"), t.pluginVars && (l = l.concat(t.pluginVars)), window[p + "_init"] = function () {
                switch (h.pluginType) {
                    case"flash":
                        h.pluginElement = h.pluginApi = document.getElementById(p);
                        break;
                    case"silverlight":
                        h.pluginElement = document.getElementById(h.id), h.pluginApi = h.pluginElement.Content.MediaElementJS
                }
                null != h.pluginApi && h.success && h.success(h, u)
            }, window[p + "_event"] = function (e, t) {
                var n, i, o;
                n = {type: e, target: h};
                for (i in t)h[i] = t[i], n[i] = t[i];
                o = t.bufferedTime || 0, n.target.buffered = n.buffered = {
                    start: function (e) {
                        return 0
                    }, end: function (e) {
                        return o
                    }, length: 1
                }, h.dispatchEvent(n)
            }
        }
        switch (e.method) {
            case"silverlight":
                f.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + p + '" name="' + p + '" width="' + c + '" height="' + d + '" class="mejs-shim"><param name="initParams" value="' + l.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + t.pluginPath + t.silverlightName + '" /></object>';
                break;
            case"flash":
                mejs.MediaFeatures.isIE ? (r = document.createElement("div"), f.appendChild(r), r.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + p + '" width="' + c + '" height="' + d + '" class="mejs-shim"><param name="movie" value="' + t.pluginPath + t.flashName + "?" + (new Date).getTime() + '" /><param name="flashvars" value="' + l.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + t.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : f.innerHTML = '<embed id="' + p + '" name="' + p + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="' + t.flashScriptAccess + '" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + t.pluginPath + t.flashName + '" flashvars="' + l.join("&") + '" width="' + c + '" height="' + d + '" scale="default"class="mejs-shim"></embed>';
                break;
            case"youtube":
                var w;
                if (-1 != e.url.lastIndexOf("youtu.be")) -1 != (w = e.url.substr(e.url.lastIndexOf("/") + 1)).indexOf("?") && (w = w.substr(0, w.indexOf("?"))); else {
                    var x = e.url.match(/[?&]v=([^&#]+)|&|#|$/);
                    x && (w = x[1])
                }
                youtubeSettings = {
                    container: f,
                    containerId: f.id,
                    pluginMediaElement: h,
                    pluginId: p,
                    videoId: w,
                    height: d,
                    width: c,
                    scheme: e.scheme,
                    variables: t.youtubeIframeVars
                }, window.postMessage ? mejs.YouTubeApi.enqueueIframe(youtubeSettings) : mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) && mejs.YouTubeApi.createFlash(youtubeSettings, t);
                break;
            case"vimeo":
                var T = p + "_player";
                if (h.vimeoid = e.url.substr(e.url.lastIndexOf("/") + 1), f.innerHTML = '<iframe src="' + e.scheme + "player.vimeo.com/video/" + h.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + T + '" width="' + c + '" height="' + d + '" frameborder="0" class="mejs-shim" id="' + T + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', "function" == typeof $f) {
                    var C = $f(f.childNodes[0]), j = -1;
                    C.addEvent("ready", function () {
                        function e(e, t, n, i) {
                            var o = {type: n, target: t};
                            "timeupdate" == n && (t.currentTime = o.currentTime = i.seconds, t.duration = o.duration = i.duration), t.dispatchEvent(o)
                        }

                        C.playVideo = function () {
                            C.api("play")
                        }, C.stopVideo = function () {
                            C.api("unload")
                        }, C.pauseVideo = function () {
                            C.api("pause")
                        }, C.seekTo = function (e) {
                            C.api("seekTo", e)
                        }, C.setVolume = function (e) {
                            C.api("setVolume", e)
                        }, C.setMuted = function (e) {
                            e ? (C.lastVolume = C.api("getVolume"), C.api("setVolume", 0)) : (C.api("setVolume", C.lastVolume), delete C.lastVolume)
                        }, C.getPlayerState = function () {
                            return j
                        }, C.addEvent("play", function () {
                            j = 1, e(C, h, "play"), e(C, h, "playing")
                        }), C.addEvent("pause", function () {
                            j = 2, e(C, h, "pause")
                        }), C.addEvent("finish", function () {
                            j = 0, e(C, h, "ended")
                        }), C.addEvent("playProgress", function (t) {
                            e(C, h, "timeupdate", t)
                        }), C.addEvent("seek", function (t) {
                            j = 3, e(C, h, "seeked", t)
                        }), C.addEvent("loadProgress", function (t) {
                            j = 3, e(C, h, "progress", t)
                        }), h.pluginElement = f, h.pluginApi = C, h.success(h, h.pluginElement)
                    })
                } else console.warn("You need to include froogaloop for vimeo to work")
        }
        return u.style.display = "none", u.removeAttribute("autoplay"), h
    }, updateNative: function (e, t, n, i) {
        var o, s = e.htmlMediaElement;
        for (o in mejs.HtmlMediaElement)s[o] = mejs.HtmlMediaElement[o];
        return t.success(s, s), s
    }
}, mejs.YouTubeApi = {
    isIframeStarted: !1, isIframeLoaded: !1, loadIframeApi: function (e) {
        if (!this.isIframeStarted) {
            var t = document.createElement("script");
            t.src = e.scheme + "www.youtube.com/player_api";
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(t, n), this.isIframeStarted = !0
        }
    }, iframeQueue: [], enqueueIframe: function (e) {
        this.isLoaded ? this.createIframe(e) : (this.loadIframeApi(e), this.iframeQueue.push(e))
    }, createIframe: function (e) {
        var t = e.pluginMediaElement, n = {controls: 0, wmode: "transparent"}, i = new YT.Player(e.containerId, {
            height: e.height,
            width: e.width,
            videoId: e.videoId,
            playerVars: mejs.$.extend({}, n, e.variables),
            events: {
                onReady: function (n) {
                    i.setVideoSize = function (e, t) {
                        i.setSize(e, t)
                    }, e.pluginMediaElement.pluginApi = i, e.pluginMediaElement.pluginElement = document.getElementById(e.containerId), t.success(t, t.pluginElement), mejs.YouTubeApi.createEvent(i, t, "canplay"), setInterval(function () {
                        mejs.YouTubeApi.createEvent(i, t, "timeupdate")
                    }, 250), void 0 !== t.attributes.autoplay && i.playVideo()
                }, onStateChange: function (e) {
                    mejs.YouTubeApi.handleStateChange(e.data, i, t)
                }
            }
        })
    }, createEvent: function (e, t, n) {
        var i = {type: n, target: t};
        if (e && e.getDuration) {
            t.currentTime = i.currentTime = e.getCurrentTime(), t.duration = i.duration = e.getDuration(), i.paused = t.paused, i.ended = t.ended, i.muted = e.isMuted(), i.volume = e.getVolume() / 100, i.bytesTotal = e.getVideoBytesTotal(), i.bufferedBytes = e.getVideoBytesLoaded();
            var o = i.bufferedBytes / i.bytesTotal * i.duration;
            i.target.buffered = i.buffered = {
                start: function (e) {
                    return 0
                }, end: function (e) {
                    return o
                }, length: 1
            }
        }
        t.dispatchEvent(i)
    }, iFrameReady: function () {
        for (this.isLoaded = !0, this.isIframeLoaded = !0; this.iframeQueue.length > 0;) {
            var e = this.iframeQueue.pop();
            this.createIframe(e)
        }
    }, flashPlayers: {}, createFlash: function (e) {
        this.flashPlayers[e.pluginId] = e;
        var t,
            n = e.scheme + "www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + e.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        mejs.MediaFeatures.isIE ? (t = document.createElement("div"), e.container.appendChild(t), t.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + e.scheme + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e.pluginId + '" width="' + e.width + '" height="' + e.height + '" class="mejs-shim"><param name="movie" value="' + n + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + options.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /></object>') : e.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + e.pluginId + '" data="' + n + '" width="' + e.width + '" height="' + e.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="' + options.flashScriptAccess + '"><param name="wmode" value="transparent"></object>'
    }, flashReady: function (e) {
        var t = this.flashPlayers[e], n = document.getElementById(e), i = t.pluginMediaElement;
        i.pluginApi = i.pluginElement = n, t.success(i, i.pluginElement), n.cueVideoById(t.videoId);
        var o = t.containerId + "_callback";
        window[o] = function (e) {
            mejs.YouTubeApi.handleStateChange(e, n, i)
        }, n.addEventListener("onStateChange", o), setInterval(function () {
            mejs.YouTubeApi.createEvent(n, i, "timeupdate")
        }, 250), mejs.YouTubeApi.createEvent(n, i, "canplay")
    }, handleStateChange: function (e, t, n) {
        switch (e) {
            case-1:
                n.paused = !0, n.ended = !0, mejs.YouTubeApi.createEvent(t, n, "loadedmetadata");
                break;
            case 0:
                n.paused = !1, n.ended = !0, mejs.YouTubeApi.createEvent(t, n, "ended");
                break;
            case 1:
                n.paused = !1, n.ended = !1, mejs.YouTubeApi.createEvent(t, n, "play"), mejs.YouTubeApi.createEvent(t, n, "playing");
                break;
            case 2:
                n.paused = !0, n.ended = !1, mejs.YouTubeApi.createEvent(t, n, "pause");
                break;
            case 3:
                mejs.YouTubeApi.createEvent(t, n, "progress")
        }
    }
}, window.onYouTubePlayerAPIReady = function () {
    mejs.YouTubeApi.iFrameReady()
}, window.onYouTubePlayerReady = function (e) {
    mejs.YouTubeApi.flashReady(e)
}, window.mejs = mejs, window.MediaElement = mejs.MediaElement, function (e, t, n, i) {
    var o = {
        default: "en",
        locale: {language: n.i18n && n.i18n.locale.language || "", strings: n.i18n && n.i18n.locale.strings || {}},
        pluralForms: [function () {
            return arguments[1]
        }, function () {
            var e = arguments;
            return 1 === e[0] ? e[1] : e[2]
        }, function () {
            var e = arguments;
            return [0, 1].indexOf(e[0]) > -1 ? e[1] : e[2]
        }, function () {
            var e = arguments;
            return e[0] % 10 == 1 && e[0] % 100 != 11 ? e[1] : 0 !== e[0] ? e[2] : e[3]
        }, function () {
            var e = arguments;
            return 1 === e[0] || 11 === e[0] ? e[1] : 2 === e[0] || 12 === e[0] ? e[2] : e[0] > 2 && e[0] < 20 ? e[3] : e[4]
        }, function () {
            return 1 === args[0] ? args[1] : 0 === args[0] || args[0] % 100 > 0 && args[0] % 100 < 20 ? args[2] : args[3]
        }, function () {
            var e = arguments;
            return e[0] % 10 == 1 && e[0] % 100 != 11 ? e[1] : e[0] % 10 >= 2 && (e[0] % 100 < 10 || e[0] % 100 >= 20) ? e[2] : [3]
        }, function () {
            var e = arguments;
            return e[0] % 10 == 1 && e[0] % 100 != 11 ? e[1] : e[0] % 10 >= 2 && e[0] % 10 <= 4 && (e[0] % 100 < 10 || e[0] % 100 >= 20) ? e[2] : e[3]
        }, function () {
            var e = arguments;
            return 1 === e[0] ? e[1] : e[0] >= 2 && e[0] <= 4 ? e[2] : e[3]
        }, function () {
            var e = arguments;
            return 1 === e[0] ? e[1] : e[0] % 10 >= 2 && e[0] % 10 <= 4 && (e[0] % 100 < 10 || e[0] % 100 >= 20) ? e[2] : e[3]
        }, function () {
            var e = arguments;
            return e[0] % 100 == 1 ? e[2] : e[0] % 100 == 2 ? e[3] : e[0] % 100 == 3 || e[0] % 100 == 4 ? e[4] : e[1]
        }, function () {
            var e = arguments;
            return 1 === e[0] ? e[1] : 2 === e[0] ? e[2] : e[0] > 2 && e[0] < 7 ? e[3] : e[0] > 6 && e[0] < 11 ? e[4] : e[5]
        }, function () {
            var e = arguments;
            return 0 === e[0] ? e[1] : 1 === e[0] ? e[2] : 2 === e[0] ? e[3] : e[0] % 100 >= 3 && e[0] % 100 <= 10 ? e[4] : e[0] % 100 >= 11 ? e[5] : e[6]
        }, function () {
            var e = arguments;
            return 1 === e[0] ? e[1] : 0 === e[0] || e[0] % 100 > 1 && e[0] % 100 < 11 ? e[2] : e[0] % 100 > 10 && e[0] % 100 < 20 ? e[3] : e[4]
        }, function () {
            var e = arguments;
            return e[0] % 10 == 1 ? e[1] : e[0] % 10 == 2 ? e[2] : e[3]
        }, function () {
            var e = arguments;
            return 11 !== e[0] && e[0] % 10 == 1 ? e[1] : e[2]
        }, function () {
            var e = arguments;
            return 1 === e[0] ? e[1] : e[0] % 10 >= 2 && e[0] % 10 <= 4 && (e[0] % 100 < 10 || e[0] % 100 >= 20) ? e[2] : e[3]
        }, function () {
            var e = arguments;
            return 1 === e[0] ? e[1] : 2 === e[0] ? e[2] : 8 !== e[0] && 11 !== e[0] ? e[3] : e[4]
        }, function () {
            var e = arguments;
            return 0 === e[0] ? e[1] : e[2]
        }, function () {
            var e = arguments;
            return 1 === e[0] ? e[1] : 2 === e[0] ? e[2] : 3 === e[0] ? e[3] : e[4]
        }, function () {
            var e = arguments;
            return 0 === e[0] ? e[1] : 1 === e[0] ? e[2] : e[3]
        }],
        getLanguage: function () {
            var e = o.locale.language || o.default;
            return /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/.exec(e) ? e : o.default
        },
        t: function (e, t) {
            if ("string" == typeof e && e.length) {
                var n, i, s = o.getLanguage(), r = function (e, t, n) {
                    return "object" != typeof e || "number" != typeof t || "number" != typeof n ? e : "string" == typeof e ? e : o.pluralForms[n].apply(null, [t].concat(e))
                };
                return o.locale.strings && o.locale.strings[s] && (n = o.locale.strings[s][e], "number" == typeof t && (i = o.locale.strings[s]["mejs.plural-form"], n = r.apply(null, [n, t, i]))), !n && o.locale.strings && o.locale.strings[o.default] && (n = o.locale.strings[o.default][e], "number" == typeof t && (i = o.locale.strings[o.default]["mejs.plural-form"], n = r.apply(null, [n, t, i]))), n = n || e, "number" == typeof t && (n = n.replace("%1", t)), function (e) {
                    var t = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"};
                    return e.replace(/[&<>"]/g, function (e) {
                        return t[e]
                    })
                }(n)
            }
            return e
        }
    };
    "undefined" != typeof mejsL10n && (o.locale.language = mejsL10n.language), n.i18n = o
}(document, window, mejs), function (e, t) {
    "use strict";
    "undefined" != typeof mejsL10n && (e[mejsL10n.lang] = mejsL10n.strings)
}(mejs.i18n.locale.strings), function (e) {
    "use strict";
    void 0 === e.en && (e.en = {
        "mejs.plural-form": 1,
        "mejs.download-file": "Download File",
        "mejs.fullscreen-off": "Turn off Fullscreen",
        "mejs.fullscreen-on": "Go Fullscreen",
        "mejs.download-video": "Download Video",
        "mejs.fullscreen": "Fullscreen",
        "mejs.time-jump-forward": ["Jump forward 1 second", "Jump forward %1 seconds"],
        "mejs.play": "Play",
        "mejs.pause": "Pause",
        "mejs.close": "Close",
        "mejs.time-slider": "Time Slider",
        "mejs.time-help-text": "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
        "mejs.time-skip-back": ["Skip back 1 second", "Skip back %1 seconds"],
        "mejs.captions-subtitles": "Captions/Subtitles",
        "mejs.none": "None",
        "mejs.mute-toggle": "Mute Toggle",
        "mejs.volume-help-text": "Use Up/Down Arrow keys to increase or decrease volume.",
        "mejs.unmute": "Unmute",
        "mejs.mute": "Mute",
        "mejs.volume-slider": "Volume Slider",
        "mejs.video-player": "Video Player",
        "mejs.audio-player": "Audio Player",
        "mejs.ad-skip": "Skip ad",
        "mejs.ad-skip-info": ["Skip in 1 second", "Skip in %1 seconds"],
        "mejs.source-chooser": "Source Chooser"
    })
}(mejs.i18n.locale.strings), "undefined" != typeof jQuery ? mejs.$ = jQuery : "undefined" != typeof Zepto ? (mejs.$ = Zepto, Zepto.fn.outerWidth = function (e) {
    var t = $(this).width();
    return e && (t += parseInt($(this).css("margin-right"), 10), t += parseInt($(this).css("margin-left"), 10)), t
}) : "undefined" != typeof ender && (mejs.$ = ender), function (e) {
    mejs.MepDefaults = {
        poster: "",
        showPosterWhenEnded: !1,
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function (e) {
            return .05 * e.duration
        },
        defaultSeekForwardInterval: function (e) {
            return .05 * e.duration
        },
        setDimensions: !0,
        audioWidth: -1,
        audioHeight: -1,
        startVolume: .8,
        loop: !1,
        autoRewind: !0,
        enableAutosize: !0,
        timeFormat: "",
        alwaysShowHours: !1,
        showTimecodeFrameCount: !1,
        framesPerSecond: 25,
        autosizeProgress: !0,
        alwaysShowControls: !1,
        hideVideoControlsOnLoad: !1,
        clickToPlayPause: !0,
        controlsTimeoutDefault: 1500,
        controlsTimeoutMouseEnter: 2500,
        controlsTimeoutMouseLeave: 1e3,
        iPadUseNativeControls: !1,
        iPhoneUseNativeControls: !1,
        AndroidUseNativeControls: !1,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: !0,
        stretching: "auto",
        enableKeyboard: !0,
        pauseOtherPlayers: !0,
        keyActions: [{
            keys: [32, 179], action: function (e, t, n, i) {
                mejs.MediaFeatures.isFirefox || (t.paused || t.ended ? t.play() : t.pause())
            }
        }, {
            keys: [38], action: function (e, t, n, i) {
                e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
                var o = Math.min(t.volume + .1, 1);
                t.setVolume(o)
            }
        }, {
            keys: [40], action: function (e, t, n, i) {
                e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
                var o = Math.max(t.volume - .1, 0);
                t.setVolume(o)
            }
        }, {
            keys: [37, 227], action: function (e, t, n, i) {
                if (!isNaN(t.duration) && t.duration > 0) {
                    e.isVideo && (e.showControls(), e.startControlsTimer());
                    var o = Math.max(t.currentTime - e.options.defaultSeekBackwardInterval(t), 0);
                    t.setCurrentTime(o)
                }
            }
        }, {
            keys: [39, 228], action: function (e, t, n, i) {
                if (!isNaN(t.duration) && t.duration > 0) {
                    e.isVideo && (e.showControls(), e.startControlsTimer());
                    var o = Math.min(t.currentTime + e.options.defaultSeekForwardInterval(t), t.duration);
                    t.setCurrentTime(o)
                }
            }
        }, {
            keys: [70], action: function (e, t, n, i) {
                void 0 !== e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen())
            }
        }, {
            keys: [77], action: function (e, t, n, i) {
                e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), e.startControlsTimer()), e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
            }
        }]
    }, mejs.mepIndex = 0, mejs.players = {}, mejs.MediaElementPlayer = function (t, n) {
        if (!(this instanceof mejs.MediaElementPlayer))return new mejs.MediaElementPlayer(t, n);
        var i = this;
        return i.$media = i.$node = e(t), i.node = i.media = i.$media[0], i.node ? void 0 !== i.node.player ? i.node.player : (void 0 === n && (n = i.$node.data("mejsoptions")), i.options = e.extend({}, mejs.MepDefaults, n), i.options.timeFormat || (i.options.timeFormat = "mm:ss", i.options.alwaysShowHours && (i.options.timeFormat = "hh:mm:ss"), i.options.showTimecodeFrameCount && (i.options.timeFormat += ":ff")), mejs.Utility.calculateTimeFormat(0, i.options, i.options.framesPerSecond || 25), i.id = "mep_" + mejs.mepIndex++, mejs.players[i.id] = i, i.init(), i) : void 0
    }, mejs.MediaElementPlayer.prototype = {
        hasFocus: !1, controlsAreVisible: !0, init: function () {
            var t = this, n = mejs.MediaFeatures, i = e.extend(!0, {}, t.options, {
                success: function (e, n) {
                    t.meReady(e, n)
                }, error: function (e) {
                    t.handleError(e)
                }
            }), o = t.media.tagName.toLowerCase();
            if (t.isDynamic = "audio" !== o && "video" !== o, t.isDynamic ? t.isVideo = t.options.isVideo : t.isVideo = "audio" !== o && t.options.isVideo, n.isiPad && t.options.iPadUseNativeControls || n.isiPhone && t.options.iPhoneUseNativeControls) t.$media.attr("controls", "controls"), n.isiPad && null !== t.media.getAttribute("autoplay") && t.play(); else if (n.isAndroid && t.options.AndroidUseNativeControls); else if (t.isVideo || !t.isVideo && t.options.features.length) {
                t.$media.removeAttr("controls");
                var s = t.isVideo ? mejs.i18n.t("mejs.video-player") : mejs.i18n.t("mejs.audio-player");
                e('<span class="mejs-offscreen">' + s + "</span>").insertBefore(t.$media), t.container = e('<div id="' + t.id + '" class="mejs-container ' + (mejs.MediaFeatures.svgAsImg ? "svg" : "no-svg") + '" tabindex="0" role="application" aria-label="' + s + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(t.$media[0].className).insertBefore(t.$media).focus(function (e) {
                    if (!t.controlsAreVisible && !t.hasFocus && t.controlsEnabled && (t.showControls(!0), !t.hasMsNativeFullScreen)) {
                        var n = ".mejs-playpause-button > button";
                        mejs.Utility.isNodeAfter(e.relatedTarget, t.container[0]) && (n = ".mejs-controls .mejs-button:last-child > button"), t.container.find(n).focus()
                    }
                }), t.options.features.length || t.container.css("background", "transparent").find(".mejs-controls").hide(), t.isVideo && "fill" === t.options.stretching && !t.container.parent("mejs-fill-container").length && (t.outerContainer = t.$media.parent(), t.container.wrap('<div class="mejs-fill-container"/>')), t.container.addClass((n.isAndroid ? "mejs-android " : "") + (n.isiOS ? "mejs-ios " : "") + (n.isiPad ? "mejs-ipad " : "") + (n.isiPhone ? "mejs-iphone " : "") + (t.isVideo ? "mejs-video " : "mejs-audio ")), t.container.find(".mejs-mediaelement").append(t.$media), t.node.player = t, t.controls = t.container.find(".mejs-controls"), t.layers = t.container.find(".mejs-layers");
                var r = t.isVideo ? "video" : "audio", a = r.substring(0, 1).toUpperCase() + r.substring(1);
                t.options[r + "Width"] > 0 || t.options[r + "Width"].toString().indexOf("%") > -1 ? t.width = t.options[r + "Width"] : "" !== t.media.style.width && null !== t.media.style.width ? t.width = t.media.style.width : null !== t.media.getAttribute("width") ? t.width = t.$media.attr("width") : t.width = t.options["default" + a + "Width"], t.options[r + "Height"] > 0 || t.options[r + "Height"].toString().indexOf("%") > -1 ? t.height = t.options[r + "Height"] : "" !== t.media.style.height && null !== t.media.style.height ? t.height = t.media.style.height : null !== t.$media[0].getAttribute("height") ? t.height = t.$media.attr("height") : t.height = t.options["default" + a + "Height"], t.setPlayerSize(t.width, t.height), i.pluginWidth = t.width, i.pluginHeight = t.height
            } else t.isVideo || t.options.features.length || t.$media.hide();
            mejs.MediaElement(t.$media[0], i), void 0 !== t.container && t.options.features.length && t.controlsAreVisible && t.container.trigger("controlsshown")
        }, showControls: function (e) {
            var t = this;
            e = void 0 === e || e, t.controlsAreVisible || (e ? (t.controls.removeClass("mejs-offscreen").stop(!0, !0).fadeIn(200, function () {
                t.controlsAreVisible = !0, t.container.trigger("controlsshown")
            }), t.container.find(".mejs-control").removeClass("mejs-offscreen").stop(!0, !0).fadeIn(200, function () {
                t.controlsAreVisible = !0
            })) : (t.controls.removeClass("mejs-offscreen").css("display", "block"), t.container.find(".mejs-control").removeClass("mejs-offscreen").css("display", "block"), t.controlsAreVisible = !0, t.container.trigger("controlsshown")), t.setControlsSize())
        }, hideControls: function (t) {
            var n = this;
            t = void 0 === t || t, !n.controlsAreVisible || n.options.alwaysShowControls || n.keyboardAction || n.media.paused || n.media.ended || (t ? (n.controls.stop(!0, !0).fadeOut(200, function () {
                e(this).addClass("mejs-offscreen").css("display", "block"), n.controlsAreVisible = !1, n.container.trigger("controlshidden")
            }), n.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function () {
                e(this).addClass("mejs-offscreen").css("display", "block")
            })) : (n.controls.addClass("mejs-offscreen").css("display", "block"), n.container.find(".mejs-control").addClass("mejs-offscreen").css("display", "block"), n.controlsAreVisible = !1, n.container.trigger("controlshidden")))
        }, controlsTimer: null, startControlsTimer: function (e) {
            var t = this;
            e = void 0 !== e ? e : t.options.controlsTimeoutDefault, t.killControlsTimer("start"), t.controlsTimer = setTimeout(function () {
                t.hideControls(), t.killControlsTimer("hide")
            }, e)
        }, killControlsTimer: function (e) {
            var t = this;
            null !== t.controlsTimer && (clearTimeout(t.controlsTimer), delete t.controlsTimer, t.controlsTimer = null)
        }, controlsEnabled: !0, disableControls: function () {
            var e = this;
            e.killControlsTimer(), e.hideControls(!1), this.controlsEnabled = !1
        }, enableControls: function () {
            var e = this;
            e.showControls(!1), e.controlsEnabled = !0
        }, meReady: function (t, n) {
            var i, o, s = this, r = mejs.MediaFeatures, a = n.getAttribute("autoplay"),
                l = !(void 0 === a || null === a || "false" === a);
            if (!s.created) {
                if (s.created = !0, s.media = t, s.domNode = n, !(r.isAndroid && s.options.AndroidUseNativeControls || r.isiPad && s.options.iPadUseNativeControls || r.isiPhone && s.options.iPhoneUseNativeControls)) {
                    if (!s.isVideo && !s.options.features.length)return l && "native" == t.pluginType && s.play(), void(s.options.success && ("string" == typeof s.options.success ? window[s.options.success](s.media, s.domNode, s) : s.options.success(s.media, s.domNode, s)));
                    s.buildposter(s, s.controls, s.layers, s.media), s.buildkeyboard(s, s.controls, s.layers, s.media), s.buildoverlays(s, s.controls, s.layers, s.media), s.findTracks();
                    for (i in s.options.features)if (o = s.options.features[i], s["build" + o])try {
                        s["build" + o](s, s.controls, s.layers, s.media)
                    } catch (e) {
                    }
                    s.container.trigger("controlsready"), s.setPlayerSize(s.width, s.height), s.setControlsSize(), s.isVideo && (mejs.MediaFeatures.hasTouch && !s.options.alwaysShowControls ? s.$media.bind("touchstart", function () {
                        s.controlsAreVisible ? s.hideControls(!1) : s.controlsEnabled && s.showControls(!1)
                    }) : (s.clickToPlayPauseCallback = function () {
                        if (s.options.clickToPlayPause) {
                            s.media.paused ? s.play() : s.pause();
                            var e = s.$media.closest(".mejs-container").find(".mejs-overlay-button"),
                                t = e.attr("aria-pressed");
                            e.attr("aria-pressed", !t)
                        }
                    }, s.media.addEventListener("click", s.clickToPlayPauseCallback, !1), s.container.bind("mouseenter", function () {
                        s.controlsEnabled && (s.options.alwaysShowControls || (s.killControlsTimer("enter"), s.showControls(), s.startControlsTimer(s.options.controlsTimeoutMouseEnter)))
                    }).bind("mousemove", function () {
                        s.controlsEnabled && (s.controlsAreVisible || s.showControls(), s.options.alwaysShowControls || s.startControlsTimer(s.options.controlsTimeoutMouseEnter))
                    }).bind("mouseleave", function () {
                        s.controlsEnabled && (s.media.paused || s.options.alwaysShowControls || s.startControlsTimer(s.options.controlsTimeoutMouseLeave))
                    })), s.options.hideVideoControlsOnLoad && s.hideControls(!1), l && !s.options.alwaysShowControls && s.hideControls(), s.options.enableAutosize && s.media.addEventListener("loadedmetadata", function (e) {
                        s.options.videoHeight <= 0 && null === s.domNode.getAttribute("height") && !isNaN(e.target.videoHeight) && (s.setPlayerSize(e.target.videoWidth, e.target.videoHeight), s.setControlsSize(), s.media.setVideoSize(e.target.videoWidth, e.target.videoHeight))
                    }, !1)), s.media.addEventListener("play", function () {
                        var e;
                        for (e in mejs.players) {
                            var t = mejs.players[e];
                            t.id == s.id || !s.options.pauseOtherPlayers || t.paused || t.ended || t.pause(), t.hasFocus = !1
                        }
                        s.hasFocus = !0
                    }, !1), s.media.addEventListener("ended", function (t) {
                        if (s.options.autoRewind)try {
                            s.media.setCurrentTime(0), window.setTimeout(function () {
                                e(s.container).find(".mejs-overlay-loading").parent().hide()
                            }, 20)
                        } catch (e) {
                        }
                        "youtube" === s.media.pluginType ? s.media.stop() : s.media.pause(), s.setProgressRail && s.setProgressRail(), s.setCurrentRail && s.setCurrentRail(), s.options.loop ? s.play() : !s.options.alwaysShowControls && s.controlsEnabled && s.showControls()
                    }, !1), s.media.addEventListener("loadedmetadata", function () {
                        mejs.Utility.calculateTimeFormat(s.duration, s.options, s.options.framesPerSecond || 25), s.updateDuration && s.updateDuration(), s.updateCurrent && s.updateCurrent(), s.isFullScreen || (s.setPlayerSize(s.width, s.height), s.setControlsSize())
                    }, !1);
                    var u = null;
                    s.media.addEventListener("timeupdate", function () {
                        u !== this.duration && (u = this.duration, mejs.Utility.calculateTimeFormat(u, s.options, s.options.framesPerSecond || 25), s.updateDuration && s.updateDuration(), s.updateCurrent && s.updateCurrent(), s.setControlsSize())
                    }, !1), s.container.focusout(function (t) {
                        if (t.relatedTarget) {
                            var n = e(t.relatedTarget);
                            s.keyboardAction && 0 === n.parents(".mejs-container").length && (s.keyboardAction = !1, s.isVideo && !s.options.alwaysShowControls && s.hideControls(!0))
                        }
                    }), setTimeout(function () {
                        s.setPlayerSize(s.width, s.height), s.setControlsSize()
                    }, 50), s.globalBind("resize", function () {
                        s.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || s.setPlayerSize(s.width, s.height), s.setControlsSize()
                    }), "youtube" == s.media.pluginType && (r.isiOS || r.isAndroid) && (s.container.find(".mejs-overlay-play").hide(), s.container.find(".mejs-poster").hide())
                }
                l && "native" == t.pluginType && s.play(), s.options.success && ("string" == typeof s.options.success ? window[s.options.success](s.media, s.domNode, s) : s.options.success(s.media, s.domNode, s))
            }
        }, handleError: function (e) {
            var t = this;
            t.controls && t.controls.hide(), t.options.error && t.options.error(e)
        }, setPlayerSize: function (e, t) {
            var n = this;
            if (!n.options.setDimensions)return !1;
            switch (void 0 !== e && (n.width = e), void 0 !== t && (n.height = t), n.options.stretching) {
                case"fill":
                    n.isVideo ? this.setFillMode() : this.setDimensions(n.width, n.height);
                    break;
                case"responsive":
                    this.setResponsiveMode();
                    break;
                case"none":
                    this.setDimensions(n.width, n.height);
                    break;
                default:
                    !0 === this.hasFluidMode() ? this.setResponsiveMode() : this.setDimensions(n.width, n.height)
            }
        }, hasFluidMode: function () {
            var e = this;
            return e.height.toString().indexOf("%") > 0 || "none" !== e.$node.css("max-width") && "t.width" !== e.$node.css("max-width") || e.$node[0].currentStyle && "100%" === e.$node[0].currentStyle.maxWidth
        }, setResponsiveMode: function () {
            var t = this,
                n = t.isVideo ? t.media.videoWidth && t.media.videoWidth > 0 ? t.media.videoWidth : null !== t.media.getAttribute("width") ? t.media.getAttribute("width") : t.options.defaultVideoWidth : t.options.defaultAudioWidth,
                i = t.isVideo ? t.media.videoHeight && t.media.videoHeight > 0 ? t.media.videoHeight : null !== t.media.getAttribute("height") ? t.media.getAttribute("height") : t.options.defaultVideoHeight : t.options.defaultAudioHeight,
                o = t.container.parent().closest(":visible").width(),
                s = t.container.parent().closest(":visible").height(),
                r = t.isVideo || !t.options.autosizeProgress ? parseInt(o * i / n, 10) : i;
            (isNaN(r) || 0 !== s && r > s && s > i) && (r = s), t.container.parent().length > 0 && "body" === t.container.parent()[0].tagName.toLowerCase() && (o = e(window).width(), r = e(window).height()), r && o && (t.container.width(o).height(r), t.$media.add(t.container.find(".mejs-shim")).width("100%").height("100%"), t.isVideo && t.media.setVideoSize && t.media.setVideoSize(o, r), t.layers.children(".mejs-layer").width("100%").height("100%"))
        }, setFillMode: function () {
            var e = this, t = e.outerContainer;
            t.width() || t.height(e.$media.width()), t.height() || t.height(e.$media.height());
            var n = t.width(), i = t.height();
            e.setDimensions("100%", "100%"), e.container.find(".mejs-poster img").css("display", "block"), targetElement = e.container.find("object, embed, iframe, video");
            var o = e.height, s = e.width, r = n, a = o * n / s, l = s * i / o, u = i, c = !(l > n),
                d = c ? Math.floor(r) : Math.floor(l), p = c ? Math.floor(a) : Math.floor(u);
            c ? (targetElement.height(p).width(n), e.media.setVideoSize && e.media.setVideoSize(n, p)) : (targetElement.height(i).width(d), e.media.setVideoSize && e.media.setVideoSize(d, i)), targetElement.css({
                "margin-left": Math.floor((n - d) / 2),
                "margin-top": 0
            })
        }, setDimensions: function (e, t) {
            var n = this;
            n.container.width(e).height(t), n.layers.children(".mejs-layer").width(e).height(t)
        }, setControlsSize: function () {
            var t = this, n = 0, i = 0, o = t.controls.find(".mejs-time-rail"), s = t.controls.find(".mejs-time-total"),
                r = o.siblings(), a = r.last(), l = null, u = t.options && !t.options.autosizeProgress;
            if (t.container.is(":visible") && o.length && o.is(":visible")) {
                u && (i = parseInt(o.css("width"), 10)), 0 !== i && i || (r.each(function () {
                    var t = e(this);
                    "absolute" != t.css("position") && t.is(":visible") && (n += e(this).outerWidth(!0))
                }), i = t.controls.width() - n - (o.outerWidth(!0) - o.width()));
                do {
                    u || o.width(i), s.width(i - (s.outerWidth(!0) - s.width())), "absolute" != a.css("position") && (l = a.length ? a.position() : null, i--)
                } while (null !== l && l.top.toFixed(2) > 0 && i > 0);
                t.container.trigger("controlsresize")
            }
        }, buildposter: function (t, n, i, o) {
            var s = this, r = e('<div class="mejs-poster mejs-layer"></div>').appendTo(i), a = t.$media.attr("poster");
            "" !== t.options.poster && (a = t.options.poster), a ? s.setPoster(a) : r.hide(), o.addEventListener("play", function () {
                r.hide()
            }, !1), t.options.showPosterWhenEnded && t.options.autoRewind && o.addEventListener("ended", function () {
                r.show()
            }, !1)
        }, setPoster: function (t) {
            var n = this.container.find(".mejs-poster"), i = n.find("img");
            0 === i.length && (i = e('<img width="100%" height="100%" alt="" />').appendTo(n)), i.attr("src", t), n.css({"background-image": "url(" + t + ")"})
        }, buildoverlays: function (t, n, i, o) {
            var s = this;
            if (t.isVideo) {
                var r = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(i),
                    a = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(i),
                    l = e('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button" role="button" aria-label="' + mejs.i18n.t("mejs.play") + '" aria-pressed="false"></div></div>').appendTo(i).bind("click", function () {
                        if (s.options.clickToPlayPause) {
                            o.paused && o.play();
                            var t = e(this).find(".mejs-overlay-button"), n = t.attr("aria-pressed");
                            t.attr("aria-pressed", !!n)
                        }
                    });
                o.addEventListener("play", function () {
                    l.hide(), r.hide(), n.find(".mejs-time-buffering").hide(), a.hide()
                }, !1), o.addEventListener("playing", function () {
                    l.hide(), r.hide(), n.find(".mejs-time-buffering").hide(), a.hide()
                }, !1), o.addEventListener("seeking", function () {
                    r.show(), n.find(".mejs-time-buffering").show()
                }, !1), o.addEventListener("seeked", function () {
                    r.hide(), n.find(".mejs-time-buffering").hide()
                }, !1), o.addEventListener("pause", function () {
                    mejs.MediaFeatures.isiPhone || l.show()
                }, !1), o.addEventListener("waiting", function () {
                    r.show(), n.find(".mejs-time-buffering").show()
                }, !1), o.addEventListener("loadeddata", function () {
                    r.show(), n.find(".mejs-time-buffering").show(), mejs.MediaFeatures.isAndroid && (o.canplayTimeout = window.setTimeout(function () {
                        if (document.createEvent) {
                            var e = document.createEvent("HTMLEvents");
                            return e.initEvent("canplay", !0, !0), o.dispatchEvent(e)
                        }
                    }, 300))
                }, !1), o.addEventListener("canplay", function () {
                    r.hide(), n.find(".mejs-time-buffering").hide(), clearTimeout(o.canplayTimeout)
                }, !1), o.addEventListener("error", function (e) {
                    s.handleError(e), r.hide(), l.hide(), a.show(), a.find(".mejs-overlay-error").html("Error loading this resource")
                }, !1), o.addEventListener("keydown", function (e) {
                    s.onkeydown(t, o, e)
                }, !1)
            }
        }, buildkeyboard: function (t, n, i, o) {
            var s = this;
            s.container.keydown(function () {
                s.keyboardAction = !0
            }), s.globalBind("keydown", function (n) {
                return t.hasFocus = 0 !== e(n.target).closest(".mejs-container").length && e(n.target).closest(".mejs-container").attr("id") === t.$media.closest(".mejs-container").attr("id"), s.onkeydown(t, o, n)
            }), s.globalBind("click", function (n) {
                t.hasFocus = 0 !== e(n.target).closest(".mejs-container").length
            })
        }, onkeydown: function (e, t, n) {
            if (e.hasFocus && e.options.enableKeyboard)for (var i = 0,
                                                                o = e.options.keyActions.length; o > i; i++)for (var s = e.options.keyActions[i],
                                                                                                                     r = 0,
                                                                                                                     a = s.keys.length; a > r; r++)if (n.keyCode == s.keys[r])return "function" == typeof n.preventDefault && n.preventDefault(), s.action(e, t, n.keyCode, n), !1;
            return !0
        }, findTracks: function () {
            var t = this, n = t.$media.find("track");
            t.tracks = [], n.each(function (n, i) {
                i = e(i), t.tracks.push({
                    srclang: i.attr("srclang") ? i.attr("srclang").toLowerCase() : "",
                    src: i.attr("src"),
                    kind: i.attr("kind"),
                    label: i.attr("label") || "",
                    entries: [],
                    isLoaded: !1
                })
            })
        }, changeSkin: function (e) {
            this.container[0].className = "mejs-container " + e, this.setPlayerSize(this.width, this.height), this.setControlsSize()
        }, play: function () {
            this.load(), this.media.play()
        }, pause: function () {
            try {
                this.media.pause()
            } catch (e) {
            }
        }, load: function () {
            this.isLoaded || this.media.load(), this.isLoaded = !0
        }, setMuted: function (e) {
            this.media.setMuted(e)
        }, setCurrentTime: function (e) {
            this.media.setCurrentTime(e)
        }, getCurrentTime: function () {
            return this.media.currentTime
        }, setVolume: function (e) {
            this.media.setVolume(e)
        }, getVolume: function () {
            return this.media.volume
        }, setSrc: function (e) {
            var t = this;
            if ("youtube" === t.media.pluginType) {
                var n;
                if ("string" != typeof e) {
                    var i, o;
                    for (i = 0; i < e.length; i++)if (o = e[i], this.canPlayType(o.type)) {
                        e = o.src;
                        break
                    }
                }
                if (-1 !== e.lastIndexOf("youtu.be")) -1 !== (n = e.substr(e.lastIndexOf("/") + 1)).indexOf("?") && (n = n.substr(0, n.indexOf("?"))); else {
                    var s = e.match(/[?&]v=([^&#]+)|&|#|$/);
                    s && (n = s[1])
                }
                null !== t.media.getAttribute("autoplay") ? t.media.pluginApi.loadVideoById(n) : t.media.pluginApi.cueVideoById(n)
            } else t.media.setSrc(e)
        }, remove: function () {
            var e, t, n = this;
            n.container.prev(".mejs-offscreen").remove();
            for (e in n.options.features)if (t = n.options.features[e], n["clean" + t])try {
                n["clean" + t](n)
            } catch (e) {
            }
            n.isDynamic ? n.$node.insertBefore(n.container) : (n.$media.prop("controls", !0), n.$node.clone().insertBefore(n.container).show(), n.$node.remove()), "native" !== n.media.pluginType && n.media.remove(), delete mejs.players[n.id], "object" == typeof n.container && n.container.remove(), n.globalUnbind(), delete n.node.player
        }, rebuildtracks: function () {
            var e = this;
            e.findTracks(), e.buildtracks(e, e.controls, e.layers, e.media)
        }, resetSize: function () {
            var e = this;
            setTimeout(function () {
                e.setPlayerSize(e.width, e.height), e.setControlsSize()
            }, 50)
        }
    }, function () {
        function t(t, i) {
            var o = {d: [], w: []};
            return e.each((t || "").split(" "), function (e, t) {
                var s = t + "." + i;
                0 === s.indexOf(".") ? (o.d.push(s), o.w.push(s)) : o[n.test(t) ? "w" : "d"].push(s)
            }), o.d = o.d.join(" "), o.w = o.w.join(" "), o
        }

        var n = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
        mejs.MediaElementPlayer.prototype.globalBind = function (n, i, o) {
            var s = this, r = s.node ? s.node.ownerDocument : document;
            (n = t(n, s.id)).d && e(r).bind(n.d, i, o), n.w && e(window).bind(n.w, i, o)
        }, mejs.MediaElementPlayer.prototype.globalUnbind = function (n, i) {
            var o = this, s = o.node ? o.node.ownerDocument : document;
            (n = t(n, o.id)).d && e(s).unbind(n.d, i), n.w && e(window).unbind(n.w, i)
        }
    }(), void 0 !== e && (e.fn.mediaelementplayer = function (t) {
        return !1 === t ? this.each(function () {
            var t = e(this).data("mediaelementplayer");
            t && t.remove(), e(this).removeData("mediaelementplayer")
        }) : this.each(function () {
            e(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, t))
        }), this
    }, e(document).ready(function () {
        e(".mejs-player").mediaelementplayer()
    })), window.MediaElementPlayer = mejs.MediaElementPlayer
}(mejs.$), function (e) {
    e.extend(mejs.MepDefaults, {
        playText: "",
        pauseText: ""
    }), e.extend(MediaElementPlayer.prototype, {
        buildplaypause: function (t, n, i, o) {
            function s(e) {
                "play" === e ? (c.removeClass("mejs-play").addClass("mejs-pause"), d.attr({
                    title: u,
                    "aria-label": u
                })) : (c.removeClass("mejs-pause").addClass("mejs-play"), d.attr({title: l, "aria-label": l}))
            }

            var r = this, a = r.options, l = a.playText ? a.playText : mejs.i18n.t("mejs.play"),
                u = a.pauseText ? a.pauseText : mejs.i18n.t("mejs.pause"),
                c = e('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + r.id + '" title="' + l + '" aria-label="' + u + '"></button></div>').appendTo(n).click(function (e) {
                    return e.preventDefault(), o.paused ? o.play() : o.pause(), !1
                }), d = c.find("button");
            s("pse"), o.addEventListener("play", function () {
                s("play")
            }, !1), o.addEventListener("playing", function () {
                s("play")
            }, !1), o.addEventListener("pause", function () {
                s("pse")
            }, !1), o.addEventListener("paused", function () {
                s("pse")
            }, !1)
        }
    })
}(mejs.$), function (e) {
    e.extend(mejs.MepDefaults, {stopText: "Stop"}), e.extend(MediaElementPlayer.prototype, {
        buildstop: function (t, n, i, o) {
            var s = this;
            e('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + s.id + '" title="' + s.options.stopText + '" aria-label="' + s.options.stopText + '"></button></div>').appendTo(n).click(function () {
                o.paused || o.pause(), o.currentTime > 0 && (o.setCurrentTime(0), o.pause(), n.find(".mejs-time-current").width("0px"), n.find(".mejs-time-handle").css("left", "0px"), n.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0, t.options)), n.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0, t.options)), i.find(".mejs-poster").show())
            })
        }
    })
}(mejs.$), function (e) {
    e.extend(mejs.MepDefaults, {
        enableProgressTooltip: !0,
        progressHelpText: ""
    }), e.extend(MediaElementPlayer.prototype, {
        buildprogress: function (t, n, i, o) {
            var s = this, r = !1, a = !1, l = 0, u = !1, c = t.options.autoRewind,
                d = (s.options.progressHelpText ? s.options.progressHelpText : mejs.i18n.t("mejs.time-help-text"), t.options.enableProgressTooltip ? '<span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span>' : "");
            e('<div class="mejs-time-rail"><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span>' + d + "</span></div>").appendTo(n), n.find(".mejs-time-buffering").hide(), s.total = n.find(".mejs-time-total"), s.loaded = n.find(".mejs-time-loaded"), s.current = n.find(".mejs-time-current"), s.handle = n.find(".mejs-time-handle"), s.timefloat = n.find(".mejs-time-float"), s.timefloatcurrent = n.find(".mejs-time-float-current"), s.slider = n.find(".mejs-time-slider");
            var p = function (e) {
                var n, i = s.total.offset(), a = s.total.width(), l = 0, u = 0, c = 0;
                n = e.originalEvent && e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].pageX : e.changedTouches ? e.changedTouches[0].pageX : e.pageX, o.duration && (n < i.left ? n = i.left : n > a + i.left && (n = a + i.left), c = n - i.left, l = c / a, u = .02 >= l ? 0 : l * o.duration, r && u !== o.currentTime && o.setCurrentTime(u), mejs.MediaFeatures.hasTouch || (s.timefloat.css("left", c), s.timefloatcurrent.html(mejs.Utility.secondsToTimeCode(u, t.options)), s.timefloat.show()))
            }, h = function (e) {
                var n = o.currentTime, i = mejs.i18n.t("mejs.time-slider"),
                    r = mejs.Utility.secondsToTimeCode(n, t.options), a = o.duration;
                s.slider.attr({
                    "aria-label": i,
                    "aria-valuemin": 0,
                    "aria-valuemax": a,
                    "aria-valuenow": n,
                    "aria-valuetext": r,
                    role: "slider",
                    tabindex: 0
                })
            }, f = function () {
                new Date - l >= 1e3 && o.play()
            };
            s.slider.bind("focus", function (e) {
                t.options.autoRewind = !1
            }), s.slider.bind("blur", function (e) {
                t.options.autoRewind = c
            }), s.slider.bind("keydown", function (e) {
                new Date - l >= 1e3 && (u = o.paused);
                var n = e.keyCode, i = o.duration, s = o.currentTime, r = t.options.defaultSeekForwardInterval(o),
                    a = t.options.defaultSeekBackwardInterval(o);
                switch (n) {
                    case 37:
                    case 40:
                        s -= a;
                        break;
                    case 39:
                    case 38:
                        s += r;
                        break;
                    case 36:
                        s = 0;
                        break;
                    case 35:
                        s = i;
                        break;
                    case 32:
                    case 13:
                        return void(o.paused ? o.play() : o.pause());
                    default:
                        return
                }
                return s = 0 > s ? 0 : s >= i ? i : Math.floor(s), l = new Date, u || o.pause(), s < o.duration && !u && setTimeout(f, 1100), o.setCurrentTime(s), e.preventDefault(), e.stopPropagation(), !1
            }), s.total.bind("mousedown touchstart", function (e) {
                (1 === e.which || 0 === e.which) && (r = !0, p(e), s.globalBind("mousemove.dur touchmove.dur", function (e) {
                    p(e)
                }), s.globalBind("mouseup.dur touchend.dur", function (e) {
                    r = !1, void 0 !== s.timefloat && s.timefloat.hide(), s.globalUnbind(".dur")
                }))
            }).bind("mouseenter", function (e) {
                a = !0, s.globalBind("mousemove.dur", function (e) {
                    p(e)
                }), void 0 === s.timefloat || mejs.MediaFeatures.hasTouch || s.timefloat.show()
            }).bind("mouseleave", function (e) {
                a = !1, r || (s.globalUnbind(".dur"), void 0 !== s.timefloat && s.timefloat.hide())
            }), o.addEventListener("progress", function (e) {
                t.setProgressRail(e), t.setCurrentRail(e)
            }, !1), o.addEventListener("timeupdate", function (e) {
                t.setProgressRail(e), t.setCurrentRail(e), h()
            }, !1), s.container.on("controlsresize", function (e) {
                t.setProgressRail(e), t.setCurrentRail(e)
            })
        }, setProgressRail: function (e) {
            var t = this, n = void 0 !== e ? e.target : t.media, i = null;
            n && n.buffered && n.buffered.length > 0 && n.buffered.end && n.duration ? i = n.buffered.end(n.buffered.length - 1) / n.duration : n && void 0 !== n.bytesTotal && n.bytesTotal > 0 && void 0 !== n.bufferedBytes ? i = n.bufferedBytes / n.bytesTotal : e && e.lengthComputable && 0 !== e.total && (i = e.loaded / e.total), null !== i && (i = Math.min(1, Math.max(0, i)), t.loaded && t.total && t.loaded.width(t.total.width() * i))
        }, setCurrentRail: function () {
            var e = this;
            if (void 0 !== e.media.currentTime && e.media.duration && e.total && e.handle) {
                var t = Math.round(e.total.width() * e.media.currentTime / e.media.duration),
                    n = t - Math.round(e.handle.outerWidth(!0) / 2);
                e.current.width(t), e.handle.css("left", n)
            }
        }
    })
}(mejs.$), function (e) {
    e.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: "<span> | </span>"
    }), e.extend(MediaElementPlayer.prototype, {
        buildcurrent: function (t, n, i, o) {
            var s = this;
            e('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">' + mejs.Utility.secondsToTimeCode(0, t.options) + "</span></div>").appendTo(n), s.currenttime = s.controls.find(".mejs-currenttime"), o.addEventListener("timeupdate", function () {
                s.controlsAreVisible && t.updateCurrent()
            }, !1)
        }, buildduration: function (t, n, i, o) {
            var s = this;
            n.children().last().find(".mejs-currenttime").length > 0 ? e(s.options.timeAndDurationSeparator + '<span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(s.options.duration, s.options) + "</span>").appendTo(n.find(".mejs-time")) : (n.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), e('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(s.options.duration, s.options) + "</span></div>").appendTo(n)), s.durationD = s.controls.find(".mejs-duration"), o.addEventListener("timeupdate", function () {
                s.controlsAreVisible && t.updateDuration()
            }, !1)
        }, updateCurrent: function () {
            var e = this, t = e.media.currentTime;
            isNaN(t) && (t = 0), e.currenttime && e.currenttime.html(mejs.Utility.secondsToTimeCode(t, e.options))
        }, updateDuration: function () {
            var e = this, t = e.media.duration;
            e.options.duration > 0 && (t = e.options.duration), isNaN(t) && (t = 0), e.container.toggleClass("mejs-long-video", t > 3600), e.durationD && t > 0 && e.durationD.html(mejs.Utility.secondsToTimeCode(t, e.options))
        }
    })
}(mejs.$), function (e) {
    e.extend(mejs.MepDefaults, {
        muteText: mejs.i18n.t("mejs.mute-toggle"),
        allyVolumeControlText: mejs.i18n.t("mejs.volume-help-text"),
        hideVolumeOnTouchDevices: !0,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    }), e.extend(MediaElementPlayer.prototype, {
        buildvolume: function (t, n, i, o) {
            if (!mejs.MediaFeatures.isAndroid && !mejs.MediaFeatures.isiOS || !this.options.hideVolumeOnTouchDevices) {
                var s = this, r = s.isVideo ? s.options.videoVolume : s.options.audioVolume,
                    a = "horizontal" == r ? e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + s.id + '" title="' + s.options.muteText + '" aria-label="' + s.options.muteText + '"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">' + s.options.allyVolumeControlText + '</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(n) : e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + s.id + '" title="' + s.options.muteText + '" aria-label="' + s.options.muteText + '"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">' + s.options.allyVolumeControlText + '</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(n),
                    l = s.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                    u = s.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                    c = s.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                    d = s.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"), p = function (e, t) {
                        if (!l.is(":visible") && void 0 === t)return l.show(), p(e, !0), void l.hide();
                        e = Math.max(0, e), 0 === (e = Math.min(e, 1)) ? (a.removeClass("mejs-mute").addClass("mejs-unmute"), a.children("button").attr("title", mejs.i18n.t("mejs.unmute")).attr("aria-label", mejs.i18n.t("mejs.unmute"))) : (a.removeClass("mejs-unmute").addClass("mejs-mute"), a.children("button").attr("title", mejs.i18n.t("mejs.mute")).attr("aria-label", mejs.i18n.t("mejs.mute")));
                        var n = u.position();
                        if ("vertical" == r) {
                            var i = u.height(), o = i - i * e;
                            d.css("top", Math.round(n.top + o - d.height() / 2)), c.height(i - o), c.css("top", n.top + o)
                        } else {
                            var s = u.width() * e;
                            d.css("left", Math.round(n.left + s - d.width() / 2)), c.width(Math.round(s))
                        }
                    }, h = function (e) {
                        var t = null, n = u.offset();
                        if ("vertical" === r) {
                            var i = u.height();
                            if (t = (i - (e.pageY - n.top)) / i, 0 === n.top || 0 === n.left)return
                        } else {
                            var s = u.width();
                            t = (e.pageX - n.left) / s
                        }
                        t = Math.max(0, t), t = Math.min(t, 1), p(t), 0 === t ? o.setMuted(!0) : o.setMuted(!1), o.setVolume(t)
                    }, f = !1, m = !1;
                a.hover(function () {
                    l.show(), m = !0
                }, function () {
                    m = !1, f || "vertical" != r || l.hide()
                });
                var g = function (e) {
                    var t = Math.floor(100 * o.volume);
                    l.attr({
                        "aria-label": mejs.i18n.t("mejs.volume-slider"),
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": t,
                        "aria-valuetext": t + "%",
                        role: "slider",
                        tabindex: 0
                    })
                };
                l.bind("mouseover", function () {
                    m = !0
                }).bind("mousedown", function (e) {
                    return h(e), s.globalBind("mousemove.vol", function (e) {
                        h(e)
                    }), s.globalBind("mouseup.vol", function () {
                        f = !1, s.globalUnbind(".vol"), m || "vertical" != r || l.hide()
                    }), f = !0, !1
                }).bind("keydown", function (e) {
                    var t = e.keyCode, n = o.volume;
                    switch (t) {
                        case 38:
                            n = Math.min(n + .1, 1);
                            break;
                        case 40:
                            n = Math.max(0, n - .1);
                            break;
                        default:
                            return !0
                    }
                    return f = !1, p(n), o.setVolume(n), !1
                }), a.find("button").click(function () {
                    o.setMuted(!o.muted)
                }), a.find("button").bind("focus", function () {
                    l.show()
                }), o.addEventListener("volumechange", function (e) {
                    f || (o.muted ? (p(0), a.removeClass("mejs-mute").addClass("mejs-unmute")) : (p(o.volume), a.removeClass("mejs-unmute").addClass("mejs-mute"))), g()
                }, !1), 0 === t.options.startVolume && o.setMuted(!0), "native" === o.pluginType && o.setVolume(t.options.startVolume), s.container.on("controlsresize", function () {
                    o.muted ? (p(0), a.removeClass("mejs-mute").addClass("mejs-unmute")) : (p(o.volume), a.removeClass("mejs-unmute").addClass("mejs-mute"))
                })
            }
        }
    })
}(mejs.$), function (e) {
    e.extend(mejs.MepDefaults, {
        usePluginFullScreen: !0, newWindowCallback: function () {
            return ""
        }, fullscreenText: ""
    }), e.extend(MediaElementPlayer.prototype, {
        isFullScreen: !1,
        isNativeFullScreen: !1,
        isInIframe: !1,
        fullscreenMode: "",
        buildfullscreen: function (t, n, i, o) {
            if (t.isVideo) {
                t.isInIframe = window.location != window.parent.location, o.addEventListener("loadstart", function () {
                    t.detectFullscreenMode()
                });
                var s = this, r = null,
                    a = s.options.fullscreenText ? s.options.fullscreenText : mejs.i18n.t("mejs.fullscreen"),
                    l = e('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + s.id + '" title="' + a + '" aria-label="' + a + '"></button></div>').appendTo(n).on("click", function () {
                        mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || t.isFullScreen ? t.exitFullScreen() : t.enterFullScreen()
                    }).on("mouseover", function () {
                        if ("plugin-hover" == s.fullscreenMode) {
                            null !== r && (clearTimeout(r), delete r);
                            var e = l.offset(), n = t.container.offset();
                            o.positionFullscreenButton(e.left - n.left, e.top - n.top, !0)
                        }
                    }).on("mouseout", function () {
                        "plugin-hover" == s.fullscreenMode && (null !== r && (clearTimeout(r), delete r), r = setTimeout(function () {
                            o.hideFullscreenButton()
                        }, 1500))
                    });
                if (t.fullscreenBtn = l, s.globalBind("keydown", function (e) {
                        27 == e.keyCode && (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || s.isFullScreen) && t.exitFullScreen()
                    }), s.normalHeight = 0, s.normalWidth = 0, mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    t.globalBind(mejs.MediaFeatures.fullScreenEventName, function (e) {
                        t.isFullScreen && (mejs.MediaFeatures.isFullScreen() ? (t.isNativeFullScreen = !0, t.setControlsSize()) : (t.isNativeFullScreen = !1, t.exitFullScreen()))
                    })
                }
            }
        },
        detectFullscreenMode: function () {
            var e = this, t = "", n = mejs.MediaFeatures;
            return n.hasTrueNativeFullScreen && "native" === e.media.pluginType ? t = "native-native" : n.hasTrueNativeFullScreen && "native" !== e.media.pluginType && !n.hasFirefoxPluginMovingProblem ? t = "plugin-native" : e.usePluginFullScreen ? mejs.MediaFeatures.supportsPointerEvents ? (t = "plugin-click", e.createPluginClickThrough()) : t = "plugin-hover" : t = "fullwindow", e.fullscreenMode = t, t
        },
        isPluginClickThroughCreated: !1,
        createPluginClickThrough: function () {
            var t = this;
            if (!t.isPluginClickThroughCreated) {
                var n, i, o = !1, s = function () {
                    if (o) {
                        for (var e in r)r[e].hide();
                        t.fullscreenBtn.css("pointer-events", ""), t.controls.css("pointer-events", ""), t.media.removeEventListener("click", t.clickToPlayPauseCallback), o = !1
                    }
                }, r = {}, a = ["top", "left", "right", "bottom"], l = function () {
                    var e = fullscreenBtn.offset().left - t.container.offset().left,
                        i = fullscreenBtn.offset().top - t.container.offset().top, o = fullscreenBtn.outerWidth(!0),
                        s = fullscreenBtn.outerHeight(!0), a = t.container.width(), l = t.container.height();
                    for (n in r)r[n].css({position: "absolute", top: 0, left: 0});
                    r.top.width(a).height(i), r.left.width(e).height(s).css({top: i}), r.right.width(a - e - o).height(s).css({
                        top: i,
                        left: e + o
                    }), r.bottom.width(a).height(l - s - i).css({top: i + s})
                };
                for (t.globalBind("resize", function () {
                    l()
                }), n = 0, i = a.length; i > n; n++)r[a[n]] = e('<div class="mejs-fullscreen-hover" />').appendTo(t.container).mouseover(s).hide();
                fullscreenBtn.on("mouseover", function () {
                    if (!t.isFullScreen) {
                        var e = fullscreenBtn.offset(), i = player.container.offset();
                        media.positionFullscreenButton(e.left - i.left, e.top - i.top, !1), t.fullscreenBtn.css("pointer-events", "none"), t.controls.css("pointer-events", "none"), t.media.addEventListener("click", t.clickToPlayPauseCallback);
                        for (n in r)r[n].show();
                        l(), o = !0
                    }
                }), media.addEventListener("fullscreenchange", function (e) {
                    t.isFullScreen = !t.isFullScreen, t.isFullScreen ? t.media.removeEventListener("click", t.clickToPlayPauseCallback) : t.media.addEventListener("click", t.clickToPlayPauseCallback), s()
                }), t.globalBind("mousemove", function (e) {
                    if (o) {
                        var n = fullscreenBtn.offset();
                        (e.pageY < n.top || e.pageY > n.top + fullscreenBtn.outerHeight(!0) || e.pageX < n.left || e.pageX > n.left + fullscreenBtn.outerWidth(!0)) && (fullscreenBtn.css("pointer-events", ""), t.controls.css("pointer-events", ""), o = !1)
                    }
                }), t.isPluginClickThroughCreated = !0
            }
        },
        cleanfullscreen: function (e) {
            e.exitFullScreen()
        },
        containerSizeTimeout: null,
        enterFullScreen: function () {
            var t = this;
            if (mejs.MediaFeatures.isiOS && mejs.MediaFeatures.hasiOSFullScreen && "function" == typeof t.media.webkitEnterFullscreen) t.media.webkitEnterFullscreen(); else {
                e(document.documentElement).addClass("mejs-fullscreen"), t.normalHeight = t.container.height(), t.normalWidth = t.container.width(), "native-native" === t.fullscreenMode || "plugin-native" === t.fullscreenMode ? (mejs.MediaFeatures.requestFullScreen(t.container[0]), t.isInIframe && setTimeout(function n() {
                    if (t.isNativeFullScreen) {
                        var i = e(window).width(), o = screen.width;
                        Math.abs(o - i) > .002 * o ? t.exitFullScreen() : setTimeout(n, 500)
                    }
                }, 1e3)) : t.fullscreeMode, t.container.addClass("mejs-container-fullscreen").width("100%").height("100%"), t.containerSizeTimeout = setTimeout(function () {
                    t.container.css({width: "100%", height: "100%"}), t.setControlsSize()
                }, 500), "native" === t.media.pluginType ? t.$media.width("100%").height("100%") : (t.container.find(".mejs-shim").width("100%").height("100%"), setTimeout(function () {
                    var n = e(window), i = n.width(), o = n.height();
                    t.media.setVideoSize(i, o)
                }, 500)), t.layers.children("div").width("100%").height("100%"), t.fullscreenBtn && t.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), t.setControlsSize(), t.isFullScreen = !0;
                var n = Math.min(screen.width / t.width, screen.height / t.height);
                t.container.find(".mejs-captions-text").css("font-size", 100 * n + "%"), t.container.find(".mejs-captions-text").css("line-height", "normal"), t.container.find(".mejs-captions-position").css("bottom", "45px"), t.container.trigger("enteredfullscreen")
            }
        },
        exitFullScreen: function () {
            var t = this;
            clearTimeout(t.containerSizeTimeout), mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || t.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(), e(document.documentElement).removeClass("mejs-fullscreen"), t.container.removeClass("mejs-container-fullscreen").width(t.normalWidth).height(t.normalHeight), "native" === t.media.pluginType ? t.$media.width(t.normalWidth).height(t.normalHeight) : (t.container.find(".mejs-shim").width(t.normalWidth).height(t.normalHeight), t.media.setVideoSize(t.normalWidth, t.normalHeight)), t.layers.children("div").width(t.normalWidth).height(t.normalHeight), t.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), t.setControlsSize(), t.isFullScreen = !1, t.container.find(".mejs-captions-text").css("font-size", ""), t.container.find(".mejs-captions-text").css("line-height", ""), t.container.find(".mejs-captions-position").css("bottom", ""), t.container.trigger("exitedfullscreen")
        }
    })
}(mejs.$), function (e) {
    e.extend(mejs.MepDefaults, {
        speeds: ["2.00", "1.50", "1.25", "1.00", "0.75"],
        defaultSpeed: "1.00",
        speedChar: "x"
    }), e.extend(MediaElementPlayer.prototype, {
        buildspeed: function (t, n, i, o) {
            var s = this;
            if ("native" == s.media.pluginType) {
                for (var r = null, a = null, l = null, u = null, c = [], d = !1, p = 0,
                         h = s.options.speeds.length; h > p; p++) {
                    var f = s.options.speeds[p];
                    "string" == typeof f ? (c.push({
                        name: f + s.options.speedChar,
                        value: f
                    }), f === s.options.defaultSpeed && (d = !0)) : (c.push(f), f.value === s.options.defaultSpeed && (d = !0))
                }
                d || c.push({
                    name: s.options.defaultSpeed + s.options.speedChar,
                    value: s.options.defaultSpeed
                }), c.sort(function (e, t) {
                    return parseFloat(t.value) - parseFloat(e.value)
                });
                var m = function (e) {
                        for (p = 0, h = c.length; h > p; p++)if (c[p].value === e)return c[p].name
                    },
                    g = '<div class="mejs-button mejs-speed-button"><button type="button">' + m(s.options.defaultSpeed) + '</button><div class="mejs-speed-selector"><ul>';
                for (p = 0, il = c.length; p < il; p++)u = s.id + "-speed-" + c[p].value, g += '<li><input type="radio" name="speed" value="' + c[p].value + '" id="' + u + '" ' + (c[p].value === s.options.defaultSpeed ? " checked" : "") + ' /><label for="' + u + '" ' + (c[p].value === s.options.defaultSpeed ? ' class="mejs-speed-selected"' : "") + ">" + c[p].name + "</label></li>";
                r = e(g += "</ul></div></div>").appendTo(n), a = r.find(".mejs-speed-selector"), l = s.options.defaultSpeed, o.addEventListener("loadedmetadata", function (e) {
                    l && (o.playbackRate = parseFloat(l))
                }, !0), a.on("click", 'input[type="radio"]', function () {
                    var t = e(this).attr("value");
                    l = t, o.playbackRate = parseFloat(t), r.find("button").html(m(t)), r.find(".mejs-speed-selected").removeClass("mejs-speed-selected"), r.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected")
                }), r.one("mouseenter focusin", function () {
                    a.height(r.find(".mejs-speed-selector ul").outerHeight(!0) + r.find(".mejs-speed-translations").outerHeight(!0)).css("top", -1 * a.height() + "px")
                })
            }
        }
    })
}(mejs.$), function (e) {
    e.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: "",
        tracksAriaLive: !1,
        hideCaptionsButtonWhenEmpty: !0,
        toggleCaptionsButtonWhenOnlyOne: !1,
        slidesSelector: ""
    }), e.extend(MediaElementPlayer.prototype, {
        hasChapters: !1, cleartracks: function (e, t, n, i) {
            e && (e.captions && e.captions.remove(), e.chapters && e.chapters.remove(), e.captionsText && e.captionsText.remove(), e.captionsButton && e.captionsButton.remove())
        }, buildtracks: function (t, n, i, o) {
            if (0 !== t.tracks.length) {
                var s, r, a = this,
                    l = a.options.tracksAriaLive ? 'role="log" aria-live="assertive" aria-atomic="false"' : "",
                    u = a.options.tracksText ? a.options.tracksText : mejs.i18n.t("mejs.captions-subtitles");
                if (a.domNode.textTracks)for (s = a.domNode.textTracks.length - 1; s >= 0; s--)a.domNode.textTracks[s].mode = "hidden";
                a.cleartracks(t, n, i, o), t.chapters = e('<div class="mejs-chapters mejs-layer"></div>').prependTo(i).hide(), t.captions = e('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" ' + l + '><span class="mejs-captions-text"></span></div></div>').prependTo(i).hide(), t.captionsText = t.captions.find(".mejs-captions-text"), t.captionsButton = e('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + a.id + '" title="' + u + '" aria-label="' + u + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_none" value="none" checked="checked" /><label for="' + t.id + '_captions_none">' + mejs.i18n.t("mejs.none") + "</label></li></ul></div></div>").appendTo(n);
                var c = 0;
                for (s = 0; s < t.tracks.length; s++)("subtitles" === (r = t.tracks[s].kind) || "captions" === r) && c++;
                for (a.options.toggleCaptionsButtonWhenOnlyOne && 1 == c ? t.captionsButton.on("click", function () {
                    null === t.selectedTrack ? lang = t.tracks[0].srclang : lang = "none", t.setTrack(lang)
                }) : (t.captionsButton.on("mouseenter focusin", function () {
                    e(this).find(".mejs-captions-selector").removeClass("mejs-offscreen")
                }).on("click", "input[type=radio]", function () {
                    lang = this.value, t.setTrack(lang)
                }), t.captionsButton.on("mouseleave focusout", function () {
                    e(this).find(".mejs-captions-selector").addClass("mejs-offscreen")
                })), t.options.alwaysShowControls ? t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : t.container.bind("controlsshown", function () {
                    t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                }).bind("controlshidden", function () {
                    o.paused || t.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                }), t.trackToLoad = -1, t.selectedTrack = null, t.isLoadingTrack = !1, s = 0; s < t.tracks.length; s++)("subtitles" === (r = t.tracks[s].kind) || "captions" === r) && t.addTrackButton(t.tracks[s].srclang, t.tracks[s].label);
                t.loadNextTrack(), o.addEventListener("timeupdate", function () {
                    t.displayCaptions()
                }, !1), "" !== t.options.slidesSelector && (t.slidesContainer = e(t.options.slidesSelector), o.addEventListener("timeupdate", function () {
                    t.displaySlides()
                }, !1)), o.addEventListener("loadedmetadata", function () {
                    t.displayChapters()
                }, !1), t.container.hover(function () {
                    t.hasChapters && (t.chapters.removeClass("mejs-offscreen"), t.chapters.fadeIn(200).height(t.chapters.find(".mejs-chapter").outerHeight()))
                }, function () {
                    t.hasChapters && !o.paused && t.chapters.fadeOut(200, function () {
                        e(this).addClass("mejs-offscreen"), e(this).css("display", "block")
                    })
                }), a.container.on("controlsresize", function () {
                    a.adjustLanguageBox()
                }), null !== t.node.getAttribute("autoplay") && t.chapters.addClass("mejs-offscreen")
            }
        }, setTrack: function (e) {
            var t, n = this;
            if ("none" == e) n.selectedTrack = null, n.captionsButton.removeClass("mejs-captions-enabled"); else for (t = 0; t < n.tracks.length; t++)if (n.tracks[t].srclang == e) {
                null === n.selectedTrack && n.captionsButton.addClass("mejs-captions-enabled"), n.selectedTrack = n.tracks[t], n.captions.attr("lang", n.selectedTrack.srclang), n.displayCaptions();
                break
            }
        }, loadNextTrack: function () {
            var e = this;
            ++e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0, e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1, e.checkForTracks())
        }, loadTrack: function (t) {
            var n = this, i = n.tracks[t], o = function () {
                i.isLoaded = !0, n.enableTrackButton(i.srclang, i.label), n.loadNextTrack()
            };
            (void 0 !== i.src || "" !== i.src) && e.ajax({
                url: i.src, dataType: "text", success: function (e) {
                    "string" == typeof e && /<tt\s+xml/gi.exec(e) ? i.entries = mejs.TrackFormatParser.dfxp.parse(e) : i.entries = mejs.TrackFormatParser.webvtt.parse(e), o(), "chapters" == i.kind && n.media.addEventListener("play", function () {
                        n.media.duration > 0 && n.displayChapters(i)
                    }, !1), "slides" == i.kind && n.setupSlides(i)
                }, error: function () {
                    n.removeTrackButton(i.srclang), n.loadNextTrack()
                }
            })
        }, enableTrackButton: function (t, n) {
            var i = this;
            "" === n && (n = mejs.language.codes[t] || t), i.captionsButton.find("input[value=" + t + "]").prop("disabled", !1).siblings("label").html(n), i.options.startLanguage == t && e("#" + i.id + "_captions_" + t).prop("checked", !0).trigger("click"), i.adjustLanguageBox()
        }, removeTrackButton: function (e) {
            var t = this;
            t.captionsButton.find("input[value=" + e + "]").closest("li").remove(), t.adjustLanguageBox()
        }, addTrackButton: function (t, n) {
            var i = this;
            "" === n && (n = mejs.language.codes[t] || t), i.captionsButton.find("ul").append(e('<li><input type="radio" name="' + i.id + '_captions" id="' + i.id + "_captions_" + t + '" value="' + t + '" disabled="disabled" /><label for="' + i.id + "_captions_" + t + '">' + n + " (loading)</label></li>")), i.adjustLanguageBox(), i.container.find(".mejs-captions-translations option[value=" + t + "]").remove()
        }, adjustLanguageBox: function () {
            var e = this;
            e.captionsButton.find(".mejs-captions-selector").height(e.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + e.captionsButton.find(".mejs-captions-translations").outerHeight(!0))
        }, checkForTracks: function () {
            var e = this, t = !1;
            if (e.options.hideCaptionsButtonWhenEmpty) {
                for (var n = 0; n < e.tracks.length; n++) {
                    var i = e.tracks[n].kind;
                    if (("subtitles" === i || "captions" === i) && e.tracks[n].isLoaded) {
                        t = !0;
                        break
                    }
                }
                t || (e.captionsButton.hide(), e.setControlsSize())
            }
        }, displayCaptions: function () {
            if (void 0 !== this.tracks) {
                var e, t = this, n = t.selectedTrack;
                if (null !== n && n.isLoaded) {
                    for (e = 0; e < n.entries.times.length; e++)if (t.media.currentTime >= n.entries.times[e].start && t.media.currentTime <= n.entries.times[e].stop)return t.captionsText.html(n.entries.text[e]).attr("class", "mejs-captions-text " + (n.entries.times[e].identifier || "")), void t.captions.show().height(0);
                    t.captions.hide()
                } else t.captions.hide()
            }
        }, setupSlides: function (e) {
            var t = this;
            t.slides = e, t.slides.entries.imgs = [t.slides.entries.text.length], t.showSlide(0)
        }, showSlide: function (t) {
            if (void 0 !== this.tracks && void 0 !== this.slidesContainer) {
                var n = this, i = n.slides.entries.text[t], o = n.slides.entries.imgs[t];
                void 0 === o || void 0 === o.fadeIn ? n.slides.entries.imgs[t] = o = e('<img src="' + i + '">').on("load", function () {
                    o.appendTo(n.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                }) : o.is(":visible") || o.is(":animated") || o.fadeIn().siblings(":visible").fadeOut()
            }
        }, displaySlides: function () {
            if (void 0 !== this.slides) {
                var e, t = this, n = t.slides;
                for (e = 0; e < n.entries.times.length; e++)if (t.media.currentTime >= n.entries.times[e].start && t.media.currentTime <= n.entries.times[e].stop)return void t.showSlide(e)
            }
        }, displayChapters: function () {
            var e, t = this;
            for (e = 0; e < t.tracks.length; e++)if ("chapters" == t.tracks[e].kind && t.tracks[e].isLoaded) {
                t.drawChapters(t.tracks[e]), t.hasChapters = !0;
                break
            }
        }, drawChapters: function (t) {
            var n, i, o = this, s = 0, r = 0;
            for (o.chapters.empty(), n = 0; n < t.entries.times.length; n++)i = t.entries.times[n].stop - t.entries.times[n].start, ((s = Math.floor(i / o.media.duration * 100)) + r > 100 || n == t.entries.times.length - 1 && 100 > s + r) && (s = 100 - r), o.chapters.append(e('<div class="mejs-chapter" rel="' + t.entries.times[n].start + '" style="left: ' + r.toString() + "%;width: " + s.toString() + '%;"><div class="mejs-chapter-block' + (n == t.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + t.entries.text[n] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(t.entries.times[n].start, o.options) + "&ndash;" + mejs.Utility.secondsToTimeCode(t.entries.times[n].stop, o.options) + "</span></div></div>")), r += s;
            o.chapters.find("div.mejs-chapter").click(function () {
                o.media.setCurrentTime(parseFloat(e(this).attr("rel"))), o.media.paused && o.media.play()
            }), o.chapters.show()
        }
    }), mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            fl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    }, mejs.TrackFormatParser = {
        webvtt: {
            pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function (t) {
                for (var n, i, o, s = 0, r = mejs.TrackFormatParser.split2(t, /\r?\n/),
                         a = {text: [], times: []}; s < r.length; s++) {
                    if ((n = this.pattern_timecode.exec(r[s])) && s < r.length) {
                        for (s - 1 >= 0 && "" !== r[s - 1] && (o = r[s - 1]), i = r[++s], s++; "" !== r[s] && s < r.length;)i = i + "\n" + r[s], s++;
                        i = e.trim(i).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), a.text.push(i), a.times.push({
                            identifier: o,
                            start: 0 === mejs.Utility.convertSMPTEtoSeconds(n[1]) ? .2 : mejs.Utility.convertSMPTEtoSeconds(n[1]),
                            stop: mejs.Utility.convertSMPTEtoSeconds(n[3]),
                            settings: n[5]
                        })
                    }
                    o = ""
                }
                return a
            }
        }, dfxp: {
            parse: function (t) {
                var n, i, o = 0, s = (t = e(t).filter("tt")).children("div").eq(0), r = s.find("p"),
                    a = t.find("#" + s.attr("style")), l = {text: [], times: []};
                if (a.length) {
                    var u = a.removeAttr("id").get(0).attributes;
                    if (u.length)for (n = {}, o = 0; o < u.length; o++)n[u[o].name.split(":")[1]] = u[o].value
                }
                for (o = 0; o < r.length; o++) {
                    var c, d = {start: null, stop: null, style: null};
                    if (r.eq(o).attr("begin") && (d.start = mejs.Utility.convertSMPTEtoSeconds(r.eq(o).attr("begin"))), !d.start && r.eq(o - 1).attr("end") && (d.start = mejs.Utility.convertSMPTEtoSeconds(r.eq(o - 1).attr("end"))), r.eq(o).attr("end") && (d.stop = mejs.Utility.convertSMPTEtoSeconds(r.eq(o).attr("end"))), !d.stop && r.eq(o + 1).attr("begin") && (d.stop = mejs.Utility.convertSMPTEtoSeconds(r.eq(o + 1).attr("begin"))), n) {
                        c = "";
                        for (var p in n)c += p + ":" + n[p] + ";"
                    }
                    c && (d.style = c), 0 === d.start && (d.start = .2), l.times.push(d), i = e.trim(r.eq(o).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), l.text.push(i)
                }
                return l
            }
        }, split2: function (e, t) {
            return e.split(t)
        }
    }, 3 != "x\n\ny".split(/\n/gi).length && (mejs.TrackFormatParser.split2 = function (e, t) {
        var n, i = [], o = "";
        for (n = 0; n < e.length; n++)o += e.substring(n, n + 1), t.test(o) && (i.push(o.replace(t, "")), o = "");
        return i.push(o), i
    })
}(mejs.$), function (e) {
    e.extend(mejs.MepDefaults, {sourcechooserText: ""}), e.extend(MediaElementPlayer.prototype, {
        buildsourcechooser: function (t, n, i, o) {
            var s, r = this,
                a = r.options.sourcechooserText ? r.options.sourcechooserText : mejs.i18n.t("mejs.source-chooser");
            t.sourcechooserButton = e('<div class="mejs-button mejs-sourcechooser-button"><button type="button" role="button" aria-haspopup="true" aria-owns="' + r.id + '" title="' + a + '" aria-label="' + a + '"></button><div class="mejs-sourcechooser-selector mejs-offscreen" role="menu" aria-expanded="false" aria-hidden="true"><ul></ul></div></div>').appendTo(n).hover(function () {
                clearTimeout(s), t.showSourcechooserSelector()
            }, function () {
                e(this), s = setTimeout(function () {
                    t.hideSourcechooserSelector()
                }, 500)
            }).on("keydown", function (n) {
                switch (n.keyCode) {
                    case 32:
                        mejs.MediaFeatures.isFirefox || t.showSourcechooserSelector(), e(this).find(".mejs-sourcechooser-selector").find("input[type=radio]:checked").first().focus();
                        break;
                    case 13:
                        t.showSourcechooserSelector(), e(this).find(".mejs-sourcechooser-selector").find("input[type=radio]:checked").first().focus();
                        break;
                    case 27:
                        t.hideSourcechooserSelector(), e(this).find("button").focus();
                        break;
                    default:
                        return !0
                }
            }).on("focusout", mejs.Utility.debounce(function (n) {
                setTimeout(function () {
                    e(document.activeElement).closest(".mejs-sourcechooser-selector").length || t.hideSourcechooserSelector()
                }, 0)
            }, 100)).delegate("input[type=radio]", "click", function () {
                e(this).attr("aria-selected", !0).attr("checked", "checked"), e(this).closest(".mejs-sourcechooser-selector").find("input[type=radio]").not(this).attr("aria-selected", "false").removeAttr("checked");
                var t = this.value;
                if (o.currentSrc != t) {
                    var n = o.currentTime, i = o.paused;
                    o.pause(), o.setSrc(t), o.addEventListener("loadedmetadata", function (e) {
                        o.currentTime = n
                    }, !0);
                    var s = function (e) {
                        i || o.play(), o.removeEventListener("canplay", s, !0)
                    };
                    o.addEventListener("canplay", s, !0), o.load()
                }
            }).delegate("button", "click", function (n) {
                e(this).siblings(".mejs-sourcechooser-selector").hasClass("mejs-offscreen") ? (t.showSourcechooserSelector(), e(this).siblings(".mejs-sourcechooser-selector").find("input[type=radio]:checked").first().focus()) : t.hideSourcechooserSelector()
            });
            for (var l in this.node.children) {
                var u = this.node.children[l];
                "SOURCE" !== u.nodeName || "probably" != o.canPlayType(u.type) && "maybe" != o.canPlayType(u.type) || t.addSourceButton(u.src, u.title, u.type, o.src == u.src)
            }
        }, addSourceButton: function (t, n, i, o) {
            var s = this;
            ("" === n || void 0 == n) && (n = t), i = i.split("/")[1], s.sourcechooserButton.find("ul").append(e('<li><input type="radio" name="' + s.id + '_sourcechooser" id="' + s.id + "_sourcechooser_" + n + i + '" role="menuitemradio" value="' + t + '" ' + (o ? 'checked="checked"' : "") + 'aria-selected="' + o + '" /><label for="' + s.id + "_sourcechooser_" + n + i + '" aria-hidden="true">' + n + " (" + i + ")</label></li>")), s.adjustSourcechooserBox()
        }, adjustSourcechooserBox: function () {
            var e = this;
            e.sourcechooserButton.find(".mejs-sourcechooser-selector").height(e.sourcechooserButton.find(".mejs-sourcechooser-selector ul").outerHeight(!0))
        }, hideSourcechooserSelector: function () {
            this.sourcechooserButton.find(".mejs-sourcechooser-selector").addClass("mejs-offscreen").attr("aria-expanded", "false").attr("aria-hidden", "true").find("input[type=radio]").attr("tabindex", "-1")
        }, showSourcechooserSelector: function () {
            this.sourcechooserButton.find(".mejs-sourcechooser-selector").removeClass("mejs-offscreen").attr("aria-expanded", "true").attr("aria-hidden", "false").find("input[type=radio]").attr("tabindex", "0")
        }
    })
}(mejs.$), function (e) {
    e.extend(mejs.MepDefaults, {
        contextMenuItems: [{
            render: function (e) {
                return void 0 === e.enterFullScreen ? null : e.isFullScreen ? mejs.i18n.t("mejs.fullscreen-off") : mejs.i18n.t("mejs.fullscreen-on")
            }, click: function (e) {
                e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()
            }
        }, {
            render: function (e) {
                return e.media.muted ? mejs.i18n.t("mejs.unmute") : mejs.i18n.t("mejs.mute")
            }, click: function (e) {
                e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
            }
        }, {isSeparator: !0}, {
            render: function (e) {
                return mejs.i18n.t("mejs.download-video")
            }, click: function (e) {
                window.location.href = e.media.currentSrc
            }
        }]
    }), e.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function (t, n, i, o) {
            t.contextMenu = e('<div class="mejs-contextmenu"></div>').appendTo(e("body")).hide(), t.container.bind("contextmenu", function (e) {
                return t.isContextMenuEnabled ? (e.preventDefault(), t.renderContextMenu(e.clientX - 1, e.clientY - 1), !1) : void 0
            }), t.container.bind("click", function () {
                t.contextMenu.hide()
            }), t.contextMenu.bind("mouseleave", function () {
                t.startContextMenuTimer()
            })
        }, cleancontextmenu: function (e) {
            e.contextMenu.remove()
        }, isContextMenuEnabled: !0, enableContextMenu: function () {
            this.isContextMenuEnabled = !0
        }, disableContextMenu: function () {
            this.isContextMenuEnabled = !1
        }, contextMenuTimeout: null, startContextMenuTimer: function () {
            var e = this;
            e.killContextMenuTimer(), e.contextMenuTimer = setTimeout(function () {
                e.hideContextMenu(), e.killContextMenuTimer()
            }, 750)
        }, killContextMenuTimer: function () {
            var e = this.contextMenuTimer;
            null != e && (clearTimeout(e), delete e, e = null)
        }, hideContextMenu: function () {
            this.contextMenu.hide()
        }, renderContextMenu: function (t, n) {
            for (var i = this, o = "", s = i.options.contextMenuItems, r = 0,
                     a = s.length; a > r; r++)if (s[r].isSeparator) o += '<div class="mejs-contextmenu-separator"></div>'; else {
                var l = s[r].render(i);
                null != l && (o += '<div class="mejs-contextmenu-item" data-itemindex="' + r + '" id="element-' + 1e6 * Math.random() + '">' + l + "</div>")
            }
            i.contextMenu.empty().append(e(o)).css({
                top: n,
                left: t
            }).show(), i.contextMenu.find(".mejs-contextmenu-item").each(function () {
                var t = e(this), n = parseInt(t.data("itemindex"), 10), o = i.options.contextMenuItems[n];
                void 0 !== o.show && o.show(t, i), t.click(function () {
                    void 0 !== o.click && o.click(i), i.contextMenu.hide()
                })
            }), setTimeout(function () {
                i.killControlsTimer("rev3")
            }, 100)
        }
    })
}(mejs.$), function (e) {
    e.extend(mejs.MepDefaults, {
        skipBackInterval: 30,
        skipBackText: ""
    }), e.extend(MediaElementPlayer.prototype, {
        buildskipback: function (t, n, i, o) {
            var s = this, r = mejs.i18n.t("mejs.time-skip-back", s.options.skipBackInterval),
                a = s.options.skipBackText ? s.options.skipBackText : r;
            e('<div class="mejs-button mejs-skip-back-button"><button type="button" aria-controls="' + s.id + '" title="' + a + '" aria-label="' + a + '">' + s.options.skipBackInterval + "</button></div>").appendTo(n).click(function () {
                o.setCurrentTime(Math.max(o.currentTime - s.options.skipBackInterval, 0)), e(this).find("button").blur()
            })
        }
    })
}(mejs.$), function (e) {
    e.extend(mejs.MepDefaults, {postrollCloseText: ""}), e.extend(MediaElementPlayer.prototype, {
        buildpostroll: function (t, n, i, o) {
            var s = this, r = s.options.postrollCloseText ? s.options.postrollCloseText : mejs.i18n.t("mejs.close"),
                a = s.container.find('link[rel="postroll"]').attr("href");
            void 0 !== a && (t.postroll = e('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + r + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(i).hide(), s.media.addEventListener("ended", function (n) {
                e.ajax({
                    dataType: "html", url: a, success: function (e, t) {
                        i.find(".mejs-postroll-layer-content").html(e)
                    }
                }), t.postroll.show()
            }, !1))
        }
    })
}(mejs.$), function (e) {
    e.extend(mejs.MepDefaults, {
        markerColor: "#E9BC3D", markers: [], markerCallback: function () {
        }
    }), e.extend(MediaElementPlayer.prototype, {
        buildmarkers: function (e, t, n, i) {
            var o = 0, s = -1, r = -1, a = -1, l = -1;
            for (o = 0; o < e.options.markers.length; ++o)t.find(".mejs-time-total").append('<span class="mejs-time-marker"></span>');
            i.addEventListener("durationchange", function (n) {
                e.setmarkers(t)
            }), i.addEventListener("timeupdate", function (t) {
                for (s = Math.floor(i.currentTime), a > s ? l > s && (l = -1) : a = s, o = 0; o < e.options.markers.length; ++o)r = Math.floor(e.options.markers[o]), s === r && r !== l && (e.options.markerCallback(i, i.currentTime), l = r)
            }, !1)
        }, setmarkers: function (t) {
            var n, i = this, o = 0;
            for (o = 0; o < i.options.markers.length; ++o)Math.floor(i.options.markers[o]) <= i.media.duration && Math.floor(i.options.markers[o]) >= 0 && (n = 100 * Math.floor(i.options.markers[o]) / i.media.duration, e(t.find(".mejs-time-marker")[o]).css({
                width: "1px",
                left: n + "%",
                background: i.options.markerColor
            }))
        }
    })
}(mejs.$);