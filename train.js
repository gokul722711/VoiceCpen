const tf = require('@tensorflow/tfjs');
const fs = require('fs');
const natural = require('natural');

// Load commands from commands.json
const commands = JSON.parse(fs.readFileSync('commands.json'));

// Preprocess the data
const trainingData = commands.commands.map(command => ({
    input: command.pattern,
    output: command.intent
}));

// Create a tokenizer
const tokenizer = new natural.WordTokenizer();

// Vectorize input data
const vectorizeInput = (input) => {
    return tokenizer.tokenize(input).map(word => word.toLowerCase());
};

// Prepare data for training
const xs = tf.tensor2d(trainingData.map(d => {
    const inputVector = vectorizeInput(d.input);
    // Convert words to indices (you need to build a dictionary to map words to indices)
    return inputVector.map(word => word.charCodeAt(0)); // Simple example: converting char to char code
}));

const intents = [...new Set(trainingData.map(d => d.output))]; // Get unique intents
const outputSize = intents.length; // Number of unique intents

const ys = tf.tensor2d(trainingData.map(d => {
    const outputVector = Array(outputSize).fill(0);
    const index = intents.indexOf(d.output);
    outputVector[index] = 1; // One-hot encoding
    return outputVector;
}));

// Create and train the model
const model = tf.sequential();
model.add(tf.layers.dense({ units: 64, activation: 'relu', inputShape: [xs.shape[1]] })); // Ensure correct input shape
model.add(tf.layers.dense({ units: outputSize, activation: 'softmax' })); // Use outputSize for units

model.compile({
    optimizer: 'adam',
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
});

// Train the model
const trainModel = async () => {
    await model.fit(xs, ys, {
        epochs: 100,
        callbacks: {
            onEpochEnd: (epoch, logs) => {
                console.log(`Epoch ${epoch}: loss = ${logs.loss}`);
            }
        }
    });
    await model.save('file://model/my-model'); // Save the model
};

trainModel();
