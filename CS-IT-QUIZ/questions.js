// Array of Questions grouped by Category ( 25 Questions Each)

const questions = [
    {
        category: "Web Development" ,
        questions : [
            {
                // Question 1
                question: "Which HTML tag is used to create a hyperlink?",
                options: ["<link>", "<a>", "<href>", "<hyperlink>"],
                correctAnswer: 1,
            },
            {
                // Question 2
                question: "What is the correct HTML tag to define italicized text?",
                options: ["<italic>", "<i>", "<em>", "<it>"],
                correctAnswer: 2,
            },
            {
                // Question 3
                question: "Which attribute is used to uniquely identify an element in HTML?",
                options: ["class", "id", "name", "tag"],
                correctAnswer: 1,
            },
            {
                // Question 4
                question: "Which CSS property is used to change the text color?",
                options: ["background", "text-color", "color", "font-color"],
                correctAnswer: 2,
            },
            {
                // Question 5
                question: "What is the correct HTML input type for selecting a date?",
                options: ["text", "datetime", "date", "calendar"],
                correctAnswer: 2,
            },
            {
                // Question 6
                question: "Which JavaScript keyword is used to declare a constant?",
                options: ["var", "let", "const", "constant"],
                correctAnswer: 2,
            },
            {
                // Question 7
                question: "Which tag is used to define a header section in HTML?",
                options: ["<header>", "<head>", "<hgroup>", "<section>"],
                correctAnswer: 0,
            },
            {
                // Question 8
                question: "Which CSS property sets the space between the content and the border?",
                options: ["margin", "padding", "border-spacing", "spacing"],
                correctAnswer: 1,
            },
            {
                // Question 9
                question: "Which method is used to add an event listener in JavaScript?",
                options: ["addListener()", "addEventListener()", "attachEvent()", "bindEvent()"],
                correctAnswer: 1,
            },
            {
                // Question 10
                question: "Which tag is used to display a horizontal rule in HTML?",
                options: ["<line>", "<hr>", "<rule>", "<divider>"],
                correctAnswer: 1,
            },
            {
                // Question 11
                question: "Which HTML attribute specifies the source file for an image?",
                options: ["src", "href", "link", "url"],
                correctAnswer: 0,
            },
            {
                // Question 12
                question: "Which CSS property is used to control the order of elements in a flex container?",
                options: ["order", "flex-order", "position", "z-index"],
                correctAnswer: 0,
            },
            {
                // Question 13
                question: "Which JavaScript function parses a JSON string into an object?",
                options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.objectify()"],
                correctAnswer: 0,
            },
            {
                // Question 14
                question: "Which HTML element is used to group options in a dropdown list?",
                options: ["<option>", "<select>", "<optgroup>", "<fieldset>"],
                correctAnswer: 2,
            },
            {
                // Question 15
                question: "Which PHP operator is used to concatenate strings?",
                options: ["+", ".", "&", "concat"],
                correctAnswer: 1,
            },
            {
                // Question 16
                question: "Which HTML attribute is used to open a link in a new tab?",
                options: ["target='_blank'", "newtab", "open='_new'", "rel='newtab'"],
                correctAnswer: 0,
            },
            {
                // Question 17
                question: "Which CSS property controls the visibility of an element?",
                options: ["display", "opacity", "visibility", "show"],
                correctAnswer: 2,
            },
            {
                // Question 18
                question: "What is the default method for a form submission in HTML?",
                options: ["GET", "POST", "PUT", "DELETE"],
                correctAnswer: 0,
            },
            {
                // Question 19
                question: "Which JavaScript method is used to remove the last element of an array?",
                options: ["pop()", "push()", "shift()", "splice()"],
                correctAnswer: 0,
            },
            {
                // Question 20
                question: "Which tag is used to create a table row in HTML?",
                options: ["<tr>", "<th>", "<td>", "<row>"],
                correctAnswer: 0,
            },
            {
                // Question 21
                question: "What does the <canvas> element in HTML allow you to do?",
                options: ["Add multimedia content", "Draw graphics", "Embed a video", "Create a table"],
                correctAnswer: 1,
            },
            {
                // Question 22
                question: "Which CSS property is used to align items in a flex container?",
                options: ["align-items", "justify-content", "flex-align", "align-content"],
                correctAnswer: 0,
            },
            {
                // Question 23
                question: "Which PHP function is used to get the current date and time?",
                options: ["now()", "getDate()", "current_date()", "date()"],
                correctAnswer: 3,
            },
            {
                // Question 24
                question: "Which HTML input type is used for entering a telephone number?",
                options: ["phone", "tel", "number", "contact"],
                correctAnswer: 1,
            },
            {
                // Question 25
                question: "Which JavaScript array method returns a new array with elements that pass a test?",
                options: ["map()", "reduce()", "filter()", "forEach()"],
                correctAnswer: 2,
            }
        ]
    } ,

    {
        category:"OOPs With Java" ,
        questions :[
            {
                // Question 1
                question: "What is the primary feature of Object-Oriented Programming?",
                options: ["Procedural code", "Encapsulation", "High-level language", "Dynamic typing"],
                correctAnswer: 1,
            },
            {
                // Question 2
                question: "Which Java feature allows a class to inherit methods and properties from another class?",
                options: ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
                correctAnswer: 1,
            },
            {
                // Question 3
                question: "Which method is called automatically when an object is created?",
                options: ["setter()", "getter()", "constructor", "initialize()"],
                correctAnswer: 2,
            },
            {
                // Question 4
                question: "Which concept of OOP is demonstrated by method overloading?",
                options: ["Abstraction", "Encapsulation", "Polymorphism", "Inheritance"],
                correctAnswer: 2,
            },
            {
                // Question 5
                question: "What does the 'this' keyword in Java refer to?",
                options: ["Static members", "Parent class", "Current object", "Child class"],
                correctAnswer: 2,
            },
            {
                // Question 6
                question: "Which access modifier makes a member accessible only within the same class?",
                options: ["Public", "Private", "Protected", "Default"],
                correctAnswer: 1,
            },
            {
                // Question 7
                question: "What is the purpose of the 'super' keyword in Java?",
                options: ["Access private members", "Refer to the current object", "Call parent class methods or constructors", "Override methods"],
                correctAnswer: 2,
            },
            {
                // Question 8
                question: "Which concept is demonstrated by using 'abstract' classes?",
                options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
                correctAnswer: 3,
            },
            {
                // Question 9
                question: "Which keyword is used to inherit a class in Java?",
                options: ["extend", "extends", "inherit", "inherits"],
                correctAnswer: 1,
            },
            {
                // Question 10
                question: "Which Java feature allows the same function name to perform different tasks?",
                options: ["Method overloading", "Method overriding", "Encapsulation", "Dynamic binding"],
                correctAnswer: 0,
            },
            {
                // Question 11
                question: "What is the primary purpose of interfaces in Java?",
                options: ["To create abstract methods", "To implement multiple inheritance", "To define private methods", "To initialize objects"],
                correctAnswer: 1,
            },
            {
                // Question 12
                question: "What is the output of the following operation: 10 + \"5\" in Java?",
                options: ["105", "15", "Error", "105.0"],
                correctAnswer: 0,
            },
            {
                // Question 13
                question: "Which of the following demonstrates method overriding?",
                options: ["Two methods with the same name but different parameters", "A subclass method with the same signature as a superclass method", "A private method in a class", "Two constructors in the same class"],
                correctAnswer: 1,
            },
            {
                // Question 14
                question: "Which of the following is NOT a principle of OOP?",
                options: ["Encapsulation", "Inheritance", "Polymorphism", "Recursion"],
                correctAnswer: 3,
            },
            {
                // Question 15
                question: "Which of the following is used to handle runtime errors in Java?",
                options: ["try-catch blocks", "constructors", "destructors", "final classes"],
                correctAnswer: 0,
            },
            {
                // Question 16
                question: "What is the purpose of a copy constructor in Java?",
                options: ["Initialize arrays", "Duplicate objects", "Create static methods", "Perform recursion"],
                correctAnswer: 1,
            },
            {
                // Question 17
                question: "Which of these is a correct way to achieve multilevel inheritance in Java?",
                options: ["Interface implementation", "Static methods", "Extending multiple classes", "A class inheriting another class that inherits another class"],
                correctAnswer: 3,
            },
            {
                // Question 18
                question: "Which keyword is used to restrict inheritance in Java?",
                options: ["restrict", "final", "private", "sealed"],
                correctAnswer: 1,
            },
            {
                // Question 19
                question: "Which keyword is used to implement an interface in Java?",
                options: ["implement", "implements", "inherit", "inherits"],
                correctAnswer: 1,
            },
            {
                // Question 20
                question: "Which method is used to start a thread in Java?",
                options: ["init()", "start()", "run()", "execute()"],
                correctAnswer: 1,
            },
            {
                // Question 21
                question: "Which exception is thrown when dividing by zero in Java?",
                options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "ArithmeticException", "RuntimeException"],
                correctAnswer: 2,
            },
            {
                // Question 22
                question: "What is the purpose of the 'finally' block in Java?",
                options: ["To catch exceptions", "To execute code after a try block", "To define abstract methods", "To initialize static variables"],
                correctAnswer: 1,
            },
            {
                // Question 23
                question: "Which of the following is true about static methods in Java?",
                options: ["They belong to an instance of the class", "They can access non-static members", "They belong to the class itself", "They require object creation to call"],
                correctAnswer: 2,
            },
            {
                // Question 24
                question: "What is the main advantage of using packages in Java?",
                options: ["Improves performance", "Allows for access modifiers", "Avoids name conflicts and organizes code", "Adds dynamic typing"],
                correctAnswer: 2,
            },
            {
                // Question 25
                question: "Which method is used to copy the content of one file to another in Java?",
                options: ["writeFile()", "readFile()", "FileChannel.transferTo()", "copyFile()"],
                correctAnswer: 2,
            }
        ]
    } ,

    {
        category:"Database Management System" ,
        questions : [
            {
                // Question 1
                question: "Which SQL command is used to create a new table?",
                options: ["INSERT", "CREATE", "ALTER", "UPDATE"],
                correctAnswer: 1,
            },
            {
                // Question 2
                question: "What does the PRIMARY KEY constraint ensure in a table?",
                options: ["Allows duplicate rows", "Ensures a unique value for each row", "Allows null values", "Creates a foreign relationship"],
                correctAnswer: 1,
            },
            {
                // Question 3
                question: "Which SQL command is used to insert data into a table?",
                options: ["INSERT INTO", "ADD DATA", "PUT INTO", "SET VALUES"],
                correctAnswer: 0,
            },
            {
                // Question 4
                question: "What is the purpose of a FOREIGN KEY in a table?",
                options: ["To reference another table", "To create a unique index", "To define data types", "To delete a column"],
                correctAnswer: 0,
            },
            {
                // Question 5
                question: "Which integrity constraint ensures that all referenced records in a table exist?",
                options: ["Check", "Unique", "Not Null", "Foreign Key"],
                correctAnswer: 3,
            },
            {
                // Question 6
                question: "Which SQL command is used to remove all records from a table without deleting the table?",
                options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"],
                correctAnswer: 2,
            },
            {
                // Question 7
                question: "Which aggregate function is used to find the total number of rows in a table?",
                options: ["SUM()", "COUNT()", "MAX()", "MIN()"],
                correctAnswer: 1,
            },
            {
                // Question 8
                question: "Which SQL function converts a number to a string?",
                options: ["TO_DATE()", "TO_NUMBER()", "TO_CHAR()", "CONVERT()"],
                correctAnswer: 2,
            },
            {
                // Question 9
                question: "What does the GROUP BY clause in SQL do?",
                options: ["Sorts records", "Filters rows", "Groups rows with the same values", "Joins multiple tables"],
                correctAnswer: 2,
            },
            {
                // Question 10
                question: "Which SQL clause is used to specify conditions on groups?",
                options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
                correctAnswer: 1,
            },
            {
                // Question 11
                question: "Which function is used to calculate the remainder of a division in SQL?",
                options: ["MOD()", "REMAINDER()", "DIV()", "FLOOR()"],
                correctAnswer: 0,
            },
            {
                // Question 12
                question: "What does the INNER JOIN keyword in SQL do?",
                options: ["Fetches unmatched rows", "Fetches matched rows", "Combines rows with NULL values", "Deletes duplicate rows"],
                correctAnswer: 1,
            },
            {
                // Question 13
                question: "What is the purpose of the DESC command in SQL?",
                options: ["To create a new table", "To view column definitions of a table", "To delete a table", "To sort records in descending order"],
                correctAnswer: 1,
            },
            {
                // Question 14
                question: "Which SQL clause is used to rename a column in the result set?",
                options: ["RENAME", "CHANGE", "AS", "ALTER"],
                correctAnswer: 2,
            },
            {
                // Question 15
                question: "Which SQL function returns the largest value among given values?",
                options: ["LEAST()", "GREATEST()", "MAX()", "HIGHEST()"],
                correctAnswer: 1,
            },
            {
                // Question 16
                question: "Which PL/SQL block section is mandatory?",
                options: ["DECLARE", "EXCEPTION", "BEGIN", "END"],
                correctAnswer: 2,
            },
            {
                // Question 17
                question: "What is the purpose of a CURSOR in SQL?",
                options: ["To process one row at a time", "To store large amounts of data", "To define data types", "To delete records"],
                correctAnswer: 0,
            },
            {
                // Question 18
                question: "Which set operation includes all unique rows from both queries?",
                options: ["INTERSECT", "MINUS", "UNION", "UNION ALL"],
                correctAnswer: 2,
            },
            {
                // Question 19
                question: "Which SQL keyword checks for the existence of rows in a subquery?",
                options: ["IN", "ANY", "ALL", "EXISTS"],
                correctAnswer: 3,
            },
            {
                // Question 20
                question: "What is the role of a trigger in SQL?",
                options: ["Manually execute actions", "Automatically execute actions on events", "Define table relationships", "Change data types"],
                correctAnswer: 1,
            },
            {
                // Question 21
                question: "Which SQL function is used to get the current date and time?",
                options: ["CURRENT_DATE()", "GETDATE()", "NOW()", "SYSDATE()"],
                correctAnswer: 3,
            },
            {
                // Question 22
                question: "What does the DISTINCT keyword in SQL do?",
                options: ["Filters duplicate rows", "Filters rows based on condition", "Sorts records", "Joins tables"],
                correctAnswer: 0,
            },
            {
                // Question 23
                question: "What is a view in SQL?",
                options: ["A temporary table", "A virtual table", "A permanent table", "A log table"],
                correctAnswer: 1,
            },
            {
                // Question 24
                question: "What does the UNION ALL operation in SQL do?",
                options: ["Merges rows and removes duplicates", "Merges rows including duplicates", "Joins two tables", "Deletes duplicates from a table"],
                correctAnswer: 1,
            },
            {
                // Question 25
                question: "Which SQL clause is used to sort data in descending order?",
                options: ["ORDER BY ASC", "ORDER BY DESC", "GROUP BY DESC", "SORT DESC"],
                correctAnswer: 1,
            }
        ]
    },

    {
        category : "Data Structures" ,
        questions : [
            {
                // Question 1
                question: "Which data structure is commonly used to implement a menu-driven program for student information management?",
                options: ["Queue", "Array", "Structure", "Tree"],
                correctAnswer: 2,
            },
            {
                // Question 2
                question: "What function is used to add an element to the stack?",
                options: ["PUSH", "POP", "PEEP", "DISPLAY"],
                correctAnswer: 0,
            },
            {
                // Question 3
                question: "What is the operation called when removing an element from a stack?",
                options: ["INSERT", "DELETE", "POP", "REMOVE"],
                correctAnswer: 2,
            },
            {
                // Question 4
                question: "Which data structure is most suitable for converting an infix expression to a prefix expression?",
                options: ["Queue", "Stack", "Array", "Linked List"],
                correctAnswer: 1,
            },
            {
                // Question 5
                question: "How many elements can be managed in the queue operation designed for a library window?",
                options: ["3", "5", "7", "10"],
                correctAnswer: 1,
            },
            {
                // Question 6
                question: "Which operation checks if a circular queue is empty?",
                options: ["empty", "full", "delete", "get_front"],
                correctAnswer: 0,
            },
            {
                // Question 7
                question: "What is the insertion order in a singly linked list for train coaches if added to the front?",
                options: ["FIFO", "LIFO", "Sorted", "Random"],
                correctAnswer: 1,
            },
            {
                // Question 8
                question: "Which scheduling technique is implemented using a circular linked list?",
                options: ["Round Robin", "FCFS", "Priority", "SJF"],
                correctAnswer: 0,
            },
            {
                // Question 9
                question: "What operation is performed to insert a node at the front of a doubly linked list?",
                options: ["Insert at front", "Insert at rear", "Delete from rear", "Search"],
                correctAnswer: 0,
            },
            {
                // Question 10
                question: "Which traversal sequence is used in binary trees to visit the root node before its subtrees?",
                options: ["Inorder", "Postorder", "Preorder", "Level Order"],
                correctAnswer: 2,
            },
            {
                // Question 11
                question: "What hash collision resolution technique uses incremental values?",
                options: ["Linear Probing", "Chaining", "Quadratic Probing", "Double Hashing"],
                correctAnswer: 0,
            },
            {
                // Question 12
                question: "What is the result of applying the modulo operator in a hash function?",
                options: ["Finds the remainder", "Finds the quotient", "Finds the product", "Finds the difference"],
                correctAnswer: 0,
            },
            {
                // Question 13
                question: "Which linked list type allows traversal in both directions?",
                options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Unidirectional List"],
                correctAnswer: 1,
            },
            {
                // Question 14
                question: "Which operation removes the front element from a queue?",
                options: ["Insert", "Dequeue", "Peek", "Pop"],
                correctAnswer: 1,
            },
            {
                // Question 15
                question: "Which function is used to access the last element of a circular queue?",
                options: ["get_rear", "get_front", "delete", "peek"],
                correctAnswer: 0,
            },
            {
                // Question 16
                question: "In a stack, what does PEEP operation do?",
                options: ["Adds an element", "Removes an element", "Displays all elements", "Displays the top element"],
                correctAnswer: 3,
            },
            {
                // Question 17
                question: "Which tree traversal visits left, root, and right nodes in order?",
                options: ["Preorder", "Inorder", "Postorder", "Level Order"],
                correctAnswer: 1,
            },
            {
                // Question 18
                question: "What happens when you attempt to insert into a full queue?",
                options: ["Overwrites the front", "Triggers overflow error", "Automatically resizes", "Replaces the rear"],
                correctAnswer: 1,
            },
            {
                // Question 19
                question: "Which data structure is best suited for implementing a music player system?",
                options: ["Stack", "Doubly Linked List", "Circular Queue", "Binary Tree"],
                correctAnswer: 1,
            },
            {
                // Question 20
                question: "What is the key advantage of circular queues over regular queues?",
                options: ["Supports dynamic resizing", "Optimizes space usage", "Simpler implementation", "No overflow condition"],
                correctAnswer: 1,
            },
            {
                // Question 21
                question: "In Round Robin scheduling, what determines the time each process runs?",
                options: ["Priority", "Quantum Time", "Execution Time", "Arrival Time"],
                correctAnswer: 1,
            },
            {
                // Question 22
                question: "Which structure is used to store students' birth dates in the menu-driven program?",
                options: ["Array", "Structure", "Queue", "Linked List"],
                correctAnswer: 1,
            },
            {
                // Question 23
                question: "What data type is used for storing admission numbers in the student structure?",
                options: ["Integer", "Float", "Character Array", "Double"],
                correctAnswer: 2,
            },
            {
                // Question 24
                question: "What is the primary purpose of a binary search tree?",
                options: ["Sorting", "Balancing", "Searching", "Both Searching and Sorting"],
                correctAnswer: 3,
            },
            {
                // Question 25
                question: "Which method resolves hash collisions by examining alternate slots?",
                options: ["Linear Probing", "Quadratic Probing", "Chaining", "Double Hashing"],
                correctAnswer: 1,
            }
        ]
    },

    {
        category : "Programming With C" ,
        questions : [
            {
                // Question 1
                question: "Which of the following is the correct syntax to declare a variable in C?",
                options: ["int x;", "var x;", "declare int x;", "integer x;"],
                correctAnswer: 0,
            },
            {
                // Question 2
                question: "What is the correct syntax to print a string in C?",
                options: ["print('Hello');", "cout << 'Hello';", "printf('Hello');", "Console.WriteLine('Hello');"],
                correctAnswer: 2,
            },
            {
                // Question 3
                question: "Which function is used to read a string input in C?",
                options: ["scanf()", "gets()", "cin", "input()"],
                correctAnswer: 1,
            },
            {
                // Question 4
                question: "What is the purpose of the 'return' statement in C?",
                options: ["To print output", "To exit a loop", "To exit a function and optionally pass back a value", "To declare a variable"],
                correctAnswer: 2,
            },
            {
                // Question 5
                question: "Which of the following is a valid data type in C?",
                options: ["string", "boolean", "char", "array"],
                correctAnswer: 2,
            },
            {
                // Question 6
                question: "What is the size of an int data type in C (on most systems)?",
                options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
                correctAnswer: 2,
            },
            {
                // Question 7
                question: "Which of the following is a logical operator in C?",
                options: ["+", "&&", "=", "%"],
                correctAnswer: 1,
            },
            {
                // Question 8
                question: "How do you declare an array in C?",
                options: ["array x[5];", "int x[5];", "x[] = new int[5];", "int array[5];"],
                correctAnswer: 1,
            },
            {
                // Question 9
                question: "Which keyword is used to define a constant in C?",
                options: ["const", "static", "define", "constant"],
                correctAnswer: 0,
            },
            {
                // Question 10
                question: "What is the output of printf(\"%d\", 5/2)?",
                options: ["2.5", "2", "3", "Error"],
                correctAnswer: 1,
            },
            {
                // Question 11
                question: "Which operator is used to find the address of a variable?",
                options: ["&", "*", "@", "#"],
                correctAnswer: 0,
            },
            {
                // Question 12
                question: "Which of the following is a looping structure in C?",
                options: ["if-else", "while", "switch", "goto"],
                correctAnswer: 1,
            },
            {
                // Question 13
                question: "What is the purpose of the 'break' statement in C?",
                options: ["To terminate a program", "To skip the next iteration", "To terminate a loop or switch", "To break a line of code"],
                correctAnswer: 2,
            },
            {
                // Question 14
                question: "What is the output of printf(\"%c\", 'A'+1)?",
                options: ["A", "B", "2", "Error"],
                correctAnswer: 1,
            },
            {
                // Question 15
                question: "Which format specifier is used for a float data type in C?",
                options: ["%d", "%c", "%f", "%lf"],
                correctAnswer: 2,
            },
            {
                // Question 16
                question: "What is the default value of a local variable in C?",
                options: ["0", "NULL", "Garbage value", "Depends on the compiler"],
                correctAnswer: 2,
            },
            {
                // Question 17
                question: "Which library is required to use the printf() and scanf() functions?",
                options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<math.h>"],
                correctAnswer: 0,
            },
            {
                // Question 18
                question: "Which statement is used to exit from the program in C?",
                options: ["end()", "return 0;", "exit();", "terminate();"],
                correctAnswer: 1,
            },
            {
                // Question 19
                question: "How do you declare a pointer in C?",
                options: ["int ptr;", "int *ptr;", "ptr int;", "pointer int ptr;"],
                correctAnswer: 1,
            },
            {
                // Question 20
                question: "Which loop is guaranteed to execute at least once?",
                options: ["for", "while", "do-while", "None of the above"],
                correctAnswer: 2,
            },
            {
                // Question 21
                question: "Which keyword is used to define a block of code that may throw exceptions in C?",
                options: ["catch", "throw", "try", "C does not support exceptions"],
                correctAnswer: 3,
            },
            {
                // Question 22
                question: "What is the role of the main() function in a C program?",
                options: ["Initialize variables", "Serve as the entry point for program execution", "Define global variables", "Provide a user interface"],
                correctAnswer: 1,
            },
            {
                // Question 23
                question: "Which of the following statements is used to continue to the next iteration of a loop?",
                options: ["skip;", "break;", "continue;", "next;"],
                correctAnswer: 2,
            },
            {
                // Question 24
                question: "Which of the following is a preprocessor directive in C?",
                options: ["#include", "#define", "#ifdef", "All of the above"],
                correctAnswer: 3,
            },
            {
                // Question 25
                question: "What is the correct syntax to write a comment in C?",
                options: ["// Comment", "<!-- Comment -->", "# Comment", "/* Comment */"],
                correctAnswer: 3,
            }
        ]
    },

    {
        category : "Fundamental of C++" ,
        questions : [
            {
                // Question 1
                question: "What is the main difference between C and C++?",
                options: ["C++ supports object-oriented programming; C does not.", "C++ is faster than C.", "C++ uses a different compiler.", "C does not support functions."],
                correctAnswer: 0,
            },
            {
                // Question 2
                question: "Which of the following is the correct syntax to declare a class in C++?",
                options: ["class ClassName { };", "class ClassName[] { };", "define ClassName { };", "create ClassName { };"],
                correctAnswer: 0,
            },
            {
                // Question 3
                question: "What does the keyword 'public' indicate in a class?",
                options: ["Members are accessible only within the class.", "Members are accessible outside the class.", "Members are static.", "Members are private by default."],
                correctAnswer: 1,
            },
            {
                // Question 4
                question: "Which operator is used to access members of a class through an object?",
                options: [".", "->", ":", "::"],
                correctAnswer: 0,
            },
            {
                // Question 5
                question: "What is the correct syntax to create an object in C++?",
                options: ["Object obj;", "class Object obj;", "create Object obj;", "object obj();"],
                correctAnswer: 0,
            },
            {
                // Question 6
                question: "Which of the following is a feature of C++?",
                options: ["Encapsulation", "Inheritance", "Polymorphism", "All of the above"],
                correctAnswer: 3,
            },
            {
                // Question 7
                question: "What is the purpose of a constructor in C++?",
                options: ["To define static methods", "To initialize objects of a class", "To create functions", "To destroy objects of a class"],
                correctAnswer: 1,
            },
            {
                // Question 8
                question: "Which keyword is used to declare a constant variable in C++?",
                options: ["const", "final", "static", "immutable"],
                correctAnswer: 0,
            },
            {
                // Question 9
                question: "Which of the following is NOT a type of inheritance in C++?",
                options: ["Single", "Multiple", "Multi-path", "Hierarchical"],
                correctAnswer: 2,
            },
            {
                // Question 10
                question: "What is the purpose of the 'virtual' keyword in C++?",
                options: ["To define static methods", "To enable dynamic method dispatch", "To prevent inheritance", "To declare a constant"],
                correctAnswer: 1,
            },
            {
                // Question 11
                question: "What is function overloading in C++?",
                options: ["Defining multiple functions with the same name but different parameters.", "Overriding a function in a subclass.", "Using one function inside another.", "Creating functions without a return type."],
                correctAnswer: 0,
            },
            {
                // Question 12
                question: "Which keyword is used to define a block of code that may throw an exception in C++?",
                options: ["catch", "throw", "try", "except"],
                correctAnswer: 2,
            },
            {
                // Question 13
                question: "What is the purpose of the 'new' operator in C++?",
                options: ["To allocate memory on the stack.", "To allocate memory dynamically.", "To create static variables.", "To initialize global variables."],
                correctAnswer: 1,
            },
            {
                // Question 14
                question: "What does 'delete' do in C++?",
                options: ["Deallocates memory allocated by 'new'.", "Deletes a file.", "Deletes an object permanently.", "Removes a class."],
                correctAnswer: 0,
            },
            {
                // Question 15
                question: "Which of the following is a valid way to declare an array in C++?",
                options: ["int arr[];", "int arr[5];", "array<int> arr;", "arr<int> arr[5];"],
                correctAnswer: 1,
            },
            {
                // Question 16
                question: "Which operator is used to overload functions in C++?",
                options: ["::", ":", "operator", "function"],
                correctAnswer: 2,
            },
            {
                // Question 17
                question: "Which of the following is NOT a standard C++ library?",
                options: ["<iostream>", "<vector>", "<string>", "<utils>"],
                correctAnswer: 3,
            },
            {
                // Question 18
                question: "What is the default access modifier for members of a class in C++?",
                options: ["public", "private", "protected", "static"],
                correctAnswer: 1,
            },
            {
                // Question 19
                question: "Which of the following statements is true about a destructor in C++?",
                options: ["It can have parameters.", "It can be overloaded.", "It has the same name as the class prefixed with a tilde (~).", "It must be called explicitly."],
                correctAnswer: 2,
            },
            {
                // Question 20
                question: "What is the purpose of the 'this' pointer in C++?",
                options: ["To store the address of the class.", "To refer to the current object.", "To refer to the parent class.", "To initialize global variables."],
                correctAnswer: 1,
            },
            {
                // Question 21
                question: "Which feature of C++ allows multiple functions to have the same name?",
                options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
                correctAnswer: 2,
            },
            {
                // Question 22
                question: "What is the output of 'cout << sizeof(char);'?",
                options: ["1", "2", "4", "8"],
                correctAnswer: 0,
            },
            {
                // Question 23
                question: "What does 'cin' do in C++?",
                options: ["Outputs data to the console.", "Handles exception handling.", "Takes input from the user.", "Declares variables."],
                correctAnswer: 2,
            },
            {
                // Question 24
                question: "What is an abstract class in C++?",
                options: ["A class with at least one pure virtual function.", "A class that cannot inherit other classes.", "A class without any member variables.", "A class that cannot be instantiated."],
                correctAnswer: 0,
            },
            {
                // Question 25
                question: "Which header file is required to use the STL vector in C++?",
                options: ["<vector>", "<array>", "<map>", "<list>"],
                correctAnswer: 0,
            }
        ]
    }
]