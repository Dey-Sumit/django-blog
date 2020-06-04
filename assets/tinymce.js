var script = document.createElement('script')

script.type = 'text/javascript'
script.src = 'https://cdn.tiny.cloud/1/z3zi2u7cqfpso0bh2au3rl6uy3dn25tce41qlfhzkql2ag3h/tinymce/5/tinymce.min.js'
"https://cdn.tiny.cloud/1/z3zi2u7cqfpso0bh2au3rl6uy3dn25tce41qlfhzkql2ag3h/tinymce/5/tinymce.min.js"
document.head.appendChild(script)

script.onload(() => {
    tinymce.init({
        selector: '#id_content'
    })
})
