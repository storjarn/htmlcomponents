/* istanbul ignore next */
(function(root, factory) {
    'use strict';

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../lib/components/EditableListElement', '../lib/components/EditableListItemElement'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('../lib/components/EditableListElement'), require('../lib/components/EditableListItemElement'));
    } else {
        // Browser globals (root is window)
        var lib = factory(root.EditableListElement, root.EditableListItemElement);
        root.TODOList = lib.TODOList;
        root.TODOListItem = lib.TODOListItem;
        root.TODOListEntry = lib.TODOListEntry;
        root.TODOListFactory = lib.TODOListFactory;
    }
}(this, function(EditableListElement, EditableListItemElement) {
    'use strict';

    class TODOListFactory {

        constructor(props) {
            this.Lists = [];
        }

        create(data) {
            var list = new TODOList();
            list.parseData(data);
            this.Lists.push(list);
            return list;
        }
    }

    class TODOList_class extends EditableListElement {

        createdCallback() {
            var $this = this;

            Object.assign(this.style, this.Styles);

            // entry class
            var entry = new TODOListEntry();
            $this.Entry = entry;

            entry.on('added', function(ev) {

                console.log('TODOListEntry_class#onadded() called');

                if (ev.detail.length) {
                    $this.appendChild(ev.detail[0]);
                    $this.emit('updated');
                } else {
                    throw new Error('Empty data on TODOListEntry#.onadded: ' + JSON.stringify(ev.detail));
                }
            });

            entry.on('remove', function(ev) {

                console.log('TODOListEntry_class#onremove() called');

                if (ev.detail.length) {
                    $this.removeChild(ev.detail[0]);
                    $this.emit('updated');
                } else {
                    throw new Error('Empty data on TODOListEntry#.onremove: ' + JSON.stringify(ev.detail));
                }
            });

            entry.on('updated', function(ev) {
                console.log('TODOListEntry_class#onupdated() called');
                $this.emit('updated', ev);
            });

            $this.appendChild(entry);
        }

        parseData(data) {
            var $this = this;

            console.log('TODOList_class#parseData() called');

            $this.Entry.placeholder = $this.Entry.innerHTML = data.placeholder;

            data.items.forEach(function(item) {
                var li = $this.Entry.create(item);
                $this.appendChild(li);
            });
        }

        saveData(saveObj) {
            var $this = this;

            console.log('TODOList_class#saveData() called');

            var saveFile = saveObj || {};
            saveFile.appName = saveFile.appName || $this.appName || 'TODOList example';
            saveFile.lists = saveFile.lists || [];

            var listObj = {
                placeholder: $this.Entry.placeholder,
                items: []
            };

            if ($this.hasChildNodes()) {
                $this.childNodes.forEach(function(item) {
                    if (item instanceof TODOListItem_class && !(item instanceof TODOListEntry_class)) {
                        if (item.text.trim()) {
                            listObj.items.push(item.text);
                        }
                    }
                });
                saveFile.lists.push(listObj);
            }

            return saveFile;
        }

        get Styles() {
            return {
                border: '1px outset silver',
                padding: '1%'
            };
        }
    }

    class TODOListItem_class extends EditableListItemElement {

        attachedCallback() {
            var $this = this;

            $this.setAttribute('selectOnEdit', 'true');

            $this.on('click', $this.edit);
            $this.on('blur', $this.save);

            $this.on('edit', function(ev) {

                console.log('TODOListItem_class#edit() called');

                $this.innerHTML = $this.innerHTML
                    .replace(/<s\>/ig, '-')
                    .replace(/<\/s\>$/ig, '')
                    .replace(/\&nbsp\;/ig, ' ')
                    .trim();

                $this.off('keydown', $this._onkeydown);
                $this.on('keydown', $this._onkeydown);
                // $this.selectAll();
            });

            $this.on('save', function(ev) {

                console.log('TODOListItem_class#save() called');

                var text = this.text;
                if (text.charAt(0) === '-') {
                    $this.innerHTML = (text.replace(/^\-/ig, '<s>') + '</s>').trim();
                }

                $this.off('keydown', $this._onkeydown);

                var value = $this.html;
                if (value) {
                    $this.innerHTML = $this.html;
                    $this.emit('updated', ev);
                } else {
                    $this.emit('remove', $this);
                }
            });
        }

        save(ev) {

        }

        _onkeydown(ev) {
            var $this = this;

            console.log('TODOListItem_class#_onkeydown() called');

            if (ev.keyCode === 13 || ev.keyCode === 27) {
                ev.preventDefault();
                $this.blur();
            }
        }
    }

    /**
     * The first item in the list acts both as the list name (placeholder) and the new item entry function.  Try it!  Code it...
     */
    class TODOListEntry_class extends TODOListItem_class {

        createdCallback() {
            this.contentEditable = true;
            this.placeholder = 'Enter an item to do';

            Object.assign(this.style, this.Styles);
        }

        attachedCallback() {
            var $this = this;

            $this.on('focus', $this.edit);
            $this.on('blur', $this.save);

            $this.on('keydown', $this._onkeydown);

            setTimeout(function() {
                $this.selectAll();
            }, 10);
        }

        edit(ev) {
            console.log('TODOListEntry_class#edit() called');
            super.edit.call(this, ev);
        }

        save(ev) {
            console.log('TODOListEntry_class#save() called');
            super.save.call(this, ev);
        }

        create(text) {
            var $this = this;

            console.log('TODOListEntry_class#create() called');

            var newItem = new TODOListItem();
            newItem.innerHTML = text;
            newItem.innerHTML = newItem.html;
            newItem.on('updated', function(ev) {
                $this.emit('updated', newItem);
            });
            newItem.on('remove', function(ev) {
                $this.emit('remove', newItem);
            });
            return newItem;
        }

        _onkeydown(ev) {
            var $this = this;

            console.log('TODOListEntry_class#_onkeydown() called');

            if (ev.keyCode === 13 || ev.keyCode === 27) {
                ev.preventDefault();
                var value = $this.html;
                if (!value) {
                    value = $this.innerHTML = $this.placeholder;
                }
                if ($this.placeholder !== value) {
                    if (value) {
                        var newItem = $this.create($this.html);
                        $this.emit('added', newItem);
                        $this.selectAll();
                    } else {
                        $this.innerHTML = '';
                        $this.blur();
                    }
                }
            }
        }

        /**
         * type-specific CSS chrome.  Refactor to a pattern (mixin)?
         */
        get Styles() {
            return {
                color: '#555',
                fontSize: '125%',
                fontStyle: 'italic'
            };
        }
    }

    // customElements.define('todo-list', TODOList_class, {
    //     extends: 'ul'
    // });

    // customElements.define('todo-item', TODOListItem_class, {
    //     extends: 'li'
    // });

    // customElements.define('todo-entry', TODOListEntry_class, {
    //     extends: 'li'
    // });

    var TODOList = document.registerElement('todo-list', {
        prototype: Object.create(TODOList_class.prototype),
        extends: 'ul'
    });

    var TODOListItem = document.registerElement('todo-item', {
        prototype: Object.create(TODOListItem_class.prototype),
        extends: 'li'
    });

    var TODOListEntry = document.registerElement('todo-entry', {
        prototype: Object.create(TODOListEntry_class.prototype),
        extends: 'li'
    });

    return {
        TODOList: TODOList,
        TODOListItem: TODOListItem,
        TODOListEntry: TODOListEntry,
        TODOListFactory: TODOListFactory
    };
}));
