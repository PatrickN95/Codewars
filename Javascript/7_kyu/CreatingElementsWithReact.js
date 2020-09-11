var React = require("react");

function createElement(content, tag, props) {
if (!tag) {
    tag = 'div';
  }
  return React.createElement(tag, props, content)
}

function createUnorderedList(list) {
  const elements = list.map((el, key) => createElement(el, 'li', { key }))
  return createElement(elements, 'ul')
}