require.config({
    shim: {

    },
    paths: {
        base: '../lib/base',
        components: '../lib/components',
        mixins: '../lib/mixins',
        utility: '../lib/utility',
        'node-assert': 'bower_components/node-assert/assert',
        requirejs: 'bower_components/requirejs/require',
        jasmine: 'bower_components/jasmine/lib/jasmine-core',
        assert: 'bower_components/assert/index',
        webcomponentsjs: 'bower_components/webcomponentsjs/webcomponents'
    },
    packages: [

    ]
});

var testModules = [
    "./base/AnchorElement.js",
    "./base/AreaElement.js",
    "./base/AudioElement.js",
    "./base/BRElement.js",
    "./base/BaseElement.js",
    "./base/BodyElement.js",
    "./base/ButtonElement.js",
    "./base/CanvasElement.js",
    "./base/DListElement.js",
    "./base/DataListElement.js",
    "./base/DialogElement.js",
    "./base/DivElement.js",
    "./base/EmbedElement.js",
    "./base/FieldSetElement.js",
    "./base/FontElement.js",
    "./base/FormElement.js",
    "./base/FrameSetElement.js",
    "./base/HRElement.js",
    "./base/HeadElement.js",
    "./base/HeadingElement.js",
    "./base/IFrameElement.js",
    "./base/ImageElement.js",
    "./base/InputElement.js",
    "./base/LIElement.js",
    "./base/LabelElement.js",
    "./base/LegendElement.js",
    "./base/LinkElement.js",
    "./base/MapElement.js",
    "./base/MediaElement.js",
    "./base/MetaElement.js",
    "./base/MeterElement.js",
    "./base/ModElement.js",
    "./base/OListElement.js",
    "./base/ObjectElement.js",
    "./base/OptGroupElement.js",
    "./base/OptionElement.js",
    "./base/OutputElement.js",
    "./base/ParagraphElement.js",
    "./base/ParamElement.js",
    "./base/PictureElement.js",
    "./base/PreElement.js",
    "./base/ProgressElement.js",
    "./base/QuoteElement.js",
    "./base/ScriptElement.js",
    "./base/SelectElement.js",
    "./base/SlotElement.js",
    "./base/SourceElement.js",
    "./base/SpanElement.js",
    "./base/StyleElement.js",
    "./base/TableCaptionElement.js",
    "./base/TableCellElement.js",
    "./base/TableColElement.js",
    "./base/TableElement.js",
    "./base/TableRowElement.js",
    "./base/TemplateElement.js",
    "./base/TextAreaElement.js",
    "./base/TitleElement.js",
    "./base/TrackElement.js",
    "./base/UListElement.js",
    "./base/VideoElement.js"
];

require(
    [],
    function() {
        require(testModules, function() {
            // Set up the HTML reporter - this is reponsible for
            // aggregating the results reported by Jasmine as the
            // tests and suites are executed.
            // jasmine.getEnv().addReporter(
            //     new jasmine.HtmlReporter()
            // );
            // Run all the loaded test specs.
            jasmine.getEnv().execute();
        });

    }
);
