import * as vscode from 'vscode';

export class WallyCodeLensProvider implements vscode.CodeLensProvider {
  private onDidChangeEmitter = new vscode.EventEmitter<void>();
  readonly onDidChangeCodeLenses = this.onDidChangeEmitter.event;

  provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
    const lenses: vscode.CodeLens[] = [];

    const text = document.getText();
    const lines = text.split(/\r?\n/);

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === "[dependencies]") {
        const position = new vscode.Position(i, 0);
        const range = new vscode.Range(position, position);

        lenses.push(
          new vscode.CodeLens(range, {
            title: "Install Dependencies",
            command: "wally.install",
            arguments: [document.uri]
          })
        );
      }
    }

    return lenses;
  }
}