const nav = ["home", "about", "contact", "products"];

export default function CustomComponent() {
  return (
    <nav className="flex items-center gap-4">
      {nav.map((item, i) => (
        <CustomLink text={item} key={i} />
      ))}
    </nav>
  );
}

function CustomLink({ text }) {
  return (
    <a href="#" className="text-5xl font-semibold">
      {text}
    </a>
  );
}
