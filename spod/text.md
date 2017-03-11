`
npm i spod
`

SPit Out Data (spod) is a tiny cli for generating json from a flat directory structure. each entry contains meta data (json) and text (markdown). you can think of it as creating a static pseudo-api, handy for loading into the state of a simple webapp.

i’m using it on this site to do just that by having one repo for [the content](https://github.com/jondashkyle/index), and another for the [source of the site](https://github.com/jondashkyle/jon-kyle.com). it’s nice splitting this up, as when i revisit the site next time i won’t need to rethink the content structure as everything is stored as flat JSON.

for more take a look at the [repository readme](https://github.com/jondashkyle/spod).
