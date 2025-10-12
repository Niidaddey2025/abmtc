"use client"

import { useEffect, useState } from "react"

const scriptures = [
  {
    verse: "Go therefore and make disciples of all nations...",
    reference: "Matthew 28:19",
  },
  {
    verse: "How beautiful are the feet of those who bring good news!",
    reference: "Romans 10:15",
  },
  {
    verse: "Here am I. Send me!",
    reference: "Isaiah 6:8",
  },
  {
    verse: "The harvest is plentiful, but the workers are few.",
    reference: "Matthew 9:37",
  },
  {
    verse: "The Lord is my shepherd; I shall not want.",
    reference: "Psalm 23:1",
  },
  {
    verse: "I can do all things through Christ who strengthens me.",
    reference: "Philippians 4:13",
  },
  {
    verse: "Trust in the Lord with all your heart and lean not on your own understanding.",
    reference: "Proverbs 3:5",
  },
  {
    verse: "For God so loved the world that He gave His only Son...",
    reference: "John 3:16",
  },
  {
    verse: "Be still, and know that I am God.",
    reference: "Psalm 46:10",
  },
  {
    verse: "In the beginning, God created the heavens and the earth.",
    reference: "Genesis 1:1",
  },
  {
    verse: "The Lord is my light and my salvation—whom shall I fear?",
    reference: "Psalm 27:1",
  },
  {
    verse: "If God is for us, who can be against us?",
    reference: "Romans 8:31",
  },
  {
    verse: "The joy of the Lord is my strength.",
    reference: "Nehemiah 8:10",
  },
  {
    verse: "For we walk by faith, not by sight.",
    reference: "2 Corinthians 5:7",
  },
  {
    verse: "Delight yourself in the Lord, and He will give you the desires of your heart.",
    reference: "Psalm 37:4",
  },
  {
    verse: "Let everything that has breath praise the Lord.",
    reference: "Psalm 150:6",
  },
  {
    verse: "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.",
    reference: "Matthew 7:7",
  },
  {
    verse: "For I know the plans I have for you, declares the Lord...",
    reference: "Jeremiah 29:11",
  },
  {
    verse: "The Lord will fight for you; you need only to be still.",
    reference: "Exodus 14:14",
  },
  {
    verse: "Cast all your anxiety on Him because He cares for you.",
    reference: "1 Peter 5:7",
  },
  {
    verse: "Your word is a lamp to my feet and a light to my path.",
    reference: "Psalm 119:105",
  },
  {
    verse: "But those who hope in the Lord will renew their strength...",
    reference: "Isaiah 40:31",
  },
  {
    verse: "Blessed are the peacemakers, for they shall be called children of God.",
    reference: "Matthew 5:9",
  },
  {
    verse: "The name of the Lord is a strong tower; the righteous run to it and are safe.",
    reference: "Proverbs 18:10",
  },
  {
    verse: "Be strong and courageous. Do not be afraid; do not be discouraged...",
    reference: "Joshua 1:9",
  },
  {
    verse: "The Lord is good, a refuge in times of trouble.",
    reference: "Nahum 1:7",
  },
  {
    verse: "Commit to the Lord whatever you do, and He will establish your plans.",
    reference: "Proverbs 16:3",
  },
  {
    verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    reference: "Philippians 4:6",
  },
  {
    verse: "The Lord bless you and keep you; the Lord make His face shine on you and be gracious to you.",
    reference: "Numbers 6:24-25",
  },
  {
    verse: "The righteous person may have many troubles, but the Lord delivers him from them all.",
    reference: "Psalm 34:19",
  },
  {
    verse: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
    reference: "Matthew 5:16",
  },
  {
    verse: "Do not be overcome by evil, but overcome evil with good.",
    reference: "Romans 12:21",
  },
  {
    verse: "As for me and my house, we will serve the Lord.",
    reference: "Joshua 24:15",
  },
  {
    verse: "Even though I walk through the valley of the shadow of death, I will fear no evil...",
    reference: "Psalm 23:4",
  },
  {
    verse: "Create in me a clean heart, O God, and renew a right spirit within me.",
    reference: "Psalm 51:10",
  },
  {
    verse: "The Lord is near to all who call on Him, to all who call on Him in truth.",
    reference: "Psalm 145:18",
  },
  {
    verse: "My grace is sufficient for you, for my power is made perfect in weakness.",
    reference: "2 Corinthians 12:9",
  },
  {
    verse: "Come to me, all you who are weary and burdened, and I will give you rest.",
    reference: "Matthew 11:28",
  },
  {
    verse: "We love because He first loved us.",
    reference: "1 John 4:19",
  },
  {
    verse: "In all your ways acknowledge Him, and He will make your paths straight.",
    reference: "Proverbs 3:6",
  },
  {
    verse: "The Lord is my strength and my song; He has become my salvation.",
    reference: "Exodus 15:2",
  },
  {
    verse: "For the Spirit God gave us does not make us timid, but gives us power, love, and self-discipline.",
    reference: "2 Timothy 1:7",
  },
  {
    verse: "Blessed is the man who trusts in the Lord, whose confidence is in Him.",
    reference: "Jeremiah 17:7",
  },
  {
    verse: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
    reference: "2 Corinthians 5:17",
  },
  {
    verse: "He who dwells in the secret place of the Most High shall abide under the shadow of the Almighty.",
    reference: "Psalm 91:1",
  },
  {
    verse: "Taste and see that the Lord is good; blessed is the one who takes refuge in Him.",
    reference: "Psalm 34:8",
  },
  {
    verse: "For we are God’s handiwork, created in Christ Jesus to do good works...",
    reference: "Ephesians 2:10",
  },
  {
    verse: "Rejoice always, pray continually, give thanks in all circumstances.",
    reference: "1 Thessalonians 5:16-18",
  },
  {
    verse: "The grass withers, the flower fades, but the word of our God stands forever.",
    reference: "Isaiah 40:8",
  },
  {
    verse: "Bless the Lord, O my soul, and forget not all His benefits.",
    reference: "Psalm 103:2",
  },
  {
    verse: "And we know that in all things God works for the good of those who love Him...",
    reference: "Romans 8:28",
  },
];


export function ScriptureSection() {
  const [currentScripture, setCurrentScripture] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * scriptures.length)
    setCurrentScripture(randomIndex)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("scripture-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const scripture = scriptures[currentScripture]

  return (
    <section id="scripture-section" className="relative py-32 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img src="/diverse-international-students-worshiping-together.jpg" alt="Students in worship" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 leading-relaxed italic">
              "{scripture.verse}"
            </blockquote>
            <cite className="text-xl md:text-2xl text-secondary font-semibold not-italic">— {scripture.reference}</cite>
          </div>

          <div
            className={`mt-16 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-2xl md:text-3xl text-white font-semibold mb-4">Thousands have already responded...</p>
            <p className="text-xl md:text-2xl text-white/90">Will you be next?</p>
          </div>
        </div>
      </div>
    </section>
  )
}
