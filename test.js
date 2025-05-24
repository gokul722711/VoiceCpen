// Declare a global editor variable
let editor;

// Initialize Monaco Editor
require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.21.2/min/vs' } });
require(['vs/editor/editor.main'], function () {
    editor = monaco.editor.create(document.getElementById('code-editor'), {
        value: `// Start typing your code here...`,
        language: 'javascript', // Default language set to JavaScript
        theme: 'vs-dark',
        automaticLayout: true
    });

    // Change editor language based on dropdown selection
    document.getElementById('language').addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        monaco.editor.setModelLanguage(editor.getModel(), selectedLang);
        document.getElementById('selected-language').textContent = selectedLang.charAt(0).toUpperCase() + selectedLang.slice(1);
    });
});

// Initialize Speech Recognition (Web Speech API)
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

let isRecording = false;

// Global language variable
let currentLanguage = 'javascript';

// Update the language variable based on selection
document.getElementById('language').addEventListener('change', (event) => {
    currentLanguage = event.target.value;
    monaco.editor.setModelLanguage(editor.getModel(), currentLanguage);
    document.getElementById('selected-language').textContent = currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1);
});

// Load the commands from commands.json
let commandsList = [];

fetch('commands.json')
    .then(response => response.json())
    .then(data => {
        commandsList = data.commands;
    })
    .catch(error => console.error('Error loading commands:', error));

// Command parsing function
function parseCommand(transcript) {
    const command = transcript.toLowerCase();
    let matchedIntent = null;
    let variableName = '';
    let functionName = '';
    let moduleName = '';

    // Check for variable creation command and extract variable name
    const variableCreationPattern = /create a variable (\w+)/;
    const variableMatch = command.match(variableCreationPattern);
    if (variableMatch) {
        matchedIntent = 'code.createVariable';
        variableName = variableMatch[1]; // Extract the variable name from the command
    } else {
        // Check for function definition command and extract function name
        const functionDefinitionPattern = /define a function (\w+)/;
        const functionMatch = command.match(functionDefinitionPattern);
        if (functionMatch) {
            matchedIntent = 'code.defineFunction';
            functionName = functionMatch[1]; // Extract the function name from the command
        } else {
            // Check for comment command
            const commentPattern = /add a comment/;
            if (command.match(commentPattern)) {
                matchedIntent = 'code.addComment';
            } else {
                // Check for library import command and extract module name
                const importLibraryPattern = /import a library (\w+)/;
                const importMatch = command.match(importLibraryPattern);
                if (importMatch) {
                    matchedIntent = 'code.importLibrary';
                    moduleName = importMatch[1]; // Extract the module/library name from the command
                } else {
                    // If no match is found, check for custom commands from commandsList
                    for (let i = 0; i < commandsList.length; i++) {
                        if (command.includes(commandsList[i].pattern)) {
                            matchedIntent = commandsList[i].intent;
                            break;
                        }
                    }
                }
            }
        }
    }

    if (!matchedIntent) {
        console.error('No matching command found for:', command);
        return '';
    }

    // Generate code snippet based on intent, language, and specific names
    let codeSnippet = generateCodeSnippet(matchedIntent, currentLanguage, functionName || variableName || moduleName || '');

    return codeSnippet;
}

// Function to generate code snippet based on intent and language
// scripts.js
import { generateCodeSnippet } from './codeSnippetGenerator.js';

// Now you can use the generateCodeSnippet function in scripts.js
generateCodeSnippet();

console.log(generateCodeSnippet('code.createCppProgram'));
console.log(generateCodeSnippet('code.createPythonProgram'));
console.log(generateCodeSnippet('code.createJavaProgram'));
console.log(generateCodeSnippet('code.createJavascriptProgram'));
console.log(generateCodeSnippet('code.createRubyProgram'));
console.log(generateCodeSnippet('code.createVariable', 'javascript', 'myVar'));

// Insert code into Monaco Editor
function insertCodeIntoEditor(codeSnippet) {
    if (!editor) {
        console.error('Editor not initialized');
        return;
    }

    const position = editor.getPosition(); // Get current cursor position

    // Start an undo stop
    editor.pushUndoStop();

    // Execute the edit (insert code)
    editor.executeEdits('', [{
        range: new monaco.Range(position.lineNumber, position.column, position.lineNumber, position.column),
        text: codeSnippet + '\n', // Adding a newline after the code snippet
        forceMoveMarkers: true
    }]);

    // End an undo stop
    editor.pushUndoStop();

    // Move cursor to the end of the inserted code
    const lines = codeSnippet.split('\n');
    editor.setPosition({
        lineNumber: position.lineNumber + lines.length - 1,
        column: lines[lines.length - 1].length + 1
    });
}

// Toggle voice recognition
function toggleVoiceRecognition() {
    if (isRecording) {
        recognition.stop();
    } else {
        recognition.start();
    }
}

// Handle voice command results
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('transcription-box').innerHTML += `
        <div class="transcription-item">${transcript}</div>
    `;
    console.log('Voice command:', transcript);

    // Parse and handle the command
    const codeSnippet = parseCommand(transcript);
    if (codeSnippet) {
        insertCodeIntoEditor(codeSnippet);
    }
};

// Handle errors during voice recognition
recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
};

// Handle end of speech recognition
recognition.onend = () => {
    isRecording = false;
    document.getElementById('voice-command').textContent = 'Start Recording'; // Reset button text after stopping
};

