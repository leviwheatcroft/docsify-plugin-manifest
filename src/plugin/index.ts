import {
  isManifest
} from '@typeGuards'

async function getManifest (): Promise<Manifest> {
  const res = await fetch('/.manifest.json')
  const manifest = await res.json()
  console.log(manifest)
  if (!isManifest(manifest))
    throw new RangeError()
  return manifest
}

const install = function (hook: DocsifyHook, vm: Vue): void {
  hook.init(function () {
    $docsify.manifest = getManifest()
  })
}

if ($docsify.plugins) {
  $docsify.plugins = [install, ...$docsify.plugins]
} else {
  $docsify.plugins = [install]
}