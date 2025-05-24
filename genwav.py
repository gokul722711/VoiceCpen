import numpy as np
import wave

def generate_wave(filename, duration=1.0, freq=440.0, sample_rate=16000):
    t = np.linspace(0, duration, int(sample_rate * duration), endpoint=False)
    waveform = 0.5 * np.sin(2 * np.pi * freq * t)
    waveform = (waveform * 32767).astype(np.int16)
    
    with wave.open(filename, 'wb') as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(sample_rate)
        wf.writeframes(waveform.tobytes())

generate_wave('test.wav')
