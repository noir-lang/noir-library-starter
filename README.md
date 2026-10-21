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

> [!WARNING]
> **This library is experimental software. It has not been fully audited and is not guaranteed to be secure. Expect bugs!**
>
> LIBRARY_NAME is provided "as is", without warranty of any kind (see [LICENSE](LICENSE)). Bugs in this library can lead to under-constrained circuits, allowing invalid proofs to be accepted. Do not rely on it to protect real assets or sensitive data without your own independent review.
>
> If you find a vulnerability, please **do not** open a public issue. Report it privately via [GitHub's "Report a vulnerability"](https://github.com/noir-lang/LIBRARY_NAME/security/advisories/new) form instead.

Add a brief description of the library

## Noir version compatibility

This library is tested with all releases since 1.0.0-beta.11 as well as nightly. Keep this in sync with `MINIMUM_NOIR_VERSION` in `.github/workflows/test.yml`.

## Benchmarks

Benchmarks are ignored by `git` and checked on pull-request. As such, benchmarks may be generated
with the following command.

```bash
# execute the following
./scripts/build-brillig-report.sh
./scripts/build-gates-report.sh
```

We use standard github action for benchmarks. For a new repository, we need to create a branch gh-pages first.

## Installation

In your _Nargo.toml_ file, add the version of this library you would like to install under dependency:

```toml
[dependencies]
LIBRARY = { tag = "v0.1.0", git = "https://github.com/noir-lang/LIBRARY_NAME" }
```

## `library`

### Usage

`PLACEHOLDER`

