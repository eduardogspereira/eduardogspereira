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

## Sources

1. Own Experience
1. Pragmatical Programmer
1. The Mythical Man-Month
1. Clean Architecture
1. Clean Coder
1. Architectural Styles and Design of Network-based Software Architecture
1. Web Performance - Steve Kinney
