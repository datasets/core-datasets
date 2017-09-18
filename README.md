Core data registry and tooling.

## Registry

Registry is maintained as [Tabular Data Package][tdp] with list of datasets in core-list.csv.

[tdp]: http://frictionlessdata.io/guides/tabular-data-package/

To add a dataset add it to the `core-list.csv` - we recommend fork and pull.

Discussion of proposals for new datasets and for incorporation of prepared datasets takes place in the [issues][].

To **propose a new dataset for inclusion**, please create a [new issue](https://github.com/datasets/registry/issues/new).

[issues]: https://github.com/datasets/registry/issues

## Tooling

### Installation

``` 
$ npm install
```

### Usage

```
node index.js [COMMAND]
```

#### Normalize datasets

To normalize all core datasets run the following command:

`npm index.js norm`

It will normalize all core datasets into following directory: `data/${pkg_name}`

#### Clone datasets

To clone all core datasets run the following command:

`npm index.js clone`

It will clone all core datasets into following directory: `data/${pkg_name}`

#### Check datasets

To check all core datasets run the following command:

`npm index.js check`

It will validate metadata and data according to the latest spec. 

#### Push datasets

To publish all core data packages run the following command:

`npm index.js push`

### Running tests

We use Ava for our tests. For running tests use:

```
$ [sudo] npm test
```

To run tests in watch mode:

```
$ [sudo] npm run watch:test
```

### Lint

We use XO for checking our code for JS standard/convention/style:

```bash
# When you run tests, it first runs lint:
$ npm test

# To run lint separately:
$ npm run lint # shows errors only

# Fixing erros automatically:
$ xo --fix
```

