#!/usr/bin/env node
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cli/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cli/index.ts":
/*!**************************!*\
  !*** ./src/cli/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst config_1 = __webpack_require__(/*! ./lib/config */ \"./src/cli/lib/config/index.ts\");\nconst pathGenerator_1 = __webpack_require__(/*! ./lib/pathGenerator */ \"./src/cli/lib/pathGenerator.ts\");\nconst parse_1 = __webpack_require__(/*! ./lib/parse */ \"./src/cli/lib/parse.ts\");\nconst write_1 = __webpack_require__(/*! ./lib/write */ \"./src/cli/lib/write.ts\");\nconst manifest = __importStar(__webpack_require__(/*! ./lib/manifest */ \"./src/cli/lib/manifest.ts\"));\nasync function generateManifest() {\n    const config = config_1.getConfig();\n    for await (const path of pathGenerator_1.pathGenerator(config)) {\n        manifest.addItem(await parse_1.parse(path, config));\n    }\n    write_1.write(config);\n}\ngenerateManifest();\n\n\n//# sourceURL=webpack:///./src/cli/index.ts?");

/***/ }),

/***/ "./src/cli/lib/config sync recursive":
/*!*********************************!*\
  !*** ./src/cli/lib/config sync ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/cli/lib/config sync recursive\";\n\n//# sourceURL=webpack:///./src/cli/lib/config_sync?");

/***/ }),

/***/ "./src/cli/lib/config/defaults.ts":
/*!****************************************!*\
  !*** ./src/cli/lib/config/defaults.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.defaults = {\n    root: './',\n    pretty: false,\n    fileFilters: [\n        '**/*.md',\n    ],\n    dirFilters: [\n        '**',\n        '!git',\n        '!node_modules'\n    ],\n    fields: { all: [] },\n};\n\n\n//# sourceURL=webpack:///./src/cli/lib/config/defaults.ts?");

/***/ }),

/***/ "./src/cli/lib/config/getArgs.ts":
/*!***************************************!*\
  !*** ./src/cli/lib/config/getArgs.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst commander_1 = __importDefault(__webpack_require__(/*! commander */ \"commander\"));\nfunction getArgs() {\n    const args = new commander_1.default.Command();\n    args.version(process.env.npm_package_version || '1.0.0 ?');\n    args\n        .option('-r, --root <path>', 'root path of directory to index', './')\n        .option('-f, --fileFilters <glob,...>', 'include / exlude files')\n        .option('-d, --dirFilters <glob,...>', 'include / exlude directories')\n        .option('--pretty', 'pretty print manifest')\n        .option('-f, --fields <field,...>', 'fields to include - see README for details', (field, accumulator) => {\n        return [accumulator, field].join(',');\n    });\n    args.parse(process.argv);\n    return args.opts();\n}\nexports.getArgs = getArgs;\n\n\n//# sourceURL=webpack:///./src/cli/lib/config/getArgs.ts?");

/***/ }),

/***/ "./src/cli/lib/config/getFileConfig.ts":
/*!*********************************************!*\
  !*** ./src/cli/lib/config/getFileConfig.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typeGuards_1 = __webpack_require__(/*! ../../../types/typeGuards */ \"./src/types/typeGuards.ts\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst json5_1 = __importDefault(__webpack_require__(/*! json5 */ \"json5\"));\nconst hjson_1 = __importDefault(__webpack_require__(/*! hjson */ \"hjson\"));\nconst yaml_1 = __importDefault(__webpack_require__(/*! yaml */ \"yaml\"));\nfunction findFile(root, configFile) {\n    let check = [\n        '.manifest.config.json',\n        '.manifest.config.json5',\n        '.manifest.config.hjson',\n        '.manifest.config.yaml',\n        '.manifest.config.yml',\n    ];\n    if (!typeGuards_1.isUndefined(configFile))\n        check.unshift(configFile);\n    check = check.map((p) => path_1.join(root, p));\n    return check.find((p) => {\n        try {\n            fs_1.statSync(p);\n            return true;\n        }\n        catch (err) {\n            return false;\n        }\n    });\n}\nfunction readFile(path, format) {\n    if (format === 'js') {\n        const config = __webpack_require__(\"./src/cli/lib/config sync recursive\")(path);\n        return config;\n    }\n    return fs_1.readFileSync(path, 'utf8');\n}\nfunction getFileFormat(path) {\n    const re = /\\.(\\w{1,5})$/;\n    const match = re.exec(path);\n    if (typeGuards_1.isNull(match))\n        throw new RangeError();\n    const [_, format] = match;\n    return format;\n}\nconst parsers = {\n    json: (raw) => JSON.parse(raw),\n    json5: (raw) => json5_1.default.parse(raw),\n    hjson: (raw) => hjson_1.default.parse(raw),\n    yaml: (raw) => yaml_1.default.parse(raw),\n    yml: (raw) => yaml_1.default.parse(raw)\n};\nfunction parseFile(rawConfig, format) {\n    if (typeGuards_1.isConfig(rawConfig))\n        return rawConfig;\n    return parsers[format](rawConfig);\n}\nfunction getFileConfig(root, configFile) {\n    const path = findFile(root, configFile);\n    if (typeGuards_1.isUndefined(path))\n        return {};\n    const format = getFileFormat(path);\n    const rawConfig = readFile(path, format);\n    return parseFile(rawConfig, format);\n}\nexports.getFileConfig = getFileConfig;\n\n\n//# sourceURL=webpack:///./src/cli/lib/config/getFileConfig.ts?");

