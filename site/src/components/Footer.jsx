export default function Footer() {
  return (
    <footer className="bg-ink py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center">
        <p className="font-display text-lg text-cream/60">ZACH HAYWOOD</p>
        <p className="font-body text-sm text-muted">
          © {new Date().getFullYear()} Zach Haywood. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
