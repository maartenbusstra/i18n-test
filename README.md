# Translations

To reduce duplication, the current draft has a tree structure, where translations in a specific node in the tree are built up from translations in that node and all its parents. Example:

`i18n/app/mobile/ios` should merge:

- `i18n`
- `i18n/app`
- `i18n/app/mobile`
- `i18n/app/mobile/ios`

`i18n/app/web` should merge:

- `i18n`
- `i18n/app`
- `i18n/app/web`

Projects in POEditor should be named clearly to express this intent.

To prevent cross-node duplicates, we could opt for generating (part of) the translation ID automatically, meaning if a translation is in `i18n/app/web`, it could be automatically namespaced: `app.web.foo`.

We can then easily traverse the tree and deploy the result of processing all nodes as endpoints:

- `translations.greenwheels.com`
- `translations.greenwheels.com/app`
- `translations.greenwheels.com/app/web`
- `translations.greenwheels.com/app/mobile`
- `translations.greenwheels.com/app/mobile/ios`
- etc.

In CI we will unit test if all locales contain all necessary translations, with english as the base language.

We can also add another override mechanism for localization:

- `i18n/app/web/en.json`
- `i18n/app/web/en-NL.json` <-- only contains NL specific strings
- `i18n/app/web/en-DE.json` <-- only contains DE specific strings
