export default function handler(req, res) {
  const ideas = [
    "Post 2–3 short videos daily focusing on trending sounds.",
    "Use strong hooks in the first 3 seconds.",
    "Engage with comments within the first hour.",
    "Use niche hashtags and one viral hashtag.",
    "Collaborate with micro-influencers.",
  ]

  const text = `
📈 Growth Strategy:

• ${ideas[0]}
• ${ideas[1]}
• ${ideas[2]}
• ${ideas[3]}
• ${ideas[4]}

🔥 Content Ideas:
• “Before vs After” videos
• Tutorial-style clips
• Reaction videos
• Behind-the-scenes content

🚀 Posting Tips:
• Best time: 7–9 PM
• Post consistently for 14 days
• Track engagement daily
`

  res.status(200).json({ text })
}
