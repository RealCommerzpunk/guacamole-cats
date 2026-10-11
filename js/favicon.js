// Ersetzt das Guacamole-Favicon durch das Katzen-Symbol.
// (HTML-Patches wirken nicht auf das <head> der index.html, daher per JavaScript.)
(function () {
    var href = 'app/ext/guacamole-cat-theme/resources/images/favicon.svg';

    Array.prototype.slice.call(document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]'))
        .forEach(function (link) { link.parentNode.removeChild(link); });

    var icon = document.createElement('link');
    icon.rel  = 'icon';
    icon.type = 'image/svg+xml';
    icon.href = href;
    document.head.appendChild(icon);
})();