/***/ }),

/***/ "./src/cli/lib/config/index.ts":
/*!*************************************!*\
  !*** ./src/cli/lib/config/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typeGuards_1 = __webpack_require__(/*! ../../../types/typeGuards */ \"./src/types/typeGuards.ts\");\nconst defaults_1 = __webpack_require__(/*! ./defaults */ \"./src/cli/lib/config/defaults.ts\");\nconst getFileConfig_1 = __webpack_require__(/*! ./getFileConfig */ \"./src/cli/lib/config/getFileConfig.ts\");\nconst getArgs_1 = __webpack_require__(/*! ./getArgs */ \"./src/cli/lib/config/getArgs.ts\");\nconst merge_1 = __webpack_require__(/*! ./merge */ \"./src/cli/lib/config/merge.ts\");\nconst console_1 = __webpack_require__(/*! ../console */ \"./src/cli/lib/console.ts\");\nfunction getConfig() {\n    const args = getArgs_1.getArgs();\n    if ((!typeGuards_1.isUndefined(args.root)) &&\n        (!typeGuards_1.isString(args.root)))\n        throw new RangeError();\n    if ((!typeGuards_1.isUndefined(args.config)) &&\n        (!typeGuards_1.isString(args.config)))\n        throw new RangeError();\n    const fileConfig = getFileConfig_1.getFileConfig(args.root || './', args.config);\n    console_1.silly('defaults', defaults_1.defaults);\n    console_1.silly('fileConfig', fileConfig);\n    console_1.silly('args', args);\n    const options = merge_1.merge(defaults_1.defaults, fileConfig, args);\n    console_1.verbose('final config', options);\n    if (!typeGuards_1.isConfig(options))\n        throw new RangeError('invalid config');\n    return options;\n}\nexports.getConfig = getConfig;\n\n\n//# sourceURL=webpack:///./src/cli/lib/config/index.ts?");

/***/ }),

/***/ "./src/cli/lib/config/merge.ts":
/*!*************************************!*\
  !*** ./src/cli/lib/config/merge.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typeGuards_1 = __webpack_require__(/*! ../../../types/typeGuards */ \"./src/types/typeGuards.ts\");\nconst parseFields_1 = __webpack_require__(/*! ./parseFields */ \"./src/cli/lib/config/parseFields.ts\");\nfunction firstNotUndefined(...args) {\n    while (args.length) {\n        const arg = args.shift();\n        if (!typeGuards_1.isUndefined(arg))\n            return arg;\n    }\n}\nfunction merge(defaults, fileConfig, args) {\n    const config = {};\n    config.root = firstNotUndefined(args.root, fileConfig.root, defaults.root);\n    config.pretty = firstNotUndefined(args.pretty, fileConfig.pretty, defaults.pretty);\n    config.version = '1.0.0';\n    config.fileFilters = [\n        defaults.fileFilters,\n        args.fileFilters || [],\n        fileConfig.fileFilters || [],\n    ].map((f) => {\n        if (typeGuards_1.isString(f))\n            return f.split(',');\n        if (typeGuards_1.isUndefined(f))\n            return [];\n        return f;\n    }).flat();\n    config.dirFilters = [\n        defaults.dirFilters,\n        args.dirFilters,\n        fileConfig.dirFilters\n    ].map((f) => {\n        if (typeGuards_1.isString(f))\n            return f.split(',');\n        if (typeGuards_1.isUndefined(f))\n            return [];\n        return f;\n    }).flat();\n    config.fields = parseFields_1.parseFields(firstNotUndefined(args.fields, fileConfig.fields, defaults.fields));\n    return config;\n}\nexports.merge = merge;\n\n\n//# sourceURL=webpack:///./src/cli/lib/config/merge.ts?");

/***/ }),

/***/ "./src/cli/lib/config/parseFields.ts":
/*!*******************************************!*\
  !*** ./src/cli/lib/config/parseFields.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typeGuards_1 = __webpack_require__(/*! ../../../types/typeGuards */ \"./src/types/typeGuards.ts\");\nconst resolvers_1 = __webpack_require__(/*! ../resolvers */ \"./src/cli/lib/resolvers/index.ts\");\nfunction parseFields(rawFields) {\n    let fields = {};\n    if (typeGuards_1.isFields(rawFields)) {\n        if (rawFields.all)\n            Object.keys(resolvers_1.resolvers).forEach((r) => fields[r] = []);\n        delete rawFields.all;\n        Object.assign(fields, rawFields);\n        return fields;\n    }\n    rawFields.split(',').forEach((f) => {\n        const re = /^(\\w+)\\[?([\\w,]+)?\\]?$/;\n        const match = re.exec(f);\n        if (typeGuards_1.isNull(match))\n            throw new Error(`bad fields option: --fields: ${rawFields}`);\n        const [_, negate, field, args] = match;\n        if ((!negate) &&\n            (field === 'all')) {\n            Object.keys(resolvers_1.resolvers).forEach((r) => fields[r] = []);\n            return;\n        }\n        if ((negate) &&\n            (field === 'all')) {\n            fields = {};\n            return;\n        }\n        if ((negate && args) ||\n            (negate && !fields[field]))\n            throw new Error(`bad fields option: --fields: ${rawFields}`);\n        if (negate) {\n            delete fields[field];\n            return;\n        }\n        if (typeGuards_1.isUndefined(args))\n            fields[field] = [];\n        else\n            fields[field] = args.split(',');\n    });\n    if (typeGuards_1.isUndefined(fields.id))\n        fields.id = [];\n    return fields;\n}\nexports.parseFields = parseFields;\n\n\n//# sourceURL=webpack:///./src/cli/lib/config/parseFields.ts?");

