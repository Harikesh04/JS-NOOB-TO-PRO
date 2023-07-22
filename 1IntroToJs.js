//  js is  shyncronous and single threated language.

// synchronous means in js follow the command in order of top to bottom in a specific order .

// IT  means we will go in to next line of code when the first line is executed.

// single threated - means js can only run one command at a time .

// ?? what are its benifit

// ? 1.Simplicity:-Single-threaded programming is simpler to write you don't have to worry about race conditions, deadlocks, and other concurrency issues that can arise in multi-threaded code.

// ?2.Predictable Behavior:it is easier to predict how code will behave and how long it will take to execute.

//? while in multithreated it is difficult to know when different threads will execute and how they will interact with each other.

//? 3.Event-Driven Architecture:JavaScript's single-threaded nature is well-suited for event-driven programming, where the code responds to events and user actions in a non-blocking way. This allows for a more responsive and interactive user interface.

//? 4.Efficient Resource Management:Single-threaded programming allows for more efficient use of resources, as the system does not have to spend time and memory managing multiple threads and their associated resources.

// ?what is interpreted language?

//  ** interpreted language is that language where source code is not compiled into machine code before it is run,but is instead executed directly by an interpreter. The interpreter reads and executes the code line-by-line, translating each line into machine code as it goes.

//** */  sometimes it could be fast than some time it could be slow

// !! Lossly typed language: In these types of language where variable don't need to be declared with a specific data type like in js var = haary vs in C++ string s = harry

// ** the reason for loosely typed is because js in not build to run in compiler it is for browser where there is no guarentee of what space is avilable so it gives space to the var acc to its type of the data not int string .

// * therefore it will prevent a lot of space in the run time.
