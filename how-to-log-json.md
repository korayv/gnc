
# Configurating Log Set

From the log file you can filter the lines and draw the sequence diagram with an easy syntax described here.



## Logset File Includes:

- Logline: The log line that is searched in the log file.
- SequenceNote: The sequence diagram note for drawing the sequence diagram. 

### Regex format
The sequence note is on the dynamic format within the regex. From the matched logline **regex looks inside of the curly braces** such as {{callId}} and writes the patterns like "key: value," where the key is a word, the colon can have spaces around it, and the value is a group of characters without spaces or commas. 

  
## Sequence Diagram Note Syntax

#### Lines and Joints 
```bash
Actor A --> Actor B: Some words
```
This graphes a two actor lines (lifeline) and joints them with an arrow with Some words text on the arrow.

#### Writing on a life line

```bash
Note over Actor A: Some words in a box
```
This graphes a note box on Actor A lifeline and writes note on the lifeline.
___
```bash
Note left of Actor A: Some words in a box
```
This graphes a note box left of Actor A lifeline and writes note on the left side of lifeline.
___
```bash
Note right of Actor A: Some words in a box
```
This graphes a note box right of Actor A lifeline and writes note on the right side of lifeline.
___
> **_NOTE:_**  Please use the colon after the every Actor to write your message.


## Log-set file example for Android log

```javascript
const logSet = [
  {
    logline: "P2PCallManager handleInitiate",
    sequenceNote: "XMPP -> BiP Client A: handleInitiate(from: {{from}} callId: {{callId}})"
  },
  { 
    logline: "P2PCallEventManager sendInfo",
    sequenceNote: "BiP Client A -> XMPP: event(Conferencejoined)",
  },
];
export default logSet;

```

  