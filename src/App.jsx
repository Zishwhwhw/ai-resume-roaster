import React, { useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!input) return alert("Please enter some details.")
    setLoading(true)
    
    const apiKey = prompt("Enter your Gemini API Key to test (or we would charge $19/mo here!):")
    if (!apiKey) { setLoading(false); return; }

    const promptText = `You are a brutal FAANG recruiter. Roast this resume, then provide a polished rewrite: \n\nUSER INPUT:\n${input}`

    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
      })
      const data = await res.json()
      setResult(data.candidates[0].content.parts[0].text)
    } catch (e) {
      alert("Error generating content.")
    }
    setLoading(false)
  }

  return (
    <div className="container">
      <h1 className="hero-title">RoastMyResume <span>AI</span></h1>
      <p className="hero-subtitle">Brutally Honest Tech Resume Fixer</p>
      
      <div className="glass-panel">
        <p style={{marginBottom: '16px', color: '#cbd5e1'}}>Get your dev resume roasted by AI, followed by an ATS-friendly rewrite that gets interviews.</p>
        <textarea 
          placeholder="Enter details here..." 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleGenerate}>
          {loading ? 'Generating Magic...' : 'Generate with AI'}
        </button>
        
        {result && (
          <div className="result">
            {result}
          </div>
        )}
      </div>
      
      <p style={{marginTop: '40px', color: '#64748b', fontSize: '14px'}}>
        Ready to monetize? Connect Stripe and charge $15/month.
      </p>
    </div>
  )
}

export default App