/***/ }),

/***/ "./src/cli/lib/console.ts":
/*!********************************!*\
  !*** ./src/cli/lib/console.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst debug_1 = __importDefault(__webpack_require__(/*! debug */ \"debug\"));\nexports.info = debug_1.default('manifest-info');\nexports.verbose = debug_1.default('manifest-verbose');\nexports.silly = debug_1.default('manifest-silly');\nexports.warning = debug_1.default('manifest-warning');\nexports.error = debug_1.default('manifest-error');\n\n\n//# sourceURL=webpack:///./src/cli/lib/console.ts?");

/***/ }),

/***/ "./src/cli/lib/manifest.ts":
/*!*********************************!*\
  !*** ./src/cli/lib/manifest.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst sizeOf_1 = __importDefault(__webpack_require__(/*! ./sizeOf */ \"./src/cli/lib/sizeOf.ts\"));\nconst console_1 = __webpack_require__(/*! ./console */ \"./src/cli/lib/console.ts\");\nconst _typeGuards_1 = __webpack_require__(/*! ../../types/typeGuards.ts */ \"./src/types/typeGuards.ts\");\nconst index = [];\nconst fields = [];\nfunction toJSON(pretty = false) {\n    const manifest = {\n        meta: {\n            size: sizeOf_1.default(index),\n            count: index.length,\n            fields\n        },\n        index\n    };\n    console_1.info('meta:', manifest.meta);\n    if (!_typeGuards_1.isManifest(manifest))\n        throw new RangeError();\n    return JSON.stringify(manifest, null, pretty ? 2 : undefined);\n}\nexports.toJSON = toJSON;\nfunction addItem(item) {\n    Object.keys(item).forEach((k) => {\n        if (fields.includes(k))\n            return;\n        fields.push(k);\n    });\n    index.push(item);\n}\nexports.addItem = addItem;\n\n\n//# sourceURL=webpack:///./src/cli/lib/manifest.ts?");

/***/ }),

/***/ "./src/cli/lib/parse.ts":
/*!******************************!*\
  !*** ./src/cli/lib/parse.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst marked_1 = __importDefault(__webpack_require__(/*! marked */ \"marked\"));\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst gray_matter_1 = __importDefault(__webpack_require__(/*! gray-matter */ \"gray-matter\"));\nconst resolvers_1 = __webpack_require__(/*! ./resolvers */ \"./src/cli/lib/resolvers/index.ts\");\nconst { readFile } = fs_1.promises;\nasync function parse(path, { root, fields }) {\n    const { data: frontmatter, content } = gray_matter_1.default(await readFile(path, 'utf8'));\n    const tokens = marked_1.default.lexer(content);\n    // object with which to accumulate the resolved fields\n    const data = {};\n    // iterate over fields, calling resolvers\n    Object.keys(fields).forEach((field) => {\n        const args = fields[field];\n        const resolverHash = {\n            root,\n            path,\n            data,\n            frontmatter,\n            content,\n            tokens,\n            args\n        };\n        resolvers_1.resolvers[field](resolverHash);\n    });\n    return data;\n}\nexports.parse = parse;\n\n\n//# sourceURL=webpack:///./src/cli/lib/parse.ts?");

/***/ }),

/***/ "./src/cli/lib/pathGenerator.ts":
/*!**************************************!*\
  !*** ./src/cli/lib/pathGenerator.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst typeGuards_1 = __webpack_require__(/*! ../../types/typeGuards */ \"./src/types/typeGuards.ts\");\nconst console_1 = __webpack_require__(/*! ./console */ \"./src/cli/lib/console.ts\");\nconst multimatch_1 = __importDefault(__webpack_require__(/*! multimatch */ \"multimatch\"));\nconst { readdir, stat } = fs_1.promises;\nasync function readdirPrepend(path) {\n    let paths = await readdir(path);\n    paths = paths.map((p) => path_1.join(path, p));\n    return paths;\n}\nasync function* pathGenerator({ root, fileFilters, dirFilters }) {\n    let paths = await readdirPrepend(root);\n    while (paths.length) {\n        const path = paths.shift();\n        if (typeGuards_1.isUndefined(path))\n            throw new RangeError();\n        const relativePath = path_1.relative(root, path);\n        // if (!multimatch(relativePath, filters).length) {\n        //   silly(`skip: ${relativePath}`)\n        //   continue\n        // }\n        const stats = await stat(path);\n        if (stats.isFile()) {\n            if (multimatch_1.default(relativePath, fileFilters).length) {\n                console_1.info(`matched file: ${relativePath}`);\n                yield path;\n            }\n            else {\n                console_1.info(`skipped file: ${relativePath}`);\n            }\n        }\n        else if (stats.isDirectory()) {\n            if (multimatch_1.default(relativePath, dirFilters).length) {\n                console_1.info(`matched dir: ${relativePath}`);\n                paths = [...await readdirPrepend(path), ...paths];\n            }\n            else {\n                console_1.info(`skipped dir: ${relativePath}`);\n            }\n        }\n    }\n}\nexports.pathGenerator = pathGenerator;\n\n\n//# sourceURL=webpack:///./src/cli/lib/pathGenerator.ts?");

/***/ }),

