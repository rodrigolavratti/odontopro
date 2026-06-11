export function Footer() {
  return (
    <footer className="py-6 text-center text-sm md:text-base text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} Lavratti Company. Todos os direitos reservados.{" "}
        <span className="hover:text-black duration-300">lavratti@developer.com</span>
      </p>
    </footer>
  )
}
