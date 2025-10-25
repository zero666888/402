(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [543],
  {
    747: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => h });
      var o = r(2115);
      function n(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      r(7650);
      var i = r(5155),
        s = o.forwardRef((e, t) => {
          let { children: r, ...n } = e,
            s = o.Children.toArray(r),
            l = s.find(f);
          if (l) {
            let e = l.props.children,
              r = s.map((t) =>
                t !== l
                  ? t
                  : o.Children.count(e) > 1
                  ? o.Children.only(null)
                  : o.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, i.jsx)(a, {
              ...n,
              ref: t,
              children: o.isValidElement(e)
                ? o.cloneElement(e, void 0, r)
                : null,
            });
          }
          return (0, i.jsx)(a, { ...n, ref: t, children: r });
        });
      s.displayName = "Slot";
      var a = o.forwardRef((e, t) => {
        let { children: r, ...i } = e;
        if (o.isValidElement(r)) {
          let e = (function (e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = t && "isReactWarning" in t && t.isReactWarning;
            return r
              ? e.ref
              : (r =
                  (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                  "isReactWarning" in t &&
                  t.isReactWarning)
              ? e.props.ref
              : e.props.ref || e.ref;
          })(r);
          return o.cloneElement(r, {
            ...(function (e, t) {
              let r = { ...t };
              for (let o in t) {
                let n = e[o],
                  i = t[o];
                /^on[A-Z]/.test(o)
                  ? n && i
                    ? (r[o] = (...e) => {
                        i(...e), n(...e);
                      })
                    : n && (r[o] = n)
                  : "style" === o
                  ? (r[o] = { ...n, ...i })
                  : "className" === o &&
                    (r[o] = [n, i].filter(Boolean).join(" "));
              }
              return { ...e, ...r };
            })(i, r.props),
            ref: t
              ? (function (...e) {
                  return (t) => {
                    let r = !1,
                      o = e.map((e) => {
                        let o = n(e, t);
                        return r || "function" != typeof o || (r = !0), o;
                      });
                    if (r)
                      return () => {
                        for (let t = 0; t < o.length; t++) {
                          let r = o[t];
                          "function" == typeof r ? r() : n(e[t], null);
                        }
                      };
                  };
                })(t, e)
              : e,
          });
        }
        return o.Children.count(r) > 1 ? o.Children.only(null) : null;
      });
      a.displayName = "SlotClone";
      var l = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
      function f(e) {
        return o.isValidElement(e) && e.type === l;
      }
      var u = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = o.forwardRef((e, r) => {
            let { asChild: o, ...n } = e,
              a = o ? s : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, i.jsx)(a, { ...n, ref: r })
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {}),
        c = "horizontal",
        d = ["horizontal", "vertical"],
        p = o.forwardRef((e, t) => {
          var r;
          let { decorative: o, orientation: n = c, ...s } = e,
            a = ((r = n), d.includes(r)) ? n : c;
          return (0, i.jsx)(u.div, {
            "data-orientation": a,
            ...(o
              ? { role: "none" }
              : {
                  "aria-orientation": "vertical" === a ? a : void 0,
                  role: "separator",
                }),
            ...s,
            ref: t,
          });
        });
      p.displayName = "Separator";
      var h = p;
    },
    901: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let o = r(8229)._(r(2115)).default.createContext(null);
    },
    1193: (e, t) => {
      "use strict";
      function r(e) {
        var t;
        let { config: r, src: o, width: n, quality: i } = e,
          s =
            i ||
            (null == (t = r.qualities)
              ? void 0
              : t.reduce((e, t) =>
                  Math.abs(t - 75) < Math.abs(e - 75) ? t : e
                )) ||
            75;
        return (
          r.path +
          "?url=" +
          encodeURIComponent(o) +
          "&w=" +
          n +
          "&q=" +
          s +
          (o.startsWith("/_next/static/media/")
            ? "&dpl=dpl_APEg19fjEsnbuvZF9Thxis4Dx8AT"
            : "")
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }),
        (r.__next_img_default = !0);
      let o = r;
    },
    2464: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let o = r(8229)._(r(2115)).default.createContext({});
    },
    2596: (e, t, r) => {
      "use strict";
      function o() {
        for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                o,
                n = "";
              if ("string" == typeof t || "number" == typeof t) n += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (r = 0; r < i; r++)
                    t[r] && (o = e(t[r])) && (n && (n += " "), (n += o));
                } else for (o in t) t[o] && (n && (n += " "), (n += o));
              }
              return n;
            })(e)) &&
            (o && (o += " "), (o += t));
        return o;
      }
      r.d(t, { $: () => o });
    },
    2757: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return i;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return s;
          },
        });
      let o = r(6966)._(r(8859)),
        n = /https?|ftp|gopher|file/;
      function i(e) {
        let { auth: t, hostname: r } = e,
          i = e.protocol || "",
          s = e.pathname || "",
          a = e.hash || "",
          l = e.query || "",
          f = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (f = t + e.host)
            : r &&
              ((f = t + (~r.indexOf(":") ? "[" + r + "]" : r)),
              e.port && (f += ":" + e.port)),
          l &&
            "object" == typeof l &&
            (l = String(o.urlQueryToSearchParams(l)));
        let u = e.search || (l && "?" + l) || "";
        return (
          i && !i.endsWith(":") && (i += ":"),
          e.slashes || ((!i || n.test(i)) && !1 !== f)
            ? ((f = "//" + (f || "")), s && "/" !== s[0] && (s = "/" + s))
            : f || (f = ""),
          a && "#" !== a[0] && (a = "#" + a),
          u && "?" !== u[0] && (u = "?" + u),
          "" +
            i +
            f +
            (s = s.replace(/[?#]/g, encodeURIComponent)) +
            (u = u.replace("#", "%23")) +
            a
        );
      }
      let s = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(e) {
        return i(e);
      }
    },
    3063: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let o = r(8229),
        n = r(6966),
        i = r(5155),
        s = n._(r(2115)),
        a = o._(r(7650)),
        l = o._(r(5564)),
        f = r(8883),
        u = r(5840),
        c = r(6752);
      r(3230);
      let d = r(901),
        p = o._(r(1193)),
        h = r(6654),
        g = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        };
      function m(e, t, r, o, n, i, s) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && n(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let o = !1,
                    n = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => o,
                    isPropagationStopped: () => n,
                    persist: () => {},
                    preventDefault: () => {
                      (o = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (n = !0), t.stopPropagation();
                    },
                  });
                }
                (null == o ? void 0 : o.current) && o.current(e);
              }
            }));
      }
      function y(e) {
        return s.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      let b = (0, s.forwardRef)((e, t) => {
        let {
            src: r,
            srcSet: o,
            sizes: n,
            height: a,
            width: l,
            decoding: f,
            className: u,
            style: c,
            fetchPriority: d,
            placeholder: p,
            loading: g,
            unoptimized: b,
            fill: w,
            onLoadRef: v,
            onLoadingCompleteRef: x,
            setBlurComplete: k,
            setShowAltText: E,
            sizesInput: _,
            onLoad: B,
            onError: O,
            ...I
          } = e,
          A = (0, s.useCallback)(
            (e) => {
              e && (O && (e.src = e.src), e.complete && m(e, p, v, x, k, b, _));
            },
            [r, p, v, x, k, O, b, _]
          ),
          j = (0, h.useMergedRef)(t, A);
        return (0, i.jsx)("img", {
          ...I,
          ...y(d),
          loading: g,
          width: l,
          height: a,
          decoding: f,
          "data-nimg": w ? "fill" : "1",
          className: u,
          style: c,
          sizes: n,
          srcSet: o,
          src: r,
          ref: j,
          onLoad: (e) => {
            m(e.currentTarget, p, v, x, k, b, _);
          },
          onError: (e) => {
            E(!0), "empty" !== p && k(!0), O && O(e);
          },
        });
      });
      function w(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          o = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...y(r.fetchPriority),
          };
        return t && a.default.preload
          ? (a.default.preload(r.src, o), null)
          : (0, i.jsx)(l.default, {
              children: (0, i.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...o },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let v = (0, s.forwardRef)((e, t) => {
        let r = (0, s.useContext)(d.RouterContext),
          o = (0, s.useContext)(c.ImageConfigContext),
          n = (0, s.useMemo)(() => {
            var e;
            let t = g || o || u.imageConfigDefault,
              r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
              n = t.deviceSizes.sort((e, t) => e - t),
              i = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
            return { ...t, allSizes: r, deviceSizes: n, qualities: i };
          }, [o]),
          { onLoad: a, onLoadingComplete: l } = e,
          h = (0, s.useRef)(a);
        (0, s.useEffect)(() => {
          h.current = a;
        }, [a]);
        let m = (0, s.useRef)(l);
        (0, s.useEffect)(() => {
          m.current = l;
        }, [l]);
        let [y, v] = (0, s.useState)(!1),
          [x, k] = (0, s.useState)(!1),
          { props: E, meta: _ } = (0, f.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: n,
            blurComplete: y,
            showAltText: x,
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(b, {
              ...E,
              unoptimized: _.unoptimized,
              placeholder: _.placeholder,
              fill: _.fill,
              onLoadRef: h,
              onLoadingCompleteRef: m,
              setBlurComplete: v,
              setShowAltText: k,
              sizesInput: e.sizes,
              ref: t,
            }),
            _.priority
              ? (0, i.jsx)(w, { isAppRouter: !r, imgAttributes: E })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4134: (e, t, r) => {
      "use strict";
      let o = r(7719),
        n = r(7610),
        i =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      function s(e) {
        if (e > 0x7fffffff)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
        let t = new Uint8Array(e);
        return Object.setPrototypeOf(t, a.prototype), t;
      }
      function a(e, t, r) {
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return u(e);
        }
        return l(e, t, r);
      }
      function l(e, t, r) {
        if ("string" == typeof e)
          return (function (e, t) {
            if (
              (("string" != typeof t || "" === t) && (t = "utf8"),
              !a.isEncoding(t))
            )
              throw TypeError("Unknown encoding: " + t);
            let r = 0 | h(e, t),
              o = s(r),
              n = o.write(e, t);
            return n !== r && (o = o.slice(0, n)), o;
          })(e, t);
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (T(e, Uint8Array)) {
              let t = new Uint8Array(e);
              return d(t.buffer, t.byteOffset, t.byteLength);
            }
            return c(e);
          })(e);
        if (null == e)
          throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof e
          );
        if (
          T(e, ArrayBuffer) ||
          (e && T(e.buffer, ArrayBuffer)) ||
          ("undefined" != typeof SharedArrayBuffer &&
            (T(e, SharedArrayBuffer) || (e && T(e.buffer, SharedArrayBuffer))))
        )
          return d(e, t, r);
        if ("number" == typeof e)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        let o = e.valueOf && e.valueOf();
        if (null != o && o !== e) return a.from(o, t, r);
        let n = (function (e) {
          if (a.isBuffer(e)) {
            let t = 0 | p(e.length),
              r = s(t);
            return 0 === r.length || e.copy(r, 0, 0, t), r;
          }
          return void 0 !== e.length
            ? "number" != typeof e.length ||
              (function (e) {
                return e != e;
              })(e.length)
              ? s(0)
              : c(e)
            : "Buffer" === e.type && Array.isArray(e.data)
            ? c(e.data)
            : void 0;
        })(e);
        if (n) return n;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof e[Symbol.toPrimitive]
        )
          return a.from(e[Symbol.toPrimitive]("string"), t, r);
        throw TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof e
        );
      }
      function f(e) {
        if ("number" != typeof e)
          throw TypeError('"size" argument must be of type number');
        if (e < 0)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
      }
      function u(e) {
        return f(e), s(e < 0 ? 0 : 0 | p(e));
      }
      function c(e) {
        let t = e.length < 0 ? 0 : 0 | p(e.length),
          r = s(t);
        for (let o = 0; o < t; o += 1) r[o] = 255 & e[o];
        return r;
      }
      function d(e, t, r) {
        let o;
        if (t < 0 || e.byteLength < t)
          throw RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0))
          throw RangeError('"length" is outside of buffer bounds');
        return (
          Object.setPrototypeOf(
            (o =
              void 0 === t && void 0 === r
                ? new Uint8Array(e)
                : void 0 === r
                ? new Uint8Array(e, t)
                : new Uint8Array(e, t, r)),
            a.prototype
          ),
          o
        );
      }
      function p(e) {
        if (e >= 0x7fffffff)
          throw RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
          );
        return 0 | e;
      }
      function h(e, t) {
        if (a.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || T(e, ArrayBuffer)) return e.byteLength;
        if ("string" != typeof e)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e
          );
        let r = e.length,
          o = arguments.length > 2 && !0 === arguments[2];
        if (!o && 0 === r) return 0;
        let n = !1;
        for (;;)
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return U(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return z(e).length;
            default:
              if (n) return o ? -1 : U(e).length;
              (t = ("" + t).toLowerCase()), (n = !0);
          }
      }
      function g(e, t, r) {
        let n = !1;
        if (
          ((void 0 === t || t < 0) && (t = 0),
          t > this.length ||
            ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0 || (r >>>= 0) <= (t >>>= 0)))
        )
          return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return (function (e, t, r) {
                let o = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > o) && (r = o);
                let n = "";
                for (let o = t; o < r; ++o) n += N[e[o]];
                return n;
              })(this, t, r);
            case "utf8":
            case "utf-8":
              return w(this, t, r);
            case "ascii":
              return (function (e, t, r) {
                let o = "";
                r = Math.min(e.length, r);
                for (let n = t; n < r; ++n)
                  o += String.fromCharCode(127 & e[n]);
                return o;
              })(this, t, r);
            case "latin1":
            case "binary":
              return (function (e, t, r) {
                let o = "";
                r = Math.min(e.length, r);
                for (let n = t; n < r; ++n) o += String.fromCharCode(e[n]);
                return o;
              })(this, t, r);
            case "base64":
              var i, s, a;
              return (
                (i = this),
                (s = t),
                (a = r),
                0 === s && a === i.length
                  ? o.fromByteArray(i)
                  : o.fromByteArray(i.slice(s, a))
              );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (function (e, t, r) {
                let o = e.slice(t, r),
                  n = "";
                for (let e = 0; e < o.length - 1; e += 2)
                  n += String.fromCharCode(o[e] + 256 * o[e + 1]);
                return n;
              })(this, t, r);
            default:
              if (n) throw TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (n = !0);
          }
      }
      function m(e, t, r) {
        let o = e[t];
        (e[t] = e[r]), (e[r] = o);
      }
      function y(e, t, r, o, n) {
        var i;
        if (0 === e.length) return -1;
        if (
          ("string" == typeof r
            ? ((o = r), (r = 0))
            : r > 0x7fffffff
            ? (r = 0x7fffffff)
            : r < -0x80000000 && (r = -0x80000000),
          (i = r *= 1) != i && (r = n ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (n) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!n) return -1;
          r = 0;
        }
        if (("string" == typeof t && (t = a.from(t, o)), a.isBuffer(t)))
          return 0 === t.length ? -1 : b(e, t, r, o, n);
        if ("number" == typeof t)
          return ((t &= 255), "function" == typeof Uint8Array.prototype.indexOf)
            ? n
              ? Uint8Array.prototype.indexOf.call(e, t, r)
              : Uint8Array.prototype.lastIndexOf.call(e, t, r)
            : b(e, [t], r, o, n);
        throw TypeError("val must be string, number or Buffer");
      }
      function b(e, t, r, o, n) {
        let i,
          s = 1,
          a = e.length,
          l = t.length;
        if (
          void 0 !== o &&
          ("ucs2" === (o = String(o).toLowerCase()) ||
            "ucs-2" === o ||
            "utf16le" === o ||
            "utf-16le" === o)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (s = 2), (a /= 2), (l /= 2), (r /= 2);
        }
        function f(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        if (n) {
          let o = -1;
          for (i = r; i < a; i++)
            if (f(e, i) === f(t, -1 === o ? 0 : i - o)) {
              if ((-1 === o && (o = i), i - o + 1 === l)) return o * s;
            } else -1 !== o && (i -= i - o), (o = -1);
        } else
          for (r + l > a && (r = a - l), i = r; i >= 0; i--) {
            let r = !0;
            for (let o = 0; o < l; o++)
              if (f(e, i + o) !== f(t, o)) {
                r = !1;
                break;
              }
            if (r) return i;
          }
        return -1;
      }
      function w(e, t, r) {
        r = Math.min(e.length, r);
        let o = [],
          n = t;
        for (; n < r; ) {
          let t = e[n],
            i = null,
            s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
          if (n + s <= r) {
            let r, o, a, l;
            switch (s) {
              case 1:
                t < 128 && (i = t);
                break;
              case 2:
                (192 & (r = e[n + 1])) == 128 &&
                  (l = ((31 & t) << 6) | (63 & r)) > 127 &&
                  (i = l);
                break;
              case 3:
                (r = e[n + 1]),
                  (o = e[n + 2]),
                  (192 & r) == 128 &&
                    (192 & o) == 128 &&
                    (l = ((15 & t) << 12) | ((63 & r) << 6) | (63 & o)) >
                      2047 &&
                    (l < 55296 || l > 57343) &&
                    (i = l);
                break;
              case 4:
                (r = e[n + 1]),
                  (o = e[n + 2]),
                  (a = e[n + 3]),
                  (192 & r) == 128 &&
                    (192 & o) == 128 &&
                    (192 & a) == 128 &&
                    (l =
                      ((15 & t) << 18) |
                      ((63 & r) << 12) |
                      ((63 & o) << 6) |
                      (63 & a)) > 65535 &&
                    l < 1114112 &&
                    (i = l);
            }
          }
          null === i
            ? ((i = 65533), (s = 1))
            : i > 65535 &&
              ((i -= 65536),
              o.push(((i >>> 10) & 1023) | 55296),
              (i = 56320 | (1023 & i))),
            o.push(i),
            (n += s);
        }
        return (function (e) {
          let t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          let r = "",
            o = 0;
          for (; o < t; )
            r += String.fromCharCode.apply(String, e.slice(o, (o += 4096)));
          return r;
        })(o);
      }
      function v(e, t, r) {
        if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
        if (e + t > r)
          throw RangeError("Trying to access beyond buffer length");
      }
      function x(e, t, r, o, n, i) {
        if (!a.isBuffer(e))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (t > n || t < i)
          throw RangeError('"value" argument is out of bounds');
        if (r + o > e.length) throw RangeError("Index out of range");
      }
      function k(e, t, r, o, n) {
        P(t, o, n, e, r, 7);
        let i = Number(t & BigInt(0xffffffff));
        (e[r++] = i),
          (i >>= 8),
          (e[r++] = i),
          (i >>= 8),
          (e[r++] = i),
          (i >>= 8),
          (e[r++] = i);
        let s = Number((t >> BigInt(32)) & BigInt(0xffffffff));
        return (
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          r
        );
      }
      function E(e, t, r, o, n) {
        P(t, o, n, e, r, 7);
        let i = Number(t & BigInt(0xffffffff));
        (e[r + 7] = i),
          (i >>= 8),
          (e[r + 6] = i),
          (i >>= 8),
          (e[r + 5] = i),
          (i >>= 8),
          (e[r + 4] = i);
        let s = Number((t >> BigInt(32)) & BigInt(0xffffffff));
        return (
          (e[r + 3] = s),
          (s >>= 8),
          (e[r + 2] = s),
          (s >>= 8),
          (e[r + 1] = s),
          (s >>= 8),
          (e[r] = s),
          r + 8
        );
      }
      function _(e, t, r, o, n, i) {
        if (r + o > e.length || r < 0) throw RangeError("Index out of range");
      }
      function B(e, t, r, o, i) {
        return (
          (t *= 1),
          (r >>>= 0),
          i || _(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
          n.write(e, t, r, o, 23, 4),
          r + 4
        );
      }
      function O(e, t, r, o, i) {
        return (
          (t *= 1),
          (r >>>= 0),
          i || _(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
          n.write(e, t, r, o, 52, 8),
          r + 8
        );
      }
      (t.hp = a),
        (t.IS = 50),
        (a.TYPED_ARRAY_SUPPORT = (function () {
          try {
            let e = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(t, Uint8Array.prototype),
              Object.setPrototypeOf(e, t),
              42 === e.foo()
            );
          } catch (e) {
            return !1;
          }
        })()),
        a.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(a.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(a.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.byteOffset;
          },
        }),
        (a.poolSize = 8192),
        (a.from = function (e, t, r) {
          return l(e, t, r);
        }),
        Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(a, Uint8Array),
        (a.alloc = function (e, t, r) {
          return (f(e), e <= 0)
            ? s(e)
            : void 0 !== t
            ? "string" == typeof r
              ? s(e).fill(t, r)
              : s(e).fill(t)
            : s(e);
        }),
        (a.allocUnsafe = function (e) {
          return u(e);
        }),
        (a.allocUnsafeSlow = function (e) {
          return u(e);
        }),
        (a.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== a.prototype;
        }),
        (a.compare = function (e, t) {
          if (
            (T(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            T(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            !a.isBuffer(e) || !a.isBuffer(t))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (e === t) return 0;
          let r = e.length,
            o = t.length;
          for (let n = 0, i = Math.min(r, o); n < i; ++n)
            if (e[n] !== t[n]) {
              (r = e[n]), (o = t[n]);
              break;
            }
          return r < o ? -1 : +(o < r);
        }),
        (a.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (a.concat = function (e, t) {
          let r;
          if (!Array.isArray(e))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return a.alloc(0);
          if (void 0 === t)
            for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
          let o = a.allocUnsafe(t),
            n = 0;
          for (r = 0; r < e.length; ++r) {
            let t = e[r];
            if (T(t, Uint8Array))
              n + t.length > o.length
                ? (a.isBuffer(t) || (t = a.from(t)), t.copy(o, n))
                : Uint8Array.prototype.set.call(o, t, n);
            else if (a.isBuffer(t)) t.copy(o, n);
            else throw TypeError('"list" argument must be an Array of Buffers');
            n += t.length;
          }
          return o;
        }),
        (a.byteLength = h),
        (a.prototype._isBuffer = !0),
        (a.prototype.swap16 = function () {
          let e = this.length;
          if (e % 2 != 0)
            throw RangeError("Buffer size must be a multiple of 16-bits");
          for (let t = 0; t < e; t += 2) m(this, t, t + 1);
          return this;
        }),
        (a.prototype.swap32 = function () {
          let e = this.length;
          if (e % 4 != 0)
            throw RangeError("Buffer size must be a multiple of 32-bits");
          for (let t = 0; t < e; t += 4)
            m(this, t, t + 3), m(this, t + 1, t + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          let e = this.length;
          if (e % 8 != 0)
            throw RangeError("Buffer size must be a multiple of 64-bits");
          for (let t = 0; t < e; t += 8)
            m(this, t, t + 7),
              m(this, t + 1, t + 6),
              m(this, t + 2, t + 5),
              m(this, t + 3, t + 4);
          return this;
        }),
        (a.prototype.toString = function () {
          let e = this.length;
          return 0 === e
            ? ""
            : 0 == arguments.length
            ? w(this, 0, e)
            : g.apply(this, arguments);
        }),
        (a.prototype.toLocaleString = a.prototype.toString),
        (a.prototype.equals = function (e) {
          if (!a.isBuffer(e)) throw TypeError("Argument must be a Buffer");
          return this === e || 0 === a.compare(this, e);
        }),
        (a.prototype.inspect = function () {
          let e = "",
            r = t.IS;
          return (
            (e = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (e += " ... "),
            "<Buffer " + e + ">"
          );
        }),
        i && (a.prototype[i] = a.prototype.inspect),
        (a.prototype.compare = function (e, t, r, o, n) {
          if (
            (T(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            !a.isBuffer(e))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e
            );
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === o && (o = 0),
            void 0 === n && (n = this.length),
            t < 0 || r > e.length || o < 0 || n > this.length)
          )
            throw RangeError("out of range index");
          if (o >= n && t >= r) return 0;
          if (o >= n) return -1;
          if (t >= r) return 1;
          if (((t >>>= 0), (r >>>= 0), (o >>>= 0), (n >>>= 0), this === e))
            return 0;
          let i = n - o,
            s = r - t,
            l = Math.min(i, s),
            f = this.slice(o, n),
            u = e.slice(t, r);
          for (let e = 0; e < l; ++e)
            if (f[e] !== u[e]) {
              (i = f[e]), (s = u[e]);
              break;
            }
          return i < s ? -1 : +(s < i);
        }),
        (a.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (a.prototype.indexOf = function (e, t, r) {
          return y(this, e, t, r, !0);
        }),
        (a.prototype.lastIndexOf = function (e, t, r) {
          return y(this, e, t, r, !1);
        }),
        (a.prototype.write = function (e, t, r, o) {
          var n, i, s, a, l, f, u, c;
          if (void 0 === t) (o = "utf8"), (r = this.length), (t = 0);
          else if (void 0 === r && "string" == typeof t)
            (o = t), (r = this.length), (t = 0);
          else if (isFinite(t))
            (t >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === o && (o = "utf8"))
                : ((o = r), (r = void 0));
          else
            throw Error(
              "Buffer.write(string, encoding, offset[, length]) is no longer supported"
            );
          let d = this.length - t;
          if (
            ((void 0 === r || r > d) && (r = d),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw RangeError("Attempt to write outside buffer bounds");
          o || (o = "utf8");
          let p = !1;
          for (;;)
            switch (o) {
              case "hex":
                return (function (e, t, r, o) {
                  let n;
                  r = Number(r) || 0;
                  let i = e.length - r;
                  o ? (o = Number(o)) > i && (o = i) : (o = i);
                  let s = t.length;
                  for (o > s / 2 && (o = s / 2), n = 0; n < o; ++n) {
                    var a;
                    let o = parseInt(t.substr(2 * n, 2), 16);
                    if ((a = o) != a) break;
                    e[r + n] = o;
                  }
                  return n;
                })(this, e, t, r);
              case "utf8":
              case "utf-8":
                return (n = t), (i = r), M(U(e, this.length - n), this, n, i);
              case "ascii":
              case "latin1":
              case "binary":
                return (
                  (s = t),
                  (a = r),
                  M(
                    (function (e) {
                      let t = [];
                      for (let r = 0; r < e.length; ++r)
                        t.push(255 & e.charCodeAt(r));
                      return t;
                    })(e),
                    this,
                    s,
                    a
                  )
                );
              case "base64":
                return (l = t), (f = r), M(z(e), this, l, f);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return (
                  (u = t),
                  (c = r),
                  M(
                    (function (e, t) {
                      let r, o;
                      let n = [];
                      for (let i = 0; i < e.length && !((t -= 2) < 0); ++i)
                        (o = (r = e.charCodeAt(i)) >> 8),
                          n.push(r % 256),
                          n.push(o);
                      return n;
                    })(e, this.length - u),
                    this,
                    u,
                    c
                  )
                );
              default:
                if (p) throw TypeError("Unknown encoding: " + o);
                (o = ("" + o).toLowerCase()), (p = !0);
            }
        }),
        (a.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (a.prototype.slice = function (e, t) {
          let r = this.length;
          (e = ~~e),
            (t = void 0 === t ? r : ~~t),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            t < e && (t = e);
          let o = this.subarray(e, t);
          return Object.setPrototypeOf(o, a.prototype), o;
        }),
        (a.prototype.readUintLE = a.prototype.readUIntLE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
            let o = this[e],
              n = 1,
              i = 0;
            for (; ++i < t && (n *= 256); ) o += this[e + i] * n;
            return o;
          }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
            let o = this[e + --t],
              n = 1;
            for (; t > 0 && (n *= 256); ) o += this[e + --t] * n;
            return o;
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (e, t) {
            return (e >>>= 0), t || v(e, 1, this.length), this[e];
          }),
        (a.prototype.readUint16LE = a.prototype.readUInt16LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || v(e, 2, this.length),
              this[e] | (this[e + 1] << 8)
            );
          }),
        (a.prototype.readUint16BE = a.prototype.readUInt16BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || v(e, 2, this.length),
              (this[e] << 8) | this[e + 1]
            );
          }),
        (a.prototype.readUint32LE = a.prototype.readUInt32LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || v(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                0x1000000 * this[e + 3]
            );
          }),
        (a.prototype.readUint32BE = a.prototype.readUInt32BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || v(e, 4, this.length),
              0x1000000 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
        (a.prototype.readBigUInt64LE = L(function (e) {
          S((e >>>= 0), "offset");
          let t = this[e],
            r = this[e + 7];
          (void 0 === t || void 0 === r) && R(e, this.length - 8);
          let o =
              t + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e],
            n = this[++e] + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * r;
          return BigInt(o) + (BigInt(n) << BigInt(32));
        })),
        (a.prototype.readBigUInt64BE = L(function (e) {
          S((e >>>= 0), "offset");
          let t = this[e],
            r = this[e + 7];
          (void 0 === t || void 0 === r) && R(e, this.length - 8);
          let o =
              0x1000000 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
            n = 0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r;
          return (BigInt(o) << BigInt(32)) + BigInt(n);
        })),
        (a.prototype.readIntLE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
          let o = this[e],
            n = 1,
            i = 0;
          for (; ++i < t && (n *= 256); ) o += this[e + i] * n;
          return o >= (n *= 128) && (o -= Math.pow(2, 8 * t)), o;
        }),
        (a.prototype.readIntBE = function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
          let o = t,
            n = 1,
            i = this[e + --o];
          for (; o > 0 && (n *= 256); ) i += this[e + --o] * n;
          return i >= (n *= 128) && (i -= Math.pow(2, 8 * t)), i;
        }),
        (a.prototype.readInt8 = function (e, t) {
          return ((e >>>= 0), t || v(e, 1, this.length), 128 & this[e])
            ? -((255 - this[e] + 1) * 1)
            : this[e];
        }),
        (a.prototype.readInt16LE = function (e, t) {
          (e >>>= 0), t || v(e, 2, this.length);
          let r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 0xffff0000 | r : r;
        }),
        (a.prototype.readInt16BE = function (e, t) {
          (e >>>= 0), t || v(e, 2, this.length);
          let r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 0xffff0000 | r : r;
        }),
        (a.prototype.readInt32LE = function (e, t) {
          return (
            (e >>>= 0),
            t || v(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (a.prototype.readInt32BE = function (e, t) {
          return (
            (e >>>= 0),
            t || v(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (a.prototype.readBigInt64LE = L(function (e) {
          S((e >>>= 0), "offset");
          let t = this[e],
            r = this[e + 7];
          return (
            (void 0 === t || void 0 === r) && R(e, this.length - 8),
            (BigInt(
              this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24)
            ) <<
              BigInt(32)) +
              BigInt(
                t + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e]
              )
          );
        })),
        (a.prototype.readBigInt64BE = L(function (e) {
          S((e >>>= 0), "offset");
          let t = this[e],
            r = this[e + 7];
          return (
            (void 0 === t || void 0 === r) && R(e, this.length - 8),
            (BigInt(
              (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]
            ) <<
              BigInt(32)) +
              BigInt(
                0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r
              )
          );
        })),
        (a.prototype.readFloatLE = function (e, t) {
          return (
            (e >>>= 0), t || v(e, 4, this.length), n.read(this, e, !0, 23, 4)
          );
        }),
        (a.prototype.readFloatBE = function (e, t) {
          return (
            (e >>>= 0), t || v(e, 4, this.length), n.read(this, e, !1, 23, 4)
          );
        }),
        (a.prototype.readDoubleLE = function (e, t) {
          return (
            (e >>>= 0), t || v(e, 8, this.length), n.read(this, e, !0, 52, 8)
          );
        }),
        (a.prototype.readDoubleBE = function (e, t) {
          return (
            (e >>>= 0), t || v(e, 8, this.length), n.read(this, e, !1, 52, 8)
          );
        }),
        (a.prototype.writeUintLE = a.prototype.writeUIntLE =
          function (e, t, r, o) {
            if (((e *= 1), (t >>>= 0), (r >>>= 0), !o)) {
              let o = Math.pow(2, 8 * r) - 1;
              x(this, e, t, r, o, 0);
            }
            let n = 1,
              i = 0;
            for (this[t] = 255 & e; ++i < r && (n *= 256); )
              this[t + i] = (e / n) & 255;
            return t + r;
          }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (e, t, r, o) {
            if (((e *= 1), (t >>>= 0), (r >>>= 0), !o)) {
              let o = Math.pow(2, 8 * r) - 1;
              x(this, e, t, r, o, 0);
            }
            let n = r - 1,
              i = 1;
            for (this[t + n] = 255 & e; --n >= 0 && (i *= 256); )
              this[t + n] = (e / i) & 255;
            return t + r;
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (e, t, r) {
            return (
              (e *= 1),
              (t >>>= 0),
              r || x(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            );
          }),
        (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
          function (e, t, r) {
            return (
              (e *= 1),
              (t >>>= 0),
              r || x(this, e, t, 2, 65535, 0),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
        (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
          function (e, t, r) {
            return (
              (e *= 1),
              (t >>>= 0),
              r || x(this, e, t, 2, 65535, 0),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
        (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
          function (e, t, r) {
            return (
              (e *= 1),
              (t >>>= 0),
              r || x(this, e, t, 4, 0xffffffff, 0),
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e),
              t + 4
            );
          }),
        (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
          function (e, t, r) {
            return (
              (e *= 1),
              (t >>>= 0),
              r || x(this, e, t, 4, 0xffffffff, 0),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
        (a.prototype.writeBigUInt64LE = L(function (e, t = 0) {
          return k(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (a.prototype.writeBigUInt64BE = L(function (e, t = 0) {
          return E(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (a.prototype.writeIntLE = function (e, t, r, o) {
          if (((e *= 1), (t >>>= 0), !o)) {
            let o = Math.pow(2, 8 * r - 1);
            x(this, e, t, r, o - 1, -o);
          }
          let n = 0,
            i = 1,
            s = 0;
          for (this[t] = 255 & e; ++n < r && (i *= 256); )
            e < 0 && 0 === s && 0 !== this[t + n - 1] && (s = 1),
              (this[t + n] = (((e / i) >> 0) - s) & 255);
          return t + r;
        }),
        (a.prototype.writeIntBE = function (e, t, r, o) {
          if (((e *= 1), (t >>>= 0), !o)) {
            let o = Math.pow(2, 8 * r - 1);
            x(this, e, t, r, o - 1, -o);
          }
          let n = r - 1,
            i = 1,
            s = 0;
          for (this[t + n] = 255 & e; --n >= 0 && (i *= 256); )
            e < 0 && 0 === s && 0 !== this[t + n + 1] && (s = 1),
              (this[t + n] = (((e / i) >> 0) - s) & 255);
          return t + r;
        }),
        (a.prototype.writeInt8 = function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || x(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (a.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || x(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
        (a.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || x(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
        (a.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || x(this, e, t, 4, 0x7fffffff, -0x80000000),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          );
        }),
        (a.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || x(this, e, t, 4, 0x7fffffff, -0x80000000),
            e < 0 && (e = 0xffffffff + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          );
        }),
        (a.prototype.writeBigInt64LE = L(function (e, t = 0) {
          return k(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (a.prototype.writeBigInt64BE = L(function (e, t = 0) {
          return E(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (a.prototype.writeFloatLE = function (e, t, r) {
          return B(this, e, t, !0, r);
        }),
        (a.prototype.writeFloatBE = function (e, t, r) {
          return B(this, e, t, !1, r);
        }),
        (a.prototype.writeDoubleLE = function (e, t, r) {
          return O(this, e, t, !0, r);
        }),
        (a.prototype.writeDoubleBE = function (e, t, r) {
          return O(this, e, t, !1, r);
        }),
        (a.prototype.copy = function (e, t, r, o) {
          if (!a.isBuffer(e)) throw TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            o || 0 === o || (o = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            o > 0 && o < r && (o = r),
            o === r || 0 === e.length || 0 === this.length)
          )
            return 0;
          if (t < 0) throw RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw RangeError("Index out of range");
          if (o < 0) throw RangeError("sourceEnd out of bounds");
          o > this.length && (o = this.length),
            e.length - t < o - r && (o = e.length - t + r);
          let n = o - r;
          return (
            this === e && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, r, o)
              : Uint8Array.prototype.set.call(e, this.subarray(r, o), t),
            n
          );
        }),
        (a.prototype.fill = function (e, t, r, o) {
          let n;
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((o = t), (t = 0), (r = this.length))
                : "string" == typeof r && ((o = r), (r = this.length)),
              void 0 !== o && "string" != typeof o)
            )
              throw TypeError("encoding must be a string");
            if ("string" == typeof o && !a.isEncoding(o))
              throw TypeError("Unknown encoding: " + o);
            if (1 === e.length) {
              let t = e.charCodeAt(0);
              (("utf8" === o && t < 128) || "latin1" === o) && (e = t);
            }
          } else
            "number" == typeof e
              ? (e &= 255)
              : "boolean" == typeof e && (e = Number(e));
          if (t < 0 || this.length < t || this.length < r)
            throw RangeError("Out of range index");
          if (r <= t) return this;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (n = t; n < r; ++n) this[n] = e;
          else {
            let i = a.isBuffer(e) ? e : a.from(e, o),
              s = i.length;
            if (0 === s)
              throw TypeError(
                'The value "' + e + '" is invalid for argument "value"'
              );
            for (n = 0; n < r - t; ++n) this[n + t] = i[n % s];
          }
          return this;
        });
      let I = {};
      function A(e, t, r) {
        I[e] = class extends r {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: t.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${e}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return e;
          }
          set code(e) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: e,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      function j(e) {
        let t = "",
          r = e.length,
          o = +("-" === e[0]);
        for (; r >= o + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
      }
      function P(e, t, r, o, n, i) {
        if (e > r || e < t) {
          let o;
          let n = "bigint" == typeof t ? "n" : "";
          throw (
            ((o =
              i > 3
                ? 0 === t || t === BigInt(0)
                  ? `>= 0${n} and < 2${n} ** ${(i + 1) * 8}${n}`
                  : `>= -(2${n} ** ${(i + 1) * 8 - 1}${n}) and < 2 ** ${
                      (i + 1) * 8 - 1
                    }${n}`
                : `>= ${t}${n} and <= ${r}${n}`),
            new I.ERR_OUT_OF_RANGE("value", o, e))
          );
        }
        S(n, "offset"),
          (void 0 === o[n] || void 0 === o[n + i]) && R(n, o.length - (i + 1));
      }
      function S(e, t) {
        if ("number" != typeof e)
          throw new I.ERR_INVALID_ARG_TYPE(t, "number", e);
      }
      function R(e, t, r) {
        if (Math.floor(e) !== e)
          throw (
            (S(e, r), new I.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
          );
        if (t < 0) throw new I.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new I.ERR_OUT_OF_RANGE(
          r || "offset",
          `>= ${+!!r} and <= ${t}`,
          e
        );
      }
      A(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (e) {
          return e
            ? `${e} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError
      ),
        A(
          "ERR_INVALID_ARG_TYPE",
          function (e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`;
          },
          TypeError
        ),
        A(
          "ERR_OUT_OF_RANGE",
          function (e, t, r) {
            let o = `The value of "${e}" is out of range.`,
              n = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 0x100000000
                ? (n = j(String(r)))
                : "bigint" == typeof r &&
                  ((n = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (n = j(n)),
                  (n += "n")),
              (o += ` It must be ${t}. Received ${n}`)
            );
          },
          RangeError
        );
      let C = /[^+/0-9A-Za-z-_]/g;
      function U(e, t) {
        let r;
        t = t || 1 / 0;
        let o = e.length,
          n = null,
          i = [];
        for (let s = 0; s < o; ++s) {
          if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
            if (!n) {
              if (r > 56319 || s + 1 === o) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              n = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && i.push(239, 191, 189), (n = r);
              continue;
            }
            r = (((n - 55296) << 10) | (r - 56320)) + 65536;
          } else n && (t -= 3) > -1 && i.push(239, 191, 189);
          if (((n = null), r < 128)) {
            if ((t -= 1) < 0) break;
            i.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            i.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0) break;
            i.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          } else throw Error("Invalid code point");
        }
        return i;
      }
      function z(e) {
        return o.toByteArray(
          (function (e) {
            if ((e = (e = e.split("=")[0]).trim().replace(C, "")).length < 2)
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function M(e, t, r, o) {
        let n;
        for (n = 0; n < o && !(n + r >= t.length) && !(n >= e.length); ++n)
          t[n + r] = e[n];
        return n;
      }
      function T(e, t) {
        return (
          e instanceof t ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === t.name)
        );
      }
      let N = (function () {
        let e = "0123456789abcdef",
          t = Array(256);
        for (let r = 0; r < 16; ++r) {
          let o = 16 * r;
          for (let n = 0; n < 16; ++n) t[o + n] = e[r] + e[n];
        }
        return t;
      })();
      function L(e) {
        return "undefined" == typeof BigInt ? $ : e;
      }
      function $() {
        throw Error("BigInt not supported");
      }
    },
    5029: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let o = r(2115),
        n = o.useLayoutEffect,
        i = o.useEffect;
      function s(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function s() {
          if (t && t.mountedInstances) {
            let n = o.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(n, e));
          }
        }
        return (
          n(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          n(
            () => (
              t && (t._pendingUpdate = s),
              () => {
                t && (t._pendingUpdate = s);
              }
            )
          ),
          i(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    5100: (e, t) => {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: o,
            blurHeight: n,
            blurDataURL: i,
            objectFit: s,
          } = e,
          a = o ? 40 * o : t,
          l = n ? 40 * n : r,
          f = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          f +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (f
            ? "none"
            : "contain" === s
            ? "xMidYMid"
            : "cover" === s
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          i +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    5564: (e, t, r) => {
      "use strict";
      var o = r(9509);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return d;
          },
        });
      let n = r(8229),
        i = r(6966),
        s = r(5155),
        a = i._(r(2115)),
        l = n._(r(5029)),
        f = r(2464),
        u = r(2830),
        c = r(7544);
      function d(e) {
        void 0 === e && (e = !1);
        let t = [(0, s.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, s.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          t
        );
      }
      function p(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      r(3230);
      let h = ["name", "httpEquiv", "charSet", "itemProp"];
      function g(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(p, [])
          .reverse()
          .concat(d(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                o = {};
              return (n) => {
                let i = !0,
                  s = !1;
                if (
                  n.key &&
                  "number" != typeof n.key &&
                  n.key.indexOf("$") > 0
                ) {
                  s = !0;
                  let t = n.key.slice(n.key.indexOf("$") + 1);
                  e.has(t) ? (i = !1) : e.add(t);
                }
                switch (n.type) {
                  case "title":
                  case "base":
                    t.has(n.type) ? (i = !1) : t.add(n.type);
                    break;
                  case "meta":
                    for (let e = 0, t = h.length; e < t; e++) {
                      let t = h[e];
                      if (n.props.hasOwnProperty(t)) {
                        if ("charSet" === t) r.has(t) ? (i = !1) : r.add(t);
                        else {
                          let e = n.props[t],
                            r = o[t] || new Set();
                          ("name" !== t || !s) && r.has(e)
                            ? (i = !1)
                            : (r.add(e), (o[t] = r));
                        }
                      }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let n = e.key || t;
            if (
              o.env.__NEXT_OPTIMIZE_FONTS &&
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, t)
              );
            }
            return a.default.cloneElement(e, { key: n });
          });
      }
      let m = function (e) {
        let { children: t } = e,
          r = (0, a.useContext)(f.AmpStateContext),
          o = (0, a.useContext)(u.HeadManagerContext);
        return (0, s.jsx)(l.default, {
          reduceComponentsToState: g,
          headManager: o,
          inAmpMode: (0, c.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5840: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return o;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        o = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          qualities: void 0,
          unoptimized: !1,
        };
    },
    6654: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let o = r(2115);
      function n(e, t) {
        let r = (0, o.useRef)(null),
          n = (0, o.useRef)(null);
        return (0, o.useCallback)(
          (o) => {
            if (null === o) {
              let e = r.current;
              e && ((r.current = null), e());
              let t = n.current;
              t && ((n.current = null), t());
            } else e && (r.current = i(e, o)), t && (n.current = i(t, o));
          },
          [e, t]
        );
      }
      function i(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6752: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let o = r(8229)._(r(2115)),
        n = r(5840),
        i = o.default.createContext(n.imageConfigDefault);
    },
    6874: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return h;
          },
        });
      let o = r(8229),
        n = r(5155),
        i = o._(r(2115)),
        s = r(2757),
        a = r(5227),
        l = r(9818),
        f = r(6654),
        u = r(9991),
        c = r(5929);
      r(3230);
      let d = r(4930);
      function p(e) {
        return "string" == typeof e ? e : (0, s.formatUrl)(e);
      }
      let h = i.default.forwardRef(function (e, t) {
        let r, o;
        let {
          href: s,
          as: h,
          children: g,
          prefetch: m = null,
          passHref: y,
          replace: b,
          shallow: w,
          scroll: v,
          onClick: x,
          onMouseEnter: k,
          onTouchStart: E,
          legacyBehavior: _ = !1,
          ...B
        } = e;
        (r = g),
          _ &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, n.jsx)("a", { children: r }));
        let O = i.default.useContext(a.AppRouterContext),
          I = !1 !== m,
          A = null === m ? l.PrefetchKind.AUTO : l.PrefetchKind.FULL,
          { href: j, as: P } = i.default.useMemo(() => {
            let e = p(s);
            return { href: e, as: h ? p(h) : e };
          }, [s, h]);
        _ && (o = i.default.Children.only(r));
        let S = _ ? o && "object" == typeof o && o.ref : t,
          R = i.default.useCallback(
            (e) => (
              I && null !== O && (0, d.mountLinkInstance)(e, j, O, A),
              () => {
                (0, d.unmountLinkInstance)(e);
              }
            ),
            [I, j, O, A]
          ),
          C = {
            ref: (0, f.useMergedRef)(R, S),
            onClick(e) {
              _ || "function" != typeof x || x(e),
                _ &&
                  o.props &&
                  "function" == typeof o.props.onClick &&
                  o.props.onClick(e),
                O &&
                  !e.defaultPrevented &&
                  !(function (e, t, r, o, n, s, a) {
                    let { nodeName: l } = e.currentTarget;
                    !(
                      "A" === l.toUpperCase() &&
                      (function (e) {
                        let t = e.currentTarget.getAttribute("target");
                        return (
                          (t && "_self" !== t) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e)
                    ) &&
                      (e.preventDefault(),
                      i.default.startTransition(() => {
                        let e = null == a || a;
                        "beforePopState" in t
                          ? t[n ? "replace" : "push"](r, o, {
                              shallow: s,
                              scroll: e,
                            })
                          : t[n ? "replace" : "push"](o || r, { scroll: e });
                      }));
                  })(e, O, j, P, b, w, v);
            },
            onMouseEnter(e) {
              _ || "function" != typeof k || k(e),
                _ &&
                  o.props &&
                  "function" == typeof o.props.onMouseEnter &&
                  o.props.onMouseEnter(e),
                O && I && (0, d.onNavigationIntent)(e.currentTarget);
            },
            onTouchStart: function (e) {
              _ || "function" != typeof E || E(e),
                _ &&
                  o.props &&
                  "function" == typeof o.props.onTouchStart &&
                  o.props.onTouchStart(e),
                O && I && (0, d.onNavigationIntent)(e.currentTarget);
            },
          };
        return (
          (0, u.isAbsoluteUrl)(P)
            ? (C.href = P)
            : (_ && !y && ("a" !== o.type || "href" in o.props)) ||
              (C.href = (0, c.addBasePath)(P)),
          _
            ? i.default.cloneElement(o, C)
            : (0, n.jsx)("a", { ...B, ...C, children: r })
        );
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7544: (e, t) => {
      "use strict";
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: o = !1,
        } = void 0 === e ? {} : e;
        return t || (r && o);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    7610: (e, t) => {
      (t.read = function (e, t, r, o, n) {
        var i,
          s,
          a = 8 * n - o - 1,
          l = (1 << a) - 1,
          f = l >> 1,
          u = -7,
          c = r ? n - 1 : 0,
          d = r ? -1 : 1,
          p = e[t + c];
        for (
          c += d, i = p & ((1 << -u) - 1), p >>= -u, u += a;
          u > 0;
          i = 256 * i + e[t + c], c += d, u -= 8
        );
        for (
          s = i & ((1 << -u) - 1), i >>= -u, u += o;
          u > 0;
          s = 256 * s + e[t + c], c += d, u -= 8
        );
        if (0 === i) i = 1 - f;
        else {
          if (i === l) return s ? NaN : (1 / 0) * (p ? -1 : 1);
          (s += Math.pow(2, o)), (i -= f);
        }
        return (p ? -1 : 1) * s * Math.pow(2, i - o);
      }),
        (t.write = function (e, t, r, o, n, i) {
          var s,
            a,
            l,
            f = 8 * i - n - 1,
            u = (1 << f) - 1,
            c = u >> 1,
            d = 5960464477539062e-23 * (23 === n),
            p = o ? 0 : i - 1,
            h = o ? 1 : -1,
            g = +(t < 0 || (0 === t && 1 / t < 0));
          for (
            isNaN((t = Math.abs(t))) || t === 1 / 0
              ? ((a = +!!isNaN(t)), (s = u))
              : ((s = Math.floor(Math.log(t) / Math.LN2)),
                t * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
                s + c >= 1 ? (t += d / l) : (t += d * Math.pow(2, 1 - c)),
                t * l >= 2 && (s++, (l /= 2)),
                s + c >= u
                  ? ((a = 0), (s = u))
                  : s + c >= 1
                  ? ((a = (t * l - 1) * Math.pow(2, n)), (s += c))
                  : ((a = t * Math.pow(2, c - 1) * Math.pow(2, n)), (s = 0)));
            n >= 8;
            e[r + p] = 255 & a, p += h, a /= 256, n -= 8
          );
          for (
            s = (s << n) | a, f += n;
            f > 0;
            e[r + p] = 255 & s, p += h, s /= 256, f -= 8
          );
          e[r + p - h] |= 128 * g;
        });
    },
    7719: (e, t) => {
      "use strict";
      (t.byteLength = function (e) {
        var t = l(e),
          r = t[0],
          o = t[1];
        return ((r + o) * 3) / 4 - o;
      }),
        (t.toByteArray = function (e) {
          var t,
            r,
            i = l(e),
            s = i[0],
            a = i[1],
            f = new n(((s + a) * 3) / 4 - a),
            u = 0,
            c = a > 0 ? s - 4 : s;
          for (r = 0; r < c; r += 4)
            (t =
              (o[e.charCodeAt(r)] << 18) |
              (o[e.charCodeAt(r + 1)] << 12) |
              (o[e.charCodeAt(r + 2)] << 6) |
              o[e.charCodeAt(r + 3)]),
              (f[u++] = (t >> 16) & 255),
              (f[u++] = (t >> 8) & 255),
              (f[u++] = 255 & t);
          return (
            2 === a &&
              ((t = (o[e.charCodeAt(r)] << 2) | (o[e.charCodeAt(r + 1)] >> 4)),
              (f[u++] = 255 & t)),
            1 === a &&
              ((t =
                (o[e.charCodeAt(r)] << 10) |
                (o[e.charCodeAt(r + 1)] << 4) |
                (o[e.charCodeAt(r + 2)] >> 2)),
              (f[u++] = (t >> 8) & 255),
              (f[u++] = 255 & t)),
            f
          );
        }),
        (t.fromByteArray = function (e) {
          for (
            var t, o = e.length, n = o % 3, i = [], s = 0, a = o - n;
            s < a;
            s += 16383
          )
            i.push(
              (function (e, t, o) {
                for (var n, i = [], s = t; s < o; s += 3)
                  (n =
                    ((e[s] << 16) & 0xff0000) +
                    ((e[s + 1] << 8) & 65280) +
                    (255 & e[s + 2])),
                    i.push(
                      r[(n >> 18) & 63] +
                        r[(n >> 12) & 63] +
                        r[(n >> 6) & 63] +
                        r[63 & n]
                    );
                return i.join("");
              })(e, s, s + 16383 > a ? a : s + 16383)
            );
          return (
            1 === n
              ? i.push(r[(t = e[o - 1]) >> 2] + r[(t << 4) & 63] + "==")
              : 2 === n &&
                i.push(
                  r[(t = (e[o - 2] << 8) + e[o - 1]) >> 10] +
                    r[(t >> 4) & 63] +
                    r[(t << 2) & 63] +
                    "="
                ),
            i.join("")
          );
        });
      for (
        var r = [],
          o = [],
          n = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          i =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          a = i.length;
        s < a;
        ++s
      )
        (r[s] = i[s]), (o[i.charCodeAt(s)] = s);
      function l(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        -1 === r && (r = t);
        var o = r === t ? 0 : 4 - (r % 4);
        return [r, o];
      }
      (o["-".charCodeAt(0)] = 62), (o["_".charCodeAt(0)] = 63);
    },
    8859: (e, t) => {
      "use strict";
      function r(e) {
        let t = {};
        for (let [r, o] of e.entries()) {
          let e = t[r];
          void 0 === e
            ? (t[r] = o)
            : Array.isArray(e)
            ? e.push(o)
            : (t[r] = [e, o]);
        }
        return t;
      }
      function o(e) {
        return "string" == typeof e
          ? e
          : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
      }
      function n(e) {
        let t = new URLSearchParams();
        for (let [r, n] of Object.entries(e))
          if (Array.isArray(n)) for (let e of n) t.append(r, o(e));
          else t.set(r, o(n));
        return t;
      }
      function i(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1;
          o < t;
          o++
        )
          r[o - 1] = arguments[o];
        for (let t of r) {
          for (let r of t.keys()) e.delete(r);
          for (let [r, o] of t.entries()) e.append(r, o);
        }
        return e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          assign: function () {
            return i;
          },
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return n;
          },
        });
    },
    8883: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        r(3230);
      let o = r(5100),
        n = r(5840);
      function i(e) {
        return void 0 !== e.default;
      }
      function s(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function a(e, t) {
        var r, a;
        let l,
          f,
          u,
          {
            src: c,
            sizes: d,
            unoptimized: p = !1,
            priority: h = !1,
            loading: g,
            className: m,
            quality: y,
            width: b,
            height: w,
            fill: v = !1,
            style: x,
            overrideSrc: k,
            onLoad: E,
            onLoadingComplete: _,
            placeholder: B = "empty",
            blurDataURL: O,
            fetchPriority: I,
            decoding: A = "async",
            layout: j,
            objectFit: P,
            objectPosition: S,
            lazyBoundary: R,
            lazyRoot: C,
            ...U
          } = e,
          { imgConf: z, showAltText: M, blurComplete: T, defaultLoader: N } = t,
          L = z || n.imageConfigDefault;
        if ("allSizes" in L) l = L;
        else {
          let e = [...L.deviceSizes, ...L.imageSizes].sort((e, t) => e - t),
            t = L.deviceSizes.sort((e, t) => e - t),
            o = null == (r = L.qualities) ? void 0 : r.sort((e, t) => e - t);
          l = { ...L, allSizes: e, deviceSizes: t, qualities: o };
        }
        if (void 0 === N)
          throw Object.defineProperty(
            Error(
              "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
            ),
            "__NEXT_ERROR_CODE",
            { value: "E163", enumerable: !1, configurable: !0 }
          );
        let $ = U.loader || N;
        delete U.loader, delete U.srcSet;
        let D = "__next_img_default" in $;
        if (D) {
          if ("custom" === l.loader)
            throw Object.defineProperty(
              Error(
                'Image with src "' +
                  c +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              ),
              "__NEXT_ERROR_CODE",
              { value: "E252", enumerable: !1, configurable: !0 }
            );
        } else {
          let e = $;
          $ = (t) => {
            let { config: r, ...o } = t;
            return e(o);
          };
        }
        if (j) {
          "fill" === j && (v = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[j];
          e && (x = { ...x, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[j];
          t && !d && (d = t);
        }
        let F = "",
          G = s(b),
          W = s(w);
        if ((a = c) && "object" == typeof a && (i(a) || void 0 !== a.src)) {
          let e = i(c) ? c.default : c;
          if (!e.src)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E460", enumerable: !1, configurable: !0 }
            );
          if (!e.height || !e.width)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E48", enumerable: !1, configurable: !0 }
            );
          if (
            ((f = e.blurWidth),
            (u = e.blurHeight),
            (O = O || e.blurDataURL),
            (F = e.src),
            !v)
          ) {
            if (G || W) {
              if (G && !W) {
                let t = G / e.width;
                W = Math.round(e.height * t);
              } else if (!G && W) {
                let t = W / e.height;
                G = Math.round(e.width * t);
              }
            } else (G = e.width), (W = e.height);
          }
        }
        let q = !h && ("lazy" === g || void 0 === g);
        (!(c = "string" == typeof c ? c : F) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((p = !0), (q = !1)),
          l.unoptimized && (p = !0),
          D &&
            !l.dangerouslyAllowSVG &&
            c.split("?", 1)[0].endsWith(".svg") &&
            (p = !0);
        let V = s(y),
          Y = Object.assign(
            v
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: P,
                  objectPosition: S,
                }
              : {},
            M ? {} : { color: "transparent" },
            x
          ),
          K =
            T || "empty" === B
              ? null
              : "blur" === B
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, o.getImageBlurSvg)({
                  widthInt: G,
                  heightInt: W,
                  blurWidth: f,
                  blurHeight: u,
                  blurDataURL: O || "",
                  objectFit: Y.objectFit,
                }) +
                '")'
              : 'url("' + B + '")',
          X = K
            ? {
                backgroundSize: Y.objectFit || "cover",
                backgroundPosition: Y.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: K,
              }
            : {},
          Z = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: o,
              width: n,
              quality: i,
              sizes: s,
              loader: a,
            } = e;
            if (o) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: f } = (function (e, t, r) {
                let { deviceSizes: o, allSizes: n } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let o; (o = e.exec(r)); o) t.push(parseInt(o[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: n.filter((t) => t >= o[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: n, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: o, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => n.find((t) => t >= e) || n[n.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, n, s),
              u = l.length - 1;
            return {
              sizes: s || "w" !== f ? s : "100vw",
              srcSet: l
                .map(
                  (e, o) =>
                    a({ config: t, src: r, quality: i, width: e }) +
                    " " +
                    ("w" === f ? e : o + 1) +
                    f
                )
                .join(", "),
              src: a({ config: t, src: r, quality: i, width: l[u] }),
            };
          })({
            config: l,
            src: c,
            unoptimized: p,
            width: G,
            quality: V,
            sizes: d,
            loader: $,
          });
        return {
          props: {
            ...U,
            loading: q ? "lazy" : g,
            fetchPriority: I,
            width: G,
            height: W,
            decoding: A,
            className: m,
            style: { ...Y, ...X },
            sizes: Z.sizes,
            srcSet: Z.srcSet,
            src: k || Z.src,
          },
          meta: { unoptimized: p, priority: h, placeholder: B, fill: v },
        };
      }
    },
    9688: (e, t, r) => {
      "use strict";
      r.d(t, { QP: () => ef });
      let o = (e) => {
          let t = a(e),
            { conflictingClassGroups: r, conflictingClassGroupModifiers: o } =
              e;
          return {
            getClassGroupId: (e) => {
              let r = e.split("-");
              return (
                "" === r[0] && 1 !== r.length && r.shift(), n(r, t) || s(e)
              );
            },
            getConflictingClassGroupIds: (e, t) => {
              let n = r[e] || [];
              return t && o[e] ? [...n, ...o[e]] : n;
            },
          };
        },
        n = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let r = e[0],
            o = t.nextPart.get(r),
            i = o ? n(e.slice(1), o) : void 0;
          if (i) return i;
          if (0 === t.validators.length) return;
          let s = e.join("-");
          return t.validators.find(({ validator: e }) => e(s))?.classGroupId;
        },
        i = /^\[(.+)\]$/,
        s = (e) => {
          if (i.test(e)) {
            let t = i.exec(e)[1],
              r = t?.substring(0, t.indexOf(":"));
            if (r) return "arbitrary.." + r;
          }
        },
        a = (e) => {
          let { theme: t, classGroups: r } = e,
            o = { nextPart: new Map(), validators: [] };
          for (let e in r) l(r[e], o, e, t);
          return o;
        },
        l = (e, t, r, o) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? t : f(t, e)).classGroupId = r;
              return;
            }
            if ("function" == typeof e) {
              if (u(e)) {
                l(e(o), t, r, o);
                return;
              }
              t.validators.push({ validator: e, classGroupId: r });
              return;
            }
            Object.entries(e).forEach(([e, n]) => {
              l(n, f(t, e), r, o);
            });
          });
        },
        f = (e, t) => {
          let r = e;
          return (
            t.split("-").forEach((e) => {
              r.nextPart.has(e) ||
                r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (r = r.nextPart.get(e));
            }),
            r
          );
        },
        u = (e) => e.isThemeGetter,
        c = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let t = 0,
            r = new Map(),
            o = new Map(),
            n = (n, i) => {
              r.set(n, i), ++t > e && ((t = 0), (o = r), (r = new Map()));
            };
          return {
            get(e) {
              let t = r.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = o.get(e))
                ? (n(e, t), t)
                : void 0;
            },
            set(e, t) {
              r.has(e) ? r.set(e, t) : n(e, t);
            },
          };
        },
        d = (e) => {
          let { prefix: t, experimentalParseClassName: r } = e,
            o = (e) => {
              let t;
              let r = [],
                o = 0,
                n = 0,
                i = 0;
              for (let s = 0; s < e.length; s++) {
                let a = e[s];
                if (0 === o && 0 === n) {
                  if (":" === a) {
                    r.push(e.slice(i, s)), (i = s + 1);
                    continue;
                  }
                  if ("/" === a) {
                    t = s;
                    continue;
                  }
                }
                "[" === a
                  ? o++
                  : "]" === a
                  ? o--
                  : "(" === a
                  ? n++
                  : ")" === a && n--;
              }
              let s = 0 === r.length ? e : e.substring(i),
                a = p(s);
              return {
                modifiers: r,
                hasImportantModifier: a !== s,
                baseClassName: a,
                maybePostfixModifierPosition: t && t > i ? t - i : void 0,
              };
            };
          if (t) {
            let e = t + ":",
              r = o;
            o = (t) =>
              t.startsWith(e)
                ? r(t.substring(e.length))
                : {
                    isExternal: !0,
                    modifiers: [],
                    hasImportantModifier: !1,
                    baseClassName: t,
                    maybePostfixModifierPosition: void 0,
                  };
          }
          if (r) {
            let e = o;
            o = (t) => r({ className: t, parseClassName: e });
          }
          return o;
        },
        p = (e) =>
          e.endsWith("!")
            ? e.substring(0, e.length - 1)
            : e.startsWith("!")
            ? e.substring(1)
            : e,
        h = (e) => {
          let t = Object.fromEntries(
            e.orderSensitiveModifiers.map((e) => [e, !0])
          );
          return (e) => {
            if (e.length <= 1) return e;
            let r = [],
              o = [];
            return (
              e.forEach((e) => {
                "[" === e[0] || t[e]
                  ? (r.push(...o.sort(), e), (o = []))
                  : o.push(e);
              }),
              r.push(...o.sort()),
              r
            );
          };
        },
        g = (e) => ({
          cache: c(e.cacheSize),
          parseClassName: d(e),
          sortModifiers: h(e),
          ...o(e),
        }),
        m = /\s+/,
        y = (e, t) => {
          let {
              parseClassName: r,
              getClassGroupId: o,
              getConflictingClassGroupIds: n,
              sortModifiers: i,
            } = t,
            s = [],
            a = e.trim().split(m),
            l = "";
          for (let e = a.length - 1; e >= 0; e -= 1) {
            let t = a[e],
              {
                isExternal: f,
                modifiers: u,
                hasImportantModifier: c,
                baseClassName: d,
                maybePostfixModifierPosition: p,
              } = r(t);
            if (f) {
              l = t + (l.length > 0 ? " " + l : l);
              continue;
            }
            let h = !!p,
              g = o(h ? d.substring(0, p) : d);
            if (!g) {
              if (!h || !(g = o(d))) {
                l = t + (l.length > 0 ? " " + l : l);
                continue;
              }
              h = !1;
            }
            let m = i(u).join(":"),
              y = c ? m + "!" : m,
              b = y + g;
            if (s.includes(b)) continue;
            s.push(b);
            let w = n(g, h);
            for (let e = 0; e < w.length; ++e) {
              let t = w[e];
              s.push(y + t);
            }
            l = t + (l.length > 0 ? " " + l : l);
          }
          return l;
        };
      function b() {
        let e,
          t,
          r = 0,
          o = "";
        for (; r < arguments.length; )
          (e = arguments[r++]) && (t = w(e)) && (o && (o += " "), (o += t));
        return o;
      }
      let w = (e) => {
          let t;
          if ("string" == typeof e) return e;
          let r = "";
          for (let o = 0; o < e.length; o++)
            e[o] && (t = w(e[o])) && (r && (r += " "), (r += t));
          return r;
        },
        v = (e) => {
          let t = (t) => t[e] || [];
          return (t.isThemeGetter = !0), t;
        },
        x = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
        k = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
        E = /^\d+\/\d+$/,
        _ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        B =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        O = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
        I = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        A =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        j = (e) => E.test(e),
        P = (e) => !!e && !Number.isNaN(Number(e)),
        S = (e) => !!e && Number.isInteger(Number(e)),
        R = (e) => e.endsWith("%") && P(e.slice(0, -1)),
        C = (e) => _.test(e),
        U = () => !0,
        z = (e) => B.test(e) && !O.test(e),
        M = () => !1,
        T = (e) => I.test(e),
        N = (e) => A.test(e),
        L = (e) => !D(e) && !Y(e),
        $ = (e) => ee(e, en, M),
        D = (e) => x.test(e),
        F = (e) => ee(e, ei, z),
        G = (e) => ee(e, es, P),
        W = (e) => ee(e, er, M),
        q = (e) => ee(e, eo, N),
        V = (e) => ee(e, el, T),
        Y = (e) => k.test(e),
        K = (e) => et(e, ei),
        X = (e) => et(e, ea),
        Z = (e) => et(e, er),
        H = (e) => et(e, en),
        J = (e) => et(e, eo),
        Q = (e) => et(e, el, !0),
        ee = (e, t, r) => {
          let o = x.exec(e);
          return !!o && (o[1] ? t(o[1]) : r(o[2]));
        },
        et = (e, t, r = !1) => {
          let o = k.exec(e);
          return !!o && (o[1] ? t(o[1]) : r);
        },
        er = (e) => "position" === e || "percentage" === e,
        eo = (e) => "image" === e || "url" === e,
        en = (e) => "length" === e || "size" === e || "bg-size" === e,
        ei = (e) => "length" === e,
        es = (e) => "number" === e,
        ea = (e) => "family-name" === e,
        el = (e) => "shadow" === e;
      Symbol.toStringTag;
      let ef = (function (e, ...t) {
        let r, o, n;
        let i = function (a) {
          return (
            (o = (r = g(t.reduce((e, t) => t(e), e()))).cache.get),
            (n = r.cache.set),
            (i = s),
            s(a)
          );
        };
        function s(e) {
          let t = o(e);
          if (t) return t;
          let i = y(e, r);
          return n(e, i), i;
        }
        return function () {
          return i(b.apply(null, arguments));
        };
      })(() => {
        let e = v("color"),
          t = v("font"),
          r = v("text"),
          o = v("font-weight"),
          n = v("tracking"),
          i = v("leading"),
          s = v("breakpoint"),
          a = v("container"),
          l = v("spacing"),
          f = v("radius"),
          u = v("shadow"),
          c = v("inset-shadow"),
          d = v("text-shadow"),
          p = v("drop-shadow"),
          h = v("blur"),
          g = v("perspective"),
          m = v("aspect"),
          y = v("ease"),
          b = v("animate"),
          w = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          x = () => [
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            "left-top",
            "top-right",
            "right-top",
            "bottom-right",
            "right-bottom",
            "bottom-left",
            "left-bottom",
          ],
          k = () => [...x(), Y, D],
          E = () => ["auto", "hidden", "clip", "visible", "scroll"],
          _ = () => ["auto", "contain", "none"],
          B = () => [Y, D, l],
          O = () => [j, "full", "auto", ...B()],
          I = () => [S, "none", "subgrid", Y, D],
          A = () => ["auto", { span: ["full", S, Y, D] }, S, Y, D],
          z = () => [S, "auto", Y, D],
          M = () => ["auto", "min", "max", "fr", Y, D],
          T = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
            "center-safe",
            "end-safe",
          ],
          N = () => [
            "start",
            "end",
            "center",
            "stretch",
            "center-safe",
            "end-safe",
          ],
          ee = () => ["auto", ...B()],
          et = () => [
            j,
            "auto",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit",
            ...B(),
          ],
          er = () => [e, Y, D],
          eo = () => [...x(), Z, W, { position: [Y, D] }],
          en = () => [
            "no-repeat",
            { repeat: ["", "x", "y", "space", "round"] },
          ],
          ei = () => ["auto", "cover", "contain", H, $, { size: [Y, D] }],
          es = () => [R, K, F],
          ea = () => ["", "none", "full", f, Y, D],
          el = () => ["", P, K, F],
          ef = () => ["solid", "dashed", "dotted", "double"],
          eu = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          ec = () => [P, R, Z, W],
          ed = () => ["", "none", h, Y, D],
          ep = () => ["none", P, Y, D],
          eh = () => ["none", P, Y, D],
          eg = () => [P, Y, D],
          em = () => [j, "full", ...B()];
        return {
          cacheSize: 500,
          theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [C],
            breakpoint: [C],
            color: [U],
            container: [C],
            "drop-shadow": [C],
            ease: ["in", "out", "in-out"],
            font: [L],
            "font-weight": [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
            ],
            "inset-shadow": [C],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: [
              "dramatic",
              "near",
              "normal",
              "midrange",
              "distant",
              "none",
            ],
            radius: [C],
            shadow: [C],
            spacing: ["px", P],
            text: [C],
            "text-shadow": [C],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", j, D, Y, m] }],
            container: ["container"],
            columns: [{ columns: [P, D, Y, a] }],
            "break-after": [{ "break-after": w() }],
            "break-before": [{ "break-before": w() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            sr: ["sr-only", "not-sr-only"],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: k() }],
            overflow: [{ overflow: E() }],
            "overflow-x": [{ "overflow-x": E() }],
            "overflow-y": [{ "overflow-y": E() }],
            overscroll: [{ overscroll: _() }],
            "overscroll-x": [{ "overscroll-x": _() }],
            "overscroll-y": [{ "overscroll-y": _() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: O() }],
            "inset-x": [{ "inset-x": O() }],
            "inset-y": [{ "inset-y": O() }],
            start: [{ start: O() }],
            end: [{ end: O() }],
            top: [{ top: O() }],
            right: [{ right: O() }],
            bottom: [{ bottom: O() }],
            left: [{ left: O() }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: [S, "auto", Y, D] }],
            basis: [{ basis: [j, "full", "auto", a, ...B()] }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
            flex: [{ flex: [P, j, "auto", "initial", "none", D] }],
            grow: [{ grow: ["", P, Y, D] }],
            shrink: [{ shrink: ["", P, Y, D] }],
            order: [{ order: [S, "first", "last", "none", Y, D] }],
            "grid-cols": [{ "grid-cols": I() }],
            "col-start-end": [{ col: A() }],
            "col-start": [{ "col-start": z() }],
            "col-end": [{ "col-end": z() }],
            "grid-rows": [{ "grid-rows": I() }],
            "row-start-end": [{ row: A() }],
            "row-start": [{ "row-start": z() }],
            "row-end": [{ "row-end": z() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": M() }],
            "auto-rows": [{ "auto-rows": M() }],
            gap: [{ gap: B() }],
            "gap-x": [{ "gap-x": B() }],
            "gap-y": [{ "gap-y": B() }],
            "justify-content": [{ justify: [...T(), "normal"] }],
            "justify-items": [{ "justify-items": [...N(), "normal"] }],
            "justify-self": [{ "justify-self": ["auto", ...N()] }],
            "align-content": [{ content: ["normal", ...T()] }],
            "align-items": [{ items: [...N(), { baseline: ["", "last"] }] }],
            "align-self": [
              { self: ["auto", ...N(), { baseline: ["", "last"] }] },
            ],
            "place-content": [{ "place-content": T() }],
            "place-items": [{ "place-items": [...N(), "baseline"] }],
            "place-self": [{ "place-self": ["auto", ...N()] }],
            p: [{ p: B() }],
            px: [{ px: B() }],
            py: [{ py: B() }],
            ps: [{ ps: B() }],
            pe: [{ pe: B() }],
            pt: [{ pt: B() }],
            pr: [{ pr: B() }],
            pb: [{ pb: B() }],
            pl: [{ pl: B() }],
            m: [{ m: ee() }],
            mx: [{ mx: ee() }],
            my: [{ my: ee() }],
            ms: [{ ms: ee() }],
            me: [{ me: ee() }],
            mt: [{ mt: ee() }],
            mr: [{ mr: ee() }],
            mb: [{ mb: ee() }],
            ml: [{ ml: ee() }],
            "space-x": [{ "space-x": B() }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": B() }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{ size: et() }],
            w: [{ w: [a, "screen", ...et()] }],
            "min-w": [{ "min-w": [a, "screen", "none", ...et()] }],
            "max-w": [
              {
                "max-w": [
                  a,
                  "screen",
                  "none",
                  "prose",
                  { screen: [s] },
                  ...et(),
                ],
              },
            ],
            h: [{ h: ["screen", "lh", ...et()] }],
            "min-h": [{ "min-h": ["screen", "lh", "none", ...et()] }],
            "max-h": [{ "max-h": ["screen", "lh", ...et()] }],
            "font-size": [{ text: ["base", r, K, F] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{ font: [o, Y, G] }],
            "font-stretch": [
              {
                "font-stretch": [
                  "ultra-condensed",
                  "extra-condensed",
                  "condensed",
                  "semi-condensed",
                  "normal",
                  "semi-expanded",
                  "expanded",
                  "extra-expanded",
                  "ultra-expanded",
                  R,
                  D,
                ],
              },
            ],
            "font-family": [{ font: [X, D, t] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{ tracking: [n, Y, D] }],
            "line-clamp": [{ "line-clamp": [P, "none", Y, G] }],
            leading: [{ leading: [i, ...B()] }],
            "list-image": [{ "list-image": ["none", Y, D] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "list-style-type": [{ list: ["disc", "decimal", "none", Y, D] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "placeholder-color": [{ placeholder: er() }],
            "text-color": [{ text: er() }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...ef(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: [P, "from-font", "auto", Y, F] },
            ],
            "text-decoration-color": [{ decoration: er() }],
            "underline-offset": [{ "underline-offset": [P, "auto", Y, D] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: B() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  Y,
                  D,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", Y, D] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: eo() }],
            "bg-repeat": [{ bg: en() }],
            "bg-size": [{ bg: ei() }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    linear: [
                      { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                      S,
                      Y,
                      D,
                    ],
                    radial: ["", Y, D],
                    conic: [S, Y, D],
                  },
                  J,
                  q,
                ],
              },
            ],
            "bg-color": [{ bg: er() }],
            "gradient-from-pos": [{ from: es() }],
            "gradient-via-pos": [{ via: es() }],
            "gradient-to-pos": [{ to: es() }],
            "gradient-from": [{ from: er() }],
            "gradient-via": [{ via: er() }],
            "gradient-to": [{ to: er() }],
            rounded: [{ rounded: ea() }],
            "rounded-s": [{ "rounded-s": ea() }],
            "rounded-e": [{ "rounded-e": ea() }],
            "rounded-t": [{ "rounded-t": ea() }],
            "rounded-r": [{ "rounded-r": ea() }],
            "rounded-b": [{ "rounded-b": ea() }],
            "rounded-l": [{ "rounded-l": ea() }],
            "rounded-ss": [{ "rounded-ss": ea() }],
            "rounded-se": [{ "rounded-se": ea() }],
            "rounded-ee": [{ "rounded-ee": ea() }],
            "rounded-es": [{ "rounded-es": ea() }],
            "rounded-tl": [{ "rounded-tl": ea() }],
            "rounded-tr": [{ "rounded-tr": ea() }],
            "rounded-br": [{ "rounded-br": ea() }],
            "rounded-bl": [{ "rounded-bl": ea() }],
            "border-w": [{ border: el() }],
            "border-w-x": [{ "border-x": el() }],
            "border-w-y": [{ "border-y": el() }],
            "border-w-s": [{ "border-s": el() }],
            "border-w-e": [{ "border-e": el() }],
            "border-w-t": [{ "border-t": el() }],
            "border-w-r": [{ "border-r": el() }],
            "border-w-b": [{ "border-b": el() }],
            "border-w-l": [{ "border-l": el() }],
            "divide-x": [{ "divide-x": el() }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": el() }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{ border: [...ef(), "hidden", "none"] }],
            "divide-style": [{ divide: [...ef(), "hidden", "none"] }],
            "border-color": [{ border: er() }],
            "border-color-x": [{ "border-x": er() }],
            "border-color-y": [{ "border-y": er() }],
            "border-color-s": [{ "border-s": er() }],
            "border-color-e": [{ "border-e": er() }],
            "border-color-t": [{ "border-t": er() }],
            "border-color-r": [{ "border-r": er() }],
            "border-color-b": [{ "border-b": er() }],
            "border-color-l": [{ "border-l": er() }],
            "divide-color": [{ divide: er() }],
            "outline-style": [{ outline: [...ef(), "none", "hidden"] }],
            "outline-offset": [{ "outline-offset": [P, Y, D] }],
            "outline-w": [{ outline: ["", P, K, F] }],
            "outline-color": [{ outline: er() }],
            shadow: [{ shadow: ["", "none", u, Q, V] }],
            "shadow-color": [{ shadow: er() }],
            "inset-shadow": [{ "inset-shadow": ["none", c, Q, V] }],
            "inset-shadow-color": [{ "inset-shadow": er() }],
            "ring-w": [{ ring: el() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: er() }],
            "ring-offset-w": [{ "ring-offset": [P, F] }],
            "ring-offset-color": [{ "ring-offset": er() }],
            "inset-ring-w": [{ "inset-ring": el() }],
            "inset-ring-color": [{ "inset-ring": er() }],
            "text-shadow": [{ "text-shadow": ["none", d, Q, V] }],
            "text-shadow-color": [{ "text-shadow": er() }],
            opacity: [{ opacity: [P, Y, D] }],
            "mix-blend": [
              { "mix-blend": [...eu(), "plus-darker", "plus-lighter"] },
            ],
            "bg-blend": [{ "bg-blend": eu() }],
            "mask-clip": [
              {
                "mask-clip": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
              "mask-no-clip",
            ],
            "mask-composite": [
              { mask: ["add", "subtract", "intersect", "exclude"] },
            ],
            "mask-image-linear-pos": [{ "mask-linear": [P] }],
            "mask-image-linear-from-pos": [{ "mask-linear-from": ec() }],
            "mask-image-linear-to-pos": [{ "mask-linear-to": ec() }],
            "mask-image-linear-from-color": [{ "mask-linear-from": er() }],
            "mask-image-linear-to-color": [{ "mask-linear-to": er() }],
            "mask-image-t-from-pos": [{ "mask-t-from": ec() }],
            "mask-image-t-to-pos": [{ "mask-t-to": ec() }],
            "mask-image-t-from-color": [{ "mask-t-from": er() }],
            "mask-image-t-to-color": [{ "mask-t-to": er() }],
            "mask-image-r-from-pos": [{ "mask-r-from": ec() }],
            "mask-image-r-to-pos": [{ "mask-r-to": ec() }],
            "mask-image-r-from-color": [{ "mask-r-from": er() }],
            "mask-image-r-to-color": [{ "mask-r-to": er() }],
            "mask-image-b-from-pos": [{ "mask-b-from": ec() }],
            "mask-image-b-to-pos": [{ "mask-b-to": ec() }],
            "mask-image-b-from-color": [{ "mask-b-from": er() }],
            "mask-image-b-to-color": [{ "mask-b-to": er() }],
            "mask-image-l-from-pos": [{ "mask-l-from": ec() }],
            "mask-image-l-to-pos": [{ "mask-l-to": ec() }],
            "mask-image-l-from-color": [{ "mask-l-from": er() }],
            "mask-image-l-to-color": [{ "mask-l-to": er() }],
            "mask-image-x-from-pos": [{ "mask-x-from": ec() }],
            "mask-image-x-to-pos": [{ "mask-x-to": ec() }],
            "mask-image-x-from-color": [{ "mask-x-from": er() }],
            "mask-image-x-to-color": [{ "mask-x-to": er() }],
            "mask-image-y-from-pos": [{ "mask-y-from": ec() }],
            "mask-image-y-to-pos": [{ "mask-y-to": ec() }],
            "mask-image-y-from-color": [{ "mask-y-from": er() }],
            "mask-image-y-to-color": [{ "mask-y-to": er() }],
            "mask-image-radial": [{ "mask-radial": [Y, D] }],
            "mask-image-radial-from-pos": [{ "mask-radial-from": ec() }],
            "mask-image-radial-to-pos": [{ "mask-radial-to": ec() }],
            "mask-image-radial-from-color": [{ "mask-radial-from": er() }],
            "mask-image-radial-to-color": [{ "mask-radial-to": er() }],
            "mask-image-radial-shape": [
              { "mask-radial": ["circle", "ellipse"] },
            ],
            "mask-image-radial-size": [
              {
                "mask-radial": [
                  { closest: ["side", "corner"], farthest: ["side", "corner"] },
                ],
              },
            ],
            "mask-image-radial-pos": [{ "mask-radial-at": x() }],
            "mask-image-conic-pos": [{ "mask-conic": [P] }],
            "mask-image-conic-from-pos": [{ "mask-conic-from": ec() }],
            "mask-image-conic-to-pos": [{ "mask-conic-to": ec() }],
            "mask-image-conic-from-color": [{ "mask-conic-from": er() }],
            "mask-image-conic-to-color": [{ "mask-conic-to": er() }],
            "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
            "mask-origin": [
              {
                "mask-origin": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
            ],
            "mask-position": [{ mask: eo() }],
            "mask-repeat": [{ mask: en() }],
            "mask-size": [{ mask: ei() }],
            "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
            "mask-image": [{ mask: ["none", Y, D] }],
            filter: [{ filter: ["", "none", Y, D] }],
            blur: [{ blur: ed() }],
            brightness: [{ brightness: [P, Y, D] }],
            contrast: [{ contrast: [P, Y, D] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", p, Q, V] }],
            "drop-shadow-color": [{ "drop-shadow": er() }],
            grayscale: [{ grayscale: ["", P, Y, D] }],
            "hue-rotate": [{ "hue-rotate": [P, Y, D] }],
            invert: [{ invert: ["", P, Y, D] }],
            saturate: [{ saturate: [P, Y, D] }],
            sepia: [{ sepia: ["", P, Y, D] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none", Y, D] }],
            "backdrop-blur": [{ "backdrop-blur": ed() }],
            "backdrop-brightness": [{ "backdrop-brightness": [P, Y, D] }],
            "backdrop-contrast": [{ "backdrop-contrast": [P, Y, D] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": ["", P, Y, D] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [P, Y, D] }],
            "backdrop-invert": [{ "backdrop-invert": ["", P, Y, D] }],
            "backdrop-opacity": [{ "backdrop-opacity": [P, Y, D] }],
            "backdrop-saturate": [{ "backdrop-saturate": [P, Y, D] }],
            "backdrop-sepia": [{ "backdrop-sepia": ["", P, Y, D] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": B() }],
            "border-spacing-x": [{ "border-spacing-x": B() }],
            "border-spacing-y": [{ "border-spacing-y": B() }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "",
                  "all",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  "none",
                  Y,
                  D,
                ],
              },
            ],
            "transition-behavior": [{ transition: ["normal", "discrete"] }],
            duration: [{ duration: [P, "initial", Y, D] }],
            ease: [{ ease: ["linear", "initial", y, Y, D] }],
            delay: [{ delay: [P, Y, D] }],
            animate: [{ animate: ["none", b, Y, D] }],
            backface: [{ backface: ["hidden", "visible"] }],
            perspective: [{ perspective: [g, Y, D] }],
            "perspective-origin": [{ "perspective-origin": k() }],
            rotate: [{ rotate: ep() }],
            "rotate-x": [{ "rotate-x": ep() }],
            "rotate-y": [{ "rotate-y": ep() }],
            "rotate-z": [{ "rotate-z": ep() }],
            scale: [{ scale: eh() }],
            "scale-x": [{ "scale-x": eh() }],
            "scale-y": [{ "scale-y": eh() }],
            "scale-z": [{ "scale-z": eh() }],
            "scale-3d": ["scale-3d"],
            skew: [{ skew: eg() }],
            "skew-x": [{ "skew-x": eg() }],
            "skew-y": [{ "skew-y": eg() }],
            transform: [{ transform: [Y, D, "", "none", "gpu", "cpu"] }],
            "transform-origin": [{ origin: k() }],
            "transform-style": [{ transform: ["3d", "flat"] }],
            translate: [{ translate: em() }],
            "translate-x": [{ "translate-x": em() }],
            "translate-y": [{ "translate-y": em() }],
            "translate-z": [{ "translate-z": em() }],
            "translate-none": ["translate-none"],
            accent: [{ accent: er() }],
            appearance: [{ appearance: ["none", "auto"] }],
            "caret-color": [{ caret: er() }],
            "color-scheme": [
              {
                scheme: [
                  "normal",
                  "dark",
                  "light",
                  "light-dark",
                  "only-dark",
                  "only-light",
                ],
              },
            ],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  Y,
                  D,
                ],
              },
            ],
            "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
            "pointer-events": [{ "pointer-events": ["auto", "none"] }],
            resize: [{ resize: ["none", "", "y", "x"] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": B() }],
            "scroll-mx": [{ "scroll-mx": B() }],
            "scroll-my": [{ "scroll-my": B() }],
            "scroll-ms": [{ "scroll-ms": B() }],
            "scroll-me": [{ "scroll-me": B() }],
            "scroll-mt": [{ "scroll-mt": B() }],
            "scroll-mr": [{ "scroll-mr": B() }],
            "scroll-mb": [{ "scroll-mb": B() }],
            "scroll-ml": [{ "scroll-ml": B() }],
            "scroll-p": [{ "scroll-p": B() }],
            "scroll-px": [{ "scroll-px": B() }],
            "scroll-py": [{ "scroll-py": B() }],
            "scroll-ps": [{ "scroll-ps": B() }],
            "scroll-pe": [{ "scroll-pe": B() }],
            "scroll-pt": [{ "scroll-pt": B() }],
            "scroll-pr": [{ "scroll-pr": B() }],
            "scroll-pb": [{ "scroll-pb": B() }],
            "scroll-pl": [{ "scroll-pl": B() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              {
                "will-change": [
                  "auto",
                  "scroll",
                  "contents",
                  "transform",
                  Y,
                  D,
                ],
              },
            ],
            fill: [{ fill: ["none", ...er()] }],
            "stroke-w": [{ stroke: [P, K, F, G] }],
            stroke: [{ stroke: ["none", ...er()] }],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-x",
              "border-w-y",
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-x",
              "border-color-y",
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": [
              "translate",
              "translate-x",
              "translate-y",
              "translate-z",
            ],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
          orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection",
          ],
        };
      });
    },
    9991: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DecodeError: function () {
            return h;
          },
          MiddlewareNotFoundError: function () {
            return b;
          },
          MissingStaticPage: function () {
            return y;
          },
          NormalizeError: function () {
            return g;
          },
          PageNotFoundError: function () {
            return m;
          },
          SP: function () {
            return d;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return o;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return s;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return i;
          },
          isResSent: function () {
            return f;
          },
          loadGetInitialProps: function () {
            return c;
          },
          normalizeRepeatedSlashes: function () {
            return u;
          },
          stringifyError: function () {
            return w;
          },
        });
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function o(e) {
        let t,
          r = !1;
        return function () {
          for (var o = arguments.length, n = Array(o), i = 0; i < o; i++)
            n[i] = arguments[i];
          return r || ((r = !0), (t = e(...n))), t;
        };
      }
      let n = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        i = (e) => n.test(e);
      function s() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + "//" + t + (r ? ":" + r : "");
      }
      function a() {
        let { href: e } = window.location,
          t = s();
        return e.substring(t.length);
      }
      function l(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function f(e) {
        return e.finished || e.headersSent;
      }
      function u(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function c(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await c(t.Component, t.ctx) }
            : {};
        let o = await e.getInitialProps(t);
        if (r && f(r)) return o;
        if (!o)
          throw Object.defineProperty(
            Error(
              '"' +
                l(e) +
                '.getInitialProps()" should resolve to an object. But found "' +
                o +
                '" instead.'
            ),
            "__NEXT_ERROR_CODE",
            { value: "E394", enumerable: !1, configurable: !0 }
          );
        return o;
      }
      let d = "undefined" != typeof performance,
        p =
          d &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class h extends Error {}
      class g extends Error {}
      class m extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class y extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class b extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function w(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
  },
]);
