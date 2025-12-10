import * as vscode from 'vscode';
import { WallyCodeLensProvider } from './WallyCodeLensProvider';

export function activate(context: vscode.ExtensionContext) {
  const selector = { language: 'toml', pattern: '**/wally.toml' };

  // add a code lens provider
  context.subscriptions.push(
    vscode.languages.registerCodeLensProvider(
      selector,
      new WallyCodeLensProvider()
    )
  );

  // register a command to allow the code lens button to work in files
  context.subscriptions.push(
    vscode.commands.registerCommand("wally.install", async (uri: vscode.Uri) => {
      const terminal = vscode.window.createTerminal("vscode-wally");
      terminal.show();
      terminal.sendText("wally install");
    })
  );
}