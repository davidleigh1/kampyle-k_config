// Source: http://assets.kampyle.com/clients/1755186/d/k_config.js

if (window.k_sc_param = {
    version: 1.1
}, "undefined" == typeof console && (console = {
    log: function() {}
}), document.location.search.indexOf("k_stop=true") > -1 || document.location.search.indexOf("k_stop=1") > -1) throw new Error("This is not an error. Loading aborted.");
k_config = {}, k_config.detectmob = function() {
    return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
}, k_config.startTime = new Date, k_config.k_tags_created = !1, k_config.site = {}, k_config.site.bindToReady = !0, k_config.site.use_case = "", k_config.site.use_underscore = !0, k_config.getSCparams_done = 0, k_config.elemClicked = {}, k_config.params = {
    navLevel0: window.location.hostname,
    navLevel1: "",
    navLevel2: "",
    navLevel3: "",
    navLevel4: "",
    navLevel5: "",
    navFull: "",
    siteSection: "",
    k_error: "",
    definedBy: "organic"
}, k_config.crumbArray = [], k_config.consoleLog = function(o, e) {
    ("undefined" == typeof o || "null" === o || "" === o) && (o = "NO MESSAGE"), (1 == k_config.site.testMode || 1 == k_config.site.testMode || k_config.site.testMode == e) && console.log("K: " + o)
}, k_config.loadScript = function(o, e, n) {
    if (k_config.consoleLog("loadScript() src:" + o + " obj:" + e), "" == o || void 0 == o || "http://" == o || "https://" == o) return k_config.params.k_error += "|loadScript(" + o + ")", k_config.consoleLog("loadScript return (src == " + o + ")"), !1;
    var t = document.getElementsByTagName("head")[0],
        i = document.createElement("script");
    done = !1, i.setAttribute("src", o), i.setAttribute("type", "text/javascript"), i.setAttribute("charset", "utf-8"), i.onload = i.onreadstatechange = function() {
        done || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (done = !0, i.onload = i.onreadystatechange = null, n && n()), "undefined" != typeof e && (k_config.consoleLog(e + " loaded ok!"), k_config.getParams("on " + e + "Load"), k_config.loadCallback(e, n)), "undefined" == typeof e && k_config.consoleLog("ERROR LOADING " + e + "!")
    }, t.insertBefore(i, t.firstChild)
}, k_config.loadjscssfile = function(o, e) {
    if ("" == o || void 0 == o || "http://" == o || "https://" == o) return k_config.params.k_error += "|loadScript(" + o + ")", k_config.consoleLog("loadScript return(" + o + ")"), !1;
    if ("js" == e) {
        var n = document.createElement("script");
        n.setAttribute("type", "text/javascript"), n.setAttribute("src", o)
    } else if ("css" == e) {
        var n = document.createElement("link");
        n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n.setAttribute("href", o)
    }
    "undefined" != typeof n && document.getElementsByTagName("head")[0].appendChild(n)
}, k_config.loadCallback = function(o) {
    k_config.consoleLog("Default loadCallback(" + o + ")")
}, k_config.buttonParams = function() {
    var o = "site_code=" + k_config.site.site_code + "&form_id=" + k_config.site.button_form_id + "&lang=" + k_config.site.lang;
    return "undefined" != typeof k_config.site.autoresize && (o += "&autoresize=" + k_config.site.autoresize), "undefined" != typeof k_config.site.view && (o += "&view=" + k_config.site.view), o
}, k_config.virtualURL = function() {
    return "string" == typeof k_config.site.url && "" != k_config.site.url ? (k_config.consoleLog("virtualURL() returns: " + k_config.site.url), k_config.site.url) : void k_config.consoleLog("virtualURL() returns: null")
}, k_config.pushParams = function() {
    var o = "site_code=" + (k_push_vars.site_code || k_config.site.site_code) + "&form_id=" + (k_push_vars.invite_form_id || k_config.site.button_form_id) + "&lang=" + (k_push_vars.invite_lang || k_config.site.lang);
    return "undefined" != typeof k_push_vars.autoresize && (o += "&autok_push_varsresize=" + k_push_vars.autoresize), "undefined" != typeof k_push_vars.view && (o += "&view=" + k_push_vars.view), o.indexOf("push=1") < 0 && (o += "&push=1"), o
}, k_config.create_ff_url_no_cookie = function(o, e, n, t) {
    k_config.consoleLog("k_config.create_ff_url_no_cookie()");
    var i = [],
        c = !1;
    "undefined" != typeof k_button_js_revision && (c = k_button_js_revision.match(/\d+/), c !== !1 && i.push("k_button_js_revision=" + c[0])), "undefined" != typeof k_push_js_revision && (c = k_push_js_revision.match(/\d+/), c !== !1 && i.push("k_push_js_revision=" + c[0]));
    var r = 21;
    "undefined" != typeof k_push_vars && ("undefined" != typeof k_push_vars.view_percentage && i.push("view_percentage=" + k_push_vars.view_percentage), "undefined" != typeof k_push_vars.display_after && i.push("display_after=" + k_push_vars.display_after), "undefined" != typeof k_push_vars.cookie_expiration_time_yes && (r = k_push_vars.cookie_expiration_time_yes));
    var a = i.join("&"),
        s = (k_config.get_main_domain(), e || window.location.href);
    s = encodeURIComponent(s);
    var f = "";
    if (o) {
        var g = "";
        k_button.ff_link && (g = k_button.ff_link.rel, k_button.ff_link.href = "#", k_button.ff_link.target = "", k_button.ff_link.rel = "", "nofollow" == g && (g = ""));
        var _ = "";
        if (k_button.host_server && k_button.host_server.value) _ = k_button.host_server.value;
        else if (k_button.ff_link && null !== k_button.ff_link.getAttribute("ref_server")) {
            var k = k_button.ff_link.getAttribute("ref_server").split("/");
            _ = k[2]
        } else _ = "www.kampyle.com";
        k_button.loader_url || (k_button.loader_url = "/feedback_form/ff-feedback-form.php?");
        var n = document.location.protocol;
        "http:" != n && "https:" != n && (n = "http:"), f = n + "//" + _ + k_button.loader_url + o + g
    } else f = k_button.ff_link.href, "&push=1" == k_button.ff_link.rel && (f += k_button.ff_link.rel); if (window.pageTracker && window.pageTracker._trackEvent) {
        var u = k_button.generate_pre_id();
        window.pageTracker._trackEvent("KampyleFeedback", "NewFeedback", u), k_button.extra_params || (k_button.extra_params = {}), k_button.extra_params.vectors = u
    }
    if (k_button.extra_params) {
        var l = k_button.make_query_string(k_button.extra_params);
        f = f + "&" + l
    }
    if (null !== k_button.Get_Cookie("session_start_time")) {
        var d = k_button.Get_Cookie("session_start_time"),
            p = (new Date).getTime(),
            m = Math.round((p - d) / 1e3);
        f = f + "&time_on_site=" + m
    }
    "" !== a && (f = f + "&stats=" + encodeURIComponent(a));
    var v = "";
    null !== k_button.Get_Cookie("__utmz") ? v = "&utmz=" + encodeURIComponent(k_button.Get_Cookie("__utmz")) + "&utma=" + encodeURIComponent(k_button.Get_Cookie("__utma")) + "&utmv=" + encodeURIComponent(k_button.Get_Cookie("__utmv")) : null !== k_button.Get_Cookie("k_visit") && (v = "&kvisit=" + encodeURIComponent(k_button.Get_Cookie("k_visit")));
    var h = "",
        b = "";
    if ("function" == typeof ClickTaleGetPID && (b = ClickTaleGetPID()), "" === b && "function" == typeof KampyleGetClickTalePID && (b = KampyleGetClickTalePID()), "" !== b && "function" == typeof ClickTaleGetUID && "function" == typeof ClickTaleGetSID) {
        var y = ClickTaleGetUID(),
            L = ClickTaleGetSID();
        h = "&ctdata=0", null !== y && null !== L && (h = "&ctdata=" + b + ".." + y + ".." + L)
    }
    var C = "kampyle_ff";
    return f.length + s.length > 1024 && (C = s, s = "noUrl"), 1 == t || 1 == t ? f + "&url=" + s + v + h : {
        shortUrl: f + "&url=" + s + v + h,
        longUrl: C
    }
}, k_config.evalPage = function(o, e) {
    if (k_config.consoleLog("k_Chk: " + o), k_config.consoleLog("k_PTTin: " + e), "" == o || "undefined" == typeof o) return k_config.params.k_error += "|evalPage: urlOrString undefined", void k_config.consoleLog("k_config.evalPage - urlOrString not defined! Returning...");
    try {
        ("" == e || "undefined" == typeof e) && (e = "re"), k_config.consoleLog("PTTout: " + e);
        for (var n in k_config.siteSections) {
            var t = new RegExp(k_config.siteSections[n][e], k_config.siteSections[n].reMods);
            if (k_config.consoleLog("[Keys:" + n + "][String:" + o + "][" + e + ":" + k_config.siteSections[n][e] + "][newRE:" + t + "]"), "function" != typeof k_config.siteSections[n])
                if ("undefined" != typeof k_config.siteSections[n][e] && "" != k_config.siteSections[n][e])
                    if (o.match(t)) {
                        k_config.consoleLog("MATCH!");
                        try {
                            k_config.loadSectionConfig(k_config.siteSections[n], "evalPage"), k_config.consoleLog("Match: " + k_config.params.siteSection + " fid: " + k_config.site.button_form_id, 88);
                            var i = k_config.siteSections[n];
                            if ("undefined" != i.stopOnThisMatch && 1 == i.stopOnThisMatch) return k_config.consoleLog("stopOnThisMatch:" + i.stopOnThisMatch), !0
                        } catch (c) {
                            k_config.params.k_error += "|evalPage (" + c + ") Going to next RegEx."
                        }
                    } else k_config.consoleLog("No Match!"), ("undefined" == k_config.params.siteSection || "" == k_config.params.siteSection) && (k_config.params.siteSection = "non-match", "object" == typeof k_button ? k_button.setCustomVariable("siteSection", "non-match") : k_config.consoleLog("k_button not defined as object!"));
                    else k_config.consoleLog("Nothing to compare - continue");
                    else k_config.consoleLog("Key is a function - continue")
        }
    } catch (c) {
        k_config.consoleLog("Error caught on evalPage (Code: " + c + ")"), k_config.params.siteSection = "non-match-error", "object" == typeof k_button ? k_button.setCustomVariable("siteSection", "non-match-error") : k_config.consoleLog("k_button not defined as object!"), k_config.params.k_error += "|evalPage: " + c
    }
}, k_config.createKampyleTags = function(o) {
    if (1 == k_config.k_tags_created) return void k_config.consoleLog("Button already exists.  Not added again.");
    try {
        "undefined" != typeof k_config.site.url_css && (k_config.consoleLog("Loading CSS: " + k_config.tidyProtocolLoad(!0) + k_config.site.url_css), k_config.loadjscssfile(k_config.tidyProtocolLoad(!0) + k_config.site.url_css, "css"))
    } catch (e) {
        k_config.consoleLog("CSS Load Error (" + e + ")")
    }
    try {
        k_config.consoleLog("Loading k_button: " + k_config.tidyProtocolLoad(!0) + k_config.site.url_kbutton), "object" == typeof k_button && "function" == typeof k_button.open_ff ? k_config.consoleLog("Loading TERMINATED - k_button already on page") : k_config.loadScript(k_config.tidyProtocolLoad(!0) + k_config.site.url_kbutton, "k_button")
    } catch (e) {
        k_config.consoleLog("k_button Load Error (" + e + ")")
    }(void 0 == k_config.site.buttonBindToId || "undefined" == typeof k_config.site.buttonBindToId || "" == typeof k_config.site.buttonBindToId) && (k_config.site.buttonBindToId = "kampylink");
    var n;
    if (document.getElementById(k_config.site.buttonBindToId) ? (k_config.consoleLog("Binding to existing element (" + k_config.site.buttonBindToId + ") found on page! ", 6), n = !1) : (k_config.consoleLog("Creating and Binding to new element (" + k_config.site.buttonBindToId + ")", 6), n = !0), n) {
        k_config.consoleLog("Adding new element for button: " + r, 6);
        var t = document.createElement("div");
        t.id = "kampyleButton";
        var i = document.body.appendChild(t),
            c = (i.appendChild(document.createTextNode("")), i.appendChild(document.createElement("a"))),
            r = c
    } else {
        var r = document.getElementById(k_config.site.buttonBindToId);
        k_config.consoleLog("Using existing element: " + r, 6)
    } if ((void 0 == k_config.site.formURL || "undefined" == typeof k_config.site.formURL || "" == k_config.site.formURL) && (k_config.site.formURL = "/feedback_form/ff-feedback-form.php?"), (void 0 == k_config.site.buttonTarget || "undefined" == typeof k_config.site.buttonTarget || "" == k_config.site.buttonTarget) && (k_config.site.buttonTarget = "kampyleWindow"), (void 0 == k_config.site.buttonBindToId || "undefined" == typeof k_config.site.buttonBindToId || "" == k_config.site.buttonBindToId) && (k_config.site.buttonBindToId = "kampylink"), "undefined" != typeof k_button ? (k_button.ff_link = r, k_config.site.fullQStr = k_config.getQStr(k_config.buttonParams())) : k_config.site.fullQStr = k_config.buttonParams(), r.id = k_config.site.buttonBindToId, 1 == k_config.site.useHref || "true" == k_config.site.useHref ? (k_config.consoleLog("useHref = true | Set Href as: " + k_config.tidyProtocolForm(!0) + k_config.site.serverRegion + k_config.site.formURL + k_config.site.fullQStr), r.href = k_config.tidyProtocolForm(!0) + k_config.site.serverRegion + k_config.site.formURL + k_config.site.fullQStr, r.target = k_config.site.buttonTarget) : (k_config.consoleLog("useHref = false | Set Href as: javascript:void(0);"), r.href = "javascript:void(0);"), void 0 != k_config.site.buttonClass && "undefined" != typeof k_config.site.buttonClass && "" != k_config.site.buttonClass && (r.className = k_config.site.buttonClass), 1 == k_config.site.hideButton || "true" == k_config.site.hideButton ? (r.style.display = "none", k_config.consoleLog("createTags - hide button. hideButton=" + k_config.site.hideButton, 6)) : (k_config.consoleLog("createTags - show button. hideButton=" + k_config.site.hideButton, 6), k_config.site.hasLivePerson && k_config.setLP_UDEs("fbButtonWasShown", !0, "SESSION")), r.onclick = function() {
        return k_config.consoleLog("EVENT - BUTTON CLICK " + r), k_config.elemClicked = this, k_config.actionOpenFFButton(), !1
    }, n) {
        var a = (r.appendChild(document.createTextNode("")), r.appendChild(document.createElement("img")));
        a.src = "undefined" == typeof k_config.params.url_buttonImage || "" == k_config.params.url_buttonImage ? k_config.tidyProtocolLoad(!0) + k_config.site.url_buttonImage : k_config.tidyProtocolLoad(!0) + k_config.params.url_buttonImage, a.alt = "Feedback Form", a.border = "0"
    }
    if ("undefined" != typeof k_push_vars.view_percentage && k_push_vars.view_percentage > 0 && k_push_vars.view_percentage <= 100 || "undefined" != k_config.site.forceLoad_push && "true" == k_config.site.forceLoad_push) {
        k_config.consoleLog("Loading k_push: " + k_config.tidyProtocolLoad(!0) + k_config.site.url_kpush);
        try {
            "object" == typeof k_push ? k_config.consoleLog("Loading TERMINATED - k_push already on page") : k_config.loadScript(k_config.tidyProtocolLoad(!0) + k_config.site.url_kpush, "k_push")
        } catch (e) {
            k_config.consoleLog("k_push Load Error (" + e + ")")
        }
        if (n) {
            k_config.consoleLog("Adding new element for push: " + r, 6);
            var s = i.appendChild(document.createElement("a"));
            s.href = "#", s.target = k_config.site.buttonTarget, s.id = "k_popup_link", s.style.display = "none"
        } else {
            var s = document.getElementById(k_config.site.buttonBindToId);
            k_config.consoleLog("Using existing element for push: " + s, 6)
        }
        s.onclick = function() {
            k_config.consoleLog("EVENT - INVITATION CLICK"), k_config.actionOpenFFInvitationYes()
        }
    } else k_config.consoleLog("Loading k_push aborted. Conditions for loading not met.");
    k_config.k_tags_created = !0, k_config.consoleLog("\n\n===== Button added ========================================\nserver: " + k_config.site.serverRegion + "\nsiteid: " + k_config.site.site_code + "\nformid: " + k_config.site.button_form_id + "\nlangua: " + k_config.site.lang + "\ncontnt: " + k_config.params.contentType + "\nprodct: " + k_config.params.product + "\nnavFll: " + k_config.params.navFull + "\n-----------------------------------------\npgName: " + k_config.params.pageName + "\nssectn: " + k_config.params.siteSection + "\ndefinedBy: " + k_config.params.definedBy + "\nhideBt: " + k_config.site.hideButton + "\n===========================================================\n\n\n")
}, k_config.handlerButtonClick = function(o) {
    k_config.consoleLog("Default handlerButtonClick(from: " + o + ")")
}, k_config.actionOpenFFButton = function(o) {
    k_config.consoleLog("Default actionOpenFFButton()"), k_config.handlerButtonClick("buttonClick"), "object" == typeof o ? (k_config.swapParams("backup"), k_config.getParams("buttonClickWithParams", o)) : k_config.getParams("buttonClick");
    try {
        if (k_button.host_server = {
            value: k_config.site.serverRegion
        }, 1 != k_config.site.useHref && "true" != k_config.site.useHref) return k_config.consoleLog("CLICK: Open with onClick (useHref=false)", 6), k_config.consoleLog("buttonParams: " + k_config.buttonParams(), 6), k_config.consoleLog("virtualURL: " + k_config.virtualURL(), 6), k_config.consoleLog("tidyProtocolForm: " + k_config.tidyProtocolForm(), 6), k_config.open_ff(k_config.buttonParams(), k_config.virtualURL(), k_config.tidyProtocolForm()), "object" == typeof o && k_config.swapParams("restore"), !1;
        k_config.consoleLog("CLICK: onClick Disabled (useHref=true)", 6)
    } catch (e) {
        k_config.params.k_error += "|onClick (" + e + ")", k_config.consoleLog("Error Button onClick (" + e + ")", 6)
    }
}, k_config.actionOpenFFInvitationYes = function() {
    k_config.consoleLog("Default actionOpenFFInvitationYes()"), k_config.handlerButtonClick("inviteClick"), k_config.getParams("inviteClick");
    try {
        return k_button.host_server = {
            value: k_config.site.serverRegion
        }, k_config.open_ff(k_config.pushParams(), k_config.virtualURL(), k_config.tidyProtocolForm()), !1
    } catch (o) {
        k_config.params.k_error += "|Invite onClick (" + o + ")", k_config.consoleLog("Error Invite onClick (" + o + ")")
    }
}, k_config.open_ff = function(o, e, n, t) {
    k_config.consoleLog("Default k_config.open_ff()"), k_button.open_ff(o, e, n)
}, k_config.actionOpenFFInvitationNo = function() {
    k_config.consoleLog("Default actionOpenFFInvitationNo()")
}, k_config.actionOpenFFInvitationDefer = function() {
    k_config.consoleLog("Default actionOpenFFInvitationDefer()")
}, k_config.actionOpenFFCustomEvent = function(o) {
    k_config.consoleLog("Default actionOpenFFCustomEvent()")
}, k_config.triggerInvite = function(o) {
    k_config.site.testMode = 202, k_config.consoleLog("Default triggerInvite(" + o + ")"), 1 == o || "object" == typeof k_push && "object" == typeof k_push.openPopup ? (k_config.consoleLog("k_push loaded!"), k_config.openInvite()) : (k_config.consoleLog("Loading k_push"), k_config.loadScript(k_config.tidyProtocolLoad(!0) + k_config.site.url_kpush, "k_push", k_config.openInvite))
}, k_config.openInvite = function(o) {
    k_config.consoleLog("Default openInvite()"), "object" == typeof k_push && "function" == typeof k_push.openPopup ? (k_push_vars.popup_manual = !0, k_push.popup_init(), k_push.openPopup(), k_push_vars.popup_manual = !1, k_push.openPopup()) : k_config.consoleLog("k_push not found!")
}, k_config.bindReady = function(o) {
    if ("complete" === document.readyState) return k_config.consoleLog("bindReady: document complete - run now!"), k_config.params.bind = "DOMComplete:RunningNow", void o();
    if (k_config.consoleLog("bindReady: document not complete - binding..."), document.addEventListener) return k_config.consoleLog("bindReady: binding available for: Moz,Opera,Webkit"), k_config.params.bind = "Loading:BindingTo_DOMContentLoaded", void document.addEventListener("DOMContentLoaded", function() {
        document.removeEventListener("DOMContentLoaded", arguments.callee, !1), o()
    }, !1);
    if (document.attachEvent) return k_config.consoleLog("bindReady: binding available for: IE"), k_config.params.bind = "Loading:BindingTo_onreadystatechange", document.attachEvent("onreadystatechange", function() {
        "complete" === document.readyState && (document.detachEvent("onreadystatechange", arguments.callee), o())
    }), void(document.documentElement.doScroll && window == window.top && function() {
        k_config.consoleLog("bindReady: binding available for: IE (non-iFrame)"), k_config.params.bind = "Loading:BindingTo_doScroll";
        try {
            document.documentElement.doScroll("left")
        } catch (e) {
            return void setTimeout(arguments.callee, 0)
        }
        o()
    }());
    if (window.onload) {
        k_config.consoleLog("bindReady: browser detection failed - using onload"), k_config.params.bind = "Loading:BindingTo_onload";
        var e = window.onload;
        window.onload = function() {
            e(), o()
        }
    } else window.onload = o;
    k_config.consoleLog("bindReady: reached end of function!")
}, k_config.buttonLogic = function(o) {
    k_config.consoleLog("Default buttonLogic()");
    var e = 100;
    k_config.site.view_percentage ? k_config.site.view_percentage = k_config.site.view_percentage && k_config.site.view_percentage >= 0 && k_config.site.view_percentage <= 100 ? k_config.site.view_percentage : e : k_config.site.view_percentage = e;
    var n = Math.round(100 * Math.random());
    return 1 == k_config.site.forceButton || "true" == k_config.site.forceButton ? (k_config.consoleLog("forceButton = true - overriding all other logic"), k_config.site.hideButton = !1, !0) : (1 == k_config.site.createTags || "true" == k_config.site.createTags) && n < k_config.site.view_percentage ? (k_config.consoleLog("return true / show button (" + n + "|" + k_config.site.view_percentage + ")"), !0) : (k_config.consoleLog("return false / hide button (" + n + "|" + k_config.site.view_percentage + ")"), !1)
}, k_config.getFriendly = function(o) {
    k_config.consoleLog("getFriendly() - checking: [" + o + "]");
    for (var e in k_config.friendlyNames) {
        var n = typeof k_config.friendlyNames[e];
        if ("function" != n && "object" != n) {
            if (e == o) {
                var t = k_config.friendlyNames[e];
                return k_config.consoleLog("Match on [" + e + "]!"), k_config.consoleLog("Renaming to: [" + k_config.friendlyNames[e] + "] <<=======\n"), t
            }
            k_config.consoleLog("No match on: [" + e + "]\n")
        }
    }
    return o
}, k_config.setCustomVariables = function(o, e, n) {
    try {
        if ("object" != typeof k_button) return;
        k_config.params.buttonRev = "KB:" + ("undefined" == typeof k_button_js_revision ? "0" : k_button_js_revision.replace(/\s+|\$|Rev:/g, "")) + "|KP:" + ("undefined" == typeof k_push_js_revision ? "0" : k_push_js_revision.replace(/\s+|\$|Rev:/g, "")) + "|" + k_config.site.site_shortName + "|KC:" + k_config.site.revision;
        for (var t in k_config.params)
            if ("" !== t && "" !== k_config.params[t] && "object" != typeof k_config.params[t] && "function" != typeof k_config.params[t] && "array" != typeof k_config.params[t] && ";" !== k_config.params[t] && "empty" !== k_config.params[t] && void 0 !== k_config.params[t] && "re" != t && "reMods" !== t)
                if ("object" == typeof k_button) {
                    var i = k_config.getFriendly(t),
                        c = k_config.params[t],
                        r = k_config.tidyVar(c, o, e, n);
                    k_button.setCustomVariable(i, r)
                } else k_config.consoleLog("k_button not defined as object!");
                else k_config.consoleLog("Skipped cv: " + k_config.getFriendly(t))
    } catch (a) {
        k_config.consoleLog("Error caught setting cvs (Code: [#1] " + a + ")"), k_config.params.k_error += "|" + a
    }
}, k_config.trim = function(o) {
    if (k_config.consoleLog('"' + o + '" : ' + typeof o), "" == o || "string" != typeof o) return o;
    o = o.replace(/^\s+/, "");
    for (var e = o.length - 1; e >= 0; e--)
        if (/\S/.test(o.charAt(e))) {
            o = o.substring(0, e + 1);
            break
        }
    return o
}, k_config.isNumber = function(o) {
    return !isNaN(parseFloat(o)) && isFinite(o)
}, k_config.toTitleCase = function(o) {
    for (var e = o.toLowerCase().split(" "), n = 0; n < e.length; n++) {
        var t = e[n].slice(0, 1).toUpperCase();
        e[n] = t + e[n].substr(1)
    }
    return e.join(" ")
}, k_config.tidyVar = function(o, e, n, t) {
    var i = o;
    if ("string" == typeof o || "number" == typeof o || "boolean" == typeof o) {
        if (i = o.toString(), "undefined" == typeof t) var t = "...";
        return k_config.site.use_case ? "lower" == k_config.site.use_case ? i = i.toLowerCase() : "upper" == k_config.site.use_case ? i = i.toUpperCase() : "title" == k_config.site.use_case && (i = k_config.toTitleCase(i)) : 1 == e ? i = i.toLowerCase() : 2 == e ? i = i.toUpperCase() : 3 == e && (i = k_config.toTitleCase(i)), i = k_config.trim(i), i = i.replace(/\s{2,}/g, " "), i = i.replace(/(:|\>) /g, ":"), i = i.replace(/ (:|\>)/g, ":"), i = i.replace(/(&rsquo;|&apos;|Õ|&#39;|&#x27;)/gi, "'"), i = i.replace(/(&amp;)/gi, "&"), i = i.replace(/(&reg;)/gi, "(r)"), i = i.replace(/(&trade;)/gi, "(tm)"), i = i.replace(/(&copy;)/gi, "(c)"), 1 == k_config.site.use_underscore && (i = i.replace(/\s{1,}/g, "_")), "number" == typeof n && i.length > n && (i = i.substr(0, n - t.length) + t, k_config.params.k_error += "|trunk(" + i.substr(0, 3) + ")"), i
    }
}, k_config.tidyPrice = function(o, e, n) {
    return o ? ("string" == typeof o && (o = Math.round(1 * o.replace("$", ""))), "number" == typeof o && "number" == typeof e && (o = Math.round(o / e) * e), "number" == typeof o && "number" == typeof n && (o = o.toFixed(n)), o) : void 0
}, k_config.sortOrder = function(o, e, n) {
    ("" == n || void 0 == n) && (n = ";");
    var t = k_config.params[o].split(n);
    return "" != e && void 0 != e && t.push(e), t.sort(), t = t.join(n)
}, k_config.remove = function() {
    var o = ["session_start_time", "k_visit", "k_push8", "push_time_start", "k_vectors", "k_track", "k_click"];
    for (c = 0; c < o.length; c++) null != o[c] && "" != o[c] ? k_config.Clear_Cookie(o[c]) : k_config.consoleLog('CookieName "' + o[c] + '" not valid');
    k_button1 = k_button = k_push = k_push_vars = k_button_js_revision = k_push_js_revision = k_config = void 0, k_config.k_tags_created = !1;
    var e = document.getElementById("kampyleButton") ? document.getElementById("kampyleButton") : document.getElementById("kampylink"),
        n = e.parentNode;
    return n.removeChild(e), !0
}, k_config.clone = function(o, e) {
    if (null == o || "object" != typeof o) return o;
    if (o instanceof Date) {
        k_config.consoleLog("clone() copying date");
        var n = new Date;
        return n.setTime(o.getTime()), n
    }
    if (o instanceof Array) {
        k_config.consoleLog("clone() copying array");
        for (var n = [], t = 0, i = o.length; i > t; t++) n[t] = k_config.clone(o[t]);
        return n
    }
    if (o instanceof Object) {
        k_config.consoleLog("clone() copying object: " + e);
        var n = {};
        for (var c in o) o.hasOwnProperty(c) && (k_config.consoleLog("clone() ---" + c + " : " + o[c]), n[c] = k_config.clone(o[c]));
        return n
    }
    k_config.consoleLog("clone() Error: Unable to copy. Type is not supported."), k_config.params.k_error += "|clone:error"
}, k_config.swapParams = function(o) {
    if (k_config.consoleLog("swapParams() Action is: " + o), "" == o || "undefined" == typeof o) return k_config.consoleLog("swapParams() No action defined. Return"), !1;
    var o = o.toLowerCase();
    if ("backup" == o) k_config.consoleLog("swapParams() Backing up..."), k_config.site2 = k_config.clone(k_config.site, "k_config.site"), k_config.params2 = k_config.clone(k_config.params, "k_config.params"), k_push_vars2 = k_config.clone(k_push_vars, "k_push_vars"), k_config.consoleLog("swapParams() Backup Complete.");
    else {
        if ("restore" != o) return k_config.consoleLog("swapParams() Action requested not found."), !1;
        k_config.consoleLog("swapParams() Restoring..."), k_config.site = k_config.clone(k_config.site2, "k_config.site2"), k_config.params = k_config.clone(k_config.params2, "k_config.params2"), k_push_vars = k_config.clone(k_push_vars2, "k_push_vars2"), k_config.consoleLog("swapParams() Restore Complete.")
    }
}, k_config.Set_Cookie = function(o, e, n, t, i, c) {
    var r = new Date;
    r.setTime(r.getTime()), n && (n = 1e3 * n * 60 * 60 * 24);
    var a = new Date(r.getTime() + n);
    document.cookie = o + "=" + escape(e) + (n ? ";expires=" + a.toGMTString() : "") + (t ? ";path=" + t : "") + (i ? ";domain=" + i : "") + (c ? ";secure" : "")
}, k_config.Get_Cookie = function(o) {
    if (void 0 != o) {
        var e = document.cookie.indexOf(o + "="),
            n = e + o.length + 1;
        if (!e && o != document.cookie.substring(0, o.length)) return null;
        if (-1 == e) return null;
        var t = document.cookie.indexOf(";", n);
        return -1 == t && (t = document.cookie.length), unescape(document.cookie.substring(n, t))
    }
}, k_config.Clear_Cookie = function(o, e, n) {
    if (!o) return !1;
    var e = e || "undefined" != typeof k_button && k_button.get_main_domain() ? k_button.get_main_domain() : document.domain,
        n = n || "/",
        t = "",
        i = new Date;
    i.setTime(i.getTime() + -864e5), document.cookie = o + "=" + t + "; expires=" + i.toGMTString() + "; path= " + n + "; domain=" + e, console.log("Cookie Cleared: " + o + " [" + o + "=" + t + "; expires=" + i.toGMTString() + "; path= " + n + "; domain=" + e + "]")
}, k_config.get_main_domain = function() {
    var o = "",
        e = document.domain;
    if ("undefined" != document.domain && "" !== document.domain && "localhost" != document.domain) {
        var n = e.split(/\./g),
            t = n[n.length - 1],
            i = ["AERO", "ASIA", "BIZ", "CAT", "COM", "COOP", "INFO", "INT", "JOBS", "MOBI", "MUSEUM", "NAME", "NET", "ORG", "PRO", "TEL", "TRAVEL", "XXX", "EDU", "GOV", "MIL", "TV"],
            c = 3;
        for (var r in i) i[r] == t.toUpperCase() && (c = 2);
        o = n.length > c ? n.length > 3 ? n.slice(1).join(".") : n.slice(n.length - c).join(".") : e
    }
    return o
}, k_config.getFilename = function(o) {
    var e = o.substring(0, -1 == o.indexOf("#") ? o.length : o.indexOf("#"));
    return e = e.substring(0, -1 == e.indexOf("?") ? e.length : e.indexOf("?")), e.substring(e.lastIndexOf("/") + 1, e.length).replace(/(.html|.htm|.php|.aspx|.asp|.jsp|.jspx|.cfm)/g, "")
}, k_config.loadSectionConfig = function(o, e) {
    if (k_config.consoleLog("loadSectionConfig from: " + e), "" == o || "undefined" == typeof o) {
        if (k_config.consoleLog("loadSectionConfig undefined so set to k_pageParams"), "undefined" == typeof k_pageParams) return void k_config.consoleLog("loadSectionConfig - k_pageParams not found");
        o = k_pageParams
    }
    try {
        k_config.params.pageOverride = typeof o;
        var n = o;
        for (var t in n)
            if (k_config.consoleLog("[Keys:" + t + "]:[" + n[t] + "][Type:" + typeof n[t] + "]"), "invite" == t.toLowerCase() && "object" == typeof n[t]) {
                var i = n[t];
                for (var t in i)("" != i[t] || "string" != typeof i[t]) && (k_config.consoleLog("IN (k_push_vars)\nKey:" + t + "\nOld:" + k_push_vars[t] + "\nNew:" + i[t], 5), k_push_vars[t] = "" + i[t])
            } else if ("button" == t.toLowerCase() && "string" != typeof n[t]) {
            var c = n[t];
            for (var t in c) k_config.consoleLog("keys: " + t + " typeof:" + typeof c[t], 5), "string" == typeof c[t] && "" == c[t] ? k_config.consoleLog("OUT!! \nKey:" + t + "\nOld:" + k_config.site[t] + "\nNew:" + c[t], 5) : (k_config.consoleLog("IN (k_button) \nKey:" + t + "\nOld:" + k_config.site[t] + "\nNew:" + c[t], 5), k_config.site[t] = "" + c[t])
        } else "" != n[t] && (k_config.params[t] = "" + n[t]);
        k_config.consoleLog("loadSectionConfig Updated: " + JSON.stringify(o))
    } catch (r) {
        k_config.params.k_error += "|loadSectionConfig error (" + r + ")"
    }
}, k_config.getParams = function(o) {
    k_config.consoleLog("Default getParams(" + o + ")"), "object" == typeof k_button ? k_config.setCustomVariables() : k_config.consoleLog("k_button not defined as object!")
}, k_config.getParamsOnRun = function(o) {
    k_config.consoleLog("Default getParamsOnRun(" + o + ")"), "object" == typeof k_button ? k_config.setCustomVariables() : k_config.consoleLog("k_button not defined as object!")
}, k_config.getMeta = function(o, e, n) {
    if (!("" != n && void 0 != n || "" != e && void 0 != e))
        for (var t = "m_", i = document.getElementsByTagName("meta"), c = i.length, r = 0; c > r; r++) "" != i[r].name && void 0 != i[r].name && (k_config.params[t + i[r].name] = i[r].content, k_config.consoleLog("getMeta adding: [" + t + i[r].name + " = " + i[r].content + "]"));
    ("" == n || void 0 == n) && (n = "name"), ("" == e || void 0 == e) && (e = "content");
    var r, a = document.getElementsByTagName("META");
    for (r = 0; r < a.length; r++)
        if (a[r].getAttribute(n) == o) return a[r].getAttribute(e);
    return null
}, k_config.setPathLevels = function(o) {
    if ("undefined" == typeof o || "undefined" == o || "" == o) return "NoPath";
    var e = o.split("/");
    for (i = 1; i < e.length; i++) k_config.params["pathLevel" + i] = e[i]
}, k_config.getQStr = function(o) {
    var e = k_config.create_ff_url_no_cookie(o, ""),
        n = e.shortUrl;
    if (n.indexOf("?") < 0) return "NoQStr";
    var t = n.substring(n.indexOf("?") + 1);
    return t
}, k_config.setAllQStr = function(o, e, n) {
    if (!o) var o = window.location.href.toLowerCase();
    if (!e) var e = k_config.params;
    var t = "undefined" == typeof n ? "" : n;
    if (o.indexOf("?") < 0) return "NoQStr";
    var c = o.substring(o.indexOf("?") + 1).split("&");
    for (i = 0; i < c.length; i++) {
        var r = c[i].split("=");
        "undefined" != typeof e[r[0]] ? e[t + r[0] + "(" + i + ")"] = r[1] : e[t + r[0]] = r[1]
    }
}, k_config.getOnPageParams = function(o, e) {
    var n = typeof o;
    if ("undefined" != n) {
        var t = "undefined" == typeof e ? "" : e;
        switch (k_config.consoleLog("getPageParams(" + o + ") Type: [" + n + "]"), n) {
            case "object":
                try {
                    for (var i in o) pair = i.split("="), k_config.params[t + pair[0]] = o[pair[0]], k_config.consoleLog("getPageParams adding: [" + pair[0] + " = " + o[pair[0]] + "]")
                } catch (c) {
                    k_config.consoleLog("getOnPageParams(" + o + ")[" + n + "](Code: " + c + ")"), k_config.params.k_error += "|" + c
                }
                break;
            case "string":
                try {
                    if ("" == t) return;
                    k_config.params[t] = o, k_config.consoleLog("getPageParams adding: [" + t + " = " + o + "]")
                } catch (c) {
                    k_config.consoleLog("getOnPageParams(" + o + ")[" + n + "](Code: " + c + ")"), k_config.params.k_error += "|" + c
                }
                break;
            default:
                k_config.consoleLog("getPageParams(" + o + ") DEFAULT CASE")
        }
    }
}, k_config.setLP_UDEs = function(o, e, n, t) {
    return "undefined" == typeof lpMTag ? (k_config.consoleLog("lpMTag Not Found"), void(k_config.params.k_error += "|lpMTag Not Found")) : (k_config.consoleLog("lpMTag Found OK!"), t = "boolean" == typeof t ? t : !0, n = "SESSION" == n.toUpperCase() || "PAGE" == n.toUpperCase() || "VISITOR" == n.toUpperCase() ? n.toUpperCase() : "SESSION", k_config.consoleLog("Setting LPVar: " + n + "VAR!" + o + "=" + e + ", " + t), void lpMTag.lpSendData(n + "VAR!" + o + "=" + e, t))
}, k_config.getLP_UDEs = function(o, e) {
    k_config.consoleLog("Function: getLP_UDEs()");
    var e = "undefined" == typeof e ? "" : e;
    try {
        if ("undefined" == typeof lpMTagConfig) return k_config.consoleLog("lpMTagConfig Not Found"), void(k_config.params.k_error += "|lpMTagConfig Not Found");
        if (k_config.consoleLog("lpMTagConfig Found OK!"), "undefined" == typeof lpMTagConfig.UDEstore) return k_config.consoleLog("lpMTagConfig.UDEstore Not Found"), void(k_config.params.k_error += "|lpMTagConfig.UDEstore Not Found");
        k_config.consoleLog("lpMTagConfig.UDEstore Found OK!");
        var n = lpMTagConfig.UDEstore.VV,
            t = "lpMTagConfig.UDEstore.VV";
        if ("undefined" == typeof n) k_config.consoleLog(t + " Not Found");
        else {
            k_config.consoleLog(t + " Found OK! (" + n.length + ")");
            for (var i = 0; i < n.length; i++) k_config.getOnPageParams(unescape(n[i].split("=")[1]), unescape(e + n[i].split("=")[0]).toLowerCase())
        }
        var n = lpMTagConfig.UDEstore.SV,
            t = "lpMTagConfig.UDEstore.SV";
        if ("undefined" == typeof n) k_config.consoleLog(t + " Not Found");
        else {
            k_config.consoleLog(t + " Found OK! (" + n.length + ")");
            for (var i = 0; i < n.length; i++) k_config.getOnPageParams(unescape(n[i].split("=")[1]), unescape(e + n[i].split("=")[0]).toLowerCase())
        }
        var n = lpMTagConfig.UDEstore.PV,
            t = "lpMTagConfig.UDEstore.PV";
        if ("undefined" == typeof n) k_config.consoleLog(t + " Not Found");
        else {
            k_config.consoleLog(t + " Found OK! (" + n.length + ")");
            for (var i = 0; i < n.length; i++) k_config.getOnPageParams(unescape(n[i].split("=")[1]), unescape(e + n[i].split("=")[0]).toLowerCase())
        }
    } catch (c) {
        k_config.consoleLog("getLP_UDEs(1) Error: (" + c + ")"), k_config.params.k_error += "|getLP_UDEs(1) " + c
    }
    k_config.consoleLog("End getLP_UDEs")
}, k_config.getCookieList = function(o) {
    var o = "undefined" != typeof o ? o : "";
    if ("undefined" != typeof k_config.cookieList) {
        k_config.consoleLog("Fetching CookieList!");
        var e = k_config.cookieList;
        for (c = 0; c < e.length; c++)
            if (null != e[c] && "" != e[c]) {
                var n = k_config.Get_Cookie(e[c]);
                k_config.params[o + e[c]] = n, k_config.consoleLog("CookieList[" + c + "] " + e[c] + " : " + n)
            } else k_config.consoleLog("CookieList[" + c + '] cookieName "' + e[c] + '" not valid')
    } else k_config.consoleLog("No Cookies!")
}, k_config.getCrumbs = function(o, e) {
    function n(o) {
        var e = o.childNodes,
            t = e.length;
        k_config.consoleLog("getCrumbs: Nodes found:" + t);
        for (var i = 0; t > i; i++)
            if (3 == e[i].nodeType) {
                if (!e[i].nodeValue.match(/^[\s]*$/)) {
                    var c = e[i].nodeValue.replace(/(\||&amp;| |\'|\r\n|\n|\r|[\s\xA0])/g, "");
                    k_config.consoleLog("getCrumbs: Node found: " + c), k_config.crumbArray.push(c)
                }
            } else "script" != e[i].nodeName.toLowerCase() && n(e[i])
    }
    try {
        if (n(o), e) return k_config.consoleLog("getCrumbs: returning this:"), k_config.consoleLog(k_config.crumbArray[e]), k_config.crumbArray[e]
    } catch (t) {
        k_config.consoleLog("Breadcrumb error (Code: " + t + ")", 1), k_config.params.k_error += "|" + t
    }
}, k_config.getBreadcrumbs = function(o, e, n) {
    if ("" != o && void 0 != o && o) {
        if ("" != e && void 0 != e && e || (e = ">"), void 0 == n && (n = !1), k_config.crumbArray = [], k_config.params.navFull = "noBreadcrumbs", "object" == typeof o) {
            k_config.consoleLog("getCrumbs: Type/Object: " + typeof o, 21);
            var t = document.getElementById(o);
            k_config.getCrumbs(t)
        } else if ("string" == typeof o) {
            k_config.consoleLog("getCrumbs: Type/String: " + typeof o, 21);
            try {
                var i = o.split(e),
                    c = i.length;
                k_config.consoleLog("getCrumbs: Crumbs found: " + c, 21);
                for (var r = 0; c > r; r++)
                    if (!i[r].match(/^[\s]*$/)) {
                        var a = i[r];
                        k_config.consoleLog("getCrumbs: Crumb found: " + a, 21), k_config.crumbArray.push(a)
                    }
            } catch (s) {
                k_config.consoleLog("Breadcrumb error (Code: " + s + ")", 21), k_config.params.k_error += "|" + s
            }
        }
        1 == n || "true" == n ? (k_config.consoleLog("getCrumbs: removeFirst=" + n, 21), k_config.crumbArray.splice(0, 1)) : k_config.consoleLog("getCrumbs: removeFirst=" + n, 21), k_config.consoleLog("getCrumbs: crumbArray: " + k_config.crumbArray, 21), "undefined" != typeof k_config.crumbArray[0] && (k_config.params.navFull = "" + ("undefined" != typeof k_config.crumbArray[0] && "" != k_config.crumbArray[0] ? k_config.crumbArray[0] : "") + ("undefined" != typeof k_config.crumbArray[0] && "undefined" != typeof k_config.crumbArray[1] && "" != k_config.crumbArray[0] ? ":" : "") + ("undefined" != typeof k_config.crumbArray[1] ? k_config.crumbArray[1] : "") + ("undefined" != typeof k_config.crumbArray[2] ? ":" + k_config.crumbArray[2] : "") + ("undefined" != typeof k_config.crumbArray[3] ? ":" + k_config.crumbArray[3] : "") + ("undefined" != typeof k_config.crumbArray[4] ? ":" + k_config.crumbArray[4] : "") + ("undefined" != typeof k_config.crumbArray[5] ? ":" + k_config.crumbArray[5] : "") + ("undefined" != typeof k_config.crumbArray[6] ? ":" + k_config.crumbArray[6] : "")), k_config.consoleLog("getCrumbs: navFull=" + k_config.params.navFull, 21), "undefined" != typeof k_config.crumbArray[0] && "" != k_config.crumbArray[0] && (0 == n || "false" == n ? (k_config.consoleLog("getCrumbs: removeFirst=" + n, 21), k_config.params.navLevel0 = "undefined" != typeof k_config.crumbArray[0] ? k_config.crumbArray[0] : "") : k_config.consoleLog("getCrumbs: removeFirst=" + n, 21), k_config.params.navLevel1 = "undefined" != typeof k_config.crumbArray[0] && "" != k_config.crumbArray[0] ? k_config.crumbArray[0] : "", k_config.params.navLevel2 = "undefined" != typeof k_config.crumbArray[1] && "" != k_config.crumbArray[1] ? k_config.crumbArray[1] : "", k_config.params.navLevel3 = "undefined" != typeof k_config.crumbArray[2] && "" != k_config.crumbArray[2] ? k_config.crumbArray[2] : "", k_config.params.navLevel4 = "undefined" != typeof k_config.crumbArray[3] && "" != k_config.crumbArray[3] ? k_config.crumbArray[3] : "", k_config.params.navLevel5 = "undefined" != typeof k_config.crumbArray[4] && "" != k_config.crumbArray[4] ? k_config.crumbArray[4] : "", k_config.params.navLevel6 = "undefined" != typeof k_config.crumbArray[5] && "" != k_config.crumbArray[5] ? k_config.crumbArray[5] : "")
    }
}, k_config.searchEngine = function() {
    for (var o = {}, e = [
            ["google", "Google", "q"],
            ["yahoo.com", "Yahoo", "p"],
            ["bing.com", "Bing", "q"],
            ["bing.com", "Live", "q"],
            ["msn.com", "MSN", "q"],
            ["aol.com", "AOL", "q"],
            ["aol.com", "AOL", "query"],
            ["aol.com", "AOL", "encquery"],
            ["lycos.com", "Lycos", "query"],
            ["ask.com", "Ask", "q"],
            ["altavista.com", "Altavista", "q"],
            ["search.netscape.com", "Netscape", "query"],
            ["cnn.com/SEARCH", "CNN", "query"],
            ["about.com", "About", "terms"],
            ["baidu.com", "Baidu", "wd"],
            ["dogpile.com", "Dogpile", "q"],
            ["mywebsearch.com", "MyWebSearch", "searchfor"],
            ["search.com", "Search.com", "q"],
            ["yandex.com", "Yandex", "text"],
            ["rambler.ru", "Rambler", "words"],
            ["webcrawler.com", "Webcrawler", "q"],
            ["excite.com", "Excite", "q"],
            ["gigablast.com", "Gigablast", "q"],
            ["voila.fr", "Voila", "rdata"],
            ["mamma.com", "Mama", "query"],
            ["mamma.com", "Mamma", "query"],
            ["alltheweb.com", "Alltheweb", "q"],
            ["search.virgilio.it", "Virgilio", "qs"],
            ["naver.com", "Naver", "query"],
            ["alice.com", "Alice", "qs"],
            ["najdi.org.mk", "Najdi", "q"],
            ["eniro.se", "Eniro", "search_word"],
            ["seznam.cz", "Seznam", "q"],
            ["wp.pl", "Wirtulana Polska", "szukaj"],
            ["online.onetcenter.org", "O*NET", "qt"],
            ["szukacz.pl", "Szukacz", "q"],
            ["yam.com", "Yam", "k"],
            ["pchome.com", "PCHome", "q"],
            ["kvasir.no", "Kvasir", "q"],
            ["sesam.no", "Sesam", "q"],
            ["ozu.es", "Ozu", "q"],
            ["terra.com", "Terra", "query"],
            ["mynet.com", "Mynet", "q"],
            ["ekolay.net", "Ekolay", "q"],
            ["daum.net", "Daum", "q"],
            ["yandex.ru", "Yandex", "text"],
            ["info.com", "Info.com", "q"],
            ["softonic.com", "Softonic", "q"]
        ], n = e.length, t = document.referrer, i = 0; n > i; i++)
        if (k_config.consoleLog("Check: [" + i + "] " + e[i][1]), t.indexOf(e[i][0]) > -1) {
            if (k_config.consoleLog("Match: [" + i + "] " + e[i][0]), k_config.params.refSearchEng = e[i][1], k_config.setAllQStr(t, o), "undefined" == typeof o[e[i][2]]) {
                k_config.consoleLog("query string not found");
                continue
            }
            k_config.params.refSearchQ = o[e[i][2]].replace(/\+|%20/g, " "), "undefined" != typeof o.fr & "" != o.fr && (k_config.params.refSearchEng2 = o.fr);
            break
        }
    k_config.params.refGclid = window.location.href ? window.location.href.indexOf("gclid=") > -1 ? !0 : !1 : "NoURL"
}, k_config.getGAcookies = function(o) {
    gaParams = {};
    var e = "undefined" == typeof o ? gaParams : o;
    if (null !== k_config.Get_Cookie("__utmz")) {
        e._utmz = k_config.Get_Cookie("__utmz"), e._utma = k_config.Get_Cookie("__utma"), e._utmv = k_config.Get_Cookie("__utmv");
        var n = e._utmz.split("|"),
            t = n[0].split(".");
        k_config.params.utmz_timestamp = t[1], k_config.params.utmz_numberOfSessions = t[2], k_config.params.utmz_visitSources = t[3];
        var c = t[4].split("=");
        for (k_config.params[c[0]] = c[1], i = 1; i < n.length; i++) {
            var r = n[i].split("=");
            k_config.params[r[0]] = r[1]
        }
    }
}, k_config.getTimeOnSite = function() {
    if ("undefined" == typeof k_config.params.utmz_timestamp && null != k_config.Get_Cookie("__utmz") && (k_config.consoleLog('Getting "utmz" timestamp cookie'), k_config.getGAcookies()), "undefined" != typeof k_config.params.utmz_timestamp) {
        k_config.consoleLog('Using "utmz" timestamp cookie');
        var o = 1e3 * k_config.params.utmz_timestamp
    } else {
        if (null === k_config.Get_Cookie("session_start_time")) return k_config.consoleLog("Neither timestamp cookie found"), !1;
        k_config.consoleLog('Using Kampyle "session_start_time" timestamp cookie');
        var o = k_config.Get_Cookie("session_start_time")
    }
    var e = (new Date).getTime(),
        n = Math.round((e - o) / 1e3),
        t = Math.floor(n / 3600),
        i = Math.floor((n - 3600 * t) / 60),
        c = Math.floor(n - 3600 * t - 60 * i);
    t = 10 > t ? "0" + t : t, i = 10 > i ? "0" + i : i, c = 10 > c ? "0" + c : c, k_config.params.time_OnSite = t + ":" + i + ":" + c, k_config.params.time_OnSiteInSecs = n, k_config.params.time_OnSiteInMins = Math.floor(n / 60)
}, k_config.sessionCounter = function() {
    if ("undefined" == typeof k_config.params.utmz_numberOfSessions && null != k_config.Get_Cookie("__utmz") && (k_config.consoleLog('Getting "utmz" session count cookie'), k_config.getGAcookies()), "undefined" != typeof k_config.params.utmz_numberOfSessions) {
        k_config.consoleLog('Using "utmz" session count cookie');
        var o = k_config.params.utmz_numberOfSessions
    } else {
        if (null === k_config.Get_Cookie("k_visit")) return k_config.consoleLog("Neither session count cookie found"), !1;
        k_config.consoleLog('Using Kampyle "k_visit" session count cookie');
        var o = k_config.Get_Cookie("k_visit")
    }
    k_config.params.sessionCounter = o
}, k_config.getPlugins = function(o) {
    var e, n, t, i, c, r = [],
        a = navigator.plugins,
        s = a.length;
    for (e = 0; s > e; e++)
        if (n = a[e], r[e] = n.name, k_config.consoleLog(e + " " + n.name, 8), "" != n.description && n.description != n.name) {
            n.shortDesc = n.description.replace(n.name, "$");
            var f = n.name.length;
            if (n.shortDesc.length > f) {
                var g = new RegExp("[^A-Za-z$s]", "g"),
                    _ = new RegExp("[0-9s]", "g"),
                    k = n.shortDesc.substr(f - 3).split(" "),
                    u = "";
                for (c in k) try {
                    k_config.consoleLog(e + " " + c + " looking for numbers... " + k[c], 8), i = k[c].match(_), null != i && (t = k[c].match(g), t && (k_config.consoleLog(e + " match!  " + t, 8), u += k[c] + " "))
                } catch (l) {
                    k_config.consoleLog("plugin_error (" + l + ")", 8), k_config.params.k_error += "|plugin_error(" + l + ")"
                }
                u = u.replace(/^\s\s*\--added this to avoid closing comment tag   /, "").replace(/\s\s*$/, "");
                var d = "(" + n.shortDesc.substr(0, f - 3) + "..." + u + ")";
                r[e] += d, k_config.consoleLog(e + " add " + d, 8)
            } else k_config.consoleLog(e + " = Short enough! Adding original", 8), r[e] += "(" + n.shortDesc + ")"
        } else k_config.consoleLog(e + " No description " + n.description, 8);
    k_config.params.plugins = r.toString(), k_config.consoleLog(k_config.params.plugins, 8)
}, k_config.getProductName = function(o, e, n) {
    if (!n) var n = 0;
    try {
        if (o && e) {
            var t = o.getElementsByTagName(e),
                i = t[n].innerHTML.replace(/\&amp;/g, "&");
            return i
        }
        if (o) {
            var i = o.innerHTML.replace(/\&amp;/g, "&");
            return i
        }
        return "Not Found"
    } catch (c) {
        k_config.consoleLog("getProductName error (Code: " + c + ")", 1), k_config.params.k_error += "|getProductName " + c
    }
}, k_config.lightboxLoad = function() {
    try {
        "undefined" != typeof k_config.site.url_lightbox_css && (k_config.consoleLog("LIGHTBOX - Loading CSS: " + k_config.tidyProtocolLoad(!0) + k_config.site.url_lightbox_css), k_config.loadjscssfile(k_config.tidyProtocolLoad(!0) + k_config.site.url_lightbox_css, "css"))
    } catch (o) {
        k_config.consoleLog("LIGHTBOX - CSS Load Error (" + o + ")")
    }
    try {
        k_config.consoleLog("LIGHTBOX - Lightbox JS: " + k_config.tidyProtocolLoad(!0) + k_config.site.url_lightbox_js), k_config.loadScript(k_config.tidyProtocolLoad(!0) + k_config.site.url_lightbox_js, "jQuery.ui", k_config.lightboxReady)
    } catch (o) {
        k_config.consoleLog("LIGHTBOX - JS Load Error (" + o + ")")
    }
}, k_config.lightboxReady = function() {
    k_config.consoleLog("LIGHTBOX - Assigning click event to #kampylink"), $(document).ready(function() {
        var o = $("<div></div>").html("This dialog will show every time!").dialog({
            autoOpen: !1,
            title: "Basic Dialog"
        });
        $("#" + k_config.site.buttonBindToId).click(function() {
            return o.dialog("open"), !1
        })
    })
}, k_config.colorboxInit = function() {}, k_config.colorboxBindToButton = function() {}, k_config.cookieList = ["k_click", "", ""], k_config.site = {
    site_name: "Independent",
    site_shortName: "INM",
    site_code: "1755186",
    button_form_id: "72124-454",
    buttonClass: "k_override_float k_override_middle k_right",
    lang: "en",
    serverRegion: "eu.kampyle.com",
    use_underscore: !0,
    use_case: "lower",
    lightbox: !1,
    testMode: !1,
    createTags: !1,
    hideButton: !0,
    addProtocol: !0,
    url_css: "assets.kampyle.com/clients/1755186/d/css/k_button.css",
    url_kbutton: "assets.kampyle.com/clients/1755186/d/js/k_button.js",
    url_kpush: "assets.kampyle.com/clients/1755186/d/js/k_push.js",
    url_buttonImage: "assets.kampyle.com/clients/1755186/d/images/k_feedback_button.png",
    url_inviteFolder: "assets.kampyle.com/clients/1755186/d/images/",
    url_jQuery: "INSERT_JQUERY.JS_URL_HERE--ONLY_IF_REQUIRED",
    url_lightbox_js: "INSERT_LIGHTBOX.JS_URL_HERE--ONLY_IF_REQUIRED",
    url_lightbox_css: "INSERT_LIGHTBOX.CSS_URL_HERE--ONLY_IF_REQUIRED",
    url_jumppage: "",
    url_https_css: "",
    url_https_kbutton: "",
    url_https_kpush: "",
    url_https_buttonImage: "",
    url_https_inviteFolder: "",
    forceFormProtocol: "",
    forceLoadProtocol: "",
    forceLoad_css: "",
    forceLoad_push: "",
    forceLoad_button: "",
    revision: "v7.07_24Aug15"
}, k_config.tidyProtocolForm = function(o) {
    var e = "https:" == window.location.protocol ? "https:" : "http:";
    return "https" == k_config.site.forceFormProtocol || "https:" == k_config.site.forceFormProtocol || "https:/" == k_config.site.forceFormProtocol || "https://" == k_config.site.forceFormProtocol ? e = "https:" : ("http" == k_config.site.forceFormProtocol || "http:" == k_config.site.forceFormProtocol || "http:/" == k_config.site.forceFormProtocol || "http://" == k_config.site.forceFormProtocol) && (e = "http:"), e = 1 != o && "true" != o || "" == e ? e : e + "//"
}, k_config.tidyProtocolLoad = function(o) {
    var e = "https:" == window.location.protocol ? "https:" : "http:";
    return (0 == k_config.site.addProtocol || "false" == k_config.site.addProtocol) && (e = ""), "https" == k_config.site.forceLoadProtocol || "https:" == k_config.site.forceLoadProtocol || "https:/" == k_config.site.forceLoadProtocol || "https://" == k_config.site.forceLoadProtocol ? e = "https:" : ("http" == k_config.site.forceLoadProtocol || "http:" == k_config.site.forceLoadProtocol || "http:/" == k_config.site.forceLoadProtocol || "http://" == k_config.site.forceLoadProtocol) && (e = "http:"), 0 != k_config.site.addProtocol && "false" != k_config.site.addProtocol || "" == e || (k_config.params.k_error += "|addProtocolOverridden", k_config.consoleLog("addProtocol: [" + k_config.site.addProtocol + "] was overridden by protocolLoad: [" + k_config.site.protocolLoad + "]")), e = 1 != o && "true" != o || "" == e ? e : e + "//"
}, k_push_vars = {
    display_after_on_page: 100,
    display_after: 100,
    view_percentage: 0,
    popup_font_color: "#000000",
    popup_background: "#FFFFFF",
    popup_separator: "#FFFFFF",
    header: '<p style="height:70px;"><img style="margin-left:auto;margin-right:auto;" src=' + k_config.tidyProtocolLoad(!0) + k_config.site.url_inviteFolder + "inm_logo.png></p>How was your visit today?",
    question: "Could you please lets us know so we can make your next visit even better?",
    footer: " ",
    remind: "Remind me later",
    remind_font_color: "#000000",
    yes: "Yes",
    no: "No Thanks",
    text_direction: "ltr",
    images_dir: k_config.tidyProtocolLoad(!0) + k_config.site.url_inviteFolder,
    yes_background: "#5A8C46",
    no_background: "#FFFFFF",
    site_code: k_config.site.site_code,
    ff_link_id: "k_popup_link",
    invite_form_id: "72124-454"
}, k_config.friendlyNames = {
    k_error: "errorLog",
    navLevel0: "domain",
    refDiffHost: "landingPage"
}, k_config.getTestmodeOverride = function() {
    if (("undefined" == typeof k_config.site.testMode || "" == k_config.site.testMode) && (k_config.site.testMode = !1), db_url = /k_testmode=/i, db_test = window.location.href.match(db_url), null != db_test) {
        k_config.testModeList = {}, k_config.setAllQStr("", k_config.testModeList);
        var o, e, n;
        for (var o in k_config.testModeList) {
            var e = /k_testmode/i,
                n = o.match(e);
            if (null != n) switch (k_config.consoleLog("URL testmode parameter [" + o + " = " + k_config.testModeList[o] + "]"), k_config.testModeList[o]) {
                case "0":
                case "false":
                    k_config.site.testMode = 0, k_config.consoleLog("testMode set [to false] from URL: " + k_config.testModeList[o], 67);
                    break;
                case "1":
                case "true":
                    k_config.site.testMode = 1, k_config.consoleLog("testMode set [to true] from URL: " + k_config.testModeList[o], 67);
                    break;
                case "forceButton":
                case "showbutton":
                    k_config.site.forceButton = !0, k_config.site.createTags = !0, k_config.consoleLog("forcebutton and createTags set [to true] from URL.  Button will be shown but view_percentage remains unchanged: " + k_config.site.view_percentage, 67);
                    break;
                case "createtags":
                    k_config.site.createTags = !0, k_config.consoleLog("createTags set [to true] from URL.", 67);
                    break;
                default:
                    try {
                        k_config.isNumber(k_config.testModeList[o]) && k_config.testModeList[o].length <= 3 ? (k_config.site.testMode = k_config.testModeList[o], k_config.consoleLog("testMode set from URL: " + k_config.testModeList[o], 67)) : k_config.consoleLog("testMode found in URL but not valid range or keyword: " + k_config.testModeList[o], 67);
                        break
                    } catch (t) {
                        k_config.consoleLog("testMode unsuccessfully detected in URL: " + k_config.testModeList[o] + " (" + t + ")", 67)
                    }
            }
        }
    } else k_config.consoleLog("testMode not detected in URL", 67)
}, k_config.getViewport = function() {
    var o = window,
        e = document,
        n = e.documentElement,
        t = e.getElementsByTagName("body")[0],
        i = o.innerWidth || n.clientWidth || t.clientWidth,
        c = o.innerHeight || n.clientHeight || t.clientHeight;
    k_config.params.windowWidth = i, k_config.params.windowHeight = c, k_config.params.windowSize = i + "x" + c
}, k_config.getParamsOnRun = function(o) {
    k_config.consoleLog("getParamsOnRun(" + o + ")"), k_config.params.fileName = k_config.getFilename(document.location.href);
    var e = window.location.pathname;
    k_config.setPathLevels(e), k_config.params.hostName = window.location.hostname, k_config.params.pagePath = window.location.pathname, k_config.params.pageQStr = window.location.search, k_config.params.pageHash = window.location.hash.substr(1), k_config.params.pageTitle = document.title, k_config.setAllQStr(k_config.params.pageQStr, "", "url_"), k_config.searchEngine(), k_config.getGAcookies(), k_config.sessionCounter(), k_config.getCookieList("cookie_"), 1 == k_config.site.hasLivePerson && (k_config.setLP_UDEs("fbButtonIsShown", k_config.site.hideButton ? !1 : !0, "SESSION"), k_config.getLP_UDEs("", "LP_")), k_config.loadSectionConfig("", "getParamsOnRun()")
}, k_config.getParams = function(o, e) {
    var n = new Date;
    if ("object" == typeof e) {
        k_config.consoleLog("getParams() with paramsObj");
        var t = e
    } else {
        k_config.consoleLog("getParams() without paramsObj - will default to k_pageParams");
        var t = ""
    }
    k_config.consoleLog("Custom getParams(" + o + ")"), "undefined" != typeof k_config.elemClicked, 1, k_config.params.hostName = window.location.hostname, k_config.params.pagePath = window.location.pathname, k_config.params.pageQStr = window.location.search, k_config.params.pageHash = window.location.hash.substr(1), k_config.params.pageTitle = document.title, k_config.params.fileName = k_config.getFilename(document.location.href);
    var i = window.location.pathname;
    k_config.setPathLevels(i), k_config.setAllQStr(k_config.params.pageQStr, "", "url_");
    var c = document.referrer;
    k_config.params.refHostName = c ? c.match(/:\/\/(.[^\/]+)/)[1] : "direct", k_config.params.refURL = c ? unescape(c) : "direct", k_config.params.refFilename = c ? k_config.getFilename(c) : "direct", k_config.params.refDiffHost = c ? k_config.params.refHostName == k_config.params.hostName ? "SameHost" : "DiffHost" : "direct", k_config.getCookieList("cookie_"), k_config.getViewport(), k_config.getOnPageParams(), k_config.loadSectionConfig(t, "getParams()"), k_config.site.hasLivePerson && (k_config.setLP_UDEs("fbButtonIsShown", k_config.site.hideButton ? !1 : !0, "SESSION"), k_config.getLP_UDEs("", "LP_")), k_config.getTimeOnSite(), "undefined" != typeof s && 1 != k_config.getSCparams_done && k_config.getSCparams(), "object" == typeof k_button ? k_config.setCustomVariables(0, 150) : k_config.consoleLog("k_button not defined as object!");
    var r = new Date - n;
    k_config.consoleLog("TIMER: getParams(" + o + ") took: " + r + "ms")
}, k_config.loadCallback = function(o, e) {
    k_config.consoleLog("Custom loadCallback(" + o + ")"), "k_push" == o && (k_config.consoleLog("Running k_push.popup_init()"), k_push.popup_init(), e && e())
}, k_config.buttonLogic = function(o) {
    k_config.consoleLog("Custom buttonLogic()", 88);
    var e = 100,
        n = 0,
        t = k_config.Get_Cookie("k_click") ? k_config.Get_Cookie("click") : 0;
    k_config.site.view_percentage ? k_config.site.view_percentage = k_config.site.view_percentage && k_config.site.view_percentage >= 0 && k_config.site.view_percentage <= 100 ? k_config.site.view_percentage : e : k_config.site.view_percentage = e, k_config.site.hideButtonMaxClicks ? k_config.site.hideButtonMaxClicks = k_config.site.hideButtonMaxClicks && k_config.site.hideButtonMaxClicks >= 0 && k_config.site.hideButtonMaxClicks <= 100 ? k_config.site.hideButtonMaxClicks : n : k_config.site.hideButtonMaxClicks = n;
    var i = Math.round(100 * Math.random());
    return 1 == k_config.site.forceButton || "true" == k_config.site.forceButton ? (k_config.consoleLog("forceButton = true - overriding all other logic", 88), k_config.site.hideButton = !1, !0) : (1 == k_config.site.createTags || "true" == k_config.site.createTags) && t < k_config.site.hideButtonMaxClicks || 0 == k_config.site.hideButtonMaxClicks ? (k_config.consoleLog("\n==================================\nreturn true / hideButtonMaxClicks not exceeded (" + t + "|" + k_config.site.hideButtonMaxClicks + ")\n==================================", 88), (1 == k_config.site.createTags || "true" == k_config.site.createTags) && i < k_config.site.view_percentage ? (k_config.consoleLog("\n==================================\nreturn true / show button (" + i + "|" + k_config.site.view_percentage + ")\n==================================", 88), !0) : (k_config.consoleLog("\n==================================\nreturn false / hide button (" + i + "|" + k_config.site.view_percentage + ")\n==================================", 88), !1)) : (k_config.consoleLog("\n==================================\nreturn false / hideButtonMaxClicks has been exceeded (" + t + "|" + k_config.site.hideButtonMaxClicks + ")\n==================================", 88), !1)
}, k_config.handlerButtonClick = function() {
    k_config.consoleLog("Custom handlerButtonClick()");
    var o = "k_click",
        e = k_config.get_main_domain();
    if (k_config.Get_Cookie(o) && k_config.isNumber(k_config.Get_Cookie(o))) {
        var n = 1 * k_config.Get_Cookie(o);
        k_config.Set_Cookie(o, n + 1, 0, "/", e), k_config.consoleLog("\n==================================\nupdating cookie (" + k_config.Get_Cookie(o) + "|" + k_config.site.hideButtonMaxClicks + ")\n==================================", 88)
    } else k_config.Set_Cookie(o, 1, 0, "/", e), k_config.consoleLog("\n==================================\nAdding New Cookie... (" + k_config.Get_Cookie(o) + "|" + k_config.site.hideButtonMaxClicks + ")\n==================================", 88);
    k_config.Get_Cookie(o) >= k_config.site.hideButtonMaxClicks && 0 != k_config.site.hideButtonMaxClicks && (k_config.consoleLog("\n==================================\nhide button now! / hideButtonMaxClicks has been exceeded (" + k_config.Get_Cookie(o) + "|" + k_config.site.hideButtonMaxClicks + ")\n==================================", 88), k_config.site.hideButton = !0, document.getElementById(k_config.site.buttonBindToId).style.display = "none", 1 == k_config.site.hasLivePerson && k_config.setLP_UDEs("fbButtonIsShown", k_config.site.hideButton ? !1 : !0, "SESSION"))
}, k_config.getSCparams = function() {
    if (k_config.consoleLog("getSCparams()"), "undefined" != typeof s) {
        var o = s.pageName,
            e = "pageName";
        "undefined" == typeof s ? "" : "undefined" == typeof o ? "" : k_config.params[e] = k_config.tidyVar(o, 1);
        var o = s.channel,
            e = "contentType";
        "undefined" == typeof s ? "" : "undefined" == typeof o ? "" : k_config.params[e] = k_config.tidyVar(o, 1);
        var o = s.server,
            e = "server";
        "undefined" == typeof s ? "" : "undefined" == typeof o ? "" : k_config.params[e] = k_config.tidyVar(o, 1);
        var o = s.hier1,
            e = "hier1";
        "undefined" == typeof s ? "" : "undefined" == typeof o ? "" : k_config.params[e] = k_config.tidyVar(o, 1);
        var o = s.products,
            e = "products";
        "undefined" == typeof s ? "" : "undefined" == typeof o ? "" : k_config.params[e] = k_config.tidyVar(o, 1);
        var o = s.prop59,
            e = "refPageName";
        "undefined" == typeof s ? "" : "undefined" == typeof o ? "" : k_config.params[e] = k_config.tidyVar(o, 1);
        var n = s,
            t = s.hier1;
        k_config.params.hierFull = "undefined" == typeof n ? "" : k_config.tidyVar(t);
        var i = "undefined" == typeof n ? "" : "undefined" == typeof t ? "" : k_config.tidyVar(t, 1);
        k_config.params.hierLevel1 = "undefined" == typeof i ? "" : i.split(":")[0], k_config.params.hierLevel2 = "undefined" == typeof i ? "" : i.split(":")[1], k_config.params.hierLevel3 = "undefined" == typeof i ? "" : i.split(":")[2], k_config.params.hierLevel4 = "undefined" == typeof i ? "" : i.split(":")[3], k_config.params.hierLevel5 = "undefined" == typeof i ? "" : i.split(":")[4], k_config.params.customerName = "undefined" == typeof s ? "" : s.prop25, k_config.getSCparams_done = 1
    } else k_config.params.k_error += "|getSCparams: s=undefined"
}, k_config.siteSections = {
    Mobile: {
        siteSection: "Mobile",
        re: "(m.test.independent.ie|m.stg.independent.ie|m.independent.ie |mobile_device)",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "72124-454",
            view: "mobile",
            display_after_on_page: 30,
            display_after: 60,
            view_percentage: 0
        },
        button: {
            button_form_id: "72124-454",
            view: "mobile",
            buttonBindToId: "kfeedback",
            buttonClass: "kfeedback",
            createTags: !0,
            hideButton: !1
        }
    },
    "Members Development": {
        siteSection: "Members Development",
        re: "member.dev.independent.ie",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "72124-454",
            view: "mobile",
            display_after_on_page: 30,
            display_after: 60,
            view_percentage: 0
        },
        button: {
            button_form_id: "72124-454",
            view: "mobile",
            buttonBindToId: "kfeedback",
            buttonClass: "kfeedback",
            createTags: !0,
            hideButton: !1
        }
    },
    "Members Testing": {
        siteSection: "Members Testing",
        re: "member-stg.independent.ie",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "72124-454",
            view: "mobile",
            display_after_on_page: 30,
            display_after: 60,
            view_percentage: 0
        },
        button: {
            button_form_id: "72124-454",
            view: "mobile",
            buttonBindToId: "kfeedback",
            buttonClass: "kfeedback",
            createTags: !0,
            hideButton: !1
        }
    },
    "Members Production": {
        siteSection: "Members Production",
        re: "member.independent.ie",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "72124-454",
            view: "mobile",
            display_after_on_page: 30,
            display_after: 60,
            view_percentage: 0
        },
        button: {
            button_form_id: "72124-454",
            view: "mobile",
            buttonBindToId: "kfeedback",
            buttonClass: "kfeedback",
            createTags: !0,
            hideButton: !1
        }
    },
    Test: {
        siteSection: "Test",
        re: "test.independent.ie",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "72124-454",
            view: "mobile",
            display_after_on_page: 30,
            display_after: 60,
            view_percentage: 0
        },
        button: {
            button_form_id: "72124-454",
            view: "mobile",
            createTags: !0,
            hideButton: !1
        }
    },
    General: {
        siteSection: "General",
        re: ".*",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "72124-454",
            view: "mobile",
            display_after_on_page: 30,
            display_after: 60,
            view_percentage: 0
        },
        button: {
            button_form_id: "72124-454",
            view: "mobile",
            createTags: !0,
            hideButton: !1
        }
    },
    TEMPLATE_SITE_SECTION: {
        navLevel1: "",
        navLevel2: "",
        navLevel3: "",
        navLevel4: "",
        navLevel5: "",
        navFull: "",
        sectionType: "Directional|Orientational|Informational|Conversion|Confirmation",
        contentType: "Search|SearchResults|Brochureware|Catalog|Reviews",
        product: "NAMED_PRODUCT_IF_ORIENTATIONAL_SECTIONORPAGE",
        siteSection: "NAME_USED_FOR_DASHBOARD",
        re: "REGULAR_EXPRESSION",
        reMods: "i",
        stopOnThisMatch: !1,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "SECTION_INVITE_FORM_ID",
            display_after_on_page: 30,
            display_after: 60,
            view_percentage: 0
        },
        button: {
            button_form_id: "SECTION_BUTTON_FORM_ID",
            createTags: !0,
            hideButton: !1
        }
    },
    test: {
        navLevel1: "",
        navLevel2: "",
        navLevel3: "",
        navLevel4: "",
        navLevel5: "",
        navFull: "",
        sectionType: "TEST_SECTIONTYPE",
        content: "TEST_CONTENT",
        product: "TEST_PRODUCT",
        siteSection: "TEST_SECTION",
        re: "showbutton=true",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: k_push_vars.invite_form_id,
            display_after_on_page: 3,
            display_after: 6,
            view_percentage: 100
        },
        button: {
            button_form_id: k_config.site.button_form_id,
            createTags: !0,
            hideButton: !1,
            url_buttonImage: "",
            buttonClass: "k_float k_bottom k_right"
        }
    }
}, k_config.runtimeWrapper = function() {
    k_config.consoleLog("--- Start of runtimeWrapper ---", 22), k_config.getParamsOnRun("BeforeEvalPage"), k_config.consoleLog("EVALPAGE ----- URL"), pageEval = window.location.href.toLowerCase(), k_config.detectmob() && (pageEval += "&mobile_device"), k_config.evalPage(pageEval, "re"), k_config.loadSectionConfig("", "Runtime"), "undefined" != typeof k_button && (k_config.k_button_done = 1), "true" == k_config.site.createTags || 1 == k_config.site.createTags ? ("true" == k_config.site.lightbox || 1 == k_config.site.lightbox ? k_config.consoleLog("Lightbox - DISABLED") : k_config.consoleLog("Lightbox - Not Enabled"), 0 == k_config.buttonLogic() ? (k_config.consoleLog("hideButton changed to true", 88), k_config.site.hideButton = !0) : k_config.consoleLog("hideButton unchanged (" + k_config.site.hideButton + ")", 88), "false" == k_config.site.bindToReady || 0 == k_config.site.bindToReady ? (k_config.consoleLog("RUN NOW - bindToReady=" + k_config.site.bindToReady, 88), k_config.getParams(), k_config.createKampyleTags()) : (k_config.consoleLog("BIND NOW / RUN LATER - bindToReady=" + k_config.site.bindToReady, 88), k_config.bindReady(function() {
        k_config.getParams(), k_config.createKampyleTags()
    }))) : k_config.consoleLog("TERMINATED. createTags=" + k_config.site.createTags + " so createKampyleTags() was not executed!", 88), k_config.totalTime = new Date - k_config.startTime, k_config.params.k_loadtimeMS = k_config.totalTime, k_config.consoleLog("TIMER: Total Runtime: " + k_config.totalTime + "ms", 22), k_config.consoleLog("--- End of runtimeWrapper ---", 22)
}, k_config.getTestmodeOverride(), k_config.consoleLog("--- RUNTIME ---", 22), k_config.runtimeWrapper(), "undefined" != typeof k_button;
