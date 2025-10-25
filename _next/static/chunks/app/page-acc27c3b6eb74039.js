(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    614: (t, r, e) => {
      Promise.resolve().then(e.bind(e, 3843)),
        Promise.resolve().then(e.t.bind(e, 6874, 23)),
        Promise.resolve().then(e.t.bind(e, 3063, 23));
    },
    3843: (t, r, e) => {
      "use strict";
      e.d(r, { Separator: () => l });
      var a = e(5155),
        o = e(747),
        n = e(2596),
        i = e(9688);
      function l(t) {
        let {
          className: r,
          orientation: e = "horizontal",
          decorative: l = !0,
          ...s
        } = t;
        return (0, a.jsx)(o.b, {
          className: (function () {
            for (var t = arguments.length, r = Array(t), e = 0; e < t; e++)
              r[e] = arguments[e];
            return (0, i.QP)((0, n.$)(r));
          })(
            "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px",
            r
          ),
          "data-slot": "separator",
          decorative: l,
          orientation: e,
          ...s,
        });
      }
      e(4134).hp;
    },
  },
  (t) => {
    var r = (r) => t((t.s = r));
    t.O(0, [543, 441, 684, 358], () => r(614)), (_N_E = t.O());
  },
]);
