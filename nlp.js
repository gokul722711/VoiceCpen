const { containerBootstrap } = require('@nlpjs/core');
const { NluManager, NluNeural } = require('@nlpjs/nlu');
const { LangEn } = require('@nlpjs/lang-en');
const fs = require('fs');
const path = require('path');

let manager;
const dataFilePath = path.join(__dirname, 'commands.json'); // Path to the JSON file with commands

let context = {}; // Global context object

// Function to initialize the NLP manager
async function initializeManager() {
    if (manager) return; // Prevent reinitialization
    try {
        const container = await containerBootstrap();
        container.use(LangEn);
        container.use(NluNeural);

        manager = new NluManager({
            container,
            locales: ['en'], // Add other languages if needed
            trainByDomain: false,
        });

        await loadCommands(); // Load commands during initialization
    } catch (error) {
        console.error('Error initializing manager:', error);
    }
}

// Function to load commands from the JSON file
async function loadCommands() {
    try {
        if (!fs.existsSync(dataFilePath)) {
            console.log('Commands file does not exist. Creating a new one.');
            fs.writeFileSync(dataFilePath, JSON.stringify({ commands: [] }, null, 2));
        }

        const data = JSON.parse(fs.readFileSync(dataFilePath));

        for (const { pattern, intent } of data.commands) {
            manager.assignDomain('en', intent, 'code');
            manager.add('en', pattern, intent);
        }

        await manager.train();
        console.log('Commands loaded and model trained.');
    } catch (error) {
        console.error('Error loading commands:', error);
    }
}

// Function to add a new command to the manager and the JSON file
async function addCommand(pattern, intent) {
    try {
        if (!manager) await initializeManager();

        manager.assignDomain('en', intent, 'code');
        manager.add('en', pattern, intent);

        let commands = [];
        if (fs.existsSync(dataFilePath)) {
            commands = JSON.parse(fs.readFileSync(dataFilePath)).commands;
        }

        commands.push({ pattern, intent });
        fs.writeFileSync(dataFilePath, JSON.stringify({ commands }, null, 2));

        await manager.train();
        console.log(`Command added: ${pattern} with intent: ${intent}`);
    } catch (error) {
        console.error('Error adding command:', error);
    }
}

// Function to process a command and return the appropriate response
async function processCommand(command, userId) {
    try {
        if (!manager) await initializeManager();

        // Initialize context for new user
        if (!context[userId]) {
            context[userId] = {};
        }

        const response = await manager.process('en', command);

        // Handling different intents
        switch (response.intent) {
            case 'code.createVariable':
                context[userId].lastCommand = 'createVariable';
                return 'Creating a variable...';
            case 'code.defineFunction':
                context[userId].lastCommand = 'defineFunction';
                return 'Defining a function...';
            case 'code.addComment':
                context[userId].lastCommand = 'addComment';
                return 'Adding a comment...';
            case 'code.importLibrary':
                context[userId].lastCommand = 'importLibrary';
                return 'Importing a library...';
            case 'code.writeLoop':
                context[userId].lastCommand = 'writeLoop';
                return 'Writing a loop...';
            case 'code.setValue':
                context[userId].lastCommand = 'setValue';
                return 'Setting a value...';
            case 'code.initializeArray':
                context[userId].lastCommand = 'initializeArray';
                return 'Initializing an array...';
            case 'code.printMessage':
                context[userId].lastCommand = 'printMessage';
                return 'Printing a message...';
            case 'code.deleteFile':
                context[userId].lastCommand = 'deleteFile';
                return 'Deleting a file...';
            case 'code.updateRecord':
                context[userId].lastCommand = 'updateRecord';
                return 'Updating a record...';
            case 'code.createClass':
                context[userId].lastCommand = 'createClass';
                return 'Creating a class...';
            case 'code.createIfCondition':
                context[userId].lastCommand = 'createIfCondition';
                return 'Creating an if condition...';
            case 'code.createCppProgram':
                context[userId].lastCommand = 'createCppProgram';
                return 'Creating a C++ program...';
            case 'code.createPythonProgram':
                context[userId].lastCommand = 'createPythonProgram';
                return 'Creating a Python program...';
            case 'code.createJavaProgram':
                context[userId].lastCommand = 'createJavaProgram';
                return 'Creating a Java program...';
            case 'code.createJavascriptProgram':
                context[userId].lastCommand = 'createJavascriptProgram';
                return 'Creating a JavaScript program...';
            case 'code.createRubyProgram':
                context[userId].lastCommand = 'createRubyProgram';
                return 'Creating a Ruby program...';
            // New commands for additional functionalities
            case 'functionality.createCalculator':
                context[userId].lastCommand = 'createCalculator';
                return 'Creating a calculator...';
            case 'functionality.createToDoList':
                context[userId].lastCommand = 'createToDoList';
                return 'Creating a to-do list...';
            case 'functionality.createGuessingGame':
                context[userId].lastCommand = 'createGuessingGame';
                return 'Creating a guessing game...';
            case 'functionality.createCountdownTimer':
                context[userId].lastCommand = 'createCountdownTimer';
                return 'Creating a countdown timer...';
            case 'functionality.createWebServer':
                context[userId].lastCommand = 'createWebServer';
                return 'Creating a web server...';
            case 'functionality.createChatApplication':
                context[userId].lastCommand = 'createChatApplication';
                return 'Creating a chat application...';
            case 'functionality.createRandomQuoteGenerator':
                context[userId].lastCommand = 'createRandomQuoteGenerator';
                return 'Creating a random quote generator...';
            case 'functionality.createQuizApp':
                context[userId].lastCommand = 'createQuizApp';
                return 'Creating a quiz app...';
            case 'functionality.createFibonacciGenerator':
                context[userId].lastCommand = 'createFibonacciGenerator';
                return 'Creating a Fibonacci sequence generator...';
            case 'functionality.createWebScraper':
                context[userId].lastCommand = 'createWebScraper';
                return 'Creating a web scraper...';
            case 'functionality.createWebsiteStructure':
                context[userId].lastCommand = 'createWebsiteStructure';
                return 'Creating a basic website structure...';
            default:
                return 'Command not recognized.';
        }
    } catch (error) {
        console.error('Error processing command:', error);
        return 'An error occurred while processing the command.';
    }
}

// Export functions for use in other modules
module.exports = { initializeManager, loadCommands, addCommand, processCommand };
