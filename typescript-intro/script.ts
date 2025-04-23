// Function to add content to the DOM
function addToDOM(title: string, content: string): void {
  const app = document.getElementById("app")
  if (app) {
    const section = document.createElement("div")
    section.className = "section"

    const heading = document.createElement("h2")
    heading.textContent = title

    const contentDiv = document.createElement("div")
    contentDiv.innerHTML = content

    const outputDiv = document.createElement("div")
    outputDiv.className = "output"
    outputDiv.innerHTML = "<strong>Console Output:</strong> Check the browser console (F12) for detailed output"

    section.appendChild(heading)
    section.appendChild(contentDiv)
    section.appendChild(outputDiv)

    app.appendChild(section)
  }
}

// ==========================================
// SECTION 1: Basic Data Types in TypeScript
// ==========================================

// Demonstrating basic data types in TypeScript
console.log("SECTION 1: Basic Data Types in TypeScript")

// String type
const firstName: string = "Emma"
console.log(`String type example: ${firstName}`)

// Number type
const age: number = 28
console.log(`Number type example: ${age}`)

// Boolean type
const isEmployed: boolean = true
console.log(`Boolean type example: ${isEmployed}`)

// Array type (two ways to define)
const hobbies: string[] = ["Reading", "Cycling", "Cooking"]
const scores: Array<number> = [85, 92, 78]
console.log(`Array of strings example:`, hobbies)
console.log(`Array of numbers example:`, scores)

// Tuple type (fixed length array where each element has its own type)
const person: [string, number, boolean] = ["Oliver", 34, true]
console.log(`Tuple example:`, person)

// Enum type (a way to give friendly names to numeric values)
enum WeatherType {
  Sunny = 0,
  Cloudy = 1,
  Rainy = 2,
  Snowy = 3,
}
const todayWeather: WeatherType = WeatherType.Rainy
console.log(`Enum example: Weather today is ${WeatherType[todayWeather]} (${todayWeather})`)

// Any type (can be any type, similar to regular JavaScript)
let dynamicValue: any = "This can be anything"
console.log(`Any type example (as string):`, dynamicValue)
dynamicValue = 42
console.log(`Any type example (changed to number):`, dynamicValue)

// Void type (used for functions that don't return anything)
function logMessage(message: string): void {
  console.log(message)
}
logMessage("Void type example: This function doesn't return anything")

// Null and Undefined
const notDefined: undefined = undefined
const emptyValue: null = null
console.log(`Undefined example:`, notDefined)
console.log(`Null example:`, emptyValue)

// Object type
const personObject: { name: string; age: number } = {
  name: "Charlotte",
  age: 25,
}
console.log(`Object type example:`, personObject)

// Add to DOM
addToDOM(
  "Basic Data Types",
  `
    <p>TypeScript supports various data types that help catch errors during development:</p>
    <ul>
        <li><code>string</code>: For text values like "${firstName}"</li>
        <li><code>number</code>: For numeric values like ${age}</li>
        <li><code>boolean</code>: For true/false values</li>
        <li><code>array</code>: For collections of values</li>
        <li><code>tuple</code>: For fixed-length arrays with specific types</li>
        <li><code>enum</code>: For named constants</li>
        <li><code>any</code>: For dynamic types (similar to regular JavaScript)</li>
        <li><code>void</code>: For functions that don't return values</li>
        <li><code>null</code> and <code>undefined</code>: For absence of values</li>
        <li><code>object</code>: For non-primitive types</li>
    </ul>
`,
)

// ==========================================
// SECTION 2: Variable Assignments & Operations
// ==========================================

console.log("\nSECTION 2: Variable Assignments & Operations")

// Variable declarations with different types
const customerName = "William"
const accountBalance = 1250.75
const isActive = true
const lastPurchase: Date = new Date()

console.log(
  `Customer: ${customerName}, Balance: £${accountBalance}, Active: ${isActive}, Last Purchase: ${lastPurchase}`,
)

// Arithmetic operations
const itemPrice: number = 25.99
const quantity: number = 3
const taxRate: number = 0.2 // 20% VAT in UK

// Calculate subtotal
const subtotal: number = itemPrice * quantity
console.log(`Subtotal (${quantity} items at £${itemPrice}): £${subtotal.toFixed(2)}`)

// Calculate tax
const taxAmount: number = subtotal * taxRate
console.log(`Tax (${taxRate * 100}%): £${taxAmount.toFixed(2)}`)

// Calculate total
const total: number = subtotal + taxAmount
console.log(`Total: £${total.toFixed(2)}`)

// String concatenation
const addressLine1: string = "42 Baker Street"
const addressLine2: string = "London"
const postcode: string = "W1U 6AA"

