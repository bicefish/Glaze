# AppPersonas.md

This document outlines four distinct user personas for **$ProjectName**,
designed to guide development, UX design, and marketing strategies.
Each persona now includes a **$ProjectName** section describing how they
would interact with the number-learning feature module.

These personas reflect the app's core philosophy: $CorePhilosophyDescription.

---

## 1. The "Slow Travel" Explorer: Lukas (26)
**"I don't just want to visit a place; I want to speak to it."**

- **Background:** A freelance graphic designer taking a six-month sabbatical
  to backpack through South America and Southern Europe. He prefers staying
  in small villages over tourist hubs.
- **Motivation:** Lukas finds traditional language apps too "clinical." He
  wants to capture local slang and specific phrases he hears in village
  markets that aren't in standard textbooks.
- **LingoMellon Use Case:**
  - **Self-Curated Growth:** He uses the "Add Card" feature immediately after
    a conversation to log a new regional idiom.
  - **Offline Capability:** Crucial for him as he often stays in areas with
    poor connectivity.
  - **Custom Categories:** He creates highly specific accordions like
    "Market Bartering," "Bus Directions," and "Local Slang."
- **Favorite Feature:** The **Drag & Drop Reorder**, allowing him to move
  his most-used "Street Talk" category to the top of his list.

**$ProjectName Use Case:**
Lukas needs numbers fast — bus times, market prices, hostel room numbers.
He opens the **Numeroliste** for a quick reference before heading to a
market and uses the TTS button to get his pronunciation right on the spot.
He has no patience for setup: the fact that the last used language pair is
remembered means he goes straight from tapping "Numero lernen" to hearing
*quarenta y cuatro* without a single extra tap.

In the evenings he runs a short **Quizmodus** session (10 questions, range
1–50, ES → DE direction) to reinforce what he heard during the day.
When he scores poorly on numbers in the 30–40 range, `Nur Fehler üben`
lets him drill exactly those without wading through the ones he already knows.

---

## 2. The Anxious Vacationer: Sarah (34)
**"I just need to know how to ask for help without panicking."**

- **Background:** A project manager from Berlin traveling to France for a
  two-week family holiday. She is nervous about the language barrier,
  especially regarding her daughter's food allergies.
- **Motivation:** Security and quick access. She doesn't want to master the
  language; she wants a digital "safety blanket" for specific situations.
- **LingoMellon Use Case:**
  - **Emergency Mode:** She relies heavily on the "Notfall" category.
  - **Search History:** Sarah uses search chips to quickly pull up recent
    queries like "Milk" or "Bread."
  - **Target-Only Study Mode:** On the plane she uses the **Blur Overlay**
    to quiz herself on basic greetings.
- **Favorite Feature:** The **"Add Missing Word" shortcut** from empty search
  results.

**$ProjectName Use Case:**
Sarah's specific anxiety around numbers is practical: she needs to understand
prices, platform numbers at train stations, and floor numbers in hotels.
She uses the **Numeroliste** on the plane (offline, no connectivity needed)
to browse numbers 1–20 in French — just enough to feel oriented.

She does not use the full Quizmodus. Instead, she opens the Numeroliste,
expands only the `0–9` and `10–19` accordion groups, and taps the TTS
button for each number until she feels confident. The simple two-column
layout (German left, French right, speaker icon) gives her exactly the
structure she needs without overwhelming her.

If she does attempt the quiz, she picks 5 questions, range 1–10. The
tolerant validation (`onze` accepted even with a slight typo) means she
gets positive feedback early, which is exactly what she needs to stay calm.

---

## 3. The Professional Expat: Dr. Aris (42)
**"Precision matters, whether in the clinic or at the grocery store."**

- **Background:** A medical consultant who recently moved from Germany to
  Italy for a year-long contract. He speaks English well but struggles
  with the daily Italian vocabulary required for his new life.
- **Motivation:** Efficiency and organization. He needs to manage a high
  volume of new words ranging from "Leasing Agreement" to "Stethoscope."
- **LingoMellon Use Case:**
  - **ML Kit Translation:** He uses in-app translation to build cards
    accurately without switching between apps.
  - **Data Export:** Aris exports his vocabulary to Excel weekly.
  - **Category Accordions with Emoji Icons:** Allow him to distinguish
    between "Work," "Bureaucracy," and "Hobby" at a glance.
- **Favorite Feature:** **Category Accordions with Emoji Icons.**

**$ProjectName Use Case:**
Dr. Aris encounters numbers daily in high-stakes contexts: apartment
contract numbers, medication dosages, Italian bureaucratic form fields.
He approaches the $ProjectName methodically.

He runs the **Quizmodus** in both directions (DE → IT and IT → DE) for
the full range 1–100, 20 questions per session. He specifically values
the **exact wrong answer display** after a missed question (`Leider falsch!
Die richtige Antwort lautet: 44 / vierundvierzig`) — it is the same
precision he expects from clinical references.

He uses `Nur Fehler üben` as a focused remediation loop until his error
list is empty, treating it like a spaced-repetition pass. He appreciates
that the prototype shares the same storage namespace (`lingomellon_`) as
the main app, which will make future data consolidation straightforward.

---

## 4. The Retired Polyglot: Helga (68)
**"Learning a language keeps my mind sharp and my world large."**

- **Background:** A retired teacher who spends her winters in Spain and
  her summers in Poland. She enjoys the process of "collecting" words
  across multiple languages.
- **Motivation:** Mental exercise and the joy of "opening the gate"
  (the *Mellon* philosophy) to talk to locals she meets during her
  morning walks.
- **LingoMellon Use Case:**
  - **Multi-Language Management:** She maintains five language trees
    simultaneously.
  - **Dark Mode & High Contrast:** (Planned Feature) Essential for
    reading cards in bright sunlight.
  - **Text-to-Speech:** She uses TTS to ensure her pronunciation is
    correct before greeting neighbors.
- **Favorite Feature:** The **Haptic Feedback** during reordering.

**$ProjectName Use Case:**
Helga uses the $ProjectName as a dedicated morning exercise — five
minutes of numbers before her walk, the same way she does a crossword.
She switches between Spanish and Polish on alternating days, keeping
both active in her memory.

She relies heavily on the **TTS button in the Numeroliste** because she
knows that Polish number pronunciation has rules her eye can't infer from
the written form alone. Hearing *czterdzieści cztery* spoken correctly is
more valuable to her than reading it.

In the Quizmodus she prefers the direction `[Zielsprache] → DE` (she
reads the foreign word and types the German equivalent), as this mirrors
how she encounters numbers in real life: a shop sign in Spanish, a
platform display in Polish. She uses 10-question sessions with a range
of 1–100, and she always works through `Nur Fehler üben` until her score
is perfect — for her, leaving the session with any open errors feels
incomplete.

---

## Cross-Persona Design Implications for $ProjectName

| Concern | Implication |
|---|---|
| Offline-first (Lukas, Sarah) | All number data is generated algorithmically at runtime; no network needed. TTS uses cached ML Kit voices via `AssetContext`. |
| Low-friction entry (Sarah) | Language pair is persisted. Last settings are restored on reopen. No mandatory quiz setup for Numeroliste. |
| Precision feedback (Dr. Aris) | Wrong answers always show both arabic numeral and full written form. Levenshtein tolerance is strict for short numbers. |
| Multi-language switching (Helga) | Language pair picker is the first control on `ZahlenMenuScreen`. Switching is one tap. |
| i18n readiness (all) | All UI strings go through `t('key')` from `utils/strings.js`. German is the source key. Adding an English or Spanish UI translation requires only updating that file. |