// Start/Stop Recording button
document.getElementById('voice-command').addEventListener('click', () => {
    toggleVoiceRecognition();
    document.getElementById('voice-command').textContent = isRecording ? 'Start Recording' : 'Stop Recording';
    isRecording = !isRecording;
});

// Reset last transcript button
document.getElementById('reset-last').addEventListener('click', () => {
    const transcriptionBox = document.getElementById('transcription-box');
    const lastChild = transcriptionBox.lastElementChild;
    if (lastChild) {
        transcriptionBox.removeChild(lastChild);
    }
});

// Reset all transcripts button
document.getElementById('reset-all').addEventListener('click', () => {
    document.getElementById('transcription-box').innerHTML = '';
});

// Get the dropdown button and add a click event listener
document.querySelector('.dropbtn').addEventListener('click', function () {
    // Toggle the 'show' class on the dropdown container to show/hide the buttons
    this.parentElement.classList.toggle('show');
  });
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  

// Utility buttons functionality
document.getElementById('runCode').addEventListener('click', () => {
    // Implement code execution logic here
    // For security reasons, executing arbitrary code in the browser can be risky
    // Consider using a sandboxed environment or sending code to a server for execution
});

document.getElementById('clearOutput').addEventListener('click', () => {
    document.getElementById('terminal-output').innerHTML = '';
});

document.getElementById('resetCode').addEventListener('click', () => {
    editor.setValue(`// Start typing your code here...`);
});

document.getElementById('saveCode').addEventListener('click', () => {
    const code = editor.getValue();
    const language = document.getElementById('language').value;
    const extensions = {
        'javascript': 'js',
        'python': 'py',
        'java': 'java',
        'cpp': 'cpp',
        'csharp': 'cs',
        'ruby': 'rb',
        'php': 'php',
        'go': 'go',
        'typescript': 'ts',
        'swift': 'swift',
        'html': 'html',
        'css': 'css'
    };
    const filename = `code.${extensions[language] || 'txt'}`;
    const blob = new Blob([code], { type: 'text/plain' });
    const link = document.createElement('a');
    link.download = filename;
    link.href = URL.createObjectURL(blob);
    link.click();
});

// Undo nad Redo buttons
document.getElementById('undoAction').addEventListener('click', () => {
    editor.trigger('keyboard', 'undo', null);
});

document.getElementById('redoAction').addEventListener('click', () => {
    editor.trigger('keyboard', 'redo', null);
});


document.getElementById('formatCode').addEventListener('click', () => {
    editor.getAction('editor.action.formatDocument').run();
});

// Terminal toggle functionality
let isTerminalCollapsed = false;
document.getElementById('terminal-toggle').addEventListener('click', () => {
    const terminalOutput = document.getElementById('terminal-output');
    const terminalInput = document.getElementById('terminal-input');
    if (isTerminalCollapsed) {
        terminalOutput.style.display = 'block';
        terminalInput.style.display = 'block';
        document.getElementById('terminal-toggle');
    } else {
        terminalOutput.style.display = 'none';
        terminalInput.style.display = 'none';
        document.getElementById('terminal-toggle');
    }
    isTerminalCollapsed = !isTerminalCollapsed;
});

// Terminal input functionality
document.getElementById('terminal-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const input = event.target.value;
        // Handle terminal input here
        // For example, you can echo the input back
        document.getElementById('terminal-output').innerHTML += `<div>&gt; ${input}</div>`;
        event.target.value = '';
    }
});

// Update the language options for Monaco Editor
document.getElementById('language').innerHTML = `
    <option value="javascript">JavaScript</option>
    <option value="python">Python</option>
    <option value="java">Java</option>
    <option value="cpp">C++</option>
    <option value="csharp">C#</option>
    <option value="ruby">Ruby</option>
    <option value="php">PHP</option>
    <option value="go">Go</option>
    <option value="typescript">TypeScript</option>
    <option value="swift">Swift</option>
`;

// Toggle navigation menu visibility
document.getElementById('nav-icon').addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active'); // Toggles between showing and hiding the menu
});
// Run Code Button Event
document.getElementById('runCode').addEventListener('click', function () {
    const code = window.editor.getValue(); // Get the code from the Monaco editor
    const language = "java"; // Explicitly setting language to Java
    runCode(code, language);
});

// Function to run code and display output
function runCode(code, language) {
    const clientId = "4479e8a13741ab921621397fe3578905"; // Your JDoodle Client ID
    const clientSecret = "f5755c14390f9523517cf0719c9292d521545eb4abdf30043d8a6c6b5815c791"; // Your JDoodle Client Secret
    const versionIndex = "0"; // Default version for Java

    // Log the code being sent
    console.log("Code to be executed:", code);

    const requestBody = {
        clientId,
        clientSecret,
        script: code, // Use user-provided code
        language: language, // Set language
        versionIndex
    };

    fetch("http://localhost:3000/execute", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(result => {
        // Log result for debugging
        console.log('JDoodle Result:', result);
        // Check for errors in the result
        if (result.error) {
            document.getElementById('terminal-output').innerText = result.error;
        } else {
            document.getElementById('terminal-output').innerText = result.output || 'No output available';
        }
    })
    .catch(error => {
        document.getElementById('terminal-output').innerText = "Error: " + error.message;
    });
}

// Clear output functionality
document.getElementById('clearOutput').addEventListener('click', function () {
    document.getElementById('terminal-output').innerHTML = '';
});
