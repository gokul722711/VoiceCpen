function generateCodeSnippet(intent, language, name) {
    let codeSnippet = '';

    switch (intent) {
        case 'code.createVariable':
            if (language === 'javascript') codeSnippet = `let ${name} = value;`;
            else if (language === 'python') codeSnippet = `${name} = value`;
            else if (language === 'java') codeSnippet = `int ${name} = value;`;
            else if (language === 'cpp') codeSnippet = `int ${name} = value;`;
            else if (language === 'ruby') codeSnippet = `${name} = value`;
            else if (language === 'php') codeSnippet = `$${name} = value;`;
            else if (language === 'go') codeSnippet = `var ${name} = value`;
            else if (language === 'typescript') codeSnippet = `let ${name}: type = value;`;
            else if (language === 'swift') codeSnippet = `var ${name} = value`;
            break;

        case 'code.defineFunction':
            if (language === 'javascript') codeSnippet = `function ${name}() {\n    // code here\n}`;
            else if (language === 'python') codeSnippet = `def ${name}():\n    # code here`;
            else if (language === 'java') codeSnippet = `public void ${name}() {\n    // code here\n}`;
            else if (language === 'cpp') codeSnippet = `void ${name}() {\n    // code here\n}`;
            else if (language === 'ruby') codeSnippet = `def ${name}\n    # code here\nend`;
            else if (language === 'php') codeSnippet = `function ${name}() {\n    // code here\n}`;
            else if (language === 'go') codeSnippet = `func ${name}() {\n    // code here\n}`;
            else if (language === 'typescript') codeSnippet = `function ${name}(): void {\n    // code here\n}`;
            else if (language === 'swift') codeSnippet = `func ${name}() {\n    // code here\n}`;
            break;

        case 'code.addComment':
            if (language === 'javascript' || language === 'java' || language === 'cpp') 
                codeSnippet = `// This is a comment`;
            else if (language === 'python' || language === 'ruby') 
                codeSnippet = `# This is a comment`;
            else if (language === 'php') 
                codeSnippet = `/* This is a comment */`;
            else if (language === 'go') 
                codeSnippet = `// This is a comment`;
            else if (language === 'typescript') 
                codeSnippet = `// This is a comment`;
            else if (language === 'swift') 
                codeSnippet = `// This is a comment`;
            break;

        case 'code.importLibrary':
            if (language === 'javascript') codeSnippet = `import ${name} from '${name}';`;
            else if (language === 'python') codeSnippet = `import ${name}`;
            else if (language === 'java') codeSnippet = `import ${name}.*;`;
            else if (language === 'cpp') codeSnippet = `#include <${name}>`;
            else if (language === 'ruby') codeSnippet = `require '${name}'`;
            else if (language === 'php') codeSnippet = `require '${name}.php';`;
            else if (language === 'go') codeSnippet = `import "${name}"`;
            else if (language === 'typescript') codeSnippet = `import { ${name} } from '${name}';`;
            else if (language === 'swift') codeSnippet = `import ${name}`;
            break;

        case 'code.writeLoop':
            if (language === 'javascript') codeSnippet = `for (let i = 0; i < n; i++) {\n    // code here\n}`;
            else if (language === 'python') codeSnippet = `for i in range(n):\n    # code here`;
            else if (language === 'java') codeSnippet = `for (int i = 0; i < n; i++) {\n    // code here\n}`;
            else if (language === 'cpp') codeSnippet = `for (int i = 0; i < n; i++) {\n    // code here\n}`;
            else if (language === 'ruby') codeSnippet = `for i in 0...n do\n    # code here\nend`;
            else if (language === 'php') codeSnippet = `for ($i = 0; $i < $n; $i++) {\n    // code here\n}`;
            else if (language === 'go') codeSnippet = `for i := 0; i < n; i++ {\n    // code here\n}`;
            else if (language === 'typescript') codeSnippet = `for (let i = 0; i < n; i++) {\n    // code here\n}`;
            else if (language === 'swift') codeSnippet = `for i in 0..<n {\n    // code here\n}`;
            break;

        case 'code.setValue':
            if (language === 'javascript') codeSnippet = `${name} = value;`;
            else if (language === 'python') codeSnippet = `${name} = value`;
            else if (language === 'java') codeSnippet = `${name} = value;`;
            else if (language === 'cpp') codeSnippet = `${name} = value;`;
            else if (language === 'ruby') codeSnippet = `${name} = value`;
            else if (language === 'php') codeSnippet = `${name} = value;`;
            else if (language === 'go') codeSnippet = `${name} = value`;
            else if (language === 'typescript') codeSnippet = `${name} = value;`;
            else if (language === 'swift') codeSnippet = `${name} = value`;
            break;

        case 'code.initializeArray':
            if (language === 'javascript') codeSnippet = `let ${name} = [];`;
            else if (language === 'python') codeSnippet = `list = []`;
            else if (language === 'java') codeSnippet = `int[] ${name} = new int[size];`;
            else if (language === 'cpp') codeSnippet = `int ${name}[size];`;
            else if (language === 'ruby') codeSnippet = `array = []`;
            else if (language === 'php') codeSnippet = `$${name} = array();`;
            else if (language === 'go') codeSnippet = `var ${name} = []Type{}`;
            else if (language === 'typescript') codeSnippet = `let ${name}: Type[] = [];`;
            else if (language === 'swift') codeSnippet = `var ${name}: [Type] = []`;
            break;

        case 'code.printMessage':
            if (language === 'javascript') codeSnippet = `console.log('Message');`;
            else if (language === 'python') codeSnippet = `print('Message')`;
            else if (language === 'java') codeSnippet = `System.out.println("Message");`;
            else if (language === 'cpp') codeSnippet = `std::cout << "Message" << std::endl;`;
            else if (language === 'ruby') codeSnippet = `puts 'Message'`;
            else if (language === 'php') codeSnippet = `echo "Message";`;
            else if (language === 'go') codeSnippet = `fmt.Println("Message")`;
            else if (language === 'typescript') codeSnippet = `console.log('Message');`;
            else if (language === 'swift') codeSnippet = `print("Message")`;
            break;

        case 'code.deleteFile':
            if (language === 'javascript') codeSnippet = `const fs = require('fs');\nfs.unlink('${name}', (err) => {\n    if (err) throw err;\n    console.log('${name} was deleted');\n});`;
            else if (language === 'python') codeSnippet = `import os\nos.remove('${name}')`;
            else if (language === 'java') codeSnippet = `File file = new File("${name}");\nfile.delete();`;
            else if (language === 'cpp') codeSnippet = `remove("${name}");`;
            else if (language === 'ruby') codeSnippet = `File.delete('${name}')`;
            else if (language === 'php') codeSnippet = `unlink('${name}');`;
            else if (language === 'go') codeSnippet = `os.Remove("${name}")`;
            else if (language === 'typescript') codeSnippet = `import * as fs from 'fs';\nfs.unlink('${name}', (err) => {\n    if (err) throw err;\n    console.log('${name} was deleted');\n});`;
            else if (language === 'swift') codeSnippet = `try FileManager.default.removeItem(atPath: "${name}")`;
            break;

        case 'code.updateRecord':
            if (language === 'javascript') codeSnippet = `// code to update record`;
            else if (language === 'python') codeSnippet = `# code to update record`;
            else if (language === 'java') codeSnippet = `// code to update record`;
            else if (language === 'cpp') codeSnippet = `// code to update record`;
            else if (language === 'ruby') codeSnippet = `# code to update record`;
            else if (language === 'php') codeSnippet = `// code to update record`;
            else if (language === 'go') codeSnippet = `// code to update record`;
            else if (language === 'typescript') codeSnippet = `// code to update record`;
            else if (language === 'swift') codeSnippet = `// code to update record`;
            break;

        case 'code.createClass':
            if (language === 'javascript') codeSnippet = `class ${name} {\n    constructor() {\n        // code here\n    }\n}`;
            else if (language === 'python') codeSnippet = `class ${name}:\n    def __init__(self):\n        # code here`;
            else if (language === 'java') codeSnippet = `public class ${name} {\n    // code here\n}`;
            else if (language === 'cpp') codeSnippet = `class ${name} {\n    // code here\n};`;
            else if (language === 'ruby') codeSnippet = `class ${name}\n    # code here\nend`;
            else if (language === 'php') codeSnippet = `class ${name} {\n    // code here\n}`;
            else if (language === 'go') codeSnippet = `type ${name} struct {\n    // fields here\n}`;
            else if (language === 'typescript') codeSnippet = `class ${name} {\n    constructor() {\n        // code here\n    }\n}`;
            else if (language === 'swift') codeSnippet = `class ${name} {\n    // code here\n}`;
            break;

        case 'code.createIfCondition':
            if (language === 'javascript') codeSnippet = `if (condition) {\n    // code here\n}`;
            else if (language === 'python') codeSnippet = `if condition:\n    # code here`;
            else if (language === 'java') codeSnippet = `if (condition) {\n    // code here\n}`;
            else if (language === 'cpp') codeSnippet = `if (condition) {\n    // code here\n}`;
            else if (language === 'ruby') codeSnippet = `if condition\n    # code here\nend`;
            else if (language === 'php') codeSnippet = `if ($condition) {\n    // code here\n}`;
            else if (language === 'go') codeSnippet = `if condition {\n    // code here\n}`;
            else if (language === 'typescript') codeSnippet = `if (condition) {\n    // code here\n}`;
            else if (language === 'swift') codeSnippet = `if condition {\n    // code here\n}`;
            break;
            case 'code.importLibrary':
                if (language === 'javascript') codeSnippet = `import ${name} from 'library-name';`;
                else if (language === 'python') codeSnippet = `import ${name}`;
                else if (language === 'java') codeSnippet = `import ${name};`;
                else if (language === 'cpp') codeSnippet = `#include <${name}>`;
                else if (language === 'ruby') codeSnippet = `require '${name}'`;
                else if (language === 'php') codeSnippet = `require '${name}.php';`;
                else if (language === 'go') codeSnippet = `import "${name}"`;
                else if (language === 'typescript') codeSnippet = `import ${name} from 'library-name';`;
                else if (language === 'swift') codeSnippet = `import ${name}`;
                break;
    
            case 'code.writeLoop':
                if (language === 'javascript') codeSnippet = `for (let i = 0; i < length; i++) {\n    // code here\n}`;
                else if (language === 'python') codeSnippet = `for i in range(length):\n    # code here`;
                else if (language === 'java') codeSnippet = `for (int i = 0; i < length; i++) {\n    // code here\n}`;
                else if (language === 'cpp') codeSnippet = `for (int i = 0; i < length; i++) {\n    // code here\n}`;
                else if (language === 'ruby') codeSnippet = `for i in 0...length\n    # code here\nend`;
                else if (language === 'php') codeSnippet = `for ($i = 0; $i < $length; $i++) {\n    // code here\n}`;
                else if (language === 'go') codeSnippet = `for i := 0; i < length; i++ {\n    // code here\n}`;
                else if (language === 'typescript') codeSnippet = `for (let i = 0; i < length; i++) {\n    // code here\n}`;
                else if (language === 'swift') codeSnippet = `for i in 0..<length {\n    // code here\n}`;
                break;
    
            case 'code.setValue':
                if (language === 'javascript') codeSnippet = `let ${name} = value;`;
                else if (language === 'python') codeSnippet = `${name} = value`;
                else if (language === 'java') codeSnippet = `${type} ${name} = value;`;
                else if (language === 'cpp') codeSnippet = `${type} ${name} = value;`;
                else if (language === 'ruby') codeSnippet = `${name} = value`;
                else if (language === 'php') codeSnippet = `$$name = value;`;
                else if (language === 'go') codeSnippet = `${name} := value`;
                else if (language === 'typescript') codeSnippet = `let ${name}: ${type} = value;`;
                else if (language === 'swift') codeSnippet = `var ${name} = value`;
                break;
    
            case 'code.initializeArray':
                if (language === 'javascript') codeSnippet = `let ${name} = [];`;
                else if (language === 'python') codeSnippet = `${name} = []`;
                else if (language === 'java') codeSnippet = `${type}[] ${name} = new ${type}[size];`;
                else if (language === 'cpp') codeSnippet = `${type} ${name}[size];`;
                else if (language === 'ruby') codeSnippet = `${name} = []`;
                else if (language === 'php') codeSnippet = `$$name = array();`;
                else if (language === 'go') codeSnippet = `var ${name} = []${type}{}`;
                else if (language === 'typescript') codeSnippet = `let ${name}: ${type}[] = [];`;
                else if (language === 'swift') codeSnippet = `var ${name}: [${type}] = []`;
                break;
    
            case 'code.printMessage':
                if (language === 'javascript') codeSnippet = `console.log('Message');`;
                else if (language === 'python') codeSnippet = `print('Message')`;
                else if (language === 'java') codeSnippet = `System.out.println("Message");`;
                else if (language === 'cpp') codeSnippet = `std::cout << "Message" << std::endl;`;
                else if (language === 'ruby') codeSnippet = `puts 'Message'`;
                else if (language === 'php') codeSnippet = `echo 'Message';`;
                else if (language === 'go') codeSnippet = `fmt.Println("Message")`;
                else if (language === 'typescript') codeSnippet = `console.log('Message');`;
                else if (language === 'swift') codeSnippet = `print("Message")`;
                break;
    
            case 'code.deleteFile':
                if (language === 'javascript') codeSnippet = `const fs = require('fs');\nfs.unlink('${name}', (err) => {\n    if (err) throw err;\n});`;
                else if (language === 'python') codeSnippet = `import os\nos.remove('${name}')`;
                else if (language === 'java') codeSnippet = `File file = new File("${name}");\nfile.delete();`;
                else if (language === 'cpp') codeSnippet = `remove("${name}");`;
                else if (language === 'ruby') codeSnippet = `File.delete('${name}')`;
                else if (language === 'php') codeSnippet = `unlink('${name}');`;
                else if (language === 'go') codeSnippet = `os.Remove("${name}")`;
                else if (language === 'typescript') codeSnippet = `const fs = require('fs');\nfs.unlink('${name}', (err) => {\n    if (err) throw err;\n});`;
                else if (language === 'swift') codeSnippet = `try FileManager.default.removeItem(atPath: "${name}")`;
                break;
    
            case 'code.updateRecord':
                if (language === 'javascript') codeSnippet = `// code to update record`;
                else if (language === 'python') codeSnippet = `# code to update record`;
                else if (language === 'java') codeSnippet = `// code to update record`;
                else if (language === 'cpp') codeSnippet = `// code to update record`;
                else if (language === 'ruby') codeSnippet = `# code to update record`;
                else if (language === 'php') codeSnippet = `// code to update record`;
                else if (language === 'go') codeSnippet = `// code to update record`;
                else if (language === 'typescript') codeSnippet = `// code to update record`;
                else if (language === 'swift') codeSnippet = `// code to update record`;
                break;
                case 'code.createCppProgram':
                    codeSnippet = `#include <iostream>\n\nint main() {\n    std::cout << "Hello from C++ program: ${name}" << std::endl;\n    return 0;\n}`;
                    break;
        
                case 'code.createPythonProgram':
                    codeSnippet = `print("Hello from Python program: ${name}")`;
                    break;
        
                case 'code.createJavaProgram':
                    codeSnippet = `public class ${name} {\n    public static void main(String[] args) {\n        System.out.println("Hello from Java program: ${name}");\n    }\n}`;
                    break;
        
                case 'code.createJavascriptProgram':
                    codeSnippet = `console.log("Hello from JavaScript program: ${name}");`;
                    break;
        
                case 'code.createRubyProgram':
                    codeSnippet = `puts "Hello from Ruby program: #{name}"`;
                    break;
                
                case 'functionality.createCalculator':
                    if (language === 'javascript') codeSnippet = `function calculator(a, b, operation) {\n    switch (operation) {\n        case 'add': return a + b;\n        case 'subtract': return a - b;\n        case 'multiply': return a * b;\n        case 'divide': return a / b;\n        default: return 'Invalid operation';\n    }\n}`;
                    else if (language === 'python') codeSnippet = `def calculator(a, b, operation):\n    if operation == 'add': return a + b\n    elif operation == 'subtract': return a - b\n    elif operation == 'multiply': return a * b\n    elif operation == 'divide': return a / b\n    else: return 'Invalid operation'`;
                    else if (language === 'java') codeSnippet = `public class Calculator {\n    public static double calculate(double a, double b, String operation) {\n        switch (operation) {\n            case "add": return a + b;\n            case "subtract": return a - b;\n            case "multiply": return a * b;\n            case "divide": return a / b;\n            default: return 0;\n        }\n    }\n}`;
                    else if (language === 'cpp') codeSnippet = `double calculator(double a, double b, const std::string &operation) {\n    if (operation == "add") return a + b;\n    else if (operation == "subtract") return a - b;\n    else if (operation == "multiply") return a * b;\n    else if (operation == "divide") return a / b;\n    else return 0;\n}`;
                    else if (language === 'ruby') codeSnippet = `def calculator(a, b, operation)\n    case operation\n    when 'add'\n        a + b\n    when 'subtract'\n        a - b\n    when 'multiply'\n        a * b\n    when 'divide'\n        a / b\n    else\n        'Invalid operation'\n    end\nend`;
                    else if (language === 'php') codeSnippet = `function calculator($a, $b, $operation) {\n    switch ($operation) {\n        case 'add': return $a + $b;\n        case 'subtract': return $a - $b;\n        case 'multiply': return $a * $b;\n        case 'divide': return $a / $b;\n        default: return 'Invalid operation';\n    }\n}`;
                    else if (language === 'go') codeSnippet = `func calculator(a float64, b float64, operation string) float64 {\n    switch operation {\n    case "add": return a + b\n    case "subtract": return a - b\n    case "multiply": return a * b\n    case "divide": return a / b\n    default: return 0\n    }\n}`;
                    else if (language === 'typescript') codeSnippet = `function calculator(a: number, b: number, operation: string): number {\n    switch (operation) {\n        case 'add': return a + b;\n        case 'subtract': return a - b;\n        case 'multiply': return a * b;\n        case 'divide': return a / b;\n        default: throw new Error('Invalid operation');\n    }\n}`;
                    else if (language === 'swift') codeSnippet = `func calculator(a: Double, b: Double, operation: String) -> Double {\n    switch operation {\n    case "add": return a + b\n    case "subtract": return a - b\n    case "multiply": return a * b\n    case "divide": return a / b\n    default: return 0\n    }\n}`;
                    break;

                case 'functionality.createToDoList':
                    if (language === 'javascript') codeSnippet = `let toDoList = [];\nfunction addTask(task) {\n    toDoList.push(task);\n}\nfunction removeTask(task) {\n    toDoList = toDoList.filter(t => t !== task);\n}\nfunction displayTasks() {\n    return toDoList;\n}`;
                    else if (language === 'python') codeSnippet = `to_do_list = []\n\ndef add_task(task):\n    to_do_list.append(task)\n\ndef remove_task(task):\n    to_do_list.remove(task)\n\ndef display_tasks():\n    return to_do_list`;
                    else if (language === 'java') codeSnippet = `import java.util.ArrayList;\nimport java.util.List;\n\npublic class ToDoList {\n    private List<String> tasks = new ArrayList<>();\n\n    public void addTask(String task) {\n        tasks.add(task);\n    }\n\n    public void removeTask(String task) {\n        tasks.remove(task);\n    }\n\n    public List<String> displayTasks() {\n        return tasks;\n    }\n}`;
                    else if (language === 'cpp') codeSnippet = `std::vector<std::string> toDoList;\n\nvoid addTask(const std::string &task) {\n    toDoList.push_back(task);\n}\n\nvoid removeTask(const std::string &task) {\n    toDoList.erase(std::remove(toDoList.begin(), toDoList.end(), task), toDoList.end());\n}\n\nstd::vector<std::string> displayTasks() {\n    return toDoList;\n}`;
                    else if (language === 'ruby') codeSnippet = `@to_do_list = []\n\ndef add_task(task)\n    @to_do_list << task\nend\n\ndef remove_task(task)\n    @to_do_list.delete(task)\nend\n\ndef display_tasks\n    @to_do_list\nend`;
                    else if (language === 'php') codeSnippet = `$toDoList = [];\n\nfunction addTask($task) {\n    global $toDoList;\n    $toDoList[] = $task;\n}\n\nfunction removeTask($task) {\n    global $toDoList;\n    $toDoList = array_diff($toDoList, [$task]);\n}\n\nfunction displayTasks() {\n    global $toDoList;\n    return $toDoList;\n}`;
                    else if (language === 'go') codeSnippet = `var toDoList []string\n\nfunc addTask(task string) {\n    toDoList = append(toDoList, task)\n}\n\nfunc removeTask(task string) {\n    for i, t := range toDoList {\n        if t == task {\n            toDoList = append(toDoList[:i], toDoList[i+1:]...)\n            break\n        }\n    }\n}\n\nfunc displayTasks() []string {\n    return toDoList\n}`;
                    else if (language === 'typescript') codeSnippet = `let toDoList: string[] = [];\n\nfunction addTask(task: string): void {\n    toDoList.push(task);\n}\n\nfunction removeTask(task: string): void {\n    toDoList = toDoList.filter(t => t !== task);\n}\n\nfunction displayTasks(): string[] {\n    return toDoList;\n}`;
                    else if (language === 'swift') codeSnippet = `var toDoList: [String] = []\n\nfunc addTask(task: String) {\n    toDoList.append(task)\n}\n\nfunc removeTask(task: String) {\n    if let index = toDoList.firstIndex(of: task) {\n        toDoList.remove(at: index)\n    }\n}\n\nfunc displayTasks() -> [String] {\n    return toDoList\n}`;
                    break;

                case 'functionality.createGuessingGame':
                    if (language === 'javascript') codeSnippet = `function guessingGame(secretNumber) {\n    return function guess(number) {\n        if (number === secretNumber) return 'Correct!';\n        return number < secretNumber ? 'Too low!' : 'Too high!';\n    };\n}`;
                    else if (language === 'python') codeSnippet = `def guessing_game(secret_number):\n    def guess(number):\n        if number == secret_number:\n            return 'Correct!'\n        return 'Too low!' if number < secret_number else 'Too high!'\n    return guess`;
                    else if (language === 'java') codeSnippet = `public class GuessingGame {\n    private int secretNumber;\n\n    public GuessingGame(int secretNumber) {\n        this.secretNumber = secretNumber;\n    }\n\n    public String guess(int number) {\n        if (number == secretNumber) return "Correct!";\n        return number < secretNumber ? "Too low!" : "Too high!";\n    }\n}`;
                    else if (language === 'cpp') codeSnippet = `class GuessingGame {\n    int secretNumber;\npublic:\n    GuessingGame(int number) : secretNumber(number) {}\n    std::string guess(int number) {\n        if (number == secretNumber) return "Correct!";\n        return number < secretNumber ? "Too low!" : "Too high!";\n    }\n};`;
                    else if (language === 'ruby') codeSnippet = `class GuessingGame\n    def initialize(secret_number)\n        @secret_number = secret_number\n    end\n\n    def guess(number)\n        return 'Correct!' if number == @secret_number\n        number < @secret_number ? 'Too low!' : 'Too high!'\n    end\nend`;
                    else if (language === 'php') codeSnippet = `class GuessingGame {\n    private $secretNumber;\n\n    public function __construct($secretNumber) {\n        $this->secretNumber = $secretNumber;\n    }\n\n    public function guess($number) {\n        if ($number == $this->secretNumber) return "Correct!";\n        return $number < $this->secretNumber ? "Too low!" : "Too high!";\n    }\n}`;
                    else if (language === 'go') codeSnippet = `type GuessingGame struct {\n    secretNumber int\n}\n\nfunc NewGuessingGame(secretNumber int) *GuessingGame {\n    return &GuessingGame{secretNumber: secretNumber}\n}\n\nfunc (g *GuessingGame) Guess(number int) string {\n    if number == g.secretNumber {\n        return "Correct!"\n    }\n    if number < g.secretNumber {\n        return "Too low!"\n    }\n    return "Too high!"\n}`;
                    else if (language === 'typescript') codeSnippet = `class GuessingGame {\n    private secretNumber: number;\n\n    constructor(secretNumber: number) {\n        this.secretNumber = secretNumber;\n    }\n\n    guess(number: number): string {\n        if (number === this.secretNumber) return "Correct!";\n        return number < this.secretNumber ? "Too low!" : "Too high!";\n    }\n}`;
                    else if (language === 'swift') codeSnippet = `class GuessingGame {\n    let secretNumber: Int\n\n    init(secretNumber: Int) {\n        self.secretNumber = secretNumber\n    }\n\n    func guess(_ number: Int) -> String {\n        if number == secretNumber {\n            return "Correct!"\n        }\n        return number < secretNumber ? "Too low!" : "Too high!"\n    }\n}`;
                    break;

                case 'functionality.createCountdownTimer':
                    if (language === 'javascript') codeSnippet = `function countdownTimer(seconds) {\n    const timer = setInterval(() => {\n        if (seconds <= 0) {\n            clearInterval(timer);\n            console.log('Time is up!');\n        } else {\n            console.log(seconds--);\n        }\n    }, 1000);\n}`;
                    else if (language === 'python') codeSnippet = `import time\n\ndef countdown_timer(seconds):\n    while seconds > 0:\n        print(seconds)\n        seconds -= 1\n        time.sleep(1)\n    print('Time is up!')`;
                    else if (language === 'java') codeSnippet = `import java.util.Timer;\nimport java.util.TimerTask;\n\npublic class CountdownTimer {\n    public static void countdown(int seconds) {\n        Timer timer = new Timer();\n        timer.scheduleAtFixedRate(new TimerTask() {\n            int time = seconds;\n            public void run() {\n                if (time <= 0) {\n                    System.out.println("Time is up!");\n                    timer.cancel();\n                } else {\n                    System.out.println(time--);\n                }\n            }\n        }, 0, 1000);\n    }\n}`;
                    else if (language === 'cpp') codeSnippet = `#include <iostream>\n#include <thread>\n#include <chrono>\n\nvoid countdownTimer(int seconds) {\n    while (seconds > 0) {\n        std::cout << seconds-- << std::endl;\n        std::this_thread::sleep_for(std::chrono::seconds(1));\n    }\n    std::cout << "Time is up!" << std::endl;\n}`;
                    else if (language === 'ruby') codeSnippet = `def countdown_timer(seconds)\n    while seconds > 0\n        puts seconds\n        seconds -= 1\n        sleep 1\n    end\n    puts 'Time is up!'\nend`;
                    else if (language === 'php') codeSnippet = `function countdownTimer($seconds) {\n    while ($seconds > 0) {\n        echo $seconds . "\\n";\n        $seconds--;\n        sleep(1);\n    }\n    echo 'Time is up!';\n}`;
                    else if (language === 'go') codeSnippet = `func countdownTimer(seconds int) {\n    for seconds > 0 {\n        fmt.Println(seconds)\n        seconds--\n        time.Sleep(time.Second)\n    }\n    fmt.Println("Time is up!")\n}`;
                    else if (language === 'typescript') codeSnippet = `function countdownTimer(seconds: number): void {\n    const timer = setInterval(() => {\n        if (seconds <= 0) {\n            clearInterval(timer);\n            console.log('Time is up!');\n        } else {\n            console.log(seconds--);\n        }\n    }, 1000);\n}`;
                    else if (language === 'swift') codeSnippet = `func countdownTimer(seconds: Int) {\n    var time = seconds\n    Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { timer in\n        if time <= 0 {\n            print("Time is up!")\n            timer.invalidate()\n        } else {\n            print(time)\n            time -= 1\n        }\n    }\n}`;
                    break;

                case 'functionality.createWebServer':
                    if (language === 'javascript') codeSnippet = `const http = require('http');\nconst server = http.createServer((req, res) => {\n    res.statusCode = 200;\n    res.setHeader('Content-Type', 'text/plain');\n    res.end('Hello World\\n');\n});\nserver.listen(3000, () => {\n    console.log('Server running at http://localhost:3000/');\n});`;
                    else if (language === 'python') codeSnippet = `from http.server import BaseHTTPRequestHandler, HTTPServer\n\nclass RequestHandler(BaseHTTPRequestHandler):\n    def do_GET(self):\n        self.send_response(200)\n        self.send_header('Content-type', 'text/plain')\n        self.end_headers()\n        self.wfile.write(b'Hello World')\n\nserver = HTTPServer(('localhost', 3000), RequestHandler)\nserver.serve_forever()`;
                    else if (language === 'java') codeSnippet = `import com.sun.net.httpserver.HttpServer;\nimport com.sun.net.httpserver.HttpHandler;\nimport com.sun.net.httpserver.HttpExchange;\nimport java.io.OutputStream;\n\npublic class SimpleHttpServer {\n    public static void main(String[] args) throws Exception {\n        HttpServer server = HttpServer.create(new InetSocketAddress(3000), 0);\n        server.createContext("/", new HttpHandler() {\n            public void handle(HttpExchange exchange) throws IOException {\n                String response = "Hello World";\n                exchange.sendResponseHeaders(200, response.length());\n                OutputStream os = exchange.getResponseBody();\n                os.write(response.getBytes());\n                os.close();\n            }\n        });\n        server.start();\n    }\n}`;
                    else if (language === 'cpp') codeSnippet = `#include <boost/asio.hpp>\n#include <iostream>\n\nusing boost::asio::ip::tcp;\n\nint main() {\n    boost::asio::io_context io_context;\n    tcp::acceptor acceptor(io_context, tcp::endpoint(tcp::v4(), 3000));\n\n    while (true) {\n        tcp::socket socket(io_context);\n        acceptor.accept(socket);\n        std::string message = "HTTP/1.1 200 OK\\r\\nContent-Type: text/plain\\r\\n\\r\\nHello World";\n        boost::asio::write(socket, boost::asio::buffer(message));\n    }\n}`;
                    else if (language === 'ruby') codeSnippet = `require 'socket'\n\nserver = TCPServer.new(3000)\n\nloop do\n    client = server.accept\n    client.puts "HTTP/1.1 200 OK"\n    client.puts "Content-Type: text/plain"\n    client.puts\n    client.puts "Hello World"\n    client.close\nend`;
                    else if (language === 'php') codeSnippet = `<?php\n    \$host = 'localhost';\n    \$port = 3000;\n    \$server = stream_socket_server("tcp://\$host:\$port", \$errno, \$errstr);\n\n    while (\$conn = stream_socket_accept(\$server)) {\n        fwrite(\$conn, "HTTP/1.1 200 OK\\r\\nContent-Type: text/plain\\r\\n\\r\\nHello World");\n        fclose(\$conn);\n    }\n?>`;
                    else if (language === 'go') codeSnippet = `package main\n\nimport (\n    "fmt"\n    "net/http"\n)\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n    fmt.Fprint(w, "Hello World")\n}\n\nfunc main() {\n    http.HandleFunc("/", handler)\n    http.ListenAndServe(":3000", nil)\n}`;
                    else if (language === 'typescript') codeSnippet = `import * as http from 'http';\nconst server = http.createServer((req, res) => {\n    res.writeHead(200, {'Content-Type': 'text/plain'});\n    res.end('Hello World\\n');\n});\nserver.listen(3000, () => {\n    console.log('Server running at http://localhost:3000/');\n});`;
                    else if (language === 'swift') codeSnippet = `import Foundation\n\nlet server = try! NSXPCListener(machServiceName: "com.example.hello")\nserver.delegate = self\nserver.resume()\n\nfunc listener(_ listener: NSXPCListener, shouldAcceptNewConnection newConnection: NSXPCConnection) -> Bool {\n    newConnection.exportedInterface = NSXPCInterface(with: HelloWorldProtocol.self)\n    newConnection.resume()\n    return true\n}`;
                    break;

                case 'functionality.createChatApplication':
                    if (language === 'javascript') codeSnippet = `const WebSocket = require('ws');\nconst wss = new WebSocket.Server({ port: 3000 });\nwss.on('connection', ws => {\n    ws.on('message', message => {\n        console.log('received: %s', message);\n    });\n    ws.send('Hello!');\n});`;
                    else if (language === 'python') codeSnippet = `import asyncio\nimport websockets\n\nasync def chat(websocket, path):\n    name = await websocket.recv()\n    print(f'{name} joined the chat')\n    await websocket.send('Hello!')\n\nstart_server = websockets.serve(chat, 'localhost', 3000)\nasyncio.get_event_loop().run_until_complete(start_server)\nasyncio.get_event_loop().run_forever()`;
                    else if (language === 'java') codeSnippet = `import javax.websocket.*;\nimport javax.websocket.server.ServerEndpoint;\n\n@ServerEndpoint("/chat")\npublic class ChatApplication {\n    @OnOpen\n    public void onOpen(Session session) {\n        System.out.println("New connection: " + session.getId());\n    }\n\n    @OnMessage\n    public void onMessage(String message, Session session) {\n        System.out.println("Received: " + message);\n    }\n}`;
                    else if (language === 'cpp') codeSnippet = `#include <boost/beast/core.hpp>\n#include <boost/beast/websocket.hpp>\n#include <iostream>\n\nnamespace beast = boost::beast;\nnamespace websocket = beast::websocket;\n\nint main() {\n    // WebSocket server code here\n}`;
                    else if (language === 'ruby') codeSnippet = `require 'faye/websocket'\nrequire 'eventmachine'\n\nEM.run {\n    Faye::WebSocket.start(:port => 3000) do |ws|\n        ws.on :message do |event|\n            puts event.data\n        end\n        ws.send("Hello!")\n    end\n}`; 
                    else if (language === 'php') codeSnippet = `use Ratchet\MessageComponentInterface;\nuse Ratchet\ConnectionInterface;\n\nclass ChatApplication implements MessageComponentInterface {\n    public function onOpen(ConnectionInterface \$conn) {\n        echo "New connection: " . \$conn->resourceId;\n    }\n\n    public function onMessage(ConnectionInterface \$from, \$msg) {\n        echo "Received: " . \$msg;\n    }\n}`;
                    else if (language === 'go') codeSnippet = `package main\n\nimport (\n    "fmt"\n    "net/http"\n    "github.com/gorilla/websocket"\n)\n\nvar upgrader = websocket.Upgrader{}\n\nfunc chat(w http.ResponseWriter, r *http.Request) {\n    conn, err := upgrader.Upgrade(w, r, nil)\n    if err != nil {\n        return\n    }\n    defer conn.Close()\n    for {\n        messageType, msg, err := conn.ReadMessage()\n        if err != nil {\n            return\n        }\n        fmt.Println("Received: ", string(msg))\n        err = conn.WriteMessage(messageType, msg)\n        if err != nil {\n            return\n        }\n    }\n}\n\nfunc main() {\n    http.HandleFunc("/chat", chat)\n    http.ListenAndServe(":3000", nil)\n}`;
                    else if (language === 'typescript') codeSnippet = `import * as WebSocket from 'ws';\nconst wss = new WebSocket.Server({ port: 3000 });\nwss.on('connection', ws => {\n    ws.on('message', message => {\n        console.log('received: %s', message);\n    });\n    ws.send('Hello!');\n});`;
                    else if (language === 'swift') codeSnippet = `import Foundation\n\nclass ChatApplication {\n    func start() {\n        // WebSocket server code here\n    }\n}`;
                    break;

                case 'functionality.createRandomQuoteGenerator':
                    if (language === 'javascript') codeSnippet = `const quotes = ['Quote 1', 'Quote 2', 'Quote 3'];\nfunction getRandomQuote() {\n    return quotes[Math.floor(Math.random() * quotes.length)];\n}`;
                    else if (language === 'python') codeSnippet = `import random\n\nquotes = ['Quote 1', 'Quote 2', 'Quote 3']\n\ndef get_random_quote():\n    return random.choice(quotes)`;
                    else if (language === 'java') codeSnippet = `import java.util.Random;\n\npublic class RandomQuoteGenerator {\n    private static final String[] quotes = {"Quote 1", "Quote 2", "Quote 3"};\n\n    public static String getRandomQuote() {\n        Random rand = new Random();\n        return quotes[rand.nextInt(quotes.length)];\n    }\n}`;
                    else if (language === 'cpp') codeSnippet = `#include <iostream>\n#include <vector>\n#include <cstdlib>\n#include <ctime>\n\nstd::string getRandomQuote() {\n    std::vector<std::string> quotes = {"Quote 1", "Quote 2", "Quote 3"};\n    return quotes[rand() % quotes.size()];\n}`;
                    else if (language === 'ruby') codeSnippet = `quotes = ['Quote 1', 'Quote 2', 'Quote 3']\n\ndef get_random_quote\n    quotes.sample\nend`;
                    else if (language === 'php') codeSnippet = `\$quotes = ['Quote 1', 'Quote 2', 'Quote 3'];\nfunction getRandomQuote() {\n    global \$quotes;\n    return \$quotes[array_rand(\$quotes)];\n}`;
                    else if (language === 'go') codeSnippet = `package main\n\nimport (\n    "math/rand"\n    "time"\n)\n\nvar quotes = []string{"Quote 1", "Quote 2", "Quote 3"}\n\nfunc getRandomQuote() string {\n    rand.Seed(time.Now().UnixNano())\n    return quotes[rand.Intn(len(quotes))]\n}`;
                    else if (language === 'typescript') codeSnippet = `const quotes: string[] = ['Quote 1', 'Quote 2', 'Quote 3'];\nfunction getRandomQuote(): string {\n    return quotes[Math.floor(Math.random() * quotes.length)];\n}`;
                    else if (language === 'swift') codeSnippet = `let quotes = ["Quote 1", "Quote 2", "Quote 3"]\nfunc getRandomQuote() -> String {\n    return quotes.randomElement()!\n}`;
                    break;

                case 'functionality.createQuizApp':
                    if (language === 'javascript') codeSnippet = `const questions = [\n    { question: "Question 1?", answer: "Answer 1" },\n    { question: "Question 2?", answer: "Answer 2" }\n];\n\nfunction takeQuiz() {\n    questions.forEach(q => {\n        const userAnswer = prompt(q.question);\n        if (userAnswer === q.answer) {\n            console.log('Correct!');\n        } else {\n            console.log('Wrong!');\n        }\n    });\n}`;
                    else if (language === 'python') codeSnippet = `questions = [\n    {"question": "Question 1?", "answer": "Answer 1"},\n    {"question": "Question 2?", "answer": "Answer 2"}\n]\n\ndef take_quiz():\n    for q in questions:\n        user_answer = input(q["question"])\n        if user_answer == q["answer"]:\n            print("Correct!")\n        else:\n            print("Wrong!")`;
                    else if (language === 'java') codeSnippet = `import java.util.Scanner;\n\npublic class QuizApp {\n    static String[][] questions = {{"Question 1?", "Answer 1"}, {"Question 2?", "Answer 2"}};\n\n    public static void takeQuiz() {\n        Scanner scanner = new Scanner(System.in);\n        for (String[] q : questions) {\n            System.out.print(q[0] + " ");\n            String userAnswer = scanner.nextLine();\n            if (userAnswer.equals(q[1])) {\n                System.out.println("Correct!");\n            } else {\n                System.out.println("Wrong!");\n            }\n        }\n        scanner.close();\n    }\n}`;
                    else if (language === 'cpp') codeSnippet = `#include <iostream>\n#include <string>\n#include <vector>\n\nstruct Question {\n    std::string question;\n    std::string answer;\n};\n\nvoid takeQuiz() {\n    std::vector<Question> questions = {{ "Question 1?", "Answer 1" }, { "Question 2?", "Answer 2" }};\n    for (const auto& q : questions) {\n        std::cout << q.question;\n        std::string userAnswer;\n        std::getline(std::cin, userAnswer);\n        if (userAnswer == q.answer) {\n            std::cout << "Correct!" << std::endl;\n        } else {\n            std::cout << "Wrong!" << std::endl;\n        }\n    }\n}`;
                    else if (language === 'ruby') codeSnippet = `questions = [\n    { question: "Question 1?", answer: "Answer 1" },\n    { question: "Question 2?", answer: "Answer 2" }\n]\n\ndef take_quiz\n    questions.each do |q|\n        print q[:question]\n        user_answer = gets.chomp\n        puts user_answer == q[:answer] ? 'Correct!' : 'Wrong!'\n    end\nend`;
                    else if (language === 'php') codeSnippet = `\$questions = [\n    [ "question" => "Question 1?", "answer" => "Answer 1" ],\n    [ "question" => "Question 2?", "answer" => "Answer 2" ]\n];\n\nfunction takeQuiz() {\n    global \$questions;\n    foreach (\$questions as \$q) {\n        echo \$q["question"];\n        \$userAnswer = trim(fgets(STDIN));\n        echo \$userAnswer === \$q["answer"] ? "Correct!\\n" : "Wrong!\\n";\n    }\n}`;
                    else if (language === 'go') codeSnippet = `package main\n\nimport (\n    "fmt"\n)\n\ntype Question struct {\n    Question string\n    Answer   string\n}\n\nfunc takeQuiz() {\n    questions := []Question{{"Question 1?", "Answer 1"}, {"Question 2?", "Answer 2"}}\n    for _, q := range questions {\n        fmt.Print(q.Question)\n        var userAnswer string\n        fmt.Scanln(&userAnswer)\n        if userAnswer == q.Answer {\n            fmt.Println("Correct!")\n        } else {\n            fmt.Println("Wrong!")\n        }\n    }\n}`;
                    else if (language === 'typescript') codeSnippet = `const questions = [\n    { question: "Question 1?", answer: "Answer 1" },\n    { question: "Question 2?", answer: "Answer 2" }\n];\n\nfunction takeQuiz(): void {\n    questions.forEach(q => {\n        const userAnswer = prompt(q.question);\n        console.log(userAnswer === q.answer ? 'Correct!' : 'Wrong!');\n    });\n}`;
                    else if (language === 'swift') codeSnippet = `let questions = [\n    (question: "Question 1?", answer: "Answer 1"),\n    (question: "Question 2?", answer: "Answer 2")\n]\n\nfunc takeQuiz() {\n    for q in questions {\n        print(q.question, terminator: " ")\n        let userAnswer = readLine() ?? ""\n        print(userAnswer == q.answer ? "Correct!" : "Wrong!")\n    }\n}`;
                    break;

                case 'functionality.createFibonacciSequenceGenerator':
                    if (language === 'javascript') codeSnippet = `function fibonacci(n) {\n    let fib = [0, 1];\n    for (let i = 2; i < n; i++) {\n        fib[i] = fib[i - 1] + fib[i - 2];\n    }\n    return fib.slice(0, n);\n}`;
                    else if (language === 'python') codeSnippet = `def fibonacci(n):\n    fib = [0, 1]\n    for i in range(2, n):\n        fib.append(fib[i - 1] + fib[i - 2])\n    return fib[:n]`;
                    else if (language === 'java') codeSnippet = `import java.util.ArrayList;\nimport java.util.List;\n\npublic class Fibonacci {\n    public static List<Integer> generate(int n) {\n        List<Integer> fib = new ArrayList<>();\n        fib.add(0);\n        fib.add(1);\n        for (int i = 2; i < n; i++) {\n            fib.add(fib.get(i - 1) + fib.get(i - 2));\n        }\n        return fib;\n    }\n}`;
                    else if (language === 'cpp') codeSnippet = `#include <vector>\n\nstd::vector<int> fibonacci(int n) {\n    std::vector<int> fib = {0, 1};\n    for (int i = 2; i < n; ++i) {\n        fib.push_back(fib[i - 1] + fib[i - 2]);\n    }\n    return std::vector<int>(fib.begin(), fib.begin() + n);\n}`;
                    else if (language === 'ruby') codeSnippet = `def fibonacci(n)\n    fib = [0, 1]\n    (2...n).each { fib << fib[-1] + fib[-2] }\n    fib.take(n)\nend`;
                    else if (language === 'php') codeSnippet = `function fibonacci($n) {\n    $fib = [0, 1];\n    for ($i = 2; $i < $n; $i++) {\n        $fib[] = $fib[$i - 1] + $fib[$i - 2];\n    }\n    return array_slice($fib, 0, $n);\n}`;
                    else if (language === 'go') codeSnippet = `package main\n\nimport "fmt"\n\nfunc fibonacci(n int) []int {\n    fib := []int{0, 1}\n    for i := 2; i < n; i++ {\n        fib = append(fib, fib[i-1]+fib[i-2])\n    }\n    return fib[:n]\n}`;
                    else if (language === 'typescript') codeSnippet = `function fibonacci(n: number): number[] {\n    const fib: number[] = [0, 1];\n    for (let i = 2; i < n; i++) {\n        fib[i] = fib[i - 1] + fib[i - 2];\n    }\n    return fib.slice(0, n);\n}`;
                    else if (language === 'swift') codeSnippet = `func fibonacci(n: Int) -> [Int] {\n    var fib = [0, 1]\n    for i in 2..<n {\n        fib.append(fib[i - 1] + fib[i - 2])\n    }\n    return Array(fib.prefix(n))\n}`;
                    break;

                case 'functionality.createWebScraper':
                    if (language === 'javascript') codeSnippet = `const axios = require('axios');\nconst cheerio = require('cheerio');\n\nasync function scrape(url) {\n    const { data } = await axios.get(url);\n    const $ = cheerio.load(data);\n    $('h1').each((i, elem) => {\n        console.log($(elem).text());\n    });\n}`;
                    else if (language === 'python') codeSnippet = `import requests\nfrom bs4 import BeautifulSoup\n\ndef scrape(url):\n    response = requests.get(url)\n    soup = BeautifulSoup(response.text, 'html.parser')\n    for h1 in soup.find_all('h1'):\n        print(h1.text)`;
                    else if (language === 'java') codeSnippet = `import org.jsoup.Jsoup;\nimport org.jsoup.nodes.Document;\nimport org.jsoup.nodes.Element;\nimport org.jsoup.select.Elements;\n\npublic class WebScraper {\n    public static void scrape(String url) throws Exception {\n        Document doc = Jsoup.connect(url).get();\n        Elements h1s = doc.select("h1");\n        for (Element h1 : h1s) {\n            System.out.println(h1.text());\n        }\n    }\n}`;
                    else if (language === 'cpp') codeSnippet = `#include <iostream>\n#include <string>\n#include <cpprest/http_client.h>\n\nvoid scrape(const std::string& url) {\n    // Web scraping code using cpprest\n}`;
                    else if (language === 'ruby') codeSnippet = `require 'open-uri'\nrequire 'nokogiri'\n\ndef scrape(url)\n    doc = Nokogiri::HTML(URI.open(url))\n    doc.css('h1').each do |h1|\n        puts h1.text\n    end\nend`;
                    else if (language === 'php') codeSnippet = `function scrape(\$url) {\n    \$html = file_get_contents(\$url);\n    \$dom = new DOMDocument();\n    @$dom->loadHTML(\$html);\n    \$xpath = new DOMXPath(\$dom);\n    foreach (\$xpath->query('//h1') as \$h1) {\n        echo \$h1->nodeValue;\n    }\n}`;
                    else if (language === 'go') codeSnippet = `package main\n\nimport (\n    "fmt"\n    "net/http"\n    "github.com/PuerkitoBio/goquery"\n)\n\nfunc scrape(url string) {\n    res, err := http.Get(url)\n    if err != nil {\n        return\n    }\n    defer res.Body.Close()\n    doc, _ := goquery.NewDocumentFromReader(res.Body)\n    doc.Find("h1").Each(func(i int, s *goquery.Selection) {\n        fmt.Println(s.Text())\n    })\n}`;
                    else if (language === 'typescript') codeSnippet = `import axios from 'axios';\nimport cheerio from 'cheerio';\n\nasync function scrape(url: string) {\n    const { data } = await axios.get(url);\n    const $ = cheerio.load(data);\n    $('h1').each((i, elem) => {\n        console.log($(elem).text());\n    });\n}`;
                    else if (language === 'swift') codeSnippet = `import Foundation\n\nfunc scrape(url: String) {\n    let url = URL(string: url)! // Web scraping code using Swift\n}`;
                    break;

                case 'functionality.createCountdownTimer':
                    if (language === 'javascript') codeSnippet = `function countdown(seconds) {\n    let timer = setInterval(() => {\n        if (seconds <= 0) {\n            clearInterval(timer);\n            console.log("Time's up!");\n        } else {\n            console.log(seconds--);\n        }\n    }, 1000);\n}`;
                    else if (language === 'python') codeSnippet = `import time\n\ndef countdown(seconds):\n    while seconds:\n        print(seconds)\n        seconds -= 1\n        time.sleep(1)\n    print("Time's up!")`;
                    else if (language === 'java') codeSnippet = `public class Countdown {\n    public static void countdown(int seconds) {\n        for (int i = seconds; i > 0; i--) {\n            System.out.println(i);\n            try {\n                Thread.sleep(1000);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n        System.out.println("Time's up!");\n    }\n}`;
                    else if (language === 'cpp') codeSnippet = `#include <iostream>\n#include <thread>\n#include <chrono>\n\nvoid countdown(int seconds) {\n    while (seconds > 0) {\n        std::cout << seconds-- << std::endl;\n        std::this_thread::sleep_for(std::chrono::seconds(1));\n    }\n    std::cout << "Time's up!" << std::endl;\n}`;
                    else if (language === 'ruby') codeSnippet = `def countdown(seconds)\n    while seconds > 0\n        puts seconds\n        seconds -= 1\n        sleep 1\n    end\n    puts "Time's up!"\nend`;
                    else if (language === 'php') codeSnippet = `function countdown($seconds) {\n    while ($seconds > 0) {\n        echo $seconds . "\\n";\n        $seconds--;\n        sleep(1);\n    }\n    echo "Time's up!";\n}`;
                    else if (language === 'go') codeSnippet = `package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc countdown(seconds int) {\n    for seconds > 0 {\n        fmt.Println(seconds)\n        seconds--\n        time.Sleep(1 * time.Second)\n    }\n    fmt.Println("Time's up!")\n}`;
                    else if (language === 'typescript') codeSnippet = `function countdown(seconds: number): void {\n    const timer = setInterval(() => {\n        if (seconds <= 0) {\n            clearInterval(timer);\n            console.log("Time's up!");\n        } else {\n            console.log(seconds--);\n        }\n    }, 1000);\n}`;
                    else if (language === 'swift') codeSnippet = `func countdown(seconds: Int) {\n    var seconds = seconds\n    while seconds > 0 {\n        print(seconds)\n        seconds -= 1\n        sleep(1)\n    }\n    print("Time's up!")\n}`;
                    break;

                case 'functionality.createCalculator':
                    if (language === 'javascript') codeSnippet = `function add(a, b) {\n    return a + b;\n}\nfunction subtract(a, b) {\n    return a - b;\n}\nfunction multiply(a, b) {\n    return a * b;\n}\nfunction divide(a, b) {\n    return a / b;\n}`;
                    else if (language === 'python') codeSnippet = `def add(a, b):\n    return a + b\n\ndef subtract(a, b):\n    return a - b\n\ndef multiply(a, b):\n    return a * b\n\ndef divide(a, b):\n    return a / b`;
                    else if (language === 'java') codeSnippet = `public class Calculator {\n    public static int add(int a, int b) {\n        return a + b;\n    }\n    public static int subtract(int a, int b) {\n        return a - b;\n    }\n    public static int multiply(int a, int b) {\n        return a * b;\n    }\n    public static double divide(int a, int b) {\n        return (double) a / b;\n    }\n}`;
                    else if (language === 'cpp') codeSnippet = `#include <iostream>\n\nclass Calculator {\npublic:\n    static int add(int a, int b) {\n        return a + b;\n    }\n    static int subtract(int a, int b) {\n        return a - b;\n    }\n    static int multiply(int a, int b) {\n        return a * b;\n    }\n    static double divide(int a, int b) {\n        return static_cast<double>(a) / b;\n    }\n};`;
                    else if (language === 'ruby') codeSnippet = `class Calculator\n    def self.add(a, b)\n        a + b\n    end\n    def self.subtract(a, b)\n        a - b\n    end\n    def self.multiply(a, b)\n        a * b\n    end\n    def self.divide(a, b)\n        a / b\n    end\nend`;
                    else if (language === 'php') codeSnippet = `class Calculator {\n    public static function add(\$a, \$b) {\n        return \$a + \$b;\n    }\n    public static function subtract(\$a, \$b) {\n        return \$a - \$b;\n    }\n    public static function multiply(\$a, \$b) {\n        return \$a * \$b;\n    }\n    public static function divide(\$a, \$b) {\n        return \$a / \$b;\n    }\n}`;
                    else if (language === 'go') codeSnippet = `package main\n\nfunc add(a, b int) int {\n    return a + b\n}\n\nfunc subtract(a, b int) int {\n    return a - b\n}\n\nfunc multiply(a, b int) int {\n    return a * b\n}\n\nfunc divide(a, b int) float64 {\n    return float64(a) / float64(b)\n}`;
                    else if (language === 'typescript') codeSnippet = `function add(a: number, b: number): number {\n    return a + b;\n}\nfunction subtract(a: number, b: number): number {\n    return a - b;\n}\nfunction multiply(a: number, b: number): number {\n    return a * b;\n}\nfunction divide(a: number, b: number): number {\n    return a / b;\n}`;
                    else if (language === 'swift') codeSnippet = `func add(_ a: Int, _ b: Int) -> Int {\n    return a + b\n}\nfunc subtract(_ a: Int, _ b: Int) -> Int {\n    return a - b\n}\nfunc multiply(_ a: Int, _ b: Int) -> Int {\n    return a * b\n}\nfunc divide(_ a: Int, _ b: Int) -> Double {\n    return Double(a) / Double(b)\n}`;
                    break;

                case 'functionality.createTodoList':
                    if (language === 'javascript') codeSnippet = `let todoList = [];\n\nfunction addTask(task) {\n    todoList.push(task);\n}\n\nfunction removeTask(task) {\n    todoList = todoList.filter(t => t !== task);\n}\n\nfunction showTasks() {\n    todoList.forEach(task => console.log(task));\n}`;
                    else if (language === 'python') codeSnippet = `todo_list = []\n\ndef add_task(task):\n    todo_list.append(task)\n\ndef remove_task(task):\n    todo_list.remove(task)\n\ndef show_tasks():\n    for task in todo_list:\n        print(task)`;
                    else if (language === 'java') codeSnippet = `import java.util.ArrayList;\n\npublic class TodoList {\n    static ArrayList<String> todoList = new ArrayList<>();\n\n    public static void addTask(String task) {\n        todoList.add(task);\n    }\n\n    public static void removeTask(String task) {\n        todoList.remove(task);\n    }\n\n    public static void showTasks() {\n        for (String task : todoList) {\n            System.out.println(task);\n        }\n    }\n}`;
                    else if (language === 'cpp') codeSnippet = `#include <iostream>\n#include <vector>\n#include <string>\n\nclass TodoList {\n    std::vector<std::string> tasks;\npublic:\n    void addTask(const std::string& task) {\n        tasks.push_back(task);\n    }\n    void removeTask(const std::string& task) {\n        tasks.erase(std::remove(tasks.begin(), tasks.end(), task), tasks.end());\n    }\n    void showTasks() const {\n        for (const auto& task : tasks) {\n            std::cout << task << std::endl;\n        }\n    }\n};`;
                    else if (language === 'ruby') codeSnippet = `class TodoList\n    def initialize\n        @tasks = []\n    end\n    def add_task(task)\n        @tasks << task\n    end\n    def remove_task(task)\n        @tasks.delete(task)\n    end\n    def show_tasks\n        @tasks.each { |task| puts task }\n    end\nend`;
                    else if (language === 'php') codeSnippet = `class TodoList {\n    private \$tasks = [];\n\n    public function addTask(\$task) {\n        \$this->tasks[] = \$task;\n    }\n\n    public function removeTask(\$task) {\n        \$key = array_search(\$task, \$this->tasks);\n        if (\$key !== false) {\n            unset(\$this->tasks[\$key]);\n        }\n    }\n\n    public function showTasks() {\n        foreach (\$this->tasks as \$task) {\n            echo \$task . "\\n";\n        }\n    }\n}`;
                    else if (language === 'go') codeSnippet = `package main\n\nimport "fmt"\n\ntype TodoList struct {\n    tasks []string\n}\n\nfunc (tl *TodoList) AddTask(task string) {\n    tl.tasks = append(tl.tasks, task)\n}\n\nfunc (tl *TodoList) RemoveTask(task string) {\n    for i, t := range tl.tasks {\n        if t == task {\n            tl.tasks = append(tl.tasks[:i], tl.tasks[i+1:]...)\n            break\n        }\n    }\n}\n\nfunc (tl *TodoList) ShowTasks() {\n    for _, task := range tl.tasks {\n        fmt.Println(task)\n    }\n}`;
                    else if (language === 'typescript') codeSnippet = `class TodoList {\n    private tasks: string[] = [];\n    public addTask(task: string): void {\n        this.tasks.push(task);\n    }\n    public removeTask(task: string): void {\n        this.tasks = this.tasks.filter(t => t !== task);\n    }\n    public showTasks(): void {\n        this.tasks.forEach(task => console.log(task));\n    }\n}`;
                    else if (language === 'swift') codeSnippet = `class TodoList {\n    var tasks: [String] = []\n    func addTask(_ task: String) {\n        tasks.append(task)\n    }\n    func removeTask(_ task: String) {\n        if let index = tasks.firstIndex(of: task) {\n            tasks.remove(at: index)\n        }\n    }\n    func showTasks() {\n        for task in tasks {\n            print(task)\n        }\n    }\n}`;
                    break;

                case 'functionality.createChatApplication':
                    if (language === 'javascript') codeSnippet = `const express = require('express');\nconst http = require('http');\nconst socketIo = require('socket.io');\n\nconst app = express();\nconst server = http.createServer(app);\nconst io = socketIo(server);\n\nio.on('connection', (socket) => {\n    console.log('New client connected');\n    socket.on('sendMessage', (message) => {\n        io.emit('receiveMessage', message);\n    });\n    socket.on('disconnect', () => {\n        console.log('Client disconnected');\n    });\n});\n\nserver.listen(3000, () => {\n    console.log('Chat app listening on port 3000');\n});`;
                    else if (language === 'python') codeSnippet = `from flask import Flask, render_template\nfrom flask_socketio import SocketIO, emit\n\napp = Flask(__name__)\napp.config['SECRET_KEY'] = 'secret!'\nsocketio = SocketIO(app)\n\n@socketio.on('sendMessage')\ndef handle_message(message):\n    socketio.emit('receiveMessage', message)\n\nif __name__ == '__main__':\n    socketio.run(app)`;
                    else if (language === 'java') codeSnippet = `import io.socket.client.IO;\nimport io.socket.client.Socket;\n\npublic class ChatApplication {\n    private Socket socket;\n\n    public ChatApplication() throws Exception {\n        socket = IO.socket("http://localhost:3000");\n        socket.on(Socket.EVENT_CONNECT, args -> System.out.println("Connected"));\n        socket.connect();\n    }\n}`;
                    else if (language === 'cpp') codeSnippet = `// Chat application code using socket library\n`;
                    else if (language === 'ruby') codeSnippet = `require 'sinatra'\nrequire 'socketio'\n\nget '/' do\n    erb :index\nend\n\nget '/chat' do\n    # chat functionality\nend`;
                    else if (language === 'php') codeSnippet = `// Chat application code using PHP socket\n`;
                    else if (language === 'go') codeSnippet = `package main\n\nimport (\n    "github.com/gorilla/websocket"\n    "net/http"\n)\n\nfunc chatHandler(w http.ResponseWriter, r *http.Request) {\n    conn, err := websocket.Upgrade(w, r, nil)\n    if err != nil {\n        return\n    }\n    // chat functionality\n}`;
                    else if (language === 'typescript') codeSnippet = `import express from 'express';\nimport http from 'http';\nimport { Server } from 'socket.io';\n\nconst app = express();\nconst server = http.createServer(app);\nconst io = new Server(server);\n\nio.on('connection', (socket) => {\n    console.log('New client connected');\n    socket.on('sendMessage', (message) => {\n        io.emit('receiveMessage', message);\n    });\n    socket.on('disconnect', () => {\n        console.log('Client disconnected');\n    });\n});\n\nserver.listen(3000, () => {\n    console.log('Chat app listening on port 3000');\n});`;
                    else if (language === 'swift') codeSnippet = `import Foundation\n\n// Swift chat application code\n`;
                    break;

                    case 'functionality.createDynamicCalculator':
    if (language === 'javascript') 
        codeSnippet = `function calculator(operation, ...numbers) {\n    switch (operation) {\n        case 'add': return numbers.reduce((a, b) => a + b, 0);\n        case 'subtract': return numbers.reduce((a, b) => a - b);\n        case 'multiply': return numbers.reduce((a, b) => a * b, 1);\n        case 'divide': return numbers.reduce((a, b) => a / b);\n        default: return 'Invalid operation';\n    }\n}`;
    else if (language === 'python') 
        codeSnippet = `def calculator(operation, *numbers):\n    if operation == 'add': return sum(numbers)\n    elif operation == 'subtract': return numbers[0] - sum(numbers[1:])\n    elif operation == 'multiply':\n        result = 1\n        for num in numbers:\n            result *= num\n        return result\n    elif operation == 'divide':\n        result = numbers[0]\n        for num in numbers[1:]:\n            result /= num\n        return result\n    else: return 'Invalid operation'`;
    else if (language === 'java') 
        codeSnippet = `public class DynamicCalculator {\n    public static double calculate(String operation, double... numbers) {\n        switch (operation) {\n            case "add": return Arrays.stream(numbers).sum();\n            case "subtract": return numbers[0] - Arrays.stream(numbers, 1, numbers.length).sum();\n            case "multiply": return Arrays.stream(numbers).reduce(1, (a, b) -> a * b);\n            case "divide": {\n                double result = numbers[0];\n                for (int i = 1; i < numbers.length; i++) result /= numbers[i];\n                return result;\n            }\n            default: return 0;\n        }\n    }\n}`;
    else if (language === 'cpp') 
        codeSnippet = `double calculator(const std::string &operation, const std::vector<double> &numbers) {\n    if (operation == "add") return std::accumulate(numbers.begin(), numbers.end(), 0.0);\n    else if (operation == "subtract") return numbers[0] - std::accumulate(numbers.begin() + 1, numbers.end(), 0.0);\n    else if (operation == "multiply") return std::accumulate(numbers.begin(), numbers.end(), 1.0, std::multiplies<double>());\n    else if (operation == "divide") {\n        double result = numbers[0];\n        for (size_t i = 1; i < numbers.size(); ++i) result /= numbers[i];\n        return result;\n    }\n    else return 0;\n}`;
    else if (language === 'ruby') 
        codeSnippet = `def calculator(operation, *numbers)\n    case operation\n    when 'add'\n        numbers.sum\n    when 'subtract'\n        numbers.reduce(numbers[0], :-)\n    when 'multiply'\n        numbers.reduce(1, :*)\n    when 'divide'\n        numbers.reduce(numbers[0]) { |result, num| result / num }\n    else\n        'Invalid operation'\n    end\nend`;
    else if (language === 'php') 
        codeSnippet = `function calculator($operation, ...$numbers) {\n    switch ($operation) {\n        case 'add': return array_sum($numbers);\n        case 'subtract': return $numbers[0] - array_sum(array_slice($numbers, 1));\n        case 'multiply': return array_product($numbers);\n        case 'divide': {\n            $result = $numbers[0];\n            for ($i = 1; $i < count($numbers); $i++) $result /= $numbers[$i];\n            return $result;\n        }\n        default: return 'Invalid operation';\n    }\n}`;
    else if (language === 'go') 
        codeSnippet = `func calculator(operation string, numbers ...float64) float64 {\n    switch operation {\n    case "add":\n        sum := 0.0\n        for _, num := range numbers {\n            sum += num\n        }\n        return sum\n    case "subtract":\n        result := numbers[0]\n        for _, num := range numbers[1:] {\n            result -= num\n        }\n        return result\n    case "multiply":\n        product := 1.0\n        for _, num := range numbers {\n            product *= num\n        }\n        return product\n    case "divide":\n        result := numbers[0]\n        for _, num := range numbers[1:] {\n            result /= num\n        }\n        return result\n    default:\n        return 0\n    }\n}`;
    else if (language === 'typescript') 
        codeSnippet = `function calculator(operation: string, ...numbers: number[]): number {\n    switch (operation) {\n        case 'add': return numbers.reduce((a, b) => a + b, 0);\n        case 'subtract': return numbers[0] - numbers.slice(1).reduce((a, b) => a + b, 0);\n        case 'multiply': return numbers.reduce((a, b) => a * b, 1);\n        case 'divide': return numbers.reduce((a, b) => a / b);\n        default: throw new Error('Invalid operation');\n    }\n}`;
    else if (language === 'swift') 
        codeSnippet = `func calculator(operation: String, _ numbers: Double...) -> Double {\n    switch operation {\n    case "add": return numbers.reduce(0, +)\n    case "subtract": return numbers[0] - numbers.dropFirst().reduce(0, +)\n    case "multiply": return numbers.reduce(1, *)\n    case "divide": return numbers.reduce(numbers[0]) { $0 / $1 }\n    default: return 0\n    }\n}`;
    break;

        default:
            codeSnippet = 'Intent not recognized.';
    }

    return codeSnippet;
}

export { generateCodeSnippet }; // Export the function for use in other files