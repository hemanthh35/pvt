"use client";
import { useState } from "react";
// import axios from "axios"; // Note: axios not available in this environment
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { Play, Code, Terminal, Sparkles } from "lucide-react";

export default function Home() {
  const [code, setCode] = useState("print(\"Hello World\")");
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runCode = async () => {
    try {
      setLoading(true);
      // Simulate API call - replace with actual axios call in your environment
      const response = await fetch("http://localhost:8000/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language })
      });
      const data = await response.json();
      setOutput(data.output || data.error);
    } catch (err) {
      setOutput("❌ Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.4),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.4),rgba(255,255,255,0))]"></div>
      
      <main className="relative z-10 p-6 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Code Judge
            </h1>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Professional code editor with instant execution. Write, run, and debug your code in a beautiful environment.
          </p>
        </div>

        {/* Main Editor Card */}
        <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between p-4 bg-slate-800/80 border-b border-slate-700/50">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Code className="w-4 h-4" />
                  <span className="text-sm font-medium">main.{language === 'python' ? 'py' : 'js'}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-48 bg-slate-700/50 text-white border-slate-600/50 hover:bg-slate-600/50 transition-colors">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 text-white border-slate-700">
                    <SelectItem value="python" className="hover:bg-slate-700">
                      <div className="flex items-center gap-2">
                        <span>🐍</span>
                        <span>Python</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="javascript" className="hover:bg-slate-700">
                      <div className="flex items-center gap-2">
                        <span>🟨</span>
                        <span>JavaScript</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                
                <Button
                  onClick={runCode}
                  disabled={loading}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Running...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      <span>Run Code</span>
                    </div>
                  )}
                </Button>
              </div>
            </div>

            {/* Code Editor */}
            <div className="relative">
              <div className="h-[500px] border-b border-slate-700/50">
                <Editor
                  height="100%"
                  defaultLanguage="python"
                  language={language}
                  theme="vs-dark"
                  value={code}
                  onChange={(val) => setCode(val || "")}
                  options={{
                    fontSize: 16,
                    lineHeight: 1.6,
                    minimap: { enabled: false },
                    automaticLayout: true,
                    scrollBeyondLastLine: false,
                    wordWrap: "on",
                    fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
                    fontLigatures: true,
                    renderWhitespace: "selection",
                    cursorBlinking: "smooth",
                    cursorSmoothCaretAnimation: "on",
                    smoothScrolling: true,
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Output Section */}
        <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 p-4 bg-slate-800/80 border-b border-slate-700/50">
              <Terminal className="w-5 h-5 text-green-400" />
              <h2 className="font-semibold text-lg text-white">Output</h2>
              <div className="flex-1"></div>
              <div className="text-sm text-slate-400">
                {output && !loading && "✓ Execution completed"}
              </div>
            </div>
            
            <div className="p-6">
              <div className="bg-slate-900/80 rounded-lg border border-slate-700/50 overflow-hidden">
                <pre className="text-green-400 p-6 text-sm overflow-x-auto font-mono leading-relaxed min-h-[120px]">
                  {output || (
                    <span className="text-slate-500 italic">
                      Your output will appear here...
                      {"\n"}
                      Click "Run Code" to execute your program.
                    </span>
                  )}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-slate-400 text-sm">
            Built with ❤️ using Monaco Editor • Secure code execution environment
          </p>
        </div>
      </main>
    </div>
  );
}