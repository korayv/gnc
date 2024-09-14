# Log Visualization App Documentation

I have completed my internship in TURKCELL. You can see the deployed website of this project: [BiP Log Visualization Application](<https://biplog.vercel.app/>)
I was responsible with log visualization with sequence diagrams. Log files of BiP application contains thousands of lines. Reading it and controlling the lines is not easy. My project is to present a visual diagram in log files and generate sequence diagrams by parsing the log file.

## Table of Contents

1. [Overview](#1-overview)
2. [Features](#2-features)
3. [Technology Stack](#3-technology-stack)
4. [Installation Guide](#4-installation-guide)
5. [Usage](#5-usage)
6. [Visual Representation of Logs](#6-visual-representation-of-logs)

---

## 1. Overview

The Log Visualization App is a React app to upload, visualize, and analyze log files in real-time through **Sequence Diagrams**. The app processes log files using JavaScript and JSON construction, requiring no backend or database. It operates entirely on the web, client based app that handles the files entirely on the client side (no-server upload, only javascript parse).

## 2. Features

- Upload log files for processing.
- Real-time data visualization through SEQUENCE DIAGRAMS.
- JSON-based log construction for dynamic visualization.
- Filtering options for log events.
- Client-side page, page refresh clears everything. KVKK friendly.
- Search and highlight specific log entries.

## 3. Technology Stack

- **Frontend**: React (Vite), HTML5, CSS3, JavaScript
- **Data Handling**: JavaScript and JSON construction (no database)
- **Data Visualization Library**: [React Sequence diagrams](<https://www.npmjs.com/package/react-sequence-diagram>)
- **Package Manager**: npm/yarn
- **Version Control**: Git

## 4. Installation Guide

### Clone the Repository

#### Clonning the project

```bash
git clone https://github.com/korayv/gnc
cd gnc
```

#### Install requirements and running on local

```bash
npm install
npm run dev

```

## 5. Usage

### Configuring JSON file

This application is handling by default VoIP calls in BiP application.
If you want to configure the JSON file, you can read the documentation here: [JSON File Preparing](how-to-log-json.md)

1. Click Configure JSON button from the topbar which is at the top right.
2. From the pop-up, drag and drop the JSON you prepared.
3. The pop-up will close and the text will change as "Uploaded Log File" right of the button.,

### Uploading Log Files

1. Navigate to the file upload section.
2. Select the log file from your system.

### Visualizing Logs

1. The log file will turn to a sequence diagram rapidly.
2. Screenshot your sequence diagram by pressing cmd + shift + 4
3. Change the json and repeat the process.

## 6. Visual Representation of Logs

- **Sequence Diagram**: From the log files filtered lines are trackable. So that, using a specific json line tracking system we can now handle what is the call flow now on. We can see the application errors from the visualized call flow.
- **Actor Lines**: This is the vertical lines that represents the lifelines in sequence diagrams.
- **Connector Lines**: This is the lines that connect the actor lines with methods.
- **Note-overs**: You can have boxes over the actor lines. Using note-overs is useful for seeing important events on lifelines. 
- **Timestamp**: Red text over the methods represent time data. 
