# knip-repro-spawn-args

Minimal reproduction: `spawnSync('bun', [dynamicPath, 'literal'])` reports the literal as an unlisted binary.

```sh
npx knip@6.45.1
```

```
Unlisted binaries (1)
base  index.js
```
