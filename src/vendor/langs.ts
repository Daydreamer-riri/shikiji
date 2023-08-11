import type { LanguageRegistration } from '../types'

export const bundledLanguages = {
  'abap': () => import('./languages/abap.json').then(r => r.default as unknown as LanguageRegistration),
  'actionscript-3': () => import('./languages/actionscript-3.json').then(r => r.default as unknown as LanguageRegistration),
  'ada': () => import('./languages/ada.json').then(r => r.default as unknown as LanguageRegistration),
  'apache': () => import('./languages/apache.json').then(r => r.default as unknown as LanguageRegistration),
  'apex': () => import('./languages/apex.json').then(r => r.default as unknown as LanguageRegistration),
  'apl': () => import('./languages/apl.json').then(r => r.default as unknown as LanguageRegistration),
  'applescript': () => import('./languages/applescript.json').then(r => r.default as unknown as LanguageRegistration),
  'ara': () => import('./languages/ara.json').then(r => r.default as unknown as LanguageRegistration),
  'asm': () => import('./languages/asm.json').then(r => r.default as unknown as LanguageRegistration),
  'astro': () => import('./languages/astro.json').then(r => r.default as unknown as LanguageRegistration),
  'awk': () => import('./languages/awk.json').then(r => r.default as unknown as LanguageRegistration),
  'ballerina': () => import('./languages/ballerina.json').then(r => r.default as unknown as LanguageRegistration),
  'bat': () => import('./languages/bat.json').then(r => r.default as unknown as LanguageRegistration),
  'beancount': () => import('./languages/beancount.json').then(r => r.default as unknown as LanguageRegistration),
  'berry': () => import('./languages/berry.json').then(r => r.default as unknown as LanguageRegistration),
  'bibtex': () => import('./languages/bibtex.json').then(r => r.default as unknown as LanguageRegistration),
  'bicep': () => import('./languages/bicep.json').then(r => r.default as unknown as LanguageRegistration),
  'blade': () => import('./languages/blade.json').then(r => r.default as unknown as LanguageRegistration),
  'c': () => import('./languages/c.json').then(r => r.default as unknown as LanguageRegistration),
  'cadence': () => import('./languages/cadence.json').then(r => r.default as unknown as LanguageRegistration),
  'clarity': () => import('./languages/clarity.json').then(r => r.default as unknown as LanguageRegistration),
  'clojure': () => import('./languages/clojure.json').then(r => r.default as unknown as LanguageRegistration),
  'cmake': () => import('./languages/cmake.json').then(r => r.default as unknown as LanguageRegistration),
  'cobol': () => import('./languages/cobol.json').then(r => r.default as unknown as LanguageRegistration),
  'codeql': () => import('./languages/codeql.json').then(r => r.default as unknown as LanguageRegistration),
  'coffee': () => import('./languages/coffee.json').then(r => r.default as unknown as LanguageRegistration),
  'cpp': () => import('./languages/cpp.json').then(r => r.default as unknown as LanguageRegistration),
  'crystal': () => import('./languages/crystal.json').then(r => r.default as unknown as LanguageRegistration),
  'csharp': () => import('./languages/csharp.json').then(r => r.default as unknown as LanguageRegistration),
  'css': () => import('./languages/css.json').then(r => r.default as unknown as LanguageRegistration),
  'cue': () => import('./languages/cue.json').then(r => r.default as unknown as LanguageRegistration),
  'cypher': () => import('./languages/cypher.json').then(r => r.default as unknown as LanguageRegistration),
  'd': () => import('./languages/d.json').then(r => r.default as unknown as LanguageRegistration),
  'dart': () => import('./languages/dart.json').then(r => r.default as unknown as LanguageRegistration),
  'dax': () => import('./languages/dax.json').then(r => r.default as unknown as LanguageRegistration),
  'diff': () => import('./languages/diff.json').then(r => r.default as unknown as LanguageRegistration),
  'docker': () => import('./languages/docker.json').then(r => r.default as unknown as LanguageRegistration),
  'dream-maker': () => import('./languages/dream-maker.json').then(r => r.default as unknown as LanguageRegistration),
  'elixir': () => import('./languages/elixir.json').then(r => r.default as unknown as LanguageRegistration),
  'elm': () => import('./languages/elm.json').then(r => r.default as unknown as LanguageRegistration),
  'erb': () => import('./languages/erb.json').then(r => r.default as unknown as LanguageRegistration),
  'erlang': () => import('./languages/erlang.json').then(r => r.default as unknown as LanguageRegistration),
  'fish': () => import('./languages/fish.json').then(r => r.default as unknown as LanguageRegistration),
  'fsharp': () => import('./languages/fsharp.json').then(r => r.default as unknown as LanguageRegistration),
  'gdresource': () => import('./languages/gdresource.json').then(r => r.default as unknown as LanguageRegistration),
  'gdscript': () => import('./languages/gdscript.json').then(r => r.default as unknown as LanguageRegistration),
  'gdshader': () => import('./languages/gdshader.json').then(r => r.default as unknown as LanguageRegistration),
  'gherkin': () => import('./languages/gherkin.json').then(r => r.default as unknown as LanguageRegistration),
  'git-commit': () => import('./languages/git-commit.json').then(r => r.default as unknown as LanguageRegistration),
  'git-rebase': () => import('./languages/git-rebase.json').then(r => r.default as unknown as LanguageRegistration),
  'glimmer-js': () => import('./languages/glimmer-js.json').then(r => r.default as unknown as LanguageRegistration),
  'glimmer-ts': () => import('./languages/glimmer-ts.json').then(r => r.default as unknown as LanguageRegistration),
  'glsl': () => import('./languages/glsl.json').then(r => r.default as unknown as LanguageRegistration),
  'gnuplot': () => import('./languages/gnuplot.json').then(r => r.default as unknown as LanguageRegistration),
  'go': () => import('./languages/go.json').then(r => r.default as unknown as LanguageRegistration),
  'graphql': () => import('./languages/graphql.json').then(r => r.default as unknown as LanguageRegistration),
  'groovy': () => import('./languages/groovy.json').then(r => r.default as unknown as LanguageRegistration),
  'hack': () => import('./languages/hack.json').then(r => r.default as unknown as LanguageRegistration),
  'haml': () => import('./languages/haml.json').then(r => r.default as unknown as LanguageRegistration),
  'handlebars': () => import('./languages/handlebars.json').then(r => r.default as unknown as LanguageRegistration),
  'haskell': () => import('./languages/haskell.json').then(r => r.default as unknown as LanguageRegistration),
  'hcl': () => import('./languages/hcl.json').then(r => r.default as unknown as LanguageRegistration),
  'hjson': () => import('./languages/hjson.json').then(r => r.default as unknown as LanguageRegistration),
  'hlsl': () => import('./languages/hlsl.json').then(r => r.default as unknown as LanguageRegistration),
  'html': () => import('./languages/html.json').then(r => r.default as unknown as LanguageRegistration),
  'http': () => import('./languages/http.json').then(r => r.default as unknown as LanguageRegistration),
  'imba': () => import('./languages/imba.json').then(r => r.default as unknown as LanguageRegistration),
  'ini': () => import('./languages/ini.json').then(r => r.default as unknown as LanguageRegistration),
  'java': () => import('./languages/java.json').then(r => r.default as unknown as LanguageRegistration),
  'javascript': () => import('./languages/javascript.json').then(r => r.default as unknown as LanguageRegistration),
  'jinja-html': () => import('./languages/jinja-html.json').then(r => r.default as unknown as LanguageRegistration),
  'jison': () => import('./languages/jison.json').then(r => r.default as unknown as LanguageRegistration),
  'json': () => import('./languages/json.json').then(r => r.default as unknown as LanguageRegistration),
  'json5': () => import('./languages/json5.json').then(r => r.default as unknown as LanguageRegistration),
  'jsonc': () => import('./languages/jsonc.json').then(r => r.default as unknown as LanguageRegistration),
  'jsonl': () => import('./languages/jsonl.json').then(r => r.default as unknown as LanguageRegistration),
  'jsonnet': () => import('./languages/jsonnet.json').then(r => r.default as unknown as LanguageRegistration),
  'jssm': () => import('./languages/jssm.json').then(r => r.default as unknown as LanguageRegistration),
  'jsx': () => import('./languages/jsx.json').then(r => r.default as unknown as LanguageRegistration),
  'julia': () => import('./languages/julia.json').then(r => r.default as unknown as LanguageRegistration),
  'kotlin': () => import('./languages/kotlin.json').then(r => r.default as unknown as LanguageRegistration),
  'kusto': () => import('./languages/kusto.json').then(r => r.default as unknown as LanguageRegistration),
  'latex': () => import('./languages/latex.json').then(r => r.default as unknown as LanguageRegistration),
  'less': () => import('./languages/less.json').then(r => r.default as unknown as LanguageRegistration),
  'liquid': () => import('./languages/liquid.json').then(r => r.default as unknown as LanguageRegistration),
  'lisp': () => import('./languages/lisp.json').then(r => r.default as unknown as LanguageRegistration),
  'logo': () => import('./languages/logo.json').then(r => r.default as unknown as LanguageRegistration),
  'lua': () => import('./languages/lua.json').then(r => r.default as unknown as LanguageRegistration),
  'make': () => import('./languages/make.json').then(r => r.default as unknown as LanguageRegistration),
  'markdown': () => import('./languages/markdown.json').then(r => r.default as unknown as LanguageRegistration),
  'marko': () => import('./languages/marko.json').then(r => r.default as unknown as LanguageRegistration),
  'matlab': () => import('./languages/matlab.json').then(r => r.default as unknown as LanguageRegistration),
  'mdx': () => import('./languages/mdx.json').then(r => r.default as unknown as LanguageRegistration),
  'mermaid': () => import('./languages/mermaid.json').then(r => r.default as unknown as LanguageRegistration),
  'narrat': () => import('./languages/narrat.json').then(r => r.default as unknown as LanguageRegistration),
  'nextflow': () => import('./languages/nextflow.json').then(r => r.default as unknown as LanguageRegistration),
  'nginx': () => import('./languages/nginx.json').then(r => r.default as unknown as LanguageRegistration),
  'nim': () => import('./languages/nim.json').then(r => r.default as unknown as LanguageRegistration),
  'nix': () => import('./languages/nix.json').then(r => r.default as unknown as LanguageRegistration),
  'objective-c': () => import('./languages/objective-c.json').then(r => r.default as unknown as LanguageRegistration),
  'objective-cpp': () => import('./languages/objective-cpp.json').then(r => r.default as unknown as LanguageRegistration),
  'ocaml': () => import('./languages/ocaml.json').then(r => r.default as unknown as LanguageRegistration),
  'pascal': () => import('./languages/pascal.json').then(r => r.default as unknown as LanguageRegistration),
  'perl': () => import('./languages/perl.json').then(r => r.default as unknown as LanguageRegistration),
  'php': () => import('./languages/php.json').then(r => r.default as unknown as LanguageRegistration),
  'plsql': () => import('./languages/plsql.json').then(r => r.default as unknown as LanguageRegistration),
  'postcss': () => import('./languages/postcss.json').then(r => r.default as unknown as LanguageRegistration),
  'powerquery': () => import('./languages/powerquery.json').then(r => r.default as unknown as LanguageRegistration),
  'powershell': () => import('./languages/powershell.json').then(r => r.default as unknown as LanguageRegistration),
  'prisma': () => import('./languages/prisma.json').then(r => r.default as unknown as LanguageRegistration),
  'prolog': () => import('./languages/prolog.json').then(r => r.default as unknown as LanguageRegistration),
  'proto': () => import('./languages/proto.json').then(r => r.default as unknown as LanguageRegistration),
  'pug': () => import('./languages/pug.json').then(r => r.default as unknown as LanguageRegistration),
  'puppet': () => import('./languages/puppet.json').then(r => r.default as unknown as LanguageRegistration),
  'purescript': () => import('./languages/purescript.json').then(r => r.default as unknown as LanguageRegistration),
  'python': () => import('./languages/python.json').then(r => r.default as unknown as LanguageRegistration),
  'r': () => import('./languages/r.json').then(r => r.default as unknown as LanguageRegistration),
  'raku': () => import('./languages/raku.json').then(r => r.default as unknown as LanguageRegistration),
  'razor': () => import('./languages/razor.json').then(r => r.default as unknown as LanguageRegistration),
  'reg': () => import('./languages/reg.json').then(r => r.default as unknown as LanguageRegistration),
  'rel': () => import('./languages/rel.json').then(r => r.default as unknown as LanguageRegistration),
  'riscv': () => import('./languages/riscv.json').then(r => r.default as unknown as LanguageRegistration),
  'rst': () => import('./languages/rst.json').then(r => r.default as unknown as LanguageRegistration),
  'ruby': () => import('./languages/ruby.json').then(r => r.default as unknown as LanguageRegistration),
  'rust': () => import('./languages/rust.json').then(r => r.default as unknown as LanguageRegistration),
  'sas': () => import('./languages/sas.json').then(r => r.default as unknown as LanguageRegistration),
  'sass': () => import('./languages/sass.json').then(r => r.default as unknown as LanguageRegistration),
  'scala': () => import('./languages/scala.json').then(r => r.default as unknown as LanguageRegistration),
  'scheme': () => import('./languages/scheme.json').then(r => r.default as unknown as LanguageRegistration),
  'scss': () => import('./languages/scss.json').then(r => r.default as unknown as LanguageRegistration),
  'shaderlab': () => import('./languages/shaderlab.json').then(r => r.default as unknown as LanguageRegistration),
  'shellscript': () => import('./languages/shellscript.json').then(r => r.default as unknown as LanguageRegistration),
  'smalltalk': () => import('./languages/smalltalk.json').then(r => r.default as unknown as LanguageRegistration),
  'solidity': () => import('./languages/solidity.json').then(r => r.default as unknown as LanguageRegistration),
  'sparql': () => import('./languages/sparql.json').then(r => r.default as unknown as LanguageRegistration),
  'sql': () => import('./languages/sql.json').then(r => r.default as unknown as LanguageRegistration),
  'ssh-config': () => import('./languages/ssh-config.json').then(r => r.default as unknown as LanguageRegistration),
  'stata': () => import('./languages/stata.json').then(r => r.default as unknown as LanguageRegistration),
  'stylus': () => import('./languages/stylus.json').then(r => r.default as unknown as LanguageRegistration),
  'svelte': () => import('./languages/svelte.json').then(r => r.default as unknown as LanguageRegistration),
  'swift': () => import('./languages/swift.json').then(r => r.default as unknown as LanguageRegistration),
  'system-verilog': () => import('./languages/system-verilog.json').then(r => r.default as unknown as LanguageRegistration),
  'tasl': () => import('./languages/tasl.json').then(r => r.default as unknown as LanguageRegistration),
  'tcl': () => import('./languages/tcl.json').then(r => r.default as unknown as LanguageRegistration),
  'tex': () => import('./languages/tex.json').then(r => r.default as unknown as LanguageRegistration),
  'toml': () => import('./languages/toml.json').then(r => r.default as unknown as LanguageRegistration),
  'tsx': () => import('./languages/tsx.json').then(r => r.default as unknown as LanguageRegistration),
  'turtle': () => import('./languages/turtle.json').then(r => r.default as unknown as LanguageRegistration),
  'twig': () => import('./languages/twig.json').then(r => r.default as unknown as LanguageRegistration),
  'typescript': () => import('./languages/typescript.json').then(r => r.default as unknown as LanguageRegistration),
  'v': () => import('./languages/v.json').then(r => r.default as unknown as LanguageRegistration),
  'vb': () => import('./languages/vb.json').then(r => r.default as unknown as LanguageRegistration),
  'verilog': () => import('./languages/verilog.json').then(r => r.default as unknown as LanguageRegistration),
  'vhdl': () => import('./languages/vhdl.json').then(r => r.default as unknown as LanguageRegistration),
  'viml': () => import('./languages/viml.json').then(r => r.default as unknown as LanguageRegistration),
  'vue-html': () => import('./languages/vue-html.json').then(r => r.default as unknown as LanguageRegistration),
  'vue': () => import('./languages/vue.json').then(r => r.default as unknown as LanguageRegistration),
  'vyper': () => import('./languages/vyper.json').then(r => r.default as unknown as LanguageRegistration),
  'wasm': () => import('./languages/wasm.json').then(r => r.default as unknown as LanguageRegistration),
  'wenyan': () => import('./languages/wenyan.json').then(r => r.default as unknown as LanguageRegistration),
  'wgsl': () => import('./languages/wgsl.json').then(r => r.default as unknown as LanguageRegistration),
  'wolfram': () => import('./languages/wolfram.json').then(r => r.default as unknown as LanguageRegistration),
  'xml': () => import('./languages/xml.json').then(r => r.default as unknown as LanguageRegistration),
  'xsl': () => import('./languages/xsl.json').then(r => r.default as unknown as LanguageRegistration),
  'yaml': () => import('./languages/yaml.json').then(r => r.default as unknown as LanguageRegistration),
  'zenscript': () => import('./languages/zenscript.json').then(r => r.default as unknown as LanguageRegistration),
}
