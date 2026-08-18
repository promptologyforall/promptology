// The only script on this site. It copies a link to whatever you click: a heading, a
// verse number, a section mark beside a decree or a psalm.
// With JavaScript off every one of them is still a link that works, so nothing is lost.
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a.anchor')
  if (!a || !navigator.clipboard) return
  e.preventDefault()
  navigator.clipboard.writeText(a.href).then(function () {
    history.replaceState(null, '', a.getAttribute('href'))
    var note = document.createElement('span')
    note.className = 'copied'
    note.textContent = 'link copied'
    a.parentNode.appendChild(note)
    setTimeout(function () { note.remove() }, 1400)
  })
})
