sequenceDiagram
Browser->>Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
loop req
Server->>Server: Server store req.body.note to an array called notes, updating the server.
end
Server-->>Browser: URL redirect to /notes
Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
Server-->>Browser: HTML-code
Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
Server-->>Browser: main.css
Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
Server-->>Browser: main.js
Note right of Browser: browser starts executing js-code that requests JSON data from server
Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server-->>Browser: [{content: "HTML is easy", date: "2019-05-23"} ...]
Note right of Browser: browser executes the event handler that renders notes to display
