!(function () {
  'use strict';
  !(function (t) {
    var e = setTimeout;
    function n() {}
    function i(t) {
      if ('object' != typeof this)
        throw new TypeError('Promises must be constructed via new');
      if ('function' != typeof t) throw new TypeError('not a function');
      (this._state = 0),
        (this._handled = !1),
        (this._value = void 0),
        (this._deferreds = []),
        f(t, this);
    }
    function o(r, n) {
      for (; 3 === r._state; ) r = r._value;
      0 !== r._state
        ? ((r._handled = !0),
          i._immediateFn(function () {
            var t = 1 === r._state ? n.onFulfilled : n.onRejected;
            if (null !== t) {
              var e;
              try {
                e = t(r._value);
              } catch (t) {
                return void a(n.promise, t);
              }
              s(n.promise, e);
            } else (1 === r._state ? s : a)(n.promise, r._value);
          }))
        : r._deferreds.push(n);
    }
    function s(e, t) {
      try {
        if (t === e)
          throw new TypeError('A promise cannot be resolved with itself.');
        if (t && ('object' == typeof t || 'function' == typeof t)) {
          var r = t.then;
          if (t instanceof i) return (e._state = 3), (e._value = t), void u(e);
          if ('function' == typeof r)
            return void f(
              ((n = r),
              (o = t),
              function () {
                n.apply(o, arguments);
              }),
              e,
            );
        }
        (e._state = 1), (e._value = t), u(e);
      } catch (t) {
        a(e, t);
      }
      var n, o;
    }
    function a(t, e) {
      (t._state = 2), (t._value = e), u(t);
    }
    function u(t) {
      2 === t._state &&
        0 === t._deferreds.length &&
        i._immediateFn(function () {
          t._handled || i._unhandledRejectionFn(t._value);
        });
      for (var e = 0, r = t._deferreds.length; e < r; e++)
        o(t, t._deferreds[e]);
      t._deferreds = null;
    }
    function f(t, e) {
      var r = !1;
      try {
        t(
          function (t) {
            r || ((r = !0), s(e, t));
          },
          function (t) {
            r || ((r = !0), a(e, t));
          },
        );
      } catch (t) {
        if (r) return;
        (r = !0), a(e, t);
      }
    }
    (i.prototype.catch = function (t) {
      return this.then(null, t);
    }),
      (i.prototype.then = function (t, e) {
        var r = new this.constructor(n);
        return (
          o(
            this,
            new (function (t, e, r) {
              (this.onFulfilled = 'function' == typeof t ? t : null),
                (this.onRejected = 'function' == typeof e ? e : null),
                (this.promise = r);
            })(t, e, r),
          ),
          r
        );
      }),
      (i.all = function (t) {
        var a = Array.prototype.slice.call(t);
        return new i(function (n, o) {
          if (0 === a.length) return n([]);
          var i = a.length;
          function s(e, t) {
            try {
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var r = t.then;
                if ('function' == typeof r)
                  return void r.call(
                    t,
                    function (t) {
                      s(e, t);
                    },
                    o,
                  );
              }
              (a[e] = t), 0 == --i && n(a);
            } catch (t) {
              o(t);
            }
          }
          for (var t = 0; t < a.length; t++) s(t, a[t]);
        });
      }),
      (i.resolve = function (e) {
        return e && 'object' == typeof e && e.constructor === i
          ? e
          : new i(function (t) {
              t(e);
            });
      }),
      (i.reject = function (r) {
        return new i(function (t, e) {
          e(r);
        });
      }),
      (i.race = function (o) {
        return new i(function (t, e) {
          for (var r = 0, n = o.length; r < n; r++) o[r].then(t, e);
        });
      }),
      (i._immediateFn =
        ('function' == typeof setImmediate &&
          function (t) {
            setImmediate(t);
          }) ||
        function (t) {
          e(t, 0);
        }),
      (i._unhandledRejectionFn = function (t) {
        'undefined' != typeof console &&
          console &&
          console.warn('Possible Unhandled Promise Rejection:', t);
      }),
      (i._setImmediateFn = function (t) {
        i._immediateFn = t;
      }),
      (i._setUnhandledRejectionFn = function (t) {
        i._unhandledRejectionFn = t;
      }),
      'undefined' != typeof module && module.exports
        ? (module.exports = i)
        : t.Promise || (t.Promise = i);
  })(window),
    (function (t) {
      if (!t.fetch) {
        var s = {
          searchParams: 'URLSearchParams' in t,
          iterable: 'Symbol' in t && 'iterator' in Symbol,
          blob:
            'FileReader' in t &&
            'Blob' in t &&
            (function () {
              try {
                return new Blob(), !0;
              } catch (t) {
                return !1;
              }
            })(),
          formData: 'FormData' in t,
          arrayBuffer: 'ArrayBuffer' in t,
        };
        if (s.arrayBuffer)
          var e = [
              '[object Int8Array]',
              '[object Uint8Array]',
              '[object Uint8ClampedArray]',
              '[object Int16Array]',
              '[object Uint16Array]',
              '[object Int32Array]',
              '[object Uint32Array]',
              '[object Float32Array]',
              '[object Float64Array]',
            ],
            r = function (t) {
              return t && DataView.prototype.isPrototypeOf(t);
            },
            n =
              ArrayBuffer.isView ||
              function (t) {
                return t && -1 < e.indexOf(Object.prototype.toString.call(t));
              };
        (h.prototype.append = function (t, e) {
          (t = a(t)), (e = u(e));
          var r = this.map[t];
          this.map[t] = r ? r + ',' + e : e;
        }),
          (h.prototype.delete = function (t) {
            delete this.map[a(t)];
          }),
          (h.prototype.get = function (t) {
            return (t = a(t)), this.has(t) ? this.map[t] : null;
          }),
          (h.prototype.has = function (t) {
            return this.map.hasOwnProperty(a(t));
          }),
          (h.prototype.set = function (t, e) {
            this.map[a(t)] = u(e);
          }),
          (h.prototype.forEach = function (t, e) {
            for (var r in this.map)
              this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
          }),
          (h.prototype.keys = function () {
            var r = [];
            return (
              this.forEach(function (t, e) {
                r.push(e);
              }),
              f(r)
            );
          }),
          (h.prototype.values = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t);
              }),
              f(e)
            );
          }),
          (h.prototype.entries = function () {
            var r = [];
            return (
              this.forEach(function (t, e) {
                r.push([e, t]);
              }),
              f(r)
            );
          }),
          s.iterable && (h.prototype[Symbol.iterator] = h.prototype.entries);
        var i = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
        (b.prototype.clone = function () {
          return new b(this, { body: this._bodyInit });
        }),
          p.call(b.prototype),
          p.call(w.prototype),
          (w.prototype.clone = function () {
            return new w(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new h(this.headers),
              url: this.url,
            });
          }),
          (w.error = function () {
            var t = new w(null, { status: 0, statusText: '' });
            return (t.type = 'error'), t;
          });
        var o = [301, 302, 303, 307, 308];
        (w.redirect = function (t, e) {
          if (-1 === o.indexOf(e)) throw new RangeError('Invalid status code');
          return new w(null, { status: e, headers: { location: t } });
        }),
          (t.Headers = h),
          (t.Request = b),
          (t.Response = w),
          (t.fetch = function (r, o) {
            return new Promise(function (n, t) {
              var e = new b(r, o),
                i = new XMLHttpRequest();
              (i.onload = function () {
                var t,
                  o,
                  e = {
                    status: i.status,
                    statusText: i.statusText,
                    headers:
                      ((t = i.getAllResponseHeaders() || ''),
                      (o = new h()),
                      t.split(/\r?\n/).forEach(function (t) {
                        var e = t.split(':'),
                          r = e.shift().trim();
                        if (r) {
                          var n = e.join(':').trim();
                          o.append(r, n);
                        }
                      }),
                      o),
                  };
                e.url =
                  'responseURL' in i
                    ? i.responseURL
                    : e.headers.get('X-Request-URL');
                var r = 'response' in i ? i.response : i.responseText;
                n(new w(r, e));
              }),
                (i.onerror = function () {
                  t(new TypeError('Network request failed'));
                }),
                (i.ontimeout = function () {
                  t(new TypeError('Network request failed'));
                }),
                i.open(e.method, e.url, !0),
                'include' === e.credentials && (i.withCredentials = !0),
                'responseType' in i && s.blob && (i.responseType = 'blob'),
                e.headers.forEach(function (t, e) {
                  i.setRequestHeader(e, t);
                }),
                i.send(void 0 === e._bodyInit ? null : e._bodyInit);
            });
          }),
          (t.fetch.polyfill = !0);
      }
      function a(t) {
        if (
          ('string' != typeof t && (t = String(t)),
          /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
        )
          throw new TypeError('Invalid character in header field name');
        return t.toLowerCase();
      }
      function u(t) {
        return 'string' != typeof t && (t = String(t)), t;
      }
      function f(e) {
        var t = {
          next: function () {
            var t = e.shift();
            return { done: void 0 === t, value: t };
          },
        };
        return (
          s.iterable &&
            (t[Symbol.iterator] = function () {
              return t;
            }),
          t
        );
      }
      function h(e) {
        (this.map = {}),
          e instanceof h
            ? e.forEach(function (t, e) {
                this.append(e, t);
              }, this)
            : Array.isArray(e)
            ? e.forEach(function (t) {
                this.append(t[0], t[1]);
              }, this)
            : e &&
              Object.getOwnPropertyNames(e).forEach(function (t) {
                this.append(t, e[t]);
              }, this);
      }
      function c(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError('Already read'));
        t.bodyUsed = !0;
      }
      function d(r) {
        return new Promise(function (t, e) {
          (r.onload = function () {
            t(r.result);
          }),
            (r.onerror = function () {
              e(r.error);
            });
        });
      }
      function l(t) {
        var e = new FileReader(),
          r = d(e);
        return e.readAsArrayBuffer(t), r;
      }
      function y(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer;
      }
      function p() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (t) {
            if ((this._bodyInit = t))
              if ('string' == typeof t) this._bodyText = t;
              else if (s.blob && Blob.prototype.isPrototypeOf(t))
                this._bodyBlob = t;
              else if (s.formData && FormData.prototype.isPrototypeOf(t))
                this._bodyFormData = t;
              else if (
                s.searchParams &&
                URLSearchParams.prototype.isPrototypeOf(t)
              )
                this._bodyText = t.toString();
              else if (s.arrayBuffer && s.blob && r(t))
                (this._bodyArrayBuffer = y(t.buffer)),
                  (this._bodyInit = new Blob([this._bodyArrayBuffer]));
              else {
                if (
                  !s.arrayBuffer ||
                  (!ArrayBuffer.prototype.isPrototypeOf(t) && !n(t))
                )
                  throw new Error('unsupported BodyInit type');
                this._bodyArrayBuffer = y(t);
              }
            else this._bodyText = '';
            this.headers.get('content-type') ||
              ('string' == typeof t
                ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                : this._bodyBlob && this._bodyBlob.type
                ? this.headers.set('content-type', this._bodyBlob.type)
                : s.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(t) &&
                  this.headers.set(
                    'content-type',
                    'application/x-www-form-urlencoded;charset=UTF-8',
                  ));
          }),
          s.blob &&
            ((this.blob = function () {
              var t = c(this);
              if (t) return t;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error('could not read FormData body as blob');
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? c(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(l);
            })),
          (this.text = function () {
            var t,
              e,
              r,
              n = c(this);
            if (n) return n;
            if (this._bodyBlob)
              return (
                (t = this._bodyBlob),
                (e = new FileReader()),
                (r = d(e)),
                e.readAsText(t),
                r
              );
            if (this._bodyArrayBuffer)
              return Promise.resolve(
                (function (t) {
                  for (
                    var e = new Uint8Array(t), r = new Array(e.length), n = 0;
                    n < e.length;
                    n++
                  )
                    r[n] = String.fromCharCode(e[n]);
                  return r.join('');
                })(this._bodyArrayBuffer),
              );
            if (this._bodyFormData)
              throw new Error('could not read FormData body as text');
            return Promise.resolve(this._bodyText);
          }),
          s.formData &&
            (this.formData = function () {
              return this.text().then(m);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      function b(t, e) {
        var r,
          n,
          o = (e = e || {}).body;
        if (t instanceof b) {
          if (t.bodyUsed) throw new TypeError('Already read');
          (this.url = t.url),
            (this.credentials = t.credentials),
            e.headers || (this.headers = new h(t.headers)),
            (this.method = t.method),
            (this.mode = t.mode),
            o || null == t._bodyInit || ((o = t._bodyInit), (t.bodyUsed = !0));
        } else this.url = String(t);
        if (
          ((this.credentials = e.credentials || this.credentials || 'omit'),
          (!e.headers && this.headers) || (this.headers = new h(e.headers)),
          (this.method =
            ((r = e.method || this.method || 'GET'),
            (n = r.toUpperCase()),
            -1 < i.indexOf(n) ? n : r)),
          (this.mode = e.mode || this.mode || null),
          (this.referrer = null),
          ('GET' === this.method || 'HEAD' === this.method) && o)
        )
          throw new TypeError('Body not allowed for GET or HEAD requests');
        this._initBody(o);
      }
      function m(t) {
        var o = new FormData();
        return (
          t
            .trim()
            .split('&')
            .forEach(function (t) {
              if (t) {
                var e = t.split('='),
                  r = e.shift().replace(/\+/g, ' '),
                  n = e.join('=').replace(/\+/g, ' ');
                o.append(decodeURIComponent(r), decodeURIComponent(n));
              }
            }),
          o
        );
      }
      function w(t, e) {
        e || (e = {}),
          (this.type = 'default'),
          (this.status = 'status' in e ? e.status : 200),
          (this.ok = 200 <= this.status && this.status < 300),
          (this.statusText = 'statusText' in e ? e.statusText : 'OK'),
          (this.headers = new h(e.headers)),
          (this.url = e.url || ''),
          this._initBody(t);
      }
    })('undefined' != typeof self ? self : window);
})();
