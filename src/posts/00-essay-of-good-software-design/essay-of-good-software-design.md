---
title: Essay of a Good Software Development Workflow
author: Eduardo G. S. Pereira
slug: /blog/essay-good-software-development-workflow
category: software
tags: '#development'
date: 2020-04-16T11:00:00.619Z
---

<img src="/wp-content/uploads/20200416/mm.png" />

## Introduction

I listed some points from what I consider that a software product workflow must have to be successful. These are points built from a mix of hands-on experience and ideas from books that I read.

Software development is a discipline with a lot of trade-offs and each flow have their characteristics, so, maybe all the points I'm listing here don't make any sense for another developer that has a completed different experience from my own.

Also, this is an ongoing list. The purpose of this list in the first place is to build a reference for myself :). I may remove or add new points in the future.

---

## The Whole Team

- All the members of the team must trust each other. <sup>1, 2, 5</sup>
- Don't live with broken windows! If you have some debt tech, attack it to clean your product. <sup>2</sup>
- It's good to have someone handle the communication with the team and external sources. <sup>1</sup>
  - For sure that all developers should be involved in the communication, especially if it's communication with the users. But it's good to have someone that can make this bridge in stressful situations.
- Be aware the product is for the user. Bring them close to development! Learn how to find the 'good enough point' of the software for your client. <sup>2</sup>
- Break the deliveries at the smallest possible pieces that can aggregate value to the business. <sup>1, 2</sup>
- Always keep the work visible for everybody. Communicate the presence of the team. <sup>2</sup>
- Learn to have a sense of `momentum` instead of urgency.
  - http://testobsessed.com/2020/02/momentum-urgency/
- Always be available for questions, clarifications, decisions, and demonstrations. <sup>1, 2, 3</sup>
- Make pair programming a routine of the team. <sup>2</sup>
  - Not only it will have benefits like increase the team ownership of the code. Having two developers coding together reduces the chances of bug at the code.
  - Also, with a second developer help us keep the tech quality higher. With a second person coding together you will be less tended to take shortcuts to finish the task.
- Try to build small and stable teams. <sup>1, 2</sup>
- Take care of the quality of the product. Support the developers that don't understand the break window philosophy and, encourage developers that didn't discover it yet. <sup>2</sup>
  - If the project starts to have many broken windows, the developers will be unhappy to work on the project. <sup>1</sup>
- If you want that the team makes something, schedule it! Otherwise, it won't happen. <sup>2</sup>
- Try to keep multifunctional teams. <sup>1, 2</sup>
- The team must be able to solve all their problems without find blockers or gatekeepers. They must own the workflow they are working on. <sup>1</sup>
- Automate everything possible thing. <sup>1, 2</sup>
- Be aware of the - Cargo Built. <sup>1, 2</sup>
  - When you incorporate something to the team, be sure to explain the essence of what you are trying to do.
- Delivery the code when the user need <sup>1</sup>
  - To achieve it, use Continuous Delivery

---

## The Developer

- Needs to be affectionate for what you are building <sup>2, 5</sup>
- Needs to think about how his tasks related to the team goal <sup>2</sup>
- Needs to think beyond the current problem, having the Big Picture for the company in mind. <sup>2</sup>
- Always ask the 5 whys. <sup>1</sup>
- Need to have a contingency for workflows that s/he can't control. <sup>1</sup>
- Always use the trace bullet strategy <sup>1, 2</sup>
- We should know that one of the functions of a developer is to help people understand their requirements. <sup>2</sup>
- Should always find the bug only once! <sup>1</sup>
  - Understand why the error happened.
  - Write a test that replicated the error behavior.
  - Fix the error :)
- Should avoid the program by coincidence. <sup>1, 2</sup>
- Should follow the 'Boy Scout Rule' <sup>5</sup>
- Should always take a time to reflect about their development week. <sup>1</sup>
  - And thought it gain experience on their craft.
