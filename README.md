# Prettier Plugin for Sorting HTML Attributes in Astro Files

A **Prettier plugin** that **automatically sorts HTML attributes alphabetically** in `.astro` files to ensure clean, consistent code formatting.

## Installation

### 1. Install Prettier

If you haven’t already, install Prettier in your project:

- Run `npm install --save-dev prettier`.

### 2. Install the Plugin

Install the `prettier-plugin-astro-attributes` plugin:

- Run `npm install --save-dev prettier-plugin-astro-attributes`.

### 3. Configure Prettier

In your `.prettierrc` or `prettier.config.js` file, add the plugin:

- Add the following configuration to your Prettier setup:

```json
{
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ],
  "plugins": ["prettier-plugin-astro-attributes"]
}
```

> **Note:** This plugin extends the official [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro) parser. It is designed to work **only** with the official Astro plugin. It is not compatible with other Astro formatting plugins such as `prettier-plugin-tailwindcss`. If you have any Tailwind-related Prettier plugins installed, please remove them to avoid conflicts.

## Usage

Once installed and configured, run Prettier to format your `.astro` files:

- Run `npx prettier --write .`

The plugin will automatically sort **HTML attributes** in your `.astro` files alphabetically, ensuring consistent and readable code.

## Features

- **Alphabetical Sorting:**  
  Sorts attributes in HTML tags (such as `<meta>`, `<link>`, etc.) alphabetically by attribute name.

- **Easy Integration:**  
  Works seamlessly with **Prettier** when used in combination with the official Astro plugin.

- **Supports `.astro` Files:**  
  Specifically designed for **Astro projects**.

## Benefits

- **Consistency:**  
  Enforces a consistent style for attribute ordering across your Astro files.

- **Cleaner Code:**  
  Improves the readability and maintainability of your `.astro` templates.

- **Time-Saving:**  
  Automates the formatting process, reducing manual code adjustments.

## Compatibility Notice

This plugin extends the official [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro) to sort HTML attributes. It is **only compatible** with the official Astro plugin. If you use other plugins (e.g. `prettier-plugin-tailwindcss`), this plugin may not work as expected.

If you discover a solution that allows compatibility with Tailwind or other plugins, please open an issue or submit a pull request. Your help is appreciated!

## Contributing

Feel free to open an issue or pull request if you have suggestions, bug reports, or improvements. We welcome contributions!

## License

This project is licensed under the [MIT License](./LICENSE).
