/* istanbul ignore next */ ;
(function(root, factory) {
    'use strict';

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../base/EditableListElement', '../base/EditableListItemElement'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('../base/EditableListElement'), require('../base/EditableListItemElement'));
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

            $this.style.border = '1px outset silver';
            $this.style.padding = '1%';

            var entry = new TODOListEntry();
            $this.Entry = entry;

            entry.style.color = '#555';
            entry.style.fontSize = '125%';
            entry.style.fontStyle = 'italic';

            entry.on('added', function(data) {

                console.log('TODOListEntry_class#onadded() called');

                if (data.detail.length) {
                    $this.appendChild(data.detail[0]);
                    $this.emit('updated');
                } else {
                    throw new Error('Empty data on TODOListEntry#.onadded: ' + JSON.stringify(data.detail));
                }
            });

            entry.on('remove', function(data) {

                console.log('TODOListEntry_class#onremove() called');

                if (data.detail.length) {
                    $this.removeChild(data.detail[0]);
                    $this.emit('updated');
                } else {
                    throw new Error('Empty data on TODOListEntry#.onremove: ' + JSON.stringify(data.detail));
                }
            });

            entry.on('updated', function(data) {
                console.log('TODOListEntry_class#onupdated() called');
                $this.emit('updated');
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
            saveFile.appName = saveFile.appName || $this.appName || 'TODOList example',
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
    }

    class TODOListItem_class extends EditableListItemElement {

        attachedCallback() {
            var $this = this;

            $this.on('click', $this.edit);
            $this.on('blur', $this.save);
        }

        edit(ev) {
            var $this = this;

            console.log('TODOListItem_class#edit() called');

            super.edit.call($this, ev);

            $this.off('keydown', $this._onkeydown);
            $this.on('keydown', $this._onkeydown);
            $this.selectAll();
        }

        save(ev) {
            var $this = this;

            console.log('TODOListItem_class#save() called');

            super.save.call($this, ev);

            $this.once('click', $this.edit);
            $this.off('keydown', $this._onkeydown);

            $this.emit('updated');
        }

        _onkeydown(ev) {
            var $this = this;

            console.log('TODOListItem_class#_onkeydown() called');

            if (ev.keyCode === 13) {
                ev.preventDefault();
                $this.contentEditable = false;
                var value = this.text;
                if (value) {
                    this.innerHTML = this.text;
                    $this.once('click', $this.edit);
                } else {
                    $this.emit('remove', $this);
                }
                $this.blur();
            }
        }
    }

    class TODOListEntry_class extends TODOListItem_class {

        createdCallback() {
            this.contentEditable = true;
            this.placeholder = 'Enter an item to do';
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

            if (this.text === this.placeholder) {
                this.innerHTML = '';
            } else {
                this.innerHTML = this.text;
            }
        }

        save(ev) {

            console.log('TODOListEntry_class#save() called');

            if (this.text === '') {
                this.innerHTML = this.placeholder;
            } else {
                this.innerHTML = this.html;
            }
        }

        create(text) {
            var $this = this;

            console.log('TODOListEntry_class#create() called');

            var newItem = new TODOListItem();
            newItem.innerHTML = text;
            newItem.on('updated', function(ev) {
                $this.emit('updated');
            });
            newItem.on('remove', function(ev) {
                $this.emit('remove', newItem);
            });
            return newItem;
        }

        _onkeydown(ev) {
            var $this = this;

            console.log('TODOListEntry_class#_onkeydown() called');

            if (ev.keyCode === 13) {
                ev.preventDefault();
                var value = $this.text;
                if ($this.placeholder !== value) {
                    if (value) {
                        var newItem = $this.create($this.text);
                        $this.emit('added', newItem);
                        $this.selectAll();
                    } else {
                        $this.innerHTML = '';
                        $this.blur();
                    }
                }
            }
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
