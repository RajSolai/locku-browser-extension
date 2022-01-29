# Locku

A Simple browser extension for password management.

## Why another Password manager ?

Simple Answer, Because I needed one :).

Lengthy one, I use Epiphany browser on *daily basis* but most of password manager makers don't have one hence I made one for myself.

EXP++

## How the Passwords are saved

![locku password management extension]()

## Where is the Backend ?

The extension uses Cloud Functions as backend, each actions is managed by each function as events.

[Read More about cloud functions]()

## Supported Browsers

- [Chorme]()
- [Firefox]()
- [Safari]()
- [Gnome Web (Epiphany)]()

## How to Install

### Chrome Users

### Firefox Users

### Epiphany Users

## Build it yourself :)

1. Clone the Source code
```bash
git clone https://github.com/RajSolai/locku-browser-extension.git
```
2. Build the React App

```bash
cd locku-browser-extension
```
### Using npm
```bash
npm install && npm run build
```
### Using yarn
```bash
yarn && yarn build
```
3. Bundle the build files as Extension

```bash
cd build
zip locku.xpi *
```
4. Install the xpi files into browsers
