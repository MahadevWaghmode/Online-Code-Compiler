# Online-Code-Compiler
An online code compiler that supports multiple programming languages including Python, JavaScript, Java, and C++. The project provides real-time code compilation, syntax highlighting, and an intuitive user interface for writing, compiling, and debugging code directly from the browser.

Features
Multi-language support: Compile and run code in Python, JavaScript, Java, and C++.
Real-time compilation: View results immediately after writing code.
Syntax highlighting: Intuitive code editor with syntax highlighting for each supported language.
Light/Dark Mode: Toggle between light and dark themes.
Secure sandboxed environment: Safely compile and execute code.
Technologies Used
Frontend: React.js, Vite, and Chakra UI
Backend: Java Spring Boot and Node.js for API and code execution management
Database: MySQL or MongoDB for storing user preferences and saved code snippets
Code Execution: Docker for sandboxed environment and secure code execution
Screenshots
Include some screenshots here to showcase the UI and functionality.

Getting Started
Follow these instructions to set up and run the project on your local machine.

Prerequisites
Node.js and npm (for frontend setup)
Java JDK (for backend setup with Spring Boot)
Docker (for sandboxed code execution)
MySQL or MongoDB (depending on your database preference)
Installation
Clone the repository

bash
Copy code
git clone https://github.com/MahadevWaghmode/Online-Code-Compiler.git
cd Online-Code-Compiler
Frontend Setup

bash
Copy code
cd compiler-project-frontend
npm install
Backend Setup

Go to the backend folder:
bash
Copy code
cd ../compiler-project-backend
Configure the database connection in application.properties.
Build and run the backend:
bash
Copy code
./mvnw spring-boot:run
Docker Setup for Code Execution (Optional)

Build and run the Docker container if you’re using Docker for code execution isolation:
bash
Copy code
docker build -t code-compiler .
docker run -d -p 8081:8081 code-compiler
Running the Application
Run the Frontend

bash
Copy code
cd compiler-project-frontend
npm run dev
Access the App

Open your browser and go to http://localhost:3000 to start using the Online Code Compiler.
Usage
Select the programming language from the dropdown.
Write your code in the editor.
Click the "Run" button to execute the code.
View the output in the output section.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code of conduct.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
For questions or feedback, please reach out:

Email: mahadevwaghmode2@gmail.com
GitHub: https://github.com/MahadevWaghmode
