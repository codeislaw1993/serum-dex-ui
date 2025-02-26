webpackJsonp([7], {
  108: function (e, t, n) {
    'use strict';
    function o(e) {
      return (
        (t = (function (t) {
          function n(e, n) {
            var o = t.call(this, e, n) || this;
            return (
              (o._getWrappedComponent = function (e) {
                o._instance = e;
              }),
              o
            );
          }
          return (
            i.__extends(n, t),
            (n.prototype.componentDidMount = function () {
              this._instance.componentWillEnter &&
                this.context.lifecycleProvider.registerWillEnterCb(
                  this._instance.componentWillEnter.bind(this._instance),
                ),
                this._instance.componentDidEnter &&
                  this.context.lifecycleProvider.registerDidEnterCb(
                    this._instance.componentDidEnter.bind(this._instance),
                  ),
                this._instance.componentWillLeave &&
                  this.context.lifecycleProvider.registerWillLeaveCb(
                    this._instance.componentWillLeave.bind(this._instance),
                  ),
                this._instance.componentDidLeave &&
                  this.context.lifecycleProvider.registerDidLeaveCb(
                    this._instance.componentDidLeave.bind(this._instance),
                  );
            }),
            (n.prototype.render = function () {
              return r.createElement(
                e,
                i.__assign({}, this.props, { ref: this._getWrappedComponent }),
                this.props.children,
              );
            }),
            n
          );
        })(r.PureComponent)),
        (t.displayName = 'Lifecycle Consumer'),
        (t.contextTypes = { lifecycleProvider: s.object }),
        t
      );
      var t;
    }
    var i, r, s, a;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (i = n(5)),
      (r = n(2)),
      (s = n(86)),
      (a = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return i.__extends(t, e), t;
      })(r.PureComponent)),
      (t.LifecycleConsumer = a),
      (t.makeTransitionGroupLifecycleConsumer = o);
  },
  153: function (e, t) {
    e.exports = { body: 'body-1yAIljnK-' };
  },
  154: function (e, t) {
    e.exports = { footer: 'footer-AwxgkLHY-' };
  },
  155: function (e, t) {
    e.exports = { header: 'header-2Hz0Lxou-', close: 'close-3H_MMLbw-' };
  },
  156: function (e, t) {
    e.exports = { message: 'message-1CYdTy_T-', error: 'error-1u_m-Ehm-' };
  },
  157: function (e, t) {
    e.exports = {
      dialog: 'dialog-13-QRYuG-',
      rounded: 'rounded-1GLivxii-',
      shadowed: 'shadowed-30OTTAts-',
    };
  },
  183: function (e, t, n) {
    'use strict';
    function o(e) {
      return i.createElement(
        'div',
        { className: r.body, ref: e.reference },
        e.children,
      );
    }
    var i, r;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (i = n(2)),
      (r = n(153)),
      (t.Body = o);
  },
  184: function (e, t, n) {
    'use strict';
    var o, i, r, s;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (o = n(186)),
      (t.Header = o.Header),
      (i = n(185)),
      (t.Footer = i.Footer),
      (r = n(183)),
      (t.Body = r.Body),
      (s = n(187)),
      (t.Message = s.Message);
  },
  185: function (e, t, n) {
    'use strict';
    function o(e) {
      return i.createElement(
        'div',
        { className: r.footer, ref: e.reference },
        e.children,
      );
    }
    var i, r;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (i = n(2)),
      (r = n(154)),
      (t.Footer = o);
  },
  186: function (e, t, n) {
    'use strict';
    function o(e) {
      return i.createElement(
        'div',
        { className: r.header, 'data-dragg-area': !0, ref: e.reference },
        e.children,
        i.createElement(a.Icon, {
          className: r.close,
          icon: s,
          onClick: e.onClose,
        }),
      );
    }
    var i, r, s, a;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (i = n(2)),
      (r = n(155)),
      (s = n(109)),
      (a = n(76)),
      (t.Header = o);
  },
  187: function (e, t, n) {
    'use strict';
    function o(e) {
      var t, n;
      return (
        e.text
          ? (t = i.createElement('span', null, e.text))
          : e.html &&
            (t = i.createElement('span', {
              dangerouslySetInnerHTML: { __html: e.html },
            })),
        (n = r.message),
        e.isError && (n += ' ' + r.error),
        i.createElement(
          s.CSSTransitionGroup,
          {
            transitionName: 'message',
            transitionEnterTimeout: l.dur,
            transitionLeaveTimeout: l.dur,
          },
          t
            ? i.createElement(
                'div',
                { className: n, key: '0' },
                i.createElement(
                  a.OutsideEvent,
                  { mouseDown: !0, touchStart: !0, handler: e.onClickOutside },
                  t,
                ),
              )
            : null,
        )
      );
    }
    var i, r, s, a, l;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (i = n(2)),
      (r = n(156)),
      (s = n(45)),
      (a = n(107)),
      (l = n(28)),
      (t.Message = o);
  },
  188: function (e, t, n) {
    'use strict';
    function o(e) {
      var t,
        n = e.rounded,
        o = void 0 === n || n,
        a = e.shadowed,
        l = void 0 === a || a,
        u = e.className,
        c = void 0 === u ? '' : u,
        d = s(
          r.dialog,
          ((t = {}),
          (t[c] = !!c),
          (t[r.rounded] = o),
          (t[r.shadowed] = l),
          (t[r.animated] = r.animated),
          t),
        ),
        p = {
          bottom: e.bottom,
          left: e.left,
          maxWidth: e.width,
          right: e.right,
          top: e.top,
          zIndex: e.zIndex,
        };
      return i.createElement(
        'div',
        {
          className: d,
          ref: e.reference,
          style: p,
          onMouseDown: e.onMouseDown,
          onMouseUp: e.onMouseUp,
          onClick: e.onClick,
        },
        e.children,
      );
    }
    var i, r, s;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (i = n(2)),
      (r = n(157)),
      (s = n(26)),
      (t.Dialog = o);
  },
  189: function (e, t, n) {
    'use strict';
    function o() {
      (d = document.createElement('div')), document.body.appendChild(d), r();
    }
    function i(e, t) {
      p.getItems().forEach(function (n) {
        n !== t && f.emitEvent(e + ':' + n);
      });
    }
    function r(e) {
      a.render(
        s.createElement(
          l.TransitionGroup,
          { component: 'div' },
          Array.from(m.values()),
        ),
        d,
        e,
      );
    }
    var s, a, l, u, c, d, p, h, f, m;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (s = n(2)),
      (a = n(55)),
      (l = n(45)),
      (u = n(110)),
      (c = (function () {
        function e() {
          this._storage = [];
        }
        return (
          (e.prototype.add = function (e) {
            this._storage.push(e);
          }),
          (e.prototype.remove = function (e) {
            this._storage = this._storage.filter(function (t) {
              return e !== t;
            });
          }),
          (e.prototype.getIndex = function (e) {
            return this._storage.findIndex(function (t) {
              return e === t;
            });
          }),
          (e.prototype.toTop = function (e) {
            this.remove(e), this.add(e);
          }),
          (e.prototype.has = function (e) {
            return this._storage.includes(e);
          }),
          (e.prototype.getItems = function () {
            return this._storage;
          }),
          e
        );
      })()),
      (t.EVENTS = { ZindexUpdate: 'ZindexUpdate' }),
      (p = new c()),
      (h = 150),
      (f = new u()),
      (m = new Map()),
      (function (e) {
        function n(e) {
          p.has(e) || (p.add(e), i(t.EVENTS.ZindexUpdate, e));
        }
        function o(e) {
          p.remove(e), m.delete(e);
        }
        function s(e) {
          return p.getIndex(e) + h;
        }
        function a(e, t, n) {
          m.set(e, t), r(n);
        }
        function l(e, t) {
          o(e), r(t);
        }
        function u() {
          return f;
        }
        (e.registerWindow = n),
          (e.unregisterWindow = o),
          (e.getZindex = s),
          (e.renderWindow = a),
          (e.removeWindow = l),
          (e.getStream = u);
      })(t.OverlapManager || (t.OverlapManager = {})),
      o();
  },
  190: function (e, t, n) {
    'use strict';
    function o(e) {
      return (
        (t = (function (t) {
          function n() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r.__extends(n, t),
            (n.prototype.componentWillEnter = function (e) {
              this.props.beforeOpen ? this.props.beforeOpen(e) : e();
            }),
            (n.prototype.componentDidEnter = function () {
              this.props.afterOpen && this.props.afterOpen();
            }),
            (n.prototype.componentWillLeave = function (e) {
              this.props.beforeClose ? this.props.beforeClose(e) : e();
            }),
            (n.prototype.componentDidLeave = function () {
              this.props.afterClose && this.props.afterClose();
            }),
            (n.prototype.render = function () {
              return s.createElement(e, r.__assign({}, this.props));
            }),
            n
          );
        })(s.PureComponent)),
        (t.displayName =
          'OverlapLifecycle(' + (e.displayName || 'Component') + ')'),
        t
      );
      var t;
    }
    function i(e) {
      var t,
        n = u.makeTransitionGroupLifecycleProvider(
          c.makeTransitionGroupLifecycleConsumer(o(e)),
        );
      return (
        (t = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._onZIndexUpdate = function () {
                n.props.isOpened &&
                  ('parent' === n.props.root
                    ? n.forceUpdate()
                    : n._renderWindow(n.props));
              }),
              (n._uuid = d.guid()),
              (n._zIndexUpdateEvent = l.EVENTS.ZindexUpdate + ':' + n._uuid),
              n
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.componentDidMount = function () {
              this._subscribe();
            }),
            (t.prototype.componentWillUnmount = function () {
              this._unsubscribe(), l.OverlapManager.removeWindow(this._uuid);
            }),
            (t.prototype.componentWillReceiveProps = function (e) {
              'parent' !== this.props.root && this._renderWindow(e);
            }),
            (t.prototype.render = function () {
              return 'parent' === this.props.root
                ? s.createElement(
                    a.TransitionGroup,
                    { component: 'div' },
                    this._createContent(this.props),
                  )
                : null;
            }),
            (t.prototype._renderWindow = function (e) {
              l.OverlapManager.renderWindow(this._uuid, this._createContent(e));
            }),
            (t.prototype._createContent = function (e) {
              return e.isOpened
                ? (l.OverlapManager.registerWindow(this._uuid),
                  s.createElement(
                    n,
                    r.__assign({}, e, {
                      key: this._uuid,
                      zIndex: l.OverlapManager.getZindex(this._uuid),
                    }),
                    e.children,
                  ))
                : (l.OverlapManager.unregisterWindow(this._uuid), null);
            }),
            (t.prototype._subscribe = function () {
              l.OverlapManager.getStream().on(
                this._zIndexUpdateEvent,
                this._onZIndexUpdate,
              );
            }),
            (t.prototype._unsubscribe = function () {
              l.OverlapManager.getStream().off(
                this._zIndexUpdateEvent,
                this._onZIndexUpdate,
              );
            }),
            t
          );
        })(s.PureComponent)),
        (t.displayName = 'Overlapable(' + (e.displayName || 'Component') + ')'),
        t
      );
    }
    var r, s, a, l, u, c, d;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (r = n(5)),
      (s = n(2)),
      (a = n(45)),
      (l = n(189)),
      (u = n(192)),
      (c = n(108)),
      (d = n(64)),
      (t.makeOverlapable = i);
  },
  192: function (e, t, n) {
    'use strict';
    function o(e) {
      return (
        (t = (function (t) {
          function n(e) {
            var n = t.call(this, e) || this;
            return (
              (n._registerWillEnterCb = function (e) {
                n._willEnter.push(e);
              }),
              (n._registerDidEnterCb = function (e) {
                n._didEnter.push(e);
              }),
              (n._registerWillLeaveCb = function (e) {
                n._willLeave.push(e);
              }),
              (n._registerDidLeaveCb = function (e) {
                n._didLeave.push(e);
              }),
              (n._willEnter = []),
              (n._didEnter = []),
              (n._willLeave = []),
              (n._didLeave = []),
              n
            );
          }
          return (
            i.__extends(n, t),
            (n.prototype.getChildContext = function () {
              return {
                lifecycleProvider: {
                  registerWillEnterCb: this._registerWillEnterCb,
                  registerDidEnterCb: this._registerDidEnterCb,
                  registerWillLeaveCb: this._registerWillLeaveCb,
                  registerDidLeaveCb: this._registerDidLeaveCb,
                },
              };
            }),
            (n.prototype.componentWillEnter = function (e) {
              var t = this._willEnter.map(function (e) {
                return new Promise(function (t) {
                  e(t);
                });
              });
              Promise.all(t).then(e);
            }),
            (n.prototype.componentDidEnter = function () {
              this._didEnter.forEach(function (e) {
                e();
              });
            }),
            (n.prototype.componentWillLeave = function (e) {
              var t = this._willLeave.map(function (e) {
                return new Promise(function (t) {
                  e(t);
                });
              });
              Promise.all(t).then(e);
            }),
            (n.prototype.componentDidLeave = function () {
              this._didLeave.forEach(function (e) {
                e();
              });
            }),
            (n.prototype.render = function () {
              return r.createElement(
                e,
                i.__assign({}, this.props),
                this.props.children,
              );
            }),
            n
          );
        })(r.PureComponent)),
        (t.displayName = 'Lifecycle Provider'),
        (t.childContextTypes = { lifecycleProvider: s.object }),
        t
      );
      var t;
    }
    var i, r, s;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (i = n(5)),
      (r = n(2)),
      (s = n(86)),
      (t.makeTransitionGroupLifecycleProvider = o);
  },
  256: function (e, t) {
    e.exports = { dialog: 'dialog-2MaUXXMw-', dragging: 'dragging-3oeGgbIQ-' };
  },
  322: function (e, t) {
    'use strict';
    function n(e, t, n) {
      return e + t > n && (e = n - t), e < 0 && (e = 0), e;
    }
    function o(e) {
      return { x: e.pageX, y: e.pageY };
    }
    function i(e) {
      return { x: e.touches[0].pageX, y: e.touches[0].pageY };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (function () {
      function e(e, t) {
        var n = this;
        (this._drag = null),
          (this._onMouseDragStart = function (e) {
            e.preventDefault(), n._dragStart(o(e));
          }),
          (this._onTouchDragStart = function (e) {
            n._dragStart(i(e));
          }),
          (this._onMouseDragMove = function (e) {
            n._dragMove(o(e));
          }),
          (this._onTouchDragMove = function (e) {
            e.preventDefault(), n._dragMove(i(e));
          }),
          (this._onDragStop = function () {
            (n._drag = null), n._header.classList.remove('dragging');
          }),
          (this._dialog = e),
          (this._header = t),
          t.addEventListener('mousedown', this._onMouseDragStart),
          t.addEventListener('touchstart', this._onTouchDragStart),
          document.addEventListener('mousemove', this._onMouseDragMove),
          document.addEventListener('touchmove', this._onTouchDragMove),
          document.addEventListener('mouseup', this._onDragStop),
          document.addEventListener('touchend', this._onDragStop);
      }
      return (
        (e.prototype.destroy = function () {
          this._header.removeEventListener('mousedown', this._onMouseDragStart),
            this._header.removeEventListener(
              'touchstart',
              this._onTouchDragStart,
            ),
            document.removeEventListener('mousemove', this._onMouseDragMove),
            document.removeEventListener('touchmove', this._onTouchDragMove),
            document.removeEventListener('mouseup', this._onDragStop),
            document.removeEventListener('touchend', this._onDragStop);
        }),
        (e.prototype._dragStart = function (e) {
          var t = this._dialog.getBoundingClientRect();
          (this._drag = {
            startX: e.x,
            startY: e.y,
            dialogX: t.left,
            dialogY: t.top,
          }),
            (this._dialog.style.left = t.left + 'px'),
            (this._dialog.style.top = t.top + 'px'),
            this._header.classList.add('dragging');
        }),
        (e.prototype._dragMove = function (e) {
          var t, n;
          this._drag &&
            ((t = e.x - this._drag.startX),
            (n = e.y - this._drag.startY),
            this._moveDialog(this._drag.dialogX + t, this._drag.dialogY + n));
        }),
        (e.prototype._moveDialog = function (e, t) {
          var o = this._dialog.getBoundingClientRect();
          (this._dialog.style.left = n(e, o.width, window.innerWidth) + 'px'),
            (this._dialog.style.top =
              n(t, o.height, window.innerHeight) + 'px');
        }),
        e
      );
    })();
    t.DragHandler = r;
  },
  323: function (e, t, n) {
    'use strict';
    var o, i, r, s, a, l, u, c, d, p, h;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (o = n(5)),
      (i = n(2)),
      (r = n(188)),
      (s = n(190)),
      (a = n(108)),
      (l = n(107)),
      (u = n(256)),
      (c = n(322)),
      (d = n(324)),
      (p = n(26)),
      (h = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t._setDialog = function (e) {
              e && (t._dialog = e);
            }),
            t
          );
        }
        return (
          o.__extends(t, e),
          (t.prototype.render = function () {
            return i.createElement(
              'span',
              { style: { zIndex: this.props.zIndex } },
              i.createElement(
                l.OutsideEvent,
                {
                  mouseDown: !0,
                  touchStart: !0,
                  handler: this.props.onClickOutside,
                },
                i.createElement(
                  r.Dialog,
                  o.__assign({}, this.props, {
                    reference: this._setDialog,
                    className: p(u.dialog, this.props.className),
                  }),
                  this.props.children,
                ),
              ),
            );
          }),
          (t.prototype.componentDidMount = function () {
            if (this._dialog) {
              var e = this._dialog.querySelector('[data-dragg-area]');
              e && (this._drag = new c.DragHandler(this._dialog, e)),
                (this._resize = new d.ResizeHandler(this._dialog));
            }
          }),
          (t.prototype.componentWillEnter = function (e) {
            this._resize && this._resize.position(), e();
          }),
          (t.prototype.componentWillUnmount = function () {
            this._drag && this._drag.destroy(),
              this._resize && this._resize.destroy();
          }),
          t
        );
      })(i.PureComponent)),
      (t.PopupDialog = s.makeOverlapable(
        a.makeTransitionGroupLifecycleConsumer(h),
      ));
  },
  324: function (e, t) {
    'use strict';
    function n(e, t, n) {
      return e + t > n && (e = n - t), e < 0 && (e = 0), e;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = (function () {
      function e(e) {
        (this._onResizeThrottled = requestAnimationFrame.bind(
          null,
          this._onResize.bind(this),
        )),
          (this._dialog = e),
          (this._initialHeight = e.style.height),
          window.addEventListener('resize', this._onResizeThrottled);
      }
      return (
        (e.prototype.position = function () {
          var e,
            t = this._dialog.getBoundingClientRect(),
            n = window.innerWidth / 2 - t.width / 2;
          (this._dialog.style.left = n + 'px'),
            (e = window.innerHeight / 2 - t.height / 2),
            (this._dialog.style.top = e + 'px');
        }),
        (e.prototype.destroy = function () {
          window.removeEventListener('resize', this._onResizeThrottled);
        }),
        (e.prototype._onResize = function () {
          var e,
            t = this._dialog.getBoundingClientRect(),
            o = n(t.left, t.width, window.innerWidth);
          o !== t.left && (this._dialog.style.left = o + 'px'),
            (e = n(t.top, t.height, window.innerHeight)),
            e !== t.top && (this._dialog.style.top = e + 'px'),
            (this._dialog.style.height =
              window.innerHeight < t.height
                ? window.innerHeight + 'px'
                : this._initialHeight);
        }),
        e
      );
    })();
    t.ResizeHandler = o;
  },
  430: function (e, t, n) {
    (function (e, o) {
      'use strict';
      function i(t, n) {
        var o, i, l, c, d;
        r({ isOpened: !1 }),
          null == t && (t = h.symbol.value()),
          null != t &&
            ((t += ''),
            (o = n && n.symbolInfo),
            (i = [
              {
                title: $.t('Symbol Name'),
                propName: e.enabled('charting_library_base')
                  ? 'name'
                  : 'pro_name',
              },
              { title: $.t('Symbol Description'), propName: 'description' },
              { title: $.t('Symbol Type'), propName: 'type' },
              { title: $.t('Point Value'), propName: 'pointvalue' },
              { title: $.t('Exchange'), propName: 'exchange' },
              { title: $.t('Listed Exchange'), propName: 'listed_exchange' },
              {
                title: $.t('Currency'),
                propName: 'currency_code',
                formatter: function (e) {
                  return e || 'USD';
                },
                defValue: 'USD',
              },
              { title: $.t('Price Scale'), propName: 'pricescale' },
              { title: $.t('Min Move'), propName: 'minmov' },
              { title: $.t('Min Move 2'), propName: 'minmove2' },
              { title: $.t('Sector'), propName: 'sector' },
              { title: $.t('Industry'), propName: 'industry' },
              {
                title: $.t('Timezone'),
                propName: 'timezone',
                formatter: s,
                optional: !0,
              },
              {
                title: $.t('Session'),
                propName: 'session',
                formatter: a,
                optional: !0,
                setHtml: !0,
              },
            ]),
            (l = 0),
            o && (l = u(o, i)),
            l < i.length &&
              window.quoteSessionMultiplexerInstance &&
              ((c = 'symbolinfodialog.' + _.guid()),
              quoteSessionMultiplexerInstance.full.subscribe(
                c,
                t,
                function (e, n) {
                  u(n.values, i),
                    quoteSessionMultiplexerInstance.full.unsubscribe(c, t),
                    r(d);
                },
              )),
            (d = {
              isOpened: !0,
              onClose: function () {
                r({ isOpened: !1 }), (p = null);
              },
              fields: i,
            }),
            r(d));
      }
      function r(e) {
        p ||
          ((p = document.createElement('div')), document.body.appendChild(p)),
          v.render(g.createElement(y, e), p);
      }
      function s(e) {
        var t,
          n = f;
        for (t = 0; t < n.length; t++) if (n[t].id === e) return n[t].title;
        return e;
      }
      function a(e) {
        return d(e).join('<br/>');
      }
      function l(e) {
        return e || '-';
      }
      function u(e, t) {
        var n,
          o,
          i,
          r,
          s = 0;
        for (n = 0; n < t.length; n++)
          (o = t[n].propName) in e &&
            ((i = e[o]),
            'minmove2' === o && e.minmove2 > 0 && !e.fractional && e.pricescale
              ? ((t[n].value = new m(e.pricescale / i).format(
                  i / e.pricescale,
                )),
                (t[n].title = $.t('Pip Size')))
              : (t[n].value = (t[n].formatter || l)(i)),
            s++);
        return (
          (r =
            (e.type && 'economic' === e.type) ||
            (e.listed_exchange &&
              ['QUANDL', 'BSE_EOD', 'NSE_EOD', 'LSE_EOD'].indexOf(
                e.listed_exchange,
              ) >= 0)),
          r && c(t),
          s
        );
      }
      function c(e) {
        for (var t = 0; t < e.length; t++)
          e[t].optional && (e.splice(t, 1), t--);
      }
      function d(e, t) {
        function n(e, n, r) {
          var s,
            a,
            l,
            u,
            c,
            d,
            p,
            h,
            f,
            m,
            _,
            g = [];
          if (r.openEveryDay) g = [0, 1, 2, 3, 4, 5, 6];
          else if (r.openOnDays)
            for (s = r.openOnDays, a = 0; a < s.length; a++)
              g.push(parseInt(s[a]) - 1);
          else g = [1, 2, 3, 4, 5];
          for (
            l = function (e) {
              return 60 * parseInt(e[0], 10) + parseInt(e[1], 10);
            },
              u = l(e),
              c = l(n),
              d = u && u >= c,
              d && 0 !== g[0] && g.unshift(0),
              p = '',
              h = [],
              f = g[0] - 1,
              m = g.length,
              a = 0;
            a < m;
            a++
          )
            f + 1 < g[a] || a + 1 === m
              ? ((p += i + o.weekdaysMin(g[a])), h.push(p), (p = ''))
              : p || (p = o.weekdaysMin(g[a])),
              (f = g[a]);
          return (
            (_ = '{0}:{1}{2}{3}:{4}'.format(e[0], e[1], i, n[0], n[1])),
            h.map(function (e) {
              return e + t + _;
            })
          );
        }
        var i, r, s, a, l;
        return (
          (t = t || ' '),
          (i = '-'),
          e
            ? '24x7' === e
              ? n(['00', '00'], ['00', '00'], { openEveryDay: !0 })
              : ((r = /([0-2]\d)([0-5]\d)-([0-2]\d)([0-5]\d)(?:\:(\d+))?/),
                (s = r.exec(e))
                  ? ((a = [s[1], s[2]]),
                    (l = [s[3], s[4]]),
                    n(a, l, { openOnDays: s[5] }))
                  : {})
            : {}
        );
      }
      var p,
        h = n(97),
        f = n(226).availableTimezones,
        m = n(47).PriceFormatter,
        _ = n(64),
        g = n(2),
        v = n(55),
        y = n(1106).SymbolInfoDialog;
      t.showSymbolInfoDialog = i;
    }.call(t, n(9), n(36)));
  },
  659: function (e, t) {
    e.exports = {
      content: 'content-2c3hRn22-',
      row: 'row-2r-bcyH5-',
      column: 'column-2wM_iSMS-',
      title: 'title-2kFlsSZg-',
      value: 'value-lS6fGKoI-',
      columnTitle: 'columnTitle-3tZ4a3rW-',
      columnValue: 'columnValue-2hg99RGl-',
    };
  },
  1106: function (e, t, n) {
    'use strict';
    function o(e) {
      var t = e.value || e.defValue || '-';
      return e.setHtml
        ? r.createElement('span', { dangerouslySetInnerHTML: { __html: t } })
        : t;
    }
    var i, r, s, a, l, u, c, d;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (i = n(5)),
      n(23),
      (r = n(2)),
      (s = n(323)),
      (a = n(184)),
      (l = n(659)),
      (u = n(26)),
      (c = n(234)),
      (d = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          i.__extends(t, e),
          (t.prototype.render = function () {
            return r.createElement(
              s.PopupDialog,
              {
                isOpened: this.props.isOpened,
                onClickOutside: this.props.onClose,
              },
              r.createElement(
                a.Header,
                { onClose: this.props.onClose },
                window.t('Symbol Info'),
              ),
              r.createElement(
                a.Body,
                null,
                r.createElement(c.KeyboardDocumentListener, {
                  keyCode: 27,
                  handler: this.props.onClose,
                }),
                r.createElement(
                  'div',
                  { className: l.content },
                  this._renderFields(),
                ),
              ),
            );
          }),
          (t.prototype._renderFields = function () {
            return this.props.fields
              ? this.props.fields.map(function (e) {
                  return r.createElement(
                    'div',
                    { key: e.propName, className: l.row },
                    r.createElement(
                      'div',
                      { className: u(l.column, l.columnTitle) },
                      r.createElement('span', { className: l.title }, e.title),
                    ),
                    r.createElement(
                      'div',
                      { className: u(l.column, l.columnValue) },
                      r.createElement('span', { className: l.value }, o(e)),
                    ),
                  );
                })
              : [];
          }),
          t
        );
      })(r.PureComponent)),
      (t.SymbolInfoDialog = d);
  },
});
