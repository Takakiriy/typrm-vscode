"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    let disposable = vscode.commands.registerCommand('typrm.paste', async (textEditor, edit) => {
        const clipboardText = await vscode.env.clipboard.readText();
        const editor = vscode.window.activeTextEditor;
        const workspaceEdit = new vscode.WorkspaceEdit();
        const pasteText = clipboardText
            .replace(/#keyword:/g, '#search:')
            .replace(/\/home\/[^/]+\//g, '~/');
        workspaceEdit.replace(editor.document.uri, editor.selection, pasteText);
        await vscode.workspace.applyEdit(workspaceEdit);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map