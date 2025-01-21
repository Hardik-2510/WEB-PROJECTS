const questions = [
    {
        category: "Web Development",
        questions: [
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
            },
            {
                question: "Which HTML element is used to define a paragraph?",
                options: ["<p>", "<text>", "<para>", "<paragraph>"],
                correctAnswer: 0
            },
            {
                question: "What does the 'z-index' CSS property do?",
                options: ["Sets the stacking order of elements", "Controls text opacity", "Sets the font size", "Changes the background color"],
                correctAnswer: 0
            },
            {
                question: "In JavaScript, what does 'typeof' return for an array?",
                options: ["array", "object", "list", "undefined"],
                correctAnswer: 1
            },
            {
                question: "Which PHP function is used to find the length of a string?",
                options: ["strlen()", "length()", "count()", "strlength()"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a definition list?",
                options: ["<ul>", "<ol>", "<dl>", "<list>"],
                correctAnswer: 2
            },
            {
                question: "Which CSS property is used to change the font size?",
                options: ["font-size", "text-size", "font-weight", "size"],
                correctAnswer: 0
            },
            {
                question: "Which JavaScript method converts a value to a string?",
                options: ["toString()", "parse()", "convert()", "stringify()"],
                correctAnswer: 0
            },
            {
                question: "Which HTML tag is used to define an unordered list?",
                options: ["<ol>", "<ul>", "<list>", "<ulist>"],
                correctAnswer: 1
            },
            {
                question: "What does the 'display: flex;' CSS property do?",
                options: ["Aligns items in a grid", "Sets the element to behave like a block", "Defines a flexible container for its items", "Changes the display of the element to inline"],
                correctAnswer: 2
            },
            {
                question: "Which PHP function is used to get input from a form?",
                options: ["input()", "get()", "$_GET[]", "getInput()"],
                correctAnswer: 2
            },
            {
                question: "Which HTML element is used to define a footer section?",
                options: ["<footer>", "<bottom>", "<section>", "<footersection>"],
                correctAnswer: 0
            },
            {
                question: "Which CSS property is used to add space between words?",
                options: ["word-spacing", "line-height", "letter-spacing", "spacing"],
                correctAnswer: 0
            },
            {
                question: "Which JavaScript keyword is used to create a block-scoped variable?",
                options: ["var", "let", "const", "define"],
                correctAnswer: 1
            },
            {
                question: "Which HTML element is used to define a table header?",
                options: ["<header>", "<th>", "<thead>", "<header-cell>"],
                correctAnswer: 1
            },
            {
                question: "Which PHP operator is used for error suppression?",
                options: ["@", "!", "~", "?"],
                correctAnswer: 0
            },
            {
                question: "Which method is used to add a new element at the end of an array in JavaScript?",
                options: ["push()", "pop()", "shift()", "unshift()"],
                correctAnswer: 0
            },
            {
                question: "What is the default value of the 'position' property in CSS?",
                options: ["static", "relative", "absolute", "fixed"],
                correctAnswer: 0
            },
            {
                question: "Which HTML element is used to define an input field for a password?",
                options: ["<input type='password'>", "<password>", "<input type='text'>", "<pass>"],
                correctAnswer: 0
            },
            {
                question: "Which CSS property is used to control the transparency of an element?",
                options: ["opacity", "visibility", "transparency", "background-color"],
                correctAnswer: 0
            },
            {
                question: "Which JavaScript method is used to convert a string into a number?",
                options: ["parseInt()", "parseFloat()", "toNumber()", "convert()"],
                correctAnswer: 0
            },
            {
                question: "Which PHP function is used to start a session?",
                options: ["session_start()", "start_session()", "session_begin()", "session_create()"],
                correctAnswer: 0
            },
            {
                question: "Which HTML element is used to define a navigation section?",
                options: ["<nav>", "<section>", "<header>", "<menu>"],
                correctAnswer: 0
            },
            {
                question: "Which JavaScript function removes all whitespace from the beginning and end of a string?",
                options: ["trim()", "strip()", "clean()", "trimSpaces()"],
                correctAnswer: 0
            },
            {
                question: "Which CSS property is used to set the background image of an element?",
                options: ["background", "bg-image", "background-image", "img-background"],
                correctAnswer: 2
            },
            {
                question: "Which HTML element is used to define a form?",
                options: ["<input>", "<form>", "<field>", "<button>"],
                correctAnswer: 1
            },
            {
                question: "Which JavaScript function is used to get the current date and time?",
                options: ["Date.now()", "new Date()", "currentDate()", "getDate()"],
                correctAnswer: 1
            },
            {
                question: "What is the purpose of the <meta> tag in HTML?",
                options: ["Defines metadata for a document", "Defines the document title", "Links to external CSS", "Defines a section in a webpage"],
                correctAnswer: 0
            },
            {
                question: "Which CSS property controls the spacing between letters in a text?",
                options: ["letter-spacing", "word-spacing", "text-indent", "line-height"],
                correctAnswer: 0
            },
            {
                question: "Which PHP function is used to include the contents of one file into another?",
                options: ["include()", "require()", "include_once()", "allOf()"],
                correctAnswer: 0
            },
            {
                question: "Which HTML tag is used to display a table cell?",
                options: ["<th>", "<td>", "<tr>", "<cell>"],
                correctAnswer: 1
            },
            {
                question: "Which JavaScript function returns the length of a string?",
                options: ["length()", "getLength()", "str.length", "stringLength()"],
                correctAnswer: 2
            }
        ]
    },

    {
        category: "OOPs With Java",
        questions: [
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
            },
            {
                question: "What is the purpose of the 'interface' keyword in Java?",
                options: ["Define a class", "Create an abstract class", "Define a contract for implementing classes", "Create a singleton class"],
                correctAnswer: 2
              },
              {
                question: "What is method overloading in Java?",
                options: ["Defining methods with the same name but different return types", "Defining methods with the same name and same parameters", "Defining methods with the same name but different parameter types", "Changing method visibility"],
                correctAnswer: 2
              },
              {
                question: "Which type of inheritance is supported in Java?",
                options: ["Single inheritance", "Multiple inheritance", "Multilevel inheritance", "All of the above"],
                correctAnswer: 3
              },
              {
                question: "What does the term 'Polymorphism' mean in OOP?",
                options: ["Object behaviors that change at runtime", "Multiple objects with different behaviors", "A single method performing multiple actions", "Ability to inherit properties from multiple classes"],
                correctAnswer: 3
              },
              {
                question: "Which of these is a characteristic of an abstract class in Java?",
                options: ["Cannot have constructors", "Can have both abstract and non-abstract methods", "Can be instantiated", "Cannot have instance variables"],
                correctAnswer: 1
              },
              {
                question: "Which method signature is required for a constructor in Java?",
                options: ["Same as the class name and no return type", "Same as the class name with a return type", "Any method name with a return type", "Same as the class name with 'void' return type"],
                correctAnswer: 0
              },
              {
                question: "Which of the following is an example of encapsulation in Java?",
                options: ["Using private fields with public getters and setters", "Inheriting a class", "Creating a class with multiple constructors", "Using an abstract class"],
                correctAnswer: 0
              },
              {
                question: "What is the purpose of the 'transient' keyword in Java?",
                options: ["To prevent a field from being serialized", "To define a non-accessible method", "To mark a method as synchronized", "To declare a variable in a specific thread"],
                correctAnswer: 0
              },
              {
                question: "What is the outcome of calling a constructor from a derived class without explicitly calling the superclass constructor in Java?",
                options: ["It calls the superclass constructor by default", "It throws an error", "The program runs without any issues", "It calls the main method instead of the superclass constructor"],
                correctAnswer: 0
              },
              {
                question: "Which of the following is true about static variables in Java?",
                options: ["They belong to an instance of the class", "They are shared among all instances of the class", "They can be accessed only from an instance", "They cannot be modified once set"],
                correctAnswer: 1
              },
              {
                question: "In Java, which of these is NOT a valid access modifier?",
                options: ["public", "private", "protected", "global"],
                correctAnswer: 3
              },
              {
                question: "Which of the following does NOT support method overriding in Java?",
                options: ["Abstract methods", "Non-static methods", "Static methods", "Interface methods"],
                correctAnswer: 2
              },
              {
                question: "Which feature of Java allows methods to have different implementations based on object types at runtime?",
                options: ["Polymorphism", "Inheritance", "Abstraction", "Encapsulation"],
                correctAnswer: 0
              },
              {
                question: "What is the purpose of the 'final' keyword when used with a method in Java?",
                options: ["Prevent inheritance", "Prevent method overriding", "Prevent method execution", "Prevent method overloading"],
                correctAnswer: 1
              },
              {
                question: "What happens if you try to create an object of an abstract class in Java?",
                options: ["It compiles successfully", "It throws a runtime exception", "It throws a compile-time error", "The abstract class is instantiated implicitly"],
                correctAnswer: 2
              },
              {
                question: "What is the effect of the 'super' keyword in Java?",
                options: ["It is used to access private members of the superclass", "It is used to access static members of the superclass", "It calls the constructor of the superclass", "It is used to invoke a method from a subclass"],
                correctAnswer: 2
              },
              {
                question: "Which of the following is true about a constructor in Java?",
                options: ["It can return a value", "It is called when an object is instantiated", "It is optional", "It can be inherited"],
                correctAnswer: 1
              },
              {
                question: "Which keyword is used to define a constant variable in Java?",
                options: ["static", "final", "const", "constant"],
                correctAnswer: 1
              },
              {
                question: "What is the purpose of method overloading in Java?",
                options: ["To change the return type of a method", "To create multiple methods with the same name but different signatures", "To call a method from another class", "To allow a method to call itself"],
                correctAnswer: 1
              },
              {
                question: "In Java, which of these statements about an interface is true?",
                options: ["An interface can contain instance variables", "An interface can be instantiated", "An interface can only contain abstract methods", "An interface can be extended by classes but not by other interfaces"],
                correctAnswer: 2
              },
              {
                question: "Which Java exception is thrown when a class tries to access a method that it cannot access due to the access modifier?",
                options: ["NullPointerException", "IllegalAccessException", "ClassNotFoundException", "ArrayIndexOutOfBoundsException"],
                correctAnswer: 1
              },
              {
                question: "What is the main advantage of using 'abstract' classes over interfaces in Java?",
                options: ["Abstract classes can have instance variables", "Abstract classes can be inherited", "Interfaces can have default methods", "Interfaces cannot have instance variables"],
                correctAnswer: 0
              },
              {
                question: "In Java, which of these is NOT an OOP concept?",
                options: ["Abstraction", "Polymorphism", "Multithreading", "Inheritance"],
                correctAnswer: 2
              },
              {
                question: "What is the purpose of the 'default' keyword in Java interfaces?",
                options: ["To create a default constructor", "To define default behavior for interface methods", "To declare non-static methods", "To override a superclass method"],
                correctAnswer: 1
              },
              {
                question: "Which method is used to check if an object is an instance of a class in Java?",
                options: ["instanceof", "isInstance()", "typeOf()", "getClass()"],
                correctAnswer: 0
              },
              {
                question: "What does the 'new' keyword do in Java?",
                options: ["Creates an instance of a class", "Creates a reference to an existing object", "Assigns a value to a variable", "Creates a static method"],
                correctAnswer: 0
              },
              {
                question: "Which of these is true about constructors in Java?",
                options: ["Constructors can return a value", "A class can have more than one constructor with different parameters", "Constructors are inherited", "A constructor must have the same name as the method"],
                correctAnswer: 1
              },
              {
                question: "What does the 'instanceof' operator in Java check for?",
                options: ["If an object is an instance of a class or interface", "If an object is equal to another object", "If a class extends another class", "If a method is invoked correctly"],
                correctAnswer: 0
              }
        ]
    },

    {
        category: "Database Management System",
        questions: [
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
            },
            {
                // Question 26
                question: "What is the primary purpose of an index in a database?",
                options: ["To store duplicate data", "To improve query performance", "To enforce constraints", "To define relationships"],
                correctAnswer: 1,
            },
            {
                // Question 27
                question: "Which SQL command is used to modify existing records in a table?",
                options: ["UPDATE", "ALTER", "MODIFY", "CHANGE"],
                correctAnswer: 0,
            },
            {
                // Question 28
                question: "Which of the following is a valid SQL constraint?",
                options: ["UNIQUE", "LIMIT", "SEQUENCE", "RESTRICT"],
                correctAnswer: 0,
            },
            {
                // Question 29
                question: "What is the purpose of the ROLLBACK statement in SQL?",
                options: ["To save changes", "To undo changes", "To delete a table", "To create a backup"],
                correctAnswer: 1,
            },
            {
                // Question 30
                question: "Which normal form ensures that a table has no transitive dependencies?",
                options: ["1NF", "2NF", "3NF", "BCNF"],
                correctAnswer: 2,
            },
            {
                // Question 31
                question: "Which SQL statement is used to remove a table structure and its data permanently?",
                options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
                correctAnswer: 1,
            },
            {
                // Question 32
                question: "What is a composite key in a database?",
                options: ["A foreign key with two references", "A primary key with multiple columns", "An index on multiple columns", "A key used for joining tables"],
                correctAnswer: 1,
            },
            {
                // Question 33
                question: "Which SQL function is used to calculate the average value of a column?",
                options: ["SUM()", "COUNT()", "AVG()", "MEDIAN()"],
                correctAnswer: 2,
            },
            {
                // Question 34
                question: "Which database transaction property ensures that all changes are saved permanently after commit?",
                options: ["Atomicity", "Durability", "Consistency", "Isolation"],
                correctAnswer: 1,
            },
            {
                // Question 35
                question: "What does the term 'denormalization' refer to in database design?",
                options: ["Eliminating redundancy", "Adding redundancy for performance", "Optimizing indexes", "Normalizing a table"],
                correctAnswer: 1,
            },
            {
                // Question 36
                question: "Which of the following is an example of DDL (Data Definition Language)?",
                options: ["SELECT", "INSERT", "CREATE", "UPDATE"],
                correctAnswer: 2,
            },
            {
                // Question 37
                question: "Which JOIN type returns all rows from both tables, with NULLs where there is no match?",
                options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
                correctAnswer: 3,
            },
            {
                // Question 38
                question: "What does ACID stand for in the context of database transactions?",
                options: ["Accuracy, Completeness, Integrity, Durability", "Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Integrity, Dependability", "Atomicity, Completeness, Isolation, Dependability"],
                correctAnswer: 1,
            },
            {
                // Question 39
                question: "Which data model uses entities and relationships to organize data?",
                options: ["Hierarchical Model", "Relational Model", "Entity-Relationship Model", "Network Model"],
                correctAnswer: 2,
            },
            {
                // Question 40
                question: "What does the term 'sharding' mean in databases?",
                options: ["Replicating data across nodes", "Partitioning data horizontally", "Encrypting data for security", "Storing data in a single table"],
                correctAnswer: 1,
            },
            {
                // Question 41
                question: "Which command is used to add a column to an existing table in SQL?",
                options: ["ADD COLUMN", "ALTER TABLE ... ADD", "INSERT COLUMN", "MODIFY COLUMN"],
                correctAnswer: 1,
            },
            {
                // Question 42
                question: "Which type of database is best suited for handling unstructured data?",
                options: ["Relational Database", "NoSQL Database", "Hierarchical Database", "Network Database"],
                correctAnswer: 1,
            },
            {
                // Question 43
                question: "Which of the following SQL clauses is used to limit the number of rows returned?",
                options: ["LIMIT", "ROWNUM", "TOP", "FETCH FIRST"],
                correctAnswer: 0,
            },
            {
                // Question 44
                question: "What does the term 'schema' refer to in a database?",
                options: ["A stored query", "The structure of a database", "A specific table", "A transaction log"],
                correctAnswer: 1,
            },
            {
                // Question 45
                question: "Which database isolation level ensures no dirty reads but allows non-repeatable reads?",
                options: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
                correctAnswer: 1,
            },
            {
                // Question 46
                question: "What is the purpose of the AUTO_INCREMENT attribute in SQL?",
                options: ["To automatically update a column", "To generate unique values for a column", "To reset a column's value", "To increment a column's value by 2"],
                correctAnswer: 1,
            },
            {
                // Question 47
                question: "Which SQL operator is used to filter rows based on a range of values?",
                options: ["BETWEEN", "LIKE", "IN", "WHERE"],
                correctAnswer: 0,
            },
            {
                // Question 48
                question: "What does the term 'cardinality' refer to in a database context?",
                options: ["The number of unique rows in a table", "The relationship type between tables", "The number of tuples in a table", "The degree of a table"],
                correctAnswer: 2,
            },
            {
                // Question 49
                question: "Which clause is used to combine the result sets of two SELECT queries, including duplicates?",
                options: ["INTERSECT", "UNION", "UNION ALL", "JOIN"],
                correctAnswer: 2,
            },
            {
                // Question 50
                question: "Which SQL command is used to rename an existing table?",
                options: ["MODIFY TABLE", "RENAME TABLE", "ALTER TABLE", "CHANGE TABLE"],
                correctAnswer: 1,
            }                        
        ]
    },

    {
        category: "Data Structures",
        questions: [
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
            },
            {
                // Question 26
                question: "Which data structure is best suited for implementing recursion?",
                options: ["Queue", "Stack", "Array", "Linked List"],
                correctAnswer: 1,
            },
            {
                // Question 27
                question: "What is the time complexity of searching for an element in a binary search tree in the worst case?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                correctAnswer: 2,
            },
            {
                // Question 28
                question: "Which of the following data structures does not allow duplicate values?",
                options: ["Set", "Array", "Linked List", "Queue"],
                correctAnswer: 0,
            },
            {
                // Question 29
                question: "Which traversal technique is used to obtain a sorted sequence from a binary search tree?",
                options: ["Preorder", "Inorder", "Postorder", "Level Order"],
                correctAnswer: 1,
            },
            {
                // Question 30
                question: "What is the main purpose of a priority queue?",
                options: ["To process data in LIFO order", "To process data based on priority", "To process data in FIFO order", "To store unique values"],
                correctAnswer: 1,
            },
            {
                // Question 31
                question: "What is the best case time complexity of bubble sort?",
                options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
                correctAnswer: 1,
            },
            {
                // Question 32
                question: "Which data structure can be used to implement Depth First Search (DFS)?",
                options: ["Queue", "Stack", "Linked List", "Binary Tree"],
                correctAnswer: 1,
            },
            {
                // Question 33
                question: "In a graph, what does the adjacency matrix represent?",
                options: ["The shortest path", "The edges and weights", "The adjacency of nodes", "The distance between nodes"],
                correctAnswer: 2,
            },
            {
                // Question 34
                question: "What is the height of an AVL tree with 7 nodes in the best case?",
                options: ["2", "3", "4", "5"],
                correctAnswer: 1,
            },
            {
                // Question 35
                question: "Which data structure is used to implement a graph traversal using Breadth First Search (BFS)?",
                options: ["Stack", "Queue", "Set", "Heap"],
                correctAnswer: 1,
            },
            {
                // Question 36
                question: "What is the purpose of the 'rear' pointer in a queue?",
                options: ["Points to the first element", "Points to the last element", "Points to the middle element", "Tracks the size of the queue"],
                correctAnswer: 1,
            },
            {
                // Question 37
                question: "Which hashing technique handles collisions using linked lists?",
                options: ["Open Addressing", "Linear Probing", "Chaining", "Quadratic Probing"],
                correctAnswer: 2,
            },
            {
                // Question 38
                question: "Which data structure uses a FIFO (First In First Out) principle?",
                options: ["Stack", "Queue", "Linked List", "Binary Tree"],
                correctAnswer: 1,
            },
            {
                // Question 39
                question: "What is the primary benefit of a self-balancing binary search tree?",
                options: ["Faster insertion", "Guaranteed O(log n) operations", "Easier implementation", "Supports duplicates"],
                correctAnswer: 1,
            },
            {
                // Question 40
                question: "Which algorithm is used to find the shortest path in a graph with weighted edges?",
                options: ["Kruskal's Algorithm", "Prim's Algorithm", "Dijkstra's Algorithm", "DFS"],
                correctAnswer: 2,
            },
            {
                // Question 41
                question: "Which type of graph has edges with weights?",
                options: ["Undirected Graph", "Weighted Graph", "Directed Graph", "Cyclic Graph"],
                correctAnswer: 1,
            },
            {
                // Question 42
                question: "What is the degree of a vertex in a graph?",
                options: ["The number of edges connected to the vertex", "The total weight of edges", "The number of nodes in the graph", "The depth of the vertex"],
                correctAnswer: 0,
            },
            {
                // Question 43
                question: "Which sorting algorithm is based on the divide-and-conquer approach?",
                options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
                correctAnswer: 1,
            },
            {
                // Question 44
                question: "Which data structure is most suitable for implementing a priority queue?",
                options: ["Stack", "Heap", "Array", "Linked List"],
                correctAnswer: 1,
            },
            {
                // Question 45
                question: "What is the main advantage of a doubly linked list over a singly linked list?",
                options: ["Consumes less memory", "Easier traversal in both directions", "Faster insertion at the front", "Supports duplicate elements"],
                correctAnswer: 1,
            },
            {
                // Question 46
                question: "What is a strongly connected component in a graph?",
                options: ["A set of vertices with no incoming edges", "A subgraph where every vertex is reachable from every other vertex", "A graph with no edges", "A subgraph with the maximum number of edges"],
                correctAnswer: 1,
            },
            {
                // Question 47
                question: "What is the time complexity of inserting a node at the front of a singly linked list?",
                options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                correctAnswer: 0,
            },
            {
                // Question 48
                question: "What is a complete binary tree?",
                options: ["A tree where all levels except possibly the last are completely filled.", "A tree where each node has exactly two children.", "A tree with no missing nodes.", "A tree with all nodes having equal depth."],
                correctAnswer: 0,
            },
            {
                // Question 49
                question: "Which data structure is used in a LRU (Least Recently Used) cache implementation?",
                options: ["Stack and Array", "Queue and HashMap", "Heap and Linked List", "Binary Tree and Array"],
                correctAnswer: 1,
            },
            {
                // Question 50
                question: "What is the purpose of a sentinel node in a linked list?",
                options: ["To mark the beginning of the list", "To simplify edge cases", "To store additional data", "To terminate the list"],
                correctAnswer: 1,
            }           
        ]
    },

    {
        category: "Programming With C",
        questions: [
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
            },
            {
                // Question 26
                question: "What is the correct syntax for including a library in C?",
                options: ["import <library.h>", "#include <library.h>", "use library.h;", "require <library.h>"],
                correctAnswer: 1,
            },
            {
                // Question 27
                question: "What does the sizeof operator do in C?",
                options: [
                    "Determines the size of a data type or variable in bytes",
                    "Calculates the memory address of a variable",
                    "Counts the number of elements in an array",
                    "Checks if a variable is initialized"
                ],
                correctAnswer: 0,
            },
            {
                // Question 3
                question: "Which of the following represents a valid comment in C?",
                options: ["// Single line comment", "<!-- Comment -->", "# Comment", "/* Comment */"],
                correctAnswer: 3,
            },
            {
                // Question 4
                question: "Which function is used to allocate memory dynamically in C?",
                options: ["malloc()", "allocate()", "memalloc()", "calloc()"],
                correctAnswer: 0,
            },
            {
                // Question 5
                question: "What is the difference between ++i and i++ in C?",
                options: [
                    "No difference",
                    "++i increments before the value is used, while i++ increments after",
                    "++i decrements the value, while i++ increments it",
                    "++i is invalid syntax"
                ],
                correctAnswer: 1,
            },
            {
                // Question 6
                question: "What is a function prototype in C?",
                options: [
                    "A function without a return type",
                    "A declaration of a function that specifies its name, parameters, and return type",
                    "A function with no arguments",
                    "A function without a body"
                ],
                correctAnswer: 1,
            },
            {
                // Question 7
                question: "Which data structure uses the Last In First Out (LIFO) principle?",
                options: ["Array", "Queue", "Stack", "Linked List"],
                correctAnswer: 2,
            },
            {
                // Question 8
                question: "What is the purpose of the typedef keyword in C?",
                options: [
                    "To define a new data type",
                    "To rename an existing data type",
                    "To create a new variable",
                    "To define a constant"
                ],
                correctAnswer: 1,
            },
            {
                // Question 9
                question: "What is the purpose of the 'void' keyword in C?",
                options: [
                    "To define a function that returns nothing",
                    "To define a variable",
                    "To create a pointer",
                    "To allocate memory dynamically"
                ],
                correctAnswer: 0,
            },
            {
                // Question 10
                question: "Which function is used to free dynamically allocated memory in C?",
                options: ["delete()", "remove()", "free()", "dispose()"],
                correctAnswer: 2,
            },
            {
                // Question 11
                question: "Which operator is used to dereference a pointer in C?",
                options: ["&", "*", "@", "#"],
                correctAnswer: 1,
            },
            {
                // Question 12
                question: "What is the default return type of the main() function in C?",
                options: ["int", "void", "float", "char"],
                correctAnswer: 0,
            },
            {
                // Question 13
                question: "What is the role of the continue statement in C?",
                options: [
                    "To terminate a loop",
                    "To restart the program",
                    "To skip the current iteration of a loop",
                    "To return a value from a function"
                ],
                correctAnswer: 2,
            },
            {
                // Question 14
                question: "Which function in C is used to open a file?",
                options: ["openfile()", "fopen()", "file_open()", "opfile()"],
                correctAnswer: 1,
            },
            {
                // Question 15
                question: "What is the scope of a variable declared inside a function in C?",
                options: ["Global", "Local to the function", "Static", "Dynamic"],
                correctAnswer: 1,
            },
            {
                // Question 16
                question: "What does the 'extern' keyword signify in C?",
                options: [
                    "A variable is defined globally and can be accessed by multiple files",
                    "A variable is local to a function",
                    "A variable is static",
                    "A variable is uninitialized"
                ],
                correctAnswer: 0,
            },
            {
                // Question 17
                question: "What is the difference between structure and union in C?",
                options: [
                    "Structure allocates memory for all members, union allocates memory for the largest member",
                    "Structure does not support pointers, while union does",
                    "Structure is faster than union",
                    "There is no difference"
                ],
                correctAnswer: 0,
            },
            {
                // Question 18
                question: "Which loop is best suited for iterating a fixed number of times in C?",
                options: ["while", "for", "do-while", "goto"],
                correctAnswer: 1,
            },
            {
                // Question 19
                question: "What does the term 'segmentation fault' indicate in C?",
                options: [
                    "A syntax error",
                    "An error due to invalid memory access",
                    "An error due to division by zero",
                    "A compilation error"
                ],
                correctAnswer: 1,
            },
            {
                // Question 20
                question: "What is the output of the following code snippet?\nint x = 5; printf(\"%d\", x++);",
                options: ["6", "5", "Error", "None of the above"],
                correctAnswer: 1,
            },
            {
                // Question 21
                question: "Which function is used to copy strings in C?",
                options: ["strcpy()", "strcat()", "copy()", "strmove()"],
                correctAnswer: 0,
            },
            {
                // Question 22
                question: "What is the purpose of the 'break' statement in switch-case?",
                options: [
                    "To exit the program",
                    "To terminate the current case and exit the switch block",
                    "To skip to the next case",
                    "To reset the case"
                ],
                correctAnswer: 1,
            },
            {
                // Question 23
                question: "Which header file is required for mathematical functions in C?",
                options: ["<math.h>", "<stdlib.h>", "<stdio.h>", "<conio.h>"],
                correctAnswer: 0,
            },
            {
                // Question 24
                question: "What will be the output of: printf(\"%d\", sizeof(int));?",
                options: ["4 (on most systems)", "2", "1", "8"],
                correctAnswer: 0,
            },
            {
                // Question 25
                question: "What does the 'volatile' keyword in C indicate?",
                options: [
                    "The value of the variable may change unexpectedly",
                    "The variable is a constant",
                    "The variable is global",
                    "The variable is not initialized"
                ],
                correctAnswer: 0,
            }
        ]
    },

    {
        category: "Fundamental of C++",
        questions: [
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
            },
            {
                // Question 26
                question: "What is a namespace in C++ used for?",
                options: ["To group functions, classes, and objects under a name.", "To allocate memory dynamically.", "To define the scope of variables.", "To define static functions."],
                correctAnswer: 0,
            },
            {
                // Question 27
                question: "Which keyword is used to prevent a class from being inherited in C++?",
                options: ["sealed", "final", "private", "stop"],
                correctAnswer: 1,
            },
            {
                // Question 28
                question: "What is the purpose of the 'friend' keyword in C++?",
                options: ["To declare a function as global.", "To allow a function or class access to private members of another class.", "To share data between two classes.", "To declare a public method."],
                correctAnswer: 1,
            },
            {
                // Question 29
                question: "Which of the following is a valid way to initialize a string in C++?",
                options: ["string str = \"Hello\";", "string str('Hello');", "string str = new String(\"Hello\");", "string str; str = \"Hello\";"],
                correctAnswer: 0,
            },
            {
                // Question 30
                question: "What is the output of the expression '5 >> 1' in C++?",
                options: ["2", "10", "0", "1"],
                correctAnswer: 0,
            },
            {
                // Question 31
                question: "Which of the following is not a valid operator in C++?",
                options: ["::", "->", ">>", "<<<"],
                correctAnswer: 3,
            },
            {
                // Question 32
                question: "What is the use of the 'typeid' operator in C++?",
                options: ["To cast variables.", "To check the type of a variable at runtime.", "To declare a template.", "To return the size of a type."],
                correctAnswer: 1,
            },
            {
                // Question 33
                question: "What is the function of 'std::move()' in C++?",
                options: ["To copy an object.", "To transfer ownership of an object.", "To create a dynamic array.", "To release memory."],
                correctAnswer: 1,
            },
            {
                // Question 34
                question: "Which keyword is used to create a template in C++?",
                options: ["generic", "template", "typename", "class"],
                correctAnswer: 1,
            },
            {
                // Question 35
                question: "What does RAII stand for in C++?",
                options: ["Resource Allocation Is Initialization", "Random Access in Iterators", "Recursive Algorithms and Inline Instructions", "Run-time Allocation in Instances"],
                correctAnswer: 0,
            },
            {
                // Question 36
                question: "Which of the following is used to handle type conversion in C++?",
                options: ["Typecast", "Static_cast", "Dynamic_cast", "All of the above"],
                correctAnswer: 3,
            },
            {
                // Question 37
                question: "What does the keyword 'explicit' do in C++?",
                options: ["Prevents a constructor from being called implicitly.", "Prevents a method from being overridden.", "Marks a function as pure virtual.", "Defines a method as static."],
                correctAnswer: 0,
            },
            {
                // Question 38
                question: "Which of the following is a container in the C++ STL?",
                options: ["List", "Queue", "Map", "All of the above"],
                correctAnswer: 3,
            },
            {
                // Question 39
                question: "What is the difference between 'struct' and 'class' in C++?",
                options: ["'struct' has default public access, while 'class' has default private access.", "'class' does not support inheritance, while 'struct' does.", "'struct' is faster than 'class'.", "There is no difference."],
                correctAnswer: 0,
            },
            {
                // Question 40
                question: "Which of the following is true about a pure virtual function?",
                options: ["It must be implemented in the base class.", "It cannot have any implementation.", "It has an implementation in the derived class.", "It is defined using '= 0'."],
                correctAnswer: 3,
            },
            {
                // Question 41
                question: "What does 'nullptr' represent in C++?",
                options: ["A null pointer literal.", "A static variable.", "A default constructor.", "An empty array."],
                correctAnswer: 0,
            },
            {
                // Question 42
                question: "What is the purpose of 'std::unique_ptr' in C++?",
                options: ["To manage dynamic memory with single ownership.", "To share ownership of a resource.", "To store data in a container.", "To allocate memory on the stack."],
                correctAnswer: 0,
            },
            {
                // Question 43
                question: "Which header file is required for file handling in C++?",
                options: ["<fstream>", "<file>", "<iostream>", "<stdfile>"],
                correctAnswer: 0,
            },
            {
                // Question 44
                question: "What is the output of 'sizeof(double)' on most systems?",
                options: ["4", "8", "10", "16"],
                correctAnswer: 1,
            },
            {
                // Question 45
                question: "What does the term 'overriding' mean in C++?",
                options: ["Creating a method with the same name and signature in a subclass.", "Creating a method with a different signature in a subclass.", "Using a template to create multiple methods.", "Calling a base class method."],
                correctAnswer: 0,
            },
            {
                // Question 46
                question: "Which container in STL stores unique keys in sorted order?",
                options: ["Vector", "Set", "Map", "Deque"],
                correctAnswer: 1,
            },
            {
                // Question 47
                question: "What is the difference between 'std::vector' and 'std::array'?",
                options: ["Vectors have dynamic size, while arrays have fixed size.", "Arrays are faster than vectors.", "Vectors cannot store non-primitive types.", "There is no difference."],
                correctAnswer: 0,
            },
            {
                // Question 48
                question: "Which of the following is true about 'std::multimap'?",
                options: ["It stores unique keys.", "It allows duplicate keys.", "It is not sorted.", "It does not use iterators."],
                correctAnswer: 1,
            },
            {
                // Question 49
                question: "What is the default return type of 'main()' in C++?",
                options: ["void", "int", "float", "No default type."],
                correctAnswer: 1,
            },
            {
                // Question 50
                question: "Which keyword is used to inherit a class in C++?",
                options: ["inherits", "derives", "extends", "None of the above"],
                correctAnswer: 3,
            }
        ]
    }
]