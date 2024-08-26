# Log Visualization App Documentation

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [System Requirements](#system-requirements)
5. [Installation Guide](#installation-guide)
6. [Usage](#usage)
7. [Visual Representation of Logs](#visual-representation-of-logs)


---

## 1. Overview
The Log Visualization App is a platform to upload, visualize, and analyze log files in real-time through **Sequence Diagrams**. The app processes log files using JavaScript and JSON construction, requiring no backend or database. It operates entirely on the web, making it lightweight and easy to deploy.

## 2. Features
- Upload log files for processing.
- Real-time data visualization through SEQUENCE DIAGRAMS.
- JSON-based log construction for dynamic visualization.
- Filtering options for log events.
- Export visualized data as JSON or image.
- Search and highlight specific log entries.
- Auto-updating log data with a refresh feature.

## 3. Technology Stack
- **Frontend**: React (Vite), HTML5, CSS3, JavaScript
- **Data Handling**: JavaScript and JSON construction (no database)
- **Data Visualization Library**: React Sequence diagrams(<https://www.npmjs.com/package/react-sequence-diagram>)
- **Package Manager**: npm/yarn
- **Version Control**: Git

## 4. System Requirements
- Node.js v14.x or above
- npm v6.x or above / yarn v1.x or above
- Any modern web browser (Chrome, Firefox, Safari)
- 4GB RAM or above (for local setup)

## 5. Installation Guide

### Clone the Repository
```bash
git clone https://github.com/korayv/gnc
cd gnc
npm install
npm run dev
```
## 6. Usage

### Uploading Log Files
1. Navigate to the file upload section.
2. Select the log file from your system.
3. Click on "Upload" to start processing.

### Visualizing Logs
1. The log file will turn to a sequence diagram rapidly.
2. Screenshot your sequence diagram by pressing cmd + shift + 4
3. Change the json and repeat the process.


## 7. Visual Representation of Logs
- **Sequence Diagram**: From the log files some lines are not trackable. So that, using a specific json line tracking system we can now handle what is the call flow now on. We can see the errors from the visualized call flow. 

