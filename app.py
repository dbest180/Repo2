#!/usr/bin/env python3
"""
Dockerized Fedora Web App - Backend Server
"""
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import json
import random
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load messages from JSON file
def load_messages():
    try:
        with open('data/messages.json', 'r') as f:
            data = json.load(f)
            return data.get('messages', [])
    except FileNotFoundError:
        return [
            "Docker + Fedora = Awesome!",
            "Containerization is the future!",
            "Running on your Acer Fedora machine",
            "Cinnamon desktop environment rocks!"
        ]

@app.route('/')
def serve_index():
    """Serve the main HTML file"""
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    """Serve static files"""
    return send_from_directory('.', path)

@app.route('/api/message')
def get_message():
    """Return a random message"""
    messages = load_messages()
    random_message = random.choice(messages)
    
    return jsonify({
        'message': random_message,
        'status': 'success',
        'source': 'docker-fedora-app'
    })

@app.route('/api/system-info')
def system_info():
    """Return system information"""
    return jsonify({
        'host': 'Acer Desktop',
        'os': 'Fedora Linux',
        'desktop': 'Cinnamon',
        'container_runtime': 'Docker',
        'project_path': '~/projects/Repo2',
        'status': 'running'
    })

@app.route('/api/health')
def health_check():
    """Health check endpoint for Docker"""
    return jsonify({'status': 'healthy', 'service': 'fedora-web-app'})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    debug = os.environ.get('DEBUG', 'false').lower() == 'true'
    
    print(f"🚀 Starting Dockerized Fedora Web App on port {port}")
    print(f"📁 Serving from: {os.path.abspath('.')}")
    
    app.run(host='0.0.0.0', port=port, debug=debug)