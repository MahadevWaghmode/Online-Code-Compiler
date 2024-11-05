
# Online Code Compiler

An online code compiler that supports multiple programming languages, including Python, JavaScript, Java, and C++. The project provides real-time code compilation, syntax highlighting, and an intuitive user interface for writing, compiling, and debugging code directly from the browser.

## Features

- **Multi-language Support**: Compile and run code in Python, JavaScript, Java, and C++.
- **Real-time Compilation**: View results immediately after writing code.
- **Syntax Highlighting**: Intuitive code editor with syntax highlighting for each supported language.
- **Light/Dark Mode**: Toggle between light and dark themes.

## Technologies Used

- **Frontend**: React.js, Vite, Chakra UI
- **Backend**: Java Spring Boot, Node.js for API and code execution management
- **Database**: MySQL 

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- **Node.js** and **npm** (for frontend setup)
- **Java JDK** (for backend setup with Spring Boot)
- **MySQL** or **MongoDB** (depending on your database preference)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/MahadevWaghmode/Online-Code-Compiler.git
   cd Online-Code-Compiler
   ```

2. **Frontend Setup**
   ```bash
   cd compiler-project-frontend
   npm install
   ```

3. **Backend Setup**
   - Go to the backend folder:
     ```bash
     cd ../compiler-project-backend
     ```
   - Configure the database connection in `application.properties`.
   - Build and run the backend:
     ```bash
     ./mvnw spring-boot:run
     ```


### Running the Application

1. **Run the Frontend**
   ```bash
   cd compiler-project-frontend
   npm run dev
   ```

2. **Access the App**
   - Open your browser and go to `http://localhost:3000` to start using the Online Code Compiler.

## Usage

1. Select the programming language from the dropdown menu.
2. Write your code in the editor.
3. Click the "Run" button to execute the code.
4. View the output in the designated output section.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure to follow the code of conduct.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For questions or feedback, please reach out:

- **Email**: [mahadevwaghmode2@gmail.com](mailto:mahadevwaghmode2@gmail.com)
- **GitHub**: [https://github.com/MahadevWaghmode](https://github.com/MahadevWaghmode)
