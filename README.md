# React Interview

## Overview

This React interview is designed to assess a candidate's practical coding skills, problem-solving approach, and development workflow in a real-time environment. The interview focuses on building a interactive social media post component with progressive feature implementation.

Interview is designed for Junior Developers with 1-3 years of software development experience. 

### Goals
- **Evaluate technical skill level**: Assess React proficiency, JavaScript fundamentals, and component architecture understanding
- **Observe work process**: Monitor coding approach, debugging strategies, and code organization
- **Analyze problem-solving**: Understanding how candidates break down requirements and prioritize tasks
- **Review coding practices**: Code style, naming conventions, component structure, and best practices

### Interview Format
- **Duration**: Approximately 60-120 minutes
- **Platform**: Google Meet with screen sharing
- **Format**: Live coding session where the candidate shares their screen
- **Interaction**: Interviewer observes and may ask questions about approach and decisions

### Why Live Coding?
We conduct this interview live to gain insights into:
- **Thought process**: How you approach and break down problems
- **Coding workflow**: Your development rhythm and habits
- **Communication skills**: How you explain your reasoning and ask clarifying questions
- **Debugging approach**: How you identify and resolve issues
- **Priority management**: How you tackle multiple requirements and make trade-offs
- **Adaptability**: How you handle unexpected challenges or requirement changes

### Rules and Guidelines

#### ✅ Allowed
- All standard development tools and resources
- Google search and documentation lookup
- Stack Overflow and technical forums
- AI tools for **information gathering only** (e.g., syntax questions, documentation)
- Any libraries or frameworks you're comfortable with

#### ❌ Not Allowed
- Using AI to generate complete solutions or code blocks
- Copy-pasting large code segments from external sources
- Having someone else write the code for you
- Using AI to solve the specific interview problems

#### 📝 Expectations
- **Code everything yourself**: Demonstrate your actual coding abilities
- **Think out loud**: Explain your approach and reasoning
- **Ask questions**: Clarify requirements when uncertain
- **Show your process**: Don't worry about making mistakes—we want to see how you work through them

## Interview Tasks

The following tasks should be completed progressively. Each step builds upon the previous one, creating a fully functional social media post component.

## Step 0 

Let's get ready to hack!

Clone this repository or create new React app skeleton with your favorite tooling. 

If you decide to create a new React app skeleton these API endpoints are all you need to get started. 

```typescript
const BASE = "https://jsonplaceholder.typicode.com";
const COMMENTS_ENDPOINT = `${BASE}/comments`;
const POSTS_ENDPOINT = `${BASE}/posts`;
``` 

## Step 1 

Render all posts. Create "Show comments" button at the end of each post. 

Design:
![Step 1](image.png)

## Step 2 

"Show comments" functionality. 

Renders all comments under the post.

Design:
![Step 2](image-1.png)


## Step 3 

Like & Dislike functionality.

User can't like and dislike the post at the same time. Like negates dislike and vice versa. 

Deisgn: 
![Step 4](image-3.png)


## Step 4

Limit the amount of comments shown. Default about should be 2. 

Load comments functionality. User can load more comments by pressing "Load more comments".

![Step 4](image-3.png)

## Step 5 

Reply to a comment. Nest comment under the parent comment. 

No deisgn. Go nuts, bonus step.

## Tips for Success
- Start simple and iterate
- Focus on functionality first, then improve styling
- Don't hesitate to refactor as you progress
- Communicate your decisions and any assumptions you're making
- Manage your time across all steps rather than perfecting just one
