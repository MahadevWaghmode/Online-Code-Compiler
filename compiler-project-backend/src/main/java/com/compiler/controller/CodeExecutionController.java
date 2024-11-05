package com.compiler.controller;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.tools.Diagnostic;
import javax.tools.DiagnosticCollector;
import javax.tools.JavaCompiler;
import javax.tools.JavaFileObject;
import javax.tools.StandardJavaFileManager;
import javax.tools.ToolProvider;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class CodeExecutionController {

	@GetMapping("/")
	public String hello() {
		return "working fine";
	}

	@PostMapping("/execute")
	public ResponseEntity<ExecutionResponse> executeCode(@RequestBody String code) {
		try {
			// Execute the provided Java code
			String output = executeJavaCode(code);

			// Create a response object with the output
			ExecutionResponse response = new ExecutionResponse(output);

			// Return the response with HTTP status 200 (OK)

			return ResponseEntity.ok(response);

		} catch (Exception e) {
			// If an error occurs, return an error response with HTTP status 500 (Internal
			// Server Error)
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ExecutionResponse("Error executing code: " + e.getMessage()));
		}
	}

	private String executeJavaCode(String jsonString) {

		try {
			// Create ObjectMapper instance
			ObjectMapper mapper = new ObjectMapper();

			// Parse JSON string to JsonNode
			JsonNode jsonNode = mapper.readTree(jsonString);
			//System.out.println(jsonString);
			
			// Extract code and lang values
			String code = jsonNode.get("code").asText();
			String input =jsonNode.get("input").asText();
//			String lang = jsonNode.get("lang").asText();
			
			System.out.println("Input : "+input);
			String output = compileAndRun(code, input);
			System.out.println(output);
			return output;

		} catch (Exception e) {
			e.printStackTrace();
		}
		return "Output of the executed code";
	}

	// POJO for the execution response
	public static class ExecutionResponse {
		private String output;

		public ExecutionResponse(String output) {
			this.output = output;
		}

		public String getOutput() {
			return output;
		}

		public void setOutput(String output) {
			this.output = output;
		}
	}

	public static String compileAndRun(String code, String input) {
	    String className = extractClassName(code);
	    Path sourcePath = Paths.get(className + ".java");
	    try {
	        Files.write(sourcePath, code.getBytes());
	    } catch (IOException e) {
	        return "Error writing source file: " + e.getMessage();
	    }

	    JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
	    DiagnosticCollector<JavaFileObject> diagnostics = new DiagnosticCollector<>();
	    StandardJavaFileManager fileManager = compiler.getStandardFileManager(diagnostics, null, null);
	    Iterable<? extends JavaFileObject> compilationUnits = fileManager
	            .getJavaFileObjectsFromFiles(Arrays.asList(sourcePath.toFile()));
	    JavaCompiler.CompilationTask task = compiler.getTask(null, fileManager, diagnostics, null, null, compilationUnits);

	    boolean success = task.call();
	    if (!success) {
	        StringBuilder errorMsg = new StringBuilder();
	        for (Diagnostic<? extends JavaFileObject> diagnostic : diagnostics.getDiagnostics()) {
	            errorMsg.append("Error on line ").append(diagnostic.getLineNumber()).append(": ")
	                    .append(diagnostic.getMessage(null)).append("\n");
	        }
	        return errorMsg.toString();
	    }

	    try {
	        ProcessBuilder processBuilder = new ProcessBuilder("java", className);
	        processBuilder.redirectErrorStream(true);
	        Process process = processBuilder.start();

	        // Write the input to the process
	        try (BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(process.getOutputStream()))) {
	            writer.write(input);
	            writer.flush();
	        }

	        InputStream inputStream = process.getInputStream();
	        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
	        StringBuilder output = new StringBuilder();
	        String line;
	        while ((line = reader.readLine()) != null) {
	            output.append(line).append("\n");
	        }
	        process.waitFor();
	        return output.toString();
	    } catch (IOException | InterruptedException e) {
	        return "Error running the compiled class: " + e.getMessage();
	    } finally {
	        try {
	            Files.deleteIfExists(sourcePath);
	            Files.deleteIfExists(Paths.get(className + ".class"));
	        } catch (IOException e) {
	            // Ignore the exception
	        }
	    }
	}


	private static String extractClassName(String code) {
		// Regular expression to match a Java class declaration
		// Example: "public class ClassName {" or "class ClassName {"
		Pattern pattern = Pattern.compile("(?:public\\s+)?class\\s+(\\w+)");
		Matcher matcher = pattern.matcher(code);

		if (matcher.find()) {
			// Extract the class name from the first match
			return matcher.group(1);
		} else {
			// If no match is found, return a default name
			return "Main";
		}
	}
}
