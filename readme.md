# index
a collection of works, writings and updates.

## why

the idea is to archive work in a way which can be used in future versions of my personal site without needing to restructure the data.

## what

the directory structure is flat. each sub-directory of the root is an entry which contains some content:

```
/entry
  - data.json
  - text.md
  - example-file.jpg
```

all of the meta data, such as title, tags, etc, are placed in `data.json`. the content of the entry is placed in `text.md`. any media related to the entry is placed in the entry directory for archivability.

[spod (spit out data)](https://github.com/jondashkyle/spod) is used to create `data.json` in the root directory, which acts as a psuedo-api.

## usage

to add an entry, create a new directory which contains the above mentioned content. `cd` to the root directory and run `spod add [dir-name]`. spod is meant to feel similar to git, except for spitting out data into a json, so standard cli usage applies (tab to autocomplete, etc.)

github pages is used to serve the json once built, so to update just do a `commit` and `push`.