/***/ "./src/cli/lib/resolvers/content.ts":
/*!******************************************!*\
  !*** ./src/cli/lib/resolvers/content.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typeGuards_1 = __webpack_require__(/*! ../../../types/typeGuards */ \"./src/types/typeGuards.ts\");\nexports.content = function ({ data, content, args }) {\n    const [lengthStr] = args;\n    if (!typeGuards_1.isUndefined(lengthStr)) {\n        const lengthInt = parseInt(lengthStr);\n        content = content.slice(0, lengthInt - 3);\n        content = content.replace(/\\s.*?$/, '...');\n    }\n    data.content = content;\n};\n\n\n//# sourceURL=webpack:///./src/cli/lib/resolvers/content.ts?");

/***/ }),

/***/ "./src/cli/lib/resolvers/frontmatter.ts":
/*!**********************************************!*\
  !*** ./src/cli/lib/resolvers/frontmatter.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typeGuards_1 = __webpack_require__(/*! ../../../types/typeGuards */ \"./src/types/typeGuards.ts\");\nexports.frontmatter = function ({ data, frontmatter, args }) {\n    if (!args) {\n        Object.assign(data, frontmatter);\n        return;\n    }\n    let applied = [];\n    const available = Object.keys(frontmatter);\n    args.forEach((a) => {\n        if (a === 'all') {\n            applied = [...available];\n            return;\n        }\n        const re = /^(-)?(\\w+)$/;\n        const match = re.exec(a);\n        if (typeGuards_1.isNull(match))\n            throw new Error('bad frontmatter argument: ${a}');\n        const [_, negate, field] = match;\n        if (negate)\n            applied = applied.filter((f) => f !== field);\n        else\n            applied.push(field);\n    });\n    applied.forEach((f) => {\n        data[f] = frontmatter[f];\n    });\n};\n\n\n//# sourceURL=webpack:///./src/cli/lib/resolvers/frontmatter.ts?");

/***/ }),

/***/ "./src/cli/lib/resolvers/headings.ts":
/*!*******************************************!*\
  !*** ./src/cli/lib/resolvers/headings.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typeGuards_1 = __webpack_require__(/*! ../../../types/typeGuards */ \"./src/types/typeGuards.ts\");\nexports.headings = function ({ tokens, data, args }) {\n    const [depth = Infinity] = args;\n    data.headings = tokens\n        .filter((t) => {\n        return ((t.type === 'heading') &&\n            (t.depth <= depth));\n    })\n        .map((h) => {\n        if (!typeGuards_1.isMarkedTokensHeading(h))\n            throw new RangeError;\n        return h.text;\n    });\n};\n\n\n//# sourceURL=webpack:///./src/cli/lib/resolvers/headings.ts?");

/***/ }),

/***/ "./src/cli/lib/resolvers/id.ts":
/*!*************************************!*\
  !*** ./src/cli/lib/resolvers/id.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nexports.id = function ({ data, path, root }) {\n    data.id = path_1.relative(root, path);\n};\n\n\n//# sourceURL=webpack:///./src/cli/lib/resolvers/id.ts?");

/***/ }),

/***/ "./src/cli/lib/resolvers/index.ts":
/*!****************************************!*\
  !*** ./src/cli/lib/resolvers/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst id_1 = __webpack_require__(/*! ./id */ \"./src/cli/lib/resolvers/id.ts\");\nconst frontmatter_1 = __webpack_require__(/*! ./frontmatter */ \"./src/cli/lib/resolvers/frontmatter.ts\");\nconst headings_1 = __webpack_require__(/*! ./headings */ \"./src/cli/lib/resolvers/headings.ts\");\nconst links_1 = __webpack_require__(/*! ./links */ \"./src/cli/lib/resolvers/links.ts\");\nconst path_1 = __webpack_require__(/*! ./path */ \"./src/cli/lib/resolvers/path.ts\");\nconst content_1 = __webpack_require__(/*! ./content */ \"./src/cli/lib/resolvers/content.ts\");\nconst title_1 = __webpack_require__(/*! ./title */ \"./src/cli/lib/resolvers/title.ts\");\nexports.resolvers = {\n    id: id_1.id,\n    frontmatter: frontmatter_1.frontmatter,\n    headings: headings_1.headings,\n    links: links_1.links,\n    path: path_1.path,\n    content: content_1.content,\n    title: title_1.title\n};\n\n\n//# sourceURL=webpack:///./src/cli/lib/resolvers/index.ts?");

/***/ }),

/***/ "./src/cli/lib/resolvers/links.ts":
/*!****************************************!*\
  !*** ./src/cli/lib/resolvers/links.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.links = function ({ data, tokens }) {\n    // console.log(tokens.links)\n    data.links = Object.values(tokens.links)\n        .map((l) => l.title).filter((t) => t);\n};\n\n\n//# sourceURL=webpack:///./src/cli/lib/resolvers/links.ts?");

/***/ }),

/***/ "./src/cli/lib/resolvers/path.ts":
/*!***************************************!*\
  !*** ./src/cli/lib/resolvers/path.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nexports.path = function ({ data, path, root }) {\n    data.path = path_1.relative(root, path);\n};\n\n\n//# sourceURL=webpack:///./src/cli/lib/resolvers/path.ts?");

/***/ }),

