// = realization

class HtmlFormatter {
  format(header, details) {
    let output = '';

    output += `<h1>${header}</h1>\r\n`;

    for (let [label, value] of details) {
      output += `<b>${label}:</b> <i>${value}</i>\r\n`;
    }

    return output;
  }
}

module.exports = HtmlFormatter;
