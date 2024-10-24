<a href="https://datahub.io/core/core-datasets"><img src="https://badgen.net/badge/icon/View%20on%20datahub.io/orange?icon=https://datahub.io/datahub-cube-badge-icon.svg&label&scale=1.25)" alt="badge" /></a>

Core data registry and tooling.

## Registry

Registry is maintained as [Tabular Data Package][tdp] with list of datasets in core-list.csv.

[tdp]: http://frictionlessdata.io/guides/tabular-data-package/

To add a dataset add it to the `core-list.csv` - we recommend fork and pull.

Discussion of proposals for new datasets and for incorporation of prepared datasets takes place in the [issues][].

To **propose a new dataset for inclusion**, please create a [new issue](https://github.com/datasets/registry/issues/new).

[issues]: https://github.com/datasets/registry/issues

## Core Dataset Tools

### Installation

``` 
$ npm install
```

### Usage

* Environmental variables

`DOMAIN` - testing or production environment. For example: https://datahub.io
`TYPE` - type of dataset. For example: examples or core

```
node index.js [COMMAND] [PATH]

# PATH - path to csv file
```

#### Clone datasets

To clone all core datasets run the following command:

`node index.js clone [PATH]`

It will clone all core datasets into following directory: `data/${pkg_name}`

#### Check datasets

To check all core datasets run the following command:

`node index.js check [PATH]`

It will validate metadata and data according to the latest spec. 

#### Normalize datasets

To normalize all core datasets run the following command:

`node index.js norm [PATH]`

It will normalize all core datasets into following directory: `data/${pkg_name}`

#### Push datasets

To publish all core data packages run the following command:

`node index.js push [PATH]`

### Running tests

We use Ava for our tests. For running tests use:

```
$ [sudo] npm test
```

To run tests in watch mode:

```
$ [sudo] npm run watch:test
```
