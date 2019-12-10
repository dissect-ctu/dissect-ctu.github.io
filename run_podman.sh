#!/bin/bash

sudo podman run -it --rm --name jekyll --volume "$PWD:/srv/jekyll" -p 127.0.0.1:4000:4000 -p 127.0.0.1:35729:35729 --security-opt label=disable jekyll/jekyll jekyll serve --livereload
