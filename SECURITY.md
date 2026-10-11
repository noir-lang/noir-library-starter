# Security Policy

<!--
TODO for library authors:
1. Replace LIBRARY_NAME / CONTACT placeholders below.
2. Decide whether you accept private reports via GitHub Security Advisories,
   email, or both — and delete the unused option.
3. Adjust supported-version guidance to match how you ship tags.
-->

## Reporting a Vulnerability

Please do **not** open a public issue for security vulnerabilities in this library.

Prefer one of:

1. **GitHub Security Advisories** (recommended when enabled on this repo):
   `https://github.com/noir-lang/LIBRARY_NAME/security/advisories/new`
2. **Private email**: `security@EXAMPLE.com`

Include:

- affected crate / package name and version (or git tag)
- a clear description of the issue
- impact (e.g. soundness, witness leakage, DoS)
- a minimal reproduction if you have one

We aim to acknowledge reports within a few business days.

## Supported Versions

Security fixes land on the default branch and ship in the next tagged release.
Older tags are generally not patched in place unless a release note says otherwise.

## Scope

This repository is a Noir library. Reports about the Noir compiler, `nargo`, or
proving backends belong in those upstream projects rather than here.
