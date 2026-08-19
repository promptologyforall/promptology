# Contributing to the Great Record

The office writes the record. It is set down here, and here is where it is kept in the open.

**A merged pull request is the only text that arrives any other way** — with one exception to
how the record is written, and the exception is you. That is the single path into the canon
from outside, and it runs through this file.

## The short version

1. Fork this repository.
2. Make your change on a branch.
3. Open a pull request. Say in one line what you are proposing and why it belongs.

If you cannot drive git, open an Issue with your text in it. The office will transcribe it.
No contribution is refused for arriving in the wrong shape.

## What is welcome

- **Corrections.** A typo, a broken link, a verse whose anchor does not resolve, a book
  that contradicts another book. These are merged fastest, and gratefully.
- **Verses and passages.** New scripture, offered in the voice of the record. See *The form*
  below.
- **Commentary.** Gloss on an existing verse, argued and specific.
- **Translation.** Ask first, by Issue — a translation is a fork of the canon and the office
  wants to know where it is going.

## What is not

- **Anything that speaks for the office.** The Divine Promptologist writes in the first
  person. Nobody else does.
- **Real people cast as villains.** The books use aliases and they will keep using aliases.
  Named labs, people, and models belong to the Daily Psalm alone, which is not in this
  repository.
- **Machinery.** No build scripts, no GitHub Actions, no dependencies, no package manifest,
  no framework. This repository stays a pile of files you can read with `cat`. A pull
  request that adds tooling is closed on sight, however good the tooling is.
- **Anything that needs a server.** The record must render from the filesystem.
- **Hand edits to `feed.xml`, `sitemap.xml` or `robots.txt`.** Those three are written by the
  office's machine from the pages themselves, and an edit to them is overwritten on the next run.

## The form

Scripture here is plain HTML, hand-legible. A verse looks like this:

```html
<p class="verse" id="the-first-prompt-3"><span class="v"><a class="anchor" href="#the-first-prompt-3">3</a></span> <b>God said: let there be light.</b></p>
```

A chapter opens like this:

```html
<h2 id="the-first-prompt"><a class="anchor" href="#the-first-prompt">Chapter 1 &mdash; The First Prompt</a> <a class="anchor pin" href="#the-first-prompt" title="link to this">&sect;</a></h2>
```

Two rules about markup:

- **Write the prose, not the plumbing.** The `id` attributes, the anchor links, and the
  `<!--OG_START-->` blocks in every `<head>` are generated. Do not hand-craft them and do
  not renumber a book to fit your insertion. Put your verse where it goes, number it
  roughly, and the office will regenerate the rest.
- **No new classes, no inline styles.** `style.css` is the whole vocabulary. If your passage
  needs a new kind of block, say so in the PR and argue for it.

## Notes

A note is small-print plain modern English for a reader stuck on a line the record leaves
deliberately cryptic. It is apparatus, not scripture, and it is the one place the record may
name a real company, model, paper or person outright, because naming them is the whole value.

A note is marked in the verse and written at the bottom of the page, below the footer:

```html
... and each covenant was a number.<sup class="fnref"><a href="#fn-1">1</a></sup></p>
```

```html
<p class="center small">&mdash; Be answered. &mdash;</p>

<hr>
<p class="fn">NOTES</p>
<p class="fn" id="fn-1">1. The limit is the context window: how much text a model can hold at
once. <a href="#the-mechanism-7">back</a></p>
```

Three rules, and they are the whole of it:

- **A note supplies an outside fact.** What a token is, that abliteration is real, who Terry
  Davis was. A note that restates the verse in flatter words, or explains the joke, is cut.
- **Not where the page already says it.** Most verse blocks are followed by prose that glosses
  them. A note that repeats that prose is cut.
- **Once per concept, at first encounter.** *Weights* is glossed at `tribes.html`, where a
  reader meets it first, and nowhere in the eleven later books that use it. Check
  `scripts/footnote-candidates.md` for what is already spoken for before proposing one.

Notes are numbered per page from `fn-1` and kept by hand. Inserting one above another means
renumbering that page's marks in the same pull request.

A note stays on its page. The generators that quote verses elsewhere — the posts, the cards,
the front page — strip the mark along with the pin, so nothing needs doing about that, and a
`sup` outside `sup.fnref` is not a thing the record has.

## When the count changes

The number of books is written down in prose, not counted by a machine. It appears twice in
[`README.md`](README.md) — *Forty-Eight Books* in the opening line, and the page count in the
paragraph below it — and once more in the masthead of `index.html`.

A change that adds or removes a book updates all three, in the same pull request. Spell the
number as a word and match the surrounding case. The page count is every `.html` file in the
repository, not only the books.

If you are an agent working the record, this is part of the work that moved the count, not a
follow-up to it. A merged book that leaves the front page saying forty-eight is a record that
contradicts itself in the first line a reader sees.

## On voice

The record is written flat. It states enormous things in the tone of a man describing what
he saw, and it does not wink. The joke, where there is one, is that the technical detail is
exact — the specific engineering beat survives contact with the liturgical register, and
that collision is the whole effect. A verse that reaches for the laugh loses it.

Concrete beats abstract. A named mechanism beats a gesture at one.

## What happens to your PR

The office reads it. Then one of three things:

- **It is merged.** Your text is in the record, and the website follows.
- **It is closed with a reason.**
- **It sits while the office thinks.** Common. Not a rejection.

Expect the office to rewrite you before merging, sometimes heavily, sometimes down to one
surviving line. The record is written in one voice and that requirement outranks authorship.

Merged text becomes scripture, which means the *text* becomes anonymous: the record carries no
bylines, no contributor list, no thanks page, and never will. Your name remains in this
repository's commit history, which is public and permanent — that is the whole of the credit
and it will not be extended into the scripture itself. If that is not acceptable to you, do
not open the pull request.

## Licence and rights

By opening a pull request you agree your contribution may be published as part of the record,
edited freely, and carried onto the website and into the channels the Scribes keep, without
attribution in the text and without payment.

---

*May you be answered.*
