/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 2/12/15
 * Time: 5:09 PM
 * To change this template use File | Settings | File Templates.
 */

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(pieces, ...substitutions) {
    var result = pieces[0];
    for (var i = 0; i < substitutions.length; ++i) {
        result += escape(substitutions[i]) + pieces[i + 1];
    }

    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&apos;")
        .replace(/"/g, "&quot;");
}
