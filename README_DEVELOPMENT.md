# Developer Documentation

## Table of Contents


## Developing without Docker

To start developing run 

```bash
npm update
webpack serve
```

## Developing with Docker

To start developing run 

```bash
kickstart
```

this willstart a docker container with the development environment.

within the container run

```bash
npm update
kick dev
```


## Structure of the Project

The project is structured in the following way:

```
./_tpl       # contains the template files
 |- _root/   # contains the scaffold files for creating a project from this theme
 |- **/*.md  # contains the presets (markdown files)
 
./showcase   # contains the showcase files
./src        # contains the source files (both scss and js)
./theme      # contains the combined ts files to be loaded in the project (including libraries etc)
```

Intended usage. 
