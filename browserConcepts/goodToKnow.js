// ? Streams: Handle data in chunks, enabling efficient data processing.

// ? Worker Threads: Allow parallel execution of JavaScript code, improving performance for CPU-bound tasks.

// ** Best for offloading CPU-intensive tasks or running parallel computations without blocking the main thread.


// ? Cluster Module: Distributes load across multiple processes, leveraging multiple CPU cores for scaling Node.js applications.

// ** Ideal for scaling applications across multiple CPU cores to handle high concurrency and traffic.


// HTTP SERVER

HEADERS

// 1. Metadata and Context

// Purpose: Headers provide context about the request , such as the type of content being sent, encoding methods, and authentication details.

// Example:

// Content-Type: Indicates the media type of the resource (e.g., application/json, text/html).

// Authorization: Contains credentials for authenticating the request.

// Why Not in Request Body?: Metadata about the request itself, like content type or authentication details, needs to be available before processing the body. Headers provide this information in a structured way that’s separate from the actual data payload.


// ? Why Not in Request Body?: Headers provide directives and instructions that affect how the data is handled and processed. Including these in the body would mix control information with the actual data, complicating the process.