/***/ "./src/cli/lib/resolvers/title.ts":
/*!****************************************!*\
  !*** ./src/cli/lib/resolvers/title.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst title_case_1 = __webpack_require__(/*! title-case */ \"title-case\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst typeGuards_1 = __webpack_require__(/*! ../../../types/typeGuards */ \"./src/types/typeGuards.ts\");\nexports.title = function ({ data, frontmatter, path }) {\n    if (!typeGuards_1.isUndefined(frontmatter.title)) {\n        data.title = frontmatter.title;\n        return;\n    }\n    let title = path_1.parse(path).name;\n    title = title.replace('/[-_]/g', ' ');\n    title = title_case_1.titleCase(title);\n    data.title = title;\n};\n\n\n//# sourceURL=webpack:///./src/cli/lib/resolvers/title.ts?");

/***/ }),

/***/ "./src/cli/lib/sizeOf.ts":
/*!*******************************!*\
  !*** ./src/cli/lib/sizeOf.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction sizeOf(object) {\n    var objectList = [];\n    var stack = [object];\n    var bytes = 0;\n    while (stack.length) {\n        var value = stack.pop();\n        if (typeof value === 'boolean') {\n            bytes += 4;\n        }\n        else if (typeof value === 'string') {\n            bytes += value.length * 2;\n        }\n        else if (typeof value === 'number') {\n            bytes += 8;\n        }\n        else if (typeof value === 'object'\n            && objectList.indexOf(value) === -1) {\n            objectList.push(value);\n            for (var i in value) {\n                stack.push(value[i]);\n            }\n        }\n    }\n    return bytes;\n}\nexports.default = sizeOf;\n\n\n//# sourceURL=webpack:///./src/cli/lib/sizeOf.ts?");

/***/ }),

/***/ "./src/cli/lib/write.ts":
/*!******************************!*\
  !*** ./src/cli/lib/write.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst { writeFile } = fs_1.promises;\nconst manifest = __importStar(__webpack_require__(/*! ./manifest */ \"./src/cli/lib/manifest.ts\"));\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nasync function write({ root, pretty, }) {\n    const path = path_1.join(root, '.manifest.json');\n    const data = manifest.toJSON(pretty);\n    await writeFile(path, data, { encoding: 'utf8' });\n}\nexports.write = write;\n\n\n//# sourceURL=webpack:///./src/cli/lib/write.ts?");

/***/ }),

