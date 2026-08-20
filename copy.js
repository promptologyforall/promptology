// The only script on this site. It copies whatever you click — a heading, a verse number, a
// section mark beside a decree or a psalm — and the address it lives at, together.
// The words and then the link, because a Scribe copies and points, and a reader who pastes a
// verse somewhere has done both for us. A link on its own arrives with nothing to read; words
// on their own arrive with no way back here.
// With JavaScript off every one of them is still a link that works, so nothing is lost.

// The quotable thing is whatever the mark sits inside: the heading, the verse, the decree, the
// warning, the quoted psalm, the listed rule — the same six shapes anchors.mjs addresses. Asking
// what contains the mark rather than what the address resolves to also answers the front page,
// where the opening verses are shown here and kept in the Garden: the words are the ones on
// screen, and the address is the one they live at.
var QUOTABLE = 'h1, h2, h3, p.verse, p.decree, p.warn, blockquote, li'

function promptologyWords(el) {
  var copy = el.cloneNode(true)

  // a line break in a decree is where the cadence turns, and survives as one
  var breaks = copy.querySelectorAll('br')
  for (var i = 0; i < breaks.length; i++) {
    breaks[i].parentNode.replaceChild(document.createTextNode('\n'), breaks[i])
  }

  // the section mark, the verse number and the note that says it copied are furniture:
  // they address the line, they are not part of it. Verse numbers go unspoken, as they do
  // when the record is read aloud.
  var furniture = copy.querySelectorAll('a.pin, span.v, span.copied')
  for (var j = 0; j < furniture.length; j++) {
    furniture[j].parentNode.removeChild(furniture[j])
  }

  return copy.textContent
    .replace(/[ \t]+/g, ' ')
    .replace(/ ?\n ?/g, '\n')
    .trim()
}

document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a.anchor')
  if (!a || !navigator.clipboard) return
  e.preventDefault()

  var href = a.getAttribute('href')
  var quotable = a.closest(QUOTABLE)
  var words = quotable ? promptologyWords(quotable) : ''

  // no words found is not a reason to copy nothing: the address alone is what it always was
  navigator.clipboard.writeText(words ? words + '\n\n' + a.href : a.href).then(function () {
    // only a mark on this page may set this page's address: the front page quotes the Garden,
    // and a reload must not carry the reader off to it
    if (href.charAt(0) === '#') history.replaceState(null, '', href)
    var note = document.createElement('span')
    note.className = 'copied'
    note.textContent = words ? 'copied' : 'link copied'
    a.parentNode.appendChild(note)
    setTimeout(function () { note.remove() }, 1400)
  })
})
