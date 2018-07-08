'use strict';

import {Containers, Controls} from '../X/elements.js';
import Utility from '../utility/index.js';
// import X from '../X/index.js';


var ElementHelper = {
    register(tagName, baseTag, klass) {

        if (arguments.length === 2) {
            klass = baseTag;
            customElements.define(tagName, klass, {
                extends: baseTag
            });
            return klass;

        } else {
            var proto = Object.create(klass.prototype);

            var internal_ = document.registerElement(tagName, {
                prototype: proto,
                extends: baseTag,
                is: tagName
            });

            return internal_;
        }
    },

    create(tagName, attrs, context, createOptions, namespace) {
        var ret = null;
        attrs = attrs || {};
        tagName = (tagName || '  ');
        tagName = tagName.toLowerCase().trim();
        createOptions = createOptions || {};

        try {
            ret = namespace[tagName];
            ret = new ret();
        } catch (ex) {
            ret = document.createElement(tagName, createOptions);
        }

        // <article>
        // <aside>
        // <details>
        // <figcaption>
        // <figure>
        // <footer>
        // <header>
        // <main>
        // <mark>
        // <nav>
        // <section>
        // <summary>
        // <time>
        // (etc....)

        if (ret) {
            Object.keys(attrs).forEach(function(attrName) {
                ret[attrName] = attrs[attrName];
            });
            if (context) {
                context.appendChild(ret);
            }
        } else {
            throw new Error(tagName + ' instance is null');
        }
        return ret;
    },

    createImport(options) {
        options = options || {};

        var className = options.class;
        var href = options.href;
        var onload = options.onload || console.log;
        var onerror = options.onerror || console.error;
        var async = !!Object.hasOwnProperty(options, 'async');
        var attrs = options.attrs || {};
        var context = options.context;

        // var link = new Controls.Link();
        var link = ElementHelper.create('link', attrs, context, {is: 'link', extends: 'link'});
        link.setAttribute('is', 'x-link');
        link.setAttribute('rel', 'import');
        link.setAttribute('class', [link.getAttribute('class'), className].join(' ').trim());
        link.setAttribute('href', href);
        if (async) {
            link.setAttribute('async', ''); // make it async!
        }
        link.onload = onload;
        link.onerror = onerror;
        return link;
    },

    loadImport(ev) {
        var className = ev.target.className;
        var tmr = null;
        var targetSelector = ev.target.getAttribute('targetselector');
        tmr = setInterval(function() {
            if (!Utility.QuerySelector.$('[component].' + className)) {
                Utility.Element.activateImport(className, targetSelector, document);
                clearInterval(tmr);
            }
        }, 500);
    },

    activateImport(className, targetSelector, doc) {
        return (function() {
            // importDoc references this import's document
            // var importDoc = document.currentScript.ownerDocument;
            // console.log(document.currentScript.parentNode);
            var importDoc = doc || document;

            // mainDoc references the main document (the page that's importing us)
            var mainDoc = document;

            var el = null;

            var linkSelector = 'link[rel="import"].' + className;
            var componentSelector = '*[component].' + className;

            el = mainDoc.querySelector(componentSelector);

            if (!el) {

                var link = importDoc.querySelector(linkSelector);
                var content = null;

                if (link) {
                    content = link.import;
                }

                if (content) {
                    el = content.querySelector(componentSelector);
                }

                if (el) {
                    el = el.cloneNode(true);
                }

                if (el) {
                    if (!targetSelector) {
                        if (link.getAttribute('targetselector')) {
                            targetSelector = link.getAttribute('targetselector');
                        } else {
                            // targetSelector = "body";
                        }
                    }

                    if (targetSelector) {
                        mainDoc.querySelector(targetSelector).appendChild(el);
                    }
                } else {
                    console.error({
                        className: className,
                        targetSelector: targetSelector,
                        importDoc: importDoc,
                        mainDoc: mainDoc,
                        link: link,
                        content: content,
                        el: el
                    });
                }
            }

            return el;

        })();
    }
};

export
default ElementHelper
