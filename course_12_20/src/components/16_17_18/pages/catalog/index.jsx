function getContactsHref(id) {
  return `/contacts/${id}`;
}

const data = [
  { title: "Lorem Ipsum" },
  { title: "Hello World" },
  { title: "Sample Title" },
  { title: "JavaScript Array" },
  { title: "Random Title 1" },
  { title: "Another Example" },
  { title: "Array of Titles" },
  { title: "Title Text Here" },
  { title: "Test Title" },
  { title: "StackOverflow" },
  { title: "Programming Languages" },
  { title: "Web Development" },
  { title: "Computer Science" },
  { title: "Data Structures" },
  { title: "Algorithms" },
  { title: "Lorem Ipsum Dolor" },
  { title: "Sample Title 2" },
  { title: "Title Example" },
  { title: "Array of Objects" },
  { title: "Title Number 20" },
];

export default function CatalogPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-5">
          {data.map((item, i) => {
            const href = getContactsHref(i);
            return (
              <article
                key={i}
                className="flex max-w-xl flex-col items-start justify-between bg-green-400"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <a
                    href={href + "?q=hello"}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {href}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    TITLE
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {item.title}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6"></div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
      </div>
    </div>
  );
}
