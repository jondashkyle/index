small sites, smaller tools, keep it basic!

- data
  - keep it flat, store references to unique ids
  - avoid arrays, map over object values
- design
  - sketch or browser
  - no adobe or whatever
  - typography for the most part
- dev
  - browserify
  - no webpack or whatever
  - [es3 for the most part](https://github.com/yoshuawuyts/tiny-guide-to-non-fancy-node)
- deployment
  - accommodate the worst connections
  - accommodate the worst hardware
  - compress
  - minify
  - gzip

## a study of opposing(?) value systems

```
open                                closed
peers                                users
distributed                    centralized
connective                       connected
modular                           singular
expressiveness                   usability
phyles                            startups
```

- i made a [distributed web block](https://www.are.na/jon-kyle-mohr/distributed-web) on arena.
- very interested in [beaker](https://beakerbrowser.com/), a [dat](https://datproject.org/) powered browser which creating an open p2p layer over http.
- forking an entire site as an evolution of view source.
- contribute to the internet without needing to pay hosting or using a proprietary service.

## build

i’m using [choo](https://github.com/yoshuawuyts/choo) for everything front-end. it’s extremely lightweight and simple to understand. [here is a reference](https://github.com/jondashkyle/project-starterkit) for how i’m structuring, developing and deploying choo projects.

## repeat these instructions until the project is complete

- finish the project, scrap all of it.
- finish the project, scrap half of it.
- finish the project, scrap a third of it.