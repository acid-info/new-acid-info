# Acid.Info

## Test pages

- `next-mdx-remote` test page: '/'
- `@next/mdx` test page: '/test'

## How to Run Locally

1. Clone this repository

```bash
$ git clone https://github.com/acid-info/acid.info.git
```

2. Install the dependencies:

```bash
$ yarn install
```

3. Set .env

- Get Github Personal Access Token at [https://github.com/settings/tokens/new?scopes=repo](https://github.com/settings/tokens/new?scopes=repo)

```
NEXT_PUBLIC_SITE_URL=
NEXT_GITHUB_PERSONAL_ACCESS_TOKEN=
```

4. Start the development server:

```bash
$ yarn dev
```

4. Visit `http://localhost:3000` in your browser

## How to Run a Build (Production Build)

1. Generate files for production:

```bash
$ yarn build
```

The files will be created in the `build` directory.

2. Serve the build:

```bash
$ yarn start
```

4. Visit `http://localhost:3000` in your browser.

Keep in mind this webpage rebuilds itself at runtime.

## CI/CD

- The `master` branch is deployed via [CI](https://ci.infra.status.im/job/website/job/new-acid-info.vercel.app/) to https://new-acid-info.vercel.app/.
- The `develop` branch is deployed via [CI](https://ci.infra.status.im/job/website/job/dev.new-acid-info.vercel.app/) to https://dev.new-acid-info.vercel.app/.

## Change Process

1. Create a new working branch from `develop`: `git checkout develop; git checkout -b my-changes`.

2. Make your changes, push them to the `origin`, and open a Pull Request against the `develop` branch.

3. After approval, merge the pull request, and verify the changes on the staging server (https://dev.logos.co/).

4. When ready to promote changes to the live website, create a pull request against the "master" branch, based on the "develop" branch.
