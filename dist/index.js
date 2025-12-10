import { jsx as k, jsxs as te, Fragment as Qr } from "react/jsx-runtime";
import * as Xr from "react";
import { useState as me, useMemo as we } from "react";
import { Box as de, TextField as Ot, InputAdornment as _t, Breadcrumbs as At, Typography as Jr, Link as Rt, useTheme as Zr, createTheme as Cr, TableCell as wr, TableRow as Pt, TableBody as It, TableHead as Nt, TableContainer as Mt, Table as Bt, Paper as Tr, List as et, ThemeProvider as Dt, Chip as Ft, Tooltip as zt, IconButton as Wt, ListItem as jt, ListItemButton as Lt, ListItemText as Vt, Collapse as Ut } from "@mui/material";
import { SearchOutlined as Yt, ChevronRightOutlined as Ht, CheckOutlined as qt, ContentCopyOutlined as Gt, FolderOpenOutlined as Kt, FolderOutlined as Qt, DescriptionOutlined as Xt, ExpandLessOutlined as Jt, ExpandMoreOutlined as Zt } from "@mui/icons-material";
import rt from "react-markdown";
import tt from "remark-gfm";
import { Prism as nt } from "react-syntax-highlighter";
const ot = {
  'code[class*="language-"]': {
    background: "hsl(230, 1%, 98%)",
    color: "hsl(230, 8%, 24%)",
    fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "2",
    OTabSize: "2",
    tabSize: "2",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none"
  },
  'pre[class*="language-"]': {
    background: "hsl(230, 1%, 98%)",
    color: "hsl(230, 8%, 24%)",
    fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "2",
    OTabSize: "2",
    tabSize: "2",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: "0.5em 0",
    overflow: "auto",
    borderRadius: "0.3em"
  },
  'code[class*="language-"]::-moz-selection': {
    background: "hsl(230, 1%, 90%)",
    color: "inherit"
  },
  'code[class*="language-"] *::-moz-selection': {
    background: "hsl(230, 1%, 90%)",
    color: "inherit"
  },
  'pre[class*="language-"] *::-moz-selection': {
    background: "hsl(230, 1%, 90%)",
    color: "inherit"
  },
  'code[class*="language-"]::selection': {
    background: "hsl(230, 1%, 90%)",
    color: "inherit"
  },
  'code[class*="language-"] *::selection': {
    background: "hsl(230, 1%, 90%)",
    color: "inherit"
  },
  'pre[class*="language-"] *::selection': {
    background: "hsl(230, 1%, 90%)",
    color: "inherit"
  },
  ':not(pre) > code[class*="language-"]': {
    padding: "0.2em 0.3em",
    borderRadius: "0.3em",
    whiteSpace: "normal"
  },
  comment: {
    color: "hsl(230, 4%, 64%)",
    fontStyle: "italic"
  },
  prolog: {
    color: "hsl(230, 4%, 64%)"
  },
  cdata: {
    color: "hsl(230, 4%, 64%)"
  },
  doctype: {
    color: "hsl(230, 8%, 24%)"
  },
  punctuation: {
    color: "hsl(230, 8%, 24%)"
  },
  entity: {
    color: "hsl(230, 8%, 24%)",
    cursor: "help"
  },
  "attr-name": {
    color: "hsl(35, 99%, 36%)"
  },
  "class-name": {
    color: "hsl(35, 99%, 36%)"
  },
  boolean: {
    color: "hsl(35, 99%, 36%)"
  },
  constant: {
    color: "hsl(35, 99%, 36%)"
  },
  number: {
    color: "hsl(35, 99%, 36%)"
  },
  atrule: {
    color: "hsl(35, 99%, 36%)"
  },
  keyword: {
    color: "hsl(301, 63%, 40%)"
  },
  property: {
    color: "hsl(5, 74%, 59%)"
  },
  tag: {
    color: "hsl(5, 74%, 59%)"
  },
  symbol: {
    color: "hsl(5, 74%, 59%)"
  },
  deleted: {
    color: "hsl(5, 74%, 59%)"
  },
  important: {
    color: "hsl(5, 74%, 59%)"
  },
  selector: {
    color: "hsl(119, 34%, 47%)"
  },
  string: {
    color: "hsl(119, 34%, 47%)"
  },
  char: {
    color: "hsl(119, 34%, 47%)"
  },
  builtin: {
    color: "hsl(119, 34%, 47%)"
  },
  inserted: {
    color: "hsl(119, 34%, 47%)"
  },
  regex: {
    color: "hsl(119, 34%, 47%)"
  },
  "attr-value": {
    color: "hsl(119, 34%, 47%)"
  },
  "attr-value > .token.punctuation": {
    color: "hsl(119, 34%, 47%)"
  },
  variable: {
    color: "hsl(221, 87%, 60%)"
  },
  operator: {
    color: "hsl(221, 87%, 60%)"
  },
  function: {
    color: "hsl(221, 87%, 60%)"
  },
  url: {
    color: "hsl(198, 99%, 37%)"
  },
  "attr-value > .token.punctuation.attr-equals": {
    color: "hsl(230, 8%, 24%)"
  },
  "special-attr > .token.attr-value > .token.value.css": {
    color: "hsl(230, 8%, 24%)"
  },
  ".language-css .token.selector": {
    color: "hsl(5, 74%, 59%)"
  },
  ".language-css .token.property": {
    color: "hsl(230, 8%, 24%)"
  },
  ".language-css .token.function": {
    color: "hsl(198, 99%, 37%)"
  },
  ".language-css .token.url > .token.function": {
    color: "hsl(198, 99%, 37%)"
  },
  ".language-css .token.url > .token.string.url": {
    color: "hsl(119, 34%, 47%)"
  },
  ".language-css .token.important": {
    color: "hsl(301, 63%, 40%)"
  },
  ".language-css .token.atrule .token.rule": {
    color: "hsl(301, 63%, 40%)"
  },
  ".language-javascript .token.operator": {
    color: "hsl(301, 63%, 40%)"
  },
  ".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation": {
    color: "hsl(344, 84%, 43%)"
  },
  ".language-json .token.operator": {
    color: "hsl(230, 8%, 24%)"
  },
  ".language-json .token.null.keyword": {
    color: "hsl(35, 99%, 36%)"
  },
  ".language-markdown .token.url": {
    color: "hsl(230, 8%, 24%)"
  },
  ".language-markdown .token.url > .token.operator": {
    color: "hsl(230, 8%, 24%)"
  },
  ".language-markdown .token.url-reference.url > .token.string": {
    color: "hsl(230, 8%, 24%)"
  },
  ".language-markdown .token.url > .token.content": {
    color: "hsl(221, 87%, 60%)"
  },
  ".language-markdown .token.url > .token.url": {
    color: "hsl(198, 99%, 37%)"
  },
  ".language-markdown .token.url-reference.url": {
    color: "hsl(198, 99%, 37%)"
  },
  ".language-markdown .token.blockquote.punctuation": {
    color: "hsl(230, 4%, 64%)",
    fontStyle: "italic"
  },
  ".language-markdown .token.hr.punctuation": {
    color: "hsl(230, 4%, 64%)",
    fontStyle: "italic"
  },
  ".language-markdown .token.code-snippet": {
    color: "hsl(119, 34%, 47%)"
  },
  ".language-markdown .token.bold .token.content": {
    color: "hsl(35, 99%, 36%)"
  },
  ".language-markdown .token.italic .token.content": {
    color: "hsl(301, 63%, 40%)"
  },
  ".language-markdown .token.strike .token.content": {
    color: "hsl(5, 74%, 59%)"
  },
  ".language-markdown .token.strike .token.punctuation": {
    color: "hsl(5, 74%, 59%)"
  },
  ".language-markdown .token.list.punctuation": {
    color: "hsl(5, 74%, 59%)"
  },
  ".language-markdown .token.title.important > .token.punctuation": {
    color: "hsl(5, 74%, 59%)"
  },
  bold: {
    fontWeight: "bold"
  },
  italic: {
    fontStyle: "italic"
  },
  namespace: {
    Opacity: "0.8"
  },
  "token.tab:not(:empty):before": {
    color: "hsla(230, 8%, 24%, 0.2)"
  },
  "token.cr:before": {
    color: "hsla(230, 8%, 24%, 0.2)"
  },
  "token.lf:before": {
    color: "hsla(230, 8%, 24%, 0.2)"
  },
  "token.space:before": {
    color: "hsla(230, 8%, 24%, 0.2)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item": {
    marginRight: "0.4em"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
    background: "hsl(230, 1%, 90%)",
    color: "hsl(230, 6%, 44%)",
    padding: "0.1em 0.4em",
    borderRadius: "0.3em"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
    background: "hsl(230, 1%, 90%)",
    color: "hsl(230, 6%, 44%)",
    padding: "0.1em 0.4em",
    borderRadius: "0.3em"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
    background: "hsl(230, 1%, 90%)",
    color: "hsl(230, 6%, 44%)",
    padding: "0.1em 0.4em",
    borderRadius: "0.3em"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
    background: "hsl(230, 1%, 78%)",
    color: "hsl(230, 8%, 24%)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
    background: "hsl(230, 1%, 78%)",
    color: "hsl(230, 8%, 24%)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
    background: "hsl(230, 1%, 78%)",
    color: "hsl(230, 8%, 24%)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
    background: "hsl(230, 1%, 78%)",
    color: "hsl(230, 8%, 24%)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
    background: "hsl(230, 1%, 78%)",
    color: "hsl(230, 8%, 24%)"
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
    background: "hsl(230, 1%, 78%)",
    color: "hsl(230, 8%, 24%)"
  },
  ".line-highlight.line-highlight": {
    background: "hsla(230, 8%, 24%, 0.05)"
  },
  ".line-highlight.line-highlight:before": {
    background: "hsl(230, 1%, 90%)",
    color: "hsl(230, 8%, 24%)",
    padding: "0.1em 0.6em",
    borderRadius: "0.3em",
    boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)"
  },
  ".line-highlight.line-highlight[data-end]:after": {
    background: "hsl(230, 1%, 90%)",
    color: "hsl(230, 8%, 24%)",
    padding: "0.1em 0.6em",
    borderRadius: "0.3em",
    boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)"
  },
  "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
    backgroundColor: "hsla(230, 8%, 24%, 0.05)"
  },
  ".line-numbers.line-numbers .line-numbers-rows": {
    borderRightColor: "hsla(230, 8%, 24%, 0.2)"
  },
  ".command-line .command-line-prompt": {
    borderRightColor: "hsla(230, 8%, 24%, 0.2)"
  },
  ".line-numbers .line-numbers-rows > span:before": {
    color: "hsl(230, 1%, 62%)"
  },
  ".command-line .command-line-prompt > span:before": {
    color: "hsl(230, 1%, 62%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-1": {
    color: "hsl(5, 74%, 59%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-5": {
    color: "hsl(5, 74%, 59%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-9": {
    color: "hsl(5, 74%, 59%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-2": {
    color: "hsl(119, 34%, 47%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-6": {
    color: "hsl(119, 34%, 47%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-10": {
    color: "hsl(119, 34%, 47%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-3": {
    color: "hsl(221, 87%, 60%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-7": {
    color: "hsl(221, 87%, 60%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-11": {
    color: "hsl(221, 87%, 60%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-4": {
    color: "hsl(301, 63%, 40%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-8": {
    color: "hsl(301, 63%, 40%)"
  },
  ".rainbow-braces .token.token.punctuation.brace-level-12": {
    color: "hsl(301, 63%, 40%)"
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
    backgroundColor: "hsla(353, 100%, 66%, 0.15)"
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
    backgroundColor: "hsla(353, 100%, 66%, 0.15)"
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection": {
    backgroundColor: "hsla(353, 95%, 66%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
    backgroundColor: "hsla(137, 100%, 55%, 0.15)"
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
    backgroundColor: "hsla(137, 100%, 55%, 0.15)"
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection": {
    backgroundColor: "hsla(135, 73%, 55%, 0.25)"
  },
  ".prism-previewer.prism-previewer:before": {
    borderColor: "hsl(0, 0, 95%)"
  },
  ".prism-previewer-gradient.prism-previewer-gradient div": {
    borderColor: "hsl(0, 0, 95%)",
    borderRadius: "0.3em"
  },
  ".prism-previewer-color.prism-previewer-color:before": {
    borderRadius: "0.3em"
  },
  ".prism-previewer-easing.prism-previewer-easing:before": {
    borderRadius: "0.3em"
  },
  ".prism-previewer.prism-previewer:after": {
    borderTopColor: "hsl(0, 0, 95%)"
  },
  ".prism-previewer-flipped.prism-previewer-flipped.after": {
    borderBottomColor: "hsl(0, 0, 95%)"
  },
  ".prism-previewer-angle.prism-previewer-angle:before": {
    background: "hsl(0, 0%, 100%)"
  },
  ".prism-previewer-time.prism-previewer-time:before": {
    background: "hsl(0, 0%, 100%)"
  },
  ".prism-previewer-easing.prism-previewer-easing": {
    background: "hsl(0, 0%, 100%)"
  },
  ".prism-previewer-angle.prism-previewer-angle circle": {
    stroke: "hsl(230, 8%, 24%)",
    strokeOpacity: "1"
  },
  ".prism-previewer-time.prism-previewer-time circle": {
    stroke: "hsl(230, 8%, 24%)",
    strokeOpacity: "1"
  },
  ".prism-previewer-easing.prism-previewer-easing circle": {
    stroke: "hsl(230, 8%, 24%)",
    fill: "transparent"
  },
  ".prism-previewer-easing.prism-previewer-easing path": {
    stroke: "hsl(230, 8%, 24%)"
  },
  ".prism-previewer-easing.prism-previewer-easing line": {
    stroke: "hsl(230, 8%, 24%)"
  }
}, at = {
  'pre[class*="language-"]': {
    color: "#d4d4d4",
    fontSize: "13px",
    textShadow: "none",
    fontFamily: 'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    background: "#1e1e1e"
  },
  'code[class*="language-"]': {
    color: "#d4d4d4",
    fontSize: "13px",
    textShadow: "none",
    fontFamily: 'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none"
  },
  'pre[class*="language-"]::selection': {
    textShadow: "none",
    background: "#264F78"
  },
  'code[class*="language-"]::selection': {
    textShadow: "none",
    background: "#264F78"
  },
  'pre[class*="language-"] *::selection': {
    textShadow: "none",
    background: "#264F78"
  },
  'code[class*="language-"] *::selection': {
    textShadow: "none",
    background: "#264F78"
  },
  ':not(pre) > code[class*="language-"]': {
    padding: ".1em .3em",
    borderRadius: ".3em",
    color: "#db4c69",
    background: "#1e1e1e"
  },
  ".namespace": {
    Opacity: ".7"
  },
  "doctype.doctype-tag": {
    color: "#569CD6"
  },
  "doctype.name": {
    color: "#9cdcfe"
  },
  comment: {
    color: "#6a9955"
  },
  prolog: {
    color: "#6a9955"
  },
  punctuation: {
    color: "#d4d4d4"
  },
  ".language-html .language-css .token.punctuation": {
    color: "#d4d4d4"
  },
  ".language-html .language-javascript .token.punctuation": {
    color: "#d4d4d4"
  },
  property: {
    color: "#9cdcfe"
  },
  tag: {
    color: "#569cd6"
  },
  boolean: {
    color: "#569cd6"
  },
  number: {
    color: "#b5cea8"
  },
  constant: {
    color: "#9cdcfe"
  },
  symbol: {
    color: "#b5cea8"
  },
  inserted: {
    color: "#b5cea8"
  },
  unit: {
    color: "#b5cea8"
  },
  selector: {
    color: "#d7ba7d"
  },
  "attr-name": {
    color: "#9cdcfe"
  },
  string: {
    color: "#ce9178"
  },
  char: {
    color: "#ce9178"
  },
  builtin: {
    color: "#ce9178"
  },
  deleted: {
    color: "#ce9178"
  },
  ".language-css .token.string.url": {
    textDecoration: "underline"
  },
  operator: {
    color: "#d4d4d4"
  },
  entity: {
    color: "#569cd6"
  },
  "operator.arrow": {
    color: "#569CD6"
  },
  atrule: {
    color: "#ce9178"
  },
  "atrule.rule": {
    color: "#c586c0"
  },
  "atrule.url": {
    color: "#9cdcfe"
  },
  "atrule.url.function": {
    color: "#dcdcaa"
  },
  "atrule.url.punctuation": {
    color: "#d4d4d4"
  },
  keyword: {
    color: "#569CD6"
  },
  "keyword.module": {
    color: "#c586c0"
  },
  "keyword.control-flow": {
    color: "#c586c0"
  },
  function: {
    color: "#dcdcaa"
  },
  "function.maybe-class-name": {
    color: "#dcdcaa"
  },
  regex: {
    color: "#d16969"
  },
  important: {
    color: "#569cd6"
  },
  italic: {
    fontStyle: "italic"
  },
  "class-name": {
    color: "#4ec9b0"
  },
  "maybe-class-name": {
    color: "#4ec9b0"
  },
  console: {
    color: "#9cdcfe"
  },
  parameter: {
    color: "#9cdcfe"
  },
  interpolation: {
    color: "#9cdcfe"
  },
  "punctuation.interpolation-punctuation": {
    color: "#569cd6"
  },
  variable: {
    color: "#9cdcfe"
  },
  "imports.maybe-class-name": {
    color: "#9cdcfe"
  },
  "exports.maybe-class-name": {
    color: "#9cdcfe"
  },
  escape: {
    color: "#d7ba7d"
  },
  "tag.punctuation": {
    color: "#808080"
  },
  cdata: {
    color: "#808080"
  },
  "attr-value": {
    color: "#ce9178"
  },
  "attr-value.punctuation": {
    color: "#ce9178"
  },
  "attr-value.punctuation.attr-equals": {
    color: "#d4d4d4"
  },
  namespace: {
    color: "#4ec9b0"
  },
  'pre[class*="language-javascript"]': {
    color: "#9cdcfe"
  },
  'code[class*="language-javascript"]': {
    color: "#9cdcfe"
  },
  'pre[class*="language-jsx"]': {
    color: "#9cdcfe"
  },
  'code[class*="language-jsx"]': {
    color: "#9cdcfe"
  },
  'pre[class*="language-typescript"]': {
    color: "#9cdcfe"
  },
  'code[class*="language-typescript"]': {
    color: "#9cdcfe"
  },
  'pre[class*="language-tsx"]': {
    color: "#9cdcfe"
  },
  'code[class*="language-tsx"]': {
    color: "#9cdcfe"
  },
  'pre[class*="language-css"]': {
    color: "#ce9178"
  },
  'code[class*="language-css"]': {
    color: "#ce9178"
  },
  'pre[class*="language-html"]': {
    color: "#d4d4d4"
  },
  'code[class*="language-html"]': {
    color: "#d4d4d4"
  },
  ".language-regex .token.anchor": {
    color: "#dcdcaa"
  },
  ".language-html .token.punctuation": {
    color: "#808080"
  },
  'pre[class*="language-"] > code[class*="language-"]': {
    position: "relative",
    zIndex: "1"
  },
  ".line-highlight.line-highlight": {
    background: "#f7ebc6",
    boxShadow: "inset 5px 0 0 #f7d87c",
    zIndex: "0"
  }
};
function ye(e, ...r) {
  const t = new URL(`https://mui.com/production-error/?code=${e}`);
  return r.forEach((n) => t.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${t} for the full message.`;
}
function en(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dr = { exports: {} }, ze = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr;
function rn() {
  if (xr) return j;
  xr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
  function D(v) {
    if (typeof v == "object" && v !== null) {
      var $ = v.$$typeof;
      switch ($) {
        case r:
          switch (v = v.type, v) {
            case d:
            case f:
            case n:
            case i:
            case o:
            case m:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case c:
                case g:
                case b:
                case p:
                case s:
                  return v;
                default:
                  return $;
              }
          }
        case t:
          return $;
      }
    }
  }
  function x(v) {
    return D(v) === f;
  }
  return j.AsyncMode = d, j.ConcurrentMode = f, j.ContextConsumer = c, j.ContextProvider = s, j.Element = r, j.ForwardRef = g, j.Fragment = n, j.Lazy = b, j.Memo = p, j.Portal = t, j.Profiler = i, j.StrictMode = o, j.Suspense = m, j.isAsyncMode = function(v) {
    return x(v) || D(v) === d;
  }, j.isConcurrentMode = x, j.isContextConsumer = function(v) {
    return D(v) === c;
  }, j.isContextProvider = function(v) {
    return D(v) === s;
  }, j.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === r;
  }, j.isForwardRef = function(v) {
    return D(v) === g;
  }, j.isFragment = function(v) {
    return D(v) === n;
  }, j.isLazy = function(v) {
    return D(v) === b;
  }, j.isMemo = function(v) {
    return D(v) === p;
  }, j.isPortal = function(v) {
    return D(v) === t;
  }, j.isProfiler = function(v) {
    return D(v) === i;
  }, j.isStrictMode = function(v) {
    return D(v) === o;
  }, j.isSuspense = function(v) {
    return D(v) === m;
  }, j.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === f || v === i || v === o || v === m || v === h || typeof v == "object" && v !== null && (v.$$typeof === b || v.$$typeof === p || v.$$typeof === s || v.$$typeof === c || v.$$typeof === g || v.$$typeof === w || v.$$typeof === O || v.$$typeof === B || v.$$typeof === l);
  }, j.typeOf = D, j;
}
var L = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Er;
function tn() {
  return Er || (Er = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
    function D(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === n || T === f || T === i || T === o || T === m || T === h || typeof T == "object" && T !== null && (T.$$typeof === b || T.$$typeof === p || T.$$typeof === s || T.$$typeof === c || T.$$typeof === g || T.$$typeof === w || T.$$typeof === O || T.$$typeof === B || T.$$typeof === l);
    }
    function x(T) {
      if (typeof T == "object" && T !== null) {
        var fe = T.$$typeof;
        switch (fe) {
          case r:
            var Fe = T.type;
            switch (Fe) {
              case d:
              case f:
              case n:
              case i:
              case o:
              case m:
                return Fe;
              default:
                var kr = Fe && Fe.$$typeof;
                switch (kr) {
                  case c:
                  case g:
                  case b:
                  case p:
                  case s:
                    return kr;
                  default:
                    return fe;
                }
            }
          case t:
            return fe;
        }
      }
    }
    var v = d, $ = f, ee = c, re = s, ce = r, ue = g, G = n, a = b, S = p, C = t, A = i, N = o, Z = m, oe = !1;
    function tr(T) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(T) || x(T) === d;
    }
    function y(T) {
      return x(T) === f;
    }
    function E(T) {
      return x(T) === c;
    }
    function M(T) {
      return x(T) === s;
    }
    function P(T) {
      return typeof T == "object" && T !== null && T.$$typeof === r;
    }
    function _(T) {
      return x(T) === g;
    }
    function F(T) {
      return x(T) === n;
    }
    function R(T) {
      return x(T) === b;
    }
    function I(T) {
      return x(T) === p;
    }
    function z(T) {
      return x(T) === t;
    }
    function V(T) {
      return x(T) === i;
    }
    function W(T) {
      return x(T) === o;
    }
    function ne(T) {
      return x(T) === m;
    }
    L.AsyncMode = v, L.ConcurrentMode = $, L.ContextConsumer = ee, L.ContextProvider = re, L.Element = ce, L.ForwardRef = ue, L.Fragment = G, L.Lazy = a, L.Memo = S, L.Portal = C, L.Profiler = A, L.StrictMode = N, L.Suspense = Z, L.isAsyncMode = tr, L.isConcurrentMode = y, L.isContextConsumer = E, L.isContextProvider = M, L.isElement = P, L.isForwardRef = _, L.isFragment = F, L.isLazy = R, L.isMemo = I, L.isPortal = z, L.isProfiler = V, L.isStrictMode = W, L.isSuspense = ne, L.isValidElementType = D, L.typeOf = x;
  }()), L;
}
var $r;
function it() {
  return $r || ($r = 1, process.env.NODE_ENV === "production" ? ze.exports = rn() : ze.exports = tn()), ze.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var nr, Or;
function nn() {
  if (Or) return nr;
  Or = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var d = Object.getOwnPropertyNames(s).map(function(g) {
        return s[g];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        f[g] = g;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return nr = o() ? Object.assign : function(i, s) {
    for (var c, d = n(i), f, g = 1; g < arguments.length; g++) {
      c = Object(arguments[g]);
      for (var m in c)
        r.call(c, m) && (d[m] = c[m]);
      if (e) {
        f = e(c);
        for (var h = 0; h < f.length; h++)
          t.call(c, f[h]) && (d[f[h]] = c[f[h]]);
      }
    }
    return d;
  }, nr;
}
var or, _r;
function gr() {
  if (_r) return or;
  _r = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return or = e, or;
}
var ar, Ar;
function st() {
  return Ar || (Ar = 1, ar = Function.call.bind(Object.prototype.hasOwnProperty)), ar;
}
var ir, Rr;
function on() {
  if (Rr) return ir;
  Rr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = gr(), t = {}, n = st();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, c, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in i)
        if (n(i, g)) {
          var m;
          try {
            if (typeof i[g] != "function") {
              var h = Error(
                (d || "React class") + ": " + c + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            m = i[g](s, g, d, c, null, r);
          } catch (b) {
            m = b;
          }
          if (m && !(m instanceof Error) && e(
            (d || "React class") + ": type specification of " + c + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in t)) {
            t[m.message] = !0;
            var p = f ? f() : "";
            e(
              "Failed " + c + " type: " + m.message + (p ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, ir = o, ir;
}
var sr, Pr;
function an() {
  if (Pr) return sr;
  Pr = 1;
  var e = it(), r = nn(), t = gr(), n = st(), o = on(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var d = "Warning: " + c;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return sr = function(c, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function m(y) {
      var E = y && (f && y[f] || y[g]);
      if (typeof E == "function")
        return E;
    }
    var h = "<<anonymous>>", p = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: B(),
      arrayOf: D,
      element: x(),
      elementType: v(),
      instanceOf: $,
      node: ue(),
      objectOf: re,
      oneOf: ee,
      oneOfType: ce,
      shape: a,
      exact: S
    };
    function b(y, E) {
      return y === E ? y !== 0 || 1 / y === 1 / E : y !== y && E !== E;
    }
    function l(y, E) {
      this.message = y, this.data = E && typeof E == "object" ? E : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function w(y) {
      if (process.env.NODE_ENV !== "production")
        var E = {}, M = 0;
      function P(F, R, I, z, V, W, ne) {
        if (z = z || h, W = W || I, ne !== t) {
          if (d) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = z + ":" + I;
            !E[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + W + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), E[fe] = !0, M++);
          }
        }
        return R[I] == null ? F ? R[I] === null ? new l("The " + V + " `" + W + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new l("The " + V + " `" + W + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : y(R, I, z, V, W);
      }
      var _ = P.bind(null, !1);
      return _.isRequired = P.bind(null, !0), _;
    }
    function O(y) {
      function E(M, P, _, F, R, I) {
        var z = M[P], V = N(z);
        if (V !== y) {
          var W = Z(z);
          return new l(
            "Invalid " + F + " `" + R + "` of type " + ("`" + W + "` supplied to `" + _ + "`, expected ") + ("`" + y + "`."),
            { expectedType: y }
          );
        }
        return null;
      }
      return w(E);
    }
    function B() {
      return w(s);
    }
    function D(y) {
      function E(M, P, _, F, R) {
        if (typeof y != "function")
          return new l("Property `" + R + "` of component `" + _ + "` has invalid PropType notation inside arrayOf.");
        var I = M[P];
        if (!Array.isArray(I)) {
          var z = N(I);
          return new l("Invalid " + F + " `" + R + "` of type " + ("`" + z + "` supplied to `" + _ + "`, expected an array."));
        }
        for (var V = 0; V < I.length; V++) {
          var W = y(I, V, _, F, R + "[" + V + "]", t);
          if (W instanceof Error)
            return W;
        }
        return null;
      }
      return w(E);
    }
    function x() {
      function y(E, M, P, _, F) {
        var R = E[M];
        if (!c(R)) {
          var I = N(R);
          return new l("Invalid " + _ + " `" + F + "` of type " + ("`" + I + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(y);
    }
    function v() {
      function y(E, M, P, _, F) {
        var R = E[M];
        if (!e.isValidElementType(R)) {
          var I = N(R);
          return new l("Invalid " + _ + " `" + F + "` of type " + ("`" + I + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(y);
    }
    function $(y) {
      function E(M, P, _, F, R) {
        if (!(M[P] instanceof y)) {
          var I = y.name || h, z = tr(M[P]);
          return new l("Invalid " + F + " `" + R + "` of type " + ("`" + z + "` supplied to `" + _ + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return w(E);
    }
    function ee(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function E(M, P, _, F, R) {
        for (var I = M[P], z = 0; z < y.length; z++)
          if (b(I, y[z]))
            return null;
        var V = JSON.stringify(y, function(ne, T) {
          var fe = Z(T);
          return fe === "symbol" ? String(T) : T;
        });
        return new l("Invalid " + F + " `" + R + "` of value `" + String(I) + "` " + ("supplied to `" + _ + "`, expected one of " + V + "."));
      }
      return w(E);
    }
    function re(y) {
      function E(M, P, _, F, R) {
        if (typeof y != "function")
          return new l("Property `" + R + "` of component `" + _ + "` has invalid PropType notation inside objectOf.");
        var I = M[P], z = N(I);
        if (z !== "object")
          return new l("Invalid " + F + " `" + R + "` of type " + ("`" + z + "` supplied to `" + _ + "`, expected an object."));
        for (var V in I)
          if (n(I, V)) {
            var W = y(I, V, _, F, R + "." + V, t);
            if (W instanceof Error)
              return W;
          }
        return null;
      }
      return w(E);
    }
    function ce(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var E = 0; E < y.length; E++) {
        var M = y[E];
        if (typeof M != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(M) + " at index " + E + "."
          ), s;
      }
      function P(_, F, R, I, z) {
        for (var V = [], W = 0; W < y.length; W++) {
          var ne = y[W], T = ne(_, F, R, I, z, t);
          if (T == null)
            return null;
          T.data && n(T.data, "expectedType") && V.push(T.data.expectedType);
        }
        var fe = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new l("Invalid " + I + " `" + z + "` supplied to " + ("`" + R + "`" + fe + "."));
      }
      return w(P);
    }
    function ue() {
      function y(E, M, P, _, F) {
        return C(E[M]) ? null : new l("Invalid " + _ + " `" + F + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return w(y);
    }
    function G(y, E, M, P, _) {
      return new l(
        (y || "React class") + ": " + E + " type `" + M + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _ + "`."
      );
    }
    function a(y) {
      function E(M, P, _, F, R) {
        var I = M[P], z = N(I);
        if (z !== "object")
          return new l("Invalid " + F + " `" + R + "` of type `" + z + "` " + ("supplied to `" + _ + "`, expected `object`."));
        for (var V in y) {
          var W = y[V];
          if (typeof W != "function")
            return G(_, F, R, V, Z(W));
          var ne = W(I, V, _, F, R + "." + V, t);
          if (ne)
            return ne;
        }
        return null;
      }
      return w(E);
    }
    function S(y) {
      function E(M, P, _, F, R) {
        var I = M[P], z = N(I);
        if (z !== "object")
          return new l("Invalid " + F + " `" + R + "` of type `" + z + "` " + ("supplied to `" + _ + "`, expected `object`."));
        var V = r({}, M[P], y);
        for (var W in V) {
          var ne = y[W];
          if (n(y, W) && typeof ne != "function")
            return G(_, F, R, W, Z(ne));
          if (!ne)
            return new l(
              "Invalid " + F + " `" + R + "` key `" + W + "` supplied to `" + _ + "`.\nBad object: " + JSON.stringify(M[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(y), null, "  ")
            );
          var T = ne(I, W, _, F, R + "." + W, t);
          if (T)
            return T;
        }
        return null;
      }
      return w(E);
    }
    function C(y) {
      switch (typeof y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !y;
        case "object":
          if (Array.isArray(y))
            return y.every(C);
          if (y === null || c(y))
            return !0;
          var E = m(y);
          if (E) {
            var M = E.call(y), P;
            if (E !== y.entries) {
              for (; !(P = M.next()).done; )
                if (!C(P.value))
                  return !1;
            } else
              for (; !(P = M.next()).done; ) {
                var _ = P.value;
                if (_ && !C(_[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(y, E) {
      return y === "symbol" ? !0 : E ? E["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && E instanceof Symbol : !1;
    }
    function N(y) {
      var E = typeof y;
      return Array.isArray(y) ? "array" : y instanceof RegExp ? "object" : A(E, y) ? "symbol" : E;
    }
    function Z(y) {
      if (typeof y > "u" || y === null)
        return "" + y;
      var E = N(y);
      if (E === "object") {
        if (y instanceof Date)
          return "date";
        if (y instanceof RegExp)
          return "regexp";
      }
      return E;
    }
    function oe(y) {
      var E = Z(y);
      switch (E) {
        case "array":
        case "object":
          return "an " + E;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + E;
        default:
          return E;
      }
    }
    function tr(y) {
      return !y.constructor || !y.constructor.name ? h : y.constructor.name;
    }
    return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
  }, sr;
}
var lr, Ir;
function sn() {
  if (Ir) return lr;
  Ir = 1;
  var e = gr();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, lr = function() {
    function n(s, c, d, f, g, m) {
      if (m !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, lr;
}
if (process.env.NODE_ENV !== "production") {
  var ln = it(), cn = !0;
  dr.exports = an()(ln.isElement, cn);
} else
  dr.exports = sn()();
var un = dr.exports;
const Ae = /* @__PURE__ */ en(un);
var fr = { exports: {} }, H = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function dn() {
  if (Nr) return H;
  Nr = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), p = Symbol.for("react.client.reference");
  function b(l) {
    if (typeof l == "object" && l !== null) {
      var w = l.$$typeof;
      switch (w) {
        case e:
          switch (l = l.type, l) {
            case t:
            case o:
            case n:
            case d:
            case f:
            case h:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case s:
                case c:
                case m:
                case g:
                  return l;
                case i:
                  return l;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  return H.ContextConsumer = i, H.ContextProvider = s, H.Element = e, H.ForwardRef = c, H.Fragment = t, H.Lazy = m, H.Memo = g, H.Portal = r, H.Profiler = o, H.StrictMode = n, H.Suspense = d, H.SuspenseList = f, H.isContextConsumer = function(l) {
    return b(l) === i;
  }, H.isContextProvider = function(l) {
    return b(l) === s;
  }, H.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, H.isForwardRef = function(l) {
    return b(l) === c;
  }, H.isFragment = function(l) {
    return b(l) === t;
  }, H.isLazy = function(l) {
    return b(l) === m;
  }, H.isMemo = function(l) {
    return b(l) === g;
  }, H.isPortal = function(l) {
    return b(l) === r;
  }, H.isProfiler = function(l) {
    return b(l) === o;
  }, H.isStrictMode = function(l) {
    return b(l) === n;
  }, H.isSuspense = function(l) {
    return b(l) === d;
  }, H.isSuspenseList = function(l) {
    return b(l) === f;
  }, H.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === t || l === o || l === n || l === d || l === f || typeof l == "object" && l !== null && (l.$$typeof === m || l.$$typeof === g || l.$$typeof === s || l.$$typeof === i || l.$$typeof === c || l.$$typeof === p || l.getModuleId !== void 0);
  }, H.typeOf = b, H;
}
var q = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr;
function fn() {
  return Mr || (Mr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l) {
      if (typeof l == "object" && l !== null) {
        var w = l.$$typeof;
        switch (w) {
          case r:
            switch (l = l.type, l) {
              case n:
              case i:
              case o:
              case f:
              case g:
              case p:
                return l;
              default:
                switch (l = l && l.$$typeof, l) {
                  case c:
                  case d:
                  case h:
                  case m:
                    return l;
                  case s:
                    return l;
                  default:
                    return w;
                }
            }
          case t:
            return w;
        }
      }
    }
    var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
    q.ContextConsumer = s, q.ContextProvider = c, q.Element = r, q.ForwardRef = d, q.Fragment = n, q.Lazy = h, q.Memo = m, q.Portal = t, q.Profiler = i, q.StrictMode = o, q.Suspense = f, q.SuspenseList = g, q.isContextConsumer = function(l) {
      return e(l) === s;
    }, q.isContextProvider = function(l) {
      return e(l) === c;
    }, q.isElement = function(l) {
      return typeof l == "object" && l !== null && l.$$typeof === r;
    }, q.isForwardRef = function(l) {
      return e(l) === d;
    }, q.isFragment = function(l) {
      return e(l) === n;
    }, q.isLazy = function(l) {
      return e(l) === h;
    }, q.isMemo = function(l) {
      return e(l) === m;
    }, q.isPortal = function(l) {
      return e(l) === t;
    }, q.isProfiler = function(l) {
      return e(l) === i;
    }, q.isStrictMode = function(l) {
      return e(l) === o;
    }, q.isSuspense = function(l) {
      return e(l) === f;
    }, q.isSuspenseList = function(l) {
      return e(l) === g;
    }, q.isValidElementType = function(l) {
      return typeof l == "string" || typeof l == "function" || l === n || l === i || l === o || l === f || l === g || typeof l == "object" && l !== null && (l.$$typeof === h || l.$$typeof === m || l.$$typeof === c || l.$$typeof === s || l.$$typeof === d || l.$$typeof === b || l.getModuleId !== void 0);
    }, q.typeOf = e;
  }()), q;
}
process.env.NODE_ENV === "production" ? fr.exports = dn() : fr.exports = fn();
var lt = fr.exports;
function be(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ct(e) {
  if (/* @__PURE__ */ Xr.isValidElement(e) || lt.isValidElementType(e) || !be(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = ct(e[t]);
  }), r;
}
function ie(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? {
    ...e
  } : e;
  return be(e) && be(r) && Object.keys(r).forEach((o) => {
    /* @__PURE__ */ Xr.isValidElement(r[o]) || lt.isValidElementType(r[o]) ? n[o] = r[o] : be(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && be(e[o]) ? n[o] = ie(e[o], r[o], t) : t.clone ? n[o] = be(r[o]) ? ct(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
const pn = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => ({
    ...t,
    [n.key]: n.val
  }), {});
};
function hn(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5,
    ...o
  } = e, i = pn(r), s = Object.keys(i);
  function c(h) {
    return `@media (min-width:${typeof r[h] == "number" ? r[h] : h}${t})`;
  }
  function d(h) {
    return `@media (max-width:${(typeof r[h] == "number" ? r[h] : h) - n / 100}${t})`;
  }
  function f(h, p) {
    const b = s.indexOf(p);
    return `@media (min-width:${typeof r[h] == "number" ? r[h] : h}${t}) and (max-width:${(b !== -1 && typeof r[s[b]] == "number" ? r[s[b]] : p) - n / 100}${t})`;
  }
  function g(h) {
    return s.indexOf(h) + 1 < s.length ? f(h, s[s.indexOf(h) + 1]) : c(h);
  }
  function m(h) {
    const p = s.indexOf(h);
    return p === 0 ? c(s[1]) : p === s.length - 1 ? d(s[p]) : f(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: c,
    down: d,
    between: f,
    only: g,
    not: m,
    unit: t,
    ...o
  };
}
function Br(e, r) {
  if (!e.containerQueries)
    return r;
  const t = Object.keys(r).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var s, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((s = n.match(i)) == null ? void 0 : s[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return t.length ? t.reduce((n, o) => {
    const i = r[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...r
  }) : r;
}
function mn(e, r) {
  return r === "@" || r.startsWith("@") && (e.some((t) => r.startsWith(`@${t}`)) || !!r.match(/^@\d/));
}
function gn(e, r) {
  const t = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!t) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${r})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : ye(18, `(${r})`));
    return null;
  }
  const [, n, o] = t, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function bn(e) {
  const r = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function t(i, s) {
    i.up = (...c) => r(e.breakpoints.up(...c), s), i.down = (...c) => r(e.breakpoints.down(...c), s), i.between = (...c) => r(e.breakpoints.between(...c), s), i.only = (...c) => r(e.breakpoints.only(...c), s), i.not = (...c) => {
      const d = r(e.breakpoints.not(...c), s);
      return d.includes("not all and") ? d.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : d;
    };
  }
  const n = {}, o = (i) => (t(n, i), n);
  return t(o), {
    ...e,
    containerQueries: o
  };
}
const yn = {
  borderRadius: 4
}, Se = process.env.NODE_ENV !== "production" ? Ae.oneOfType([Ae.number, Ae.string, Ae.object, Ae.array]) : {};
function Ne(e, r) {
  return r ? ie(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Le = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Dr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Le[e]}px)`
}, vn = {
  containerQueries: (e) => ({
    up: (r) => {
      let t = typeof r == "number" ? r : Le[r] || r;
      return typeof t == "number" && (t = `${t}px`), e ? `@container ${e} (min-width:${t})` : `@container (min-width:${t})`;
    }
  })
};
function ge(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || Dr;
    return r.reduce((s, c, d) => (s[i.up(i.keys[d])] = t(r[d]), s), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || Dr;
    return Object.keys(r).reduce((s, c) => {
      if (mn(i.keys, c)) {
        const d = gn(n.containerQueries ? n : vn, c);
        d && (s[d] = t(r[c], c));
      } else if (Object.keys(i.values || Le).includes(c)) {
        const d = i.up(c);
        s[d] = t(r[c], c);
      } else {
        const d = c;
        s[d] = r[d];
      }
      return s;
    }, {});
  }
  return t(r);
}
function Sn(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Fr(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function ut(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ye(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ve(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function je(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = Ve(e, t) || n, r && (o = r(o, n, e)), o;
}
function J(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[r] == null)
      return null;
    const c = s[r], d = s.theme, f = Ve(d, n) || {};
    return ge(s, c, (m) => {
      let h = je(f, o, m);
      return m === h && typeof m == "string" && (h = je(f, o, `${r}${m === "default" ? "" : ut(m)}`, m)), t === !1 ? h : {
        [t]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Se
  } : {}, i.filterProps = [r], i;
}
function kn(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const Cn = {
  m: "margin",
  p: "padding"
}, wn = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, zr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Tn = kn((e) => {
  if (e.length > 2)
    if (zr[e])
      e = zr[e];
    else
      return [e];
  const [r, t] = e.split(""), n = Cn[r], o = wn[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Ue = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ye = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], xn = [...Ue, ...Ye];
function Be(e, r, t, n) {
  const o = Ve(e, r, !0) ?? t;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`)));
    const c = o[s];
    return i >= 0 ? c : typeof c == "number" ? -c : typeof c == "string" && c.startsWith("var(") ? `calc(-1 * ${c})` : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function br(e) {
  return Be(e, "spacing", 8, "spacing");
}
function De(e, r) {
  return typeof r == "string" || r == null ? r : e(r);
}
function En(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = De(r, t), n), {});
}
function $n(e, r, t, n) {
  if (!r.includes(t))
    return null;
  const o = Tn(t), i = En(o, n), s = e[t];
  return ge(e, s, i);
}
function dt(e, r) {
  const t = br(e.theme);
  return Object.keys(e).map((n) => $n(e, r, n, t)).reduce(Ne, {});
}
function Q(e) {
  return dt(e, Ue);
}
Q.propTypes = process.env.NODE_ENV !== "production" ? Ue.reduce((e, r) => (e[r] = Se, e), {}) : {};
Q.filterProps = Ue;
function X(e) {
  return dt(e, Ye);
}
X.propTypes = process.env.NODE_ENV !== "production" ? Ye.reduce((e, r) => (e[r] = Se, e), {}) : {};
X.filterProps = Ye;
process.env.NODE_ENV !== "production" && xn.reduce((e, r) => (e[r] = Se, e), {});
function ft(e = 8, r = br({
  spacing: e
})) {
  if (e.mui)
    return e;
  const t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = r(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return t.mui = !0, t;
}
function He(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? Ne(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function se(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function le(e, r) {
  return J({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const On = le("border", se), _n = le("borderTop", se), An = le("borderRight", se), Rn = le("borderBottom", se), Pn = le("borderLeft", se), In = le("borderColor"), Nn = le("borderTopColor"), Mn = le("borderRightColor"), Bn = le("borderBottomColor"), Dn = le("borderLeftColor"), Fn = le("outline", se), zn = le("outlineColor"), qe = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Be(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: De(r, n)
    });
    return ge(e, e.borderRadius, t);
  }
  return null;
};
qe.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Se
} : {};
qe.filterProps = ["borderRadius"];
He(On, _n, An, Rn, Pn, In, Nn, Mn, Bn, Dn, qe, Fn, zn);
const Ge = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Be(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: De(r, n)
    });
    return ge(e, e.gap, t);
  }
  return null;
};
Ge.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Se
} : {};
Ge.filterProps = ["gap"];
const Ke = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Be(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: De(r, n)
    });
    return ge(e, e.columnGap, t);
  }
  return null;
};
Ke.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Se
} : {};
Ke.filterProps = ["columnGap"];
const Qe = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Be(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: De(r, n)
    });
    return ge(e, e.rowGap, t);
  }
  return null;
};
Qe.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Se
} : {};
Qe.filterProps = ["rowGap"];
const Wn = J({
  prop: "gridColumn"
}), jn = J({
  prop: "gridRow"
}), Ln = J({
  prop: "gridAutoFlow"
}), Vn = J({
  prop: "gridAutoColumns"
}), Un = J({
  prop: "gridAutoRows"
}), Yn = J({
  prop: "gridTemplateColumns"
}), Hn = J({
  prop: "gridTemplateRows"
}), qn = J({
  prop: "gridTemplateAreas"
}), Gn = J({
  prop: "gridArea"
});
He(Ge, Ke, Qe, Wn, jn, Ln, Vn, Un, Yn, Hn, qn, Gn);
function _e(e, r) {
  return r === "grey" ? r : e;
}
const Kn = J({
  prop: "color",
  themeKey: "palette",
  transform: _e
}), Qn = J({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: _e
}), Xn = J({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: _e
});
He(Kn, Qn, Xn);
function ae(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Jn = J({
  prop: "width",
  transform: ae
}), yr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var o, i, s, c, d;
      const n = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[t]) || Le[t];
      return n ? ((d = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : d.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: ae(t)
      };
    };
    return ge(e, e.maxWidth, r);
  }
  return null;
};
yr.filterProps = ["maxWidth"];
const Zn = J({
  prop: "minWidth",
  transform: ae
}), eo = J({
  prop: "height",
  transform: ae
}), ro = J({
  prop: "maxHeight",
  transform: ae
}), to = J({
  prop: "minHeight",
  transform: ae
});
J({
  prop: "size",
  cssProperty: "width",
  transform: ae
});
J({
  prop: "size",
  cssProperty: "height",
  transform: ae
});
const no = J({
  prop: "boxSizing"
});
He(Jn, yr, Zn, eo, ro, to, no);
const Xe = {
  // borders
  border: {
    themeKey: "borders",
    transform: se
  },
  borderTop: {
    themeKey: "borders",
    transform: se
  },
  borderRight: {
    themeKey: "borders",
    transform: se
  },
  borderBottom: {
    themeKey: "borders",
    transform: se
  },
  borderLeft: {
    themeKey: "borders",
    transform: se
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: se
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: qe
  },
  // palette
  color: {
    themeKey: "palette",
    transform: _e
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: _e
  },
  backgroundColor: {
    themeKey: "palette",
    transform: _e
  },
  // spacing
  p: {
    style: X
  },
  pt: {
    style: X
  },
  pr: {
    style: X
  },
  pb: {
    style: X
  },
  pl: {
    style: X
  },
  px: {
    style: X
  },
  py: {
    style: X
  },
  padding: {
    style: X
  },
  paddingTop: {
    style: X
  },
  paddingRight: {
    style: X
  },
  paddingBottom: {
    style: X
  },
  paddingLeft: {
    style: X
  },
  paddingX: {
    style: X
  },
  paddingY: {
    style: X
  },
  paddingInline: {
    style: X
  },
  paddingInlineStart: {
    style: X
  },
  paddingInlineEnd: {
    style: X
  },
  paddingBlock: {
    style: X
  },
  paddingBlockStart: {
    style: X
  },
  paddingBlockEnd: {
    style: X
  },
  m: {
    style: Q
  },
  mt: {
    style: Q
  },
  mr: {
    style: Q
  },
  mb: {
    style: Q
  },
  ml: {
    style: Q
  },
  mx: {
    style: Q
  },
  my: {
    style: Q
  },
  margin: {
    style: Q
  },
  marginTop: {
    style: Q
  },
  marginRight: {
    style: Q
  },
  marginBottom: {
    style: Q
  },
  marginLeft: {
    style: Q
  },
  marginX: {
    style: Q
  },
  marginY: {
    style: Q
  },
  marginInline: {
    style: Q
  },
  marginInlineStart: {
    style: Q
  },
  marginInlineEnd: {
    style: Q
  },
  marginBlock: {
    style: Q
  },
  marginBlockStart: {
    style: Q
  },
  marginBlockEnd: {
    style: Q
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Ge
  },
  rowGap: {
    style: Qe
  },
  columnGap: {
    style: Ke
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ae
  },
  maxWidth: {
    style: yr
  },
  minWidth: {
    transform: ae
  },
  height: {
    transform: ae
  },
  maxHeight: {
    transform: ae
  },
  minHeight: {
    transform: ae
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function oo(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function ao(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function io() {
  function e(t, n, o, i) {
    const s = {
      [t]: n,
      theme: o
    }, c = i[t];
    if (!c)
      return {
        [t]: n
      };
    const {
      cssProperty: d = t,
      themeKey: f,
      transform: g,
      style: m
    } = c;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const h = Ve(o, f) || {};
    return m ? m(s) : ge(s, n, (b) => {
      let l = je(h, g, b);
      return b === l && typeof b == "string" && (l = je(h, g, `${t}${b === "default" ? "" : ut(b)}`, b)), d === !1 ? l : {
        [d]: l
      };
    });
  }
  function r(t) {
    const {
      sx: n,
      theme: o = {},
      nested: i
    } = t || {};
    if (!n)
      return null;
    const s = o.unstable_sxConfig ?? Xe;
    function c(d) {
      let f = d;
      if (typeof d == "function")
        f = d(o);
      else if (typeof d != "object")
        return d;
      if (!f)
        return null;
      const g = Sn(o.breakpoints), m = Object.keys(g);
      let h = g;
      return Object.keys(f).forEach((p) => {
        const b = ao(f[p], o);
        if (b != null)
          if (typeof b == "object")
            if (s[p])
              h = Ne(h, e(p, b, o, s));
            else {
              const l = ge({
                theme: o
              }, b, (w) => ({
                [p]: w
              }));
              oo(l, b) ? h[p] = r({
                sx: b,
                theme: o,
                nested: !0
              }) : h = Ne(h, l);
            }
          else
            h = Ne(h, e(p, b, o, s));
      }), !i && o.modularCssLayers ? {
        "@layer sx": Br(o, Fr(m, h))
      } : Br(o, Fr(m, h));
    }
    return Array.isArray(n) ? n.map(c) : c(n);
  }
  return r;
}
const Je = io();
Je.filterProps = ["sx"];
function so(e, r) {
  var n;
  const t = this;
  if (t.vars) {
    if (!((n = t.colorSchemes) != null && n[e]) || typeof t.getColorSchemeSelector != "function")
      return {};
    let o = t.getColorSchemeSelector(e);
    return o === "&" ? r : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: r
    });
  }
  return t.palette.mode === e ? r : {};
}
function lo(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, c = hn(t), d = ft(o);
  let f = ie({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: d,
    shape: {
      ...yn,
      ...i
    }
  }, s);
  return f = bn(f), f.applyStyles = so, f = r.reduce((g, m) => ie(g, m), f), f.unstable_sxConfig = {
    ...Xe,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, f.unstable_sx = function(m) {
    return Je({
      sx: m,
      theme: this
    });
  }, f;
}
const Wr = (e) => e, co = () => {
  let e = Wr;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = Wr;
    }
  };
}, uo = co(), fo = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function po(e, r, t = "Mui") {
  const n = fo[r];
  return n ? `${t}-${n}` : `${uo.generate(e)}-${r}`;
}
function ho(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
function vr(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), ho(e, r, t);
}
function mo(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ve(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ve(mo(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(t))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ye(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ye(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const go = (e) => {
  const r = ve(e);
  return r.values.slice(0, 3).map((t, n) => r.type.includes("hsl") && n !== 0 ? `${t}%` : t).join(" ");
}, Pe = (e, r) => {
  try {
    return go(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
function Ze(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.includes("color") ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function pt(e) {
  e = ve(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), s = (f, g = (f + t / 30) % 12) => o - i * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let c = "rgb";
  const d = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", d.push(r[3])), Ze({
    type: c,
    values: d
  });
}
function pr(e) {
  e = ve(e);
  let r = e.type === "hsl" || e.type === "hsla" ? ve(pt(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function jr(e, r) {
  const t = pr(e), n = pr(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function ht(e, r) {
  return e = ve(e), r = vr(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, Ze(e);
}
function ke(e, r, t) {
  try {
    return ht(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function er(e, r) {
  if (e = ve(e), r = vr(r), e.type.includes("hsl"))
    e.values[2] *= 1 - r;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return Ze(e);
}
function U(e, r, t) {
  try {
    return er(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function rr(e, r) {
  if (e = ve(e), r = vr(r), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.includes("rgb"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return Ze(e);
}
function Y(e, r, t) {
  try {
    return rr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function bo(e, r = 0.15) {
  return pr(e) > 0.5 ? er(e, r) : rr(e, r);
}
function We(e, r, t) {
  try {
    return bo(e, r);
  } catch {
    return e;
  }
}
function yo(e = "") {
  function r(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${r(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${r(...o)})`;
}
const Lr = (e, r, t, n = []) => {
  let o = e;
  r.forEach((i, s) => {
    s === r.length - 1 ? Array.isArray(o) ? o[Number(i)] = t : o && typeof o == "object" && (o[i] = t) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, vo = (e, r, t) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([c, d]) => {
      (!t || t && !t([...i, c])) && d != null && (typeof d == "object" && Object.keys(d).length > 0 ? n(d, [...i, c], Array.isArray(d) ? [...s, c] : s) : r([...i, c], d, s));
    });
  }
  n(e);
}, So = (e, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function cr(e, r) {
  const {
    prefix: t,
    shouldSkipGeneratingVar: n
  } = r || {}, o = {}, i = {}, s = {};
  return vo(
    e,
    (c, d, f) => {
      if ((typeof d == "string" || typeof d == "number") && (!n || !n(c, d))) {
        const g = `--${t ? `${t}-` : ""}${c.join("-")}`, m = So(c, d);
        Object.assign(o, {
          [g]: m
        }), Lr(i, c, `var(${g})`, f), Lr(s, c, `var(${g}, ${m})`, f);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function ko(e, r = {}) {
  const {
    getSelector: t = O,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = r, {
    colorSchemes: s = {},
    components: c,
    defaultColorScheme: d = "light",
    ...f
  } = e, {
    vars: g,
    css: m,
    varsWithDefaults: h
  } = cr(f, r);
  let p = h;
  const b = {}, {
    [d]: l,
    ...w
  } = s;
  if (Object.entries(w || {}).forEach(([x, v]) => {
    const {
      vars: $,
      css: ee,
      varsWithDefaults: re
    } = cr(v, r);
    p = ie(p, re), b[x] = {
      css: ee,
      vars: $
    };
  }), l) {
    const {
      css: x,
      vars: v,
      varsWithDefaults: $
    } = cr(l, r);
    p = ie(p, $), b[d] = {
      css: x,
      vars: v
    };
  }
  function O(x, v) {
    var ee, re;
    let $ = o;
    if (o === "class" && ($ = ".%s"), o === "data" && ($ = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && ($ = `[${o}="%s"]`), x) {
      if ($ === "media")
        return e.defaultColorScheme === x ? ":root" : {
          [`@media (prefers-color-scheme: ${((re = (ee = s[x]) == null ? void 0 : ee.palette) == null ? void 0 : re.mode) || x})`]: {
            ":root": v
          }
        };
      if ($)
        return e.defaultColorScheme === x ? `:root, ${$.replace("%s", String(x))}` : $.replace("%s", String(x));
    }
    return ":root";
  }
  return {
    vars: p,
    generateThemeVars: () => {
      let x = {
        ...g
      };
      return Object.entries(b).forEach(([, {
        vars: v
      }]) => {
        x = ie(x, v);
      }), x;
    },
    generateStyleSheets: () => {
      var ce, ue;
      const x = [], v = e.defaultColorScheme || "light";
      function $(G, a) {
        Object.keys(a).length && x.push(typeof G == "string" ? {
          [G]: {
            ...a
          }
        } : G);
      }
      $(t(void 0, {
        ...m
      }), m);
      const {
        [v]: ee,
        ...re
      } = b;
      if (ee) {
        const {
          css: G
        } = ee, a = (ue = (ce = s[v]) == null ? void 0 : ce.palette) == null ? void 0 : ue.mode, S = !n && a ? {
          colorScheme: a,
          ...G
        } : {
          ...G
        };
        $(t(v, {
          ...S
        }), S);
      }
      return Object.entries(re).forEach(([G, {
        css: a
      }]) => {
        var A, N;
        const S = (N = (A = s[G]) == null ? void 0 : A.palette) == null ? void 0 : N.mode, C = !n && S ? {
          colorScheme: S,
          ...a
        } : {
          ...a
        };
        $(t(G, {
          ...C
        }), C);
      }), i && x.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), x;
    }
  };
}
function Co(e) {
  return function(t) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && t !== "light" && t !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`), `@media (prefers-color-scheme: ${t})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${t}"] &` : e === "class" ? `.${t} &` : e === "data" ? `[data-${t}] &` : `${e.replace("%s", t)} &` : "&";
  };
}
const Me = {
  black: "#000",
  white: "#fff"
}, wo = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Te = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, xe = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Re = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ee = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, $e = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Oe = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function mt() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Me.white,
      default: Me.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const gt = mt();
function bt() {
  return {
    text: {
      primary: Me.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Me.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const hr = bt();
function Vr(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = rr(e.main, o) : r === "dark" && (e.dark = er(e.main, i)));
}
function Ur(e, r, t, n, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  r[t] || (r.hasOwnProperty(n) ? r[t] = r[n] : t === "light" ? r.light = `color-mix(in ${e}, ${r.main}, #fff ${(i * 100).toFixed(0)}%)` : t === "dark" && (r.dark = `color-mix(in ${e}, ${r.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function To(e = "light") {
  return e === "dark" ? {
    main: Ee[200],
    light: Ee[50],
    dark: Ee[400]
  } : {
    main: Ee[700],
    light: Ee[400],
    dark: Ee[800]
  };
}
function xo(e = "light") {
  return e === "dark" ? {
    main: Te[200],
    light: Te[50],
    dark: Te[400]
  } : {
    main: Te[500],
    light: Te[300],
    dark: Te[700]
  };
}
function Eo(e = "light") {
  return e === "dark" ? {
    main: xe[500],
    light: xe[300],
    dark: xe[700]
  } : {
    main: xe[700],
    light: xe[400],
    dark: xe[800]
  };
}
function $o(e = "light") {
  return e === "dark" ? {
    main: $e[400],
    light: $e[300],
    dark: $e[700]
  } : {
    main: $e[700],
    light: $e[500],
    dark: $e[900]
  };
}
function Oo(e = "light") {
  return e === "dark" ? {
    main: Oe[400],
    light: Oe[300],
    dark: Oe[700]
  } : {
    main: Oe[800],
    light: Oe[500],
    dark: Oe[900]
  };
}
function _o(e = "light") {
  return e === "dark" ? {
    main: Re[400],
    light: Re[300],
    dark: Re[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Re[500],
    dark: Re[900]
  };
}
function Ao(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Sr(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || To(r), c = e.secondary || xo(r), d = e.error || Eo(r), f = e.info || $o(r), g = e.success || Oo(r), m = e.warning || _o(r);
  function h(w) {
    if (o)
      return Ao(w);
    const O = jr(w, hr.text.primary) >= t ? hr.text.primary : gt.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const B = jr(w, O);
      B < 3 && console.error([`MUI: The contrast ratio of ${B}:1 for ${O} on ${w}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return O;
  }
  const p = ({
    color: w,
    name: O,
    mainShade: B = 500,
    lightShade: D = 300,
    darkShade: x = 700
  }) => {
    if (w = {
      ...w
    }, !w.main && w[B] && (w.main = w[B]), !w.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${B}\` property.` : ye(11, O ? ` (${O})` : "", B));
    if (typeof w.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(w.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ye(12, O ? ` (${O})` : "", JSON.stringify(w.main)));
    return o ? (Ur(o, w, "light", D, n), Ur(o, w, "dark", x, n)) : (Vr(w, "light", D, n), Vr(w, "dark", x, n)), w.contrastText || (w.contrastText = h(w.main)), w;
  };
  let b;
  return r === "light" ? b = mt() : r === "dark" && (b = bt()), process.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), ie({
    // A collection of common colors.
    common: {
      ...Me
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: d,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: g,
      name: "success"
    }),
    // The grey colors.
    grey: wo,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...b
  }, i);
}
function Ro(e) {
  const r = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (r[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), r;
}
function Po(e, r) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...r
  };
}
function Io(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Yr = {
  textTransform: "uppercase"
}, Hr = '"Roboto", "Helvetica", "Arial", sans-serif';
function No(e, r) {
  const {
    fontFamily: t = Hr,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: g,
    ...m
  } = typeof r == "function" ? r(e) : r;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, p = g || ((w) => `${w / d * h}rem`), b = (w, O, B, D, x) => ({
    fontFamily: t,
    fontWeight: w,
    fontSize: p(O),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: B,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...t === Hr ? {
      letterSpacing: `${Io(D / O)}em`
    } : {},
    ...x,
    ...f
  }), l = {
    h1: b(o, 96, 1.167, -1.5),
    h2: b(o, 60, 1.2, -0.5),
    h3: b(i, 48, 1.167, 0),
    h4: b(i, 34, 1.235, 0.25),
    h5: b(i, 24, 1.334, 0),
    h6: b(s, 20, 1.6, 0.15),
    subtitle1: b(i, 16, 1.75, 0.15),
    subtitle2: b(s, 14, 1.57, 0.1),
    body1: b(i, 16, 1.5, 0.15),
    body2: b(i, 14, 1.43, 0.15),
    button: b(s, 14, 1.75, 0.4, Yr),
    caption: b(i, 12, 1.66, 0.4),
    overline: b(i, 12, 2.66, 1, Yr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ie({
    htmlFontSize: d,
    pxToRem: p,
    fontFamily: t,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: c,
    ...l
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Mo = 0.2, Bo = 0.14, Do = 0.12;
function K(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Mo})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Bo})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Do})`].join(",");
}
const Fo = ["none", K(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), K(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), K(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), K(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), K(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), K(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), K(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), K(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), K(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), K(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), K(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), K(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), K(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), K(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), K(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), K(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), K(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), K(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), K(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), K(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), K(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), K(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), K(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), K(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], zo = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Wo = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function qr(e) {
  return `${Math.round(e)}ms`;
}
function jo(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function Lo(e) {
  const r = {
    ...zo,
    ...e.easing
  }, t = {
    ...Wo,
    ...e.duration
  };
  return {
    getAutoHeightDuration: jo,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = t.standard,
        easing: c = r.easeInOut,
        delay: d = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const g = (h) => typeof h == "string", m = (h) => !Number.isNaN(parseFloat(h));
        !g(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !g(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), g(c) || console.error('MUI: Argument "easing" must be a string.'), !m(d) && !g(d) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((g) => `${g} ${typeof s == "string" ? s : qr(s)} ${c} ${typeof d == "string" ? d : qr(d)}`).join(",");
    },
    ...e,
    easing: r,
    duration: t
  };
}
const Vo = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Uo(e) {
  return be(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function yt(e = {}) {
  const r = {
    ...e
  };
  function t(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, c] = o[i];
      !Uo(c) || s.startsWith("unstable_") ? delete n[s] : be(c) && (n[s] = {
        ...c
      }, t(n[s]));
    }
  }
  return t(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Gr(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Yo = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const r = e.match(/\d*\.?\d+/g);
  if (!r)
    return 0;
  let t = 0;
  for (let n = 0; n < r.length; n += 1)
    t += +r[n];
  return t;
};
function Ho(e) {
  Object.assign(e, {
    alpha(r, t) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${r} l c h / ${typeof t == "string" ? `calc(${t})` : t})` : n.vars ? `rgba(${r.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof t == "string" ? `calc(${t})` : t})` : ht(r, Yo(t));
    },
    lighten(r, t) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${r}, #fff ${Gr(t)})` : rr(r, t);
    },
    darken(r, t) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${r}, #000 ${Gr(t)})` : er(r, t);
    }
  });
}
function mr(e = {}, ...r) {
  const {
    breakpoints: t,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: c = {},
    shape: d,
    colorSpace: f,
    ...g
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : ye(20));
  const m = Sr({
    ...i,
    colorSpace: f
  }), h = lo(e);
  let p = ie(h, {
    mixins: Po(h.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Fo.slice(),
    typography: No(m, c),
    transitions: Lo(s),
    zIndex: {
      ...Vo
    }
  });
  if (p = ie(p, g), p = r.reduce((b, l) => ie(b, l), p), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], l = (w, O) => {
      let B;
      for (B in w) {
        const D = w[B];
        if (b.includes(B) && Object.keys(D).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const x = po("", B);
            console.error([`MUI: The \`${O}\` component increases the CSS specificity of the \`${B}\` internal state.`, "You can not override it like this: ", JSON.stringify(w, null, 2), "", `Instead, you need to use the '&.${x}' syntax:`, JSON.stringify({
              root: {
                [`&.${x}`]: D
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          w[B] = {};
        }
      }
    };
    Object.keys(p.components).forEach((w) => {
      const O = p.components[w].styleOverrides;
      O && w.startsWith("Mui") && l(O, w);
    });
  }
  return p.unstable_sxConfig = {
    ...Xe,
    ...g == null ? void 0 : g.unstable_sxConfig
  }, p.unstable_sx = function(l) {
    return Je({
      sx: l,
      theme: this
    });
  }, p.toRuntimeSource = yt, Ho(p), p;
}
function qo(e) {
  let r;
  return e < 1 ? r = 5.11916 * e ** 2 : r = 4.5 * Math.log(e + 1) + 2, Math.round(r * 10) / 1e3;
}
const Go = [...Array(25)].map((e, r) => {
  if (r === 0)
    return "none";
  const t = qo(r);
  return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
});
function vt(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function St(e) {
  return e === "dark" ? Go : [];
}
function Ko(e) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: t,
    overlays: n,
    colorSpace: o,
    ...i
  } = e, s = Sr({
    ...r,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...vt(s.mode),
      ...t
    },
    overlays: n || St(s.mode),
    ...i
  };
}
function Qo(e) {
  var r;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((r = e[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Xo = (e) => [...[...Array(25)].map((r, t) => `--${e ? `${e}-` : ""}overlays-${t}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Jo = (e) => (r, t) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === r) {
    if (r === "dark") {
      const s = {};
      return Xo(e.cssVarPrefix).forEach((c) => {
        s[c] = t[c], delete t[c];
      }), i === "media" ? {
        [n]: t,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : i ? {
        [i.replace("%s", r)]: s,
        [`${n}, ${i.replace("%s", r)}`]: t
      } : {
        [n]: {
          ...t,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(r))}`;
  } else if (r) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          [n]: t
        }
      };
    if (i)
      return i.replace("%s", String(r));
  }
  return n;
};
function Zo(e, r) {
  r.forEach((t) => {
    e[t] || (e[t] = {});
  });
}
function u(e, r, t) {
  !e[r] && t && (e[r] = t);
}
function Ie(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : pt(e);
}
function he(e, r) {
  `${r}Channel` in e || (e[`${r}Channel`] = Pe(Ie(e[r]), `MUI: Can't create \`palette.${r}Channel\` because \`palette.${r}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${r}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function ea(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const pe = (e) => {
  try {
    return e();
  } catch {
  }
}, ra = (e = "mui") => yo(e);
function ur(e, r, t, n, o) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    r[o] = Ko({
      ...t,
      palette: {
        mode: i,
        ...t == null ? void 0 : t.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: s,
    ...c
  } = mr({
    ...n,
    palette: {
      mode: i,
      ...t == null ? void 0 : t.palette
    },
    colorSpace: e
  });
  return r[o] = {
    ...t,
    palette: s,
    opacity: {
      ...vt(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || St(i)
  }, c;
}
function ta(e = {}, ...r) {
  const {
    colorSchemes: t = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: c = Qo,
    colorSchemeSelector: d = t.light && t.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...g
  } = e, m = Object.keys(t)[0], h = n || (t.light && m !== "light" ? "light" : m), p = ra(i), {
    [h]: b,
    light: l,
    dark: w,
    ...O
  } = t, B = {
    ...O
  };
  let D = b;
  if ((h === "dark" && !("dark" in t) || h === "light" && !("light" in t)) && (D = !0), !D)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : ye(21, h));
  let x;
  s && (x = "oklch");
  const v = ur(x, B, D, g, h);
  l && !B.light && ur(x, B, l, void 0, "light"), w && !B.dark && ur(x, B, w, void 0, "dark");
  let $ = {
    defaultColorScheme: h,
    ...v,
    cssVarPrefix: i,
    colorSchemeSelector: d,
    rootSelector: f,
    getCssVar: p,
    colorSchemes: B,
    font: {
      ...Ro(v.typography),
      ...v.font
    },
    spacing: ea(g.spacing)
  };
  Object.keys($.colorSchemes).forEach((G) => {
    const a = $.colorSchemes[G].palette, S = (A) => {
      const N = A.split("-"), Z = N[1], oe = N[2];
      return p(A, a[Z][oe]);
    };
    a.mode === "light" && (u(a.common, "background", "#fff"), u(a.common, "onBackground", "#000")), a.mode === "dark" && (u(a.common, "background", "#000"), u(a.common, "onBackground", "#fff"));
    function C(A, N, Z) {
      if (x) {
        let oe;
        return A === ke && (oe = `transparent ${((1 - Z) * 100).toFixed(0)}%`), A === U && (oe = `#000 ${(Z * 100).toFixed(0)}%`), A === Y && (oe = `#fff ${(Z * 100).toFixed(0)}%`), `color-mix(in ${x}, ${N}, ${oe})`;
      }
      return A(N, Z);
    }
    if (Zo(a, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), a.mode === "light") {
      u(a.Alert, "errorColor", C(U, a.error.light, 0.6)), u(a.Alert, "infoColor", C(U, a.info.light, 0.6)), u(a.Alert, "successColor", C(U, a.success.light, 0.6)), u(a.Alert, "warningColor", C(U, a.warning.light, 0.6)), u(a.Alert, "errorFilledBg", S("palette-error-main")), u(a.Alert, "infoFilledBg", S("palette-info-main")), u(a.Alert, "successFilledBg", S("palette-success-main")), u(a.Alert, "warningFilledBg", S("palette-warning-main")), u(a.Alert, "errorFilledColor", pe(() => a.getContrastText(a.error.main))), u(a.Alert, "infoFilledColor", pe(() => a.getContrastText(a.info.main))), u(a.Alert, "successFilledColor", pe(() => a.getContrastText(a.success.main))), u(a.Alert, "warningFilledColor", pe(() => a.getContrastText(a.warning.main))), u(a.Alert, "errorStandardBg", C(Y, a.error.light, 0.9)), u(a.Alert, "infoStandardBg", C(Y, a.info.light, 0.9)), u(a.Alert, "successStandardBg", C(Y, a.success.light, 0.9)), u(a.Alert, "warningStandardBg", C(Y, a.warning.light, 0.9)), u(a.Alert, "errorIconColor", S("palette-error-main")), u(a.Alert, "infoIconColor", S("palette-info-main")), u(a.Alert, "successIconColor", S("palette-success-main")), u(a.Alert, "warningIconColor", S("palette-warning-main")), u(a.AppBar, "defaultBg", S("palette-grey-100")), u(a.Avatar, "defaultBg", S("palette-grey-400")), u(a.Button, "inheritContainedBg", S("palette-grey-300")), u(a.Button, "inheritContainedHoverBg", S("palette-grey-A100")), u(a.Chip, "defaultBorder", S("palette-grey-400")), u(a.Chip, "defaultAvatarColor", S("palette-grey-700")), u(a.Chip, "defaultIconColor", S("palette-grey-700")), u(a.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), u(a.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), u(a.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), u(a.LinearProgress, "primaryBg", C(Y, a.primary.main, 0.62)), u(a.LinearProgress, "secondaryBg", C(Y, a.secondary.main, 0.62)), u(a.LinearProgress, "errorBg", C(Y, a.error.main, 0.62)), u(a.LinearProgress, "infoBg", C(Y, a.info.main, 0.62)), u(a.LinearProgress, "successBg", C(Y, a.success.main, 0.62)), u(a.LinearProgress, "warningBg", C(Y, a.warning.main, 0.62)), u(a.Skeleton, "bg", x ? C(ke, a.text.primary, 0.11) : `rgba(${S("palette-text-primaryChannel")} / 0.11)`), u(a.Slider, "primaryTrack", C(Y, a.primary.main, 0.62)), u(a.Slider, "secondaryTrack", C(Y, a.secondary.main, 0.62)), u(a.Slider, "errorTrack", C(Y, a.error.main, 0.62)), u(a.Slider, "infoTrack", C(Y, a.info.main, 0.62)), u(a.Slider, "successTrack", C(Y, a.success.main, 0.62)), u(a.Slider, "warningTrack", C(Y, a.warning.main, 0.62));
      const A = x ? C(U, a.background.default, 0.6825) : We(a.background.default, 0.8);
      u(a.SnackbarContent, "bg", A), u(a.SnackbarContent, "color", pe(() => x ? hr.text.primary : a.getContrastText(A))), u(a.SpeedDialAction, "fabHoverBg", We(a.background.paper, 0.15)), u(a.StepConnector, "border", S("palette-grey-400")), u(a.StepContent, "border", S("palette-grey-400")), u(a.Switch, "defaultColor", S("palette-common-white")), u(a.Switch, "defaultDisabledColor", S("palette-grey-100")), u(a.Switch, "primaryDisabledColor", C(Y, a.primary.main, 0.62)), u(a.Switch, "secondaryDisabledColor", C(Y, a.secondary.main, 0.62)), u(a.Switch, "errorDisabledColor", C(Y, a.error.main, 0.62)), u(a.Switch, "infoDisabledColor", C(Y, a.info.main, 0.62)), u(a.Switch, "successDisabledColor", C(Y, a.success.main, 0.62)), u(a.Switch, "warningDisabledColor", C(Y, a.warning.main, 0.62)), u(a.TableCell, "border", C(Y, C(ke, a.divider, 1), 0.88)), u(a.Tooltip, "bg", C(ke, a.grey[700], 0.92));
    }
    if (a.mode === "dark") {
      u(a.Alert, "errorColor", C(Y, a.error.light, 0.6)), u(a.Alert, "infoColor", C(Y, a.info.light, 0.6)), u(a.Alert, "successColor", C(Y, a.success.light, 0.6)), u(a.Alert, "warningColor", C(Y, a.warning.light, 0.6)), u(a.Alert, "errorFilledBg", S("palette-error-dark")), u(a.Alert, "infoFilledBg", S("palette-info-dark")), u(a.Alert, "successFilledBg", S("palette-success-dark")), u(a.Alert, "warningFilledBg", S("palette-warning-dark")), u(a.Alert, "errorFilledColor", pe(() => a.getContrastText(a.error.dark))), u(a.Alert, "infoFilledColor", pe(() => a.getContrastText(a.info.dark))), u(a.Alert, "successFilledColor", pe(() => a.getContrastText(a.success.dark))), u(a.Alert, "warningFilledColor", pe(() => a.getContrastText(a.warning.dark))), u(a.Alert, "errorStandardBg", C(U, a.error.light, 0.9)), u(a.Alert, "infoStandardBg", C(U, a.info.light, 0.9)), u(a.Alert, "successStandardBg", C(U, a.success.light, 0.9)), u(a.Alert, "warningStandardBg", C(U, a.warning.light, 0.9)), u(a.Alert, "errorIconColor", S("palette-error-main")), u(a.Alert, "infoIconColor", S("palette-info-main")), u(a.Alert, "successIconColor", S("palette-success-main")), u(a.Alert, "warningIconColor", S("palette-warning-main")), u(a.AppBar, "defaultBg", S("palette-grey-900")), u(a.AppBar, "darkBg", S("palette-background-paper")), u(a.AppBar, "darkColor", S("palette-text-primary")), u(a.Avatar, "defaultBg", S("palette-grey-600")), u(a.Button, "inheritContainedBg", S("palette-grey-800")), u(a.Button, "inheritContainedHoverBg", S("palette-grey-700")), u(a.Chip, "defaultBorder", S("palette-grey-700")), u(a.Chip, "defaultAvatarColor", S("palette-grey-300")), u(a.Chip, "defaultIconColor", S("palette-grey-300")), u(a.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), u(a.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), u(a.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), u(a.LinearProgress, "primaryBg", C(U, a.primary.main, 0.5)), u(a.LinearProgress, "secondaryBg", C(U, a.secondary.main, 0.5)), u(a.LinearProgress, "errorBg", C(U, a.error.main, 0.5)), u(a.LinearProgress, "infoBg", C(U, a.info.main, 0.5)), u(a.LinearProgress, "successBg", C(U, a.success.main, 0.5)), u(a.LinearProgress, "warningBg", C(U, a.warning.main, 0.5)), u(a.Skeleton, "bg", x ? C(ke, a.text.primary, 0.13) : `rgba(${S("palette-text-primaryChannel")} / 0.13)`), u(a.Slider, "primaryTrack", C(U, a.primary.main, 0.5)), u(a.Slider, "secondaryTrack", C(U, a.secondary.main, 0.5)), u(a.Slider, "errorTrack", C(U, a.error.main, 0.5)), u(a.Slider, "infoTrack", C(U, a.info.main, 0.5)), u(a.Slider, "successTrack", C(U, a.success.main, 0.5)), u(a.Slider, "warningTrack", C(U, a.warning.main, 0.5));
      const A = x ? C(Y, a.background.default, 0.985) : We(a.background.default, 0.98);
      u(a.SnackbarContent, "bg", A), u(a.SnackbarContent, "color", pe(() => x ? gt.text.primary : a.getContrastText(A))), u(a.SpeedDialAction, "fabHoverBg", We(a.background.paper, 0.15)), u(a.StepConnector, "border", S("palette-grey-600")), u(a.StepContent, "border", S("palette-grey-600")), u(a.Switch, "defaultColor", S("palette-grey-300")), u(a.Switch, "defaultDisabledColor", S("palette-grey-600")), u(a.Switch, "primaryDisabledColor", C(U, a.primary.main, 0.55)), u(a.Switch, "secondaryDisabledColor", C(U, a.secondary.main, 0.55)), u(a.Switch, "errorDisabledColor", C(U, a.error.main, 0.55)), u(a.Switch, "infoDisabledColor", C(U, a.info.main, 0.55)), u(a.Switch, "successDisabledColor", C(U, a.success.main, 0.55)), u(a.Switch, "warningDisabledColor", C(U, a.warning.main, 0.55)), u(a.TableCell, "border", C(U, C(ke, a.divider, 1), 0.68)), u(a.Tooltip, "bg", C(ke, a.grey[700], 0.92));
    }
    he(a.background, "default"), he(a.background, "paper"), he(a.common, "background"), he(a.common, "onBackground"), he(a, "divider"), Object.keys(a).forEach((A) => {
      const N = a[A];
      A !== "tonalOffset" && N && typeof N == "object" && (N.main && u(a[A], "mainChannel", Pe(Ie(N.main))), N.light && u(a[A], "lightChannel", Pe(Ie(N.light))), N.dark && u(a[A], "darkChannel", Pe(Ie(N.dark))), N.contrastText && u(a[A], "contrastTextChannel", Pe(Ie(N.contrastText))), A === "text" && (he(a[A], "primary"), he(a[A], "secondary")), A === "action" && (N.active && he(a[A], "active"), N.selected && he(a[A], "selected")));
    });
  }), $ = r.reduce((G, a) => ie(G, a), $);
  const ee = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: c,
    getSelector: Jo($),
    enableContrastVars: s
  }, {
    vars: re,
    generateThemeVars: ce,
    generateStyleSheets: ue
  } = ko($, ee);
  return $.vars = re, Object.entries($.colorSchemes[$.defaultColorScheme]).forEach(([G, a]) => {
    $[G] = a;
  }), $.generateThemeVars = ce, $.generateStyleSheets = ue, $.generateSpacing = function() {
    return ft(g.spacing, br(this));
  }, $.getColorSchemeSelector = Co(d), $.spacing = $.generateSpacing(), $.shouldSkipGeneratingVar = c, $.unstable_sxConfig = {
    ...Xe,
    ...g == null ? void 0 : g.unstable_sxConfig
  }, $.unstable_sx = function(a) {
    return Je({
      sx: a,
      theme: this
    });
  }, $.toRuntimeSource = yt, $;
}
function Kr(e, r, t) {
  e.colorSchemes && t && (e.colorSchemes[r] = {
    ...t !== !0 && t,
    palette: Sr({
      ...t === !0 ? {} : t.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function Ce(e = {}, ...r) {
  const {
    palette: t,
    cssVariables: n = !1,
    colorSchemes: o = t ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = t == null ? void 0 : t.mode,
    ...s
  } = e, c = i || "light", d = o == null ? void 0 : o[c], f = {
    ...o,
    ...t ? {
      [c]: {
        ...typeof d != "boolean" && d,
        palette: t
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return mr(e, ...r);
    let g = t;
    "palette" in e || f[c] && (f[c] !== !0 ? g = f[c].palette : c === "dark" && (g = {
      mode: "dark"
    }));
    const m = mr({
      ...e,
      palette: g
    }, ...r);
    return m.defaultColorScheme = c, m.colorSchemes = f, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: m.palette
    }, Kr(m, "dark", f.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: m.palette
    }, Kr(m, "light", f.light)), m;
  }
  return !t && !("light" in f) && c === "light" && (f.light = !0), ta({
    ...s,
    colorSchemes: f,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...r);
}
const kt = {
  minimal: {
    name: "Minimal",
    description: "Clean and simple design with minimal styling",
    variant: "minimal",
    sidebarWidth: 260,
    sidebarPosition: "left",
    showSearch: !1,
    showBreadcrumbs: !1,
    contentMaxWidth: 900,
    sidebarStyle: "flat",
    contentStyle: "flat",
    theme: Ce({
      palette: {
        mode: "light"
      }
    })
  },
  modern: {
    name: "Modern",
    description: "Contemporary design with subtle shadows and rounded corners",
    variant: "modern",
    sidebarWidth: 300,
    sidebarPosition: "left",
    showSearch: !0,
    showBreadcrumbs: !0,
    contentMaxWidth: 1e3,
    sidebarStyle: "elevated",
    contentStyle: "elevated",
    theme: Ce({
      palette: {
        mode: "light",
        primary: {
          main: "#1976d2"
        }
      },
      shape: {
        borderRadius: 12
      }
    })
  },
  classic: {
    name: "Classic",
    description: "Traditional documentation style with clear hierarchy",
    variant: "classic",
    sidebarWidth: 280,
    sidebarPosition: "left",
    showSearch: !0,
    showBreadcrumbs: !0,
    contentMaxWidth: 800,
    sidebarStyle: "outlined",
    contentStyle: "outlined",
    theme: Ce({
      palette: {
        mode: "light",
        primary: {
          main: "#1565c0"
        }
      },
      typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
      }
    })
  },
  dark: {
    name: "Dark",
    description: "Dark theme optimized for low-light environments",
    variant: "dark",
    sidebarWidth: 300,
    sidebarPosition: "left",
    showSearch: !0,
    showBreadcrumbs: !0,
    contentMaxWidth: 1e3,
    sidebarStyle: "elevated",
    contentStyle: "elevated",
    theme: Ce({
      palette: {
        mode: "dark",
        primary: {
          main: "#90caf9"
        },
        background: {
          default: "#121212",
          paper: "#1e1e1e"
        }
      }
    })
  },
  compact: {
    name: "Compact",
    description: "Space-efficient layout for dense documentation",
    variant: "compact",
    sidebarWidth: 240,
    sidebarPosition: "left",
    showSearch: !0,
    showBreadcrumbs: !1,
    contentMaxWidth: 1100,
    sidebarStyle: "flat",
    contentStyle: "flat",
    theme: Ce({
      palette: {
        mode: "light"
      },
      spacing: 2
    })
  },
  wide: {
    name: "Wide",
    description: "Maximum width layout for large screens",
    variant: "wide",
    sidebarWidth: 320,
    sidebarPosition: "left",
    showSearch: !0,
    showBreadcrumbs: !0,
    contentMaxWidth: "full",
    sidebarStyle: "elevated",
    contentStyle: "flat",
    theme: Ce({
      palette: {
        mode: "light",
        primary: {
          main: "#1976d2"
        }
      }
    })
  },
  centered: {
    name: "Centered",
    description: "Centered content with generous margins",
    variant: "centered",
    sidebarWidth: 280,
    sidebarPosition: "left",
    showSearch: !1,
    showBreadcrumbs: !0,
    contentMaxWidth: 700,
    sidebarStyle: "outlined",
    contentStyle: "elevated",
    theme: Ce({
      palette: {
        mode: "light",
        primary: {
          main: "#1976d2"
        }
      }
    })
  }
};
function na(e) {
  return kt[e];
}
function ya() {
  return Object.values(kt);
}
function Ct(e, r) {
  if (!r.trim())
    return e;
  const t = r.toLowerCase(), n = [];
  for (const o of e) {
    const i = o.name.toLowerCase().includes(t), s = o.children ? Ct(o.children, r) : [];
    (i || s.length > 0) && n.push({
      ...o,
      children: s.length > 0 ? s : o.children
    });
  }
  return n;
}
function oa({ tree: e, onFilterChange: r }) {
  const [t, n] = me("");
  return /* @__PURE__ */ k(de, { sx: { mb: 2 }, children: /* @__PURE__ */ k(
    Ot,
    {
      fullWidth: !0,
      size: "small",
      placeholder: "Search documentation...",
      value: t,
      onChange: (i) => {
        const s = i.target.value;
        n(s);
        const c = Ct(e, s);
        r(c);
      },
      InputProps: {
        startAdornment: /* @__PURE__ */ k(_t, { position: "start", children: /* @__PURE__ */ k(Yt, { fontSize: "small" }) })
      }
    }
  ) });
}
function wt(e, r, t = []) {
  for (const n of e) {
    const o = [...t, n];
    if (n.path === r)
      return o;
    if (n.children) {
      const i = wt(n.children, r, o);
      if (i)
        return i;
    }
  }
  return null;
}
function aa({ tree: e, currentPath: r, onPathClick: t }) {
  const n = wt(e, r) || [];
  return n.length === 0 ? null : /* @__PURE__ */ k(de, { sx: { mb: 2 }, children: /* @__PURE__ */ k(
    At,
    {
      separator: /* @__PURE__ */ k(Ht, { fontSize: "small" }),
      "aria-label": "breadcrumb",
      children: n.map((o, i) => i === n.length - 1 ? /* @__PURE__ */ k(Jr, { color: "text.primary", variant: "body2", children: o.name }, o.path) : /* @__PURE__ */ k(
        Rt,
        {
          component: "button",
          variant: "body2",
          onClick: () => t == null ? void 0 : t(o.path),
          sx: {
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline"
            }
          },
          children: o.name
        },
        o.path
      ))
    }
  ) });
}
function Tt({ node: e, currentPath: r, level: t = 0, onDocClick: n }) {
  const [o, i] = me(t < 2), s = r === e.path, c = e.children && e.children.length > 0;
  return /* @__PURE__ */ te(Qr, { children: [
    /* @__PURE__ */ k(jt, { disablePadding: !0, children: /* @__PURE__ */ k(
      Lt,
      {
        onClick: (f) => {
          if (e.isFile) {
            f.preventDefault(), f.stopPropagation(), n && n(e.path);
            return;
          }
          if (c) {
            f.preventDefault(), f.stopPropagation(), i(!o);
            return;
          }
          n && !e.isFile && !c && (f.preventDefault(), f.stopPropagation(), n(e.path));
        },
        selected: s,
        component: "div",
        sx: {
          pl: t * 2 + 2,
          py: 0.5,
          cursor: "pointer"
        },
        children: /* @__PURE__ */ te(de, { sx: { display: "flex", alignItems: "center", gap: 1, width: "100%" }, children: [
          c ? o ? /* @__PURE__ */ k(Kt, { fontSize: "small" }) : /* @__PURE__ */ k(Qt, { fontSize: "small" }) : /* @__PURE__ */ k(Xt, { fontSize: "small" }),
          /* @__PURE__ */ k(
            Vt,
            {
              primary: e.name,
              primaryTypographyProps: {
                fontSize: "0.875rem"
              }
            }
          ),
          c && (o ? /* @__PURE__ */ k(Jt, { fontSize: "small" }) : /* @__PURE__ */ k(Zt, { fontSize: "small" }))
        ] })
      }
    ) }),
    c && /* @__PURE__ */ k(Ut, { in: o, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ k(et, { component: "div", disablePadding: !0, children: e.children.map((f) => /* @__PURE__ */ k(
      Tt,
      {
        node: f,
        currentPath: r,
        level: t + 1,
        onDocClick: n
      },
      f.path
    )) }) })
  ] });
}
function ia({
  children: e,
  className: r,
  ...t
}) {
  const n = Zr(), [o, i] = me(!1), s = /language-(\w+)/.exec(r || ""), c = s ? s[1] : "text", d = String(e).replace(/\n$/, ""), f = async () => {
    try {
      await navigator.clipboard.writeText(d), i(!0), setTimeout(() => i(!1), 2e3);
    } catch (h) {
      console.error("Failed to copy code:", h);
    }
  }, m = n.palette.mode === "dark" ? at : ot;
  return /* @__PURE__ */ te(
    de,
    {
      sx: {
        position: "relative",
        mb: 2,
        borderRadius: 1,
        overflow: "hidden",
        border: 1
      },
      children: [
        /* @__PURE__ */ te(
          de,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 1.5,
              py: 0.5,
              borderBottom: 1,
              bgcolor: "action.hover"
            },
            children: [
              /* @__PURE__ */ k(
                Ft,
                {
                  label: c,
                  size: "small",
                  sx: {
                    height: 20,
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                    textTransform: "uppercase"
                  }
                }
              ),
              /* @__PURE__ */ k(zt, { title: o ? "Copied!" : "Copy code", children: /* @__PURE__ */ k(
                Wt,
                {
                  size: "small",
                  onClick: f,
                  sx: {
                    width: 28,
                    height: 28
                  },
                  children: o ? /* @__PURE__ */ k(qt, { sx: { fontSize: 16, color: "success.main" } }) : /* @__PURE__ */ k(Gt, { sx: { fontSize: 16 } })
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ k(
          nt,
          {
            language: c,
            style: m,
            PreTag: "div",
            customStyle: {
              margin: 0,
              padding: n.spacing(2),
              backgroundColor: "transparent",
              fontSize: "0.875rem"
            },
            ...t,
            children: d
          }
        )
      ]
    }
  );
}
function va({
  tree: e,
  content: r,
  currentPath: t = "",
  onDocClick: n,
  sidebarTitle: o = "Documentation",
  sidebarWidth: i,
  theme: s,
  template: c,
  enableSearch: d,
  enableBreadcrumbs: f,
  header: g,
  footer: m,
  sx: h,
  onLinkClick: p
}) {
  const b = Zr(), l = we(() => c ? typeof c == "string" ? na(c) || null : c : null, [c]), w = we(() => l != null && l.theme ? l.theme === "default" ? Cr() : l.theme : s === "default" ? Cr() : s || b, [s, b, l]), O = i ?? (l == null ? void 0 : l.sidebarWidth) ?? 280, B = d ?? (l == null ? void 0 : l.showSearch) ?? !1, D = f ?? (l == null ? void 0 : l.showBreadcrumbs) ?? !1, x = (l == null ? void 0 : l.sidebarStyle) ?? "flat", v = (l == null ? void 0 : l.contentStyle) ?? "flat", $ = (l == null ? void 0 : l.contentMaxWidth) ?? 900, [ee, re] = me(e);
  we(() => {
    re(e);
  }, [e]);
  const ce = we(() => ({
    code({ node: S, className: C, children: A, ...N }) {
      return !C || !C.includes("language-") ? /* @__PURE__ */ k(
        de,
        {
          component: "code",
          sx: {
            px: 0.5,
            py: 0.25,
            borderRadius: 0.5,
            fontFamily: "monospace",
            fontSize: "0.875em",
            bgcolor: "action.selected"
          },
          children: A
        }
      ) : /* @__PURE__ */ k(ia, { className: C, ...N, children: A });
    },
    a({ href: S, children: C, ...A }) {
      return /* @__PURE__ */ k(
        de,
        {
          component: "a",
          href: S,
          onClick: (Z) => {
            if (S && (S.startsWith("#") || !S.startsWith("http")) && (Z.preventDefault(), n)) {
              const oe = S.startsWith("#") ? S.slice(1) : S;
              n(oe);
            }
            p && S && p(S, Z);
          },
          sx: {
            color: "primary.main",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline"
            }
          },
          ...A,
          children: C
        }
      );
    },
    table({ children: S }) {
      return /* @__PURE__ */ k(Mt, { sx: { mb: 2, overflowX: "auto" }, children: /* @__PURE__ */ k(Bt, { size: "small", sx: { minWidth: 650 }, children: S }) });
    },
    thead({ children: S }) {
      return /* @__PURE__ */ k(Nt, { children: S });
    },
    tbody({ children: S }) {
      return /* @__PURE__ */ k(It, { children: S });
    },
    tr({ children: S }) {
      return /* @__PURE__ */ k(Pt, { children: S });
    },
    th({ children: S }) {
      return /* @__PURE__ */ k(wr, { component: "th", sx: { fontWeight: 600 }, children: S });
    },
    td({ children: S }) {
      return /* @__PURE__ */ k(wr, { children: S });
    }
  }), [n, p]), ue = (S) => S === "elevated" ? 2 : 0, G = (S) => S === "outlined" ? 1 : 0, a = /* @__PURE__ */ te(
    de,
    {
      sx: [
        {
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: `${O}px 1fr` },
          minHeight: "100vh"
        },
        ...Array.isArray(h) ? h : [h]
      ],
      children: [
        /* @__PURE__ */ te(
          Tr,
          {
            elevation: ue(x),
            sx: {
              p: 2,
              borderRadius: x === "elevated" ? 1 : 0,
              borderRight: G(x),
              overflow: "auto",
              maxHeight: "100vh",
              position: "sticky",
              top: 0
            },
            children: [
              /* @__PURE__ */ k(Jr, { variant: "h6", gutterBottom: !0, children: o }),
              B && /* @__PURE__ */ k(oa, { tree: e, onFilterChange: re }),
              /* @__PURE__ */ k(et, { dense: !0, children: ee.map((S) => /* @__PURE__ */ k(
                Tt,
                {
                  node: S,
                  currentPath: t,
                  onDocClick: n
                },
                S.path
              )) })
            ]
          }
        ),
        /* @__PURE__ */ te(
          de,
          {
            sx: {
              p: 4,
              maxWidth: $ === "full" ? "100%" : $,
              mx: $ === "full" ? 0 : "auto",
              width: "100%"
            },
            children: [
              g && /* @__PURE__ */ k(de, { sx: { mb: 2 }, children: g }),
              D && /* @__PURE__ */ k(
                aa,
                {
                  tree: e,
                  currentPath: t,
                  onPathClick: n
                }
              ),
              /* @__PURE__ */ k(
                Tr,
                {
                  elevation: ue(v),
                  sx: {
                    p: 4,
                    border: G(v),
                    borderRadius: v === "elevated" ? 1 : 0,
                    "& h1": {
                      mb: 2,
                      borderBottom: 1,
                      pb: 2
                    },
                    "& h2": {
                      mt: 4,
                      mb: 2
                    },
                    "& h3": {
                      mt: 3,
                      mb: 1.5
                    },
                    "& ul, & ol": {
                      pl: 3,
                      mb: 2
                    },
                    "& li": {
                      mb: 0.5
                    },
                    "& p": {
                      mb: 2,
                      lineHeight: 1.7
                    },
                    "& blockquote": {
                      borderLeft: 3,
                      pl: 2,
                      ml: 0,
                      fontStyle: "italic"
                    }
                  },
                  children: /* @__PURE__ */ k(
                    rt,
                    {
                      remarkPlugins: [tt],
                      components: ce,
                      children: r
                    }
                  )
                }
              ),
              m && /* @__PURE__ */ k(de, { sx: { mt: 2 }, children: m })
            ]
          }
        )
      ]
    }
  );
  return s ? /* @__PURE__ */ k(Dt, { theme: w, children: a }) : a;
}
function xt(e, r) {
  if (!r.trim())
    return e;
  const t = r.toLowerCase(), n = [];
  for (const o of e) {
    const i = o.name.toLowerCase().includes(t), s = o.children ? xt(o.children, r) : [];
    (i || s.length > 0) && n.push({
      ...o,
      children: s.length > 0 ? s : o.children
    });
  }
  return n;
}
function sa({ tree: e, onFilterChange: r }) {
  const [t, n] = me("");
  return /* @__PURE__ */ k("div", { className: "mdh-search", children: /* @__PURE__ */ k(
    "input",
    {
      type: "text",
      className: "mdh-search-input",
      placeholder: "Search documentation...",
      value: t,
      onChange: (i) => {
        const s = i.target.value;
        n(s);
        const c = xt(e, s);
        r(c);
      }
    }
  ) });
}
function Et(e, r, t = []) {
  for (const n of e) {
    const o = [...t, n];
    if (n.path === r)
      return o;
    if (n.children) {
      const i = Et(n.children, r, o);
      if (i)
        return i;
    }
  }
  return null;
}
function la({ tree: e, currentPath: r, onPathClick: t }) {
  const n = Et(e, r) || [];
  return n.length === 0 ? null : /* @__PURE__ */ k("nav", { className: "mdh-breadcrumbs", "aria-label": "breadcrumb", children: n.map((o, i) => i === n.length - 1 ? /* @__PURE__ */ k("span", { className: "mdh-breadcrumb-current", children: o.name }, o.path) : /* @__PURE__ */ te("span", { className: "mdh-breadcrumb-item", children: [
    /* @__PURE__ */ k(
      "button",
      {
        className: "mdh-breadcrumb-link",
        onClick: () => t == null ? void 0 : t(o.path),
        children: o.name
      }
    ),
    /* @__PURE__ */ k("span", { className: "mdh-breadcrumb-separator", children: "/" })
  ] }, o.path)) });
}
function $t({ node: e, currentPath: r, level: t = 0, onDocClick: n }) {
  const [o, i] = me(t < 2), s = r === e.path, c = e.children && e.children.length > 0;
  return /* @__PURE__ */ te(Qr, { children: [
    /* @__PURE__ */ k("li", { className: "mdh-tree-item", children: /* @__PURE__ */ te(
      "button",
      {
        className: `mdh-tree-button ${s ? "mdh-selected" : ""}`,
        onClick: (f) => {
          e.isFile ? n && n(e.path) : c ? (f.stopPropagation(), i(!o)) : !e.isFile && n && n(e.path);
        },
        style: { paddingLeft: `${t * 16 + 16}px` },
        children: [
          /* @__PURE__ */ k("span", { className: "mdh-tree-icon", children: c ? o ? "📂" : "📁" : "📄" }),
          /* @__PURE__ */ k("span", { className: "mdh-tree-text", children: e.name }),
          c && /* @__PURE__ */ k("span", { className: "mdh-tree-arrow", children: o ? "▼" : "▶" })
        ]
      }
    ) }),
    c && /* @__PURE__ */ k("ul", { className: `mdh-tree-children ${o ? "mdh-open" : "mdh-closed"}`, children: e.children.map((f) => /* @__PURE__ */ k(
      $t,
      {
        node: f,
        currentPath: r,
        level: t + 1,
        onDocClick: n
      },
      f.path
    )) })
  ] });
}
function ca({
  children: e,
  className: r,
  ...t
}) {
  const [n, o] = me(!1), [i, s] = me(!1), c = /language-(\w+)/.exec(r || ""), d = c ? c[1] : "text", f = String(e).replace(/\n$/, "");
  we(() => {
    if (typeof window < "u") {
      const h = window.matchMedia("(prefers-color-scheme: dark)");
      s(h.matches);
      const p = (b) => s(b.matches);
      return h.addEventListener("change", p), () => h.removeEventListener("change", p);
    }
  }, []);
  const g = async () => {
    try {
      await navigator.clipboard.writeText(f), o(!0), setTimeout(() => o(!1), 2e3);
    } catch (h) {
      console.error("Failed to copy code:", h);
    }
  }, m = i ? at : ot;
  return /* @__PURE__ */ te("div", { className: "mdh-code-block", children: [
    /* @__PURE__ */ te("div", { className: "mdh-code-header", children: [
      /* @__PURE__ */ k("span", { className: "mdh-code-language", children: d.toUpperCase() }),
      /* @__PURE__ */ k(
        "button",
        {
          className: "mdh-code-copy",
          onClick: g,
          title: n ? "Copied!" : "Copy code",
          children: n ? "✓" : "📋"
        }
      )
    ] }),
    /* @__PURE__ */ k(
      nt,
      {
        language: d,
        style: m,
        PreTag: "div",
        customStyle: {
          margin: 0,
          padding: "16px",
          backgroundColor: "transparent",
          fontSize: "0.875rem"
        },
        ...t,
        children: f
      }
    )
  ] });
}
function Sa({
  tree: e,
  content: r,
  currentPath: t = "",
  onDocClick: n,
  sidebarTitle: o = "Documentation",
  sidebarWidth: i = 280,
  enableSearch: s = !1,
  enableBreadcrumbs: c = !1,
  header: d,
  footer: f
}) {
  const [g, m] = me(e);
  we(() => {
    m(e);
  }, [e]);
  const h = we(() => ({
    code({ node: p, className: b, children: l, ...w }) {
      return !b || !b.includes("language-") ? /* @__PURE__ */ k("code", { className: "mdh-inline-code", ...w, children: l }) : /* @__PURE__ */ k(ca, { className: b, ...w, children: l });
    },
    a({ href: p, children: b, ...l }) {
      return /* @__PURE__ */ k(
        "a",
        {
          href: p,
          onClick: (O) => {
            if (p && (p.startsWith("#") || !p.startsWith("http")) && (O.preventDefault(), n)) {
              const B = p.startsWith("#") ? p.slice(1) : p;
              n(B);
            }
          },
          className: "mdh-link",
          ...l,
          children: b
        }
      );
    },
    table({ children: p }) {
      return /* @__PURE__ */ k("div", { className: "mdh-table-container", children: /* @__PURE__ */ k("table", { className: "mdh-table", children: p }) });
    },
    thead({ children: p }) {
      return /* @__PURE__ */ k("thead", { children: p });
    },
    tbody({ children: p }) {
      return /* @__PURE__ */ k("tbody", { children: p });
    },
    tr({ children: p }) {
      return /* @__PURE__ */ k("tr", { children: p });
    },
    th({ children: p }) {
      return /* @__PURE__ */ k("th", { className: "mdh-table-header", children: p });
    },
    td({ children: p }) {
      return /* @__PURE__ */ k("td", { children: p });
    }
  }), []);
  return /* @__PURE__ */ te("div", { className: "mdh-container", style: { "--sidebar-width": `${i}px` }, children: [
    /* @__PURE__ */ te("aside", { className: "mdh-sidebar", children: [
      /* @__PURE__ */ k("h2", { className: "mdh-sidebar-title", children: o }),
      s && /* @__PURE__ */ k(sa, { tree: e, onFilterChange: m }),
      /* @__PURE__ */ k("ul", { className: "mdh-tree", children: g.map((p) => /* @__PURE__ */ k(
        $t,
        {
          node: p,
          currentPath: t,
          onDocClick: n
        },
        p.path
      )) })
    ] }),
    /* @__PURE__ */ te("main", { className: "mdh-content", children: [
      d && /* @__PURE__ */ k("div", { className: "mdh-header", children: d }),
      c && /* @__PURE__ */ k(
        la,
        {
          tree: e,
          currentPath: t,
          onPathClick: n
        }
      ),
      /* @__PURE__ */ k("article", { className: "mdh-article", children: /* @__PURE__ */ k(
        rt,
        {
          remarkPlugins: [tt],
          components: h,
          children: r
        }
      ) }),
      f && /* @__PURE__ */ k("div", { className: "mdh-footer", children: f })
    ] })
  ] });
}
async function ua({
  baseDir: e,
  basePath: r = "",
  readdir: t,
  isDirectory: n
}) {
  const o = await t(e), i = [];
  for (const s of o) {
    if (s.name.startsWith(".") || s.isFile && !s.name.endsWith(".md"))
      continue;
    const c = `${e}/${s.name}`, d = s.isFile ? `${r}/${s.name.replace(/\.md$/, "")}`.replace(/^\//, "") : `${r}/${s.name}`.replace(/^\//, "");
    if (!s.isFile && (!n || await n(c))) {
      const f = await ua({
        baseDir: c,
        basePath: d,
        readdir: t,
        isDirectory: n
      });
      i.push({
        name: s.name,
        path: d,
        children: f
      });
    } else s.isFile && i.push({
      name: s.name.replace(/\.md$/, ""),
      path: d,
      isFile: !0
    });
  }
  return i.sort((s, c) => s.isFile !== c.isFile ? s.isFile ? 1 : -1 : s.name.localeCompare(c.name));
}
async function ka({
  docsDir: e,
  slug: r,
  readFile: t,
  join: n
}) {
  if (r.length === 0 || r.length === 1 && r[0] === "")
    try {
      return await t(n(e, "index.md"));
    } catch {
      return null;
    }
  const o = n(e, ...r) + ".md";
  try {
    return await t(o);
  } catch {
    try {
      const i = n(e, ...r);
      return await t(n(i, "index.md"));
    } catch {
      return null;
    }
  }
}
export {
  aa as Breadcrumbs,
  la as BreadcrumbsVanilla,
  va as MarkdownDocsViewer,
  Sa as MarkdownDocsViewerVanilla,
  oa as SearchBar,
  sa as SearchBarVanilla,
  ua as buildDocsTree,
  ya as getAllTemplates,
  ka as getDocContent,
  na as getTemplate,
  kt as templates
};
