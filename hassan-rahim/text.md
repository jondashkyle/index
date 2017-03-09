[![62.5](hassan.jpg)](http://hassanrahim.com)

a quick one page banger for hassan. a few build notes:

- [choo](https://github.com/yoshuawuyts/choo) is used, even though it’s only a static little one pager. the nice thing about it being such a small lib (<5kb) is you can drop it in pretty guilt free.
- choo’s state is configured by an `object` in the `body` of `index.html`. this one didn’t need a cms, but by storing the initial state outside of the bundle it remains editable by hassan for quick copy edits.
- [gr8](https://github.com/jongacnik/gr8) made it easy to get the basic page layout and structure in place.
- some [epileptic.css](https://gist.github.com/jondashkyle/8143987) in there too.