// --------------QUESTION-2------------
// 1. Explain why do we want sometimes to use setImmediate instead of using setTimeout?

/*setTimeout schedules a callback to run after a specific time, the functions are registered
in the timers phase of the event loop. No guarantees can be made about how long it
could take. so, it will be slow because it will check the timer at least once before
executing. That’s why we need sometimes to use setImmediate which schedules a
callback to run at check phase of the event loop after IO events' callbacks.*/

// 2. Explain the difference between process.nextTick and setImmediate?

/*process.nextTick() is used to schedule a callback function to be invoked in the next iteration of
the event loop. setImmediate callbacks are called after I/O Queue callbacks are finished or
timed out.*/

// 3. Does Node.js has window object?

/*No, Node.js does not have a window object. The window object is specific to web browsers and
 provides an interface to the browser's window and document objects. 
 In the context of server-side JavaScript with Node.js, the global object is global, 
 and it serves a similar purpose as window does in the browser environment. 
 global provides access to global variables and functions in the Node.js runtime,
 but it does not have properties and methods related to the browser window or document.*/