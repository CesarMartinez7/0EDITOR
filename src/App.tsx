import './App.css'
import CodeEditor from "./ui/code-editor/code-editor"

function App() {

  return (
    <main className="flex min-h-screen w-screen items-center justify-center font-mono bg-gradient-to-r from-neutral-900 to-neutral-800">
      <CodeEditor
      classNameContainer='w-[1000px]'
      maxHeight="400px"
      minHeight="200px"
      height="700px"
      language="xml"
      value="<goku></goku>"
      />
    </main>
  )
}

export default App