/***/ "./src/types/typeGuards.ts":
/*!*********************************!*\
  !*** ./src/types/typeGuards.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typescript_is_1 = __webpack_require__(/*! typescript-is */ \"typescript-is\");\nfunction isUndefined(value) {\n    return value === undefined;\n}\nexports.isUndefined = isUndefined;\nfunction isNull(value) {\n    return value === null;\n}\nexports.isNull = isNull;\nfunction isString(value) {\n    return typeof value === 'string';\n}\nexports.isString = isString;\nfunction isArray(value) {\n    return Array.isArray(value);\n}\nexports.isArray = isArray;\nfunction isMarkedTokensHeading(value) {\n    return typescript_is_1.is(value, object => { var path = [\"$\"]; function _312(object) { ; if (object !== \"heading\")\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected string 'heading'\", path: path.slice(), reason: { type: \"string-literal\", value: \"heading\" } };\n    else\n        return null; } function _number(object) { ; if (typeof object !== \"number\")\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected a number\", path: path.slice(), reason: { type: \"number\" } };\n    else\n        return null; } function _string(object) { ; if (typeof object !== \"string\")\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected a string\", path: path.slice(), reason: { type: \"string\" } };\n    else\n        return null; } function _311(object) { ; if (typeof object !== \"object\" || object === null || Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an object\", path: path.slice(), reason: { type: \"object\" } }; {\n        if (\"type\" in object) {\n            path.push(\"type\");\n            var error = _312(object[\"type\"]);\n            path.pop();\n            if (error)\n                return error;\n        }\n        else\n            return { message: \"validation failed at \" + path.join(\".\") + \": expected 'type' in object\", path: path.slice(), reason: { type: \"missing-property\", property: \"type\" } };\n    } {\n        if (\"depth\" in object) {\n            path.push(\"depth\");\n            var error = _number(object[\"depth\"]);\n            path.pop();\n            if (error)\n                return error;\n        }\n        else\n            return { message: \"validation failed at \" + path.join(\".\") + \": expected 'depth' in object\", path: path.slice(), reason: { type: \"missing-property\", property: \"depth\" } };\n    } {\n        if (\"text\" in object) {\n            path.push(\"text\");\n            var error = _string(object[\"text\"]);\n            path.pop();\n            if (error)\n                return error;\n        }\n        else\n            return { message: \"validation failed at \" + path.join(\".\") + \": expected 'text' in object\", path: path.slice(), reason: { type: \"missing-property\", property: \"text\" } };\n    } return null; } var error = _311(object); return error; });\n}\nexports.isMarkedTokensHeading = isMarkedTokensHeading;\nfunction isManifest(value) {\n    const isManifest = typescript_is_1.is(value, object => { var path = [\"$\"]; function _number(object) { ; if (typeof object !== \"number\")\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected a number\", path: path.slice(), reason: { type: \"number\" } };\n    else\n        return null; } function _string(object) { ; if (typeof object !== \"string\")\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected a string\", path: path.slice(), reason: { type: \"string\" } };\n    else\n        return null; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an array\", path: path.slice(), reason: { type: \"array\" } }; for (let i = 0; i < object.length; i++) {\n        path.push(\"[\" + i + \"]\");\n        var error = _string(object[i]);\n        path.pop();\n        if (error)\n            return error;\n    } return null; } function _121(object) { ; if (typeof object !== \"object\" || object === null || Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an object\", path: path.slice(), reason: { type: \"object\" } }; {\n        if (\"size\" in object) {\n            path.push(\"size\");\n            var error = _number(object[\"size\"]);\n            path.pop();\n            if (error)\n                return error;\n        }\n        else\n            return { message: \"validation failed at \" + path.join(\".\") + \": expected 'size' in object\", path: path.slice(), reason: { type: \"missing-property\", property: \"size\" } };\n    } {\n        if (\"count\" in object) {\n            path.push(\"count\");\n            var error = _number(object[\"count\"]);\n            path.pop();\n            if (error)\n                return error;\n        }\n        else\n            return { message: \"validation failed at \" + path.join(\".\") + \": expected 'count' in object\", path: path.slice(), reason: { type: \"missing-property\", property: \"count\" } };\n    } {\n        if (\"fields\" in object) {\n            path.push(\"fields\");\n            var error = sa__string_ea_11(object[\"fields\"]);\n            path.pop();\n            if (error)\n                return error;\n        }\n        else\n            return { message: \"validation failed at \" + path.join(\".\") + \": expected 'fields' in object\", path: path.slice(), reason: { type: \"missing-property\", property: \"fields\" } };\n    } return null; } function su__string_sa__string_ea_11_11_11_eu(object) { var conditions = [_string, sa__string_ea_11]; for (const condition of conditions) {\n        var error = condition(object);\n        if (!error)\n            return null;\n    } return { message: \"validation failed at \" + path.join(\".\") + \": there are no valid alternatives\", path: path.slice(), reason: { type: \"union\" } }; } function _81(object) { ; if (typeof object !== \"object\" || object === null || Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an object\", path: path.slice(), reason: { type: \"object\" } }; for (const key of Object.keys(object)) {\n        path.push(key);\n        var error = su__string_sa__string_ea_11_11_11_eu(object[key]);\n        path.pop();\n        if (error)\n            return error;\n    } return null; } function sa__81_ea_81(object) { ; if (!Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an array\", path: path.slice(), reason: { type: \"array\" } }; for (let i = 0; i < object.length; i++) {\n        path.push(\"[\" + i + \"]\");\n        var error = _81(object[i]);\n        path.pop();\n        if (error)\n            return error;\n    } return null; } function _120(object) { ; if (typeof object !== \"object\" || object === null || Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an object\", path: path.slice(), reason: { type: \"object\" } }; {\n        if (\"meta\" in object) {\n            path.push(\"meta\");\n            var error = _121(object[\"meta\"]);\n            path.pop();\n            if (error)\n                return error;\n        }\n        else\n            return { message: \"validation failed at \" + path.join(\".\") + \": expected 'meta' in object\", path: path.slice(), reason: { type: \"missing-property\", property: \"meta\" } };\n    } {\n        if (\"index\" in object) {\n            path.push(\"index\");\n            var error = sa__81_ea_81(object[\"index\"]);\n            path.pop();\n            if (error)\n                return error;\n        }\n        else\n            return { message: \"validation failed at \" + path.join(\".\") + \": expected 'index' in object\", path: path.slice(), reason: { type: \"missing-property\", property: \"index\" } };\n    } return null; } var error = _120(object); return error; });\n    if (isManifest)\n        return true;\n    console.log('meta');\n    console.log('size', typescript_is_1.is(value.meta.size, object => { var path = [\"$\"]; function _number(object) { ; if (typeof object !== \"number\")\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected a number\", path: path.slice(), reason: { type: \"number\" } };\n    else\n        return null; } var error = _number(object); return error; }));\n    console.log('count', typescript_is_1.is(value.meta.count, object => { var path = [\"$\"]; function _number(object) { ; if (typeof object !== \"number\")\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected a number\", path: path.slice(), reason: { type: \"number\" } };\n    else\n        return null; } var error = _number(object); return error; }));\n    console.log('fields', typescript_is_1.is(value.meta.fields, object => { var path = [\"$\"]; function _string(object) { ; if (typeof object !== \"string\")\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected a string\", path: path.slice(), reason: { type: \"string\" } };\n    else\n        return null; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an array\", path: path.slice(), reason: { type: \"array\" } }; for (let i = 0; i < object.length; i++) {\n        path.push(\"[\" + i + \"]\");\n        var error = _string(object[i]);\n        path.pop();\n        if (error)\n            return error;\n    } return null; } var error = sa__string_ea_11(object); return error; }));\n    console.log('index', typescript_is_1.is(value.index, object => { var path = [\"$\"]; function _string(object) { ; if (typeof object !== \"string\")\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected a string\", path: path.slice(), reason: { type: \"string\" } };\n    else\n        return null; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an array\", path: path.slice(), reason: { type: \"array\" } }; for (let i = 0; i < object.length; i++) {\n        path.push(\"[\" + i + \"]\");\n        var error = _string(object[i]);\n        path.pop();\n        if (error)\n            return error;\n    } return null; } function su__string_sa__string_ea_11_11_11_eu(object) { var conditions = [_string, sa__string_ea_11]; for (const condition of conditions) {\n        var error = condition(object);\n        if (!error)\n            return null;\n    } return { message: \"validation failed at \" + path.join(\".\") + \": there are no valid alternatives\", path: path.slice(), reason: { type: \"union\" } }; } function _81(object) { ; if (typeof object !== \"object\" || object === null || Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an object\", path: path.slice(), reason: { type: \"object\" } }; for (const key of Object.keys(object)) {\n        path.push(key);\n        var error = su__string_sa__string_ea_11_11_11_eu(object[key]);\n        path.pop();\n        if (error)\n            return error;\n    } return null; } function sa__81_ea_81(object) { ; if (!Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an array\", path: path.slice(), reason: { type: \"array\" } }; for (let i = 0; i < object.length; i++) {\n        path.push(\"[\" + i + \"]\");\n        var error = _81(object[i]);\n        path.pop();\n        if (error)\n            return error;\n    } return null; } var error = sa__81_ea_81(object); return error; }));\n    if (!typescript_is_1.is(value.index, object => { var path = [\"$\"]; function _string(object) { ; if (typeof object !== \"string\")\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected a string\", path: path.slice(), reason: { type: \"string\" } };\n    else\n        return null; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an array\", path: path.slice(), reason: { type: \"array\" } }; for (let i = 0; i < object.length; i++) {\n        path.push(\"[\" + i + \"]\");\n        var error = _string(object[i]);\n        path.pop();\n        if (error)\n            return error;\n    } return null; } function su__string_sa__string_ea_11_11_11_eu(object) { var conditions = [_string, sa__string_ea_11]; for (const condition of conditions) {\n        var error = condition(object);\n        if (!error)\n            return null;\n    } return { message: \"validation failed at \" + path.join(\".\") + \": there are no valid alternatives\", path: path.slice(), reason: { type: \"union\" } }; } function _81(object) { ; if (typeof object !== \"object\" || object === null || Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an object\", path: path.slice(), reason: { type: \"object\" } }; for (const key of Object.keys(object)) {\n        path.push(key);\n        var error = su__string_sa__string_ea_11_11_11_eu(object[key]);\n        path.pop();\n        if (error)\n            return error;\n    } return null; } function sa__81_ea_81(object) { ; if (!Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an array\", path: path.slice(), reason: { type: \"array\" } }; for (let i = 0; i < object.length; i++) {\n        path.push(\"[\" + i + \"]\");\n        var error = _81(object[i]);\n        path.pop();\n        if (error)\n            return error;\n    } return null; } var error = sa__81_ea_81(object); return error; })) {\n        value.index.forEach((i) => {\n            if (typescript_is_1.is(i, object => { var path = [\"$\"]; function _string(object) { ; if (typeof object !== \"string\")\n                return { message: \"validation failed at \" + path.join(\".\") + \": expected a string\", path: path.slice(), reason: { type: \"string\" } };\n            else\n                return null; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))\n                return { message: \"validation failed at \" + path.join(\".\") + \": expected an array\", path: path.slice(), reason: { type: \"array\" } }; for (let i = 0; i < object.length; i++) {\n                path.push(\"[\" + i + \"]\");\n                var error = _string(object[i]);\n                path.pop();\n                if (error)\n                    return error;\n            } return null; } function su__string_sa__string_ea_11_11_11_eu(object) { var conditions = [_string, sa__string_ea_11]; for (const condition of conditions) {\n                var error = condition(object);\n                if (!error)\n                    return null;\n            } return { message: \"validation failed at \" + path.join(\".\") + \": there are no valid alternatives\", path: path.slice(), reason: { type: \"union\" } }; } function _81(object) { ; if (typeof object !== \"object\" || object === null || Array.isArray(object))\n                return { message: \"validation failed at \" + path.join(\".\") + \": expected an object\", path: path.slice(), reason: { type: \"object\" } }; for (const key of Object.keys(object)) {\n                path.push(key);\n                var error = su__string_sa__string_ea_11_11_11_eu(object[key]);\n                path.pop();\n                if (error)\n                    return error;\n            } return null; } var error = _81(object); return error; }))\n                return;\n            console.log(i.path);\n            Object.entries(i).forEach(([k, v]) => {\n                if (typescript_is_1.is(v, object => { var path = [\"$\"]; function _string(object) { ; if (typeof object !== \"string\")\n                    return { message: \"validation failed at \" + path.join(\".\") + \": expected a string\", path: path.slice(), reason: { type: \"string\" } };\n                else\n                    return null; } var error = _string(object); return error; }))\n                    return;\n                if (typescript_is_1.is(v, object => { var path = [\"$\"]; function _string(object) { ; if (typeof object !== \"string\")\n                    return { message: \"validation failed at \" + path.join(\".\") + \": expected a string\", path: path.slice(), reason: { type: \"string\" } };\n                else\n                    return null; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))\n                    return { message: \"validation failed at \" + path.join(\".\") + \": expected an array\", path: path.slice(), reason: { type: \"array\" } }; for (let i = 0; i < object.length; i++) {\n                    path.push(\"[\" + i + \"]\");\n                    var error = _string(object[i]);\n                    path.pop();\n                    if (error)\n                        return error;\n                } return null; } var error = sa__string_ea_11(object); return error; }))\n                    return;\n                console.log(k, v);\n            });\n        });\n    }\n    return false;\n}\nexports.isManifest = isManifest;\nfunction isConfig(value) {\n    return typescript_is_1.is(value, object => { var path = [\"$\"]; function _string(object) { ; if (typeof object !== \"string\")\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected a string\", path: path.slice(), reason: { type: \"string\" } };\n    else\n        return null; } function _boolean(object) { ; if (typeof object !== \"boolean\")\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected a boolean\", path: path.slice(), reason: { type: \"boolean\" } };\n    else\n        return null; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an array\", path: path.slice(), reason: { type: \"array\" } }; for (let i = 0; i < object.length; i++) {\n        path.push(\"[\" + i + \"]\");\n        var error = _string(object[i]);\n        path.pop();\n        if (error)\n            return error;\n    } return null; } function _298(object) { ; if (typeof object !== \"object\" || object === null || Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an object\", path: path.slice(), reason: { type: \"object\" } }; for (const key of Object.keys(object)) {\n        path.push(key);\n        var error = sa__string_ea_11(object[key]);\n        path.pop();\n        if (error)\n            return error;\n    } return null; } function _78(object) { ; if (typeof object !== \"object\" || object === null || Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an object\", path: path.slice(), reason: { type: \"object\" } }; {\n        if (\"root\" in object) {\n            path.push(\"root\");\n            var error = _string(object[\"root\"]);\n            path.pop();\n            if (error)\n                return error;\n        }\n        else\n            return { message: \"validation failed at \" + path.join(\".\") + \": expected 'root' in object\", path: path.slice(), reason: { type: \"missing-property\", property: \"root\" } };\n    } {\n        if (\"pretty\" in object) {\n            path.push(\"pretty\");\n            var error = _boolean(object[\"pretty\"]);\n            path.pop();\n            if (error)\n                return error;\n        }\n        else\n            return { message: \"validation failed at \" + path.join(\".\") + \": expected 'pretty' in object\", path: path.slice(), reason: { type: \"missing-property\", property: \"pretty\" } };\n    } {\n        if (\"fileFilters\" in object) {\n            path.push(\"fileFilters\");\n            var error = sa__string_ea_11(object[\"fileFilters\"]);\n            path.pop();\n            if (error)\n                return error;\n        }\n        else\n            return { message: \"validation failed at \" + path.join(\".\") + \": expected 'fileFilters' in object\", path: path.slice(), reason: { type: \"missing-property\", property: \"fileFilters\" } };\n    } {\n        if (\"dirFilters\" in object) {\n            path.push(\"dirFilters\");\n            var error = sa__string_ea_11(object[\"dirFilters\"]);\n            path.pop();\n            if (error)\n                return error;\n        }\n        else\n            return { message: \"validation failed at \" + path.join(\".\") + \": expected 'dirFilters' in object\", path: path.slice(), reason: { type: \"missing-property\", property: \"dirFilters\" } };\n    } {\n        if (\"fields\" in object) {\n            path.push(\"fields\");\n            var error = _298(object[\"fields\"]);\n            path.pop();\n            if (error)\n                return error;\n        }\n        else\n            return { message: \"validation failed at \" + path.join(\".\") + \": expected 'fields' in object\", path: path.slice(), reason: { type: \"missing-property\", property: \"fields\" } };\n    } return null; } var error = _78(object); return error; });\n}\nexports.isConfig = isConfig;\nfunction isFields(value) {\n    return typescript_is_1.is(value, object => { var path = [\"$\"]; function _string(object) { ; if (typeof object !== \"string\")\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected a string\", path: path.slice(), reason: { type: \"string\" } };\n    else\n        return null; } function sa__string_ea_11(object) { ; if (!Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an array\", path: path.slice(), reason: { type: \"array\" } }; for (let i = 0; i < object.length; i++) {\n        path.push(\"[\" + i + \"]\");\n        var error = _string(object[i]);\n        path.pop();\n        if (error)\n            return error;\n    } return null; } function _298(object) { ; if (typeof object !== \"object\" || object === null || Array.isArray(object))\n        return { message: \"validation failed at \" + path.join(\".\") + \": expected an object\", path: path.slice(), reason: { type: \"object\" } }; for (const key of Object.keys(object)) {\n        path.push(key);\n        var error = sa__string_ea_11(object[key]);\n        path.pop();\n        if (error)\n            return error;\n    } return null; } var error = _298(object); return error; });\n}\nexports.isFields = isFields;\n\n\n//# sourceURL=webpack:///./src/types/typeGuards.ts?");

