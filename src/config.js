System.config({
  baseURL: "/src",
  //defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "github:*": "jspm_packages/github/*"
  },
  map: {
    "rx": 'https://rawgit.com/Reactive-Extensions/RxJS/master/dist/rx.js'
  }
});
