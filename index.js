import HTMLComponents from './lib/index.js';

global.HTMLComponents = HTMLComponents;

new HTMLComponents.Utility.Event.Custom('has_htmlcomponents', {
    library: HTMLComponents
}, null, window);

export default HTMLComponents;
