from flask import Flask
from flask_socketio import SocketIO, emit
import deepspeech
import numpy as np
import wave
import io

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

# Load DeepSpeech model
model_file = 'deepspeech-0.9.3-models.pbmm'  # Path to your model file
scorer_file = 'deepspeech-0.9.3-models.scorer'  # Path to your scorer file
model = deepspeech.Model(model_file)
model.enableExternalScorer(scorer_file)

# Audio format checker
def check_audio_format(audio_data):
    with wave.open(io.BytesIO(audio_data), 'rb') as wf:
        channels = wf.getnchannels()
        sample_width = wf.getsampwidth()
        sample_rate = wf.getframerate()

        if channels != 1 or sample_width != 2 or sample_rate != 16000:
            raise ValueError("Invalid audio format: Expected mono, 16-bit PCM, 16000 Hz")

@socketio.on('audio')
def handle_audio(audio_data):
    try:
        # Log receiving audio data for debugging
        print("Received audio data")

        # Check the audio format
        check_audio_format(audio_data)

        # Process the audio
        audio_io = io.BytesIO(audio_data)
        with wave.open(audio_io, 'rb') as wf:
            audio = np.frombuffer(wf.readframes(wf.getnframes()), dtype=np.int16)

        # Perform transcription using DeepSpeech
        transcription = model.stt(audio)

        # Log the transcription result
        print(f"Transcription: {transcription}")

        # Send the transcription back to the client
        emit('message', {'transcription': transcription})

    except ValueError as e:
        # Log the error message
        print(f"Error: {e}")

        # Send the error back to the client
        emit('message', {'error': str(e)})

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)