// Using + operator for concatenation
const fullAddress1: string = addressLine1 + ", " + addressLine2 + ", " + postcode
console.log(`Full address (using + operator): ${fullAddress1}`)

// Using template literals (preferred in modern TypeScript/JavaScript)
const fullAddress2: string = `${addressLine1}, ${addressLine2}, ${postcode}`
console.log(`Full address (using template literals): ${fullAddress2}`)

// Add to DOM
addToDOM(
  "Variable Assignments & Operations",
  `
    <p>TypeScript allows variable assignments with type annotations:</p>
    <pre>let customerName: string = "William";</pre>
    
    <p>Arithmetic operations example:</p>
    <ul>
        <li>Item price: £${itemPrice}</li>
        <li>Quantity: ${quantity}</li>
        <li>Subtotal: £${subtotal.toFixed(2)}</li>
        <li>Tax (20% VAT): £${taxAmount.toFixed(2)}</li>
        <li>Total: £${total.toFixed(2)}</li>
    </ul>
    
    <p>String concatenation can be done in two ways:</p>
    <ol>
        <li>Using + operator: <code>${fullAddress1}</code></li>
        <li>Using template literals: <code>${fullAddress2}</code></li>
    </ol>
`,
)

// ==========================================
// SECTION 3: Conditionals (Truthy/Falsy)
// ==========================================

console.log("\nSECTION 3: Conditionals (Truthy/Falsy)")

// Function to check if a value is truthy or falsy
function checkTruthiness(value: any, description: string): void {
  if (value) {
    console.log(`${description} (${value}) is TRUTHY`)
  } else {
    console.log(`${description} (${value}) is FALSY`)
  }
}

// Check various values
checkTruthiness("Hello", "Non-empty string")
checkTruthiness("", "Empty string")
checkTruthiness(42, "Positive number")
checkTruthiness(0, "Zero")
checkTruthiness(-1, "Negative number")
checkTruthiness(true, "Boolean true")
checkTruthiness(false, "Boolean false")
checkTruthiness(null, "Null")
checkTruthiness(undefined, "Undefined")
checkTruthiness({}, "Empty object")
checkTruthiness([], "Empty array")

// Practical example: Customer eligibility for discount
const loyaltyPoints: number = 120
const membershipLevel: string = "Gold"
const hasPromoCode: boolean = false

let discountPercentage = 0

// Check eligibility based on multiple conditions
if (loyaltyPoints > 100 && membershipLevel === "Gold") {
  discountPercentage = 15
  console.log("Customer qualifies for 15% Gold member discount")
} else if (loyaltyPoints > 50 || membershipLevel === "Silver") {
  discountPercentage = 10
  console.log("Customer qualifies for 10% Silver member discount")
} else if (hasPromoCode) {
  discountPercentage = 5
  console.log("Customer qualifies for 5% promo code discount")
} else {
  console.log("Customer doesn't qualify for any discount")
}

// Ternary operator example
const shippingCost: number = loyaltyPoints > 75 ? 0 : 4.99
console.log(
  `Shipping cost: £${shippingCost} (${loyaltyPoints > 75 ? "Free shipping applied" : "Standard shipping rate"})`,
)

// Add to DOM
addToDOM(
  "Conditionals (Truthy/Falsy)",
  `
    <p>In TypeScript/JavaScript, values are considered either "truthy" or "falsy" in conditional statements.</p>
    
    <p><strong>Falsy values include:</strong></p>
    <ul>
        <li>Empty string ("")</li>
        <li>0</li>
        <li>null</li>
        <li>undefined</li>
        <li>false</li>
        <li>NaN</li>
    </ul>
    
    <p><strong>Everything else is truthy</strong>, including:</p>
    <ul>
        <li>Non-empty strings</li>
        <li>Numbers other than 0</li>
        <li>Arrays (even empty ones)</li>
        <li>Objects (even empty ones)</li>
    </ul>
    
    <p>Practical example: A customer with ${loyaltyPoints} loyalty points and ${membershipLevel} membership qualifies for a ${discountPercentage}% discount.</p>
    
    <p>Ternary operator example: Shipping cost is £${shippingCost} based on loyalty points.</p>
`,
)

// ==========================================
// SECTION 4: Arrays
// ==========================================

console.log("\nSECTION 4: Arrays")

