from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import subprocess
import os

app = FastAPI()

# Allow frontend to talk to backend (CORS policy)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Make sure temp folder exists
os.makedirs("temp", exist_ok=True)

@app.post("/run")
async def run_code(request: Request):
    data = await request.json()
    code = data.get("code")

    if not code:
        return {"output": "No code provided."}

    file_path = "temp/temp.py"

    try:
        # Save the code to a temporary file
        with open(file_path, "w") as f:
            f.write(code)

        # Run the Python file and capture output/error
        result = subprocess.run(
            ["python3", file_path],
            capture_output=True,
            text=True,
            timeout=5
        )

        output = result.stdout or result.stderr
        return {"output": output}

    except subprocess.TimeoutExpired:
        return {"output": "Error: Code execution timed out."}
    except Exception as e:
        return {"output": f"Error: {str(e)}"}
