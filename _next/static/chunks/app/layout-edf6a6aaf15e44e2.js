(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    5700: (e) => {
      e.exports = {
        style: {
          fontFamily:
            "'GeistMono', ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace",
        },
        className: "__className_f910ec",
        variable: "__variable_f910ec",
      };
    },
    8683: (e, t, n) => {
      Promise.resolve().then(n.t.bind(n, 9324, 23)),
        Promise.resolve().then(n.bind(n, 9742)),
        Promise.resolve().then(n.t.bind(n, 5700, 23)),
        Promise.resolve().then(n.t.bind(n, 9412, 23));
    },
    9324: () => {},
    9412: (e) => {
      e.exports = {
        style: { fontFamily: "'GeistSans', 'GeistSans Fallback'" },
        className: "__className_fb8f2c",
        variable: "__variable_fb8f2c",
      };
    },
    9742: (e, t, n) => {
      "use strict";
      n.d(t, { Analytics: () => b });
      var a = n(2115),
        r = n(8999),
        o = n(9509),
        i = () => {
          window.va ||
            (window.va = function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              (window.vaq = window.vaq || []).push(t);
            });
        };
      function s() {
        return "undefined" != typeof window;
      }
      function c() {
        return "production";
      }
      function l() {
        return "development" === ((s() ? window.vam : c()) || "production");
      }
      function d(e) {
        return new RegExp(
          "/".concat(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "(?=[/?#]|$)")
        );
      }
      function u(e) {
        return (
          (0, a.useEffect)(() => {
            var t;
            e.beforeSend &&
              (null == (t = window.va) ||
                t.call(window, "beforeSend", e.beforeSend));
          }, [e.beforeSend]),
          (0, a.useEffect)(() => {
            var t;
            !(function () {
              var e;
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { debug: !0 };
              if (!s()) return;
              (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "auto";
                if ("auto" === e) {
                  window.vam = c();
                  return;
                }
                window.vam = e;
              })(t.mode),
                i(),
                t.beforeSend &&
                  (null == (e = window.va) ||
                    e.call(window, "beforeSend", t.beforeSend));
              let n = t.scriptSrc
                ? t.scriptSrc
                : l()
                ? "https://va.vercel-scripts.com/v1/script.debug.js"
                : t.basePath
                ? "".concat(t.basePath, "/insights/script.js")
                : "/_vercel/insights/script.js";
              if (document.head.querySelector('script[src*="'.concat(n, '"]')))
                return;
              let a = document.createElement("script");
              (a.src = n),
                (a.defer = !0),
                (a.dataset.sdkn =
                  "@vercel/analytics" +
                  (t.framework ? "/".concat(t.framework) : "")),
                (a.dataset.sdkv = "1.5.0"),
                t.disableAutoTrack && (a.dataset.disableAutoTrack = "1"),
                t.endpoint
                  ? (a.dataset.endpoint = t.endpoint)
                  : t.basePath &&
                    (a.dataset.endpoint = "".concat(t.basePath, "/insights")),
                t.dsn && (a.dataset.dsn = t.dsn),
                (a.onerror = () => {
                  let e = l()
                    ? "Please check if any ad blockers are enabled and try again."
                    : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                  console.log(
                    "[Vercel Web Analytics] Failed to load script from "
                      .concat(n, ". ")
                      .concat(e)
                  );
                }),
                l() && !1 === t.debug && (a.dataset.debug = "false"),
                document.head.appendChild(a);
            })({
              framework: e.framework || "react",
              basePath:
                null !== (t = e.basePath) && void 0 !== t
                  ? t
                  : (function () {
                      if (void 0 !== o && void 0 !== o.env)
                        return o.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                    })(),
              ...(void 0 !== e.route && { disableAutoTrack: !0 }),
              ...e,
            });
          }, []),
          (0, a.useEffect)(() => {
            e.route &&
              e.path &&
              (function (e) {
                var t;
                let { route: n, path: a } = e;
                null == (t = window.va) ||
                  t.call(window, "pageview", { route: n, path: a });
              })({ route: e.route, path: e.path });
          }, [e.route, e.path]),
          null
        );
      }
      var f = () => {
        let e = (0, r.useParams)(),
          t = (0, r.useSearchParams)(),
          n = (0, r.usePathname)();
        return e
          ? {
              route: (function (e, t) {
                if (!e || !t) return e;
                let n = e;
                try {
                  let e = Object.entries(t);
                  for (let [t, a] of e)
                    if (!Array.isArray(a)) {
                      let e = d(a);
                      e.test(n) && (n = n.replace(e, "/[".concat(t, "]")));
                    }
                  for (let [t, a] of e)
                    if (Array.isArray(a)) {
                      let e = d(a.join("/"));
                      e.test(n) && (n = n.replace(e, "/[...".concat(t, "]")));
                    }
                  return n;
                } catch (t) {
                  return e;
                }
              })(
                n,
                Object.keys(e).length ? e : Object.fromEntries(t.entries())
              ),
              path: n,
            }
          : { route: null, path: n };
      };
      function v(e) {
        let { route: t, path: n } = f();
        return a.createElement(u, {
          path: n,
          route: t,
          ...e,
          basePath: (function () {
            if (void 0 !== o && void 0 !== o.env)
              return o.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
          })(),
          framework: "next",
        });
      }
      function b(e) {
        return a.createElement(
          a.Suspense,
          { fallback: null },
          a.createElement(v, { ...e })
        );
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [533, 501, 441, 684, 358], () => t(8683)), (_N_E = e.O());
  },
]);
