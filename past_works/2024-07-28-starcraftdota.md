# How AI designed differently or Dota2 and StarCraft II
Go is considered to be the most complex board game. But video games could be more complex that Go.
AlphaGo beat human at 2016, but Dota2 and Starcraft2 were not solved until 2019.

|         | **Go**                          | **StarCraft II**                       | **Dota 2**                              |
|------------------------|----------------------------------|----------------------------------------|------------------------------------------|
| **Game Type**          | Turn-based, 1v1                 | Real-time, 1v1               | Real-time team game, 5v5                 |
| **Information**        | Fully observable                | Partially observable (fog of war)     | Partially observable (fog of war)       |
| **Action Space**       | ~250 discrete moves             | Thousands of actions | Thousands of actions|
| **Time Horizon**       | ~150 moves                      | 20,000+ ticks per game                | 20,000+ ticks per game                   |
| **Temporal Nature**    | Turn-based                      | Real-time                             | Real-time                                |
| **Control Complexity** | One move at a time              | Hundreds of units           | One hero per agent, team synergy         |
| **Collaboration**      | Single-agent                    | Single-agent                          | Multi-agent coordination                 |

---

In recent years, **AlphaStar** (by DeepMind) and **OpenAI Five** (by OpenAI) have stood out as groundbreaking AI systems that defeated top human players in some of the most complex real-time strategy games: **StarCraft II** and **Dota 2**.


This post will walk you through **how AlphaStar and OpenAI Five handle time** differently.
---

##  AlphaStar: Transformers on a Single Snapshot

AlphaStar processes the game **frame by frame**.

### Input:
At each time step, AlphaStar takes a **set of entities** (e.g., units, buildings, etc.), where each entity is represented by features like health, position, type, etc. This forms a **structured input sequence** — not in time, but in space.

### Architecture:
- A **Transformer encoder** processes this unordered list of entities.
- **Self-attention** allows the model to understand relationships between units (e.g., who is attacking whom, who’s in danger).
- A **Pointer Network** is used for output to select actions targeting specific entities or positions.

>  AlphaStar doesn’t model time explicitly — **each frame is processed independently**. Temporal understanding must be inferred indirectly through state variables like cooldown timers or health deltas.

---

##  OpenAI Five: LSTM Over Time

In contrast, OpenAI Five **models a sequence of time steps**.

### Input:
Every agent (one per hero) observes the environment **every 4 frames**, resulting in **a long sequence of observations** — up to 20,000 steps in a full match.

### Architecture:
- A **single-layer LSTM** with 1024 hidden units captures the agent’s past observations and actions.
- This allows the agent to **remember previous events**, such as skill usage, movement patterns, or enemy behavior.

>  OpenAI Five relies heavily on explicit memory. It passes and updates the `hidden_state` between steps, allowing the AI to form **temporal context** and learn long-horizon strategies.

## Why the design differ between AlphaStar and OpenAI Five

The two games require different types of intelligence:

- **StarCraft II** (AlphaStar):
  - Heavy emphasis on **multi-unit spatial micromanagement**.
  - Needs to understand "who is doing what" in the current frame.
  - Time can be indirectly inferred from unit states (e.g., cooldowns).
  - Transformer excels at modeling **relations between entities**.

- **Dota 2** (OpenAI Five):
  - Involves **long-horizon team strategies** and skill combos.
  - Agents need memory of past actions, enemy sightings, map control.
  - LSTM is better suited for capturing **sequential decision patterns**.

