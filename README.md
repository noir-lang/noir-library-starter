# noir-library-starter

This repository is a template used by the noir-lang org when creating internally maintained libraries.

This provides out of the box:

- A simple CI setup to test and format the library
- A canary flagging up compilation failures on nightly releases.
- A [release-please](https://github.com/googleapis/release-please) setup to ease creating releases for the library.
- Contributing guidelines specified in [CONTRIBUTING.md](CONTRIBUTING.md)

Feel free to use this template as a starting point to create your own Noir libraries.

---

# LIBRARY_NAME

Add a brief description of the library

## Noir version compatibility

TODO: Update Noir version numbers tested compatible with

This library is tested to work as of Noir version 1.0.0-beta.x.

## Benchmarks

TODO

## Installation

In your _Nargo.toml_ file, add the version of this library you would like to install under dependency:

```toml
[dependencies]
LIBRARY = { tag = "v0.1.0", git = "https://github.com/noir-lang/LIBRARY_NAME" }
```

## `library`

### Usage

`PLACEHOLDER`
