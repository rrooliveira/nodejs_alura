// Compiled using marko@4.23.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/node_alura$1.0.0/src/app/views/books/list.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=utf-8></head><body><h1>Books List</h1><table id=books><tr><td>ID</td><td>Título</td><td>Preço</td><td>Editar</td><td>Remover</td></tr>");

  var $for$0 = 0;

  marko_forOf(data.books, function(book) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr" +
      marko_attr("id", "book_" + (book.id == null ? "" : book.id)) +
      "><td>" +
      marko_escapeXml(book.id) +
      "</td><td>" +
      marko_escapeXml(book.title) +
      "</td><td>" +
      marko_escapeXml(book.price) +
      "</td><td><a" +
      marko_attr("href", "/books/" + (book.id == null ? "" : book.id)) +
      ">Editar</a></td><td><a href=#" +
      marko_attr("data-ref", book.id) +
      " data-type=remocao>Remover</a></td></tr>");
  });

  out.w("</table><script src=/static/js/remove-book.js></script> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "20");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/node_alura$1.0.0/src/app/views/books/list.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
