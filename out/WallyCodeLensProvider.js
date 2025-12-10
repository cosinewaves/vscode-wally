"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WallyCodeLensProvider = void 0;
const vscode = __importStar(require("vscode"));
class WallyCodeLensProvider {
    onDidChangeEmitter = new vscode.EventEmitter();
    onDidChangeCodeLenses = this.onDidChangeEmitter.event;
    provideCodeLenses(document) {
        console.log("Wally CodeLens provider running");
        const lenses = [];
        const text = document.getText();
        const lines = text.split(/\r?\n/);
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim() === "[dependencies]") {
                const position = new vscode.Position(i, 0);
                const range = new vscode.Range(position, position);
                lenses.push(new vscode.CodeLens(range, {
                    title: "Install",
                    command: "wally.install",
                    arguments: [document.uri]
                }));
            }
        }
        return lenses;
    }
}
exports.WallyCodeLensProvider = WallyCodeLensProvider;
//# sourceMappingURL=WallyCodeLensProvider.js.map