// Create an array of contacts (people in the UK)
const contacts: {
  id: number
  name: string
  age: number
  city: string
  phone?: string // Optional property (note the ?)
  email: string
  active: boolean
}[] = [
  {
    id: 1,
    name: "James Smith",
    age: 32,
    city: "Manchester",
    phone: "07700 900123",
    email: "james.smith@example.co.uk",
    active: true,
  },
  {
    id: 2,
    name: "Emily Johnson",
    age: 28,
    city: "Birmingham",
    email: "emily.j@example.co.uk",
    active: true,
  },
  {
    id: 3,
    name: "Robert Brown",
    age: 45,
    city: "Glasgow",
    phone: "07700 900456",
    email: "robert.brown@example.co.uk",
    active: false,
  },
  {
    id: 4,
    name: "Sarah Wilson",
    age: 36,
    city: "Liverpool",
    phone: "07700 900789",
    email: "sarah.w@example.co.uk",
    active: true,
  },
  {
    id: 5,
    name: "David Taylor",
    age: 41,
    city: "Edinburgh",
    email: "david.t@example.co.uk",
    active: false,
  },
]

// Output the entire array
console.log("Contact list:", contacts)

// Output the number of items in the array
console.log(`Number of contacts: ${contacts.length}`)

// Output a specific item (by index)
console.log(`Second contact: ${contacts[1].name} from ${contacts[1].city}`)

// Array methods
// 1. Find active contacts
const activeContacts = contacts.filter((contact) => contact.active)
console.log(`Active contacts (${activeContacts.length}):`, activeContacts)

// 2. Find contact by name
const foundContact = contacts.find((contact) => contact.name === "Robert Brown")
console.log("Found contact:", foundContact)

// 3. Map to get just the names
const contactNames = contacts.map((contact) => contact.name)
console.log("Contact names:", contactNames)

// 4. Sort contacts by age
const sortedByAge = [...contacts].sort((a, b) => a.age - b.age)
console.log("Contacts sorted by age:", sortedByAge)

// Add to DOM
addToDOM(
  "Arrays",
  `
    <p>Arrays in TypeScript can hold collections of items with specific types.</p>
    
    <p>Our contact list has <strong>${contacts.length} contacts</strong>.</p>
    
    <p>Example contact: ${contacts[1].name} from ${contacts[1].city}</p>
    
    <p>We can perform various operations on arrays:</p>
    <ul>
        <li>Filter: Found ${activeContacts.length} active contacts</li>
        <li>Find: Search for specific contacts by property</li>
        <li>Map: Extract specific properties (e.g., names: ${contactNames.join(", ")})</li>
        <li>Sort: Arrange contacts by properties like age</li>
    </ul>
`,
)

// ==========================================
// SECTION 5: Objects
// ==========================================

console.log("\nSECTION 5: Objects")

// Create a new contact object
const newContact = {
  id: 6,
  name: "Jessica Williams",
  age: 29,
  city: "Bristol",
  email: "jessica.w@example.co.uk",
  active: true,
}

console.log("New contact:", newContact)

// Add a property to the object
newContact.phone = "07700 900321"
console.log("After adding phone:", newContact)

// Modify a property
newContact.city = "Cardiff"
console.log("After changing city:", newContact)

// Create a copy of the object with the spread operator
const contactCopy = { ...newContact }
console.log("Copy of contact:", contactCopy)

// Remove a property (using delete)
delete newContact.phone
console.log("After removing phone:", newContact)

// Object destructuring
const { name, email, age } = newContact
console.log(`Destructured properties: name=${name}, email=${email}, age=${age}`)

// Nested objects
const contactWithAddress = {
  id: 7,
  name: "Thomas Moore",
  age: 38,
  email: "thomas.m@example.co.uk",
  active: true,
  address: {
    street: "10 High Street",
    city: "Oxford",
    postcode: "OX1 1AA",
    country: "United Kingdom",
  },
}

console.log("Contact with nested address:", contactWithAddress)
console.log(
  `${contactWithAddress.name} lives at ${contactWithAddress.address.street}, ${contactWithAddress.address.city}`,
)

// Add to DOM
addToDOM(
  "Objects",
  `
    <p>Objects in TypeScript can have properties with specific types.</p>
    
    <p>We created a new contact:</p>
    <pre>${JSON.stringify(newContact, null, 2)}</pre>
    
    <p>We can:</p>
    <ul>
        <li>Add properties (e.g., adding a phone number)</li>
        <li>Modify properties (e.g., changing city from Bristol to Cardiff)</li>
        <li>Remove properties (e.g., removing the phone number)</li>
        <li>Create copies using the spread operator</li>
        <li>Use destructuring to extract properties</li>
        <li>Create nested objects (e.g., address details)</li>
    </ul>
`,
)

// ==========================================
// SECTION 6: Math Methods
// ==========================================

console.log("\nSECTION 6: Math Methods")

// Basic Math operations
console.log(`Math.PI: ${Math.PI}`)
console.log(`Math.round(3.7): ${Math.round(3.7)}`)
console.log(`Math.floor(3.7): ${Math.floor(3.7)}`)
console.log(`Math.ceil(3.2): ${Math.ceil(3.2)}`)