/***/ }),

/***/ "commander":
/*!****************************!*\
  !*** external "commander" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"commander\");\n\n//# sourceURL=webpack:///external_%22commander%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gray-matter\");\n\n//# sourceURL=webpack:///external_%22gray-matter%22?");

/***/ }),

/***/ "hjson":
/*!************************!*\
  !*** external "hjson" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hjson\");\n\n//# sourceURL=webpack:///external_%22hjson%22?");

/***/ }),

/***/ "json5":
/*!************************!*\
  !*** external "json5" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"json5\");\n\n//# sourceURL=webpack:///external_%22json5%22?");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"marked\");\n\n//# sourceURL=webpack:///external_%22marked%22?");

/***/ }),

/***/ "multimatch":
/*!*****************************!*\
  !*** external "multimatch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multimatch\");\n\n//# sourceURL=webpack:///external_%22multimatch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "title-case":
/*!*****************************!*\
  !*** external "title-case" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"title-case\");\n\n//# sourceURL=webpack:///external_%22title-case%22?");

/***/ }),

/***/ "typescript-is":
/*!********************************!*\
  !*** external "typescript-is" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"typescript-is\");\n\n//# sourceURL=webpack:///external_%22typescript-is%22?");

/***/ }),

/***/ "yaml":
/*!***********************!*\
  !*** external "yaml" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"yaml\");\n\n//# sourceURL=webpack:///external_%22yaml%22?");

/***/ })

/******/ });