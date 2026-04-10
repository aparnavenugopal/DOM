✅ Functional Requirements

Core Features
	1.	Display a counter value (default = 0)
	2.	Provide buttons:
	•	➕ Increment
	•	➖ Decrement
	•	🔄 Reset
	3.	Update UI instantly when user clicks any 
    
⚙️ Behavioral Requirements
	1.	Increment
	•	Increases counter by +1
	2.	Decrement
	•	Decreases counter by -1
	3.	Reset
	•	Sets counter back to 0

🧪 Edge Cases (VERY IMPORTANT in interviews)
	1.	Should counter go below 0?
	•	❓ Clarify OR
	•	✅ Restrict to 0 (common choice)
	2.	Large numbers handling
	•	What if user clicks 1000 times?
	3.	Rapid clicks
	•	App should not break or lag
	4.	Reset behavior
	•	Always resets from any state

🎯 UI / UX Requirements
	1.	Counter value should be:
	•	Clearly visible (large font)
	•	Centered on screen
	2.	Buttons:
	•	Proper spacing
	•	Hover effects
	•	Disabled state (optional for decrement at 0)
	3.	Visual Feedback:
	•	Green color → positive numbers
	•	Red color → negative numbers
	•	Neutral → zero

🧩 DOM Requirements
	1.	Use:
	•	getElementById or querySelector
	2.	Attach event listeners:
	•	click events for buttons
	3.	Update DOM dynamically:
	•	innerText or textContent

🚀 Bonus Features (Product-level expectations)

👉 Add these if interviewer says “extend it”

1. Step Control
	•	Increment by custom value (e.g., +5, +10)

2. Keyboard Support
	•	ArrowUp → Increment
	•	ArrowDown → Decrement

3. Persistence
	•	Save count in localStorage
	•	Reload → retain value

4. Undo Feature
	•	Track previous values

5. Limit Range
	•	Example: Min = 0, Max = 100

6. Animation
	•	Smooth transition when value changes

⸻

🧱 Non-Functional Requirements
	1.	Clean code structure
	2.	Separation of concerns:
	•	HTML → structure
	•	CSS → styling
	•	JS → logic
	3.	Readable variable names
	4.	No global pollution (optional but good)

⸻

🎨 CSS Requirements (Interview Style)

🧱 Layout Requirements
	1.	Center the app
	•	Counter should be vertically & horizontally centered
	•	Use:
	•	Flexbox OR Grid
	2.	Container Design
	•	Card-like UI
	•	Fixed width (e.g., 300px–400px)
	•	Padding inside container
	•	Rounded corners
	3.	Responsive
	•	Should work on:
	•	Mobile
	•	Tablet
	•	Desktop
	•	Avoid overflow issues

⸻

🔢 Counter Display Styling
	1.	Large font size (2.5rem – 4rem)
	2.	Bold text
	3.	Center aligned
	4.	Smooth transition on change (optional but impressive)

🎨 Dynamic Color Requirement
	•	count > 0 → Green
	•	count < 0 → Red
	•	count === 0 → Neutral (black/gray)

⸻

🔘 Button Styling

Common Styles
	•	Same width OR evenly spaced
	•	Padding (8px–12px)
	•	Rounded corners
	•	Cursor pointer

Individual Button Colors
	•	Increment → Green
	•	Decrement → Red
	•	Reset → Gray / Blue

⸻

✨ Button Interactions (IMPORTANT)
	1.	Hover Effect
	•	Slight color change OR brightness increase
	2.	Active (Click) Effect
	•	Scale down (transform: scale(0.95))
	3.	Focus State
	•	Visible outline for accessibility
	4.	Disabled State (optional)
	•	Dimmed color
	•	cursor: not-allowed

⸻

🌗 Theme / Background

Option 1:
	•	Light background (#f5f5f5)

Option 2 (bonus):
	•	Dark mode support
