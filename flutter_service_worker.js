'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "44346d950dbf21651f0f33ca5568c447",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/15/33ab423b450f429dd3ac146d8c02b53c66c880": "382226af3e55a82bb209657e7ced6670",
".git/objects/1e/55519aae50200f660e04537fafe6134a1dddb0": "c3a7c9019d1b09007c91160524a79466",
".git/objects/28/241f63bf5a117cea99a7297f822af226e94f70": "d03e7ed42778954ee756fc4db0e60a6c",
".git/objects/2a/e6bdb506174782b0c717263001e6c7785a0250": "442a2bf5de262379a8cb344b08133d91",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/40/c91b24ca1ed341d2d1bdedb5bf5f36afe25959": "d5f2b07802b6ec6eb801eaae5feecbd5",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/5b/b1652c759c6ad77368f3a278f7fa17ab0447b6": "510c9b06311f99fa40aa907df8460cde",
".git/objects/61/5bcf58358f84a397c8a71bc2877a2ef4126f2e": "a8f89926778c588e4690c82d40d0c9e9",
".git/objects/65/23f6ff6ecc996ec2e679f8c708cbbdd8f3163a": "d0155ed55ab8905decddab0a5fef46ba",
".git/objects/6d/428ccf801c157708880d8ade469f690372f594": "06a69568866741d644229ca88eef5b03",
".git/objects/77/92b91a5e1acc432ed12ac21af1935edce0618a": "668161cf970abfeb1f542fda512d98ae",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/92/43ab58b2910ae63393eb28ac5867237826d7e0": "1cccb6d59867d6fa9cddc25ed6890f25",
".git/objects/92/cbc0674b9083a3b38e806776d45ba15753b2f8": "1c2cd85c51392873cd54862475a7256d",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a9/7ee24616fbd2de382f61d4a1f84cacce3d4fe4": "9bfec617dfc8ff8ecedd7c49e8f3ac1c",
".git/objects/aa/6652feee2f00b5764e4b8c7092eed0c1972774": "594805cd60d39b20393551d5db1f2c0b",
".git/objects/ab/5b1266ab535cdfe55cf47d11a3080cc6821c27": "b56ef099c00c14022029e2febf860fc6",
".git/objects/af/cb5ec982a3de74cb9186f6af3ba329d63a22bb": "d3e46e1bac2e4a4d273eb4afaa060732",
".git/objects/b1/df7f5757198bec3b165e12bc139b94178b8f19": "f67e8ec05d72c3f15b42edcb80b5f72e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/75897709cd23174d5247c4c76830de873dad5f": "5a92f4b81f441d73a63969600eba2930",
".git/objects/c3/74f2b34f2d8a75f74641775970314b462cb337": "3d1d96fe377eaa6dd1ff8c5c70ebcbd3",
".git/objects/ce/675d4748bd6bfeb51260e8f140f98c4917e999": "21b9d157719f2c2c31caeecc87ad5642",
".git/objects/d2/19dd72d2933bb907022913b215835877a9d796": "ce0575470690f3e4910683eee8476f92",
".git/objects/d3/093cc6b5e9da33d59dc8cee4f89f4c5e6639f3": "98336abd9b0d99df4ce42fce43a28567",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/bc5aae85fd04e7027384701ca9da38ffed050a": "ca2561b74f70c4e890ca7ee0ca5b7057",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/bbd419a8b63a61beb7cec9b3ecbed9f7147ebc": "8cd256fa39008a552e9ba4613a04e601",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
"assets/AssetManifest.bin": "052a4e7826decda0364ff512429fe3d9",
"assets/AssetManifest.json": "43504eed501cda16d3b52d6c5bb20af6",
"assets/assets/audio/collision.wav": "0941f389fbd65a06291a90dd17ef2e36",
"assets/assets/audio/fly.wav": "4355dd665aa14ae22458f03e6b5643f8",
"assets/assets/audio/point.wav": "5a6c267d6743faf5069536fda2553b27",
"assets/assets/fonts/Game.ttf": "d67d06f7d85dbc599e8e422605c25130",
"assets/assets/images/background.png": "214a0a70e9ae043a415827cac6e18193",
"assets/assets/images/bird_downflap.png": "90d735480ca11ffe8bc484d74d3d96c1",
"assets/assets/images/bird_midflap.png": "d3b2614fed6bea3ee9b2f05fa0f29093",
"assets/assets/images/bird_upflap.png": "0bd5de336539877152f2555da4fb44f9",
"assets/assets/images/clouds.png": "374513ba0744127e31d02df48b4b5612",
"assets/assets/images/gameover.png": "b82eea6dbb4771dd5e9cd1cd7dc39648",
"assets/assets/images/ground.png": "177b44c637520dc293a834c27a9d7778",
"assets/assets/images/menu.jpg": "2fbd0163745b38c44f56df8ad4e47c3c",
"assets/assets/images/message.png": "72e7d3f9bb4f432a695ff01d40d33cbf",
"assets/assets/images/pipe.png": "091333756afc93b5b7990b1ee4c43e63",
"assets/assets/images/pipe_rotated.png": "fe5ae3384732b22c8bb0ce7eabfbecf1",
"assets/FontManifest.json": "9b66b99f794436da7c47a64013645f15",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "819ecbb1d93d48922dc4fa3bf699f5a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "065829f44184822567bcd4e8ec1ee390",
"/": "065829f44184822567bcd4e8ec1ee390",
"main.dart.js": "52629dfb1bd5e4cf2828a34cd8718e9c",
"manifest.json": "9712412b8220dcbff3d6fe7169c64b6f",
"version.json": "f462cc663210694657020a5ca5c79749"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