// Min and Max
const temperatures: number[] = [12, 18, 9, 21, 15, 7, 23]
console.log(`Temperatures: ${temperatures.join(", ")}°C`)
console.log(`Minimum temperature: ${Math.min(...temperatures)}°C`)
console.log(`Maximum temperature: ${Math.max(...temperatures)}°C`)

// Random number generation
const randomDecimal: number = Math.random()
console.log(`Random decimal: ${randomDecimal}`)

// Random integer between min and max (inclusive)
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomAge: number = getRandomInt(18, 65)
console.log(`Random age: ${randomAge}`)

// Distance calculation (using Pythagorean theorem)
function calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
  const dx: number = x2 - x1
  const dy: number = y2 - y1
  return Math.sqrt(dx * dx + dy * dy)
}

const distance: number = calculateDistance(0, 0, 3, 4)
console.log(`Distance between points: ${distance} units`)

// Add to DOM
addToDOM(
  "Math Methods",
  `
    <p>TypeScript includes the JavaScript Math object with various mathematical operations:</p>
    
    <ul>
        <li>Constants: π = ${Math.PI}</li>
        <li>Rounding: round(3.7) = ${Math.round(3.7)}, floor(3.7) = ${Math.floor(3.7)}, ceil(3.2) = ${Math.ceil(3.2)}</li>
        <li>Min/Max: From temperatures [${temperatures.join(", ")}]°C:
            <ul>
                <li>Minimum: ${Math.min(...temperatures)}°C</li>
                <li>Maximum: ${Math.max(...temperatures)}°C</li>
            </ul>
        </li>
        <li>Random numbers: Generate random values between ranges</li>
        <li>Advanced calculations: Distance between points using Pythagorean theorem</li>
    </ul>
`,
)

// ==========================================
// SECTION 7: Date and Time
// ==========================================

console.log("\nSECTION 7: Date and Time")

// Current date and time
const now: Date = new Date()
console.log(`Current date and time: ${now}`)

// Format date components
const day: number = now.getDate()
const month: number = now.getMonth() + 1 // Months are 0-indexed
const year: number = now.getFullYear()
const hours: number = now.getHours()
const minutes: number = now.getMinutes()
const seconds: number = now.getSeconds()

// UK date format (DD/MM/YYYY)
const ukDateFormat: string = `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`
console.log(`UK date format: ${ukDateFormat}`)

// Time format
const timeFormat: string = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
console.log(`Time: ${timeFormat}`)

// Create a specific date
const christmasDay: Date = new Date(2023, 11, 25) // December 25, 2023
console.log(`Christmas Day 2023: ${christmasDay}`)

// Calculate difference between dates
const timeDiff: number = christmasDay.getTime() - now.getTime()
const daysDiff: number = Math.ceil(timeDiff / (1000 * 3600 * 24))
console.log(`Days until Christmas: ${daysDiff}`)

// Add days to a date
function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

const futureDate: Date = addDays(now, 30)
console.log(`Date 30 days from now: ${futureDate}`)

// Add to DOM
addToDOM(
  "Date and Time",
  `
    <p>TypeScript uses JavaScript's Date object for working with dates and times.</p>
    
    <p>Current date and time: <strong>${now}</strong></p>
    
    <p>Formatted as:</p>
    <ul>
        <li>UK date format (DD/MM/YYYY): ${ukDateFormat}</li>
        <li>Time: ${timeFormat}</li>
    </ul>
    
    <p>Date calculations:</p>
    <ul>
        <li>Days until Christmas: ${daysDiff}</li>
        <li>Date 30 days from now: ${futureDate}</li>
    </ul>
`,
)

// ==========================================
// SECTION 8: Summary
// ==========================================

console.log("\nSECTION 8: Summary")

// Add to DOM
addToDOM(
  "Summary",
  `
    <p>This TypeScript introduction has covered:</p>
    
    <ol>
        <li><strong>Basic Data Types</strong>: string, number, boolean, arrays, tuples, enums, etc.</li>
        <li><strong>Variable Assignments</strong>: Declaring variables with type annotations</li>
        <li><strong>Operations</strong>: Arithmetic operations and string concatenation</li>
        <li><strong>Conditionals</strong>: Using if statements and understanding truthy/falsy values</li>
        <li><strong>Arrays</strong>: Creating, accessing, and manipulating arrays</li>
        <li><strong>Objects</strong>: Creating objects, adding/removing properties</li>
        <li><strong>Math Methods</strong>: Using the Math object for calculations</li>
        <li><strong>Date and Time</strong>: Working with dates in TypeScript</li>
    </ol>
    
`,
)
