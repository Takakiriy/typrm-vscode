// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('typrm.paste', async (textEditor, edit) => {
		const clipboardText = await vscode.env.clipboard.readText();
		const pasteText = clipboardText.replace(/#keyword:/g, '#search:');
		const editor = vscode.window.activeTextEditor!;
		const workspaceEdit = new vscode.WorkspaceEdit();

		workspaceEdit.replace(editor.document.uri, editor.selection, pasteText);
		await vscode.workspace.applyEdit(workspaceEdit);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
