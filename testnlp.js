const { initializeManager, loadCommands, addCommand, processCommand } = require('./nlp');

async function test() {
    await initializeManager();
    await loadCommands();

    // List of commands to test, including new commands
    const commands = [
        "create a variable",
        "define a function",
        "add a comment",
        "import a library",
        "write a loop",
        "set a value",
        "initialize an array",
        "print a message",
        "delete a file",
        "update a record",
        "create a class",
        "create a new variable",
        "define a new function",
        "insert a comment",
        "load a library",
        "write a for loop",
        "assign a value",
        "initialize a list",
        "display a message",
        "remove a file",
        "modify a record",
        "define a class",
        "create an if condition",
        // Adding existing commands for programs
        "create a C++ program",
        "create a Python program",
        "create a Java program",
        "create a JavaScript program",
        "create a Ruby program",
        // Adding newly defined commands for functionalities
        "create a calculator",
        "create a to-do list",
        "create a guessing game",
        "create a countdown timer",
        "create a web server",
        "create a chat application",
        "create a random quote generator",
        "create a quiz app",
        "create a fibonacci sequence generator",
        "create a web scraper",
        "create a basic website structure"
    ];

    // Testing existing and new commands
    for (const cmd of commands) {
        const response = await processCommand(cmd, 'user1');
        console.log(`Command: "${cmd}"`);
        console.log(`Response: ${response}`);
    }

    // Adding and testing a new command dynamically
    const newPattern = 'create a new C++ program'; // Example of a new command
    const newIntent = 'code.createCppProgram'; // Intent for the new command

    console.log('Adding new command...');
    await addCommand(newPattern, newIntent);

    const newResponse = await processCommand(newPattern, 'user1');
    console.log(`Command: "${newPattern}"`);
    console.log(`Response: ${newResponse}`);
}

// Start the test
test();