- Always have a good context in the area you will be working. Study about it. <sup>1, 2, 5</sup>

---

## The Project

- Try to always include the users in the development workflow. <sup>2</sup>
  - Avoid construct features that the user won't user.
- Use the Trace Bullets strategy for the project <sup>1, 2</sup>
  - Try to construct the minimal as possible to validate your ideas with the user and from their feedback align the development.
- Always make prototypes to verify if the product will make sense. <sup>1, 2</sup>
  - If the team doesn't understand that a POC is disposable, then use the trace bullet approach.
- All members of the team must know the big picture of the project. <sup>1</sup>
- Always search for extreme cases on the requirements. <sup>2</sup>
  - The client probably already knows the solution, but, it's good to ask to be sure that everybody is aligned.
- The requirements flow should have a good frequency. <sup>1</sup>
  - This allows for adjusting the direction if something shows up.
- Try to always keep short stories. <sup>1, 2</sup>
  - This will encourage developers to search for clarification. Improving the feedback process between coders and clients, before and during the - development process.
- It's important to keep aa glossary of the terms to make sure that everybody is referring to the same thing <sup>2</sup>
- Before trying to think out of the box, try to understand what are the restrictions of the box. Which are the impediments to achieve the goal? <sup>1</sup>
  - Sometimes the hardest part is to find the limitations of the box.
- Always align which is expectative for your user when everything works fine. <sup>1</sup>
  - What should happen?
- Always work on the big restrictions/challenges first. And categorize them! <sup>1</sup>
  - Identifying the biggest restrictions/challenges will make easier to see the whole problem.

---

## The Code

- Always make the program correct. <sup>2</sup>
- Which means a program that makes nothing more and nothing less than it's required.
- Always keep your code easy to be changed. <sup>1, 2, 4</sup>
- Follow the standard from the project you are working on. <sup>1, 3</sup>
  - Try to respect the current structure of the project.
  - But also use good sense.
- Avoid coupling as much as possible. <sup>2, 4</sup>
- Keep your code orthogonal. <sup>2, 4</sup>
  - Avoid coupling
  - Avoid globals
  - Avoid similar functions (use DRY).
- Split your project into layers <sup>2, 4</sup>
  - Each layer will be an abstraction and only will access what is visible at the lower layer.
- Avoid the excessive use of try/catch. <sup>2</sup>
  - For sure there are exceptions.
- Only access the object through their methods, to avoid coupling with their implementation <sup>2</sup>
- Create an abstraction of the services that are being used <sup>2</sup>
- Always ensure that your code is ready to be changed <sup>2</sup>
- Code an "lazy" code. <sup>2</sup>
- Always get feedback while you are advancing your code. <sup>2</sup>
- Use the approach "Tell, Don't Ask" <sup>2, 4</sup>.
  - Respect the encapsulation.
  - Don't make a decision based on the internal state of an object. Instead, call the function that will make this change.
- Only let your code deal with things that it directly knows. <sup>1, 2</sup>
- Avoid use inheritance on your project. <sup>1, 2</sup>
  - Always that is possible, use Interface or Mixings instead.
- Let the validation of the object in a separate object, following the business rules. <sup>2</sup>
- Avoid the maximum as possible the contact between codes. <sup>2</sup>
  - Always that is possible, make the communication using messages.
- Always use UTC! <sup>1, 2</sup>
- Avoid programming by coincidence. <sup>2</sup>
  - Be sure that you know why something is working.
- Try to follow the pattern used by the community on the language that you are working on. <sup>1, 2</sup>
- Use TDD! <sup>1, 2, 4</sup>
- Follow the good practices from the language which you are coding. <sup>0, 2</sup>
- Don't forget to gracious turnoff your services. <sup>1</sup>

---

## Sources

1. Own Experience
1. Pragmatical Programmer
1. The Mythical Man-Month
1. Clean Architecture
1. Clean Coder
1. Architectural Styles and Design of Network-based Software Architecture
