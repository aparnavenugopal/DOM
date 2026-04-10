✅ Functional Requirements

1. Input Area
	•	A <textarea> where user types text

⸻

2. Character Counter
	•	Display current count and max limit

Example:
45 / 200

3. Real-Time Updates
	•	Counter updates as user types
	•	Use input event (important)

4. Character Limit
	•	Define a max limit (e.g., 200)
	•	Two possible behaviors (clarify in interview):

Option A (Strict)
	•	Prevent typing beyond limit (maxlength)

Option B (Flexible - better)
	•	Allow typing but show warning

⚠️ Warning Behavior (VERY IMPORTANT)

1. Normal State
	•	Color: gray/black

⸻

2. Near Limit (e.g., ≥ 80%)
	•	Color: orange

⸻

3. Exceeded Limit
	•	Color: red
	•	Show warning message:

Example:
Character limit exceeded!

🚀 Bonus Features (High Impact)

1. Remaining Characters

Remaining: 155

2. Progress Bar
	•	Visual fill based on usage

⸻

3. Disable Submit Button
	•	If limit exceeded

⸻

4. Auto-resize Textarea
	•	Grows as user types

⸻

5. Debouncing (Advanced)
	•	Optimize heavy operations

⸻

♿ Accessibility
	•	Add label for textarea
	•	Screen reader-friendly counter

⸻

📊 What Interviewer Looks For
	•	Real-time DOM updates
	•	Clean logic
	•	Edge case handling
	•	UX thinking
	•	Code structure

⸻

🔥 What YOU should say in interview

“I’ll listen to the input event, calculate the text length, and dynamically update the UI with warning states based on thresholds.”