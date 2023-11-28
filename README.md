[日本語 README](./README-jp.md)

# typrm extensions

typrm extensions for Visual Studio Code.

## Features

[typrm](https://github.com/Takakiriy/typrm/) searches and displays for your favorite document text file and your useful snippets. It also replaces the command parameters to fit your current status. You can execute the command just by copy and paste the displayed command.

![typrm](https://raw.githubusercontent.com/Takakiriy/typrm/master/example/figure_1.png)

## Search Tag Paste Command

`typrm: Paste Search Tag` command pastes a text replaced from `#keyword:` typrm tag in the clipboard to `#search:` typrm tag.

### Example

If you copy the following text:

        Example: #keyword: typrm Example

`typrm: Paste Search Tag` command pastes the following text:

        Example: #search: typrm Example

Recommended keybinding is `Shift + Ctrl + V`.

## Release Notes

### 0.0.1

Initial release of search tag paste command.
