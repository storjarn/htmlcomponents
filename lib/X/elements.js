var Containers = {
    "unknown": {
        baseClass: HTMLUnknownElement,
        className: "Unknown"
    },
    "a": {
        baseClass: HTMLAnchorElement,
        className: "Anchor"
    },
    "area": {
        baseClass: HTMLAreaElement,
        className: "Area"
    },
    "article": {
        baseClass: HTMLDivElement,
        className: "Article"
    },
    "audio": {
        baseClass: HTMLAudioElement,
        className: "Audio"
    },
    "base": {
        baseClass: HTMLBaseElement,
        className: "Base"
    },
    "body": {
        baseClass: HTMLBodyElement,
        className: "Body"
    },
    "br": {
        baseClass: HTMLBRElement,
        className: "Break"
    },
    "button": {
        baseClass: HTMLButtonElement,
        className: "Button"
    },
    "datalist": {
        baseClass: HTMLDataListElement,
        className: "DataList"
    },
    "details": {
        baseClass: HTMLDivElement,
        className: "Details"
    },
    "dialog": {
        baseClass: HTMLDialogElement,
        className: "Dialog"
    },
    "div": {
        baseClass: HTMLDivElement,
        className: "Div"
    },
    "dl": {
        baseClass: HTMLDListElement,
        className: "DefinitionList"
    },
    "fieldset": {
        baseClass: HTMLFieldSetElement,
        className: "FieldSet"
    },
    "figcaption": {
        baseClass: HTMLDivElement,
        className: "FigureCaption"
    },
    "figure": {
        baseClass: HTMLDivElement,
        className: "Figure"
    },
    "font": {
        baseClass: HTMLFontElement,
        className: "Font"
    },
    "form": {
        baseClass: HTMLFormElement,
        className: "Form"
    },
    "frame": {
        baseClass: HTMLFrameElement,
        className: "Frame"
    },
    "footer": {
        baseClass: HTMLDivElement,
        className: "Footer"
    },
    "head": {
        baseClass: HTMLHeadElement,
        className: "Head"
    },
    "header": {
        baseClass: HTMLDivElement,
        className: "Header"
    },
    "h1": {
        baseClass: HTMLHeadingElement,
        className: "Heading1"
    },
    "h2": {
        baseClass: HTMLHeadingElement,
        className: "Heading2"
    },
    "h3": {
        baseClass: HTMLHeadingElement,
        className: "Heading3"
    },
    "h4": {
        baseClass: HTMLHeadingElement,
        className: "Heading4"
    },
    "h5": {
        baseClass: HTMLHeadingElement,
        className: "Heading5"
    },
    "h6": {
        baseClass: HTMLHeadingElement,
        className: "Heading6"
    },
    "label": {
        baseClass: HTMLLabelElement,
        className: "Label"
    },
    "legend": {
        baseClass: HTMLLegendElement,
        className: "Legend"
    },
    "li": {
        baseClass: HTMLLIElement,
        className: "ListItem"
    },
    "main": {
        baseClass: HTMLDivElement,
        className: "Main"
    },
    "map": {
        baseClass: HTMLMapElement,
        className: "Map"
    },
    "mark": {
        baseClass: HTMLDivElement,
        className: "Mark"
    },
    "media": {
        baseClass: HTMLMediaElement,
        className: "Media"
    },
    "meta": {
        baseClass: HTMLMetaElement,
        className: "Meta"
    },
    "meter": {
        baseClass: HTMLMeterElement,
        className: "Meter"
    },
    "mod": {
        baseClass: HTMLModElement,
        className: "Mod"
    },
    "nav": {
        baseClass: HTMLDivElement,
        className: "Nav"
    },
    "ol": {
        baseClass: HTMLOListElement,
        className: "OrderedList"
    },
    "p": {
        baseClass: HTMLParagraphElement,
        className: "Paragraph"
    },
    "pre": {
        baseClass: HTMLPreElement,
        className: "Pre"
    },
    "quote": {
        baseClass: HTMLQuoteElement,
        className: "Quote"
    },
    "section": {
        baseClass: HTMLDivElement,
        className: "Section"
    },
    "span": {
        baseClass: HTMLSpanElement,
        className: "Span"
    },
    "summary": {
        baseClass: HTMLDivElement,
        className: "Summary"
    },
    "caption": {
        baseClass: HTMLTableCaptionElement,
        className: "TableCaption"
    },
    "td": {
        baseClass: HTMLTableCellElement,
        className: "TableCell"
    },
    "table": {
        baseClass: HTMLTableElement,
        className: "Table"
    },
    "tr": {
        baseClass: HTMLTableRowElement,
        className: "TableRow"
    },
    // "th": {
    //     baseClass: HTMLTableHeaderCellElement,
    //     className: "TableHeaderCell"
    // },
    "col": {
        baseClass: HTMLTableColElement,
        className: "TableCol"
    },
    "time": {
        baseClass: HTMLDivElement,
        className: "Time"
    },
    "title": {
        baseClass: HTMLTitleElement,
        className: "Title"
    },
    "ul": {
        baseClass: HTMLUListElement,
        className: "UnorderedList"
    }
};

