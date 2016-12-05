// Source http://assets.kampyle.com/clients/9706554/k_config.js

if (window.k_sc_param = {
    version: 1.1
}, "undefined" == typeof console && (console = {
    log: function() {}
}), document.location.search.indexOf("k_stop=true") > -1 || document.location.search.indexOf("k_stop=1") > -1) throw new Error("This is not an error. Loading aborted.");
k_config = {}, k_config.startTime = new Date, k_config.k_tags_created = !1, k_config.site = {}, k_config.site.bindToReady = !0, k_config.site.use_case = "", k_config.site.use_underscore = !0, k_config.getSCparams_done = 0, k_config.elemClicked = {}, k_config.params = {
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
}, k_config.crumbArray = [], k_config.consoleLog = function(a, b) {
    "undefined" != typeof a && "null" !== a && "" !== a || (a = "NO MESSAGE"), 1 != k_config.site.testMode && 1 != k_config.site.testMode && k_config.site.testMode != b || console.log("K: " + a)
}, k_config.loadScript = function(a, b, c) {
    if (k_config.consoleLog("loadScript() src:" + a + " obj:" + b), "" == a || void 0 == a || "http://" == a || "https://" == a) return k_config.params.k_error += "|loadScript(" + a + ")", k_config.consoleLog("loadScript return (src == " + a + ")"), !1;
    var d = document.getElementsByTagName("head")[0],
        e = document.createElement("script");
    done = !1, e.setAttribute("src", a), e.setAttribute("type", "text/javascript"), e.setAttribute("charset", "utf-8"), e.onload = e.onreadstatechange = function() {
        done || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (done = !0, e.onload = e.onreadystatechange = null, c && c()), "undefined" != typeof b && (k_config.consoleLog(b + " loaded ok!"), k_config.getParams("on " + b + "Load"), k_config.loadCallback(b)), "undefined" == typeof b && k_config.consoleLog("ERROR LOADING " + b + "!")
    }, d.insertBefore(e, d.firstChild)
}, k_config.loadjscssfile = function(a, b) {
    if ("" == a || void 0 == a || "http://" == a || "https://" == a) return k_config.params.k_error += "|loadScript(" + a + ")", k_config.consoleLog("loadScript return(" + a + ")"), !1;
    if ("js" == b) {
        var c = document.createElement("script");
        c.setAttribute("type", "text/javascript"), c.setAttribute("src", a)
    } else if ("css" == b) {
        var c = document.createElement("link");
        c.setAttribute("rel", "stylesheet"), c.setAttribute("type", "text/css"), c.setAttribute("href", a)
    }
    "undefined" != typeof c && document.getElementsByTagName("head")[0].appendChild(c)
}, k_config.loadCallback = function(a) {
    k_config.consoleLog("Default loadCallback(" + a + ")")
}, k_config.buttonParams = function() {
    var a = "site_code=" + k_config.site.site_code + "&form_id=" + k_config.site.button_form_id + "&lang=" + k_config.site.lang;
    return a
}, k_config.virtualURL = function() {
    return "string" == typeof k_config.site.url && "" != k_config.site.url ? (k_config.consoleLog("virtualURL() returns: " + k_config.site.url), k_config.site.url) : void k_config.consoleLog("virtualURL() returns: null")
}, k_config.pushParams = function() {
    var a = "site_code=" + k_config.site.site_code + "&form_id=" + (k_push_vars.invite_form_id ? k_push_vars.invite_form_id : k_config.site.button_form_id) + "&lang=" + k_config.site.lang;
    return a
}, k_config.create_ff_url_no_cookie = function(a, b, c, d) {
    k_config.consoleLog("k_config.create_ff_url_no_cookie()");
    var e = [],
        f = !1;
    "undefined" != typeof k_button_js_revision && (f = k_button_js_revision.match(/\d+/), f !== !1 && e.push("k_button_js_revision=" + f[0])), "undefined" != typeof k_push_js_revision && (f = k_push_js_revision.match(/\d+/), f !== !1 && e.push("k_push_js_revision=" + f[0]));
    var g = 21;
    "undefined" != typeof k_push_vars && ("undefined" != typeof k_push_vars.view_percentage && e.push("view_percentage=" + k_push_vars.view_percentage), "undefined" != typeof k_push_vars.display_after && e.push("display_after=" + k_push_vars.display_after), "undefined" != typeof k_push_vars.cookie_expiration_time_yes && (g = k_push_vars.cookie_expiration_time_yes));
    var h = e.join("&"),
        j = (k_config.get_main_domain(), b || window.location.href);
    j = encodeURIComponent(j);
    var k = "";
    if (a) {
        var l = "";
        k_button.ff_link && (l = k_button.ff_link.rel, k_button.ff_link.href = "#", k_button.ff_link.target = "", k_button.ff_link.rel = "", "nofollow" == l && (l = ""));
        var m = "";
        if (k_button.host_server && k_button.host_server.value) m = k_button.host_server.value;
        else if (k_button.ff_link && null !== k_button.ff_link.getAttribute("ref_server")) {
            var n = k_button.ff_link.getAttribute("ref_server").split("/");
            m = n[2]
        } else m = "www.kampyle.com";
        k_button.loader_url || (k_button.loader_url = "/feedback_form/ff-feedback-form.php?");
        var c = document.location.protocol;
        "http:" != c && "https:" != c && (c = "http:"), k = c + "//" + m + k_button.loader_url + a + l
    } else k = k_button.ff_link.href, "&push=1" == k_button.ff_link.rel && (k += k_button.ff_link.rel); if (window.pageTracker && window.pageTracker._trackEvent) {
        var o = k_button.generate_pre_id();
        window.pageTracker._trackEvent("KampyleFeedback", "NewFeedback", o), k_button.extra_params || (k_button.extra_params = {}), k_button.extra_params.vectors = o
    }
    if (k_button.extra_params) {
        var p = k_button.make_query_string(k_button.extra_params);
        k = k + "&" + p
    }
    if (null !== k_button.Get_Cookie("session_start_time")) {
        var q = k_button.Get_Cookie("session_start_time"),
            r = (new Date).getTime(),
            s = Math.round((r - q) / 1e3);
        k = k + "&time_on_site=" + s
    }
    "" !== h && (k = k + "&stats=" + encodeURIComponent(h));
    var t = "";
    null !== k_button.Get_Cookie("__utmz") ? t = "&utmz=" + encodeURIComponent(k_button.Get_Cookie("__utmz")) + "&utma=" + encodeURIComponent(k_button.Get_Cookie("__utma")) + "&utmv=" + encodeURIComponent(k_button.Get_Cookie("__utmv")) : null !== k_button.Get_Cookie("k_visit") && (t = "&kvisit=" + encodeURIComponent(k_button.Get_Cookie("k_visit")));
    var u = "",
        v = "";
    if ("function" == typeof ClickTaleGetPID && (v = ClickTaleGetPID()), "" === v && "function" == typeof KampyleGetClickTalePID && (v = KampyleGetClickTalePID()), "" !== v && "function" == typeof ClickTaleGetUID && "function" == typeof ClickTaleGetSID) {
        var w = ClickTaleGetUID(),
            x = ClickTaleGetSID();
        u = "&ctdata=0", null !== w && null !== x && (u = "&ctdata=" + v + ".." + w + ".." + x)
    }
    var y = "kampyle_ff";
    return k.length + j.length > 1024 && (y = j, j = "noUrl"), 1 == d || 1 == d ? k + "&url=" + j + t + u : {
        shortUrl: k + "&url=" + j + t + u,
        longUrl: y
    }
}, k_config.evalPage = function(a, b) {
    if (k_config.consoleLog("k_Chk: " + a), k_config.consoleLog("k_PTTin: " + b), "" == a || "undefined" == typeof a) return k_config.params.k_error += "|evalPage: urlOrString undefined", void k_config.consoleLog("k_config.evalPage - urlOrString not defined! Returning...");
    try {
        "" != b && "undefined" != typeof b || (b = "re"), k_config.consoleLog("PTTout: " + b);
        for (var c in k_config.siteSections) {
            var d = new RegExp(k_config.siteSections[c][b], k_config.siteSections[c].reMods);
            if (k_config.consoleLog("[Keys:" + c + "][String:" + a + "][" + b + ":" + k_config.siteSections[c][b] + "][newRE:" + d + "]"), "function" != typeof k_config.siteSections[c])
                if ("undefined" != typeof k_config.siteSections[c][b] && "" != k_config.siteSections[c][b])
                    if (a.match(d)) {
                        k_config.consoleLog("MATCH!");
                        try {
                            k_config.loadSectionConfig(k_config.siteSections[c], "evalPage"), k_config.consoleLog("Match: " + k_config.params.siteSection + " fid: " + k_config.site.button_form_id, 88);
                            var e = k_config.siteSections[c];
                            if ("undefined" != e.stopOnThisMatch && 1 == e.stopOnThisMatch) return k_config.consoleLog("stopOnThisMatch:" + e.stopOnThisMatch), !0
                        } catch (a) {
                            k_config.params.k_error += "|evalPage (" + a + ") Going to next RegEx."
                        }
                    } else k_config.consoleLog("No Match!"), "undefined" != k_config.params.siteSection && "" != k_config.params.siteSection || (k_config.params.siteSection = "non-match", "object" == typeof k_button ? k_button.setCustomVariable("siteSection", "non-match") : k_config.consoleLog("k_button not defined as object!"));
                    else k_config.consoleLog("Nothing to compare - continue");
                    else k_config.consoleLog("Key is a function - continue")
        }
    } catch (a) {
        k_config.consoleLog("Error caught on evalPage (Code: " + a + ")"), k_config.params.siteSection = "non-match-error", "object" == typeof k_button ? k_button.setCustomVariable("siteSection", "non-match-error") : k_config.consoleLog("k_button not defined as object!"), k_config.params.k_error += "|evalPage: " + a
    }
}, k_config.createKampyleTags = function(a) {
    if (1 == k_config.k_tags_created) return void k_config.consoleLog("Button already exists.  Not added again.");
    try {
        "undefined" != typeof k_config.site.url_css && (k_config.consoleLog("Loading CSS: " + k_config.tidyProtocolLoad(!0) + k_config.site.url_css), k_config.loadjscssfile(k_config.tidyProtocolLoad(!0) + k_config.site.url_css, "css"))
    } catch (a) {
        k_config.consoleLog("CSS Load Error (" + a + ")")
    }
    try {
        k_config.consoleLog("Loading k_button: " + k_config.tidyProtocolLoad(!0) + k_config.site.url_kbutton), "object" == typeof k_button && "function" == typeof k_button.open_ff ? k_config.consoleLog("Loading TERMINATED - k_button already on page") : k_config.loadScript(k_config.tidyProtocolLoad(!0) + k_config.site.url_kbutton, "k_button")
    } catch (a) {
        k_config.consoleLog("k_button Load Error (" + a + ")")
    }
    void 0 != k_config.site.buttonBindToId && "undefined" != typeof k_config.site.buttonBindToId && "" != typeof k_config.site.buttonBindToId || (k_config.site.buttonBindToId = "kampylink");
    var b;
    if (document.getElementById(k_config.site.buttonBindToId) ? (k_config.consoleLog("Binding to existing element (" + k_config.site.buttonBindToId + ") found on page! ", 6), b = !1) : (k_config.consoleLog("Creating and Binding to new element (" + k_config.site.buttonBindToId + ")", 6), b = !0), b) {
        k_config.consoleLog("Adding new element for button: " + g, 6);
        var c = document.createElement("div");
        c.id = "kampyleButton";
        var d = document.body.appendChild(c),
            f = (d.appendChild(document.createTextNode("")), d.appendChild(document.createElement("a"))),
            g = f
    } else {
        var g = document.getElementById(k_config.site.buttonBindToId);
        k_config.consoleLog("Using existing element: " + g, 6)
    } if (void 0 != k_config.site.formURL && "undefined" != typeof k_config.site.formURL && "" != k_config.site.formURL || (k_config.site.formURL = "/feedback_form/ff-feedback-form.php?"), void 0 != k_config.site.buttonTarget && "undefined" != typeof k_config.site.buttonTarget && "" != k_config.site.buttonTarget || (k_config.site.buttonTarget = "kampyleWindow"), void 0 != k_config.site.buttonBindToId && "undefined" != typeof k_config.site.buttonBindToId && "" != k_config.site.buttonBindToId || (k_config.site.buttonBindToId = "kampylink"), "undefined" != typeof k_button ? (k_button.ff_link = g, k_config.site.fullQStr = k_config.getQStr(k_config.buttonParams())) : k_config.site.fullQStr = k_config.buttonParams(), g.id = k_config.site.buttonBindToId, 1 == k_config.site.useHref || "true" == k_config.site.useHref ? (k_config.consoleLog("useHref = true | Set Href as: " + k_config.tidyProtocolForm(!0) + k_config.site.serverRegion + k_config.site.formURL + k_config.site.fullQStr), g.href = k_config.tidyProtocolForm(!0) + k_config.site.serverRegion + k_config.site.formURL + k_config.site.fullQStr, g.target = k_config.site.buttonTarget) : (k_config.consoleLog("useHref = false | Set Href as: javascript:void(0);"), g.href = "javascript:void(0);"), void 0 != k_config.site.buttonClass && "undefined" != typeof k_config.site.buttonClass && "" != k_config.site.buttonClass && (g.className = k_config.site.buttonClass), 1 == k_config.site.hideButton || "true" == k_config.site.hideButton ? (g.style.display = "none", k_config.consoleLog("createTags - hide button. hideButton=" + k_config.site.hideButton, 6)) : (k_config.consoleLog("createTags - show button. hideButton=" + k_config.site.hideButton, 6), k_config.site.hasLivePerson && k_config.setLP_UDEs("fbButtonWasShown", !0, "SESSION")), g.onclick = function() {
        return k_config.consoleLog("EVENT - BUTTON CLICK " + g), k_config.elemClicked = this, k_config.actionOpenFFButton(), !1
    }, b) {
        var h = (g.appendChild(document.createTextNode("")), g.appendChild(document.createElement("img")));
        h.src = "undefined" == typeof k_config.params.url_buttonImage || "" == k_config.params.url_buttonImage ? k_config.tidyProtocolLoad(!0) + k_config.site.url_buttonImage : k_config.tidyProtocolLoad(!0) + k_config.params.url_buttonImage, h.alt = "Feedback Form", h.border = "0"
    }
    if ("undefined" != typeof k_push_vars.view_percentage && k_push_vars.view_percentage > 0 && k_push_vars.view_percentage <= 100 || "undefined" != k_config.site.forceLoad_push && "true" == k_config.site.forceLoad_push) {
        k_config.consoleLog("Loading k_push: " + k_config.tidyProtocolLoad(!0) + k_config.site.url_kpush);
        try {
            "object" == typeof k_push ? k_config.consoleLog("Loading TERMINATED - k_push already on page") : k_config.loadScript(k_config.tidyProtocolLoad(!0) + k_config.site.url_kpush, "k_push")
        } catch (a) {
            k_config.consoleLog("k_push Load Error (" + a + ")")
        }
        if (b) {
            k_config.consoleLog("Adding new element for push: " + g, 6);
            var i = d.appendChild(document.createElement("a"));
            i.href = "#", i.target = k_config.site.buttonTarget, i.id = "k_popup_link", i.style.display = "none"
        } else {
            var i = document.getElementById(k_config.site.buttonBindToId);
            k_config.consoleLog("Using existing element for push: " + i, 6)
        }
        i.onclick = function() {
            k_config.consoleLog("EVENT - INVITATION CLICK"), k_config.actionOpenFFInvitationYes()
        }
    } else k_config.consoleLog("Loading k_push aborted. Conditions for loading not met.");
    k_config.k_tags_created = !0, k_config.consoleLog("\n\n===== Button added ========================================\nserver: " + k_config.site.serverRegion + "\nsiteid: " + k_config.site.site_code + "\nformid: " + k_config.site.button_form_id + "\nlangua: " + k_config.site.lang + "\ncontnt: " + k_config.params.contentType + "\nprodct: " + k_config.params.product + "\nnavFll: " + k_config.params.navFull + "\n-----------------------------------------\npgName: " + k_config.params.pageName + "\nssectn: " + k_config.params.siteSection + "\ndefinedBy: " + k_config.params.definedBy + "\nhideBt: " + k_config.site.hideButton + "\n===========================================================\n\n\n")
}, k_config.handlerButtonClick = function(a) {
    k_config.consoleLog("Default handlerButtonClick(from: " + a + ")")
}, k_config.actionOpenFFButton = function(a) {
    k_config.consoleLog("Default actionOpenFFButton()"), k_config.handlerButtonClick("buttonClick"), "object" == typeof a ? (k_config.swapParams("backup"), k_config.getParams("buttonClickWithParams", a)) : k_config.getParams("buttonClick");
    try {
        if (k_button.host_server = {
            value: k_config.site.serverRegion
        }, 1 != k_config.site.useHref && "true" != k_config.site.useHref) return k_config.consoleLog("CLICK: Open with onClick (useHref=false)", 6), k_config.consoleLog("buttonParams: " + k_config.buttonParams(), 6), k_config.consoleLog("virtualURL: " + k_config.virtualURL(), 6), k_config.consoleLog("tidyProtocolForm: " + k_config.tidyProtocolForm(), 6), k_config.open_ff(k_config.buttonParams(), k_config.virtualURL(), k_config.tidyProtocolForm()), "object" == typeof a && k_config.swapParams("restore"), !1;
        k_config.consoleLog("CLICK: onClick Disabled (useHref=true)", 6)
    } catch (a) {
        k_config.params.k_error += "|onClick (" + a + ")", k_config.consoleLog("Error Button onClick (" + a + ")", 6)
    }
}, k_config.actionOpenFFInvitationYes = function() {
    k_config.consoleLog("Default actionOpenFFInvitationYes()"), k_config.handlerButtonClick("inviteClick"), k_config.getParams("inviteClick");
    try {
        return k_button.host_server = {
            value: k_config.site.serverRegion
        }, k_config.open_ff(k_config.pushParams(), k_config.virtualURL(), k_config.tidyProtocolForm()), !1
    } catch (a) {
        k_config.params.k_error += "|Invite onClick (" + a + ")", k_config.consoleLog("Error Invite onClick (" + a + ")")
    }
}, k_config.open_ff = function(a, b, c, d) {
    k_config.consoleLog("Default k_config.open_ff()"), k_button.open_ff(a, b, c)
}, k_config.actionOpenFFInvitationNo = function() {
    k_config.consoleLog("Default actionOpenFFInvitationNo()")
}, k_config.actionOpenFFInvitationDefer = function() {
    k_config.consoleLog("Default actionOpenFFInvitationDefer()")
}, k_config.actionOpenFFCustomEvent = function(a) {
    k_config.consoleLog("Default actionOpenFFCustomEvent()")
}, k_config.bindReady = function(a) {
    if ("complete" === document.readyState) return k_config.consoleLog("bindReady: document complete - run now!"), k_config.params.bind = "DOMComplete:RunningNow", void a();
    if (k_config.consoleLog("bindReady: document not complete - binding..."), document.addEventListener) return k_config.consoleLog("bindReady: binding available for: Moz,Opera,Webkit"), k_config.params.bind = "Loading:BindingTo_DOMContentLoaded", void document.addEventListener("DOMContentLoaded", function() {
        document.removeEventListener("DOMContentLoaded", arguments.callee, !1), a()
    }, !1);
    if (document.attachEvent) return k_config.consoleLog("bindReady: binding available for: IE"), k_config.params.bind = "Loading:BindingTo_onreadystatechange", document.attachEvent("onreadystatechange", function() {
        "complete" === document.readyState && (document.detachEvent("onreadystatechange", arguments.callee), a())
    }), void(document.documentElement.doScroll && window == window.top && function() {
        k_config.consoleLog("bindReady: binding available for: IE (non-iFrame)"), k_config.params.bind = "Loading:BindingTo_doScroll";
        try {
            document.documentElement.doScroll("left")
        } catch (a) {
            return void setTimeout(arguments.callee, 0)
        }
        a()
    }());
    if (window.onload) {
        k_config.consoleLog("bindReady: browser detection failed - using onload"), k_config.params.bind = "Loading:BindingTo_onload";
        var b = window.onload;
        window.onload = function() {
            b(), a()
        }
    } else window.onload = a;
    k_config.consoleLog("bindReady: reached end of function!")
}, k_config.buttonLogic = function(a) {
    k_config.consoleLog("Default buttonLogic()");
    var b = 100;
    k_config.site.view_percentage ? k_config.site.view_percentage = k_config.site.view_percentage && k_config.site.view_percentage >= 0 && k_config.site.view_percentage <= 100 ? k_config.site.view_percentage : b : k_config.site.view_percentage = b;
    var c = Math.round(100 * Math.random());
    return 1 == k_config.site.forceButton || "true" == k_config.site.forceButton ? (k_config.consoleLog("forceButton = true - overriding all other logic"), k_config.site.hideButton = !1, !0) : (1 == k_config.site.createTags || "true" == k_config.site.createTags) && c < k_config.site.view_percentage ? (k_config.consoleLog("return true / show button (" + c + "|" + k_config.site.view_percentage + ")"), !0) : (k_config.consoleLog("return false / hide button (" + c + "|" + k_config.site.view_percentage + ")"), !1)
}, k_config.getFriendly = function(a) {
    k_config.consoleLog("getFriendly() - checking: [" + a + "]");
    for (var b in k_config.friendlyNames) {
        var c = typeof k_config.friendlyNames[b];
        if ("function" != c && "object" != c) {
            if (b == a) {
                var d = k_config.friendlyNames[b];
                return k_config.consoleLog("Match on [" + b + "]!"), k_config.consoleLog("Renaming to: [" + k_config.friendlyNames[b] + "] <<=======\n"), d
            }
            k_config.consoleLog("No match on: [" + b + "]\n")
        }
    }
    return a
}, k_config.setCustomVariables = function(a, b, c) {
    try {
        if ("object" != typeof k_button) return;
        k_config.params.buttonRev = "KB:" + ("undefined" == typeof k_button_js_revision ? "0" : k_button_js_revision.replace(/\s+|\$|Rev:/g, "")) + "|KP:" + ("undefined" == typeof k_push_js_revision ? "0" : k_push_js_revision.replace(/\s+|\$|Rev:/g, "")) + "|" + k_config.site.site_shortName + "|KC:" + k_config.site.revision;
        for (var d in k_config.params)
            if ("" !== d && "" !== k_config.params[d] && "object" != typeof k_config.params[d] && "function" != typeof k_config.params[d] && "array" != typeof k_config.params[d] && ";" !== k_config.params[d] && "empty" !== k_config.params[d] && void 0 !== k_config.params[d] && "re" != d && "reMods" !== d)
                if ("object" == typeof k_button) {
                    var e = k_config.getFriendly(d),
                        f = k_config.params[d],
                        g = k_config.tidyVar(f, a, b, c);
                    k_button.setCustomVariable(e, g)
                } else k_config.consoleLog("k_button not defined as object!");
                else k_config.consoleLog("Skipped cv: " + k_config.getFriendly(d))
    } catch (a) {
        k_config.consoleLog("Error caught setting cvs (Code: [#1] " + a + ")"), k_config.params.k_error += "|" + a
    }
}, k_config.trim = function(a) {
    if (k_config.consoleLog('"' + a + '" : ' + typeof a), "" == a || "string" != typeof a) return a;
    a = a.replace(/^\s+/, "");
    for (var b = a.length - 1; b >= 0; b--)
        if (/\S/.test(a.charAt(b))) {
            a = a.substring(0, b + 1);
            break
        }
    return a
}, k_config.isNumber = function(a) {
    return !isNaN(parseFloat(a)) && isFinite(a)
}, k_config.toTitleCase = function(a) {
    for (var b = a.toLowerCase().split(" "), c = 0; c < b.length; c++) {
        var d = b[c].slice(0, 1).toUpperCase();
        b[c] = d + b[c].substr(1)
    }
    return b.join(" ")
}, k_config.tidyVar = function(a, b, c, d) {
    var e = a;
    if ("string" == typeof a || "number" == typeof a || "boolean" == typeof a) {
        if (e = a.toString(), "undefined" == typeof d) var d = "...";
        return k_config.site.use_case ? "lower" == k_config.site.use_case ? e = e.toLowerCase() : "upper" == k_config.site.use_case ? e = e.toUpperCase() : "title" == k_config.site.use_case && (e = k_config.toTitleCase(e)) : 1 == b ? e = e.toLowerCase() : 2 == b ? e = e.toUpperCase() : 3 == b && (e = k_config.toTitleCase(e)), e = k_config.trim(e), e = e.replace(/\s{2,}/g, " "), e = e.replace(/(:|\>) /g, ":"), e = e.replace(/ (:|\>)/g, ":"), e = e.replace(/(&rsquo;|&apos;|Õ|&#39;|&#x27;)/gi, "'"), e = e.replace(/(&amp;)/gi, "&"), e = e.replace(/(&reg;)/gi, "(r)"), e = e.replace(/(&trade;)/gi, "(tm)"), e = e.replace(/(&copy;)/gi, "(c)"), 1 == k_config.site.use_underscore && (e = e.replace(/\s{1,}/g, "_")), "number" == typeof c && e.length > c && (e = e.substr(0, c - d.length) + d, k_config.params.k_error += "|trunk(" + e.substr(0, 3) + ")"), e
    }
}, k_config.tidyPrice = function(a, b, c) {
    if (a) return "string" == typeof a && (a = Math.round(1 * a.replace("$", ""))), "number" == typeof a && "number" == typeof b && (a = Math.round(a / b) * b), "number" == typeof a && "number" == typeof c && (a = a.toFixed(c)), a
}, k_config.sortOrder = function(a, b, c) {
    "" != c && void 0 != c || (c = ";");
    var d = k_config.params[a].split(c);
    return "" != b && void 0 != b && d.push(b), d.sort(), d = d.join(c)
}, k_config.remove = function() {
    var a = ["session_start_time", "k_visit", "k_push8", "push_time_start", "k_vectors", "k_track", "k_click"];
    for (c = 0; c < a.length; c++) null != a[c] && "" != a[c] ? k_config.Clear_Cookie(a[c]) : k_config.consoleLog('CookieName "' + a[c] + '" not valid');
    k_button1 = k_button = k_push = k_push_vars = k_button_js_revision = k_push_js_revision = k_config = void 0, k_config.k_tags_created = !1;
    var b = document.getElementById("kampyleButton") ? document.getElementById("kampyleButton") : document.getElementById("kampylink"),
        d = b.parentNode;
    return d.removeChild(b), !0
}, k_config.clone = function(a, b) {
    if (null == a || "object" != typeof a) return a;
    if (a instanceof Date) {
        k_config.consoleLog("clone() copying date");
        var c = new Date;
        return c.setTime(a.getTime()), c
    }
    if (a instanceof Array) {
        k_config.consoleLog("clone() copying array");
        for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = k_config.clone(a[d]);
        return c
    }
    if (a instanceof Object) {
        k_config.consoleLog("clone() copying object: " + b);
        var c = {};
        for (var f in a) a.hasOwnProperty(f) && (k_config.consoleLog("clone() ---" + f + " : " + a[f]), c[f] = k_config.clone(a[f]));
        return c
    }
    k_config.consoleLog("clone() Error: Unable to copy. Type is not supported."), k_config.params.k_error += "|clone:error"
}, k_config.swapParams = function(a) {
    if (k_config.consoleLog("swapParams() Action is: " + a), "" == a || "undefined" == typeof a) return k_config.consoleLog("swapParams() No action defined. Return"), !1;
    var a = a.toLowerCase();
    if ("backup" == a) k_config.consoleLog("swapParams() Backing up..."), k_config.site2 = k_config.clone(k_config.site, "k_config.site"), k_config.params2 = k_config.clone(k_config.params, "k_config.params"), k_push_vars2 = k_config.clone(k_push_vars, "k_push_vars"), k_config.consoleLog("swapParams() Backup Complete.");
    else {
        if ("restore" != a) return k_config.consoleLog("swapParams() Action requested not found."), !1;
        k_config.consoleLog("swapParams() Restoring..."), k_config.site = k_config.clone(k_config.site2, "k_config.site2"), k_config.params = k_config.clone(k_config.params2, "k_config.params2"), k_push_vars = k_config.clone(k_push_vars2, "k_push_vars2"), k_config.consoleLog("swapParams() Restore Complete.")
    }
}, k_config.Set_Cookie = function(a, b, c, d, e, f) {
    var g = new Date;
    g.setTime(g.getTime()), c && (c = 1e3 * c * 60 * 60 * 24);
    var h = new Date(g.getTime() + c);
    document.cookie = a + "=" + escape(b) + (c ? ";expires=" + h.toGMTString() : "") + (d ? ";path=" + d : "") + (e ? ";domain=" + e : "") + (f ? ";secure" : "")
}, k_config.Get_Cookie = function(a) {
    if (void 0 != a) {
        var b = document.cookie.indexOf(a + "="),
            c = b + a.length + 1;
        if (!b && a != document.cookie.substring(0, a.length)) return null;
        if (b == -1) return null;
        var d = document.cookie.indexOf(";", c);
        return d == -1 && (d = document.cookie.length), unescape(document.cookie.substring(c, d))
    }
}, k_config.Clear_Cookie = function(a, b, c) {
    if (!a) return !1;
    var b = b || "undefined" != typeof k_button && k_button.get_main_domain() ? k_button.get_main_domain() : document.domain,
        c = c || "/",
        d = "",
        e = new Date;
    e.setTime(e.getTime() + -864e5), document.cookie = a + "=" + d + "; expires=" + e.toGMTString() + "; path= " + c + "; domain=" + b, console.log("Cookie Cleared: " + a + " [" + a + "=" + d + "; expires=" + e.toGMTString() + "; path= " + c + "; domain=" + b + "]")
}, k_config.get_main_domain = function() {
    var a = "",
        b = document.domain;
    if ("undefined" != document.domain && "" !== document.domain && "localhost" != document.domain) {
        var c = b.split(/\./g),
            d = c[c.length - 1],
            e = ["AERO", "ASIA", "BIZ", "CAT", "COM", "COOP", "INFO", "INT", "JOBS", "MOBI", "MUSEUM", "NAME", "NET", "ORG", "PRO", "TEL", "TRAVEL", "XXX", "EDU", "GOV", "MIL", "TV"],
            f = 3;
        for (var g in e) e[g] == d.toUpperCase() && (f = 2);
        a = c.length > f ? c.length > 3 ? c.slice(1).join(".") : c.slice(c.length - f).join(".") : b
    }
    return a
}, k_config.getFilename = function(a) {
    var b = a.substring(0, a.indexOf("#") == -1 ? a.length : a.indexOf("#"));
    return b = b.substring(0, b.indexOf("?") == -1 ? b.length : b.indexOf("?")), b.substring(b.lastIndexOf("/") + 1, b.length).replace(/(.html|.htm|.php|.aspx|.asp|.jsp|.jspx|.cfm)/g, "")
}, k_config.loadSectionConfig = function(a, b) {
    if (k_config.consoleLog("loadSectionConfig from: " + b), "" == a || "undefined" == typeof a) {
        if (k_config.consoleLog("loadSectionConfig undefined so set to k_pageParams"), "undefined" == typeof k_pageParams) return void k_config.consoleLog("loadSectionConfig - k_pageParams not found");
        a = k_pageParams
    }
    try {
        k_config.params.pageOverride = typeof a;
        var c = a;
        for (var d in c)
            if (k_config.consoleLog("[Keys:" + d + "]:[" + c[d] + "][Type:" + typeof c[d] + "]"), "invite" == d.toLowerCase() && "object" == typeof c[d]) {
                var e = c[d];
                for (var d in e) "" == e[d] && "string" == typeof e[d] || (k_config.consoleLog("IN (k_push_vars)\nKey:" + d + "\nOld:" + k_push_vars[d] + "\nNew:" + e[d], 5), k_push_vars[d] = "" + e[d])
            } else if ("button" == d.toLowerCase() && "string" != typeof c[d]) {
            var f = c[d];
            for (var d in f) k_config.consoleLog("keys: " + d + " typeof:" + typeof f[d], 5), "string" == typeof f[d] && "" == f[d] ? k_config.consoleLog("OUT!! \nKey:" + d + "\nOld:" + k_config.site[d] + "\nNew:" + f[d], 5) : (k_config.consoleLog("IN (k_button) \nKey:" + d + "\nOld:" + k_config.site[d] + "\nNew:" + f[d], 5), k_config.site[d] = "" + f[d])
        } else "" != c[d] && (k_config.params[d] = "" + c[d]);
        k_config.consoleLog("loadSectionConfig Updated: " + JSON.stringify(a))
    } catch (a) {
        k_config.params.k_error += "|loadSectionConfig error (" + a + ")"
    }
}, k_config.getParams = function(a) {
    k_config.consoleLog("Default getParams(" + a + ")"), "object" == typeof k_button ? k_config.setCustomVariables() : k_config.consoleLog("k_button not defined as object!")
}, k_config.getParamsOnRun = function(a) {
    k_config.consoleLog("Default getParamsOnRun(" + a + ")"), "object" == typeof k_button ? k_config.setCustomVariables() : k_config.consoleLog("k_button not defined as object!")
}, k_config.getMeta = function(a, b, c) {
    if (!("" != c && void 0 != c || "" != b && void 0 != b))
        for (var d = "m_", e = document.getElementsByTagName("meta"), f = e.length, g = 0; g < f; g++) "" != e[g].name && void 0 != e[g].name && (k_config.params[d + e[g].name] = e[g].content, k_config.consoleLog("getMeta adding: [" + d + e[g].name + " = " + e[g].content + "]"));
    "" != c && void 0 != c || (c = "name"), "" != b && void 0 != b || (b = "content");
    var g, h = document.getElementsByTagName("META");
    for (g = 0; g < h.length; g++)
        if (h[g].getAttribute(c) == a) return h[g].getAttribute(b);
    return null
}, k_config.setPathLevels = function(a) {
    if ("undefined" == typeof a || "undefined" == a || "" == a) return "NoPath";
    var b = a.split("/");
    for (i = 1; i < b.length; i++) k_config.params["pathLevel" + i] = b[i]
}, k_config.getQStr = function(a) {
    var b = k_config.create_ff_url_no_cookie(a, ""),
        c = b.shortUrl;
    if (c.indexOf("?") < 0) return "NoQStr";
    var d = c.substring(c.indexOf("?") + 1);
    return d
}, k_config.setAllQStr = function(a, b, c) {
    if (!a) var a = window.location.href.toLowerCase();
    if (!b) var b = k_config.params;
    var d = "undefined" == typeof c ? "" : c;
    if (a.indexOf("?") < 0) return "NoQStr";
    var e = a.substring(a.indexOf("?") + 1).split("&");
    for (i = 0; i < e.length; i++) {
        var f = e[i].split("=");
        "undefined" != typeof b[f[0]] ? b[d + f[0] + "(" + i + ")"] = f[1] : b[d + f[0]] = f[1]
    }
}, k_config.getOnPageParams = function(a, b) {
    var c = typeof a;
    if ("undefined" != c) {
        var d = "undefined" == typeof b ? "" : b;
        switch (k_config.consoleLog("getPageParams(" + a + ") Type: [" + c + "]"), c) {
            case "object":
                try {
                    for (var e in a) pair = e.split("="), k_config.params[d + pair[0]] = a[pair[0]], k_config.consoleLog("getPageParams adding: [" + pair[0] + " = " + a[pair[0]] + "]")
                } catch (b) {
                    k_config.consoleLog("getOnPageParams(" + a + ")[" + c + "](Code: " + b + ")"), k_config.params.k_error += "|" + b
                }
                break;
            case "string":
                try {
                    if ("" == d) return;
                    k_config.params[d] = a, k_config.consoleLog("getPageParams adding: [" + d + " = " + a + "]")
                } catch (b) {
                    k_config.consoleLog("getOnPageParams(" + a + ")[" + c + "](Code: " + b + ")"), k_config.params.k_error += "|" + b
                }
                break;
            default:
                k_config.consoleLog("getPageParams(" + a + ") DEFAULT CASE")
        }
    }
}, k_config.setLP_UDEs = function(a, b, c, d) {
    return "undefined" == typeof lpMTag ? (k_config.consoleLog("lpMTag Not Found"), void(k_config.params.k_error += "|lpMTag Not Found")) : (k_config.consoleLog("lpMTag Found OK!"), d = "boolean" != typeof d || d, c = "SESSION" == c.toUpperCase() || "PAGE" == c.toUpperCase() || "VISITOR" == c.toUpperCase() ? c.toUpperCase() : "SESSION", k_config.consoleLog("Setting LPVar: " + c + "VAR!" + a + "=" + b + ", " + d), void lpMTag.lpSendData(c + "VAR!" + a + "=" + b, d))
}, k_config.getLP_UDEs = function(a, b) {
    k_config.consoleLog("Function: getLP_UDEs()");
    var b = "undefined" == typeof b ? "" : b;
    try {
        if ("undefined" == typeof lpMTagConfig) return k_config.consoleLog("lpMTagConfig Not Found"), void(k_config.params.k_error += "|lpMTagConfig Not Found");
        if (k_config.consoleLog("lpMTagConfig Found OK!"), "undefined" == typeof lpMTagConfig.UDEstore) return k_config.consoleLog("lpMTagConfig.UDEstore Not Found"), void(k_config.params.k_error += "|lpMTagConfig.UDEstore Not Found");
        k_config.consoleLog("lpMTagConfig.UDEstore Found OK!");
        var c = lpMTagConfig.UDEstore.VV,
            d = "lpMTagConfig.UDEstore.VV";
        if ("undefined" == typeof c) k_config.consoleLog(d + " Not Found");
        else {
            k_config.consoleLog(d + " Found OK! (" + c.length + ")");
            for (var e = 0; e < c.length; e++) k_config.getOnPageParams(unescape(c[e].split("=")[1]), unescape(b + c[e].split("=")[0]).toLowerCase())
        }
        var c = lpMTagConfig.UDEstore.SV,
            d = "lpMTagConfig.UDEstore.SV";
        if ("undefined" == typeof c) k_config.consoleLog(d + " Not Found");
        else {
            k_config.consoleLog(d + " Found OK! (" + c.length + ")");
            for (var e = 0; e < c.length; e++) k_config.getOnPageParams(unescape(c[e].split("=")[1]), unescape(b + c[e].split("=")[0]).toLowerCase())
        }
        var c = lpMTagConfig.UDEstore.PV,
            d = "lpMTagConfig.UDEstore.PV";
        if ("undefined" == typeof c) k_config.consoleLog(d + " Not Found");
        else {
            k_config.consoleLog(d + " Found OK! (" + c.length + ")");
            for (var e = 0; e < c.length; e++) k_config.getOnPageParams(unescape(c[e].split("=")[1]), unescape(b + c[e].split("=")[0]).toLowerCase())
        }
    } catch (a) {
        k_config.consoleLog("getLP_UDEs(1) Error: (" + a + ")"), k_config.params.k_error += "|getLP_UDEs(1) " + a
    }
    k_config.consoleLog("End getLP_UDEs")
}, k_config.getCookieList = function(a) {
    var a = "undefined" != typeof a ? a : "";
    if ("undefined" != typeof k_config.cookieList) {
        k_config.consoleLog("Fetching CookieList!");
        var b = k_config.cookieList;
        for (c = 0; c < b.length; c++)
            if (null != b[c] && "" != b[c]) {
                var d = k_config.Get_Cookie(b[c]);
                k_config.params[a + b[c]] = d, k_config.consoleLog("CookieList[" + c + "] " + b[c] + " : " + d)
            } else k_config.consoleLog("CookieList[" + c + '] cookieName "' + b[c] + '" not valid')
    } else k_config.consoleLog("No Cookies!")
}, k_config.getCrumbs = function(a, b) {
    function c(a) {
        var b = a.childNodes,
            d = b.length;
        k_config.consoleLog("getCrumbs: Nodes found:" + d);
        for (var f = 0; f < d; f++)
            if (3 == b[f].nodeType) {
                if (!b[f].nodeValue.match(/^[\s]*$/)) {
                    var g = b[f].nodeValue.replace(/(\||&amp;| |\'|\r\n|\n|\r|[\s\xA0])/g, "");
                    k_config.consoleLog("getCrumbs: Node found: " + g), k_config.crumbArray.push(g)
                }
            } else "script" != b[f].nodeName.toLowerCase() && c(b[f])
    }
    try {
        if (c(a), b) return k_config.consoleLog("getCrumbs: returning this:"), k_config.consoleLog(k_config.crumbArray[b]), k_config.crumbArray[b]
    } catch (a) {
        k_config.consoleLog("Breadcrumb error (Code: " + a + ")", 1), k_config.params.k_error += "|" + a
    }
}, k_config.getBreadcrumbs = function(a, b, c) {
    if ("" != a && void 0 != a && a) {
        if ("" != b && void 0 != b && b || (b = ">"), void 0 == c && (c = !1), k_config.crumbArray = [], k_config.params.navFull = "noBreadcrumbs", "object" == typeof a) {
            k_config.consoleLog("getCrumbs: Type/Object: " + typeof a, 21);
            var d = document.getElementById(a);
            k_config.getCrumbs(d)
        } else if ("string" == typeof a) {
            k_config.consoleLog("getCrumbs: Type/String: " + typeof a, 21);
            try {
                var e = a.split(b),
                    f = e.length;
                k_config.consoleLog("getCrumbs: Crumbs found: " + f, 21);
                for (var g = 0; g < f; g++)
                    if (!e[g].match(/^[\s]*$/)) {
                        var h = e[g];
                        k_config.consoleLog("getCrumbs: Crumb found: " + h, 21), k_config.crumbArray.push(h)
                    }
            } catch (a) {
                k_config.consoleLog("Breadcrumb error (Code: " + a + ")", 21), k_config.params.k_error += "|" + a
            }
        }
        1 == c || "true" == c ? (k_config.consoleLog("getCrumbs: removeFirst=" + c, 21), k_config.crumbArray.splice(0, 1)) : k_config.consoleLog("getCrumbs: removeFirst=" + c, 21), k_config.consoleLog("getCrumbs: crumbArray: " + k_config.crumbArray, 21), "undefined" != typeof k_config.crumbArray[0] && (k_config.params.navFull = "" + ("undefined" != typeof k_config.crumbArray[0] && "" != k_config.crumbArray[0] ? k_config.crumbArray[0] : "") + ("undefined" != typeof k_config.crumbArray[0] && "undefined" != typeof k_config.crumbArray[1] && "" != k_config.crumbArray[0] ? ":" : "") + ("undefined" != typeof k_config.crumbArray[1] ? k_config.crumbArray[1] : "") + ("undefined" != typeof k_config.crumbArray[2] ? ":" + k_config.crumbArray[2] : "") + ("undefined" != typeof k_config.crumbArray[3] ? ":" + k_config.crumbArray[3] : "") + ("undefined" != typeof k_config.crumbArray[4] ? ":" + k_config.crumbArray[4] : "") + ("undefined" != typeof k_config.crumbArray[5] ? ":" + k_config.crumbArray[5] : "") + ("undefined" != typeof k_config.crumbArray[6] ? ":" + k_config.crumbArray[6] : "")),
        k_config.consoleLog("getCrumbs: navFull=" + k_config.params.navFull, 21), "undefined" != typeof k_config.crumbArray[0] && "" != k_config.crumbArray[0] && (0 == c || "false" == c ? (k_config.consoleLog("getCrumbs: removeFirst=" + c, 21), k_config.params.navLevel0 = "undefined" != typeof k_config.crumbArray[0] ? k_config.crumbArray[0] : "") : k_config.consoleLog("getCrumbs: removeFirst=" + c, 21), k_config.params.navLevel1 = "undefined" != typeof k_config.crumbArray[0] && "" != k_config.crumbArray[0] ? k_config.crumbArray[0] : "", k_config.params.navLevel2 = "undefined" != typeof k_config.crumbArray[1] && "" != k_config.crumbArray[1] ? k_config.crumbArray[1] : "", k_config.params.navLevel3 = "undefined" != typeof k_config.crumbArray[2] && "" != k_config.crumbArray[2] ? k_config.crumbArray[2] : "", k_config.params.navLevel4 = "undefined" != typeof k_config.crumbArray[3] && "" != k_config.crumbArray[3] ? k_config.crumbArray[3] : "", k_config.params.navLevel5 = "undefined" != typeof k_config.crumbArray[4] && "" != k_config.crumbArray[4] ? k_config.crumbArray[4] : "", k_config.params.navLevel6 = "undefined" != typeof k_config.crumbArray[5] && "" != k_config.crumbArray[5] ? k_config.crumbArray[5] : "")
    }
}, k_config.searchEngine = function() {
    for (var a = {}, b = [
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
        ], c = b.length, d = document.referrer, e = 0; e < c; e++)
        if (k_config.consoleLog("Check: [" + e + "] " + b[e][1]), d.indexOf(b[e][0]) > -1) {
            if (k_config.consoleLog("Match: [" + e + "] " + b[e][0]), k_config.params.refSearchEng = b[e][1], k_config.setAllQStr(d, a), "undefined" == typeof a[b[e][2]]) {
                k_config.consoleLog("query string not found");
                continue
            }
            k_config.params.refSearchQ = a[b[e][2]].replace(/\+|%20/g, " "), "undefined" != typeof a.fr & "" != a.fr && (k_config.params.refSearchEng2 = a.fr);
            break
        }
    k_config.params.refGclid = window.location.href ? window.location.href.indexOf("gclid=") > -1 : "NoURL"
}, k_config.getGAcookies = function(a) {
    gaParams = {};
    var b = "undefined" == typeof a ? gaParams : a;
    if (null !== k_config.Get_Cookie("__utmz")) {
        b._utmz = k_config.Get_Cookie("__utmz"), b._utma = k_config.Get_Cookie("__utma"), b._utmv = k_config.Get_Cookie("__utmv");
        var c = b._utmz.split("|"),
            d = c[0].split(".");
        k_config.params.utmz_timestamp = d[1], k_config.params.utmz_numberOfSessions = d[2], k_config.params.utmz_visitSources = d[3];
        var e = d[4].split("=");
        for (k_config.params[e[0]] = e[1], i = 1; i < c.length; i++) {
            var f = c[i].split("=");
            k_config.params[f[0]] = f[1]
        }
    }
}, k_config.getTimeOnSite = function() {
    if ("undefined" == typeof k_config.params.utmz_timestamp && null != k_config.Get_Cookie("__utmz") && (k_config.consoleLog('Getting "utmz" timestamp cookie'), k_config.getGAcookies()), "undefined" != typeof k_config.params.utmz_timestamp) {
        k_config.consoleLog('Using "utmz" timestamp cookie');
        var a = 1e3 * k_config.params.utmz_timestamp
    } else {
        if (null === k_config.Get_Cookie("session_start_time")) return k_config.consoleLog("Neither timestamp cookie found"), !1;
        k_config.consoleLog('Using Kampyle "session_start_time" timestamp cookie');
        var a = k_config.Get_Cookie("session_start_time")
    }
    var b = (new Date).getTime(),
        c = Math.round((b - a) / 1e3),
        d = Math.floor(c / 3600),
        e = Math.floor((c - 3600 * d) / 60),
        f = Math.floor(c - 3600 * d - 60 * e);
    d = d < 10 ? "0" + d : d, e = e < 10 ? "0" + e : e, f = f < 10 ? "0" + f : f, k_config.params.time_OnSite = d + ":" + e + ":" + f, k_config.params.time_OnSiteInSecs = c, k_config.params.time_OnSiteInMins = Math.floor(c / 60)
}, k_config.sessionCounter = function() {
    if ("undefined" == typeof k_config.params.utmz_numberOfSessions && null != k_config.Get_Cookie("__utmz") && (k_config.consoleLog('Getting "utmz" session count cookie'), k_config.getGAcookies()), "undefined" != typeof k_config.params.utmz_numberOfSessions) {
        k_config.consoleLog('Using "utmz" session count cookie');
        var a = k_config.params.utmz_numberOfSessions
    } else {
        if (null === k_config.Get_Cookie("k_visit")) return k_config.consoleLog("Neither session count cookie found"), !1;
        k_config.consoleLog('Using Kampyle "k_visit" session count cookie');
        var a = k_config.Get_Cookie("k_visit")
    }
    k_config.params.sessionCounter = a
}, k_config.getPlugins = function(a) {
    var c, d, e, f, g, b = [],
        j = navigator.plugins,
        k = j.length;
    for (c = 0; c < k; c++)
        if (d = j[c], b[c] = d.name, k_config.consoleLog(c + " " + d.name, 8), "" != d.description && d.description != d.name) {
            d.shortDesc = d.description.replace(d.name, "$");
            var l = d.name.length;
            if (d.shortDesc.length > l) {
                var m = new RegExp("[^A-Za-z$s]", "g"),
                    n = new RegExp("[0-9s]", "g"),
                    o = d.shortDesc.substr(l - 3).split(" "),
                    p = "";
                for (g in o) try {
                    k_config.consoleLog(c + " " + g + " looking for numbers... " + o[g], 8), f = o[g].match(n), null != f && (e = o[g].match(m), e && (k_config.consoleLog(c + " match!  " + e, 8), p += o[g] + " "))
                } catch (a) {
                    k_config.consoleLog("plugin_error (" + a + ")", 8), k_config.params.k_error += "|plugin_error(" + a + ")"
                }
                p = p.replace(/^\s\s*\--added this to avoid closing comment tag   /, "").replace(/\s\s*$/, "");
                var q = "(" + d.shortDesc.substr(0, l - 3) + "..." + p + ")";
                b[c] += q, k_config.consoleLog(c + " add " + q, 8)
            } else k_config.consoleLog(c + " = Short enough! Adding original", 8), b[c] += "(" + d.shortDesc + ")"
        } else k_config.consoleLog(c + " No description " + d.description, 8);
    k_config.params.plugins = b.toString(), k_config.consoleLog(k_config.params.plugins, 8)
}, k_config.getProductName = function(a, b, c) {
    if (!c) var c = 0;
    try {
        if (a && b) {
            var d = a.getElementsByTagName(b),
                e = d[c].innerHTML.replace(/\&amp;/g, "&");
            return e
        }
        if (a) {
            var e = a.innerHTML.replace(/\&amp;/g, "&");
            return e
        }
        return "Not Found"
    } catch (a) {
        k_config.consoleLog("getProductName error (Code: " + a + ")", 1), k_config.params.k_error += "|getProductName " + a
    }
}, k_config.lightboxLoad = function() {
    try {
        "undefined" != typeof k_config.site.url_lightbox_css && (k_config.consoleLog("LIGHTBOX - Loading CSS: " + k_config.tidyProtocolLoad(!0) + k_config.site.url_lightbox_css), k_config.loadjscssfile(k_config.tidyProtocolLoad(!0) + k_config.site.url_lightbox_css, "css"))
    } catch (a) {
        k_config.consoleLog("LIGHTBOX - CSS Load Error (" + a + ")")
    }
    try {
        k_config.consoleLog("LIGHTBOX - Lightbox JS: " + k_config.tidyProtocolLoad(!0) + k_config.site.url_lightbox_js), k_config.loadScript(k_config.tidyProtocolLoad(!0) + k_config.site.url_lightbox_js, "jQuery.ui", k_config.lightboxReady)
    } catch (a) {
        k_config.consoleLog("LIGHTBOX - JS Load Error (" + a + ")")
    }
}, k_config.lightboxReady = function() {
    k_config.consoleLog("LIGHTBOX - Assigning click event to #kampylink"), $(document).ready(function() {
        var a = $("<div></div>").html("This dialog will show every time!").dialog({
            autoOpen: !1,
            title: "Basic Dialog"
        });
        $("#" + k_config.site.buttonBindToId).click(function() {
            return a.dialog("open"), !1
        })
    })
}, k_config.colorboxInit = function() {}, k_config.colorboxBindToButton = function() {}, k_config.cookieList = ["k_click", "", ""], k_config.site = {
    site_name: "Clarks",
    site_shortName: "Clarks",
    site_code: "9706554",
    button_form_id: "117052-2612",
    buttonClass: "k_override_float k_override_bottom k_right",
    bindToReady: !0,
    lang: "en",
    serverRegion: "www.kampyle.com",
    use_underscore: !0,
    use_case: "lower",
    lightbox: !1,
    testMode: !1,
    createTags: !0,
    hideButton: !1,
    addProtocol: !0,
    url_css: "assets.kampyle.com/clients/9706554/css/k_button.css",
    url_kbutton: "assets.kampyle.com/clients/9706554/js/k_button.js",
    url_kpush: "assets.kampyle.com/clients/9706554/js/k_push.js",
    url_buttonImage: "assets.kampyle.com/clients/9706554/images/feedback.gif",
    url_inviteFolder: "assets.kampyle.com/clients/9706554/images/",
    forceFormProtocol: "",
    forceLoadProtocol: "",
    forceLoad_css: "",
    forceLoad_push: "",
    forceLoad_button: "",
    revision: "v7.063_18Nov15"
}, k_config.tidyProtocolForm = function(a) {
    var b = "https:" == window.location.protocol ? "https:" : "http:";
    return "https" == k_config.site.forceFormProtocol || "https:" == k_config.site.forceFormProtocol || "https:/" == k_config.site.forceFormProtocol || "https://" == k_config.site.forceFormProtocol ? b = "https:" : "http" != k_config.site.forceFormProtocol && "http:" != k_config.site.forceFormProtocol && "http:/" != k_config.site.forceFormProtocol && "http://" != k_config.site.forceFormProtocol || (b = "http:"), b = 1 != a && "true" != a || "" == b ? b : b + "//"
}, k_config.tidyProtocolLoad = function(a) {
    var b = "https:" == window.location.protocol ? "https:" : "http:";
    return 0 != k_config.site.addProtocol && "false" != k_config.site.addProtocol || (b = ""), "https" == k_config.site.forceLoadProtocol || "https:" == k_config.site.forceLoadProtocol || "https:/" == k_config.site.forceLoadProtocol || "https://" == k_config.site.forceLoadProtocol ? b = "https:" : "http" != k_config.site.forceLoadProtocol && "http:" != k_config.site.forceLoadProtocol && "http:/" != k_config.site.forceLoadProtocol && "http://" != k_config.site.forceLoadProtocol || (b = "http:"), 0 != k_config.site.addProtocol && "false" != k_config.site.addProtocol || "" == b || (k_config.params.k_error += "|addProtocolOverridden", k_config.consoleLog("addProtocol: [" + k_config.site.addProtocol + "] was overridden by protocolLoad: [" + k_config.site.protocolLoad + "]")), b = 1 != a && "true" != a || "" == b ? b : b + "//"
}, k_push_vars = {
    display_after_on_page: 30,
    display_after: 180,
    view_percentage: 0,
    popup_font_color: "#000000",
    popup_background: "#FFFFFF",
    popup_separator: "#FFFFFF",
    header: '<p style="height:50px;"><img src=https://www.kampyle.com/logos/ff_logos/cf7c4cab8a68f8eef12e1be7e4a85160.png /></p>How did we do today?',
    question: "Please leave feedback so we can improve our website",
    footer: "Thanks for your time!",
    remind: " ",
    remind_font_color: "#3882C3",
    yes: "Sure",
    no: "Cancel",
    text_direction: "ltr",
    images_dir: k_config.tidyProtocolLoad(!0) + k_config.site.url_inviteFolder,
    yes_background: "#004a21",
    no_background: "#7F7F7F",
    site_code: k_config.site.site_code,
    ff_link_id: "k_popup_link",
    invite_form_id: "117052-2612"
}, k_config.friendlyNames = {
    k_error: "errorLog",
    navLevel0: "domain",
    refDiffHost: "landingPage"
}, k_config.getTestmodeOverride = function() {
    if ("undefined" != typeof k_config.site.testMode && "" != k_config.site.testMode || (k_config.site.testMode = !1), db_url = /k_testmode=/i, db_test = window.location.href.match(db_url), null != db_test) {
        k_config.testModeList = {}, k_config.setAllQStr("", k_config.testModeList);
        var a, b, c;
        for (var a in k_config.testModeList) {
            var b = /k_testmode/i,
                c = a.match(b);
            if (null != c) switch (k_config.consoleLog("URL testmode parameter [" + a + " = " + k_config.testModeList[a] + "]"), k_config.testModeList[a]) {
                case "0":
                case "false":
                    k_config.site.testMode = 0, k_config.consoleLog("testMode set [to false] from URL: " + k_config.testModeList[a], 67);
                    break;
                case "1":
                case "true":
                    k_config.site.testMode = 1, k_config.consoleLog("testMode set [to true] from URL: " + k_config.testModeList[a], 67);
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
                        k_config.isNumber(k_config.testModeList[a]) && k_config.testModeList[a].length <= 3 ? (k_config.site.testMode = k_config.testModeList[a], k_config.consoleLog("testMode set from URL: " + k_config.testModeList[a], 67)) : k_config.consoleLog("testMode found in URL but not valid range or keyword: " + k_config.testModeList[a], 67);
                        break
                    } catch (b) {
                        k_config.consoleLog("testMode unsuccessfully detected in URL: " + k_config.testModeList[a] + " (" + b + ")", 67)
                    }
            }
        }
    } else k_config.consoleLog("testMode not detected in URL", 67)
}, k_config.getViewport = function() {
    var a = window,
        b = document,
        c = b.documentElement,
        d = b.getElementsByTagName("body")[0],
        e = a.innerWidth || c.clientWidth || d.clientWidth,
        f = a.innerHeight || c.clientHeight || d.clientHeight;
    k_config.params.windowWidth = e, k_config.params.windowHeight = f, k_config.params.windowSize = e + "x" + f
}, k_config.getParamsOnRun = function(a) {
    k_config.consoleLog("getParamsOnRun(" + a + ")"), k_config.params.fileName = k_config.getFilename(document.location.href);
    var b = window.location.pathname;
    k_config.setPathLevels(b), k_config.params.hostName = window.location.hostname, k_config.params.pagePath = window.location.pathname, k_config.params.pageQStr = window.location.search, k_config.params.pageHash = window.location.hash.substr(1), k_config.params.pageTitle = document.title, k_config.setAllQStr(k_config.params.pageQStr, "", "url_"), k_config.searchEngine(), k_config.getGAcookies(), k_config.sessionCounter(), k_config.getCookieList("cookie_"), 1 == k_config.site.hasLivePerson && (k_config.setLP_UDEs("fbButtonIsShown", !k_config.site.hideButton, "SESSION"), k_config.getLP_UDEs("", "LP_")), k_config.loadSectionConfig("", "getParamsOnRun()")
}, k_config.getParams = function(a, b) {
    var c = new Date;
    if ("object" == typeof b) {
        k_config.consoleLog("getParams() with paramsObj");
        var d = b
    } else {
        k_config.consoleLog("getParams() without paramsObj - will default to k_pageParams");
        var d = ""
    }
    k_config.consoleLog("Custom getParams(" + a + ")"), "undefined" != typeof k_config.elemClicked, 1, k_config.params.hostName = window.location.hostname, k_config.params.pagePath = window.location.pathname, k_config.params.pageQStr = window.location.search, k_config.params.pageHash = window.location.hash.substr(1), k_config.params.pageTitle = document.title, k_config.params.fileName = k_config.getFilename(document.location.href);
    var e = window.location.pathname;
    k_config.setPathLevels(e), k_config.setAllQStr(k_config.params.pageQStr, "", "url_");
    var f = document.referrer;
    k_config.params.refHostName = f ? f.match(/:\/\/(.[^\/]+)/)[1] : "direct", k_config.params.refURL = f ? unescape(f) : "direct", k_config.params.refFilename = f ? k_config.getFilename(f) : "direct", k_config.params.refDiffHost = f ? k_config.params.refHostName == k_config.params.hostName ? "SameHost" : "DiffHost" : "direct", k_config.getCookieList("cookie_"), k_config.getViewport(), k_config.getOnPageParams(), k_config.loadSectionConfig(d, "getParams()"), k_config.site.hasLivePerson && (k_config.setLP_UDEs("fbButtonIsShown", !k_config.site.hideButton, "SESSION"), k_config.getLP_UDEs("", "LP_")), k_config.getTimeOnSite(), "undefined" != typeof s && 1 != k_config.getSCparams_done && k_config.getSCparams(), "object" == typeof window.sessionCamRecorder && (k_config.params.SessionCam = window.sessionCamRecorder.sessionId()), "undefined" != typeof $('td.t-basket-grand-total[headers="t-basket-grand-total"]').html() && (k_config.params.cartValueExact = $('td.t-basket-grand-total[headers="t-basket-grand-total"]').html()), "object" == typeof k_button ? k_config.setCustomVariables(0, 150) : k_config.consoleLog("k_button not defined as object!");
    var g = new Date - c;
    k_config.consoleLog("TIMER: getParams(" + a + ") took: " + g + "ms")
}, k_config.loadCallback = function(a) {
    k_config.consoleLog("Custom loadCallback(" + a + ")"), "undefined" != typeof k_push && (k_config.consoleLog("Running k_push.popup_init()"), k_push.popup_init())
}, k_config.buttonLogic = function(a) {
    k_config.consoleLog("Custom buttonLogic()", 88);
    var b = 100,
        c = 0,
        d = k_config.Get_Cookie("k_click") ? k_config.Get_Cookie("click") : 0;
    k_config.site.view_percentage ? k_config.site.view_percentage = k_config.site.view_percentage && k_config.site.view_percentage >= 0 && k_config.site.view_percentage <= 100 ? k_config.site.view_percentage : b : k_config.site.view_percentage = b, k_config.site.hideButtonMaxClicks ? k_config.site.hideButtonMaxClicks = k_config.site.hideButtonMaxClicks && k_config.site.hideButtonMaxClicks >= 0 && k_config.site.hideButtonMaxClicks <= 100 ? k_config.site.hideButtonMaxClicks : c : k_config.site.hideButtonMaxClicks = c;
    var e = Math.round(100 * Math.random());
    return 1 == k_config.site.forceButton || "true" == k_config.site.forceButton ? (k_config.consoleLog("forceButton = true - overriding all other logic", 88), k_config.site.hideButton = !1, !0) : (1 == k_config.site.createTags || "true" == k_config.site.createTags) && d < k_config.site.hideButtonMaxClicks || 0 == k_config.site.hideButtonMaxClicks ? (k_config.consoleLog("\n==================================\nreturn true / hideButtonMaxClicks not exceeded (" + d + "|" + k_config.site.hideButtonMaxClicks + ")\n==================================", 88), (1 == k_config.site.createTags || "true" == k_config.site.createTags) && e < k_config.site.view_percentage ? (k_config.consoleLog("\n==================================\nreturn true / show button (" + e + "|" + k_config.site.view_percentage + ")\n==================================", 88), !0) : (k_config.consoleLog("\n==================================\nreturn false / hide button (" + e + "|" + k_config.site.view_percentage + ")\n==================================", 88), !1)) : (k_config.consoleLog("\n==================================\nreturn false / hideButtonMaxClicks has been exceeded (" + d + "|" + k_config.site.hideButtonMaxClicks + ")\n==================================", 88), !1)
}, k_config.handlerButtonClick = function() {
    k_config.consoleLog("Custom handlerButtonClick()");
    var a = "k_click",
        b = k_config.get_main_domain();
    if (k_config.Get_Cookie(a) && k_config.isNumber(k_config.Get_Cookie(a))) {
        var c = 1 * k_config.Get_Cookie(a);
        k_config.Set_Cookie(a, c + 1, 0, "/", b), k_config.consoleLog("\n==================================\nupdating cookie (" + k_config.Get_Cookie(a) + "|" + k_config.site.hideButtonMaxClicks + ")\n==================================", 88)
    } else k_config.Set_Cookie(a, 1, 0, "/", b), k_config.consoleLog("\n==================================\nAdding New Cookie... (" + k_config.Get_Cookie(a) + "|" + k_config.site.hideButtonMaxClicks + ")\n==================================", 88);
    k_config.Get_Cookie(a) >= k_config.site.hideButtonMaxClicks && 0 != k_config.site.hideButtonMaxClicks && (k_config.consoleLog("\n==================================\nhide button now! / hideButtonMaxClicks has been exceeded (" + k_config.Get_Cookie(a) + "|" + k_config.site.hideButtonMaxClicks + ")\n==================================", 88), k_config.site.hideButton = !0, document.getElementById(k_config.site.buttonBindToId).style.display = "none", 1 == k_config.site.hasLivePerson && k_config.setLP_UDEs("fbButtonIsShown", !k_config.site.hideButton, "SESSION"))
}, k_config.getSCparams = function() {
    if (k_config.consoleLog("getSCparams()"), "undefined" != typeof s) {
        var a = s.pageName,
            b = "pageName";
        "undefined" == typeof s ? "" : "undefined" == typeof a ? "" : k_config.params[b] = k_config.tidyVar(a, 1);
        var a = s.channel,
            b = "contentType";
        "undefined" == typeof s ? "" : "undefined" == typeof a ? "" : k_config.params[b] = k_config.tidyVar(a, 1);
        var a = s.server,
            b = "server";
        "undefined" == typeof s ? "" : "undefined" == typeof a ? "" : k_config.params[b] = k_config.tidyVar(a, 1);
        var a = s.hier1,
            b = "hier1";
        "undefined" == typeof s ? "" : "undefined" == typeof a ? "" : k_config.params[b] = k_config.tidyVar(a, 1);
        var a = s.products,
            b = "products";
        "undefined" == typeof s ? "" : "undefined" == typeof a ? "" : k_config.params[b] = k_config.tidyVar(a, 1);
        var a = s.prop59,
            b = "refPageName";
        "undefined" == typeof s ? "" : "undefined" == typeof a ? "" : k_config.params[b] = k_config.tidyVar(a, 1);
        var c = s,
            d = s.hier1;
        k_config.params.hierFull = "undefined" == typeof c ? "" : k_config.tidyVar(d);
        var e = "undefined" == typeof c ? "" : "undefined" == typeof d ? "" : k_config.tidyVar(d, 1);
        k_config.params.hierLevel1 = "undefined" == typeof e ? "" : e.split(":")[0], k_config.params.hierLevel2 = "undefined" == typeof e ? "" : e.split(":")[1], k_config.params.hierLevel3 = "undefined" == typeof e ? "" : e.split(":")[2], k_config.params.hierLevel4 = "undefined" == typeof e ? "" : e.split(":")[3], k_config.params.hierLevel5 = "undefined" == typeof e ? "" : e.split(":")[4], k_config.params.customerName = "undefined" == typeof s ? "" : s.prop25, k_config.getSCparams_done = 1
    } else k_config.params.k_error += "|getSCparams: s=undefined"
}, k_config.siteSections = {
    Mobile: {
        siteSection: "Mobile",
        re: "mobile",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "117052-2612",
            display_after_on_page: 30,
            display_after: 180,
            view_percentage: 0
        },
        button: {
            buttonClass: "k_override_float k_override_middle k_right",
            url_buttonImage: "assets.kampyle.com/clients/9706554/images/clarks_mobile.gif",
            button_form_id: "117052-2612",
            createTags: !0,
            hideButton: !1
        }
    },
    Funnel_Step1: {
        funnelStep: "Step1_Product_Page",
        siteSection: "Funnel",
        re: "/p/",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "117052-2612",
            display_after_on_page: 30,
            display_after: 180,
            view_percentage: 0
        },
        button: {
            button_form_id: "117052-2612",
            createTags: !0,
            hideButton: !1
        }
    },
    Funnel_Step2: {
        funnelStep: "Step2_Basket",
        siteSection: "Funnel",
        re: "/basket(rsp)?",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "117052-2612",
            display_after_on_page: 30,
            display_after: 180,
            view_percentage: 0
        },
        button: {
            button_form_id: "117052-2612",
            createTags: !0,
            hideButton: !1
        }
    },
    Funnel_Step3: {
        funnelStep: "Step3_Login",
        siteSection: "Funnel",
        re: "/checkout/login(rsp)?",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "117052-2612",
            display_after_on_page: 30,
            display_after: 180,
            view_percentage: 0
        },
        button: {
            button_form_id: "117052-2612",
            createTags: !0,
            hideButton: !1
        }
    },
    Funnel_Step6: {
        funnelStep: "Step6_Confirmation",
        siteSection: "Funnel",
        re: "/checkout/confirmation(rsp)?",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "117052-2612",
            display_after_on_page: 30,
            display_after: 180,
            view_percentage: 0
        },
        button: {
            button_form_id: "117052-2612",
            createTags: !0,
            hideButton: !1
        }
    },
    Funnel_Step6_Error: {
        funnelStep: "Step6_Error_Page",
        siteSection: "Funnel",
        re: "/checkout/confirmation(rsp)??rbserror=true",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "117052-2612",
            display_after_on_page: 30,
            display_after: 180,
            view_percentage: 0
        },
        button: {
            button_form_id: "117052-2612",
            createTags: !0,
            hideButton: !1
        }
    },
    Funnel_Step4: {
        funnelStep: "Step4_Checkout",
        siteSection: "Funnel",
        re: "/checkout(rsp)?",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "117052-2612",
            display_after_on_page: 30,
            display_after: 180,
            view_percentage: 0
        },
        button: {
            button_form_id: "117052-2612",
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
}, k_config.isMobile = {
    Android: function() {
        return navigator.userAgent.toLowerCase().match(/android/i)
    },
    BlackBerry: function() {
        return navigator.userAgent.toLowerCase().match(/blackberry|bb10/i)
    },
    iOS: function() {
        return navigator.userAgent.toLowerCase().match(/iphone|ipod/i)
    },
    Windows: function() {
        return navigator.userAgent.toLowerCase().match(/windows phone/i)
    },
    any: function() {
        return this.Android() || this.BlackBerry() || this.iOS() || this.Windows()
    }
}, k_config.runtimeWrapper = function() {
    k_config.consoleLog("--- Start of runtimeWrapper ---", 22), k_config.getParamsOnRun("BeforeEvalPage"), 1 == k_config.site.hasLivePerson && ("string" == typeof k_config.params.lp_pagename ? k_config.evalPage(k_config.params.lp_pagename.toLowerCase(), "re") : (k_config.params.k_error += "|lp_pagename Not Found", k_config.evalPage(k_chk, k_ptt))), k_config.consoleLog("EVALPAGE ----- URL"), k_config.evalPage(window.location.href, "re"), "undefined" != typeof s && (k_config.consoleLog("EVALPAGE ----- pageName"), k_config.evalPage(s.pageName, "pageName")), k_config.isMobile.any() ? (k_config.consoleLog("EVALPAGE ----- Kampyle:Mobile"), k_config.evalPage("mobile", "re")) : (k_config.consoleLog("EVALPAGE ----- URL"), k_config.evalPage(window.location.href, "re")), k_config.loadSectionConfig("", "Runtime"), "undefined" != typeof k_button && (k_config.k_button_done = 1), "true" == k_config.site.createTags || 1 == k_config.site.createTags ? ("true" == k_config.site.lightbox || 1 == k_config.site.lightbox ? k_config.consoleLog("Lightbox - DISABLED") : k_config.consoleLog("Lightbox - Not Enabled"), 0 == k_config.buttonLogic() ? (k_config.consoleLog("hideButton changed to true", 88), k_config.site.hideButton = !0) : k_config.consoleLog("hideButton unchanged (" + k_config.site.hideButton + ")", 88), "false" == k_config.site.bindToReady || 0 == k_config.site.bindToReady ? (k_config.consoleLog("RUN NOW - bindToReady=" + k_config.site.bindToReady, 88), k_config.getParams(), k_config.createKampyleTags()) : (k_config.consoleLog("BIND NOW / RUN LATER - bindToReady=" + k_config.site.bindToReady, 88), k_config.bindReady(function() {
        k_config.getParams(), k_config.createKampyleTags()
    }))) : k_config.consoleLog("TERMINATED. createTags=" + k_config.site.createTags + " so createKampyleTags() was not executed!", 88), k_config.totalTime = new Date - k_config.startTime, k_config.params.k_loadtimeMS = k_config.totalTime, k_config.consoleLog("TIMER: Total Runtime: " + k_config.totalTime + "ms", 22), k_config.consoleLog("--- End of runtimeWrapper ---", 22)
}, k_config.getTestmodeOverride(), k_config.consoleLog("--- RUNTIME ---", 22), k_config.runtimeWrapper(), "undefined" != typeof k_button;
