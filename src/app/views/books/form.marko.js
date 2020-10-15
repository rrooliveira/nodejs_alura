// Compiled using marko@4.23.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/node_alura$1.0.0/src/app/views/books/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body>");

  if (data.book.id) {
    out.w("<h1>Edição de Livro</h1>");
  } else {
    out.w("<h1>Cadastro de Livro</h1>");
  }

  out.w("<form action=/books method=post>");

  if (data.book.id) {
    out.w("<div><input type=hidden name=_method value=PUT><input type=hidden id=id name=id" +
      marko_attr("value", data.book.id) +
      "></div>");
  }

  out.w("<div><label for=titulo>Titulo:</label><input type=text id=title name=title placeholder=\"coloque o titulo\"" +
    marko_attr("value", data.book.title) +
    "></div><div><label for=preco>Preço:</label><input type=text id=price name=price placeholder=150.25" +
    marko_attr("value", data.book.price) +
    "></div><div><label for=descricao>Descrição:</label><textarea cols=20 rows=10 id=description name=description placeholder=\"fale sobre o livro\">" +
    marko_escapeXml(data.book.description) +
    "</textarea></div><input type=submit value=Editar></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "18");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/node_alura$1.0.0/src/app/views/books/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
