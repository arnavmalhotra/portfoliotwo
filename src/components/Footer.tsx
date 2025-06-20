export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-2xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Arnav Malhotra
        </p>
      </div>
    </footer>
  )
}