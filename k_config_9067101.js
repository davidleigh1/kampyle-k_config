// Source: http://assets.kampyle.com/clients/9067101/d/k_config.js

window.k_sc_param = {
    version: 1.1
};
var aAttr = document.getElementsByClassName("feedback-loop__tab")[0],
    att = document.createAttribute("id");
att.value = "kampylink";
aAttr.setAttributeNode(att);
"undefined" == typeof console && (console = {
    log: function() {}
});
if (-1 < document.location.search.indexOf("k_stop=true") || -1 < document.location.search.indexOf("k_stop=1")) throw Error("This is not an error. Loading aborted.");
k = {};
k.startTime = new Date;
k.site = {};
k.site.bindToReady = !0;
k.site.use_case = null;
k.site.use_underscore = !0;
k.getSCparams_done = 0;
k.elemClicked = {};
k.params = {
    navLevel0: window.location.hostname,
    navLevel1: null,
    navLevel2: null,
    navLevel3: null,
    navLevel4: null,
    navLevel5: null,
    navFull: null,
    siteSection: null,
    k_error: "",
    definedBy: "organic"
};
k.crumbArray = [];
"undefined" == typeof k.k_tags_created && (k.k_tags_created = !1);
k.cLog = function(a, b) {
    if ("undefined" === typeof a || "null" === a || "" === a) a = "NO MESSAGE";
    1 != k.site.testMode && 1 != k.site.testMode && k.site.testMode != b || console.log("KC: " + a)
};
k.loadScript = function(a, b, d) {
    k.cLog("loadScript() src:" + a + " obj:" + b);
    if ("" == a || void 0 == a || "http://" == a || "https://" == a) return k.params.k_error += "|loadScript(" + a + ")", k.cLog("loadScript return (src == " + a + ")"), !1;
    var e = document.getElementsByTagName("head")[0],
        f = document.createElement("script");
    done = !1;
    f.setAttribute("src", a);
    f.setAttribute("type", "text/javascript");
    f.setAttribute("charset", "utf-8");
    f.onload = f.onreadstatechange = function() {
        done || this.readyState && "loaded" != this.readyState && "complete" !=
            this.readyState || (done = !0, f.onload = f.onreadystatechange = null, d && d());
        "undefined" != typeof b && (k.cLog(b + " loaded ok!"), k.getParams("on " + b + "Load"), k.loadCallback(b));
        "undefined" == typeof b && k.cLog("ERROR LOADING " + b + "!")
    };
    e.insertBefore(f, e.firstChild)
};
k.loadjscssfile = function(a, b) {
    if ("" == a || void 0 == a || "http://" == a || "https://" == a) return k.params.k_error += "|loadScript(" + a + ")", k.cLog("loadScript return(" + a + ")"), !1;
    if ("js" == b) {
        var d = document.createElement("script");
        d.setAttribute("type", "text/javascript");
        d.setAttribute("src", a)
    } else "css" == b && (d = document.createElement("link"), d.setAttribute("rel", "stylesheet"), d.setAttribute("type", "text/css"), d.setAttribute("href", a));
    "undefined" != typeof d && document.getElementsByTagName("head")[0].appendChild(d)
};
k.loadCallback = function(a) {
    k.cLog("Default loadCallback(" + a + ")", 13)
};
k.buttonParams = function() {
    var a = "site_code=" + k.site.site_code + "&form_id=" + k.site.button_form_id + "&lang=" + k.site.lang;
    "undefined" != typeof k.site.autoresize && (a += "&autoresize=" + k.site.autoresize);
    "undefined" != typeof k.site.view && (a += "&view=" + k.site.view);
    return a
};
k.virtualURL = function() {
    if ("string" == typeof k.site.url && "" != k.site.url) return k.cLog("virtualURL() returns: " + k.site.url), k.site.url;
    k.cLog("virtualURL() returns: null")
};
k.pushParams = function() {
    var a = "site_code=" + (k_engage_vars.site_code || k.site.site_code) + "&form_id=" + (k_engage_vars.invite_form_id || k.site.button_form_id) + "&lang=" + (k_engage_vars.invite_lang || k.site.lang);
    "undefined" != typeof k_engage_vars.autoresize && (a += "&autoresize=" + k_engage_vars.autoresize);
    "undefined" != typeof k_engage_vars.view && (a += "&view=" + k_engage_vars.view);
    0 > a.indexOf("push=1") && (a += "&push=1");
    return a
};
k.create_ff_url_no_cookie = function(a, b, d, e) {
    k.cLog("k.create_ff_url_no_cookie()");
    d = [];
    var f = !1;
    "undefined" != typeof k_button_js_revision && (f = k_button_js_revision.match(/\d+/), !1 !== f && d.push("k_button_js_revision=" + f[0]));
    "undefined" != typeof k_push_js_revision && (f = k_push_js_revision.match(/\d+/), !1 !== f && d.push("k_push_js_revision=" + f[0]));
    "undefined" != typeof k_push_vars && ("undefined" != typeof k_push_vars.view_percentage && d.push("view_percentage=" + k_push_vars.view_percentage), "undefined" != typeof k_push_vars.display_after &&
        d.push("display_after=" + k_push_vars.display_after));
    f = d.join("&");
    k.get_main_domain();
    b = b || window.location.href;
    b = encodeURIComponent(b);
    d = "";
    if (a) {
        var g = "";
        k_button.ff_link && (g = k_button.ff_link.rel, k_button.ff_link.href = "#", k_button.ff_link.target = "", k_button.ff_link.rel = "", "nofollow" == g && (g = ""));
        var h = "",
            h = k_button.host_server && k_button.host_server.value ? k_button.host_server.value : k_button.ff_link && null !== k_button.ff_link.getAttribute("ref_server") ? k_button.ff_link.getAttribute("ref_server").split("/")[2] :
                "www.kampyle.com";
        k_button.loader_url || (k_button.loader_url = "/feedback_form/ff-feedback-form.php?");
        d = document.location.protocol;
        "http:" != d && "https:" != d && (d = "http:");
        d = d + "//" + h + k_button.loader_url + a + g
    } else d = k_button.ff_link.href, "&push=1" == k_button.ff_link.rel && (d += k_button.ff_link.rel);
    window.pageTracker && window.pageTracker._trackEvent && (a = k_button.generate_pre_id(), window.pageTracker._trackEvent("KampyleFeedback", "NewFeedback", a), k_button.extra_params || (k_button.extra_params = {}), k_button.extra_params.vectors =
        a);
    k_button.extra_params && (a = k_button.make_query_string(k_button.extra_params), d = d + "&" + a);
    null !== k_button.Get_Cookie("session_start_time") && (a = k_button.Get_Cookie("session_start_time"), g = (new Date).getTime(), d = d + "&time_on_site=" + Math.round((g - a) / 1E3));
    "" !== f && (d = d + "&stats=" + encodeURIComponent(f));
    f = "";
    null !== k_button.Get_Cookie("__utmz") ? f = "&utmz=" + encodeURIComponent(k_button.Get_Cookie("__utmz")) + "&utma=" + encodeURIComponent(k_button.Get_Cookie("__utma")) + "&utmv=" + encodeURIComponent(k_button.Get_Cookie("__utmv")) :
        null !== k_button.Get_Cookie("k_visit") && (f = "&kvisit=" + encodeURIComponent(k_button.Get_Cookie("k_visit")));
    g = a = "";
    "function" == typeof ClickTaleGetPID && (g = ClickTaleGetPID());
    "" === g && "function" == typeof KampyleGetClickTalePID && (g = KampyleGetClickTalePID());
    if ("" !== g && "function" == typeof ClickTaleGetUID && "function" == typeof ClickTaleGetSID) {
        var h = ClickTaleGetUID(),
            l = ClickTaleGetSID();
        a = "&ctdata=0";
        null !== h && null !== l && (a = "&ctdata=" + g + ".." + h + ".." + l)
    }
    g = "kampyle_ff";
    1024 < d.length + b.length && (g = b, b = "noUrl");
    return 1 ==
        e || 1 == e ? d + "&url=" + b + f + a : {
            shortUrl: d + "&url=" + b + f + a,
            longUrl: g
    }
};
k.tidyProtocolForm = function(a) {
    var b = "https:" == window.location.protocol ? "https:" : "http:";
    if ("https" == k.site.forceFormProtocol || "https:" == k.site.forceFormProtocol || "https:/" == k.site.forceFormProtocol || "https://" == k.site.forceFormProtocol) b = "https:";
    else if ("http" == k.site.forceFormProtocol || "http:" == k.site.forceFormProtocol || "http:/" == k.site.forceFormProtocol || "http://" == k.site.forceFormProtocol) b = "http:";
    return 1 != a && "true" != a || "" == b ? b : b + "//"
};
k.tidyProtocolLoad = function(a) {
    var b = "https:" == window.location.protocol ? "https:" : "http:";
    if (0 == k.site.addProtocol || "false" == k.site.addProtocol) b = "";
    if ("https" == k.site.forceLoadProtocol || "https:" == k.site.forceLoadProtocol || "https:/" == k.site.forceLoadProtocol || "https://" == k.site.forceLoadProtocol) b = "https:";
    else if ("http" == k.site.forceLoadProtocol || "http:" == k.site.forceLoadProtocol || "http:/" == k.site.forceLoadProtocol || "http://" == k.site.forceLoadProtocol) b = "http:";
    0 != k.site.addProtocol && "false" != k.site.addProtocol ||
        "" == b || (k.params.k_error += "|addProtocolOverridden", k.cLog("addProtocol: [" + k.site.addProtocol + "] was overridden by protocolLoad: [" + k.site.protocolLoad + "]"));
    return 1 != a && "true" != a || "" == b ? b : b + "//"
};
k.getTestmodeOverride = function() {
    if ("undefined" == typeof k.site.testMode || "" == k.site.testMode) k.site.testMode = !1;
    db_url = /k_testmode=/i;
    db_test = window.location.href.match(db_url);
    if (null != db_test) {
        k.testModeList = {};
        k.setAllQStr("", k.testModeList);
        var a, b;
        for (a in k.testModeList)
            if (b = /k_testmode/i, b = a.match(b), null != b) switch (k.cLog("URL testmode parameter [" + a + " = " + k.testModeList[a] + "]"), k.testModeList[a]) {
                case "0":
                case "false":
                    k.site.testMode = 0;
                    k.cLog("testMode set [to false] from URL: " + k.testModeList[a],
                        67);
                    "object" == typeof k_engage && (k_engage.testMode = 0, k.cLog("Setting k_engage.testMode = 0"));
                    break;
                case "1":
                case "true":
                    k.site.testMode = 1;
                    k.cLog("testMode set [to true] from URL: " + k.testModeList[a], 67);
                    "object" == typeof k_engage && (k_engage.testMode = 1, k.cLog("Setting k_engage.testMode = 1"));
                    break;
                case "forceButton":
                case "showbutton":
                    k.cLog("forcebutton and createTags set [to true] from URL.  Button will be shown but view_percentage remains unchanged: " + k.site.view_percentage, 67);
                    k.site.forceButton = !0;
                    k.site.createTags = !0;
                    break;
                case "disableCookies":
                case "nocookies":
                    k.cLog("disable_cookie override was enabled.  Cookies will be ignored!", 67);
                    "undefined" != typeof k_engage_vars && (k_engage_vars.disable_cookie = !0);
                    "undefined" != typeof k_push_vars && (k_push_vars.disable_cookie = !0);
                    "undefined" != typeof k_engage && (k_engage.disable_cookie = !0);
                    break;
                case "createtags":
                    k.cLog("createTags set [to true] from URL.", 67);
                    k.site.createTags = !0;
                    break;
                default:
                    try {
                        k.isNumber(k.testModeList[a]) && 3 >= k.testModeList[a].length ?
                            (k.site.testMode = k.testModeList[a], k.cLog("testMode set from URL: " + k.testModeList[a], 67)) : k.cLog("testMode found in URL but not valid range or keyword: " + k.testModeList[a], 67)
                    } catch (d) {
                        k.cLog("testMode unsuccessfully detected in URL: " + k.testModeList[a] + " (" + d + ")", 67)
                    }
            }
    } else k.cLog("testMode not detected in URL", 67)
};
k.evalPage = function(a, b) {
    k.cLog("k_Chk: " + a);
    k.cLog("k_PTTin: " + b);
    if ("" == a || "undefined" == typeof a) k.params.k_error += "|evalPage: urlOrString undefined", k.cLog("k.evalPage - urlOrString not defined! Returning...");
    else try {
        if ("" == b || "undefined" == typeof b) b = "re";
        k.cLog("PTTout: " + b);
        for (var d in k.siteSections) {
            var e = new RegExp(k.siteSections[d][b], k.siteSections[d].reMods);
            k.cLog("[Keys:" + d + "][String:" + a + "][" + b + ":" + k.siteSections[d][b] + "][newRE:" + e + "]");
            if ("function" == typeof k.siteSections[d]) k.cLog("Key is a function - continue");
            else if ("undefined" == typeof k.siteSections[d][b] || "" == k.siteSections[d][b]) k.cLog("Nothing to compare - continue");
            else if (a.match(e)) {
                k.cLog("MATCH!");
                try {
                    k.loadSectionConfig(k.siteSections[d], "evalPage");
                    k.cLog("Match: " + k.params.siteSection + " fid: " + k.site.button_form_id, 88);
                    var f = k.siteSections[d];
                    if ("undefined" != f.stopOnThisMatch && 1 == f.stopOnThisMatch) return k.cLog("stopOnThisMatch:" + f.stopOnThisMatch), !0
                } catch (g) {
                    k.params.k_error += "|evalPage (" + g + ") Going to next RegEx."
                }
            } else if (k.cLog("No Match!"),
                "undefined" == k.params.siteSection || "" == k.params.siteSection) k.params.siteSection = "non-match", "object" == typeof k_button ? k_button.setCustomVariable("siteSection", "non-match") : k.cLog("k_button not defined as object!")
        }
    } catch (g) {
        k.cLog("Error caught on evalPage (Code: " + g + ")"), k.params.siteSection = "non-match-error", "object" == typeof k_button ? k_button.setCustomVariable("siteSection", "non-match-error") : k.cLog("k_button not defined as object!"), k.params.k_error += "|evalPage: " + g
    }
};
k.createKampyleTags = function(a) {
    if (1 == k.k_tags_created) k.cLog("Tags already exist. Not added again.");
    else {
        try {
            "undefined" != typeof k.site.url_css && (k.cLog("Loading CSS: " + k.tidyProtocolLoad(!0) + k.site.url_css), k.loadjscssfile(k.tidyProtocolLoad(!0) + k.site.url_css, "css"))
        } catch (f) {
            k.cLog("CSS Load Error (" + f + ")")
        }
        try {
            k.cLog("Loading k_button: " + k.tidyProtocolLoad(!0) + k.site.url_kbutton), "object" == typeof k_button && "function" == typeof k_button.open_ff ? k.cLog("Loading TERMINATED - k_button already on page") :
                k.loadScript(k.tidyProtocolLoad(!0) + k.site.url_kbutton, "k_button")
        } catch (f) {
            k.cLog("k_button Load Error (" + f + ")")
        }
        if (void 0 == k.site.buttonBindToId || "undefined" == typeof k.site.buttonBindToId || "" == k.site.buttonBindToId) k.site.buttonBindToId = "kampylink";
        document.getElementById(k.site.buttonBindToId) ? (k.cLog("Binding to existing element (" + k.site.buttonBindToId + ") found on page! ", 6), a = !1) : (k.cLog("Creating and Binding to new element (" + k.site.buttonBindToId + ")", 6), a = !0);
        if (a) {
            k.cLog("Adding new element for button: " +
                d, 6);
            var b = document.createElement("div");
            b.id = "kampyleButton";
            b = document.body.appendChild(b);
            b.appendChild(document.createTextNode(""));
            var d = b.appendChild(document.createElement("a"))
        } else d = document.getElementById(k.site.buttonBindToId), k.cLog("Using existing element: " + d, 6); if (void 0 == k.site.formURL || "undefined" == typeof k.site.formURL || "" == k.site.formURL) k.site.formURL = "/feedback_form/ff-feedback-form.php?";
        if (void 0 == k.site.buttonTarget || "undefined" == typeof k.site.buttonTarget || "" == k.site.buttonTarget) k.site.buttonTarget =
            "kampyleWindow";
        "undefined" != typeof k_button ? (k_button.ff_link = d, k.site.fullQStr = k.getQStr(k.buttonParams())) : k.site.fullQStr = k.buttonParams();
        d.id = k.site.buttonBindToId;
        1 == k.site.useHref || "true" == k.site.useHref ? (k.cLog("useHref = true | Set Href as: " + k.tidyProtocolForm(!0) + k.site.serverRegion + k.site.formURL + k.site.fullQStr), d.href = k.tidyProtocolForm(!0) + k.site.serverRegion + k.site.formURL + k.site.fullQStr, d.target = k.site.buttonTarget) : (k.cLog("useHref = false | Set Href as: javascript:void(0);"),
            d.href = "javascript:void(0);");
        void 0 != k.site.buttonClass && "undefined" != typeof k.site.buttonClass && "" != k.site.buttonClass && (d.className = k.site.buttonClass);
        1 == k.site.hideButton || "true" == k.site.hideButton ? (d.style.display = "none", k.cLog("createTags - hide button. hideButton=" + k.site.hideButton, 6)) : (k.cLog("createTags - show button. hideButton=" + k.site.hideButton, 6), 1 == k.site.hasLivePerson && k.setLP_UDEs("fbButtonWasShown", !0, "SESSION"));
        d.onclick = function() {
            k.cLog("EVENT - BUTTON CLICK " + d);
            k.elemClicked =
                this;
            k.actionOpenFFButton();
            return !1
        };
        if (a) {
            d.appendChild(document.createTextNode(""));
            var e = d.appendChild(document.createElement("img"));
            e.src = "undefined" == typeof k.params.url_buttonImage || "" == k.params.url_buttonImage ? k.tidyProtocolLoad(!0) + k.site.url_buttonImage : k.tidyProtocolLoad(!0) + k.params.url_buttonImage;
            e.alt = "Feedback Form";
            e.border = "0"
        }
        if ("undefined" != typeof k_engage_vars.view_percentage && 0 < k_engage_vars.view_percentage && 100 >= k_engage_vars.view_percentage || "undefined" != typeof k.site.forceLoad_kengage &&
            "true" == k.site.forceLoad_kengage) {
            k.cLog("Loading k_engage: " + k.tidyProtocolLoad(!0) + k.site.url_kengage);
            try {
                "object" == typeof k_engage && "object" == typeof k_engage.initData ? k.cLog("Loading TERMINATED - k_engage already on page") : k.loadScript(k.tidyProtocolLoad(!0) + k.site.url_kengage, "k_engage")
            } catch (f) {
                k.cLog("k_engage Load Error (" + f + ")")
            }
            a ? (k.cLog("Adding new element for push: " + d, 6), a = b.appendChild(document.createElement("a")), a.href = "javascript:void(0);", a.target = k.site.buttonTarget, a.id = "k_popup_link",
                a.style.display = "none") : (a = document.getElementById(k.site.buttonBindToId), k.cLog("Using existing element for push: " + a, 6));
            a.onclick = function() {
                k.cLog("EVENT - INVITATION CLICK");
                k.actionOpenFFInvitationYes()
            }
        } else k.cLog("Loading k_push aborted. Conditions for loading not met.");
        k.k_tags_created = !0;
        k.cLog("\n\n===== Button added ==========\nserver: " + k.site.serverRegion + "\nsiteid: " + k.site.site_code + "\nformid: " + k.site.button_form_id + "\nlangua: " + k.site.lang + "\ncontnt: " + k.params.contentType + "\nprodct: " +
            k.params.product + "\nnavFll: " + k.params.navFull + "\n-------------------\npgName: " + k.params.pageName + "\nssectn: " + k.params.siteSection + "\ndefinedBy: " + k.params.definedBy + "\nhideBt: " + k.site.hideButton + "\n=============================\n\n\n")
    }
};
k.handlerButtonClick = function(a) {
    k.cLog("Default handlerButtonClick(from: " + a + ")")
};
k.actionOpenFFButton = function(a) {
    k.cLog("Default actionOpenFFButton()");
    k.handlerButtonClick("buttonClick");
    "object" == typeof a ? (k.swapParams("backup"), k.getParams("buttonClickWithParams", a)) : k.getParams("buttonClick");
    try {
        if (k_button.host_server = {
            value: k.site.serverRegion
        }, 1 == k.site.useHref || "true" == k.site.useHref) k.cLog("CLICK: onClick Disabled (useHref=true)", 6);
        else return k.cLog("CLICK: Open with onClick (useHref=false)", 6), k.cLog("buttonParams: " + k.buttonParams(), 6), k.cLog("virtualURL: " + k.virtualURL(),
            6), k.cLog("tidyProtocolForm: " + k.tidyProtocolForm(), 6), k.open_ff(k.buttonParams(), k.virtualURL(), k.tidyProtocolForm()), "object" == typeof a && k.swapParams("restore"), !1
    } catch (b) {
        k.params.k_error += "|onClick (" + b + ")", k.cLog("Error Button onClick (" + b + ")", 6)
    }
};
k.actionOpenFFInvitationYes = function() {
    k.cLog("Default actionOpenFFInvitationYes()");
    k.handlerButtonClick("inviteClick");
    k.getParams("inviteClick");
    try {
        return k_button.host_server = {
            value: k.site.serverRegion
        }, k.open_ff(k.pushParams(), k.virtualURL(), k.tidyProtocolForm()), !1
    } catch (a) {
        k.params.k_error += "|Invite onClick (" + a + ")", k.cLog("Error Invite onClick (" + a + ")")
    }
};
k.open_ff = function(a, b, d, e) {
    k.cLog("Default k.open_ff()");
    k_button.open_ff(a, b, d)
};
k.actionOpenFFInvitationNo = function() {
    k.cLog("Default actionOpenFFInvitationNo()")
};
k.actionOpenFFInvitationDefer = function() {
    k.cLog("Default actionOpenFFInvitationDefer()")
};
k.actionOpenFFCustomEvent = function(a) {
    k.cLog("Default actionOpenFFCustomEvent()")
};
k.bindReady = function(a) {
    if ("complete" === document.readyState) k.cLog("bindReady: document complete - run now!"), k.params.bind = "DOMComplete:RunningNow", a();
    else if (k.cLog("bindReady: document not complete - binding..."), document.addEventListener) k.cLog("bindReady: binding available for: Moz,Opera,Webkit"), k.params.bind = "Loading:BindingTo_DOMContentLoaded", document.addEventListener("DOMContentLoaded", function() {
        document.removeEventListener("DOMContentLoaded", arguments.callee, !1);
        a()
    }, !1);
    else if (document.attachEvent) k.cLog("bindReady: binding available for: IE"),
    k.params.bind = "Loading:BindingTo_onreadystatechange", document.attachEvent("onreadystatechange", function() {
        "complete" === document.readyState && (document.detachEvent("onreadystatechange", arguments.callee), a())
    }), document.documentElement.doScroll && window == window.top && function() {
        k.cLog("bindReady: binding available for: IE (non-iFrame)");
        k.params.bind = "Loading:BindingTo_doScroll";
        try {
            document.documentElement.doScroll("left")
        } catch (b) {
            setTimeout(arguments.callee, 0);
            return
        }
        a()
    }();
    else {
        if (window.onload) {
            k.cLog("bindReady: browser detection failed - using onload");
            k.params.bind = "Loading:BindingTo_onload";
            var b = window.onload;
            window.onload = function() {
                b();
                a()
            }
        } else window.onload = a;
        k.cLog("bindReady: reached end of function!")
    }
};
k.buttonLogic = function(a) {
    k.cLog("Default buttonLogic()");
    a = k.Get_Cookie("k_click") ? k.Get_Cookie("click") : 0;
    k.site.view_percentage = k.site.view_percentage ? k.site.view_percentage && 0 <= k.site.view_percentage && 100 >= k.site.view_percentage ? k.site.view_percentage : 100 : 100;
    k.site.hideButtonMaxClicks = k.site.hideButtonMaxClicks ? k.site.hideButtonMaxClicks && 0 <= k.site.hideButtonMaxClicks && 100 >= k.site.hideButtonMaxClicks ? k.site.hideButtonMaxClicks : 0 : 0;
    var b = Math.round(100 * Math.random());
    if (1 == k.site.forceButton ||
        "true" == k.site.forceButton) return k.cLog("forceButton = true - overriding all other logic", 88), k.site.hideButton = !1, !0;
    if ((1 == k.site.createTags || "true" == k.site.createTags) && a < k.site.hideButtonMaxClicks || 0 == k.site.hideButtonMaxClicks) k.cLog("\n====\nreturn true / hideButtonMaxClicks not exceeded (" + a + "|" + k.site.hideButtonMaxClicks + ")\n====", 88);
    else return k.cLog("\n====\nreturn false / hideButtonMaxClicks has been exceeded (" + a + "|" + k.site.hideButtonMaxClicks + ")\n====", 88), !1; if ((1 == k.site.createTags ||
        "true" == k.site.createTags) && b < k.site.view_percentage) return k.cLog("\n====\nreturn true / show button (" + b + "|" + k.site.view_percentage + ")\n====", 88), !0;
    k.cLog("\n====\nreturn false / hide button (" + b + "|" + k.site.view_percentage + ")\n====", 88);
    return !1
};
k.getFriendly = function(a) {
    k.cLog("getFriendly() - checking: [" + a + "]");
    for (var b in k.friendlyNames) {
        var d = typeof k.friendlyNames[b];
        if ("function" != d && "object" != d) {
            if (b == a) {
                a = k.friendlyNames[b];
                k.cLog("Match on [" + b + "]!");
                k.cLog("Renaming to: [" + k.friendlyNames[b] + "] <<=======\n");
                break
            }
            k.cLog("No match on: [" + b + "]\n")
        }
    }
    return a
};
k.setCustomVariables = function(a, b, d) {
    try {
        if ("object" == typeof k_button) {
            k.params.buttonRev = "KC:" + k.site.revision + "|" + k.site.site_shortName + "|KB:" + ("undefined" == typeof k_button_js_revision ? "0" : k_button_js_revision.replace(/\s+|\$|Rev:/g, "")) + ("undefined" == typeof k_engage_js_revision ? "" : "|KE:" + k_engage_js_revision.replace(/\s+|\$|Rev:/g, "")) + "|KP:" + ("undefined" == typeof k_push_js_revision ? "0" : k_push_js_revision.replace(/\s+|\$|Rev:/g, ""));
            for (var e in k.params)
                if ("" !== e && "" !== k.params[e] && "object" != typeof k.params[e] &&
                    "function" != typeof k.params[e] && "array" != typeof k.params[e] && ";" !== k.params[e] && "empty" !== k.params[e] && void 0 !== k.params[e] && "re" != e && "reMods" !== e)
                    if ("object" == typeof k_button) {
                        var f = k.getFriendly(e),
                            g = k.tidyVar(k.params[e], a, b, d);
                        k_button.setCustomVariable(f, g)
                    } else k.cLog("k_button not defined as object!");
                    else k.cLog("Skipped cv: " + k.getFriendly(e))
        }
    } catch (h) {
        k.cLog("Error caught setting cvs (Code: [#1] " + h + ")"), k.params.k_error += "|" + h
    }
};
k.trim = function(a) {
    k.cLog('"' + a + '" : ' + typeof a);
    if ("" == a || "string" != typeof a) return a;
    a = a.replace(/^\s+/, "");
    for (var b = a.length - 1; 0 <= b; b--)
        if (/\S/.test(a.charAt(b))) {
            a = a.substring(0, b + 1);
            break
        }
    return a
};
k.isNumber = function(a) {
    return !isNaN(parseFloat(a)) && isFinite(a)
};
k.toTitleCase = function(a) {
    a = a.toLowerCase().split(" ");
    for (var b = 0; b < a.length; b++) {
        var d = a[b].slice(0, 1).toUpperCase();
        a[b] = d + a[b].substr(1)
    }
    return a.join(" ")
};
k.tidyVar = function(a, b, d, e) {
    var f = a;
    if ("string" == typeof a || "number" == typeof a || "boolean" == typeof a) return f = a.toString(), "undefined" == typeof e && (e = "string" == typeof k.site.truncTrail ? k.site.truncTrail : "..."), k.site.use_case ? "lower" == k.site.use_case ? f = f.toLowerCase() : "upper" == k.site.use_case ? f = f.toUpperCase() : "title" == k.site.use_case && (f = k.toTitleCase(f)) : 1 == b ? f = f.toLowerCase() : 2 == b ? f = f.toUpperCase() : 3 == b && (f = k.toTitleCase(f)), f = k.trim(f), f = f.replace(/\s{2,}/g, " "), f = f.replace(/(:|\>) /g, ":"), f = f.replace(/ (:|\>)/g,
        ":"), f = f.replace(/(&rsquo;|&apos;|\u2019|&#39;|&#x27;)/gi, "'"), f = f.replace(/(&amp;)/gi, "&"), f = f.replace(/(&reg;)/gi, "(r)"), f = f.replace(/(&trade;)/gi, "(tm)"), f = f.replace(/(&copy;)/gi, "(c)"), 1 == k.site.use_underscore && (f = f.replace(/\s{1,}/g, "_")), "number" == typeof d ? f.length > d && (f = f.substr(0, d - e.length) + e, k.params.k_error += "|t1:" + f.substr(0, 3) + "") : "number" == typeof k.site.maxChars && f.length > k.site.maxChars && (f = f.substr(0, k.site.maxChars - e.length) + e, k.params.k_error += "|t2:" + f.substr(0, 3) + ""), f
};
k.tidyPrice = function(a, b, d) {
    if (a) return "string" == typeof a && (a = Math.round(1 * a.replace("$", ""))), "number" == typeof a && "number" == typeof b && (a = Math.round(a / b) * b), "number" == typeof a && "number" == typeof d && (a = a.toFixed(d)), a
};
k.sortOrder = function(a, b, d) {
    if ("" == d || void 0 == d) d = ";";
    a = k.params[a].split(d);
    "" != b && void 0 != b && a.push(b);
    a.sort();
    return a = a.join(d)
};
k.remove = function() {
    var a = "session_start_time k_session_start_time k_visit k_push8 push_time_start k_push_time_start k_vectors k_track k_click".split(" ");
    for (c = 0; c < a.length; c++) null != a[c] && "" != a[c] ? k.Clear_Cookie(a[c]) : k.cLog('CookieName "' + a[c] + '" not valid');
    k.k_tags_created = !1;
    a = document.getElementById("kampyleButton") ? document.getElementById("kampyleButton") : document.getElementById("kampylink");
    a.parentNode.removeChild(a);
    k_button1 = k_button = k_push = k_engage = k_push_vars = k_engage_vars = k_button_js_revision =
        k_push_js_revision = k_engage_js_revision = k_config = void 0;
    return !0
};
k.clone = function(a, b) {
    if (null == a || "object" != typeof a) return a;
    if (a instanceof Date) {
        k.cLog("clone() copying date");
        var d = new Date;
        d.setTime(a.getTime());
        return d
    }
    if (a instanceof Array) {
        k.cLog("clone() copying array");
        for (var d = [], e = 0, f = a.length; e < f; e++) d[e] = k.clone(a[e]);
        return d
    }
    if (a instanceof Object) {
        k.cLog("clone() copying object: " + b);
        d = {};
        for (e in a) a.hasOwnProperty(e) && (k.cLog("clone() ---" + e + " : " + a[e]), d[e] = k.clone(a[e]));
        return d
    }
    k.cLog("clone() Error: Unable to copy. Type is not supported.");
    k.params.k_error += "|clone:error"
};
k.swapParams = function(a) {
    k.cLog("swapParams() Action is: " + a);
    if ("" == a || "undefined" == typeof a) return k.cLog("swapParams() No action defined. Return"), !1;
    a = a.toLowerCase();
    if ("backup" == a) k.cLog("swapParams() Backing up..."), k.site2 = k.clone(k.site, "k.site"), k.params2 = k.clone(k.params, "k.params"), k_engage_vars2 = k.clone(k_engage_vars, "k_engage_vars"), k.cLog("swapParams() Backup Complete.");
    else if ("restore" == a) k.cLog("swapParams() Restoring..."), k.site = k.clone(k.site2, "k.site2"), k.params = k.clone(k.params2,
        "k.params2"), k_engage_vars = k.clone(k_engage_vars2, "k_engage_vars2"), k.cLog("swapParams() Restore Complete.");
    else return k.cLog("swapParams() Action requested not found."), !1
};
k.Set_Cookie = function(a, b, d, e, f, g) {
    var h = new Date;
    h.setTime(h.getTime());
    d && (d *= 864E5);
    h = new Date(h.getTime() + d);
    document.cookie = a + "=" + escape(b) + (d ? ";expires=" + h.toGMTString() : "") + (e ? ";path=" + e : "") + (f ? ";domain=" + f : "") + (g ? ";secure" : "")
};
k.Get_Cookie = function(a) {
    if (void 0 != a) {
        var b = document.cookie.indexOf(a + "="),
            d = b + a.length + 1;
        if (!b && a != document.cookie.substring(0, a.length) || -1 == b) return null;
        a = document.cookie.indexOf(";", d); - 1 == a && (a = document.cookie.length);
        return unescape(document.cookie.substring(d, a))
    }
};
k.Clear_Cookie = function(a, b, d) {
    if (!a) return !1;
    b = b || "undefined" != typeof k_button && k_button.get_main_domain() ? k_button.get_main_domain() : document.domain;
    d = d || "/";
    var e = new Date;
    e.setTime(e.getTime() + -864E5);
    document.cookie = a + "=; expires=" + e.toGMTString() + "; path= " + d + "; domain=" + b;
    console.log("Cookie Cleared: " + a + " [" + a + "=; expires=" + e.toGMTString() + "; path= " + d + "; domain=" + b + "]")
};
k.get_main_domain = function() {
    var a = "",
        b = document.domain;
    if ("undefined" != document.domain && "" !== document.domain && "localhost" != document.domain) {
        var a = b.split(/\./g),
            d = a[a.length - 1],
            e = "AERO ASIA BIZ CAT COM COOP INFO INT JOBS MOBI MUSEUM NAME NET ORG PRO TEL TRAVEL XXX EDU GOV MIL TV".split(" "),
            f = 3,
            g;
        for (g in e) e[g] == d.toUpperCase() && (f = 2);
        a = a.length > f ? 3 < a.length ? a.slice(1).join(".") : a.slice(a.length - f).join(".") : b
    }
    return a
};
k.getFilename = function(a) {
    a = a.substring(0, -1 == a.indexOf("#") ? a.length : a.indexOf("#"));
    a = a.substring(0, -1 == a.indexOf("?") ? a.length : a.indexOf("?"));
    return a.substring(a.lastIndexOf("/") + 1, a.length).replace(/(.html|.htm|.php|.aspx|.asp|.jsp|.jspx|.cfm)/g, "")
};
k.loadSectionConfig = function(a, b) {
    k.cLog("loadSectionConfig from: " + b);
    if ("" == a || "undefined" == typeof a)
        if (k.cLog("loadSectionConfig undefined so set to k_pageParams"), "undefined" != typeof k_pageParams) a = k_pageParams;
        else {
            k.cLog("loadSectionConfig - k_pageParams not found");
            return
        }
    try {
        k.params.pageOverride = typeof a;
        var d = a,
            e;
        for (e in d)
            if (k.cLog("[Keys:" + e + "]:[" + d[e] + "][Type:" + typeof d[e] + "]"), "function" == typeof d[e]) k.cLog("Key is a function - continue");
            else if ("invite" == e.toLowerCase() && "object" ==
            typeof d[e]) {
            var f = d[e];
            for (e in f)
                if ("" != f[e] || "string" != typeof f[e]) k.cLog("IN (k_engage_vars)\nKey: " + e + "\nOld: " + k_engage_vars[e] + " (type: " + typeof k_engage_vars[e] + ")\nNew: " + f[e] + " (type: " + typeof f[e] + ")\n----"), k_engage_vars[e] = f[e]
        } else if ("button" == e.toLowerCase() && "string" != typeof d[e]) {
            var g = d[e];
            for (e in g) k.cLog("keys: " + e + " typeof:" + typeof g[e]), "string" == typeof g[e] && "" == g[e] ? k.cLog("OUT!! \nKey:" + e + "\nOld:" + k.site[e] + "\nNew:" + g[e]) : (k.cLog("IN (k_button) \nKey:" + e + "\nOld:" + k.site[e] +
                "\nNew:" + g[e]), k.site[e] = g[e])
        } else "" != d[e] && (k.params[e] = "" + d[e]);
        k.cLog("loadSectionConfig Updated: " + JSON.stringify(a))
    } catch (h) {
        k.params.k_error += "|loadSectionConfig error (" + h + ")"
    }
};
k.getParams = function(a, b) {
    k.cLog("Default getParams(" + a + ")");
    "object" == typeof k_button ? k.setCustomVariables() : k.cLog("k_button not defined as object!")
};
k.getParamsOnRun = function(a) {
    k.cLog("Default getParamsOnRun(" + a + ")");
    "object" == typeof k_button ? k.setCustomVariables() : k.cLog("k_button not defined as object!")
};
k.getMeta = function(a, b, d) {
    if (!("" != d && void 0 != d || "" != b && void 0 != b))
        for (var e = document.getElementsByTagName("meta"), f = e.length, g = 0; g < f; g++) "" != e[g].name && void 0 != e[g].name && (k.params["m_" + e[g].name] = e[g].content, k.cLog("getMeta adding: [m_" + e[g].name + " = " + e[g].content + "]"));
    if ("" == d || void 0 == d) d = "name";
    if ("" == b || void 0 == b) b = "content";
    e = document.getElementsByTagName("META");
    for (g = 0; g < e.length; g++)
        if (e[g].getAttribute(d) == a) return e[g].getAttribute(b);
    return null
};
k.setPathLevels = function(a) {
    if ("undefined" == typeof a || "undefined" == a || "" == a) return "NoPath";
    a = a.split("/");
    for (i = 1; i < a.length; i++) k.params["pathLevel" + i] = a[i]
};
k.getQStr = function(a) {
    a = k.create_ff_url_no_cookie(a, "").shortUrl;
    return 0 > a.indexOf("?") ? "NoQStr" : a.substring(a.indexOf("?") + 1)
};
k.setAllQStr = function(a, b, d) {
    a || (a = window.location.href.toLowerCase());
    b || (b = k.params);
    d = "undefined" == typeof d ? "" : d;
    if (0 > a.indexOf("?")) return "NoQStr";
    a = a.substring(a.indexOf("?") + 1).split("&");
    for (i = 0; i < a.length; i++) {
        var e = a[i].split("=");
        "undefined" != typeof b[e[0]] ? b[d + e[0] + "(" + i + ")"] = e[1] : b[d + e[0]] = e[1]
    }
};
k.getOnPageParams = function(a, b) {
    var d = typeof a;
    if ("undefined" != d) {
        var e = "undefined" == typeof b ? "" : b;
        k.cLog("getPageParams(" + a + ") Type: [" + d + "]");
        switch (d) {
            case "object":
                try {
                    for (var f in a) pair = f.split("="), k.params[e + pair[0]] = a[pair[0]], k.cLog("getPageParams adding: [" + pair[0] + " = " + a[pair[0]] + "]")
                } catch (g) {
                    k.cLog("getOnPageParams(" + a + ")[" + d + "](Code: " + g + ")"), k.params.k_error += "|" + g
                }
                break;
            case "string":
                try {
                    "" != e && (k.params[e] = a, k.cLog("getPageParams adding: [" + e + " = " + a + "]"))
                } catch (g) {
                    k.cLog("getOnPageParams(" +
                        a + ")[" + d + "](Code: " + g + ")"), k.params.k_error += "|" + g
                }
                break;
            default:
                k.cLog("getPageParams(" + a + ") DEFAULT CASE")
        }
    }
};
k.getSCparams = function() {
    k.cLog("getSCparams() default")
};
k.setLP_UDEs = function(a, b, d, e) {
    "undefined" == typeof lpMTag ? (k.cLog("lpMTag Not Found"), k.params.k_error += "|lpMTag Not Found") : (k.cLog("lpMTag Found OK!"), e = "boolean" == typeof e ? e : !0, d = "SESSION" == d.toUpperCase() || "PAGE" == d.toUpperCase() || "VISITOR" == d.toUpperCase() ? d.toUpperCase() : "SESSION", k.cLog("Setting LPVar: " + d + "VAR!" + a + "=" + b + ", " + e), lpMTag.lpSendData(d + "VAR!" + a + "=" + b, e))
};
k.getLP_UDEs = function(a, b) {
    k.cLog("Function: getLP_UDEs()");
    b = "undefined" == typeof b ? "" : b;
    try {
        if ("undefined" == typeof lpMTagConfig) {
            k.cLog("lpMTagConfig Not Found");
            k.params.k_error += "|lpMTagConfig Not Found";
            return
        }
        k.cLog("lpMTagConfig Found OK!");
        if ("undefined" == typeof lpMTagConfig.UDEstore) {
            k.cLog("lpMTagConfig.UDEstore Not Found");
            k.params.k_error += "|lpMTagConfig.UDEstore Not Found";
            return
        }
        k.cLog("lpMTagConfig.UDEstore Found OK!");
        var d = lpMTagConfig.UDEstore.VV,
            e = "lpMTagConfig.UDEstore.VV";
        if ("undefined" ==
            typeof d) k.cLog(e + " Not Found");
        else {
            k.cLog(e + " Found OK! (" + d.length + ")");
            for (var f = 0; f < d.length; f++) k.getOnPageParams(unescape(d[f].split("=")[1]), unescape(b + d[f].split("=")[0]).toLowerCase())
        }
        d = lpMTagConfig.UDEstore.SV;
        e = "lpMTagConfig.UDEstore.SV";
        if ("undefined" == typeof d) k.cLog(e + " Not Found");
        else
            for (k.cLog(e + " Found OK! (" + d.length + ")"), f = 0; f < d.length; f++) k.getOnPageParams(unescape(d[f].split("=")[1]), unescape(b + d[f].split("=")[0]).toLowerCase());
        d = lpMTagConfig.UDEstore.PV;
        e = "lpMTagConfig.UDEstore.PV";
        if ("undefined" == typeof d) k.cLog(e + " Not Found");
        else
            for (k.cLog(e + " Found OK! (" + d.length + ")"), f = 0; f < d.length; f++) k.getOnPageParams(unescape(d[f].split("=")[1]), unescape(b + d[f].split("=")[0]).toLowerCase())
    } catch (g) {
        k.cLog("getLP_UDEs(1) Error: (" + g + ")"), k.params.k_error += "|getLP_UDEs(1) " + g
    }
    k.cLog("End getLP_UDEs")
};
k.getCookieList = function(a) {
    a = "undefined" != typeof a ? a : "";
    if ("undefined" != typeof k.cookieList) {
        k.cLog("Fetching CookieList!");
        var b = k.cookieList;
        for (c = 0; c < b.length; c++)
            if (null != b[c] && "" != b[c]) {
                var d = k.Get_Cookie(b[c]);
                k.params[a + b[c]] = d;
                k.cLog("CookieList[" + c + "] " + b[c] + " : " + d)
            } else k.cLog("CookieList[" + c + '] cookieName "' + b[c] + '" not valid')
    } else k.cLog("No Cookies!")
};
k.getCrumbs = function(a, b) {
    try {
        var d = function(a) {
            a = a.childNodes;
            var b = a.length;
            k.cLog("getCrumbs: Nodes found:" + b);
            for (var g = 0; g < b; g++)
                if (3 == a[g].nodeType) {
                    if (!a[g].nodeValue.match(/^[\s]*$/)) {
                        var h = a[g].nodeValue.replace(/(\||&amp;| |\'|\r\n|\n|\r|[\s\xA0])/g, "");
                        k.cLog("getCrumbs: Node found: " + h);
                        k.crumbArray.push(h)
                    }
                } else "script" != a[g].nodeName.toLowerCase() && d(a[g])
        };
        d(a);
        if (b) return k.cLog("getCrumbs: returning this:"), k.cLog(k.crumbArray[b]), k.crumbArray[b]
    } catch (e) {
        k.cLog("Breadcrumb error (Code: " +
            e + ")", 1), k.params.k_error += "|" + e
    }
};
k.getBreadcrumbs = function(a, b, d) {
    if ("" != a && void 0 != a && a) {
        "" != b && void 0 != b && b || (b = ">");
        void 0 == d && (d = !1);
        k.crumbArray = [];
        k.params.navFull = "noBreadcrumbs";
        if ("object" == typeof a) {
            k.cLog("getCrumbs: Type/Object: " + typeof a, 21);
            var e = document.getElementById(a);
            k.getCrumbs(e)
        } else if ("string" == typeof a) {
            k.cLog("getCrumbs: Type/String: " + typeof a, 21);
            try {
                var e = a.split(b),
                    f = e.length;
                k.cLog("getCrumbs: Crumbs found: " + f, 21);
                for (a = 0; a < f; a++)
                    if (!e[a].match(/^[\s]*$/)) {
                        var g = e[a];
                        k.cLog("getCrumbs: Crumb found: " +
                            g, 21);
                        k.crumbArray.push(g)
                    }
            } catch (h) {
                k.cLog("Breadcrumb error (Code: " + h + ")", 21), k.params.k_error += "|" + h
            }
        }
        1 == d || "true" == d ? (k.cLog("getCrumbs: removeFirst=" + d, 21), k.crumbArray.splice(0, 1)) : k.cLog("getCrumbs: removeFirst=" + d, 21);
        k.cLog("getCrumbs: crumbArray: " + k.crumbArray, 21);
        "undefined" != typeof k.crumbArray[0] && (k.params.navFull = "" + ("undefined" != typeof k.crumbArray[0] && "" != k.crumbArray[0] ? k.crumbArray[0] : "") + ("undefined" != typeof k.crumbArray[0] && "undefined" != typeof k.crumbArray[1] && "" != k.crumbArray[0] ?
            ":" : "") + ("undefined" != typeof k.crumbArray[1] ? k.crumbArray[1] : "") + ("undefined" != typeof k.crumbArray[2] ? ":" + k.crumbArray[2] : "") + ("undefined" != typeof k.crumbArray[3] ? ":" + k.crumbArray[3] : "") + ("undefined" != typeof k.crumbArray[4] ? ":" + k.crumbArray[4] : "") + ("undefined" != typeof k.crumbArray[5] ? ":" + k.crumbArray[5] : "") + ("undefined" != typeof k.crumbArray[6] ? ":" + k.crumbArray[6] : ""));
        k.cLog("getCrumbs: navFull=" + k.params.navFull, 21);
        "undefined" != typeof k.crumbArray[0] && "" != k.crumbArray[0] && (0 == d || "false" == d ? (k.cLog("getCrumbs: removeFirst=" +
                d, 21), k.params.navLevel0 = "undefined" != typeof k.crumbArray[0] ? k.crumbArray[0] : "") : k.cLog("getCrumbs: removeFirst=" + d, 21), k.params.navLevel1 = "undefined" != typeof k.crumbArray[0] && "" != k.crumbArray[0] ? k.crumbArray[0] : "", k.params.navLevel2 = "undefined" != typeof k.crumbArray[1] && "" != k.crumbArray[1] ? k.crumbArray[1] : "", k.params.navLevel3 = "undefined" != typeof k.crumbArray[2] && "" != k.crumbArray[2] ? k.crumbArray[2] : "", k.params.navLevel4 = "undefined" != typeof k.crumbArray[3] && "" != k.crumbArray[3] ? k.crumbArray[3] : "", k.params.navLevel5 =
            "undefined" != typeof k.crumbArray[4] && "" != k.crumbArray[4] ? k.crumbArray[4] : "", k.params.navLevel6 = "undefined" != typeof k.crumbArray[5] && "" != k.crumbArray[5] ? k.crumbArray[5] : "")
    }
};
k.getGAcookies = function(a) {
    gaParams = {};
    a = "undefined" == typeof a ? gaParams : a;
    if (null !== k.Get_Cookie("__utmz")) {
        a._utmz = k.Get_Cookie("__utmz");
        a._utma = k.Get_Cookie("__utma");
        a._utmv = k.Get_Cookie("__utmv");
        a = a._utmz.split("|");
        var b = a[0].split(".");
        k.params.utmz_timestamp = b[1];
        k.params.utmz_numberOfSessions = b[2];
        k.params.utmz_visitSources = b[3];
        b = b[4].split("=");
        k.params[b[0]] = b[1];
        for (i = 1; i < a.length; i++) b = a[i].split("="), k.params[b[0]] = b[1]
    }
};
k.getTimeOnSite = function() {
    "undefined" == typeof k.params.utmz_timestamp && null != k.Get_Cookie("__utmz") && (k.cLog('Getting "utmz" timestamp cookie'), k.getGAcookies());
    if ("undefined" != typeof k.params.utmz_timestamp) {
        k.cLog('Using "utmz" timestamp cookie');
        var a = 1E3 * k.params.utmz_timestamp
    } else if (null !== k.Get_Cookie("session_start_time")) k.cLog('Using Kampyle "session_start_time" timestamp cookie'), a = k.Get_Cookie("session_start_time");
    else return k.cLog("Neither timestamp cookie found"), !1;
    var b = (new Date).getTime(),
        a = Math.round((b - a) / 1E3),
        b = Math.floor(a / 3600),
        d = Math.floor((a - 3600 * b) / 60),
        e = Math.floor(a - 3600 * b - 60 * d);
    k.params.time_OnSite = (10 > b ? "0" + b : b) + ":" + (10 > d ? "0" + d : d) + ":" + (10 > e ? "0" + e : e);
    k.params.time_OnSiteInSecs = a;
    k.params.time_OnSiteInMins = Math.floor(a / 60)
};
k.sessionCounter = function() {
    "undefined" == typeof k.params.utmz_numberOfSessions && null != k.Get_Cookie("__utmz") && (k.cLog('Getting "utmz" session count cookie'), k.getGAcookies());
    if ("undefined" != typeof k.params.utmz_numberOfSessions) {
        k.cLog('Using "utmz" session count cookie');
        var a = k.params.utmz_numberOfSessions
    } else if (null !== k.Get_Cookie("k_visit")) k.cLog('Using Kampyle "k_visit" session count cookie'), a = k.Get_Cookie("k_visit");
    else return k.cLog("Neither session count cookie found"), !1;
    k.params.sessionCounter =
        a
};
k.getViewport = function() {
    var a = window,
        b = document,
        d = b.documentElement,
        e = b.getElementsByTagName("body")[0],
        b = a.innerWidth || d.clientWidth || e.clientWidth,
        a = a.innerHeight || d.clientHeight || e.clientHeight;
    k.params.windowWidth = b;
    k.params.windowHeight = a;
    k.params.windowSize = b + "x" + a
};
k.getProductName = function(a, b, d) {
    d || (d = 0);
    try {
        if (a && b) {
            var e = a.getElementsByTagName(b)[d].innerHTML.replace(/\&amp;/g, "&");
            return e
        }
        return a ? e = a.innerHTML.replace(/\&amp;/g, "&") : "Not Found"
    } catch (f) {
        k.cLog("getProductName error (Code: " + f + ")", 1), k.params.k_error += "|getProductName " + f
    }
};
k.lightboxLoad = function() {
    try {
        "undefined" != typeof k.site.url_lightbox_css && (k.cLog("LIGHTBOX - Loading CSS: " + k.tidyProtocolLoad(!0) + k.site.url_lightbox_css), k.loadjscssfile(k.tidyProtocolLoad(!0) + k.site.url_lightbox_css, "css"))
    } catch (a) {
        k.cLog("LIGHTBOX - CSS Load Error (" + a + ")")
    }
    try {
        k.cLog("LIGHTBOX - Lightbox JS: " + k.tidyProtocolLoad(!0) + k.site.url_lightbox_js), k.loadScript(k.tidyProtocolLoad(!0) + k.site.url_lightbox_js, "jQuery.ui", k.lightboxReady)
    } catch (a) {
        k.cLog("LIGHTBOX - JS Load Error (" + a +
            ")")
    }
};
k.lightboxReady = function() {
    k.cLog("LIGHTBOX - Assigning click event to #kampylink");
    $(document).ready(function() {
        var a = $("<div></div>").html("This dialog will show every time!").dialog({
            autoOpen: !1,
            title: "Basic Dialog"
        });
        $("#" + k.site.buttonBindToId).click(function() {
            a.dialog("open");
            return !1
        })
    })
};
k.lightboxInit = function() {};
k.lightboxBindToButton = function() {};
k.cookieList = ["k_click", "", ""];
k.site = {
    site_name: "Sydney Morning Herald",
    site_shortName: "SMH",
    site_code: "9067101",
    button_form_id: "120202-4132",
    buttonClass: "",
    buttonBindToClass: "feedback-loop__tab",
    createTags: !0,
    hideButton: !1,
    useHref: !1,
    buttonTarget: "_blank",
    hideButtonMaxClicks: null,
    view_percentage: 100,
    bindToReady: !1,
    testMode: !1,
    blockTracking: !1,
    hasLivePerson: !1,
    hasAdobe: !1,
    hasGA: !1,
    pageObject: "k_pageParams",
    formURL: null,
    lightbox: !1,
    use_underscore: !0,
    use_case: "lower",
    maxChars: 100,
    truncTrail: null,
    serverRegion: "www.kampyle.com",
    lang: "en",
    autoresize: null,
    view: "mobile",
    addProtocol: !0,
    url_css: "assets.kampyle.com/clients/9067101/d/css/k_button.css",
    url_kbutton: "assets.kampyle.com/clients/9067101/d/js/k_button.js",
    url_kengage: "assets.kampyle.com/clients/9067101/d/js/k_engage_udc.js",
    url_buttonImage: "assets.kampyle.com/clients/9067101/d/images/k_feedback_button.png",
    url_inviteFolder: "assets.kampyle.com/clients/9067101/d/images/",
    url_jQuery: "INSERT_JQUERY.JS_URL_HERE--ONLY_IF_REQUIRED",
    url_lightbox_js: "INSERT_LIGHTBOX.JS_URL_HERE--ONLY_IF_REQUIRED",
    url_lightbox_css: "INSERT_LIGHTBOX.CSS_URL_HERE--ONLY_IF_REQUIRED",
    url_jumppage: null,
    url_https_css: null,
    url_https_kbutton: null,
    url_https_kengage: null,
    url_https_buttonImage: null,
    url_https_inviteFolder: null,
    forceFormProtocol: null,
    forceLoadProtocol: null,
    forceLoad_css: null,
    forceLoad_kengage: null,
    forceLoad_kbutton: null,
    revision: "v9.11_smh_29Oct15"
};
k_engage_vars = {
    display_after_on_page: 10,
    display_after_on_site: 10,
    view_percentage: 0,
    invite_form_id: k.site.button_form_id,
    invite_lang: k.site.lang,
    view: "mobile",
    abandon_required_on_mouse_devices: !1,
    abandon_required_on_touch_devices: !1,
    abandon_zone_padding: 15,
    abandon_zone_hover_custom_classes: null,
    abandon_zone_hover_custom_ids: null,
    blockBackgroundScroll: !0,
    closeOnMaskClick_mouse: !0,
    closeOnMaskClick_touch: !1,
    ff_link_id: "k_popup_link",
    images_dir: k.tidyProtocolLoad(!0) + k.site.url_inviteFolder,
    site_code: k.site.site_code,
    onbehalfof: k.site.site_name,
    cookie_expiration_days_no: null,
    cookie_expiration_days_yes: null,
    cookie_expiration_minutes_remind: null,
    custom_outcome: !1,
    logo_url: k.tidyProtocolLoad(!0) + "assets.kampyle.com/clients/" + k.site.site_code + "/d/images/invite_logo.gif",
    question: "Do you have less than a minute just to tell us what you think?",
    header: "Your feedback matters to us!",
    yes: "Yes",
    no: "No thanks",
    footer: "This is the footer",
    yes_background: "rgba(0,116,228,0.9);",
    no_background: "rgba(0,116,228,0.9);",
    popup_font_color: "#EA006E",
    popup_separator: "brown",
    remind: null,
    remind_font_color: null,
    text_direction: null,
    disable_cookie: !1,
    testMode: k.site.testMode
};
k.friendlyNames = {
    k_error: "errorLog",
    navLevel0: "domain",
    refDiffHost: "landingPage"
};
k.siteSections = {
    beta_site: {
        siteSection: "beta_site",
        re: "beta.smh.com.au/technology/",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "120202-4132",
            display_after_on_page: 30,
            display_after_on_site: 60,
            view_percentage: 0
        },
        button: {
            button_form_id: "120202-4132",
            createTags: !0,
            hideButton: !1
        }
    },
    stage_site: {
        siteSection: "stage_site",
        re: "stage.beta.smh.com.au/technology/",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "120202-4132",
            display_after_on_page: 30,
            display_after_on_site: 60,
            view_percentage: 0
        },
        button: {
            button_form_id: "120202-4132",
            createTags: !0,
            hideButton: !1
        }
    },
    uat_site: {
        siteSection: "uat_site",
        re: "uat.lego.smh.com.au/technology/",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "120202-4132",
            display_after_on_page: 30,
            display_after_on_site: 60,
            view_percentage: 0
        },
        button: {
            button_form_id: "120202-4132",
            createTags: !0,
            hideButton: !1
        }
    },
    General: {
        siteSection: "General",
        re: "www.smh.com.au/technology/",
        reMods: "i",
        stopOnThisMatch: !0,
        definedBy: "siteSections",
        invite: {
            invite_form_id: "120202-4132",
            display_after_on_page: 30,
            display_after_on_site: 60,
            view_percentage: 0
        },
        button: {
            button_form_id: "120202-4132",
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
            display_after_on_site: 60,
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
            invite_form_id: k_engage_vars.invite_form_id,
            display_after_on_page: 3,
            display_after_on_site: 6,
            view_percentage: 100
        },
        button: {
            button_form_id: k.site.button_form_id,
            createTags: !0,
            hideButton: !1,
            url_buttonImage: "",
            buttonClass: "k_float k_bottom k_right"
        }
    }
};
k.getParamsOnRun = function(a) {
    k.cLog("getParamsOnRun(" + a + ")");
    k.params.fileName = k.getFilename(document.location.href);
    k.setPathLevels(window.location.pathname);
    k.params.hostName = window.location.hostname;
    k.params.pagePath = window.location.pathname;
    k.params.pageQStr = window.location.search;
    k.params.pageHash = window.location.hash.substr(1);
    k.params.pageTitle = document.title;
    k.setAllQStr(k.params.pageQStr, "", "url_");
    k.getGAcookies();
    k.sessionCounter();
    k.getCookieList("cookie_");
    1 == k.site.hasLivePerson && (k.setLP_UDEs("fbButtonIsShown",
        k.site.hideButton ? !1 : !0, "SESSION"), k.getLP_UDEs("", "LP_"));
    k.loadSectionConfig("", "getParamsOnRun()")
};
k.getParams = function(a, b) {
    var d = new Date;
    if ("object" == typeof b) {
        k.cLog("getParams() with paramsObj");
        var e = b
    } else k.cLog("getParams() without paramsObj - will default to k_pageParams"), e = "";
    k.cLog("Custom getParams(" + a + ")");
    k.params.hostName = window.location.hostname;
    k.params.pagePath = window.location.pathname;
    k.params.pageQStr = window.location.search;
    k.params.pageHash = window.location.hash.substr(1);
    k.params.pageTitle = document.title;
    k.params.fileName = k.getFilename(document.location.href);
    k.setPathLevels(window.location.pathname);
    k.setAllQStr(k.params.pageQStr, "", "url_");
    var f = document.referrer;
    k.params.refHostName = f ? f.match(/:\/\/(.[^/]+)/)[1] : "direct";
    k.params.refURL = f ? unescape(f) : "direct";
    k.params.refFilename = f ? k.getFilename(f) : "direct";
    k.params.refDiffHost = f ? k.params.refHostName == k.params.hostName ? "SameHost" : "DiffHost" : "direct";
    k.getCookieList("cookie_");
    k.getViewport();
    k.getOnPageParams();
    k.loadSectionConfig(e, "getParams()");
    1 == k.site.hasLivePerson && (k.setLP_UDEs("fbButtonIsShown", k.site.hideButton ? !1 : !0, "SESSION"), k.getLP_UDEs("",
        "LP_"));
    k.getTimeOnSite();
    k.site.hasAdobe && 1 != k.getSCparams_done && k.getSCparams();
    "undefined" !== typeof window.digitalData && "undefined" !== typeof window.digitalData.user && "undefined" !== typeof window.digitalData.user[0].profile && (k.params.CustomerType = window.digitalData.user[0].profile[0].membershipType);
    "object" == typeof k_button ? k.setCustomVariables() : k.cLog("k_button not defined as object!");
    k.cLog("TIMER: getParams(" + a + ") took: " + (new Date - d) + "ms")
};
k.getSCparams = function() {
    k.cLog("getSCparams()");
    if ("object" != typeof s) {
        if (k.cLog("Adobe s{} object not found"), 1 == k.site.hasAdobe || null == k.site.hasAdobe) k.site.hasAdobe = !1, k.cLog("site.hasAdobe changed to 'false'"), k.params.k_error += "|s=undefined"
    } else {
        if ("string" == typeof param || "integer" == typeof param) return s[param];
        var a = s.pageName,
            b = "pageName";
        "undefined" == typeof a ? "" : k.params[b] = k.tidyVar(a, 1);
        a = s.channel;
        b = "contentType";
        "undefined" == typeof a ? "" : k.params[b] = k.tidyVar(a, 1);
        a = s.server;
        b = "server";
        "undefined" == typeof a ? "" : k.params[b] = k.tidyVar(a, 1);
        a = s.hier1;
        b = "hier1";
        "undefined" == typeof a ? "" : k.params[b] = k.tidyVar(a, 1);
        a = s.products;
        b = "products";
        "undefined" == typeof a ? "" : k.params[b] = k.tidyVar(a, 1);
        a = s.prop59;
        b = "refPageName";
        "undefined" == typeof a ? "" : k.params[b] = k.tidyVar(a, 1);
        a = s;
        b = s.hier1;
        k.params.hierFull = "undefined" == typeof a ? "" : k.tidyVar(b);
        a = "undefined" == typeof a ? "" : "undefined" == typeof b ? "" : k.tidyVar(b, 1);
        k.params.hierLevel1 = "undefined" == typeof a ? "" : a.split(":")[0];
        k.params.hierLevel2 = "undefined" ==
            typeof a ? "" : a.split(":")[1];
        k.params.hierLevel3 = "undefined" == typeof a ? "" : a.split(":")[2];
        k.params.hierLevel4 = "undefined" == typeof a ? "" : a.split(":")[3];
        k.params.hierLevel5 = "undefined" == typeof a ? "" : a.split(":")[4];
        k.params.customerName = "undefined" == typeof s.prop25 ? "" : s.prop25;
        k.getSCparams_done = 1
    }
};
k.handlerButtonClick = function(a) {
    k.cLog("Custom handlerButtonClick()");
    a = k.get_main_domain();
    if (k.Get_Cookie("k_click") && k.isNumber(k.Get_Cookie("k_click"))) {
        var b = 1 * k.Get_Cookie("k_click");
        k.Set_Cookie("k_click", b + 1, 0, "/", a);
        k.cLog("\n====\nupdating cookie (" + k.Get_Cookie("k_click") + "|" + k.site.hideButtonMaxClicks + ")\n====", 88)
    } else k.Set_Cookie("k_click", 1, 0, "/", a), k.cLog("\n====\nAdding New Cookie... (" + k.Get_Cookie("k_click") + "|" + k.site.hideButtonMaxClicks + ")\n====", 88);
    k.Get_Cookie("k_click") >=
        k.site.hideButtonMaxClicks && 0 != k.site.hideButtonMaxClicks && (k.cLog("\n====\nhide button now! / hideButtonMaxClicks has been exceeded (" + k.Get_Cookie("k_click") + "|" + k.site.hideButtonMaxClicks + ")\n====", 88), k.site.hideButton = !0, document.getElementById(k.site.buttonBindToId).style.display = "none", 1 == k.site.hasLivePerson && k.setLP_UDEs("fbButtonIsShown", k.site.hideButton ? !1 : !0, "SESSION"))
};
k.createKampyleTags = function(a) {
    if (1 == k.k_tags_created) k.cLog("Tags already exist. Not added again.");
    else {
        try {
            "undefined" != typeof k.site.url_css && (k.cLog("Loading CSS: " + k.tidyProtocolLoad(!0) + k.site.url_css), k.loadjscssfile(k.tidyProtocolLoad(!0) + k.site.url_css, "css"))
        } catch (f) {
            k.cLog("CSS Load Error (" + f + ")")
        }
        try {
            k.cLog("Loading k_button: " + k.tidyProtocolLoad(!0) + k.site.url_kbutton), "object" == typeof k_button && "function" == typeof k_button.open_ff ? k.cLog("Loading TERMINATED - k_button already on page") :
                k.loadScript(k.tidyProtocolLoad(!0) + k.site.url_kbutton, "k_button")
        } catch (f) {
            k.cLog("k_button Load Error (" + f + ")")
        }
        if (void 0 == k.site.buttonBindToId || "undefined" == typeof k.site.buttonBindToId || "" == k.site.buttonBindToId) k.site.buttonBindToId = "kampylink";
        var b = "id";
        document.getElementById(k.site.buttonBindToId) ? (k.cLog("Binding to existing element ID(" + k.site.buttonBindToId + ") found on page! ", 6), a = !1) : 0 < document.getElementsByClassName(k.site.buttonBindToClass).length ? (k.cLog("Binding to existing element class(" +
            k.site.buttonBindToClass + ") found on page! ", 6), a = !1, b = "class") : (k.cLog("Creating and Binding to new element (" + k.site.buttonBindToId + ")", 6), a = !0);
        if (a) {
            k.cLog("Adding new element for button: " + e, 6);
            var d = document.createElement("div");
            d.id = "kampyleButton";
            d = document.body.appendChild(d);
            d.appendChild(document.createTextNode(""));
            var e = d.appendChild(document.createElement("a"))
        } else "class" == b ? (e = document.getElementsByClassName(k.site.buttonBindToClass)[0], k.cLog("Using existing element found by class: " +
            e, 6)) : (e = document.getElementById(k.site.buttonBindToId), k.cLog("Using existing element found by id: " + e, 6)); if (void 0 == k.site.formURL || "undefined" == typeof k.site.formURL || "" == k.site.formURL) k.site.formURL = "/feedback_form/ff-feedback-form.php?";
        if (void 0 == k.site.buttonTarget || "undefined" == typeof k.site.buttonTarget || "" == k.site.buttonTarget) k.site.buttonTarget = "kampyleWindow";
        "undefined" != typeof k_button ? (k_button.ff_link = e, k.site.fullQStr = k.getQStr(k.buttonParams())) : k.site.fullQStr = k.buttonParams();
        e.id = k.site.buttonBindToId;
        1 == k.site.useHref || "true" == k.site.useHref ? (k.cLog("useHref = true | Set Href as: " + k.tidyProtocolForm(!0) + k.site.serverRegion + k.site.formURL + k.site.fullQStr), e.href = k.tidyProtocolForm(!0) + k.site.serverRegion + k.site.formURL + k.site.fullQStr, e.target = k.site.buttonTarget) : (k.cLog("useHref = false | Set Href as: javascript:void(0);"), e.href = "javascript:void(0);");
        void 0 != k.site.buttonClass && "undefined" != typeof k.site.buttonClass && "" != k.site.buttonClass && (e.className = k.site.buttonClass);
        "class" == b && void 0 != k.site.buttonBindToClass && "undefined" != typeof k.site.buttonBindToClass && "" != k.site.buttonBindToClass && (e.className = k.site.buttonBindToClass);
        1 == k.site.hideButton || "true" == k.site.hideButton ? (e.style.display = "none", k.cLog("createTags - hide button. hideButton=" + k.site.hideButton, 6)) : (k.cLog("createTags - show button. hideButton=" + k.site.hideButton, 6), 1 == k.site.hasLivePerson && k.setLP_UDEs("fbButtonWasShown", !0, "SESSION"));
        e.onclick = function() {
            k.cLog("EVENT - BUTTON CLICK " + e);
            k.elemClicked =
                this;
            k.actionOpenFFButton();
            return !1
        };
        a && (e.appendChild(document.createTextNode("")), b = e.appendChild(document.createElement("img")), b.src = "undefined" == typeof k.params.url_buttonImage || "" == k.params.url_buttonImage ? k.tidyProtocolLoad(!0) + k.site.url_buttonImage : k.tidyProtocolLoad(!0) + k.params.url_buttonImage, b.alt = "Feedback Form", b.border = "0");
        if ("undefined" != typeof k_engage_vars.view_percentage && 0 < k_engage_vars.view_percentage && 100 >= k_engage_vars.view_percentage || "undefined" != typeof k.site.forceLoad_kengage &&
            "true" == k.site.forceLoad_kengage) {
            k.cLog("Loading k_engage: " + k.tidyProtocolLoad(!0) + k.site.url_kengage);
            try {
                "object" == typeof k_engage && "object" == typeof k_engage.initData ? k.cLog("Loading TERMINATED - k_engage already on page") : k.loadScript(k.tidyProtocolLoad(!0) + k.site.url_kengage, "k_engage")
            } catch (f) {
                k.cLog("k_engage Load Error (" + f + ")")
            }
            a ? (k.cLog("Adding new element for push: " + e, 6), a = d.appendChild(document.createElement("a")), a.href = "javascript:void(0);", a.target = k.site.buttonTarget, a.id = "k_popup_link",
                a.style.display = "none") : (a = document.getElementById(k.site.buttonBindToId), k.cLog("Using existing element for push: " + a, 6));
            a.onclick = function() {
                k.cLog("EVENT - INVITATION CLICK");
                k.actionOpenFFInvitationYes()
            }
        } else k.cLog("Loading k_push aborted. Conditions for loading not met.");
        k.k_tags_created = !0;
        k.cLog("\n\n===== Button added ==========\nserver: " + k.site.serverRegion + "\nsiteid: " + k.site.site_code + "\nformid: " + k.site.button_form_id + "\nlangua: " + k.site.lang + "\ncontnt: " + k.params.contentType + "\nprodct: " +
            k.params.product + "\nnavFll: " + k.params.navFull + "\n-------------------\npgName: " + k.params.pageName + "\nssectn: " + k.params.siteSection + "\ndefinedBy: " + k.params.definedBy + "\nhideBt: " + k.site.hideButton + "\n=============================\n\n\n")
    }
};
k.runtimeWrapper = function() {
    k.cLog("--- Start of runtimeWrapper ---", 22);
    k.getParamsOnRun("BeforeEvalPage");
    1 == k.site.hasLivePerson && (k.cLog("EVALPAGE ----- liveperson (" + k.params.lp_pagename + ")"), "string" == typeof k.params.lp_pagename ? k.evalPage(k.params.lp_pagename.toLowerCase(), "re") : (k.params.k_error += "|lp_pagename not found", k.evalPage(k_chk, k_ptt)));
    1 == k.site.hasAdobe && (k.cLog("EVALPAGE ----- Adobe pageName"), "string" == typeof k.getSCparams("pageName") ? k.evalPage(k.getSCparams("pageName"), "pageName") :
        k.params.k_error += "|omn_pageName not found");
    k.cLog("EVALPAGE ----- Kampyle:lang");
    k.evalPage(k.site.lang, "langCode");
    k.cLog("EVALPAGE ----- Kampyle:URL");
    k.evalPage("string" == typeof k.params.pageName ? k.params.pageName : window.location.href, "re");
    k.loadSectionConfig("", "Runtime");
    "undefined" != typeof k_button && (k.k_button_done = 1);
    "true" == k.site.createTags || 1 == k.site.createTags ? ("true" == k.site.lightbox || 1 == k.site.lightbox ? k.cLog("Lightbox - DISABLED") : k.cLog("Lightbox - Not Enabled"), 0 == k.buttonLogic() ?
        (k.cLog("hideButton changed to true", 88), k.site.hideButton = !0) : k.cLog("hideButton unchanged (" + k.site.hideButton + ")", 88), "false" == k.site.bindToReady || 0 == k.site.bindToReady ? (k.cLog("RUN NOW - bindToReady=" + k.site.bindToReady, 88), k.getParams(), k.createKampyleTags()) : (k.cLog("BIND NOW / RUN LATER - bindToReady=" + k.site.bindToReady, 88), k.bindReady(function() {
            k.getParams();
            k.createKampyleTags()
        }))) : k.cLog("TERMINATED. createTags=" + k.site.createTags + " so createKampyleTags() was not executed!", 88);
    k.totalTime =
        new Date - k.startTime;
    k.params.k_loadtimeMS = k.totalTime;
    k.cLog("TIMER: Total Runtime: " + k.totalTime + "ms", 22);
    k.cLog("--- End of runtimeWrapper ---", 22)
};
k.getTestmodeOverride();
k.cLog("--- RUNTIME ---", 22);
window.k_config = k;
k_config.consoleLog = k_config.cLog;
k_config.runtimeWrapper();
