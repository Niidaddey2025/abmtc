"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, Download, Headphones, Music } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function ResourcesPage() {
  const t = useTranslations('resources')
  const videos = [
    {
      title: t('videos.items.video1.title'),
      url: "https://www.youtube.com/watch?v=1F1f0vtSgKc",
      thumbnail: "https://img.youtube.com/vi/1F1f0vtSgKc/hqdefault.jpg",
    },
    {
      title: t('videos.items.video2.title'),
      url: "https://www.youtube.com/watch?v=G87HlDEP0Lg",
      thumbnail: "https://img.youtube.com/vi/G87HlDEP0Lg/hqdefault.jpg",
    },
    {
      title: t('videos.items.video3.title'),
      url: "https://www.youtube.com/watch?v=YBFBxfKZ-ag&pp=0gcJCQMKAYcqIYzv",
      thumbnail: "https://img.youtube.com/vi/YBFBxfKZ-ag/hqdefault.jpg",
    },
    {
      title: t('videos.items.video4.title'),
      url: "https://www.youtube.com/watch?v=hqUaDq1sjIQ",
      thumbnail: "https://img.youtube.com/vi/hqUaDq1sjIQ/hqdefault.jpg",
    },
    {
      title: t('videos.items.video5.title'),
      url: "https://www.youtube.com/watch?v=ev8ZbnhOdx4",
      thumbnail: "https://img.youtube.com/vi/ev8ZbnhOdx4/hqdefault.jpg",
    },
    {
      title: t('videos.items.video6.title'),
      url: "https://www.youtube.com/watch?v=aiSj5srDxAk",
      thumbnail: "https://img.youtube.com/vi/aiSj5srDxAk/hqdefault.jpg",
    },
  ]
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* E-Books Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('ebooks.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('ebooks.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EbookCard
                title={t('ebooks.book1.title')}
                author={t('ebooks.book1.author')}
                downloadUrl="https://dagbooks.org/details?download_id=250"
                imageSrc="https://dagbooks.org/wp-content/uploads/2024/03/100_percent_answered_prayer-191x300.webp"
              />
              <EbookCard
                title={t('ebooks.book2.title')}
                author={t('ebooks.book2.author')}
                downloadUrl="https://dagbooks.org/details?download_id=260"
                imageSrc="https://dagbooks.org/wp-content/uploads/2024/03/a_good_general-191x300.webp"
              />
              <EbookCard
                title={t('ebooks.book3.title')}
                author={t('ebooks.book3.author')}
                downloadUrl="https://dagbooks.org/details?download_id=280"
                imageSrc="https://dagbooks.org/wp-content/uploads/2024/03/am_i_good_for_nothing-191x300.webp"
              />
              <EbookCard
                title={t('ebooks.book4.title')}
                author={t('ebooks.book4.author')}
                downloadUrl="https://dagbooks.org/details?download_id=281"
                imageSrc="https://dagbooks.org/wp-content/uploads/2024/03/amplify_your_ministry-191x300.webp"
              />
              <EbookCard
                title={t('ebooks.book5.title')}
                author={t('ebooks.book5.author')}
                downloadUrl="https://dagbooks.org/details?download_id=285"
                imageSrc="https://dagbooks.org/wp-content/uploads/2024/03/anagkazo-191x300.webp"
              />
              <EbookCard
                title={t('ebooks.book6.title')}
                author={t('ebooks.book6.author')}
                downloadUrl="https://dagbooks.org/details?download_id=290"
                imageSrc="https://dagbooks.org/wp-content/uploads/2024/03/attempt_great_things_for_god-193x300.webp"
              />
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Link href="https://dagbooks.org/" target="_blank" rel="noopener noreferrer">
                  {t('ebooks.seeMore')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Books Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('audiobooks.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('audiobooks.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AudiobookCard
                title={t('audiobooks.book1.title')}
                author={t('audiobooks.book1.author')}
                downloadUrl="https://dagspeaking.org/"
                imageSrc="https://dagspeaking.org/wp-content/uploads/2024/09/Key-facts-for-new-believers-188x300.webp"
              />
              <AudiobookCard
                title={t('audiobooks.book2.title')}
                author={t('audiobooks.book2.author')}
                downloadUrl="https://dagspeaking.org/"
                imageSrc="https://dagspeaking.org/wp-content/uploads/2024/09/Awake-o-sleeper-188x300.webp"
              />
              <AudiobookCard
                title={t('audiobooks.book3.title')}
                author={t('audiobooks.book3.author')}
                downloadUrl="https://dagspeaking.org/"
                imageSrc="https://dagspeaking.org/wp-content/uploads/2024/09/Weeping-and-gnashing-188x300.webp"
              />
              <AudiobookCard
                title={t('audiobooks.book4.title')}
                author={t('audiobooks.book4.author')}
                downloadUrl="https://dagspeaking.org/"
                imageSrc="https://dagspeaking.org/wp-content/uploads/2024/09/Prayer-changes-things-188x300.webp"
              />
              <AudiobookCard
                title={t('audiobooks.book5.title')}
                author={t('audiobooks.book5.author')}
                downloadUrl="https://dagspeaking.org/"
                imageSrc="https://dagspeaking.org/wp-content/uploads/2024/09/Jezebel-a-woman-out-of-order-188x300.webp"
              />
              <AudiobookCard
                title={t('audiobooks.book6.title')}
                author={t('audiobooks.book6.author')}
                downloadUrl="https://dagspeaking.org/"
                imageSrc="https://dagspeaking.org/wp-content/uploads/2024/09/The-word-of-my-patience-188x300.webp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('videos.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('videos.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <img src={video.thumbnail} alt={video.title} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{video.title}</h3>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={video.url} target="_blank" rel="noopener noreferrer">
                      {t('videos.watch')}
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Link href="https://www.youtube.com/@DagHewardMillsvideos/videos" target="_blank" rel="noopener noreferrer">
                  {t('videos.seeMore')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('music.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('music.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <MusicCard
                title={t('music.items.track1.title')}
                imageSrc="https://firstlovemusic.org/wp-content/uploads/2024/10/01-Shiela-Strange-Woman-mp3-image-300x300.jpg"
                url="https://firstlovemusic.org/track/7-great-principles/"
              />
              <MusicCard
                title={t('music.items.track2.title')}
                imageSrc="https://firstlovemusic.org/wp-content/uploads/2024/10/01-I-Cant-Go-Without-Your-Presence-mp3-image-300x298.jpg"
                url="https://firstlovemusic.org/track/a-faithful-friend/"
              />
              <MusicCard
                title={t('music.items.track3.title')}
                imageSrc="https://firstlovemusic.org/wp-content/uploads/2024/10/01-Give-Your-Life-to-Christ-mp3-image-300x300.png"
                url="https://firstlovemusic.org/track/a-great-door/"
              />
              <MusicCard
                title={t('music.items.track4.title')}
                imageSrc="https://firstlovemusic.org/wp-content/uploads/2024/10/a-lovely-diamond-concert-1-300x300.webp"
                url="https://firstlovemusic.org/track/a-lovely-diamond/"
              />
              <MusicCard
                title={t('music.items.track5.title')}
                imageSrc="https://firstlovemusic.org/wp-content/uploads/2024/10/01-Choose-Me-Use-Me-mp3-image-300x300.jpg"
                url="https://firstlovemusic.org/track/a-mega-church/"
              />
              <MusicCard
                title={t('music.items.track6.title')}
                imageSrc="https://firstlovemusic.org/wp-content/uploads/2024/10/01-Shiela-Strange-Woman-mp3-image-300x300.jpg"
                url="https://firstlovemusic.org/track/a-soul-is-a-soul/"
              />
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}

function EbookCard({
  title,
  author,
  downloadUrl,
  imageSrc,
}: {
  title: string
  author: string
  downloadUrl: string
  imageSrc?: string
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div
        className={`aspect-[3/4] rounded-lg mb-4 overflow-hidden ${
          imageSrc
            ? "bg-muted"
            : "bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
        }`}
      >
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="h-full w-full object-cover" />
        ) : (
          <BookOpen className="w-16 h-16 text-primary" />
        )}
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{author}</p>
      <Button asChild className="w-full bg-primary hover:bg-primary/90">
        <Link href={downloadUrl} target="_blank" rel="noopener noreferrer">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Link>
      </Button>
    </Card>
  )
}

function AudiobookCard({
  title,
  author,
  downloadUrl,
  imageSrc,
}: {
  title: string
  author: string
  downloadUrl: string
  imageSrc?: string
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div
        className={`aspect-square rounded-lg mb-4 overflow-hidden ${
          imageSrc
            ? "bg-muted"
            : "bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center"
        }`}
      >
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="h-full w-full object-cover" />
        ) : (
          <Headphones className="w-16 h-16 text-secondary" />
        )}
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{author}</p>
      <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
        <Link href={downloadUrl} target="_blank" rel="noopener noreferrer">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Link>
      </Button>
    </Card>
  )
}

function MusicCard({ title, imageSrc, url }: { title: string; imageSrc: string; url: string }) {
  const t = useTranslations('resources')
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="aspect-square rounded-lg mb-4 overflow-hidden bg-muted">
        <img src={imageSrc} alt={title} className="h-full w-full object-cover" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-4 line-clamp-2">{title}</h3>
      <Button asChild className="w-full bg-primary hover:bg-primary/90">
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {t('music.listen')}
        </Link>
      </Button>
    </Card>
  )
}