var Controls = {
    "canvas": {
        baseClass: HTMLCanvasElement,
        className: "Canvas"
    },
    "embed": {
        baseClass: HTMLEmbedElement,
        className: "Embed"
    },
    "hr": {
        baseClass: HTMLHRElement,
        className: "HorizontalRule"
    },
    "iframe": {
        baseClass: HTMLIFrameElement,
        className: "IFrame"
    },
    "img": {
        baseClass: HTMLImageElement,
        className: "Image"
    },
    "input": {
        baseClass: HTMLInputElement,
        className: "Input"
    },
    "link": {
        baseClass: HTMLLinkElement,
        className: "Link"
    },
    "object": {
        baseClass: HTMLObjectElement,
        className: "Object"
    },
    "option": {
        baseClass: HTMLOptionElement,
        className: "Option"
    },
    "optgroup": {
        baseClass: HTMLOptGroupElement,
        className: "OptionGroup"
    },
    "output": {
        baseClass: HTMLOutputElement,
        className: "Output"
    },
    "param": {
        baseClass: HTMLParamElement,
        className: "Param"
    },
    "picture": {
        baseClass: HTMLPictureElement,
        className: "Picture"
    },
    "progress": {
        baseClass: HTMLProgressElement,
        className: "Progress"
    },
    "script": {
        baseClass: HTMLScriptElement,
        className: "Script"
    },
    "select": {
        baseClass: HTMLSelectElement,
        className: "Select"
    },
    "slot": {
        baseClass: HTMLSlotElement,
        className: "Slot"
    },
    "source": {
        baseClass: HTMLSourceElement,
        className: "Source"
    },
    "style": {
        baseClass: HTMLStyleElement,
        className: "Style"
    },
    "template": {
        baseClass: HTMLTemplateElement,
        className: "Template"
    },
    "textarea": {
        baseClass: HTMLTextAreaElement,
        className: "TextArea"
    },
    "track": {
        baseClass: HTMLTrackElement,
        className: "Track"
    },
    "video": {
        baseClass: HTMLVideoElement,
        className: "Video"
    },
};

//-=-=-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=--=-=-=-=-=-=-

var Inputs = {
    "button": {
        baseClass: null,
        className: "Button"
    },
    "checkbox": {
        baseClass: null,
        className: "Checkbox"
    },
    "color": {
        baseClass: null,
        className: "Color"
    },
    "date": {
        baseClass: null,
        className: "Date"
    },
    "datetime-local": {
        baseClass: null,
        className: "DateTime"
    },
    "email": {
        baseClass: null,
        className: "Email"
    },
    "file": {
        baseClass: null,
        className: "File"
    },
    "hidden": {
        baseClass: null,
        className: "Hidden"
    },
    "image": {
        baseClass: null,
        className: "Image"
    },
    "month": {
        baseClass: null,
        className: "Month"
    },
    "number": {
        baseClass: null,
        className: "Number"
    },
    "password": {
        baseClass: null,
        className: "Password"
    },
    "radio": {
        baseClass: null,
        className: "Radio"
    },
    "range": {
        baseClass: null,
        className: "Range"
    },
    "reset": {
        baseClass: null,
        className: "Reset"
    },
    "search": {
        baseClass: null,
        className: "Search"
    },
    "submit": {
        baseClass: null,
        className: "Submit"
    },
    "tel": {
        baseClass: null,
        className: "Telephone"
    },
    "text": {
        baseClass: null,
        className: "Text"
    },
    "time": {
        baseClass: null,
        className: "Time"
    },
    "url": {
        baseClass: null,
        className: "Url"
    },
    "week": {
        baseClass: null,
        className: "Week"
    },
};


export { Containers, Controls, Inputs };
